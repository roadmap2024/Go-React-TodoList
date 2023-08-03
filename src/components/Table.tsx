import * as React from 'react';
import './style.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Pagination from '@mui/material/Pagination';


export default function TodoTable() {
  const [currentPage, setCurrentPage] = React.useState<number>(1);


  return (
    <div style={{ marginTop: "30px" }}>
      <table style={{ width: "100%", marginTop: "30px"}}>
        <thead>
          <tr>
            <th style={{ width: "7%" }}>No</th>
            <th style={{ width: "85%" }}>Content</th>
            <th style={{ width: "8%" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Content 1</td>
            <td>
              <IconButton sx={{ color: "#1565c0" }} aria-label="delete">
                <EditIcon />
              </IconButton>
              <IconButton sx={{ color: "#ff5358" }} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Content 2</td>
            <td>
              <IconButton sx={{ color: "#1565c0" }} aria-label="delete">
                <EditIcon />
              </IconButton>
              <IconButton sx={{ color: "#ff5358" }} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
        <Pagination
          color="primary"
          count={10}
          page={1}
        />
      </div>
    </div>
  );
}