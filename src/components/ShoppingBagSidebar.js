import { BiCart, BiTrash, BiXCircle } from "react-icons/bi"
import styled from "styled-components"

export default function ShoppingBagSidebar({setSideBar}) {
  const buyProducts = (e) => {
    e.preventDefault()
    alert("Compra realizada com sucesso")
    setSideBar(false)
  }


  return (
    <ShoppingBagContainer>
      <span> <BiXCircle size={"30"} onClick={()=>setSideBar(false)}/> </span>
      
      <h1>
        Carrinho de Compras
        <BiCart size={"35"} color="#64D70F"/>
      </h1>
      <form onSubmit={buyProducts}>
        <ul>
          <CardProduct>
            <h2>Poção de cura</h2>
            <p>R$ 320,00</p>
            <BiTrash size={"22"} color="red"/>
          </CardProduct>
          <CardProduct>
            <h2>Poção de cura</h2>
            <p>R$ 320,00</p>
            <BiTrash size={"22"} color="red"/>
          </CardProduct>
          <CardProduct>
            <h2>Poção de cura</h2>
            <p>R$ 320,00</p>
            <BiTrash size={"22"} color="red"/>
          </CardProduct>
        </ul>
        
        <button type="submit">FINALIZAR COMPRA</button>
      </form>
    </ShoppingBagContainer>
  )
}

const ShoppingBagContainer = styled.main`
  border-radius: 15px;
  height: calc(100vh - 50px);
  width: 70%;
  position: fixed;
  right: 0;
  background-color: #494949;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  span{
    color: red;
    width: 100%;
    height: 30px;
    display: flex;
    padding-left:20px;
    padding-top: 10px;
    align-items: center;
  }

  h1 {
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ul{
    gap: 10px;
    margin-top: 20px;
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
  }
  
`
const CardProduct = styled.li`
  width: 90%;
  display: flex;
  border-radius: 15px;
  background-color: #fff;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  h2{
    font-weight: 700;
  }
  p{
    font-size: larger;
    font-weight: 700;
    color: green;

  }

`
