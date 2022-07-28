import styled from 'styled-components'

var StyleButton = ({children,onClick})=>{


    return (
        <button onClick={onClick}>{children}</button>
    )
}

StyleButton=styled.button`
color:red;
    border:1px solid red;
    width:20%;
    margin:auto;
    &:hover{
        background-color: yellow;
    }

`

const Cack = styled.p`
    color:red;
    border:1px solid red;
    width:20%;
    margin:auto;
    &:hover{
        background-color: yellow;
    }
    
    div{
        color:green;
    }
    div:hover{
        background-color: aqua;
    }
`

export  { StyleButton,Cack }