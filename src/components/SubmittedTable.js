import React from "react";

function SubmittedTable({ data }) {
  // Calculate the total cost of all inventory items
  const totalCost = data.reduce((acc, row) => {
    const rowTotal = parseFloat(row.cost) * parseFloat(row.quantity) || 0;
    return acc + rowTotal;
  }, 0).toFixed(2);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Quantity</th>
          <th>Unit of Measurement</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.item}</td>
            <td>{row.cost}</td>
            <td>{row.quantity}</td>
            <td>{row.unit}</td>
            <td>{(parseFloat(row.cost) * parseFloat(row.quantity)).toFixed(2) || 0}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Inventory Cost:</td>
          <td style={{ fontWeight: 'bold' }}>{totalCost}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default SubmittedTable;
