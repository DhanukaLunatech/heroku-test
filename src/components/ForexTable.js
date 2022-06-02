import "../App.css"
import React from 'react'
import TableHeader from "./TableHeader"
import CustomButton from "./CustomButton/index"

function ForexTable({ tableData }) {

    return (
        <div className="my-table"> {/* Table */}
            <TableHeader /> {/* Table header */}
            <div className="table-row-container"> {/* Table row container */}
                {tableData.map((item, index) => <div key={index} className="table-row"> {/* Table columns */}
                    <div className="cell" style={{ flex: "2", paddingLeft: "20px" }}>
                        <div className="flag-icon-container">
                            <div className="holder" style={{ position: "absolute", top: "0", left: "0" }}>
                                {item.currencyFromLogo == null ? <div className="flag-icon-na" style={{ backgroundColor: "white" }}></div> :
                                    <img src={item.currencyFromLogo} alt={`CountryLogoFrom${index}`} className="flag-icon" />}
                            </div>
                            <div className="holder" style={{ position: "absolute", top: "5px", left: "12px" }}>
                                {item.currencyToLogo == null ? <div className="flag-icon-na" style={{ backgroundColor: "silver" }}></div> :
                                    <img src={item.currencyToLogo} alt={`CountryLogoTo${index}`} className="flag-icon" />}
                            </div>
                        </div>
                        <div>{`${item.currencyFrom}/${item.currencyTo}`}</div>
                    </div>
                    <div className="cell" style={{ flex: "1" }}>{item.bid}</div>
                    <div className="cell" style={{ flex: "1" }}>{item.ask}</div>
                    <div className="cell" style={{ flex: "1" }}>{item.spread}</div>
                    <div className="button-cell" style={{ flex: "1" }}><CustomButton name={"SELL"} /></div>
                    <div className="button-cell" style={{ flex: "1" }}><CustomButton name={"BUY"} /></div>
                </div>)}
            </div>
        </div>
    );
}

export default ForexTable;