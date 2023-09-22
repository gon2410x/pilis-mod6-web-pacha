import React, { useEffect, useState , useRef } from "react";
import { sendRequest } from "../functions";
import DivInput        from "./DivInput";
import DivSelect       from "./DivSelect";


const FormOrganization = (params) => {
  const [name, setName] = useState("");

  
  /* <<<>>> */
  const [ organization_name , setOrganization_name ] = params.title === 'Edit Organization' ? useState(params.organization_name)  : useState("");
  const [ phone            , setPhone              ] = params.title === 'Edit Organization' ? useState(params.phone)              : useState("");
  const [ email            , setEmail              ] = params.title === 'Edit Organization' ? useState(params.email)              : useState("");
  const [ organization_type, setOrganization_type  ] = params.title === 'Edit Organization' ? useState(params.organization_type)  : useState("");
  const [ province         , setProvince           ] = params.title === 'Edit Organization' ? useState(params.province)           : useState("");
  const [ department       , setDepartment         ] = params.title === 'Edit Organization' ? useState(params.department)         : useState("");
  const [ location         , setLocation           ] = params.title === 'Edit Organization' ? useState(params.location)           : useState("");
  
  /* arreglos para almacenar listas */

  const [ provinces      , setProvinces       ] = useState([]);
  const [ departments    , setDepartments     ] = useState([]);
  const [ locations      , setLocations       ] = useState([]);

  const NameInput = useRef();
  let method = "POST";
  let url = "/organizations/";
  let redirect = "/";  


  /* traigo la lista de todas las PROVINCES de la BD y lo almaceno en el arreglo provinces */

  const getProvinces = async (e) => {
    try {

      const response = await sendRequest("GET", "", "/provinces");
      
      setProvinces( response.map( x => x.province_name ) );
      setDepartments([]);
      setLocations([]);

    } catch (error) {
      console.error("Error al obtener las opciones desde la API - Provinces", error);
    }
  };

  /* traingo la lista de todos los DEPARTAMENTOS de una determinada provincia y lo almaceno en el arreglo departments*/
  const getDepartments = async (e) => {
    try {
      const response = await sendRequest("POST", "", "/departments",{"province":province});

      setDepartments( response.map( x => x.department_name ) );
      setLocations([]);
    } catch (error) {
      console.error("Error al obtener las opciones desde la API - Department", error);
    }
  };

  /* traigo la lista de todas las LACALIDADES de un determinado departamento y lo guardo en el arreglo locations*/

  const getLocations = async (e) => {
    try {
      const response = await sendRequest("POST", "", "/locations",{"department":department});

      setLocations( response.map( x => x.location_name ) );
    } catch (error) {
      console.error("Error al obtener las opciones desde la API - Locations", error);
    }
  };


  useEffect(() => {
    NameInput.current.focus();
  }, []);

  const save = async (e) => {
    let json;
    e.preventDefault();
    if ( params.title === 'Edit Organization' ) {
      method = "PUT";
      url = "/organizations/" + params.organization_name;
      redirect = "/";
    }

    json = { organization_name,
             phone,
             email,
             organization_type,
             province,
             department,
             location
          };

    const res = await sendRequest( method, params.organization_name, url, json );

    if ( params.title === 'Create Organization' ) {
      setOrganization_name("");
      setPhone("");
      setEmail("");
      setOrganization_type("");
      setProvince("");
      setDepartment("");
      setLocation("");
    }
  
    if (method == "POST" && res.status == true) {
      setName("");
    }
  };


  return (
    <div className="continer-fluid">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card border border-success">
            <div className="card-header border border-success text-white" style={ { backgroundColor: "#21D192"}}>
              {params.title}
            </div>
            <div className="card-body">
              <form onSubmit={save}>


                {/*             ORGANIZATION NAME               */}
                <DivInput
                  type="text"
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  value={ organization_name }
                  className="form-control"
                  placeholder="organization name"
                  required=""
                  ref={NameInput}
                  handleChange={(e) => setOrganization_name(e.target.value)}
                />


                {/*                  PHONE                      */}
                <DivInput
                  type="text"
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  value={ phone }
                  className="form-control"
                  placeholder="phone"
                  required=""
                  ref={NameInput}
                  handleChange={(e) => setPhone(e.target.value)}
                />

                {/*                  EMAIL                      */}
                <DivInput
                  type="text"
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  value={ email }
                  className="form-control"
                  placeholder="email"
                  required=""
                  ref={NameInput}
                  handleChange={(e) => setEmail(e.target.value)}
                />

                {/*              ORGANIZATION TYPE               */}
                <DivInput
                  type="text"
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  value={ organization_type }
                  className="form-control"
                  placeholder="organization type"
                  required=""
                  ref={NameInput}
                  handleChange={(e) => setOrganization_type(e.target.value)}
                />


                {/*                   PROVINCES               */}
                <DivSelect
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  name="province"
                  id="province"
                  value={ province }
                  className="form-control"
                  required=""
                  ref={NameInput}
                  load = { getProvinces }
                  handleChange = { (e) => e.target.value !== "seleccione una opcion" ? setProvince(e.target.value) :"" }

                  options= { provinces }
                />


                {/*                   DEPARTMENTS               */}
                <DivSelect
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  name="department"
                  id="department"
                  value={ department }
                  className="form-control"
                  required=""
                  ref={NameInput}
                  load = { getDepartments }
                  handleChange = { (e) => e.target.value !== "seleccione una opcion" ? setDepartment(e.target.value) :"" }
                  options= { departments }
                />


                {/*                   LOCATIONS              */}
                <DivSelect
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  name="location"
                  id="location"
                  value={ location }
                  className="form-control"
                  required=""
                  ref={NameInput}
                  load = { getLocations }
                  handleChange = { (e) => e.target.value !== "seleccione una opcion" ? setLocation(e.target.value) :"" }
                  options= { locations }
                />

                <div className="d-grid col-10 mx-auto">
                  <button className="btn btn-success" style={ { backgroundColor: "#21D192"}}>
                    <i className="fa-solid fa-save"></i>
                    GUARDAR
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default FormOrganization;