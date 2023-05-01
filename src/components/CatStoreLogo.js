import styled from "styled-components"
import imageLogo from "../assets/cat-logo.jpg"

export default function CatStoreLogo({classe}) {
    return (
        <LogoContainer className={classe}>
            <img src={imageLogo} alt="logo"/>
            <h1>CatStore</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    border-bottom: 3px solid green;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Saira Stencil One', cursive;

        font-weight: 400;
        font-size: 38px;
    }
    img{
        width: 100px;
        border-radius: 50%;
        margin-bottom: 10px;

    }
`

