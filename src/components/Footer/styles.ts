import styled from "styled-components"
import { DefaultContainer, DefaultContent } from "../../styles/global"

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