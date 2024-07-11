import React from "react";

export function WorldCup(){
    var iccTable = [
        {Team: "India", Matches: 8, Won: 8, Lost: 0, PTS: 16, NRR: "+2.456", Flag:"india.jpg"},
        {Team: "South Africa", Matches: 8, Won:6, Lost:2, PTS: 12, NRR: "+1.376", Flag:"RSA.jpg"},
        {Team: "Australia", Matches: 8, Won: 6, Lost: 2, PTS: 12, NRR: "+0.861", Flag:"AUS.jpg"},
    ];
    return(
        <>
        <table className="table table-hover w-50 table-stripped">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>PTS</th>
                    <th>NRR</th>
                </tr>
            </thead>
            <tbody>
                {
                    iccTable.map(country=>
                        <tr key={country.Team}>
                            <img src={country.Flag}  />{country.Team}
                            <td>{country.Matches}</td>
                            <td>{country.Won}</td>
                            <td>{country.Lost}</td>
                            <td>{country.PTS}</td>
                            <td>{country.NRR}</td>
                            </tr>
                            )
                }
            </tbody>
        </table>
        </>
    )
}