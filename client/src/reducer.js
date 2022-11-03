
export const initialState = 0;

export const reducer =  (state,action)=>
{
    switch (action.type) {
        case "SHOW":
            return (1);
            break;
        case "HIDE":
            return (0)
    
        default:
            return(state);
            break;
    }

}