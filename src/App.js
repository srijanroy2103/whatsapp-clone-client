import './App.css';

import Messenger from './components/Messenger';

import { GoogleOAuthProvider } from '@react-oauth/google';

import AccountProvider from './context/AccountProvider';

function App() {
const clientId = '381063488390-acmo63j18td1v23qi3hmffn51tsd7k5h.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId = {clientId} className="App">
      
      <AccountProvider>
        <Messenger />
      </AccountProvider>
     
    </GoogleOAuthProvider>
  );
}

export default App;
