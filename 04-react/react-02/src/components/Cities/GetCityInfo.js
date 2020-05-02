import React, { Component } from 'react';
import Button from './Button';

class GetCityInfo extends Component {

    OpenCity = (evt) => {
        let cityName = "";
        if (evt.currentTarget.id === "btn1") {
            cityName = "cont1"
        } else if (evt.currentTarget.id === "btn2") {
            cityName = "cont2"
        } else if (evt.currentTarget.id === "btn3") {
            cityName = "cont3"
        }
        else if (evt.currentTarget.id === "btn4") {
            cityName = "cont4"
        } else if (evt.currentTarget.id === "btn5") {
            cityName = "cont5"
        }
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        //console.log(evt.currentTarget);//.style.display;// = "block";
        evt.currentTarget.className += " active";
    }
    render() {
        return (
            <div style={{ overflowY: "auto" }}>
                <fieldset style={{ overflow: "hidden" }}>
                    <legend><b>Did you Know?</b></legend>
                    <div className="tab">
                        <Button id={'btn1'} className={"tablinks"} onClick={this.OpenCity} name={"Info 1"} />
                        <Button id={'btn2'} className={"tablinks"} onClick={this.OpenCity} name={"Info 2"} />
                        <Button id={'btn3'} className={"tablinks"} onClick={this.OpenCity} name={"Info 3"} />
                        <Button id={'btn4'} className={"tablinks"} onClick={this.OpenCity} name={"Info 4"} />
                        <Button id={'btn5'} className={"tablinks"} onClick={this.OpenCity} name={"Info 5"} />
                    </div>
                    <div id="cont1" className="tabcontent">

                        <p><span className="InfoText">{this.props.info[0]}.</span></p>
                    </div>

                    <div id="cont2" className="tabcontent">

                        <p><span className="InfoText">{this.props.info[1]}.</span></p>
                    </div>

                    <div id="cont3" className="tabcontent">

                        <p><span className="InfoText">{this.props.info[2]}.</span></p>
                    </div>
                    <div id="cont4" className="tabcontent">

                        <p><span className="InfoText">{this.props.info[3]}.</span></p>
                    </div>
                    <div id="cont5" className="tabcontent">
                        <p><span className="InfoText">{this.props.info[4]}.</span></p>
                    </div>
                </fieldset>
            </div>
        );
    }
}

// function OpenCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
export default GetCityInfo;