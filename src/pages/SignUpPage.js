import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import CatPotionsLogo from "../components/CatPotionsLogo"
import { useRef } from "react";

export default function SignUpPage() {

  const form = {name: "", email:"",address:"", password:""}
  const nameRef = useRef("");
  const emailRef = useRef("");
  const addressRef = useRef("");
  const passwordRef = useRef("");
  const doublePasswordRef = useRef("")
  const navigate = useNavigate();


  const buttonClick = () =>{
    form.name = nameRef.current.value;
    form.email = emailRef.current.value;
    form.address = addressRef.current.value;
    if(passwordRef.current.value === doublePasswordRef.current.value){
      form.password = passwordRef.current.value;
    }else{
      alert("Senha e confirmação de senha devem ser iguais!")
    }
  }

  /* const request = () =>{
    const url = "INSERIR URL DO BACK";
    axios.post(url, form)
      .then((res)=>{
        console.log(res)
        navigate("/")
      })
      .catch((err)=>{
        alert(err.response.data)
      })
  } */

  const register = (e) =>{
    e.preventDefault();
    buttonClick();
    if(form.email===""||form.name===""||form.password===""||form.address==="")return alert("Todos os campos devem ser preenchidos")
    navigate("/login")
    //request();
  }

  return (
    <SingUpContainer>
      <form onSubmit={register}>
        <CatPotionsLogo />
        <input placeholder="Nome" type="text" ref={nameRef} />
        <input placeholder="E-mail" type="email" ref={emailRef} />
        <input placeholder="Endereço" type="text" ref={addressRef} />
        <input placeholder="Senha" type="password" autoComplete="new-password" ref={passwordRef}/>
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" ref={doublePasswordRef}/>
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
