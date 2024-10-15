import React, { useState } from "react";
import ItemForm from './ItemForm';
import SubmittedTable from './SubmittedTable';

function ItemFormContainer() {
  const [rows, setRows] = useState([{ item: '', cost: '', quantity: '', unit: '' }]);
  const [submittedData, setSubmittedData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddRow = () => {
    const newRow = { item: '', cost: '', quantity: '', unit: '' };
    setRows([...rows, newRow]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = rows.map((row, idx) => {
      if (index === idx) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, idx) => idx !== index);
    setRows(updatedRows);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(rows);
    setIsSubmitted(true);
  };

  return (
    <div>
      <ItemForm 
        rows={rows} 
        handleAddRow={handleAddRow} 
        handleChange={handleChange} 
        handleDeleteRow={handleDeleteRow}
        handleSubmit={handleSubmit} 
      />
      {isSubmitted && <SubmittedTable data={submittedData} />}
    </div>
  );
}

export default ItemFormContainer;
