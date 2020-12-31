import React,{ useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function Car(){
    const [started,setStated] = useState(false)
    const [countKm, setCountKm] = useState(0)

    useEffect(() => {
        document.title = `Coche ${started}`
    },[started])

    const checkStateCar = () => {
        if(started){
            return <span style={{ color:'green'}}>Encendido</span>
        } 
        return <span style={{ color:'red'}}>Apagado</span>        
    }

    const increaseKm = num => {
        if(started){
            setCountKm(countKm+num)
        } else {
            alert('EL coche esta apagado')
        }
    }
    return(
        <div>
            <h2>El carro está: { checkStateCar() }</h2>
            <h2>Kilometros recorridos: { countKm }</h2>
            <Button variant="secondary" onClick={() => { setStated(!started) }} >Off/On</Button>
            <Button variant="danger" onClick={() => { increaseKm(10) }} >Incrementar Kilomentros</Button>
        </div>
    )
}