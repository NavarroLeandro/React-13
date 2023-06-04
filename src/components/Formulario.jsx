import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Cardclima from "./Cardclima";

const Formulario = () => {
    const[pais, setPais] = useState('');
    const[ciudad , setCiudad] = useState('')
    const[clima, setClima] =  useState([])
    useEffect(() => {
            consultarAPI();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const consultarAPI = async () => {
        try {
                if(pais !== "" & ciudad !== "")
                {
               const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=es&q=${ciudad},${pais}&units=metric&appid=76262edd037cf79ff0e34f01177d29c7`)
                const dato = await respuesta.json()
                console.log(dato);
                setClima([dato])
                }
            }
        catch (error) {
        }    
    }

    return (
        <Container className="my-5 border border-3 border-black">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3 justify-content-center d-flex" controlId="formPais">
            <Form.Label className="d-inline fs-4">Pais: </Form.Label>
            <Form.Control type="text" className="d-inline w-50 ms-3 mb-4" aria-label="Pais" placeholder="Ej. Argentina" onChange={(e) => setPais(e.target.value)} value={pais}>
            </Form.Control>
            </Form.Group>
            <Form.Group className="my-3 justify-content-center d-flex" controlId="formCiudad">
            <Form.Label className="d-inline fs-4">Ciudad: </Form.Label>
            <Form.Control type="text" className="d-inline w-50 ms-3 mb-4" aria-label="Ciudad" placeholder="Ej. Yerba Buena" onChange={(e) => setCiudad(e.target.value)} value={ciudad}>
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-center">
            <Button variant="primary" size="lg" type="submit" onClick={consultarAPI}>
                    Enviar
            </Button>
            </Form.Group>
            </Form>
            <Cardclima clima={clima}></Cardclima>
        </Container>
    );
};

export default Formulario;