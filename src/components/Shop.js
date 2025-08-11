import React from "react";
import { useDispatch } from "react-redux";
// import {bindActionCreators} from 'redux'
import{actionCreators} from '../state/index'

function Shop() {
  const dispetch = useDispatch()
  return (
    <div className="container my-3">
        <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{dispetch(actionCreators.withDrawMoney(100))}}>
      -
      </button>
           update balance 
      <button className="btn btn-primary mx-2" onClick={()=>{dispetch(actionCreators.depositMoney(100))}}> +</button>
    </div>
  );
}

export default Shop;
