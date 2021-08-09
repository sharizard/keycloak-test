import React from 'react';
import { useKeycloak } from '@react-keycloak/web';


const ProtectedPage = () => {
    const [keycloak, initialized] = useKeycloak();
 
    return !!keycloak?.authenticated && (
        <h1>Protected</h1>
    );
}

export default ProtectedPage;