import React from "react";

function ItemForm({ rows, handleAddRow, handleChange, handleDeleteRow, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      {rows.map((row, index) => (
        <div key={index} className="form-row">
          <input
            type="text"
            name="item"
            value={row.item}
            onChange={(e) => handleChange(index, e)}
            placeholder="Item"
          />
          <input
            type="text"
            name="cost"
            value={row.cost}
            onChange={(e) => handleChange(index, e)}
            placeholder="Cost"
          />
          <input
            type="number"
            name="quantity"
            value={row.quantity}
            onChange={(e) => handleChange(index, e)}
            placeholder="Quantity"
          />
          <input
            type="text"
            name="unit"
            value={row.unit}
            onChange={(e) => handleChange(index, e)}
            placeholder="Unit of measurement"
          />
          <button type="button" onClick={() => handleDeleteRow(index)}>-</button>
        </div>
      ))}
      <button type="button" onClick={handleAddRow}>+</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ItemForm;
