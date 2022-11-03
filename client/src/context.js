
import React,{createContext,useReducer,useContext} from "react";
import{reducer,initialState} from "./reducer"


const AppContext = createContext();

const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)

    const show = () => {
        dispatch({type:"SHOW"})
    }
    const hide = () => {
        dispatch({type:"HIDE"})
    }



    
    return <AppContext.Provider value={{state,show,hide}}>{children}</AppContext.Provider>

   
}

export const useGlobatContext = ()=>{

    return useContext(AppContext);


}


export default AppProvider;
