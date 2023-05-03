import styled from "styled-components"
import { BiCart, BiExit } from "react-icons/bi"
import CatStoreLogo from "../components/CatStoreLogo"
import ShoppingBagSidebar from "../components/ShoppingBagSidebar"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { ProgressBar, ThreeDots } from "react-loader-spinner"

export default function HomePage() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const [sideBar, setSideBar] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState({value: false, name: ""})
  const navigate = useNavigate();
  const cardRef = useRef();
  const [products, setProducts] = useState(null)
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then((res)=>{
        setProducts(res.data)
      })
      .catch(err=>console.log(err))
  },[])

  const request = (product) => {
    setLoadingBuy({value: true, name: product.product})
    const url = `${process.env.REACT_APP_API_URL}/shopping`;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.post(url, { name: product.product, value: product.value }, config)
      .then((res) => {
        console.log(res);
        setLoadingBuy({value: false, name: product.product})
        alert(`${product.product} adicionado ao carrinho`)
      })
      .catch((err) => {
        console.log(err);
        setLoadingBuy({value: false, name: product.product})
        localStorage.clear()
        alert("Sessão expirada, faça login novamente!")
        navigate("/login")
      })
  }

  const clickItem = product => {
    if (!userName&&!token) return navigate("/login");
    request(product);
  }

  const logout = () => {
    localStorage.clear();
    navigate("/login")
  }

 
  return (
    <HomeContainer>
      <Header>
        <CatStoreLogo classe={"row-logo"} />
        <h1 onClick={() => navigate("/login")}>Olá, {userName ? userName : "Usuário"}</h1>
        <BiCart size={"30"} onClick={() => setSideBar(true)} />
        <BiExit onClick={logout} />
      </Header>
      {sideBar === true ? <ShoppingBagSidebar setSideBar={setSideBar} /> : ""}


      <ProductsContainer>
        <ul>
          {products!==null?
            products.map((product, i) => (
              <ListItemContainer key={i}  ref={cardRef}>
                <div>
                  <img src={product.image} alt="" />
                  <strong>{product.product}</strong>
                </div>
                <Value>R$ {product.value.toFixed(2).replace(".", ",")}</Value>
                {loadingBuy.value===true && product.product === loadingBuy.name?
                <button>
                  <ThreeDots 
                  height="25" 
                  width="50" 
                  radius="10"
                  color="#4fa94d" 
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
                </button>:
              <button onClick={() => clickItem(product)}>Adicionar ao Carrinho</button>}
              </ListItemContainer>
            )):
            <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#fff'
            barColor = 'green'
            />
          }

        </ul>
      </ProductsContainer>


      {/* <ButtonsContainer>
        <button>
          <img src="" alt="" />
          <p>ITENS ENCANTADOS</p>
        </button>
        <button>
          <img src="" alt="" />
          <p>RELIQUIAS ALMADIÇOADAS</p>
        </button>
      </ButtonsContainer> */}

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  position: relative;
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
 }
`
/* const ButtonsContainer = styled.section`
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
      width: 80px;
      border-radius: 50%;      
    }
    p {
      font-size: 14px;
      text-align: center;
    }
  }
` */
const Value = styled.p`
  font-size: 20px;
  color: #fff;
  background-color: #393e43;
  border-radius: 15px;
  width: 60%;
  height: 50px;
  padding: 7px;
  text-align: center;
  font-weight: 700;
`
const ListItemContainer = styled.li`
  background-color: #5c5c5c;
  border-radius: 15px;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    img{
      margin-top: 20px;
      width: 190px;
      height: 200px;
      border-radius: 15px;
      object-fit: cover;
    }
  }
  span {
    color: #c6c6c6;
  }
  button{
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  button:hover{
    background-color: greenyellow;
    color: green;
  }
  
`