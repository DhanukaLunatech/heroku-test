import { flagIconMap } from "./../config/ForexConfig";
import { cryptoIconMap, cryptoLnameMap } from "./../config/CryptoConfig";
import { commodityIconMap, commodityLnameMap } from "./../config/CommodityConfig";
import { indIconMap, indLnameMap } from "./../config/IndConfig";


/* Filter required data from an input array. */
const filterData = (arrayIn, keyList) => {
    // res.data.us07
    var arrayOut = [];
    var dataMap = {};
    var counter = arrayIn.length;                   // Temporary data map used to filter most recent data.
    arrayIn.forEach(element => {
        if (keyList.includes(element.symbol.slice(0, 6))
            && ((dataMap[element.symbol.slice(0, 6)] === undefined) || (dataMap[element.symbol.slice(0, 6)].time < element.time))) {
            dataMap[element.symbol.slice(0, 6)] = element;      // Get the most recent item from the input array.
        }

        counter--;
        if (counter === 0) {
            arrayOut = Object.keys(dataMap).map(key => dataMap[key]);
        }
    });

    // arrayOut.push(element);
    return arrayOut;
}

/* Map forex data from the API response to the internal states. */
const mapForexData = (arrayIn) => {
    return arrayIn.map((item, index) => {
        var currencyFromName = item.symbol.slice(0, 3);
        var currencyToName = item.symbol.slice(3, 6);

        return ({
            currencyFrom: currencyFromName,
            currencyTo: currencyToName,
            currencyFromLogo: flagIconMap[currencyFromName],
            currencyToLogo: flagIconMap[currencyToName],
            bid: (item.bid >= 100) ? item.bid.toFixed(2) : item.bid.toFixed(4), // rounding off for n decimal points.
            ask: (item.ask >= 100) ? item.ask.toFixed(2) : item.ask.toFixed(4), // rounding off for n decimal points.
            idChange: 0.0,            // ??????????????? TODO
            spread: ((item.ask - item.bid) * Math.pow(10, item.digits - 2)).toFixed(2)
        })
    });
}

/* Map crypto data from the API response to the internal states. */
const mapCryptoData = (arrayIn) => {
    return arrayIn.map((item, index) => {
        var cryptoName = item.symbol.slice(0, 6);

        return ({
            name: cryptoLnameMap[cryptoName],
            shortName: null,          // Shortname is removed
            logo: cryptoIconMap[cryptoName],
            bid: item.bid.toFixed(2), // rounding off for n decimal points.
            ask: item.ask.toFixed(2), // rounding off for n decimal points.
            idChange: 0.0,            // ??????????????? TODO
            spread: ((item.ask - item.bid) * Math.pow(10, item.digits - 2)).toFixed(2)
        })
    });
}

/* Map commodity data from the API response to the internal states. */
const mapCommodityData = (arrayIn) => {
    return arrayIn.map((item, index) => {
        var commodityName = item.symbol.slice(0, 6);

        return ({
            name: commodityLnameMap[commodityName],
            shortName: null,          // Shortname is removed
            logo: commodityIconMap[commodityName],
            bid: item.bid.toFixed(2), // rounding off for n decimal points.
            ask: item.ask.toFixed(2), // rounding off for n decimal points.
            idChange: 0.0,            // ??????????????? TODO
            spread: ((item.ask - item.bid) * Math.pow(10, item.digits - 2)).toFixed(2)
        })
    });
}

/* Map indicies data from the API response to the internal states. */
const mapIndiciesData = (arrayIn) => {
    return arrayIn.map((item, index) => {
        var indName = item.symbol.slice(0, 6);

        return ({
            name: indLnameMap[indName],
            logo: indIconMap[indName],
            bid: item.bid.toFixed(2), // rounding off for n decimal points.
            ask: item.ask.toFixed(2), // rounding off for n decimal points.
            idChange: 0.0,            // ??????????????? TODO
            spread: ((item.ask - item.bid) * Math.pow(10, item.digits - 2)).toFixed(2)
        })
    });
}

export const processForexData = (arrayIn, keyList) => {
    return mapForexData(filterData(arrayIn, keyList));
}

export const processCryptoData = (arrayIn, keyList) => {
    return mapCryptoData(filterData(arrayIn, keyList));
}

export const processCommodityData = (arrayIn, keyList) => {
    return mapCommodityData(filterData(arrayIn, keyList));
}

export const processIndiciesData = (arrayIn, keyList) => {
    return mapIndiciesData(filterData(arrayIn, keyList));
}

