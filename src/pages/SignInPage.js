import styled from "styled-components"
import { Link } from "react-router-dom"
import CatPotionsLogo from "../components/CatPotionsLogo"

export default function SignInPage() {
  return (
    <SingInContainer>
      <form>
        <CatPotionsLogo />
        <input placeholder="E-mail" type="email" />
        <input placeholder="Senha" type="password" autocomplete="new-password" />
        <button>Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
