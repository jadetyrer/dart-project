import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    font-family: 'Allerta Stencil', sans-serif;
  }
`
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const Card = styled.div `
  display: flex;
  flex-direction: column;
  width: 25vw;
  background-color: white;
  margin-top: 5vw;
  height: 30vw;
  align-items: center;
  box-shadow: 10px 10px 14px -3px rgba(173,171,173,1);
  background-color: #fbe0cf;
  border: 5px solid black
`
export const Button = styled.button `
  width: 10vw;
  background-color: #fbe0cf;
  font-family: 'Allerta Stencil', sans-serif;
`
export const Letter = styled.div `
  font-size: 100px;
`
export const Time = styled.div `
  text-align: center;
`