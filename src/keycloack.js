import Keycloak from 'keycloak-js'
const keycloakConfig = {
   url: 'http://localhost:8880/auth', 
   realm: 'nextgencms', 
   clientId: 'training-request-portal'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
