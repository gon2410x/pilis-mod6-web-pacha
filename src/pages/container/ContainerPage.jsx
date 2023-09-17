import React,{ useEffect, useState, useRef }  from 'react';
import DivAdd                                 from '../../components/DivAdd';
import DivTable                               from '../../components/DivTable';
import {Link}                                 from 'react-router-dom';
import {confirmation,sendRequest}             from '../../functions';
import DivSelect                              from '../../components/DivSelect';


const Contenedor = () => {
  const [ classLoad,    setClassLoad    ] = useState('');
  const [ classTable,   setClassTable   ] = useState('');
  
  
  /* variables para las busquedas */
  
  const [ container_type,  setContainer_type ] = useState("");
  const [ province,        setProvince       ] = useState("");
  const [ department,      setDepartment     ] = useState("");
  const [ location,        setLocation       ] = useState("");
  
  
  /* arreglos para almacenar listas */
  
  const [ contenedores,    setContenedores    ] = useState([]);  // resultado de la busqueda se almacena en esta lista.
  const [ container_types, setContainer_types ] = useState([]);
  const [ provinces,       setProvinces       ] = useState([]);
  const [ departments,     setDepartments     ] = useState([]);
  const [ locations,       setLocations       ] = useState([]);

  const NameInput = useRef();


  /* traigo la lista de todas las PROVINCES de la BD y lo almaceno en el arreglo provinces */

  const getProvinces = async (e) => {
    try {

      const response = await sendRequest( "GET", "", "/provinces" );
      
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
      const response = await sendRequest( "POST", "", "/departments", { "province": province } );

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
      const response = await sendRequest( "POST", "", "/locations", { "department": department } );

      setLocations( response.map( x => x.location_name ) );
      console.log("-----location----   "+ e.target.value + "   --  "+province+department+location)
    } catch (error) {
      console.error("Error al obtener las opciones desde la API - Locations", error);
    }
  };


    /* traie la lista de todos los TYPOS DE CONTAINERS almacenados en la DB y lo almacena en el arreglo container_types */

    const getContainer_types = async (e) => {
      try {  
        const response = await sendRequest( "GET", "", "/containertypes" );
        
        setContainer_types( response.map( x => x.residuo ) );
  
      } catch (error) {
        console.error("Error al obtener las opciones desde la API - Provinces", error);
      }
    };

  useEffect(()=>{
    getContenedores();
    NameInput.current.focus();
  },[ location, container_type ]);

  const getContenedores = async()=>{

    const search = { province: province, department: department, location: location, residuo: container_type };
    const res = await sendRequest( 'POST', '', '/containers/list', search );

    console.log("aaaaaaaaaa DATA aaaaaaaaaaaa", res)
    setContenedores(res);
    setClassTable(''),
    setClassLoad('d-none');
  }
  
  const deleteContenedor = (id) => {
    confirmation('/containers/'+id,'/');
  }


  return (
    <div className='container-fluid'>


      <div className="card-body">
        <form onSubmit={null}>

          {/*                   PROVINCES               */}
          <DivSelect
            icon="fa-sharp fa-solid fa-map-location-dot"
            name="province"
            id="province"
            value={ province }
            className="form-control"
            required=""
            ref={NameInput}
            load = { getProvinces  }
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

          {/*                  CONTAINER TYPES               */}
          <DivSelect
            type="text"
            icon="fa-sharp fa-solid fa-map-location-dot"
            name="tipo de container"
            value={container_type}
            className="form-control"
            placeholder="container type"
            required=""
            ref={NameInput}
            load = { getContainer_types  }
            handleChange = { (e) => e.target.value !== "seleccione una opcion" ? setContainer_type(e.target.value) :"" }
            options= { container_types }
          />

          <div className="d-grid col-10 mx-auto">
          </div>
        </form>
      </div>


      <DivAdd>
        <Link to='create' className='btn btn-success'>
          <i className='fa-solid fa-circle-plus'></i> AGREGAR
        </Link>
      </DivAdd>
      
      <DivTable col='10' off='1' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered'>

          <thead><tr><th>#</th><th>CONTENEDORES</th><th>LATITUD</th><th>LONGITUD</th><th>LOCALIDAD</th><th>DIRECCION</th><th>ORGANIZACIÓN</th><th>TIPO</th></tr></thead>
          <tbody className='table-group-divider'>
          
          {contenedores.map((row,i)=>(
            <tr key={row+i}>
              <td>{(i+1)}</td>
              <td>{row.id_container}</td>
              <td>{row.latitude}</td>
              <td>{row.longitude}</td>
              <td>{row.location.department.province.province_name + ", "+row.location.department.department_name+", "+row.location.location_name}</td>
              <td>{row.street_description}</td>
              <td>{row.organization.organization_name}</td>
              <td>{row.container_type.residuo}</td>
              <td>

              <Link to={'/edit/'+ row.id_container+"/"
                                + row.longitude+"/"
                                + row.latitude+"/"
                                + row.container_type.residuo+"/"
                                + row.organization.organization_name+"/"
                                + row.street_description+"/"
                                + row.location.department.province.province_name+"/"
                                + row.location.department.department_name+"/"
                                + row.location.location_name
                        } className='btn btn-warning' >
              {/* <Link to={'/edit/'+ row} className='btn btn-warning' > */}
                <i className='fa-solid fa-edit'>Editar</i>
              </Link>   

              </td>
              <td>
              <button  className='btn btn-danger' onClick={()=> deleteContenedor( row.id_container )}>
              <i className='fa-solid fa-trash'>Eliminar</i>               
              </button>
              </td>
            </tr>
          ))}
        
          </tbody>
        </table>

      </DivTable>

    </div>
  )
}

export default Contenedor