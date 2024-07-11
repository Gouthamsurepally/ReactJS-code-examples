import React from "react";

export function DateType(){
    var departure= new Date();
    var months = ["Jan", "Feb", "March", "April", "May","June","July","Aug","Sep","Oct","November", "Dec"];
    var weekdays = ["Sunday","Mon","Tue","Wed","Thu","Friday","Sat"];

    return(
        <>
        Departure: {weekdays[departure.getDay()]},{departure.getDate()} {months[departure.getMonth()]} - {departure.getFullYear()}
        </>
    )
}