export function TextButton(props){
    return <button {...props} className="text-button">{props.text}</button>;
}
export function IconButton(props){
    return <button className="img-button"><img src={props.source} alt={props.alt}/></button>;
}