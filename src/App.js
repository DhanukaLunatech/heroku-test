import "./App.css"
import React, { useState, useEffect } from 'react';

import { processForexData, processCryptoData, processCommodityData, processIndiciesData } from "./util/DataProcessor";
import {
  defaultForexData,
  defaultCryptoData, defaultCommodityData, defaultIndiciesData
} from "./datamodels/Models"
import { menuOptionsdata, dataFetchPeriod } from "./config/CommonConfig";
import { forexKeyList } from "./config/ForexConfig";
import { cryptoKeyList } from "./config/CryptoConfig";
import { commodityKeyList } from "./config/CommodityConfig";
import { indiciesKeyList } from "./config/IndConfig";
import { client } from "./adapters/Adapter"

import CryptoTable from "./components/CryptoTable";
import IndiciesTable from "./components/IndiciesTable";
import ForexTable from "./components/ForexTable";

function App({ domElement }) {

  const [forexData, setForexData] = useState([...Array(5)].map(item => defaultForexData));
  const [cryptoData, setCryptoData] = useState([...Array(5)].map(item => defaultCryptoData));
  const [commodityData, setCommodityData] = useState([...Array(5)].map(item => defaultCommodityData));
  const [indiciesData, setIndiciesData] = useState([...Array(5)].map(item => defaultIndiciesData));

  const [tableArray, setTableArray] = useState([true, false, false, false]);   // Indicate the selected option in the menu.
  const [isErrorLoading, setErrorLoading] = useState(false);                   // Whether the data fetching successful.

  /* Method used to fetch data to populate tables. */
  const getData = () => client.get().then((res) => {

    if (isErrorLoading === true) {
      setErrorLoading(false);
    }

    setForexData(processForexData(res.data.us07.concat(res.data.us01), forexKeyList));
    setCryptoData(processCryptoData(res.data.us07.concat(res.data.us01), cryptoKeyList));
    setCommodityData(processCommodityData(res.data.us07.concat(res.data.us01), commodityKeyList));
    setIndiciesData(processIndiciesData(res.data.us07.concat(res.data.us01), indiciesKeyList));

  }).catch(error => {
    // setError(error);
    setErrorLoading(true);
    console.log(error);

    // Using sample data for demo purposes
    // setForexData(sampleForexData);
    // setCryptoData(sampleCryptoData);
    // setCommodityData(sampleCommodityData);
    // setIndiciesData(sampleIndiciesData);
  });

  /* Method used to generate error object sent to the table. */
  const generateErrorObj = array => {
    return (array.map(obj => {
      return (obj.currencyFrom !== undefined) ?
        {
          ...obj,
          currencyFrom: "Failure",
          currencyTo: "Failure",
          bid: "...",
          ask: "...",
          spread: "..."
        }
        : {
          ...obj,
          name: "Data fetch failed",
          bid: "...",
          ask: "...",
          spread: "..."
        }
    }))
  }

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData()
    }, dataFetchPeriod)  // Fetching data every n-seconds.

    return () => clearInterval(interval)
  }, [])

  const menuClickHandler = event => {
    let newState = [false, false, false, false];
    newState[event.target.dataset.key] = true;
    setTableArray(newState)
    // console.log(event.target.dataset.key);
  };

  return (
    <div className="widget-container backdrop">
      <div className="table-menu-container">
        <div className="menu-bar"> {/* The menu bar above the table */}
          {menuOptionsdata.map((item, index) => <div
            className={(tableArray[index]) ?
              "menu-option-selected" :
              "menu-option"}
            onClick={menuClickHandler} key={index} data-key={index}>{item}
          </div>)}
        </div>
        {tableArray.map((state, index) => {
          /* Rendering the tables */
          if (state) {
            switch (index) {
              case 0:
                return <ForexTable tableData={isErrorLoading ? generateErrorObj(forexData) : forexData} />
              case 1:
                return <CryptoTable tableData={isErrorLoading ? generateErrorObj(cryptoData) : cryptoData} />
              case 2:
                return <CryptoTable tableData={isErrorLoading ? generateErrorObj(commodityData) : commodityData} />
              default:
                return <IndiciesTable tableData={isErrorLoading ? generateErrorObj(indiciesData) : indiciesData} />
            }
          }
        })}
      </div>
    </div>
  );
}

export default App;