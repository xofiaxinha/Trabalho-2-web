import './table.css';

export function Table(props){
    return(
        <div className="table table-container">
            {props.children}
        </div>
    )
}
export function TableHeader(props){
    return(
        <div className="table table-header">
            {props.children}
        </div>
    )
}
export function TableRow(props){
    return(
        <div className="table table-row">
            {props.children}
        </div>
    )
}
export function TableCell(props){
    const cname = "table table-cell" + (props.className ? " " + props.className : "");
    return(
        <div className={cname}>
            {props.children}
        </div>
    )
}

//export default {Table, TableHeader, TableRow, TableCell};