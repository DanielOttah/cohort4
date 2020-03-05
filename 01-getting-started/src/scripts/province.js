const provinceCode = {
    getProvince: (pC) => {

        if (pC == "AB" || pC == "Ab" || pC == "aB" || pC == "ab") return "Alberta";
        else if (pC == "BC" || pC == "Bc" || pC == "bC" || pC == "bc") return "British Columbia";
        else if (pC == "MB" || pC == "Mb" || pC == "mB" || pC == "mb") return "Manitoba";
        else if (pC == "NB" || pC == "Nb" || pC == "nB" || pC == "nb") return "New Brunswick";
        else if (pC == "NL" || pC == "Nl" || pC == "nL" || pC == "nl") return "Newfoundland and Labrador";
        else if (pC == "NS" || pC == "Ns" || pC == "nS" || pC == "ns") return "Nova Scotia";
        else if (pC == "ON" || pC == "On" || pC == "oN" || pC == "on") return "Ontario";
        else if (pC == "PE" || pC == "Pe" || pC == "pE" || pC == "pe") return "Prince Edward Island";
        else if (pC == "SK" || pC == "Sk" || pC == "sK" || pC == "sk") return "Saskatchewan";
        else if (pC == "NT" || pC == "Nt" || pC == "nT" || pC == "nt") return "Northwest Territories";
        else if (pC == "NU" || pC == "Nu" || pC == "nU" || pC == "nu") return "Nunavut";
        else if (pC == "YT" || pC == "Yt" || pC == "yT" || pC == "yt") return "Yukon";
        else if (pC == "QC" || pC == "Qc" || pC == "qC" || pC == "qc") return "Quebec";
        else {
            return "Not a valid provincial code";
        }
    }
};
export default provinceCode;