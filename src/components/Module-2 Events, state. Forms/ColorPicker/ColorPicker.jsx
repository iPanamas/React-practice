import React, { Component } from 'react';
import './ColorPicker.module.css'

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 3,
    }

    render() {
        return (
            <div className="container">
        <h2 className="title">Color Picker</h2>
        <div>    
                    {this.props.options.map(({ label, color }, index) => {
                        const optionClasses = ["option"];
                        if (index === this.state.activeOptionIdx) {
                            optionClasses.push("option__active")
                        }

                        return (
                            <button
                            key={label}
                            className={optionClasses.join(' ')}
                            style={{ backgroundColor: color }}>
                            </button>
                            )
                        })}
        </div>
        </div>
        );
    }
}



export default ColorPicker;