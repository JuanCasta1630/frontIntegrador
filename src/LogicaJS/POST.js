export default function POST({ keyword, nombre, apellido, email, password }){
   const api_URL = `http://3.136.234.160:8080/${keyword}`
    
      return fetch(api_URL,{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            'nombre': nombre,
            'apellido': apellido,
            'email': email,
            'password': password
         })
         
   }).then((json) => {
      if(json){
         return 201
      }else{
         return 'fallo'
      }
   } )
}
 