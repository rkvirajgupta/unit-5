import {useDispatch,useSelector} from 'react-redux'
import { addCounter } from '../Redux/Counter/CounterAction'

export const Counter = ()=>{

    const count = useSelector((store)=>store.counter.count)
    
    const dispatch = useDispatch()
    return <div>
         <p>count:{count}</p>
         <button onClick={()=>{
            dispatch(addCounter(1))
         }}>add</button>
    </div>

}