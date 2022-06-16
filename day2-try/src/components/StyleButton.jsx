import styled from 'styled-components'

const StyleButton = ({children,onClick})=>{


    return (
        <button onClick={onClick}>{children}</button>
    )
}

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