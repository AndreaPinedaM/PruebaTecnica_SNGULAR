import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NumberForm } from '../components/Form/Form'

function App() {
  return (
    <>
      <h1>Prueba técnica</h1>
      <p>
        Click on the Vite and React logos to learn more
      </p>
      <div id="numberForm">
        <NumberForm />
      </div>
    </>
  )
}

export default App
