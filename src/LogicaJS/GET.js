

export default function GET({ keyword  }){
const api_URL = `http://localhost:8080/${keyword}`
 
   return fetch(api_URL)
         .then( R => R.json())
         .then( json  => {return json}
   )
}

/*
function Horas(){
   const Horas = ['00:00:00', '01:00:00', '02:00:00' , '03:00:00', '04:00:00' ,'05:00:00', '06:00:00', '07:00:00', '08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00', '21:00:00', '22:00:00', '23:00:00']
   return(
      <>
      <select className='selector'  onChange={e => {setHora(e.target.value)}}>
      {Horas.map((horas, index) => {
         return(
            <option className='selector' key={index} value={horas} >{horas}</option>
            )
         })}
         </select>
         </>
         )
      }
*/