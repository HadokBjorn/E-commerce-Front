import styled from "styled-components"

export default function ShoppingBagPage() {
  return (
    <ShoppingBagContainer>
      <h1>Carrinho de Compras</h1>
      <form>
        <span>Aqui será listado os produtos</span>
        
        <button>FINALIZAR COMPRA</button>
      </form>
    </ShoppingBagContainer>
  )
}

const ShoppingBagContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
