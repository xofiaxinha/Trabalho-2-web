export function TextButton(props){
    const c = props.className ? props.className + " text-button" : "text-button";
    return <button {...props} className={c}>{props.text}</button>;
}
export function IconButton(props){
    return <button {...props} className="img-button"><img src={props.source} alt={props.alt}/></button>;
}