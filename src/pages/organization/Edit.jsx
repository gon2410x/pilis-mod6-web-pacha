import React from 'react'
import { useParams } from 'react-router-dom';
import FormOrganization from '../../components/FormOrganization';


const Edit = () => {
  const { organization_name , 
          phone             , 
          email             , 
          organization_type , 
          province          , 
          department        , 
          location 
        } = useParams();
        
        console.log("edit ::: ", organization_name, phone, email, organization_type, province, department, location);
  return (
    // <h1>sssssssss</h1>
    <FormOrganization organization_name = { organization_name }
                      phone             = { phone             }
                      email             = { email             }
                      organization_type = { organization_type }
                      province          = { province          }
                      department        = { department        }
                      location          = { location          }
                      title             = 'Edit Organization'> 
    </FormOrganization>
    // <FormContainer id={id.id_container} title='Edit Container'></FormContainer>
  )
}

export default Edit;