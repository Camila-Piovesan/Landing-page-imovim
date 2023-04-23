import React from 'react';
import style from './style.css';
import {Link} from 'react-router-dom';
import onda from '../../assets/ondaFooter.svg';

function index() {
    return (
       <>
       <footer>
            <img id="ondaFooter" src={onda}/>
            <text id="direitosAutorais">imovim © 2023. Todos os direitos reservados.</text>
            <Link className="linkFooter" to = '/TermosdeUso'>Termos de Uso</Link>

        </footer>
       </>

    )}

    export default index;