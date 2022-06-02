import React from 'react'

function TableHeader() {
    return (
        <div className="table-header"> {/* Table header */}
            <div className="cell" style={{ flex: "2", paddingLeft: "20px" }}>NAME</div>
            <div className="cell" style={{ flex: "1" }}>BID</div>
            <div className="cell" style={{ flex: "1" }}>ASK</div>
            <div className="cell" style={{ flex: "1" }}>SPREAD</div>
            <div className="cell" style={{ flex: "1" }}></div>
            <div className="cell" style={{ flex: "1" }}></div>
        </div>
    )
}

export default TableHeader;
