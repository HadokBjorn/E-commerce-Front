import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import CatStoreLogo from "../components/CatStoreLogo"
import { useContext, useRef } from "react";
import axios from "axios";
import AuthContext from "../constexts/AuthContext";

export default function SignInPage() {
  const { setToken, setUserName } = useContext(AuthContext);
  const navigate = useNavigate();
  const form = { email: "", password: "" }
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const buttonClick = () => {
    form.email = emailRef.current.value;
    form.password = passwordRef.current.value;
  }

  const request = () => {
    const url = `${process.env.REACT_APP_API_URL}/login`;
    axios.post(url, form)
      .then((res) => {
        setToken(res.data.token);
        setUserName(res.data.userName);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data);
      })
  }

  const login = (e) => {
    e.preventDefault();
    buttonClick();
    if (form.email === "" || form.password === "") return alert("Todos os campos devem ser preenchidos");
    request();
  }

  return (
    <SingInContainer>
      <form onSubmit={login}>
        <CatStoreLogo />
        <input placeholder="E-mail" type="email" ref={emailRef} />
        <input placeholder="Senha" type="password" ref={passwordRef}
          autocomplete="new-password" />
        <button type="submit" >Entrar</button>
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
  form{
    margin-bottom: 10px;
  }
  input::placeholder{
    color: green;
    font-weight: 700;
  }
`
