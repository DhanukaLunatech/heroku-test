import dowJonesLogo from "./../resources/newicons/ETF/Dow-Jones.png"
import euroStoxxLogo from "./../resources/newicons/ETF/Euro-Stoxx.png"
import ftseLogo from "./../resources/newicons/ETF/FTSE.png"
import ger30Logo from "./../resources/newicons/ETF/GER30.png"
import nasdaqLogo from "./../resources/newicons/ETF/Nasdaq.png"
import snp500Logo from "./../resources/newicons/ETF/S&P-500.png"


/* ------------------------------- Indicies related data ------------------------------ */
export const indIconMap = {
    "DAX30": ger30Logo,
    "US30": dowJonesLogo,
    "SPX500": snp500Logo,
    "NAS100": nasdaqLogo,
    "ESTX50": euroStoxxLogo,
    "UK100": ftseLogo
};

export const indLnameMap = {
    "DAX30": "GER30",
    "US30": "Dow Jones",
    "SPX500": "S&P500",
    "NAS100": "NASDAQ",
    "ESTX50": "Euro Stoxx",
    "UK100": "FTSE"
};

/* Indicies data to display. */
export const indiciesKeyList = ["DAX30", "US30", "SPX500", "NAS100", "ESTX50", "UK100"];
// this US30 has 4 entries. - US30, US30, US30., US30.raw