import { Messanger } from './components/Messanger';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SocketProvider from './context/socketProvider';

function App() {

  const clientId = '959286718238-rmjkusgamad9ohgb8av3cq1c65mbms59.apps.googleusercontent.com'


  return (
    <div className="App">
      
      <GoogleOAuthProvider clientId={clientId}>
        <SocketProvider>
        <Messanger />



        </SocketProvider>        
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
