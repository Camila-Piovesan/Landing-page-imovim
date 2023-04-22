import React from 'react';
import style from './style.css';
import onda from '../../assets/ondaFooter.svg';

function index() {
    return (
       <>
       <footer>
            <img id="ondaFooter" src={onda}/>
            <text id="direitosAutorais">imovim © 2023. Todos os direitos reservados.</text>
        </footer>
       </>

    )}

    export default index;