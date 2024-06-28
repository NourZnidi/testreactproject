import { AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"; 
import { CounterContext } from "../../context/CounterContext";
import { useContext } from "react";




export default function Count() {
const {counter,increment,decrement} = useContext(CounterContext)

  return (
    <>
    <div className="row">
      <div className="col-md-8 md-auto">
    <h1>{counter}</h1>
    <button onClick={increment} className='btn btn-success'>
            <AiFillPlusCircle></AiFillPlusCircle>

    </button>
    <button onClick={decrement} className='btn btn-success'>
          <AiFillMinusCircle></AiFillMinusCircle>
    </button>
      </div>
        </div>
    
    </>
  )
}
