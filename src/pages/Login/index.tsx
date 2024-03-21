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
  InputContent
} from "../Home/styles";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassoword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        email: email,
        password: password
      })

      const token = response.data.token;

      localStorage.setItem('token', token);

      setEmail('')
      setPassoword('')
      setIsLoggedIn(true);


    } catch (error) {
      console.log(error)
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
                <Link to="/section" >MUDANÇAS CLIMÁTICAS</Link>
                <Link to="/complaint" >DENÚNCIAS</Link>
                {isLoggedIn ? (
                  <button >Logout</button>
                ) : (
                  <Link to="/complaint" >DENÚNCIAS</Link>

                )}
        
              </nav>
            </Header>
            <PresentationMain>
              <h1>
                Login
                </h1>
                <InputContent>

<div className="formulario-container">
        
  <form onSubmit={handleSubmit}>

    <label htmlFor="nome">E-mail:</label>
    <input
      type="text"
      id="email"
      value={email}
      onChange={handleEmailChange}
    />

    <label htmlFor="opinioes">Senha:</label>
    <input
    type="password"
      id="password"
      value={password}
      onChange={handlePasswordChange}
    />
    <button type="submit">Enviar</button>
  </form>
</div>
</InputContent>
            </PresentationMain>
          </PresentationContent>
        </PresentationContainer>
      </BackgroundImage>

      <PageMainContainer id="main">
        <PageMainContent>
          <DisasterColumn id="column-1">
            
           

            
           

           

            <DisasterContainer>
              <h2>...</h2>
            </DisasterContainer>
          </DisasterColumn>

          <DisasterColumn id="column-2">
           
         
            

            <DisasterContainer>
              <h2>.</h2>
            </DisasterContainer>
          </DisasterColumn>
        </PageMainContent>
      </PageMainContainer>

      <Footer />
    </>
  );
};

export default Login;
