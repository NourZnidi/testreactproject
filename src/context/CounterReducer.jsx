





const CounterReducer = (state,action) => { 
  switch (action.type) {
    case 'INCREMENT':
      return { 
        ...state,
        counter:state.counter+action.payload 
      }
      case 'DECREMENT':
        return {
          ...state,
          counter:state.counter-action.payload
        }  
    default:
      break;
  }
}
 export default CounterReducer