import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import CatStoreLogo from "../components/CatStoreLogo"
import { useRef } from "react";
import axios from "axios";


export default function SignUpPage() {

  const form = { userName: "", email: "", address: "", password: "" }
  const userNameRef = useRef("");
  const emailRef = useRef("");
  const addressRef = useRef("");
  const passwordRef = useRef("");
  const doublePasswordRef = useRef("")
  const navigate = useNavigate();


  const buttonClick = () => {
    form.userName = userNameRef.current.value;
    form.email = emailRef.current.value;
    form.address = addressRef.current.value;
    if (passwordRef.current.value === doublePasswordRef.current.value) {
      form.password = passwordRef.current.value;
    } else {
      alert("Senha e confirmação de senha devem ser iguais!")
    }
  }

  const request = () => {
    const url = `${process.env.REACT_APP_API_URL}/sign-up`;
    axios.post(url, form)
      .then((res) => {
        console.log(res)
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data);
      })
  }

  const register = (e) => {
    e.preventDefault();
    buttonClick();
    if (form.email === "" || form.userName === "" || form.password === "" || form.address === "") return alert("Todos os campos devem ser preenchidos")
    request();
  }

  return (
    <SingUpContainer>
      <form onSubmit={register}>
        <CatStoreLogo />
        <input placeholder="Nome" type="text" ref={userNameRef} />
        <input placeholder="E-mail" type="email" ref={emailRef} />
        <input placeholder="Endereço" type="text" ref={addressRef} />
        <input placeholder="Senha" type="password" autoComplete="new-password" ref={passwordRef} />
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" ref={doublePasswordRef} />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/login">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
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
