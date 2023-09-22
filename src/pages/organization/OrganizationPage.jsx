import React,{ useEffect, useState, useRef }  from 'react';
import DivAdd                                 from '../../components/DivAdd';
import DivTable                               from '../../components/DivTable';
import {Link}                                 from 'react-router-dom';
import {confirmation,sendRequest}             from '../../functions';


const OrganizationPage = () => {

  const [ classLoad,    setClassLoad    ] = useState('');
  const [ classTable,   setClassTable   ] = useState('');
  
  
  /* arreglos para almacenar listas */

  const [ organizations,   setOrganizations   ] = useState([]);

  const table_thead = {backgroundColor: "#21D192", color:"white"};
  const table_thead_letter = {color:"#21618c"};

  const NameInput = useRef();


  useEffect(()=>{
    getOrganizations();
    // NameInput.current.focus();
  },[]);

  const getOrganizations = async()=>{

    const res = await sendRequest( 'GET', '', '/organizations', "" );

    console.log("aaaaaaaaaa DATA aaaaaaaaaaaa", res)
    setOrganizations(res);
    setClassTable(''),
    setClassLoad('d-none');
  }
  
  const deleteOrganization = ( organization_name ) => {
    confirmation('/organizations/'+organization_name,'/');
  }


  return (
    <div className='container-fluid'>

      <DivAdd>
        <Link to='create' className='btn font-bolt' style={ { backgroundColor: "#21D192", color:"white"}}>
          <i className='fa-solid fa-circle-plus'></i> <b>ADD ORGANIZATION</b>
        </Link>
      </DivAdd>
      
      <DivTable col='10' off='1' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered table-hover'>

          <thead ><tr>
            <th style={ table_thead } >#</th>
            <th style={ table_thead } >ORGANIZATION</th>
            <th style={ table_thead } >PHONE</th>
            <th style={ table_thead } >EMAIL</th>
            <th style={ table_thead } >ORGANIZACIÓN TYPE</th>
            <th style={ table_thead } >LOCATION</th>
            <th style={ table_thead } >EDIT</th>
            <th style={ table_thead } >DELETE</th></tr></thead>
          {/* <tbody className='table-group-divider'> */}
          <tbody>
          
          {organizations.map((row,i)=>(
            <tr key={row+i}  >
              <td style={ table_thead_letter }>{(i+1)}</td>
              <td style={ table_thead_letter }>{row.organization_name}</td>
              <td style={ table_thead_letter }>{row.phone}</td>
              <td style={ table_thead_letter }>{row.email}</td>
              <td style={ table_thead_letter }>{row.organization_type}</td>
              <td style={ table_thead_letter }>{row.location.department.province.province_name + ", "+row.location.department.department_name+", "+row.location.location_name}</td>
              <td>

              <Link to={'/edit-organization/'+ row.organization_name+"/"
                                + row.phone+"/"
                                + row.email+"/"
                                + row.organization_type+"/"
                                + row.location.department.province.province_name+"/"
                                + row.location.department.department_name+"/"
                                + row.location.location_name
                        } className='btn btn-warning' >

                <i className='fa-solid fa-edit'>Editar</i>
              </Link>   

              </td>
              <td>
              <button  className='btn btn-danger' onClick={()=> deleteOrganization( row.organization_name )}>
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

export default OrganizationPage