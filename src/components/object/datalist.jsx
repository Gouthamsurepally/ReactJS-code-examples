import React from "react";

export function DataList(){
    var topics = [
        {Title: "HTML", Description: "It is a markup language."},
        {Title: "CSS", Description: "It configure styles for HTML."}
   ];
   return(
    <>
    <dl>
        {
            topics.map(topic=>
                <React.Fragment key={topic.Title}>
                    <dt>{topic.Title}</dt>
                    <dd>{topic.Description}</dd>
                </React.Fragment>)
        }
    </dl>
    </>
   )
}