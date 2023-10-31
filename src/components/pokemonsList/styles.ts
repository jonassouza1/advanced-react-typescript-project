
import { styled } from "styled-components"

interface T {
   $themes: {}
}

const Main = styled.main<T>`
${props => props.$themes}
display:flex;
flex-flow:wrap column;
min-height:100vh;
max-width:100vw;
padding:20px;
justify-content:center;
align-items:center;

`
const Nav = styled.nav`
display:flex;
justify-content:space-between;
width:100%;

`

const Ul = styled.ul`
display:flex;
flex-wrap:wrap;
list-style:none;
align-items:center;
min-height:700px;

justify-content:center;
@media(max-width:780px){
    margin-top:40px;
  }

`
const Li = styled.li`
display:flex;
flex-flow:wrap column;
align-items:center;
justify-content:space-between;
text-align:center;
border:solid;
height:240px;
width:180px;
margin:2px;
border-radius:10%;

&:hover{
  opacity:0.7;
  border:solid 1px red;
  margin-top:5px;
}
&:hover img{
  width:150px;
 }

`

const Img = styled.img`
width:80%;
@media(max-width:780px){
 max-widht:30%;
}
`
const Footer=styled.footer`
display:flex;
align-items:center;
flex-flow:wrap column;
justify-content:center;
margin-top:50px;
`
const Button= styled.button`
background:none;
width:50px;
border:none;

&:hover img{
  transition:0.4s;
  border:solid 1px white;
  border-radius:50%;
  background:white;
  cursor:pointer;
  
}
`
export { Main, Nav, Ul, Li, Img,Button ,Footer }