function Table(props){
    return(
        <div className="table-container">
            {props.children}
        </div>
    )
}
function TableHeader(props){
    return(
        <div className="table-header">
            {props.children}
        </div>
    )
}
function TableRow(props){
    return(
        <div className="table-row">
            {props.children}
        </div>
    )
}
function TableCell(props){
    const cname = "table-cell" + (props.className ? " " + props.className : "");
    return(
        <div className={cname}>
            {props.children}
        </div>
    )
}

export default {Table, TableHeader, TableRow, TableCell};