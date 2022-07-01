import { Component } from "react";

class LifeCycleSample extends Component{
    state={//상태 초기화 
        number:0,
        color:null,
    }

    myRef=null;

    constructor(props){//컴포넌트 만들때 처음으로 실행 (초기 state 설정가능)
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState){//props로 받아온 값을 state에 동기화
        // 컴포넌트 마운트나 업데이트시 호출
        console.log('getDerivedStateFromProps');
        if(nextProps.color!==prevState.color){//props의 값이 이전값과 다르면
            return {color:nextProps.color};//현재 props값으로 업데이트
            
        }
        return null;//아니면 냅두기
    }

    componentDidMount(){//컴포넌트 생성후 첫 렌더링 마친 후 실행
        //비동기 작업 처리(이벤트 등록, setTimeOut, setInterval, 네트워크 요청) 자바 스크립트 라이브러리나 프레임워크 함수 호출, 
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){//props, state 변경시 리렌더링 시작할지 여부 결정
        //true / false 반환
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number%10!==4;
    }

    componentWillUnmount(){//컴포넌트를 dom에서 제거할때 실행
        console.log('componentWillUnmount');

    }

    handleClick=()=>{
        this.setState({
            number:this.state.number+1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState){//render에서 만들어진 결과물이 브라우저에 반영되기 직전 호출
        //업데이트 직전값 참고할때 활용, componentDidUpdate함수에서 snapshot값으로 전달받음
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color!==this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState,snapshot){//리렌더링 완료 후 실행
        //컴포넌트가 이전에 가졌던 데이터에도 접근 가능, DOM 관련 처리 가능
        console.log('componentDidUpdate',prevProps. prevState);
        if(snapshot){
            console.log('업데이트 되기 직전 색: ',snapshot);
        }
    }
    render(){
        console.log('render');
        const style={
            color:this.props.color
        };
        return (
            <div>
                <h1 style={style} ref={ref=>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}export default LifeCycleSample;