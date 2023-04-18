import React from "react";
import style from  './style.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import marcador from '../../assets/marcador.svg'
import qrcode from '../../assets/qrcodeAleatorio.svg';
import iconPessoas from '../../assets/pessoas.svg';
import iconEventos from '../../assets/evento.svg';
import iconChat from '../../assets/chat.svg';

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


        <container>
            <div id="fundoGradiente">
                <img className="fotoDevs" src={require('../../assets/fotoCamila.png')} />
                <img className="fotoDevs" src={require('../../assets/fotoTiago.png')} />
                <img className="fotoDevs" src={require('../../assets/fotoLuis.png')} />
                <img className="fotoDevs" src={require('../../assets/fotoOsmar.png')} />
            </div>
 
            <div id="textFundoGradiente">

                <text id="apresentaçãoDevs">Conheça mais dos desenvolvedores!</text>
                <text className="textDevs">
                    <text id="nomeDevs"> Camila Piovesan </text>
                    <br/> Design 
                    <br/> Documentação
                </text>

                <text className="textDevs">
                    <text id="nomeDevs"> Tiago Alves </text>
                    <br/> Front End
                </text>

                <text className="textDevs">
                    <text id="nomeDevs"> Luís Felipe </text>
                    <br/> Back End
                    <br/> Banco de Dados
                </text>

                <text className="textDevs">
                    <text id="nomeDevs"> Osmar Bruno</text>
                    <br/> Fullstack
                </text>
            </div>
        </container>

        <container className="boxContainer">
            <div className="box">
                <img className="icon" src={iconPessoas}/> <br/>
                <text id="textBox">Conheça pessoas <br/> novas</text>
            </div>

            <div className="box">
                <img className="icon" src={iconEventos}/> <br/>
                <text id="textBox">Marque eventos de seus esportes</text>
            </div>

            <div className="box">
                <img className="icon" src={iconChat}/> <br/>
                <text id="textBox">Converse com seus amigos</text>
            </div>
        </container>
        </>

    )
}

export default index;