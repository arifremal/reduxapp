export const depositMoney =(amount)=>{

    return (dispatch)=>{
       dispatch({
         type:'deposit',
        playload:amount
       })
    }



}
export const withDrawMoney=(amount)=>{
    return (dispatch)=>{
       dispatch({
         type:'withdraw',
        playload:amount
       })
    }



}