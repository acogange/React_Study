import { Component } from "react";
class Counter extends Component{
    //1. constructor방식 초기값 지정
    // constructor(props){
    //     super(props);
    //     this.state={
    //         number:0,
    //         fixedNum:0
    //     };
    // }

    //2. 
    state={
        number:0,
        fixedNum:0
    };
    render(){
        const {number,fixedNum}=this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h1>나는 안바뀌지롱 : {fixedNum}</h1>
                <button onClick={()=>{this.setState({number:this.state.number+1})}}>
                    +1
                </button>
            </div>
        )
    }
}
export default Counter;