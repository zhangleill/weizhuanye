import React, { Component } from 'react';
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import PropTypes from 'prop-types';
const stepType = {
    add:1,
    less:-1
}

export class InputNumber1 extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let { value, defaultValue, placeholder, step } = this.props
        defaultValue = Number(defaultValue) || 1
        value = value || value === 0 ? value: defaultValue
        // step = step || 1
        return (
            <div className="input-number">
                <input value={value}
                    onChange={this.valueChange}
                    onBlur={this._blur}
                    placeholder={placeholder || ""}
                >
                </input>
                <span className="step">
                    <UpOutlined onClick={()=> {this._step(stepType.add)}} 
                    style={{ flex: '0 0 50%', fontSize: '12px', color: '#d9d9d9', borderBottom: '1px solid #d9d9d9' }} 
                    />
                    <DownOutlined onClick={()=> {this._step(stepType.less)}}
                     style={{ flex: '0 0 50%', fontSize: '12px', color: '#d9d9d9' }} 
                     />
                </span>
            </div>
        )
    }
    _step = (type)=> {
        let { value, step } = this.props
        step = step || 1;
        step = type === stepType.add ? Math.abs(step) : 0 - Math.abs(step)
        let val = value + step
        this.props.onChange(val)
    }
    _blur = (event) => {
        let val = event.target.value;
        let { max, min } = this.props;
        if (val) {
            if ((/\D+/g).exec(val)) {
                val = Number(val.replace(/\D+/g, ''));
            }
            if (min && Number(min) > val) {
                val = min
            }
            if (max && Number(max) < val) {
                val = max
            }
        }
        if (val !== event.target.value) {
            this.props.onChange && this.props.onChange(val)
        }

    }
    valueChange = (event) => {
        const val = event.target.value;
        this.props.onChange(val)
    }
}
InputNumber1.propTypes = {
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    placeholder: PropTypes.string,
    step: PropTypes.number
}