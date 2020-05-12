import React, { Component } from 'react';
import { Button } from './Input.js'

export class LIFOFIFOClassExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            List: "",
            fifo: "",
            lifo: "",
            r_fifo: "",
            r_lifo: "",
            index: 0
        }
        this.removedFIFO = [];
        this.removedLIFO = [];
        this.arr = [];
        this.arrFIFO = [];
        this.arrLIFO = [];
    }
    componentDidMount() {
        for (let r = 0; r < 50; r++) {
            this.arr.push(Data())
        }
    }
    handlePutIn = () => {

        this.arrLIFO.push(this.arr[this.state.index]);
        this.arrFIFO.push(this.arr[this.state.index]);

        this.setState({
            fifo: stringify(this.arrFIFO),
            lifo: stringify(this.arrLIFO),
            index: this.state.index + 1
        })
    }
    handleTakeOut = () => {

        this.removedLIFO.push(this.arrLIFO.pop());
        this.removedFIFO.push(this.arrFIFO.shift());

        this.setState({
            fifo: stringify(this.arrFIFO),
            lifo: stringify(this.arrLIFO),
            r_fifo: stringify(this.removedFIFO),
            r_lifo: stringify(this.removedLIFO),
        })
    }
    render() {
        return (
            <div>
                <div className="col_2">
                    <div style={{ borderRight: "2px solid black", margin: "auto" }}>
                        <Button onClick={this.handlePutIn} name={"Put In"} />
                        <Button onClick={this.handleTakeOut} name={"Take Out"} />
                    </div>
                    <span style={{ color: "blue", marginLeft: "5px" }}>The example uses country names as tasks. Clicking 'Put In' inserts a country into the queue and stack.
                By clicking 'Take Out', the queue and stack removes a country according to their processes.</span>
                </div>
                <div className="col2" style={{ marginTop: "10px" }}>
                    <fieldset>
                        <legend><b> QUEUE - FIFO Example</b></legend>
                        <p><span style={{ color: "blue" }}>{`[${this.state.fifo}]`}</span></p>
                        <hr style={{ height: "2px", borderWidth: "1px", color: "gray", backgroundColor: "gray" }} />
                        <p><span style={{ color: "blue" }}>{`[${this.state.r_fifo}]`}</span></p>
                    </fieldset>
                    <fieldset>
                        <legend><b> STACK - LIFO Example</b></legend>
                        <p><span>{`[${this.state.lifo}]`}</span></p>
                        <hr style={{ height: "2px", borderWidth: "1px", color: "gray", backgroundColor: "gray" }} />
                        <p><span style={{ color: "blue" }}>{`[${this.state.r_lifo}]`}</span></p>
                    </fieldset>
                </div>
                {/* <hr />
                <p><span style={{ color: "blue" }}>{this.state.List}</span></p> */}
            </div>
        );
    }

}
const stringify = (array) => {
    let list = ""
    for (let r = 0; r < array.length; r++) {
        list += `${r + 1}: "${array[r]}" `;
    }
    return list;
}
const Data = () => {
    const country = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Austrian Empire",
        "Azerbaijan",
        "Baden",
        "Bahamas, The",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Bavaria",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin (Dahomey)",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Brunswick and Lüneburg",
        "Bulgaria",
        "Burkina Faso (Upper Volta)",
        "Burma",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands, The",
        "Central African Republic",
        "Central American Federation*",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo Free State, The",
        "Costa Rica",
        "Cote d’Ivoire (Ivory Coast)",
        "Croatia",
        "Cuba",
        'Cyprus',
        "Czechia",
        "Czechoslovakia",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Duchy of Parma, The*",
        "East Germany (German Democratic Republic)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Federal Government of Germany (1848-49)*",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia, The",
        "Georgia",
        "Germany",
        "Ghana",
        "Grand Duchy of Tuscany, The*",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        'Guyana',
        'Haiti',
        'Hanover',
        'Hanseatic Republics*',
        'Hawaii*',
        'Hesse*',
        'Holy See',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kingdom of Serbia/Yugoslavia*',
        'Kiribati',
        'Korea',
        'Kosovo',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Lew Chew (Loochoo)* ',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mecklenburg-Schwerin*',
        'Mecklenburg-Strelitz*',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Nassau',
        'Nauru',
        'Nepal',
        'Netherlands, The',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North German Confederation*',
        'North German Union*',
        'North Macedonia',
        'Norway',
        'Oldenburg',
        'Oman',
        'Orange Free State*',
        'Pakistan',
        'Palau',
        'Panama',
        'Papal States*',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Piedmont-Sardinia*',
        'Poland',
        'Portugal',
        'Qatar',
        'Republic of Genoa*',
        'Republic of Korea (South Korea)',
        'Republic of the Congo',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Schaumburg-Lippe*',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands, The',
        'Somalia',
        'South Africa',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Tajikistan',
        'Tanzania',
        'Texas',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Two Sicilies*',
        'Uganda',
        'Ukraine',
        'Union of Soviet Socialist Republics*',
        'United Arab Emirates, The',
        'United Kingdom, The',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Vietnam',
        'Württemberg',
        'Yemen',
        'Zambia',
        'Zimbabwe',

    ]
    return country[Math.floor((Math.random() * 100) + 1)];
}

