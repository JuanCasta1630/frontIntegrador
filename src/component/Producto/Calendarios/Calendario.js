import {useState, useEffect, useRef} from 'react';
import { DateRangePicker, RangeSlider} from 'rsuite';
import './Calendario1.css';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';




function Datess(){   
   //const { selectedDates, setSelectedDates } = useContext(SelectedDatesContext)

    const [range, setRange] = useState([
        {
            a: new Date(),
            b: new Date(),
            key: 'selection'
        }
    ])
    // Rango de fechas
    const onChageCalendar = (item) => {

        setRange([item])
        console.log(item)
       // setSelectedDates([item.selection])
    }
   return(

     <DateRangePicker
         block
         onChange={item => onChageCalendar(item)}
         ranges={range}
     />
     
  )
}
export default Datess;

