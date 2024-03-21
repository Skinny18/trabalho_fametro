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
  ComplaintContainer,
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
} from "../Home/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

interface Complaint {
  id: number;
  name: string;
  options: string;
}

const Complaint = () => {

  const [data, setData] = useState<Complaint[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Complaint[]>('http://localhost:5000/getall'); 
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BackgroundImage>
        <PresentationContainer id="home">
          <PresentationContent>
            <Header>
              <img className="logo" src={Logo} alt="" />
              <nav className="navbar">
                <Link to="/section" >MUDANÇAS CLIMÁTICAS</Link>
                <Link to="/home" >DESASTRES</Link>

              </nav>
            </Header>
            <PresentationMain>
              <h1>
                Denúncias de
                <br /> <span>Crimes Ambientais</span> <br />
              </h1>
              <p>
                Esta página tem o intuito de apresentar denuncias enviadas
              </p>
            </PresentationMain>
          </PresentationContent>
        </PresentationContainer>
      </BackgroundImage>

      <PageMainContainer id="main">
        <PageMainContent>
            <div>
            {data.map((item, index) => (
              <ComplaintContainer key={index}>
                <h3>{item.name}</h3>
                <div className="disaster-content">
                  <p>{item.options}</p>
                </div>
              </ComplaintContainer>
            ))}
          </div>
        </PageMainContent>
      </PageMainContainer>
      <Footer />
    </>
  );
};

export default Complaint;
