import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Response(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} type='submit'>
                Mostrar resultado
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado de la serie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    De acuerdo con la siguiente formula: <br />
                    serie(n) = 4triangular(n-1) - 2primo(n-1) + fibonacci(n+2) <br />
                    El resultado es: {props.resultado}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Acept
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Response;