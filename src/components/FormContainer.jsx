import React, { useEffect, useState , useRef } from "react";
import { sendRequest } from "../functions";
import DivInput        from "./DivInput";
import DivSelect       from "./DivSelect";
import Swal from "sweetalert2";


const FormContainer = (params) => {
  const [name, setName] = useState("");
  const [options, setOptions] = useState([]);
  
  
  /* <<<>>> */
  const [longitude         , setLongitude          ] = params.title === 'Edit Container' ? useState(params.longitude)          : useState("");
  const [latitude          , setLatitude           ] = params.title === 'Edit Container' ? useState(params.latitude)           : useState("");
  const [ container_type   , setContainer_type     ] = params.title === 'Edit Container' ? useState(params.container_type)     : useState("");
  const [ organization     , setOrganization       ] = params.title === 'Edit Container' ? useState(params.organization)       : useState("");
  const [ province         , setProvince           ] = params.title === 'Edit Container' ? useState(params.province)           : useState("");
  const [ department       , setDepartment         ] = params.title === 'Edit Container' ? useState(params.department)         : useState("");
  const [ location         , setLocation           ] = params.title === 'Edit Container' ? useState(params.location)           : useState("");
  const [street_description, setStreet_description ] = params.title === 'Edit Container' ? useState(params.street_description) : useState("");
  
  /* arreglos para almacenar listas */

  const [ container_types, setContainer_types ] = useState([]);
  const [ organizations  , setOrganizations   ] = useState([]);
  const [ provinces      , setProvinces       ] = useState([]);
  const [ departments    , setDepartments     ] = useState([]);
  const [ locations      , setLocations       ] = useState([]);

  const NameInput = useRef();
  let method = "POST";
  let url = "/containers/";
  let redirect = "/";

  // console.log("-----ZZ : ", params.province);
  // setProvince(params.province);  

  /* traigo la lista de todas las PROVINCES de la BD y lo almaceno en el arreglo provinces */

  const getProvinces = async (e) => {
    try {

      const response = await sendRequest("GET", "", "/provinces");
      
      setProvinces( response.map( x => x.province_name ) );
      console.log(" a b b b b b : ",  provinces);
      setDepartments([]);
      console.log("la localizacion ---> ", locations)
      setLocations([]);
      console.log("la localizacion ---> ", locations)
      console.log("---------  "+e.target.value+ "   --  "+province+department+location)

    } catch (error) {
      console.error("Error al obtener las opciones desde la API - Provinces", error);
    }
  };

  /* traingo la lista de todos lo departamentos de una determinada provincia y lo almaceno en el arreglo departments*/
  const getDepartments = async (e) => {
    try {
      const response = await sendRequest("POST", "", "/departments",{"province":province});

      // console.log(response)
      setDepartments( response.map( x => x.department_name ) );
      setLocations([]);
      console.log("-----depa----"+e.target.value+ "   --  "+province+department+location)
    } catch (error) {
      console.error("Error al obtener las opciones desde la API - Department", error);
    }
  };

  /* traigo la lista de todas las localidades de un determinado departamento y lo guardo en el arreglo locations*/
  const getLocations = async (e) => {
    try {
      const response = await sendRequest("POST", "", "/locations",{"department":department});

      // console.log(response)
      setLocations( response.map( x => x.location_name ) );
      console.log("-----location----   "+ e.target.value + "   --  "+province+department+location)
    } catch (error) {
      console.error("Error al obtener las opciones desde la API - Locations", error);
    }
  };

    /* traie la lista de todos los TYPOS DE CONTAINERS almacenados en la DB y lo almacena en el arreglo container_types */
    const getContainer_types = async (e) => {
      try {  
        const response = await sendRequest("GET", "", "/containertypes");
        
        setContainer_types( response.map( x => x.residuo ) );
  
      } catch (error) {
        console.error("Error al obtener las opciones desde la API - Container Type", error);
      }
    };

    
    /* trae una lista de todas las  << ORGANIZACIÓNES >> 
    almacenados en la DB y lo almacena en el arreglo organizations */

    const getOrganizations = async (e) => {
      try {  
        const response = await sendRequest("GET", "", "/organizations");
        
        setOrganizations( response.map( x => x.organization_name ) );
  
      } catch (error) {
        console.error("Error al obtener las opciones desde la API - Organization", error);
      }
    };

  useEffect(() => {
    NameInput.current.focus();
  }, []);

  const getDepartment = async () => {
    if (params.id != null) {
      const res = await sendRequest("GET", "", url + "/"   + params.id);
      setName(res.data.name);
    }
  };

   // Función para obtener las opciones desde la API
   const getOptionsType = async () => {
    try {
      console.log("options")
      const response = await sendRequest("GET", "", "/api/provinces"); // Reemplaza "/api/options" con la ruta de tu API
      setOptions(response.data); // Establece las opciones en el estado
    } catch (error) {
      console.error("Error al obtener las opciones desde la API", error);
    }
  };

  const save = async (e) => {
    let json2;
    e.preventDefault();
    if (params.id !== null) {
      method = "PUT";
      url = "/containers/" + params.id;
      redirect = "/";
      // if( params.title === 'Edit Container') redirect = "/container";
    }
    json2 = {
      longitude         : longitude,
      latitude          : latitude,
      street_description: street_description,
      province          : province,
      department        : department,
      location          : location,
      organization_name : organization,
      container_type    : container_type,
    };

    // const res = await sendRequest( method, params.id ,  url, {
    //      longitude:longitude, latitude: latitude, street_description: street_description } , redirect);

    // const res = await sendRequest(method, params.id, url, json2, redirect);
    const res = await sendRequest(method, params.id, url, json2);

    if ( params.title === 'Create Container' ) {
      setLatitude("");
      setLongitude("");
      setOrganization("");
      setContainer_type("");
      setProvince("");
      setDepartment("");
      setLocation("");
      setStreet_description("");
    }
  
    if (method == "POST" && res.status == true) {
      setName("");
    }
  };

  const getProvince = async () => {
    if (params.id != null) {
      const res = await sendRequest("GET", "", url + "/"   + params.id);
      setName(res.data.name);
    }
  };

  const getcurrent = () => {
    setProvince("jujuy2");
    console.log("vamos ", province);
  };

  return (
    <div className="continer-fluid">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <div className="card border border-success">
            <div className="card-header  border border-success text-white" style={ { backgroundColor: "#21D192"}}>
              {params.title}
            </div>
            <div className="card-body">
              <form onSubmit={save}>

                 {/*                LONGITUDE                     */}
                <DivInput
                  type="text"
                  icon="fas fa-map-marked-alt"
                  value={longitude}
                  className="form-control"
                  placeholder="longitude"
                  required=""
                  ref={NameInput}
                  handleChange={(e) => setLongitude(e.target.value)}
                />


                {/*                  LATITUDE                      */}
                <DivInput
                  type="text"
                  icon="fa-sharp fa-solid fa-map-location-dot"
                  value={latitude}
                  className="form-control"
                  placeholder="latitude"
                  required=""
                  ref={NameInput}
                  handleChange={(e) => setLatitude(e.target.value)}
                />


                {/*                  CONTAINER TYPES               */}
                <DivSelect
                  type="text"
                  // icon="fas fa-dumpster"
                  icon="fa fa-recycle"
                  name="container type"
                  value={container_type}
                  className="form-control"
                  placeholder="container type"
                  required=""
                  ref={NameInput}
                  load = { getContainer_types  }
                  handleChange = { (e) => e.target.value !== "select container type" ? setContainer_type(e.target.value) :"" }

                  options= { container_types }
                />


                {/*                   ORGANIZATIONS                 */}
                <DivSelect
                  type="text"
                  // icon="fa-sharp fa-solid fa-map-location-dot"
                  icon='fa-building'
                  name="organization"
                  value={organization}
                  className="form-control"
                  placeholder="organization"
                  required=""
                  ref={NameInput}
                  load = { getOrganizations  }
                  handleChange = { (e) => e.target.value !== "select organization" ? setOrganization(e.target.value) :"" }

                  options= { organizations }
                />


                {/*                descripcion del calle               */}
                <DivInput
                  type="text"
                  icon="fas fa-route"
                  value={street_description}
                  className="form-control"
                  placeholder="Direccion"
                  required=""
                  ref={NameInput}
                  handleChange={(e) => setStreet_description(e.target.value)}
                />


                {/*                   PROVINCES               */}
                <DivSelect
                  // icon="fa-sharp fa-solid fa-map-location-dot"
                  icon="fa-map-marker-alt"
                  name="province"
                  id="province"
                  value={ province }
                  className="form-control"
                  required=""
                  ref={NameInput}
                  load = { getProvinces }
                  handleChange = { (e) => e.target.value !== `select province` ? setProvince(e.target.value) :"" }

                  options= { provinces }
                />


                {/*                   DEPARTMENTS               */}
                <DivSelect
                  icon=" fa-map-marker-alt"
                  name="department"
                  id="department"
                  value={ department }
                  className="form-control"
                  required=""
                  ref={NameInput}
                  load = { getDepartments }
                  handleChange = { (e) => e.target.value !== "select department" ? setDepartment(e.target.value) :"" }
                  options= { departments }
                />


                {/*                   LOCATIONS              */}
                <DivSelect
                  icon=" fa-map-marker-alt"
                  name="location"
                  id="location"
                  value={ location }
                  className="form-control"
                  required=""
                  ref={NameInput}
                  load = { getLocations }
                  handleChange = { (e) => e.target.value !== "select location" ? setLocation(e.target.value) :"" }
                  options= { locations }
                />

                <div className="d-grid col-10 mx-auto">
                  <button className="btn btn-success" style={ { backgroundColor: "#21D192"}}>
                    <i className="fa-solid fa-save"></i> GUARDAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
