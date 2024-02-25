// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import LoginSignUp from './Components/LS/LoginSignUp.jsx';
import HomePage from './Components/Home/HomePage.jsx';
import FileUpload from './Components/Upload/FileUpload.jsx';
import FileRetrieve from './Components/Retrieve/FileRetrieve.jsx';
import './App.css';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}  ></Route>
        <Route path="file-upload" element={<FileUpload/>}  ></Route>
        <Route path="file-retrieve" element={<FileRetrieve/>}  ></Route>
      </Routes>
    </Router>
    </div>
  );
}
export default withAuthenticator(App);

//export default App; <Route path="/" element={<LoginSignUp/>} exact></Route>

