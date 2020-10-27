import React from 'react'
import Main from './components/Main'
import Result from './components/Result'
import Question from './components/Question'
import './App.scss';

const NUM_OF_QUESTION = 12

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      curPos : 0,
      userName : ""
    }
  }

  handleBegin = (e) => {
    e.preventDefault();
    this.setState({
      curPos: 1,
      userName : e.target.name.value
    })
  }

  nextStep = () => {
    this.setState({
      curPos: this.state.curPos + 1,
    })
  }

  resetTest = () => {
    this.setState({
      curPos: 0,
    })
  }


  render(){
    const { curPos } = this.state;
    return (<div className="app">
      {
        curPos === 0 ? 
        <Main handleBegin={this.handleBegin}/> : 
        curPos > NUM_OF_QUESTION ? 
        <Result resetTest={this.resetTest}/> :
        <Question nextStep={this.nextStep} curPos={this.state.curPos} />
      }
    </div>)
  }
}

export default App;
