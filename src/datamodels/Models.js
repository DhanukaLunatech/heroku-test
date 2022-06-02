import btcLogo from "./../resources/newicons/Crypto/BTC.png"
import btcashLogo from "./../resources/newicons/Crypto/BTCash.png"
import ethLogo from "./../resources/newicons/Crypto/ETH.png"
import ltcoinLogo from "./../resources/newicons/Crypto/Litecoin.png"
import ripLogo from "./../resources/newicons/Crypto/Ripple.png"

import brentLogo from "./../resources/newicons/Commodities/BRENT.png"
import goldLogo from "./../resources/newicons/Commodities/Gold.png"
import silverLogo from "./../resources/newicons/Commodities/Silver.png"
import wtiLogo from "./../resources/newicons/Commodities/WTI.png"

import dowJonesLogo from "./../resources/newicons/ETF/Dow-Jones.png"
import euroStoxxLogo from "./../resources/newicons/ETF/Euro-Stoxx.png"
import ftseLogo from "./../resources/newicons/ETF/FTSE.png"
import ger30Logo from "./../resources/newicons/ETF/GER30.png"
import nasdaqLogo from "./../resources/newicons/ETF/Nasdaq.png"
import snp500Logo from "./../resources/newicons/ETF/S&P-500.png"

import usaFlag from "./../resources/newicons/Forex/USA.png"
import jpnFlag from "./../resources/newicons/Forex/Japan.png"
import ausFlag from "./../resources/newicons/Forex/Australia.png"
import eurFlag from "./../resources/newicons/Forex/Europe.png"
import swissFlag from "./../resources/newicons/Forex/Swiss.png"
import ukFlag from "./../resources/newicons/Forex/UK.png"

/* ------------------------------------ Sample Data ------------------------------------ */
export const sampleForexData = [
    { currencyFrom: "AUD", currencyTo: "USD", currencyFromLogo: ausFlag, currencyToLogo: usaFlag, bid: 1.1829, ask: 1.1829, idChange: 0.94, spread: 0.1 },
    { currencyFrom: "EUR", currencyTo: "JPY", currencyFromLogo: eurFlag, currencyToLogo: jpnFlag, bid: 131.18, ask: 131.18, idChange: -0.44, spread: 0.3 },
    { currencyFrom: "EUR", currencyTo: "USD", currencyFromLogo: eurFlag, currencyToLogo: usaFlag, bid: 0.7458, ask: 0.7458, idChange: 1.12, spread: 0.2 },
    { currencyFrom: "GBP", currencyTo: "USD", currencyFromLogo: ukFlag, currencyToLogo: usaFlag, bid: 0.8625, ask: 0.8625, idChange: 1.57, spread: 0.1 },
    { currencyFrom: "CHF", currencyTo: "GBP", currencyFromLogo: swissFlag, currencyToLogo: ukFlag, bid: 89.965, ask: 89.965, idChange: -0.72, spread: 0.2 }];

export const sampleCryptoData = [
    { name: "Bitcoin", shortName: null, logo: btcLogo, bid: 44873.40, ask: 44973.40, idChange: 0.94, spread: 0.1 },
    { name: "Ripple", shortName: null, logo: ripLogo, bid: 366.05, ask: 366.92, idChange: -0.44, spread: 0.3 },
    { name: "Bitcoin Cash", shortName: null, logo: btcashLogo, bid: 1.536, ask: 1.512, idChange: 1.12, spread: 0.2 },
    { name: "Litecoin", shortName: null, logo: ltcoinLogo, bid: 0.2468, ask: 0.7805, idChange: 1.57, spread: 0.1 },
    { name: "Ethureum", shortName: null, logo: ethLogo, bid: 2854.23, ask: 311.24, idChange: -0.72, spread: 0.2 }];

export const sampleIndiciesData = [
    { name: "Dow Jones Industrial", logo: dowJonesLogo, bid: 1.1829, ask: 1.1829, idChange: 0.94, spread: 0.1 },
    { name: "S&P 500", logo: snp500Logo, bid: 131.18, ask: 131.18, idChange: -0.44, spread: 0.3 },
    { name: "FTSE 100 Index", logo: ftseLogo, bid: 0.7458, ask: 0.7458, idChange: 1.12, spread: 0.2 },
    { name: "Nasdaq Composite", logo: nasdaqLogo, bid: 0.8625, ask: 0.8625, idChange: 1.57, spread: 0.1 },
    { name: "Euro Stoxx", logo: euroStoxxLogo, bid: 0.8625, ask: 0.8625, idChange: 1.57, spread: 0.1 },
    { name: "GER30", logo: ger30Logo, bid: 89.965, ask: 89.965, idChange: -0.72, spread: 0.2 }];

export const sampleCommodityData = [
    { name: "Brent", shortName: null, logo: brentLogo, bid: 44873.40, ask: 44973.40, idChange: 0.94, spread: 0.1 },
    { name: "Gold", shortName: null, logo: goldLogo, bid: 366.05, ask: 366.92, idChange: -0.44, spread: 0.3 },
    { name: "Silver", shortName: null, logo: silverLogo, bid: 1.536, ask: 1.512, idChange: 1.12, spread: 0.2 },
    { name: "WTI", shortName: null, logo: wtiLogo, bid: 0.2468, ask: 0.7805, idChange: 1.57, spread: 0.1 },
    { name: "Ethureum", shortName: null, logo: ethLogo, bid: 2854.23, ask: 311.24, idChange: -0.72, spread: 0.2 },
    { name: "Ethureum", shortName: null, logo: ethLogo, bid: 2854.23, ask: 311.24, idChange: -0.72, spread: 0.2 },
    { name: "Ethureum", shortName: null, logo: ethLogo, bid: 2854.23, ask: 311.24, idChange: -0.72, spread: 0.2 },
    { name: "Ethureum", shortName: null, logo: ethLogo, bid: 2854.23, ask: 311.24, idChange: -0.72, spread: 0.2 },
    { name: "Ethureum", shortName: null, logo: ethLogo, bid: 2854.23, ask: 311.24, idChange: -0.72, spread: 0.2 }];

/* ------------------------------------ Placeholder Data Models ------------------------------------ */
export const defaultForexData = { currencyFrom: "Loading...", currencyTo: "Loading...", currencyFromLogo: null, currencyToLogo: null, bid: "...", ask: "...", idChange: 0.0, spread: "..." };

export const defaultCryptoData = { name: "Loading...", shortName: null, logo: null, bid: "...", ask: "...", idChange: 0.0, spread: "..." };

export const defaultCommodityData = { name: "Loading...", shortName: null, logo: null, bid: "...", ask: "...", idChange: 0.0, spread: "..." };

export const defaultIndiciesData = { name: "Loading...", logo: null, bid: "...", ask: "...", idChange: 0.0, spread: "..." };