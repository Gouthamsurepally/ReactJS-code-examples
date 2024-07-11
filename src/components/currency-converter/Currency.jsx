import React from "react";
import { useState } from "react";

export function CurrencyConverter(){
    const[amount,setAmount]=useState('');
    const[fromCurrency,setFromCurrency]=useState("USD");
    const[toCurrency,setToCurrency]=useState("EUR");
    const exchangeRate = 0.85;
    
    function handleAmountChange(e){
        setAmount(e.target.value);
    }    

    function handleFromCurrency(e){
        setFromCurrency(e.target.value);
    };

    function handleToCurrency(e){
        setToCurrency(e.target.value);
    };

    function handleConvertClick(){
        const ConvertedAmount = amount * exchangeRate ;
        return ConvertedAmount.toFixed(2);
    }

    return(
        <div className="container-fluid">
          <form className="w-25 rounded rounded-3 p-4 bg-success-subtle align-items-center " >
          <label>Enter Amout:</label>
            <input type="number" className="form-control" id="amout" value={amount} onChange={handleAmountChange} />
            <dt>From Currency:</dt>
            <dd>
                <select id="fromCurrency" className="form-select" value={fromCurrency} onChange={handleFromCurrency} >
                <option>EUR</option>
                <option>USD</option>
                </select>
            </dd>
            <dt>To Currency:</dt>
            <dd>
                <select id="toCurrency" className="form-select" value={toCurrency} onChange={handleToCurrency} >
                    <option>USD</option>
                    <option>EUR</option>
                </select>
            </dd>
            <button className="btn btn-dark" onClick={handleConvertClick}>Convert</button>
            <div>
                {
                    amount && (
                        <p>{amount} {fromCurrency} = {handleConvertClick()} {toCurrency}</p>
                    )
                }
            </div>
          </form>
        </div>
    )
}
