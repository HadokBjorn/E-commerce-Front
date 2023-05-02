import styled from "styled-components";
import loader from "../assets/loading-skull.gif"

const Loader = () =>{
    return(
        <LoaderContainer>
            <img src={loader} alt=""/>
        </LoaderContainer>
    )
}

const LoaderContainer = styled.div`
  img{
    width: 100%;
    border-radius: 50%;
  }
  
`
export default Loader;