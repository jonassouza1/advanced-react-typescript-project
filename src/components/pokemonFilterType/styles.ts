
import styled,{css} from "styled-components";


const Div= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

const inputError = css`
 border:solid red 1px;
 border-radius:red;
`

const Input = styled.input`
${props=>props.className}
border-radius:5px;

`
const P= styled.p`
color:red;
`

const Button= styled.button`
background:url();
width:40px;
border-radius:50%;
border:none;

&:hover img{
    transition:0.4s;
    border:none;
    cursor:pointer;
    transform: rotate(360deg)
}
`
export{Div,Input,inputError,P,Button}