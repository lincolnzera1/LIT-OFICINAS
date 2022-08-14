import React, { useState, useEffect } from 'react'
import "./Main.css"
import Lit from "../assets/lit.png"
import Oficinas from "../assets/oficinas4-rounded.png"
import axios from "axios"


const Main = () => {

    const [contador, setContador] = useState(0)

    // const [lista, setLista] = useState([{"id": "1", "nome": "jhon"}, {"id": "2", "nome": "joao"}])
    const [lista, setLista] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/pessoas").then(res => {
            setLista(res.data)
            console.log(res.data)
        })
    }, [contador])
    
    
    const incrementar = () => {
        setContador( contador + 1)
    }

    const requisicao = async () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
            console.log(data)
        })
    }

    return (
        <div>
            <main>

                <ul>
                    {lista.map((item) => (
                        <li>{item.numero}</li>
                    ))}
                </ul>

                <p className='paragrafos'>Site criado para aprendizado da biblioteca React para frontend e node.js para backend</p>

                <p>Contador: {contador}</p>
                <input type="button" value="Incrementar" onClick={requisicao}/>

                <div className='parceiros'>
                    <p>Parceiros: {}</p>
                    <img src={Lit} alt="" />
                    <img src={Oficinas} alt="" />
                </div>
            </main>
        </div>
    )
}

export default Main