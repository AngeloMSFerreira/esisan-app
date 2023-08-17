import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Replace ReactDOM.render with createRoot from react-dom/client
createRoot(document.getElementById('root')).render(<App />);

/*
1. [DONE]Find out how to debug with breakpoints - DONE
2. [DONE]Find out what is being retrieved from the api - CORS Error - sorted, has to do with incorrect HTTP/S access
3. API currently kicking back with bad request - investigate request and check response......
4. Adapt front end code to add the file to the table regardless it is validated or not, then add the result/status to it.
*/