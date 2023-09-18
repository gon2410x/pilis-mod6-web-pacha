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
        <Link to='create' className='btn btn-success'>
          <i className='fa-solid fa-circle-plus'></i> AGREGAR UNA ORGANIZACIÓN
        </Link>
      </DivAdd>
      
      <DivTable col='10' off='1' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered'>

          <thead><tr><th>#</th><th>ORGANIZATION</th><th>PHONE</th><th>GMAIL</th><th>ORGANIZACIÓN TYPE</th><th>LOCATION</th></tr></thead>
          <tbody className='table-group-divider'>
          
          {organizations.map((row,i)=>(
            <tr key={row+i}>
              <td>{(i+1)}</td>
              <td>{row.organization_name}</td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
              <td>{row.organization_type}</td>
              <td>{row.location.department.province.province_name + ", "+row.location.department.department_name+", "+row.location.location_name}</td>
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