const IterationSample=()=>{
    const names=['snowman','snow','ice','wind'];
        const nameList=names.map((name,index)=><li key={index}>{name}</li>);
    return (
        <ul> {nameList}</ul>
    )
}
export default IterationSample;