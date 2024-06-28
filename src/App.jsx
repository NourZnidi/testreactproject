import Count from "./components/Count/Count";
import Nour from "./components/Nour/Nour";
import { CounterContextProvider } from "./context/CounterContext";





export default function App() {
  return (
    <>
    <Nour />
    <div className='container'>
      <CounterContextProvider>
        <Count />
      </CounterContextProvider>
    </div>
    </>
  )



  
}
