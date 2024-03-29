import { useEffect, useState } from "react"
import { BiCart, BiTrash, BiXCircle } from "react-icons/bi"
import styled from "styled-components"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner";

export default function ShoppingBagSidebar({ setSideBar }) {
  const [cartProducts, setCartProducts] = useState([]);
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [render, setRender] = useState();
  const [loadingDelete, setLoadingDelete] = useState({value:false, id:""})
  const [loadingBuy, setLoadingBuy] = useState(false)
  
  useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/shopping`, config)
        .then(res => {
          setCartProducts(res.data)
          setLoadingDelete({value: false,...loadingDelete.id})
        })
        .catch(err => console.log(err))
  },[render])

  const deleteProduct = (id) => {

    setLoadingDelete({value: true, id})

    axios.delete(`${process.env.REACT_APP_API_URL}/shopping/${id}`, config)
      .then((res)=>{
        setRender(id)
        console.log(res)
      })
      .catch((err)=> {
        console.log(err)
        setLoadingDelete({value: false, id})
      })
  }

  const buyProducts = (e) => {
    setLoadingBuy(true)
    e.preventDefault()
    axios.put(`${process.env.REACT_APP_API_URL}/buy-product`,{}, config)
      .then((res)=>{
        alert(res.data)
        setSideBar(false)
        setLoadingBuy(false)
      })
      .catch((err)=>{
        console.log(err)
        setSideBar(false)
        setLoadingBuy(false)
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
                {loadingDelete.value && loadingDelete.id === product._id?
                <ThreeDots 
                  height="30" 
                  width="40" 
                  radius="5"
                  color="#4fa94d" 
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />:
                <BiTrash size={"22"} color="red" onClick={()=>deleteProduct(product._id)}/>}
              </CardProduct>
            )
          }):<CardProduct >Nenhum produto adicionado no carrinho ainda</CardProduct> }
        </ul>
          {cartProducts.length !== 0 ?
          <TotalCard>
            <p>TOTAL: <h3>R$ {cartProducts.map(p=>p.value).reduce((acc, curr)=> acc + curr).toFixed(2).replace(".",",")}</h3></p>
          </TotalCard>:""}
        <button type="submit" disabled={cartProducts.length!==0?false:true}>
          {loadingBuy?
          <ThreeDots 
          height="30" 
          width="80" 
          radius="10"
          color="#4fa94d" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          />:
        "FINALIZAR COMPRA"}
        </button>
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
      bottom: 100px;
      width: inherit;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center ;
    }
    ul::-webkit-scrollbar{
      display: none;
    }
    button{
      position: absolute;
      bottom:0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button:disabled{
      background-color: grey;
    }
    button:hover, button:focus{
      background-color: greenyellow;
      color: green;
    }
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
const TotalCard = styled.div`
  position: absolute;
  bottom: 60px;
  width: 90%;
  height: 30px;
  color: #0c1d07;
  background-color: #9dd295;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;


    font-size: 20px;
    font-family: 'Saira Stencil One', cursive;
    font-weight: 700;
    text-align: center;

    /* h3{
      color: green;
    } */
  }
`