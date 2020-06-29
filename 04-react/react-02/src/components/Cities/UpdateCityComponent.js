import React, { Component } from 'react';
import CityInputField from './CityInputField.js'
import Button from './Button.js';


class UpdateCityComponent extends Component {
    render() {
        return (
            <div className="panel1" id="updateCityInfo">
                <fieldset style={{ margin: "0px" }}>
                    <legend ><b>Update City Information</b></legend>
                    <span className="tooltiptext" id="toolTip" style={{ display: this.props.toolTipStyle }}>{this.props.error_msg}</span>

                    <table style={{ margin: "0px" }}>
                        <tbody>
                            <tr><td>
                                <CityInputField type={this.props.TextType} id={this.props.UpdateCityNameId} placeholder={"Name"}
                                    value={this.props.nameValue} onChange={this.props.onChangeUpdateCityName} />
                            </td></tr>
                            <tr><td>
                                <CityInputField type={this.props.TextType} id={this.props.UpdateCityLatId} placeholder={"Latitude"}
                                    value={this.props.latValue} onChange={this.props.onChangeUpdateCityLat}
                                />
                            </td></tr>
                            <tr><td>
                                <CityInputField type={this.props.TextType} id={this.props.UpdateCityLonId} placeholder={"Longitude"}
                                    value={this.props.lonValue} onChange={this.props.onChangeUpdateCityLon} />
                            </td></tr>

                        </tbody>
                    </table>

                    <table style={{ margin: "0px" }}>
                        <tbody>
                            <tr>
                                <td>
                                    <CityInputField type={this.props.TextType} id={this.props.UpdateCityPopId} placeholder={"Population"}
                                        value={this.props.popValue} onChange={this.props.onChangeUpdateCityPop} />

                                    <select id="selectUpdateCityInfo" style={{ marginTop: "2px" }}>
                                        <option value="realPopulation">Is Real Population</option>
                                        <option value="movedIn">People Moved In</option>
                                        <option value="movedOut">People Moved Out</option>

                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button name={"Update City"} onClick={this.props.onClickUpdateCity} style={{ margin: " 2px 2px", width: "100%" }} />

                </fieldset>
            </div>
        );
    }
}

export default UpdateCityComponent;