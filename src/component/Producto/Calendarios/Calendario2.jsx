import React, {useState} from 'react'
import Calendar from 'react-calendar'
import './Calendario.css'
import es from 'date-fns/locale/es'
import  { registerLocale } from 'react-datepicker'

registerLocale('es', es)
const Calendario2 = () => {
   const [Dia, setDia] = useState('')
   const onChange = dia => {
      setDia(dia)
      console.log(dia)
   }
   return (
   <Calendar 
      className={'CalendarioSimple'}
        locale='es'
        Days={Dia}
        onChange={onChange}
        selectRange
        minDate={new Date()}
        />
     )
}
export default Calendario2