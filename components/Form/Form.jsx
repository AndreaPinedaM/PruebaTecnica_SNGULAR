import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Response from '../Modal/Modal';

import { SerieCalculadora } from '../FunctionComponent/functionSecuence';

function NumberForm() {

    const [numSerie, setNumSerie] = useState(1)
    const [resultadoN, setResultadoN] = useState(0)

    function handleChange(e) {
        setNumSerie(parseInt(e.target.value))
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const resSub = SerieCalculadora.calcularTermino(numSerie);
        console.log("desde handleSubmit", numSerie)
        setResultadoN(resSub)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresa el valor (n) de la secuencia a obtener:</Form.Label>
                <Form.Control type="number" name="num" min={2} max={100} placeholder="5" onChange={handleChange} value={numSerie} />
            </Form.Group>
            <Response resultado={`${resultadoN}`} ></Response>
        </Form>
    )
}

export { NumberForm }