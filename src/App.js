import React, {useState, useEffect} from "react";
import './App.css';

function App() {
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

  const handleSubmit = (event) => {
      event.preventDefault();
      setSubmittedData(rows);
      setIsSubmitted(true);
  };

  return (
      <div>
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
                  </div>
              ))}
              <button type="button" onClick={handleAddRow}>+</button>
              <button type="submit">Submit</button>
          </form>
          {isSubmitted && (
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
                      {submittedData.map((data, index) => (
                          <tr key={index}>
                              <td>{data.item}</td>
                              <td>{data.cost}</td>
                              <td>{data.quantity}</td>
                              <td>{data.unit}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          )}
      </div>
  );
}

export default App;
