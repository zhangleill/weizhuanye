import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Child, Parent } from './testCompent'
import { InputNumber1 } from './component/input-number'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";
import { confirm } from './component/confirm'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      value1: null
    }
  }
  async componentDidMount() {
    let res = await confirm("确定删除吗")
    if (res) {
      console.log("是")
    } else {
      console.log("否")
    }
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <InputNumber1 value={value} onChange={this.valueChange} />
        <InputNumber value={value} defaultValue='3' onChange={this.valueChange} />
      </div >
    )
  }

  valueChange = (e) => {
    // console.log(e)
    this.setState({
      value: e
    })
  }
}
