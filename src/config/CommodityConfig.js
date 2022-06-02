import brentLogo from "./../resources/newicons/Commodities/BRENT.png"
import goldLogo from "./../resources/newicons/Commodities/Gold.png"
import silverLogo from "./../resources/newicons/Commodities/Silver.png"
import wtiLogo from "./../resources/newicons/Commodities/WTI.png"

/* ------------------------------- Commodity related data ------------------------------ */
export const commodityIconMap = { "XAUUSD": goldLogo, "XAGUSD": silverLogo, "WTI": wtiLogo, "BRENT": brentLogo };

export const commodityLnameMap = { "XAUUSD": "Gold", "XAGUSD": "Silver", "WTI": "WTI Light Sweet Crude Oil", "BRENT": "Brent Crude Oil" };

/* Commodity data to display. */
export const commodityKeyList = ["XAUUSD", "XAGUSD", "WTI", "BRENT"];
