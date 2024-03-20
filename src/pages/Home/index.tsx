import { DefaultContainer, DefaultContent } from "../../styles/global";
import Logo from "../../assets/fametro-logo.png";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/3.jpg";
import Image4 from "../../assets/4.jpg";
import Image5 from "../../assets/5.jpg";
import Image6 from "../../assets/6.webp";
import Image7 from "../../assets/7.jpg";
import Image8 from "../../assets/8.webp";
import Image9 from "../../assets/9.webp";
import Image10 from "../../assets/10.jpg";
import {
  BackgroundImage,
  DisasterColumn,
  DisasterContainer,
  FooterContainer,
  FooterContent,
  Header,
  PageMainContainer,
  PageMainContent,
  PresentationContainer,
  PresentationContent,
  PresentationMain,
} from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BackgroundImage>
        <PresentationContainer id="home">
          <PresentationContent>
            <Header>
              <img className="logo" src={Logo} alt="" />
              <nav className="navbar">
                <Link to="/section" >MUDANÇAS CLIMÁTICAS</Link>
                <Link to="/complaint" >DENUNCIAS</Link>

              </nav>
            </Header>
            <PresentationMain>
              <h1>
                Os maiores
                <br /> <span>desastres naturais</span> <br />
                do século.
              </h1>
              <p>
                Esta página tem o intuito de apresentar os maiores desastres
                naturais do século 21 e como a natureza pode ser desastrosa
                quando a convém.
              </p>
            </PresentationMain>
          </PresentationContent>
        </PresentationContainer>
      </BackgroundImage>

      <PageMainContainer id="main">
        <PageMainContent>
          <DisasterColumn id="column-1">
            <DisasterContainer>
              <h2>2000</h2>
              <div className="disaster-content"></div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2004</h2>
              <div className="disaster-content">
                <h3>Tsunami no Oceano Índico</h3>
                <p>
                  Um terremoto de magnitude 9,1 a 9,3 atingiu a costa oeste de
                  Sumatra, Indonésia, em 26 de dezembro de 2004, desencadeando
                  um tsunami que afetou várias nações do Oceano Índico,
                  resultando em mais de 230.000 mortes.
                </p>
                <img src={Image1} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2005</h2>
              <div className="disaster-content">
                <h3>Furacão Katrina</h3>
                <p>
                  Katrina atingiu a costa dos Estados Unidos, principalmente
                  Nova Orleans, em agosto de 2005, causando inundações
                  catastróficas e danos massivos. O número de mortes diretas
                  atribuídas ao furacão foi de cerca de 1.800.
                </p>
                <img src={Image2} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2008</h2>
              <div className="disaster-content">
                <h3>Terremoto de Sichuan</h3>
                <p>
                  Um terremoto de magnitude 7,9 atingiu a província de Sichuan,
                  na China, em maio de 2008. O desastre resultou em mais de
                  87.000 mortes confirmadas e milhares de desaparecidos.
                </p>
                <img src={Image3} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2011</h2>
              <div className="disaster-content">
                <h3>Terremoto e tsunami de Tohoku</h3>
                <p>
                  Um terremoto de magnitude 9,0 atingiu o Japão em março de
                  2011, desencadeando um poderoso tsunami que causou sérios
                  danos à infraestrutura costeira e resultou em mais de 15.000
                  mortes.
                </p>
                <img src={Image4} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2012</h2>
              <div className="disaster-content">
                <h3>Furacão Sandy</h3>
                <p>
                  Sandy foi um dos maiores furacões registrados no Atlântico,
                  atingindo áreas do Caribe e da costa leste dos Estados Unidos
                  em outubro de 2012. Os danos foram extensos, especialmente em
                  Nova York e Nova Jersey.
                </p>
                <img src={Image5} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>...</h2>
            </DisasterContainer>
          </DisasterColumn>

          <DisasterColumn id="column-2">
            <DisasterContainer>
              <h2>2013</h2>
              <div className="disaster-content">
                <h3>Tufão Haiyan</h3>
                <p>
                  Conhecido nas Filipinas como Yolanda, o tufão Haiyan atingiu o
                  país em novembro de 2013, causando devastação generalizada.
                  Mais de 6.000 pessoas morreram e milhões foram deslocadas.
                </p>
                <img src={Image6} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2015</h2>
              <div className="disaster-content">
                <h3>Terremoto de Nepal</h3>
                <p>
                  Um terremoto de magnitude 7,8 atingiu o Nepal em abril de
                  2015, causando uma enorme devastação. Mais de 9.000 pessoas
                  morreram e muitas outras ficaram feridas ou desabrigadas.
                </p>
                <img src={Image7} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2017</h2>
              <div className="disaster-content">
                <h3>Furacão Harvey</h3>
                <p>
                  Harvey atingiu o Texas em agosto de 2017, causando inundações
                  catastróficas e danos generalizados. Foi o furacão mais caro
                  já registrado nos Estados Unidos, com danos estimados em mais
                  de US$ 125 bilhões.
                </p>
                <img src={Image8} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>2019-2020</h2>
              <div className="disaster-content">
                <h3>Incêndios florestais na Austrália</h3>
                <p>
                  Os incêndios florestais na Austrália, que começaram em 2019 e
                  se estenderam até 2020, foram alguns dos mais severos já
                  registrados no país. Milhões de hectares foram queimados,
                  causando perda de vidas humanas, danos à fauna e flora, e
                  destruição de propriedades.
                </p>
                <img src={Image9} alt="" />
              </div>
            </DisasterContainer>

            

            <DisasterContainer>
              <h2>.</h2>
            </DisasterContainer>
          </DisasterColumn>
        </PageMainContent>
      </PageMainContainer>

      <FooterContainer id="foot">
        <FooterContent>
            <img className="logo" src={Logo} alt="" />
            <p> Hyago matos <br /> André Luiz <br /> Luiz Freitas <br /> Gabriel Carlos <br /> Carlos Portela</p>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Home;
