import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";
import Background from "../../assets/v2osk-1Z2niiBPg5A-unsplash.jpg"

export const BackgroundImage = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(${Background});
	background-position: center;
	background-size: cover;
	
`

export const PresentationContainer = styled(DefaultContainer)`
	display: flex;
	width: 100vw;
	height: 100vh;
	backdrop-filter: brightness(40%);
	align-items: start;
	
`

export const PresentationContent = styled(DefaultContent)`
	display: flex;
	flex-direction: column;
	height: 100%;
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 20px;
	padding-bottom: 20px;

	.logo {
		width: 180px;
	}

	.navbar {
		color: white;
		display: flex;
		gap: 100px;
	}

	a {
		font-style: none;
		text-decoration: none;
		color: white;
	}
`

export const PresentationMain = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	gap: 20px;
	color: white;

	h1 {
		font-size: 54px;
		font-weight: 800;
		line-height: 65px;
	}

	p {
		font-size: 14px;
		max-width: 400px;
		line-height: 26px;
		color: #CCCCCC;
	}

	span {
		color: #5C6E3B;
	}
`

export const PageMainContainer = styled(DefaultContainer)`
	padding-top: 60px;
	padding-bottom: 60px;
	background-color: #1C1E21;
`

export const PageMainContent = styled(DefaultContent)`
	display: flex;
	justify-content: space-between;
`

export const DisasterColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 40%;

`

export const ComplaintContainer = styled.div`
width: 500px;
margin: 0 auto;
h2 {
	font-family: "Inria Serif", serif;
	font-size: 90px;
	font-weight: 300;
	color: #E6E6E6;
	margin: 10px 0;
}

	.disaster-content {
		display: flex;
		flex-direction: column;
		padding-left: 20px;
		padding-bottom: 70px;
		min-height: 123px;
		border-left: 3px solid #808080;
		gap: 10px;
	}

	h3 {
		font-size: 34px;
		font-weight: 700;
		color: #D9D9D9;
	}

	p {
		max-width: 400px;
		font-size: 20px;
		line-height: 26px;
		color: #ccc;
	}

	img {
		max-width: 400px;
	}
`




export const DisasterContainer = styled.div`


h2 {
	font-family: "Inria Serif", serif;
	font-size: 90px;
	font-weight: 300;
	color: #E6E6E6;
	margin: 10px 0;
}

	.disaster-content {
		display: flex;
		flex-direction: column;
		padding-left: 20px;
		padding-bottom: 70px;
		min-height: 123px;
		border-left: 3px solid #808080;
		gap: 10px;
	}

	h3 {
		font-size: 34px;
		font-weight: 700;
		color: #D9D9D9;
	}

	p {
		max-width: 400px;
		font-size: 14px;
		line-height: 26px;
		color: #ccc;
	}

	img {
		max-width: 400px;
	}
`

export const FooterContainer = styled(DefaultContainer)`
	background-color: #1C1E21;
`

export const FooterContent = styled(DefaultContent)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	margin-top: 60px;
	margin-bottom: 60px;

	.logo {
		width: 180px;
	}

	p {
		text-align: center;
		font-size: 16px;
		color: #CCC;
		line-height: 34px;
	}
`

export const InputContent = styled(DefaultContainer)`
color: #fff;
width: 600px;
 h2{
	font-size 40px;
	text-align: center;
 }
.formulario-container {
  width: 600px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 200px;
}

/* Adicione estilos para o botão */
button {
  background-color: #5c6e3b; 
  color: white; /* Cor do texto branco */
  padding: 10px 20px; /* Preenchimento interno */
  border: none; /* Sem borda */
  border-radius: 4px; /* Cantos arredondados */
  cursor: pointer; /* Cursor ao passar */
  font-size: 16px; /* Tamanho da fonte */
}

/* Estilo quando o cursor está sobre o botão */
button:hover {
  background-color: #45a049; /* Cor de fundo mais escura */
}


`