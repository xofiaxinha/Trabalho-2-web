export function TextButton(props){
    return <button {...props}>{props.text}</button>;
}
export function IconButton(props){
    return <button><img src={props.source} alt={props.alt}/></button>;
}