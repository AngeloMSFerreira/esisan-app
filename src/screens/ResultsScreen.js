//ResultsScreen.js: Displays the analyzed document results/indicators.

import React from 'react';
import AnalysedDocumentsTable from '../components/AnalysedDocumentsTable';

const ResultsScreen = () => {
  return (
    <div>
      <h2>Document Results</h2>
      <AnalysedDocumentsTable />
    </div>
  );
};

export default ResultsScreen;
