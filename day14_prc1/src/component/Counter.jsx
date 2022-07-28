import {addCount } from '../Redux/Counter/action'

import {useDispatch , useSelector } from "react-redux"

export const Counter =()=>{
    const dispatch = useDispatch();
    // const store = useSelector()
  
    // console.log(store);/
  
    const counter = useSelector((store)=>store.counter.counter) //useContext
    
    console.log('rendering counter')


    return (

     <div>

  <h3>Counter:{counter}</h3>
     <button onClick={()=>{
      dispatch(addCount(1))
     }}>Add 1</button>

     </div>


    )
}