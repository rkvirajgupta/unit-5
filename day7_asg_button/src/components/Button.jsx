import styled from "styled-components"

const Button = styled.button`
  background-color: ${(props)=> props.theme==="light" ? "red" : "aqua"};
  color :${(props)=> props.theme==="light" ? "teal" : "blue"};
  border: 0px;
  margin: 1%;
  cursor: pointer;
  border-radius: 5px;
  padding: 1%;
 
  &:hover{
    border: 2px solid grey;
}
`;

export {Button}