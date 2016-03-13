
import { Switch, Panel, Space, Input } from 'rebass'
import ReactDOM from 'react-dom'
import { Flex } from 'reflexbox'
import React from 'react'

const Counter = React.createClass({
  getInitialState () {
    return {
      counter: this.props.init || 0,
      incrementBy: 1,
      checked: false
    }
  },

  onIncrement (e) {
    this.state.checked
      ? this.setState({ counter: this.state.counter + this.state.incrementBy })
      : this.setState({ counter: this.state.counter - this.state.incrementBy })
  },

  onChange (e) {
    console.log(e.target.value)
    this.setState({ incrementBy: ~~e.target.value })
  },

  onSwitch () {
    this.setState({ checked: !this.state.checked })
  },

  render () {
    return (
      <Panel theme="info">
        <Flex align='center'>
          <Input
            label="Increment Count By"
            name="input_example"
            defaultValue={this.state.incrementBy}
            rounded={true}
            type="text"
            onChange={this.onChange}
          />

          <Space x={2} />

          <Switch checked={this.state.checked} onClick={this.onSwitch} />

          <Space x={2} />

          <button onClick={this.onIncrement}>
            { this.state.checked ? '+' : '-' }
          </button>
        </Flex>
        <h1>{this.state.counter}</h1>
      </Panel>
    )
  }
})

const CounterList = React.createClass({
  getInitialState () {
    return {
      counterList: [
        0,
        4,
        2,
        6
      ]
    }
  },

  render () {
    return (
      <div>
        {
          this.state.counterList.map((count, i) => (
            <Counter key={i} init={count} />
          ))
        }
      </div>
    )
  }
})

ReactDOM.render(
  <CounterList />,
  document.getElementById('root')
)