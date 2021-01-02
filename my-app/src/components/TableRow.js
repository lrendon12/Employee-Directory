import React from "react";

function TableRow(props) {
  return (
    <tr>
    <td><img alt={props.name} src={props.image}></img></td>
    <td>{props.first} {props.last} </td>
    <td>{props.phonenumber}</td>
    <td>{props.email}</td>
    <td>{props.dateofbirth}</td>
  </tr>
  );
}

export default TableRow;
