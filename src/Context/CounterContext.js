import { useState } from "react";
import { createContext } from "react";




 export let CounterContext= createContext(0);


 export default function CounterContextProvider(props){

    const [counter,setCounter]= useState(10)

    function Increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1);
    }


    return <CounterContext.Provider value={{counter,Increment,decrement}}>
        {props.children}
    </CounterContext.Provider>;
 }

