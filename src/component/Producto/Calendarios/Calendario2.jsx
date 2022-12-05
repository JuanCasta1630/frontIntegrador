import * as React from 'react';
import { useEffect, useRef, useState, useContext } from 'react'
import { SelectedDatesContext } from './hooks/UseContext';
import { DateRange } from 'react-date-range'
import './Calendario.css'
import { Container } from '@mui/material';
import addDays from 'date-fns/addDays';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import Data from './db.json';



const Calendario2= () => {
    const { excludeDateIntervals } = useContext(SelectedDatesContext)
    const [excludedDates, setExcludedDates] = useState([])
    const [arrayOfDayDiff, setArrayOfDayDiff] = useState(0);
    const now = useRef(new Date());
   

    // MANEJO DE RESERVAS //
    const { selectedDates, setSelectedDates } = useContext(SelectedDatesContext)

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            maxSpan: new Date(),
            key: 'selection'
        }
    ])
    // Rango de fechas
    const onChageCalendar = (item) => {
        setRange([item.selection])
        setSelectedDates([item.selection])
    }

    // Persistencia de fechas mediante Context
    useEffect(() => {
        if (selectedDates) {
            setRange(selectedDates)
        }
    }, [selectedDates])


    // Le doy formato a las fechas que vienen de la DB
    useEffect(() => {
        if (excludeDateIntervals) {
            const exclude = excludeDateIntervals.map(el => {
                return {
                    start: new Date(el?.checkin),
                    end: new Date(el?.checkout)
                }
            })
            setExcludedDates(exclude);
        }

    }, [excludeDateIntervals])


    // Data de reservas
    const excludeDays = () => {
        const arrayDateDisable = []
        const aux = []
        if (!excludedDates) return arrayDateDisable;

        console.log(excludedDates);
        for (let i = 0; i < excludedDates.length; i++) {

            // Each day between 6 October 2014 and 10 October 2014:
            const result = eachDayOfInterval({
                start: addDays(new Date(excludeDateIntervals[i].checkin), 1),
                end: addDays(new Date(excludeDateIntervals[i].checkout), 1)
            })
            aux.push(result)
        }
        console.log(aux);
        aux.forEach(element => {
            element.forEach(item => {
                arrayDateDisable.push(item)
            });
        });
        return arrayDateDisable
    }


    // const arrayFechas = [
    //     addDays(new Date(), 2), //bloqueamos el 27
    //     addDays(new Date(), 3), //bloqueamos el 28
    // ]




    // ==========================//
    // FUNCIONES DE LA LIBRERIA //
    // open close
    const [open, setOpen] = useState(true)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }


    return (
                    <DateRange
                        rangeColors={['#335c67', '#264653']}    
                        onChange={item => onChageCalendar(item)}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        minDate={now.current}
                        disabledDates={excludeDays()}
                        //disabledDates={arrayFechas}
                        months={2}
                        direction="horizontal"
                        className="calendarElement"
                    />
    )
}

export default Calendario2