export default function Input({content, changeInput}) {
    return <input type="text" value={content} onChange={changeInput}/>
};