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
import Image11 from "../../assets/11.jpeg";
import Image12 from "../../assets/12.jpg";
import Image13 from "../../assets/13.jpg";

import {
  BackgroundImage,
  DisasterColumn,
  DisasterContainer,
  FooterContainer,
  FooterContent,
  Header,
  InputContent,
  PageMainContainer,
  PageMainContent,
  PresentationContainer,
  PresentationContent,
  PresentationMain,
} from "../Home/styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";

const Section = () => {

  const [name, setName] = useState('');
  const [options, setOptions] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleOptionsChange = (e: any) => {
    setOptions(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      axios.post('http://localhost:5000/register', {
        name: name,
        options: options
      })

      setName('')
      setOptions('')

      alert('Denúncia Enviada com sucesso!')

    } catch (error) {

    }




  };

  return (
    <>
      <BackgroundImage>
        <PresentationContainer id="home">
          <PresentationContent>
            <Header>
              <img className="logo" src={Logo} alt="" />
              <nav className="navbar">
                <Link to="/home" >DESASTRES</Link>
                <Link to="/complaint" >DENUNCIAS</Link>

              </nav>
            </Header>
            <PresentationMain>
              <h1>Mudanças <span>Climáticas</span></h1>
              <p>
                Mudança climática se refere a transformações de
                longo prazo nos padrões de temperatura e clima.
                Essas alterações podem ser naturais, mas desde o século 18 as atividades humanas têm sido a principal causa das mudanças climáticas,
                principalmente por causa da queima de combustíveis fósseis (como carvão, petróleo e gás), que produzem gases que retêm o calor.
              </p>
            </PresentationMain>
          </PresentationContent>
        </PresentationContainer>
      </BackgroundImage>

      <PageMainContainer id="main">
        <PageMainContent>
          <DisasterColumn id="column-1">
            <DisasterContainer>
              <div className="disaster-content"></div>
            </DisasterContainer>

            <DisasterContainer>
              <div className="disaster-content">
                <h3>As concentrações de gases de efeito estufa estão em seus níveis mais altos em 2 milhões de anos</h3>
                <p>
                  omo resultado, a Terra está agora cerca de 1,1 °C mais quente do que no final do século XIX. A última década (2011-2020) foi a mais quente já registrada.

                  Muitas pessoas pensam que as mudanças climáticas significam principalmente temperaturas mais altas. Mas o aumento da temperatura é apenas o começo da história.                </p>
                <img src={Image11} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <div className="disaster-content">
                <h3>Cada aumento no aquecimento global é importante</h3>
                <p>
                  Em uma série de relatórios da ONU, milhares de cientistas e analistas de governos concordaram que limitar o aumento da temperatura global a não mais que 1,5 °C nos ajudaria a evitar os piores impactos climáticos e a manter um clima habitável.
                  No entanto, com base nos atuais planos climáticos nacionais, o aquecimento global deverá atingir cerca de 3,2 °C até o final do século.
                </p>
                <img src={Image12} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <div className="disaster-content">
                <h3>Podemos pagar a conta agora, ou pagar caro no futuro</h3>
                <p>
                  A ação climática requer investimentos financeiros significativos por parte de governos e empresas. Mas a inação climática é muito mais cara.

                  Uma etapa crítica é que os países industrializados cumpram seu compromisso de fornecer 100 bilhões de dólares por ano aos países em desenvolvimento para que possam se adaptar e avançar em direção a economias mais verdes.
                </p>
                <img src={Image13} alt="" />
              </div>
            </DisasterContainer>



            <DisasterContainer>
              <h2>...</h2>
            </DisasterContainer>
          </DisasterColumn>

          <DisasterColumn id="column-2">
            <DisasterContainer>
              <div className="disaster-content">
                <h3>Quando o clima começou a mudar?</h3>
                <p>
                  As mudanças climáticas não aconteceram de uma hora para outra. A nossa história evolutiva está intrinsecamente ligada às alterações provocadas no clima,
                  as quais são observadas desde a formação do planeta Terra.
                  Ao longo dos 4,6 bilhões de anos do planeta, o clima modificou-se. Houve, nos últimos 400 mil anos, quatro ciclos diferentes, glaciais e interglaciais.
                </p>
                <img src={Image6} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <div className="disaster-content">
                <h3>IPCC</h3>
                <p>
                  O Painel Intergovernamental sobre Mudanças Climáticas (IPCC) é um órgão criado com o objetivo principal de fazer avaliações a respeito das mudanças climáticas, sendo ele encarregado de criar documentos que mostrem o que de fato está ocorrendo com o planeta, nosso papel nesse processo e as perspectivas futuras desse impacto.
                  Sua criação, em 1988, ocorreu em um momento em que ficava cada vez mais claro o papel do homem no que diz respeito ao aumento da temperatura da Terra.
                  O primeiro relatório foi publicado em 1990 e destacou a importância da cooperação internacional para evitar os danos causados pelas mudanças climáticas. Esse relatório foi essencial para a criação da Convenção-Quadro das Nações Unidas sobre Mudanças Climáticas (UNFCCC), o principal tratado internacional com o objetivo de reduzir o aquecimento global.                </p>
                <img src={Image7} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <div className="disaster-content">
                <h3>Enfrentamos um grande desafio, mas já conhecemos muitas soluções</h3>
                <p>
                  Muitas soluções de mudança climática podem oferecer benefícios econômicos, ao mesmo tempo em que melhoram nossas vidas e protegem o meio ambiente. Também temos acordos globais para orientar o progresso, como a Convenção-Quadro das Nações Unidas sobre Mudança do Clima e o Acordo de Paris.

                  Três grandes categorias de ação são: redução das emissões, adaptação aos impactos climáticos e financiamento dos ajustes necessários.

                  Mudar os sistemas de energia de combustíveis fósseis para renováveis, como solar ou eólica, reduzirá as emissões que impulsionam as mudanças climáticas. Mas temos que começar agora.

                  Enquanto uma coalizão crescente de países está se comprometendo com emissões líquidas zero até 2050, cerca de metade dos cortes de emissões devem estar em vigor até 2030 para manter o aquecimento abaixo de 1,5 °C. A produção de combustíveis fósseis deve diminuir cerca de 6 por cento ao ano entre 2020 e 2030.                </p>
                <img src={Image8} alt="" />
              </div>
            </DisasterContainer>

            <DisasterContainer>
              <h2>.</h2>
            </DisasterContainer>
          </DisasterColumn>
        </PageMainContent>
      </PageMainContainer>

      <Footer>
        <InputContent>

          <div className="formulario-container">
            <form onSubmit={handleSubmit}>
              <h2>Denuncie Aqui!</h2>

              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                value={name}
                onChange={handleNameChange}
              />

              <label htmlFor="opinioes">Denuncia:</label>
              <textarea
                id="opinioes"
                value={options}
                onChange={handleOptionsChange}
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </InputContent>
      </Footer>
    </>
  );
};

export default Section;
