import React from 'react'
import { useParams } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';


const Edit = () => {
  const { id                 , 
          longitude          , 
          latitude           , 
          container_type     , 
          organization       ,  
          street_description , 
          province           , 
          department         , 
          location 
        } = useParams();

  console.log("iddddd : ", id, longitude, latitude, container_type, organization, street_description, province, department, location)
  return (
    <FormContainer  id                 = { id                 }
                    latitude           = { latitude           }
                    longitude          = { longitude          }
                    container_type     = { container_type     }
                    organization       = { organization       }
                    street_description = { street_description }
                    province           = { province           }
                    department         = { department         }
                    location           = { location           }
                    title              = 'Edit Container'> 
    </FormContainer>
    // <FormContainer id={id.id_container} title='Edit Container'></FormContainer>
  )
}

export default Edit;