import { useState } from "react";

const IterationSample=()=>{
    const [names, setNames]=useState([
        {id:1, text:'snowman'},
        {id:2, text:'snow'},
        {id: 3, text:'ice'}
    ]);
    const [inputText, setInputText]=useState('');
    const [nextId, setNextId]=useState(4);
    const onChange=e=>{
        setInputText(e.target.value);
    }
    const onClickHandler=()=>{
        const nextNames=names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }
    const onClickRemove=(id)=>{
        const nextNames=names.filter(name=>name.id!==id);
        setNames(nextNames);
    };

    const nameList=names.map((name)=><li key={name.id} onDoubleClick={()=>{
        onClickRemove(name.id)
    }}>{name.text}</li>);
    return (
        <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClickHandler}>추가</button>
        <ul> {nameList}</ul>
        </>
    )
}
export default IterationSample;