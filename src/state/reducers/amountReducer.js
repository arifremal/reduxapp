const reducer = (state=0,action)=>{
    if(action.try==='deposit'){
        return state + action.payload
    } else if(action.try==='withdraw'){
        return state -  action.payload
    } else{
        return state
    }

}
export default  reducer