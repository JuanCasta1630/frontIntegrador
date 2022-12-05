import GET from "./GET"

export default function POSTLOGIN ({ keyword,  email, password }){
      const api_URL = `http://3.136.234.160:8080/${keyword}`
       
         return fetch(api_URL,{
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               'email': email,
               'password': password
            })
            
      }).then( response => response.json()).then(data => {
         localStorage.setItem("jwt", data.token)
         GET({keyword: `usuarios/porEmail/${email}`}).then( ( data ) => { 
            let datos = JSON.stringify(data);
            localStorage.setItem('usuario', datos)
         } )
      })
      .catch(() => {})
   }