import React from "react";

export function FlipcartMobile(){

    var mobiles = [
        {Title: "APPLE iPhone 14 (Blue, 128 GB)", Price: 57999, Rating: 4.6, Features: ["128 GB ROM", "15.49 cm (6.1 inch) Super Retina XDR Display", "12MP + 12MP | 12MP Front Camera", "A15 Bionic Chip, 6 Core Processor Processor", "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"], Photo:"iphone.jpg"},
        {Title: "APPLE iPhone 14 (Starlight, 128 GB)", Price: 57999, Rating: 4.6, Features: ["128 GB ROM", "15.49 cm (6.1 inch) Super Retina XDR Display", "12MP + 12MP | 12MP Front Camera", "A15 Bionic Chip, 6 Core Processor Processor", "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"], Photo:"iphone2.jpg"}
    ]
    return(
      <>
      {
        mobiles.map(item=>
            <div key={item.Title} className="row p-2 m-2">
                <div className="col-3">
                    <img src={item.Photo} width="100%"></img>

                </div>

                <div className="col-7">
                    <div className="h4 text-primary">
                        {item.Title}

                    </div>
                    <div className="bg-success rounded rounded-pill text-white text-center" style={{width:'70px'}}>
                        {item.Rating}<span className="bi bi-star-fill"></span>
                    </div>
                    <div>
                        <ul>
                            {
                                item.Features.map(feature=>
                                     <li key={feature}>{feature}</li>
                                     )
                            }
                        </ul>
                    </div>

                </div>
                 
                <div className="col-2">
                    <div className="h2">{item.Price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</div>

                </div>
            </div>
            )
      }
      </>
    )

}