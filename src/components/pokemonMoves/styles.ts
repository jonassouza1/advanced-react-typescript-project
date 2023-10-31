import styled from "styled-components";



const Section=styled.section`
display:flex;
flex-flow:wrap column;
max-width:100%;
height:320px;
justify-content:space-between;
align-items:center;
margin-top:30px;
`
const Ul = styled.ul`
display:flex;
flex-flow:wrap column;
justify-content:space-around;
align-items:center;
height:280px;
width:50%;
list-style:none;
border:solid;

@media(max-width:460px){

    width:100%;
    
   }
`
const Li =styled.li`
margin:5px;
max-width:90%;
`

export{Section,Ul, Li}