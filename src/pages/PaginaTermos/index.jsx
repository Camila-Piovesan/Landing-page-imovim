import React from 'react';
import style from './style.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import ondaTermos from '../../assets/ondaTermos.svg';

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

            <text className='textTermos'>

                <container className="coluna">
                Seja bem-vindo ao imovim, a rede que te movimenta. Por favor leia com atenção todos os termos abaixo. <br/>

                <p>Este documento, e todo o conteúdo do site é oferecido pela equipe imovim, neste termo representado apenas por “EQUIPE”, que regulamenta todos os direitos e obrigações com todos que acessam o site, denominado neste termo como “VISITANTE” ou “USUÁRIO”, resguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado no endereço (ADICIONAR ENDEREÇO DO SITE). visando manter um bom uso e estabelecer as responsabilidades e direitos do usuário, tais quais:</p>

                <p> <text className='textNumero'>1.</text> <text className="textTitulo">Função do site <br/></text>
                    A rede social imovim foi desenvolvida em vista da dificuldade da
                    população brasileira praticante de esportes de encontrar softwares específicos para seus interesses, o sistema apresentado se baseia em uma rede social voltada ao ambiente esportivo, no qual os usuários podem criar um perfil com informações próprias e divulgar seus gostos, interagir entre si e manter contato com a função de um chat, criar eventos, encontrar lugares aptos às práticas e eventos já criados, compartilhar seus momentos e comentários, além de terem acesso a informações sobre seus esportes.
                    Nesta plataforma, poderá ser realizado tanto divulgação de materiais originais, assim como a divulgação de produtos de e-commerce.
                    É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação e entretenimento social, sempre buscando especialistas da área caso procure uma solução concreta do seu conflito.
                </p>

                <p> <text className='textNumero'>2.</text> <text className="textTitulo">Do aceite dos termos <br/></text>
                    Este documento, chamado “Termos de Uso”, aplicáveis a todos os usuários do aplicativo, foi desenvolvido por Diego Castro Advogado – OAB/PI 15.613, modificado com permissão para este site.
                    Este termo especifica e exige que todo usuário ao se cadastrar no aplicativo imovim, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EQUIPE e o VISITANTE direitos e obrigações entre ambas as partes, aceitos expressamente pelo usuário a permanecer navegando no aplicativo imovim.
                    Ao continuar acessando o aplicativo, o USUÁRIO expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o usuário discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.
                    Este termo pode e irá ser atualizado periodicamente pela EQUIPE, que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e comunicação. É importante que o USUÁRIO confira sempre se houve movimentação e qual foi a última atualização do mesmo no começo da página.
                </p>

                <p> <text className='textNumero'>3.</text> <text className="textTitulo">Glossário <br/></text>
                Este termo pode conter algumas palavras específicas que podem não ser de conhecimento geral. Entre elas:

               <ul className='ulTermos'>
                    <li>VISITANTE E USUÁRIO: Todo e qualquer usuário do site, de qualquer forma e meio, que acesse através de computador, notebook, tablet, celular ou quaisquer outros meios, o website ou plataforma da empresa.</li>
                    <li>NAVEGAÇÃO: O ato de visitar páginas e conteúdo do website ou plataforma da empresa.</li>
                    <li>COOKIES: Pequenos arquivos de textos gerados automaticamente pelo site e transmitido para o navegador do visitante, que servem para melhorar a usabilidade do visitante.</li>
                    <li>LOGIN: Dados de acesso do visitante ao realizar o cadastro junto a EMPRESA, dividido entre usuário e senha, que dá acesso às funções restritas do site.</li>
                    <li>HIPERLINKS: São links clicáveis que podem aparecer pelo site ou no conteúdo, que levam para outra página da EMPRESA ou site externo.</li>
                    <li>OFFLINE: Quando o site ou plataforma se encontra indisponível, não podendo ser acessado externamente por nenhum usuário.</li>
                </ul>
                Em caso de dúvidas sobre qualquer palavra utilizada neste termo, o VISITANTE deverá entrar em contato com a EMPRESA através dos canais de comunicação encontradas na plataforma.
                </p>
                </container>

                <container className="coluna">
                <text className='textNumero'>4.</text> <text className="textTitulo"> Do acesso ao site <br/></text>
                    O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixar o site indisponível por tempo limitado.
                    A EQUIPE não se responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa gerar aos usuários.
                    Em caso de manutenção que exigirem um tempo maior, a EQUIPE irá informar previamente aos clientes da necessidade e do tempo previsto em que o site ou plataforma ficará offline.
                    O acesso ao site só é permitido a maiores de 18 anos de idade ou que possuírem capacidade civil plena. Para acesso de menores de idade, é necessária a expressa autorização dos pais ou tutores, ficando o mesmo responsáveis sobre qualquer compra ou acesso efetuados pelo mesmo.
                    É necessário realizar um cadastro junto a plataforma, onde o VISITANTE deverá preencher um formulário com seus dados e informações para ter acesso integral a plataforma.
                    Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto ao site, o VISITANTE concorda integralmente com a coleta de dados conforme a Lei e com a Política de Privacidade da EQUIPE.
                    5. Da licença de uso e cópia
                    O visitante poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmo.
                    Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na Lei nº 9.610/18), assim como no Código Civil brasileiro (regulamentada na Lei nº 10.406/02), ou quaisquer outras legislações aplicáveis.
                
                
                <p> <text className='textNumero'>5.</text> <text className="textTitulo"> Propriedade Intelectual <br/></text>
                    Fica declarada a expressa proibição de cópia e plágio de produções intelectuais tais como invenções, patentes, marcas, desenhos industriais, indicações geográficas e criações artísticas desenvolvidas e compartilhadas pelos usuários
                </p>

                <p> <text className='textNumero'>6.</text> <text className="textTitulo"> Das obrigações <br/></text>
                    O VISITANTE ao utilizar a plataforma da EQUIPE, concorda integralmente em NÃO:
                    1. violar quaisquer direitos de propriedade intelectual ou de privacidade, incluindo, sem limitação, patentes, direitos autorais, marcas ou segredos comerciais de quaisquer terceiros, incluindo a RHB e suas empresas afiliadas;
                    2. carregar, publicar, transmitir ou armazenar qualquer material que:
                    a) seja ilegal, ofensivo, difamatório, fraudulento, enganoso, danoso, ameaçador, constrangedor, obsceno ou inaceitável;
                    b) viole quaisquer de suas obrigações contratuais ou de confidencialidade;
                    c) perturbe ou interfira nas operações normais da plataforma, tais como a publicação ou a transmissão de vírus, a publicação continuada de materiais repetidos ou a publicação de arquivos muito grandes, fora do tamanho normal; ou
                    d) violar direitos de privacidade ou outros direitos de terceiros através do uso abusivo de Materiais, incluindo, sem limitação, através do constrangimento ou "perseguição" contra outra pessoa, do envio de mensagens de email não solicitadas ou da coleta de informações pessoais de terceiros;
                    e) violar ou tentar violar quaisquer medidas de segurança da plataforma;
                    f) usar quaisquer dispositivos, processos ou mecanismos para monitorar, recuperar, pesquisar ou acessar dados da plataforma ou qualquer Material sem o consentimento prévio e por escrito da EQUIPE, através, por exemplo, de robôs ou sistemas de varredura e armazenamento de dados ("spider");
                    g) acessar ou tentar acessar qualquer conta ou identificação de terceiros contida na plataforma;
                    h) copiar, modificar, reproduzir, apagar, distribuir, realizar download, armazenar, transmitir, vender, revender, publicar, realizar engenharia reversa ou criar obras derivadas de quaisquer Materiais, exceto materiais que tenham sido submetidos por você e sejam de sua propriedade;
                    i) publicar ou submeter qualquer informação imprecisa, falsa ou incompleta não condizentes com a realidade;
                    j) passar-se por outra pessoa ou organização;
                    k) fornecer falsa informação sobre você, sua afiliação junto a um terceiro ou sua organização;
                    l) violar estes termos nem incentivar ninguém a fazê-lo;
                </p>
                </container>

            </text>
            
            <img id="ondaTermos" src={ondaTermos}/>
       </>

    )}

    export default index;