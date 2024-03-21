import { FooterContainer, FooterContent } from "./styles"
import Logo from "../../assets/fametro-logo.png";
import { ReactNode } from "react";

interface IFooterProps {
  children?: ReactNode
}

const Footer = ({ children }: IFooterProps) => {
  return (
    <FooterContainer id="foot">
        <FooterContent>
            {children && children}
            <img className="logo" src={Logo} alt="" />
            <p>
              Hyago matos 
              <br /> 
              André Luiz 
              <br /> 
              Luiz Freitas 
              <br /> 
              Gabriel Carlos 
              <br /> 
              Carlos Portela
              <br /> 
              Maria Eduarda
              <br /> 
              Isabela Andradre
              <br /> 
              Miguel Angelo
              <br /> 
              Gilmar Victor
              <br /> 
              Gabriel Xavier
              <br /> 
              Clara Thalyssa
              <br /> 
              Ailton Junior
            </p>
        </FooterContent>
      </FooterContainer>
  )
}

export default Footer