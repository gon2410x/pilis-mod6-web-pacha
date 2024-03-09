import Swal from "sweetalert2";
// import storage from "./Storage/storage";
import axios from "axios";
import { Link } from "react-router-dom";
import { ButtonLink } from "./components/ui";


export const show_alert = ( msj, icon ) =>{
    Swal.fire( { title:msj, icon:icon, buttonsStyling: true} );
    // Swal.fire({ title:msj, icon:icon, buttonsStyling: true } );
}

export const sendRequest = async(method, params ,url, body ,redir='' ,token=true)=>{
    // if(token){
    if(false){
        const authToken = storage.get('authToken');
        axios.defaults.headers.common['Authorizaion']='Beare'+authToken;
    }
    let res; 
        // body = null;
        // await axios({ method:method, url:url, data: a , }).then(

        url = "http://127.0.0.1:3000/api"+url;
        let consulta = { method:method, url:url, data: body  };

        if( method == "DELETE")[
            consulta = { method:method, url:url  }
        ]
        console.log(consulta)

        await axios(consulta).then(
        // await axios({ method:method, url:url }).then(
        response=>{
            res = response.data,
            // (method != 'POST' && url != "http://127.0.0.1:3000/api"+'/provinces' && url != "http://127.0.0.1:3000/api"+'/containertypes' && url != "http://127.0.0.1:3000/api"+'/organizations') ? show_alert(response.data.message,'success'):'',            
            (url != "http://127.0.0.1:3000/api"+'/containers/list' && 
             url != "http://127.0.0.1:3000/api"+'/provinces'       && 
             url != "http://127.0.0.1:3000/api"+'/departments'     &&
             url != "http://127.0.0.1:3000/api"+'/locations'       &&
             url != "http://127.0.0.1:3000/api"+'/containertypes'  && 
             url != "http://127.0.0.1:3000/api"+'/organizations') ? show_alert(response.data.message,'success'):'';
            console.log("esto  ",response.data)            
            console.log(" aaaaaaaaaaaaaaaaa : ", redir);
            setTimeout(()=>
                (redir !== '') ? window.location.href = redir : '',2000)
        }).catch( (errors) => {
            let desc = '';
            // res = errors.response.data,
            res = errors.response.data.msg;
            console.log("bbbb ERROR bbbbb", res);
            desc = res;
            // errors.response.data.errors.map((e)=>{desc= desc + '' +e})
            show_alert(desc,'error')
        })

        
    
        return res;
}

export const confirmation = async(url, redir)=>{
    const alert = Swal.mixin({buttonsStyling:true});
    alert.fire({
        title:'Are you sure delete '+'?',
        icon:'question', showCancelButton:true,
        confirmButtonText:'<i class= "fa-solid fa-check"></i> Yes, delete',
        cancelButtonText:'<i class= "fa-solid fa-ban"></i> Cancel',
    }).then((result)=>{
        if (result.isConfirmed) {
            sendRequest('DELETE',{},url,redir);
        }
    });
}

export default show_alert;