import React, { useState } from 'react';

function TableWithDropDown() {
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Column 1</td>
          <td>Row 1, Column 2</td>
          <td>
            <select value={selectedOption} onChange={handleOptionChange}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td>
          <td>Row 1, Column 4</td>
        </tr>
        <tr>
          <td>Row 2, Column 1</td>
          <td>Row 2, Column 2</td>
          <td>
            <select value={selectedOption} onChange={handleOptionChange}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td>
          <td>Row 2, Column 4</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableWithDropDown;