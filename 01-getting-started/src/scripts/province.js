export const provinceCode = {
    getProvince: (pC) => {
        if (pC == "AB" || pC == "aB" || pC == "Ab" || pC == "ab") return "Alberta";
        else if (pC == "BC" || pC == "bC" || pC == "Bc" || pC == "bc") { return "British Columbia"; } else if (pC == "MB" || pC == "mB" || pC == "Mb" || pC == "mb") return "Manitoba";
        else if (pC == "NB" || pC == "NB" || pC == "NB" || pC == "nb") return "New Brunswick";
        else if (pC == "NL" || pC == "nL" || pC == "Nl" || pC == "nl") return "Newfoundland and Labrador";
        else if (pC == "NS" || pC == "nS" || pC == "Ns" || pC == "ns") return "Nova Scotia";
        else if (pC == "ON" || pC == "oN" || pC == "On" || pC == "on") return "Ontario";
        else if (pC == "PE" || pC == "pE" || pC == "Pe" || pC == "pe") return "Prince Edward Island";
        else if (pC == "SK" || pC == "sK" || pC == "Sk" || pC == "sk") return "Saskatchewan";
        else if (pC == "NT" || pC == "nT" || pC == "Nt" || pC == "nt") return "Northwest Territories";
        else if (pC == "NU" || pC == "nU" || pC == "Nu" || pC == "nu") return "Nunavut";
        else if (pC == "YT" || pC == "yT" || pC == "Yt" || pC == "yt") return "Yukon";
        else if (pC == "QC" || pC == "qC" || pC == "Qc" || pC == "qc") return "Quebec";
        else {
            return "Not a valid provincial code";
        }
    }
};

const provinces = {
    "ab": "Alberta",
    "bc": "British Columbia",
    "nb": "New Brunswick",
    "nl": "Newfoundland and Labrador",
    "ns": "Nova Scotia",
    "on": "Ontario",
    "pe": "Prince Edward Island",
    "sk": "Saskatchewan",
    "nt": "Northwest Territories",
    "nu": "Nunavut",
    "yt": "Yukon",
    "qc": "Quebec",
    "mb": "Manitoba"
}

export const getProvince = (pC) => {
    if (Object.keys(provinces).includes(pC.toLowerCase())) {
        return provinces[pC.toLowerCase()]
    }
    return "Not a valid provincial code";
}


