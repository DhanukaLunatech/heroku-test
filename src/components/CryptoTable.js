import "../App.css";
import React from 'react'
import TableHeader from "./TableHeader";
import CustomButton from "./CustomButton/index"

function CryptoTable({ tableData }) {

    return (
        <div className="my-table"> {/* Table */}
            <TableHeader /> {/* Table header */}
            <div className="table-row-container"> {/* Table row container */}
                {tableData.map((item, index) =>
                    <div key={index} className="table-row"> {/* Table columns */}
                        <div className="cell" style={{ flex: "2", paddingRight: "10px", overflow: "hidden" }}>
                            {item.logo == null ?
                                <div style={{ height: "25px", width: "25px", marginRight: "10px" }}>
                                    <div style={{ height: "25px", width: "25px", backgroundColor: "silver", borderRadius: "50%" }}>
                                    </div>
                                </div>
                                : <img src={item.logo} alt={`Logo${index}`} className="coin-icon" />}
                            <div className="coin-name-tag">
                                <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                                <div className="coin-acronym">{item.shortName}</div>
                            </div>
                        </div>
                        <div className="cell" style={{ flex: "1" }}>{item.bid}</div>
                        <div className="cell" style={{ flex: "1" }}>{item.ask}</div>
                        <div className="cell" style={{ flex: "1" }}>{item.spread}</div>
                        <div className="button-cell" style={{ flex: "1" }}><CustomButton name={"SELL"} /></div>
                        <div className="button-cell" style={{ flex: "1" }}><CustomButton name={"BUY"} /></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CryptoTable;