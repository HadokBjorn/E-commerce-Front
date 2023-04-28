import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import greenPotion from "../assets/green-potion.jpg"
import purpplePotion from "../assets/purpple-potion.jpg"
import CatPotionsLogo from "../components/CatPotionsLogo"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <Header>
        <CatPotionsLogo classe={"row-logo"}/>
        <h1 onClick={navigate("/login")}>Olá, Usuário</h1>
        <BiExit />
      </Header>

      <ProductsContainer>
        <ul>
          <ListItemContainer>
            <div>
              <img src="https://i.pinimg.com/564x/90/3e/04/903e04af1b0ad325cd94d3b5319bbafa.jpg" alt=""/>
              <strong>Nome do Produto</strong>
            </div>
            <Value>120,00</Value>
          </ListItemContainer>
          <ListItemContainer>
            <div>
              <img src="https://i.pinimg.com/564x/90/3e/04/903e04af1b0ad325cd94d3b5319bbafa.jpg" alt=""/>
              <strong>Nome do Produto</strong>
            </div>
            <Value>120,00</Value>
          </ListItemContainer>
          <ListItemContainer>
            <div>
              <img src="https://i.pinimg.com/564x/90/3e/04/903e04af1b0ad325cd94d3b5319bbafa.jpg" alt=""/>
              <strong>Nome do Produto</strong>
            </div>
            <Value>120,00</Value>
          </ListItemContainer>
          <ListItemContainer>
            <div>
              <img src="https://i.pinimg.com/564x/90/3e/04/903e04af1b0ad325cd94d3b5319bbafa.jpg" alt=""/>
              <strong>Nome do Produto</strong>
            </div>
            <Value>120,00</Value>
          </ListItemContainer>
          <ListItemContainer>
            <div>
              <img src="https://i.pinimg.com/564x/90/3e/04/903e04af1b0ad325cd94d3b5319bbafa.jpg" alt=""/>
              <strong>Nome do Produto</strong>
            </div>
            <Value>120,00</Value>
          </ListItemContainer>
          <ListItemContainer>
            <div>
              <img src="https://i.pinimg.com/564x/90/3e/04/903e04af1b0ad325cd94d3b5319bbafa.jpg" alt=""/>
              <strong>Nome do Produto</strong>
            </div>
            <Value>120,00</Value>
          </ListItemContainer>
          <ListItemContainer>
            <div>
              <img src="https://i.pinimg.com/564x/90/3e/04/903e04af1b0ad325cd94d3b5319bbafa.jpg" alt=""/>
              <strong>Nome do Produto</strong>
            </div>
            <Value>120,00</Value>
          </ListItemContainer>
        </ul>
      </ProductsContainer>


      <ButtonsContainer>
        <button>
          <img src={greenPotion} alt="" />
          <p>ITENS ENCANTADOS</p>
        </button>
        <button>
          <img src={purpplePotion} alt=""/>
          <p>RELIQUIAS ALMADIÇOADAS</p>
        </button>
      </ButtonsContainer>

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  overflow: auto;
`
const Header = styled.header`
  border-bottom: 4px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
  flex-wrap: wrap;
  
  .row-logo{
    height: 100%;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 15px;
    border-bottom: none;
    img{
      width: 90px;
    }
    h1{
      font-size: 33px;
    }
  }
`
const ProductsContainer = styled.article`
  margin-top: 20px;
  flex-grow: 1;
  color: #000;
  border-radius: 5px;
  padding: 16px;
 ul{
  overflow: auto;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
 }
`
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;
  
  button {
    width: 50%;
    height: 135px;
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    img{
      width: 45%;
      border-radius: 50%;      
    }
    p {
      font-size: 14px;
      text-align: center;
    }
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  font-weight: 700;
`
const ListItemContainer = styled.li`
  background-color: #5c5c5c;
  display: flex;
  height: 325px;
  width: 235px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  color: #fff;
  gap: 10px;
  div{
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  span {
    color: #c6c6c6;
  }
  img{
    width: 100%;
    object-fit: cover;
    height: 200px;
  }
`