import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>Contador</h1> <p>Valor actual: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
            <button onClick={() => setContador(contador - 1)}>
                Decrementar
            </button>
            <button onClick={() => setContador(0)}>
                Reset
            </button>
            {contador > 10 ? (
                <p style={{ color: 'red', fontWeight: 'bold' }}>
                    ¡Cuidado! El número es muy alto.
                </p>
            ) : null}
        </div>

    );
}
export default App
