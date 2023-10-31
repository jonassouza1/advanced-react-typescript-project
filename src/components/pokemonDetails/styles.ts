import {  styled } from "styled-components"


interface T{
    $themes:{}
}

const Section = styled.section<T>`
${props => props.$themes}
display:flex;
flex-flow:wrap column;
min-height:100vh;
width:100vw;
align-items:center;
justify-content:space-between;
padding:20px;
text-align:center;

`
const Nav=styled.nav`
display:flex;
justify-content:space-between;
height:50px;
img{
    border-radius:20%;
}

`
const Img=styled.img`
&:hover{
    width:80%;
    transition:0.7s;
    border:none;
    border-radius:100%;
    cursor:pointer;
    
}
`

export {Section, Nav, Img}