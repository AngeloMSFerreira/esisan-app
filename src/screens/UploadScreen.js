import React, { useState } from 'react';
import { validateDocument } from '../api';
import { Button, Typography } from '@mui/material';
import DocumentTable from '../components/DocumentTable';

const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [documents, setDocuments] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        console.log("File {"+ selectedFile.name +"} selected for upload")
        setUploadStatus('Uploading...');
        await validateAndUploadDocument(selectedFile);
        setUploadStatus('Upload successful!');
      } catch (error) {
        setUploadStatus('Upload failed.');
        // Handle error
      }
    } else {
      setUploadStatus('No file selected.');
    }
  };

  const validateAndUploadDocument = async (file) => {
    try {
      await validateDocument(file);
      // Implement the logic to upload the document to the server
      const document = {
        id: Date.now(),
        name: file.name,
        status: 'Pending',
      };
      setDocuments((prevDocuments) => [...prevDocuments, document]);
    } catch (error) {
      // Handle validation error
      throw error;
    }
  };

  return (
    <div>
      <Typography variant="h5">Upload Documents</Typography>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" onClick={handleUpload}>Upload</Button>
      <Typography>{uploadStatus}</Typography>
      <DocumentTable documents={documents} />
    </div>
  );
};

export default UploadScreen;
