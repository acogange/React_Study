import React, { useEffect, useReducer, useState } from "react";
function reducer(state, action){
    return {
        ...state, [action.name]:action.value
    };
}
const Info=()=>{
    const [state, dispatch]=useReducer(reducer,{name:'',nickname:''});
    const {name, nickname}=state;
    //const [name,setName]=useState('');
    //const [nickname, setNickname]=useState('');

    // useEffect(()=>{
    //     console.log(name);
    //     // console.log({name, nickname});
    // },[name])

    const onChange=e=>{
        dispatch(e.target);
    }
    // const onChangeName=e=>{
    //     setName(e.target.value);
    // }
    // const onChangeNickname=e=>{
    //     setNickname(e.target.value);
    // }

    return (
        <>
            <div>
                <input name="name" value={name} onChange={onChange}></input>
                <input name="nickname" value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </>
    )
}
export default Info;