import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/form.js';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
    <Form />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);