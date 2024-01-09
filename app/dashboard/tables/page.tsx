'use client';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import DataGrid from 'react-data-grid';

const ExcelPage = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const headers = data[0].map((col) => ({ key: col, name: col, editable: true }));
      const rows = data.slice(1).map((row, idx) => {
        const rowData = {};
        row.forEach((element, index) => {
          rowData[headers[index].key] = element;
        });
        return { id: idx, ...rowData };
      });
      setColumns(headers);
      setRows(rows);
      console.log(rows)
      console.log(headers)
    };
    reader.readAsBinaryString(file);
  };

  const handleRowUpdate = ({ fromRow, toRow, updated }) => {
    const updatedRows = rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      updatedRows[i] = { ...updatedRows[i], ...updated };
    }
    setRows(updatedRows);
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <DataGrid
        columns={columns}
        rows={rows}
        // onRowsChange={handleRowUpdate}
      />
    </div>
  );
};

export default ExcelPage;