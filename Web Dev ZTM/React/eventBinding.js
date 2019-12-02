//! Event Binding Examples w/ this and Arrow Functions

class App extends React.Component {

  constructor(){
    super()
    this.handleClick2 = this.handleClick1.bind(this)
  }

  handleClick1() {
    console.log('button 1 clicked')
  }

  handleClick3 = () => console.log('button 3 clicked')
  
  render() {
    return() {
      <div>
        <button onClick={this.handleClick1()}>click1</button>
        <button onClick={this.handleClick1}>click2</button>
        <button onClick={this.handleClick2}>click3</button>
        <button onClick={this.handleClick3}>click4</button>
      </div>
    }
  }
}
