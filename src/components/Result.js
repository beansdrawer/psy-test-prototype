import React from 'react'

export default class Result extends React.Component{
    render(){
        return (<div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <h1 class="temp">결과!</h1>
        {/* <button onClick={this.props.resetTest}>다시하기</button> */}
        </div>)
    }
}