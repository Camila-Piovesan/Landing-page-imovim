import React from "react";
import style from  './style.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import marcador from '../../assets/marcador.svg'
import qrcode from '../../assets/qrcodeAleatorio.svg';

function index() {
    return (
       <>
        <header>
            <img id="logo" src={logo} alt="Logo Imovim" />
        
            <nav>
                <ul>
                    <li><Link className="Link" to = '/'>Baixar</Link></li>
                    <li><Link className="Link" to = '/'>Sobre</Link></li>
                    <li><Link className="Link" to = '/'>Contato</Link></li>
                    
                </ul>
            </nav>

        </header>

        <img id="mockup" src={require('../../assets/mockup.jpg')} />

        <img id="marcador" src={marcador} alt="Logo Imovim" />
        <text className="slogan">Tecnologia + Esportes = imovim <br/> Faça parte da rede que te movimenta</text>

        <button>CLIQUE AQUI PARA BAIXAR</button>

        <text id="qrcodeText">Ou escaneie o QR Code abaixo</text>

        <img id="qrCode" src={qrcode}/>
        </>

    )
}

export default index;