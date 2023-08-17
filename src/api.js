import axios from 'axios';

//axios.defaults.baseURL = 'http://esisan-dev.azurewebsites.net/esisan/v1';
axios.defaults.baseURL = 'https://localhost:5001/esisan/v1';

export const validateDocument = async (document) => {
  try {
    const response = await axios.post('/Document/Validate', document);
    debugger;
    return response.data;
  } catch (error) {
    console.error('Error validating document:', error);
    throw error;
  }
};

export const analyzeDocument = async (document) => {
  try {
    // Get the first loan type ID from getLoanTypes request
    const loanTypesResponse = await getLoanTypes();
    const firstLoanTypeId = loanTypesResponse[0].id;

    // Create FormData object and append the file and loanTypeId
    const formData = new FormData();
    formData.append('LoanTypeId', firstLoanTypeId);
    formData.append('File', document);

    const response = await axios.post('/v1/Document/Analyse', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing document:', error);
    throw error;
  }
};

export const getLoanTypes = async () => {
  try {
    const response = await axios.get('/Loan/LoanTypes');
    return response.data;
  } catch (error) {
    console.error('Error fetching loan types:', error);
    throw error;
  }
};
