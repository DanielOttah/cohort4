import React, { Component } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

class SelectThemeList extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { selectTheme } = context;
                return (
                    <div>
                        <select id="selectTheme" onChange={selectTheme}>
                            <option value="None" >No Theme</option>
                            <option value="gray">Gray Theme</option>
                            <option value="blue">Blue Theme</option>
                            <option value="brown">Brown Theme</option>
                            <option value="green">Green Theme</option>
                        </select>
                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}

export default SelectThemeList;