import React from "react";

function SubmittedTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Quantity</th>
          <th>Unit of Measurement</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.item}</td>
            <td>{row.cost}</td>
            <td>{row.quantity}</td>
            <td>{row.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubmittedTable;
