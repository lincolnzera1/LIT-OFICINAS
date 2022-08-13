import React, { useState } from 'react'
import "./Main.css"

const Main = () => {

    const [contador, setContador] = useState(0)
    const incrementar = () => {
        setContador( contador + 1)
    }

    return (
        <div>
            <main>
                <p>CONTADOR: {contador}</p>

                <input type="button" value="Incrementar" onClick={incrementar}/>
            </main>
        </div>
    )
}

export default Main