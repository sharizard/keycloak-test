import './App.css';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloack';
import { AppRouter } from './routes';

const initOptions = { pkceMethod: 'S256' }


function App() {
  const eventLogger = (event, error) => {
    console.log('onKeycloakEvent', event, error)
  }
  
  const tokenLogger = (tokens) => {
    console.log('onKeycloakTokens', tokens)
  }

  return (
    <ReactKeycloakProvider 
      authClient={keycloak} 
      onEvent={eventLogger}
      onTokens={tokenLogger}
      initOptions={initOptions}  
    >
    <div className="App">
      <AppRouter />
    </div>
    </ReactKeycloakProvider>
  );
}

export default App;
