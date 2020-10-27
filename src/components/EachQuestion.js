import React from 'react'
import { question } from '../utils/question'
import '../styles/Questions.scss'

export default class EachQuestion extends React.Component{
  render(){
    return (<section className="on-test">
      <ul className="stepper">
        {question.map((each, idx)=>{
          return <li key={idx} className="step">
            {idx == this.props.curPos-1 ? <div className="active">{idx+1}</div> : <div className="inactive"></div>}
          </li>
        })}
      </ul>
      <div className="question">
        <h2 style={{textAlign: 'center'}}>{`Q${this.props.curPos}. ${question[this.props.curPos-1].q}`}</h2>
        <div>
          {question[this.props.curPos-1].options.map((option, idx) => {
            return <div key={idx} className="option">
            <button onClick={this.props.nextStep} className="option__button">{option}</button>
            </div>
          })}
        </div>
      </div>
    </section>)
  }
}