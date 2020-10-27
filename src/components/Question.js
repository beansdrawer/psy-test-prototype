import React from 'react'
import EachQuestion from './EachQuestion'

export default class Question extends React.Component{
    render(){
        return (<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <EachQuestion nextStep={this.props.nextStep} curPos={this.props.curPos} />
        </div>)
    }
}