import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <header>
            <h1>Bem vindo ao começo do site</h1>
            <menu>
                <ul>
                    
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/sobre"><li>Sobre</li></Link>
                    <Link to='/equipes'><li>Equipes</li></Link>
                    <li>Votações</li>
                    
                </ul>
            </menu>
        </header>
    </div>
  )
}

export default Navbar