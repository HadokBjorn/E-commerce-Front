import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import AuthContext from "./constexts/AuthContext"
import { useState } from "react"

export default function App() {
  const [token, setToken] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  return (
    <PagesContainer>
      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #1b1a29;
  width: inherit;
  max-height: 100vh;
  padding: 25px;
`
