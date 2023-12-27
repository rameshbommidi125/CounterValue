import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {countingValue} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counting the value</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            Increment
          </button>
          <button onClick={this.onDecrement} className="button">
            Decrement
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
