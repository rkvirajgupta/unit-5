// import "./Button.css";

import styled from "styled-components"

// export const Button = ({children, onClick})=>{


//     return <button onClick={onClick} className="btn">{children}</button>;
// }

const Button = styled.button`
    border:none;
    border-radius: 4px;
    padding:10px;
    padding-top: 8px;
    text-align: center;

    background: ${(props)=>props.theme==='light'?"red":"green"};

    color:yellow;
    
    margin:5px;

    &:hover {    //take&:hover together
       box-shadow: #f6f54d 0 3px 8px;
       cursor:pointer;
 }
`
export { Button };