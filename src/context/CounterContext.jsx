import { createContext, useReducer, useRef, useState } from "react";
import CounterReducer from "./CounterReducer";
import axios from "axios";

export let CounterContext = createContext()

export function CounterContextProvider({children}){
  const initialState = {counter:0,loading:true}
  const [state,dispatch]=useReducer(CounterReducer,initialState) 
  const increment = () => { 
     dispatch({type:'INCREMENT', payload :2})

   }

  const decrement = () => { 
    dispatch({type:'DECREMENT', payload :5})

   }


  return(
    <>

    <CounterContext.Provider value={{


      counter:state.counter,increment,decrement
    }}>

        {children}

    </CounterContext.Provider>

    </>
  )
}



CounterContext


