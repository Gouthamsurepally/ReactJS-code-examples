import { useState,useEffect } from "react";
import React from "react";

export function TimerDemo(){

    const[now]=useState(new Date());
    const[status,setStatus]=useState('');
    const[time,setTime]=useState('');

    function GetSalutation(){
        var date=new Date();
        var hrs=date.getHours();
        if(hrs>=0 && hrs<=12){
            setStatus('Good Morning');
        }else if(hrs>=0 && hrs<=16){
            setStatus('Good Afternoon');
        }else if(hrs>=16 && hrs<=23){
            setStatus('Good Evening');
        }
    }

    function Clock(){
        var now=new Date();
        var time=now.toLocaleTimeString();
        setTime(time);
    }

    useEffect(()=>{
        GetSalutation();
        setInterval(Clock,1000)
    },[]);

    return(
        <div className="container-fluid">
            <header className="bg-dark text-white  p-2 mt-3 d-flex justify-content-between">
                <div>
                    <span>Shoppers</span>
                </div>
                <div>
                    <span>{status}</span>
                </div>
                <div>
                    <span className="bi bi-calendar">{now.toDateString()}</span>
                    <span className="bi bi-clock">{time}</span>
                </div>

            </header>

        </div>
    )
}