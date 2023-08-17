import React, { useState } from 'react';
import { validateDocument, analyzeDocument } from '../api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const DocumentTable = () => {
  const [documents, setDocuments] = useState([]);

  const validateAndAddDocument = async (document) => {
    try {
      const response = await validateDocument(document);
      setDocuments((prevDocuments) => [...prevDocuments, response]);
    } catch (error) {
      // Handle error
    }
  };

  const handleAnalyse = async () => {
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];
      await analyzeDocument(document);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((document) => (
              <TableRow key={document.id}>
                <TableCell>{document.name}</TableCell>
                <TableCell>{document.bank}</TableCell>
                <TableCell>{document.status}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleAnalyse}>Analyse</Button>
    </div>
  );
};

export default DocumentTable;
