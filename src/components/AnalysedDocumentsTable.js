//Responsible for displaying the analyzed document results/indicators in a table format.

import React, { useEffect, useState } from 'react';
import { analyzeDocument } from '../api'; // Assuming you have an API function to fetch document results

const AnalysedDocumentsTable = () => {
  const [documentResults, setDocumentResults] = useState([]);

  useEffect(() => {
    // Fetch the document results when the component mounts
    fetchDocumentResults();
  }, []);

  const fetchDocumentResults = async () => {
    try {
      const results = await analyzeDocument(); // Call your API function to fetch document results
      setDocumentResults(results);
    } catch (error) {
      console.error('Error fetching document results:', error);
    }
  };

  return (
    <div>
      <h2>Document Results</h2>
      <table>
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Indicator 1</th>
            <th>Indicator 2</th>
            {/* Add more column headers for additional indicators */}
          </tr>
        </thead>
        <tbody>
          {documentResults.map((result) => (
            <tr key={result.documentName}>
              <td>{result.documentName}</td>
              <td>{result.indicator1}</td>
              <td>{result.indicator2}</td>
              {/* Add more table cells for additional indicators */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalysedDocumentsTable;
