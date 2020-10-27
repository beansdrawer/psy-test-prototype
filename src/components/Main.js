import React from 'react'
import '../styles/Main.scss'

export default class Main extends React.Component{
    render(){
        return (<div>
            <h1>심리테스트 프로토타입</h1>
            <form onSubmit={(e) => this.props.handleBegin(e)}>
                <div className="field">
                    <input type="text" 
                    name="name" maxLength="15" 
                    placeholder="이름을 입력하세요" autoComplete="off"
                    />
                </div>
                <div className="field"><button type="submit">시작하기</button></div>
            </form>
            <p className="maker">MADE BY LAZY CODER</p>
        </div>)
    }
}