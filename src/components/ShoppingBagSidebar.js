import { useEffect, useState } from "react"
import { BiCart, BiTrash, BiXCircle } from "react-icons/bi"
import styled from "styled-components"
import axios from "axios"

export default function ShoppingBagSidebar({ setSideBar }) {
  const [cartProducts, setCartProducts] = useState([]);
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [render, setRender] = useState();
  
  useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/shopping`, config)
        .then(res => {
          setCartProducts(res.data)
          console.log(res.data);
        })
        .catch(err => console.log(err))
  },[render])

  const deleteProduct = (id) => {
    console.log(id)
    axios.delete(`${process.env.REACT_APP_API_URL}/shopping/${id}`, config)
      .then((res)=>{
        setRender(id)
        console.log(res)
      })
      .catch((err)=> console.log(err))
  }

  const buyProducts = (e) => {
    e.preventDefault()
    axios.put(`${process.env.REACT_APP_API_URL}/buy-product`,{}, config)
      .then((res)=>{
        alert(res.data)
        setSideBar(false)
      })
      .catch((err)=>{
        console.log(err)
        setSideBar(false)
      })
  }


  return (
    <ShoppingBagContainer>
      <span> <BiXCircle size={"30"} onClick={() => setSideBar(false)} /> </span>

      <h1>
        Carrinho de Compras
        <BiCart size={"35"} color="#64D70F" />
      </h1>
      <form onSubmit={buyProducts}>
        <ul>
          {cartProducts.length !== 0 ? cartProducts.map(product => {
            return (
              <CardProduct key={product._id}>
                <h2>{product.name}</h2>
                <p>R$ {(product.value).toString().replace(".", ",")}</p>
                <BiTrash size={"22"} color="red" onClick={()=>deleteProduct(product._id)}/>
              </CardProduct>
            )
          }) :<CardProduct >Nenhum produto adicionado no carrinho ainda</CardProduct> }

        </ul>

        <button type="submit" disabled={cartProducts.length!==0?false:true}>FINALIZAR COMPRA</button>
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
  form{
    position: relative;
    height: 100%;
    overflow: auto;

    ul{
      position: absolute;
      overflow:auto;
      gap: 10px;
      top: 0px;
      bottom: 60px;
      width: inherit;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center ;

      //max-height: calc(100vh-100px);
    }
    button{
      position: absolute;
      bottom:0;
    }
  }
  button:disabled{
    background-color: grey;
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
    width: 40%;
  }
  p{
    font-size: larger;
    font-weight: 700;
    color: green;

  }

`
