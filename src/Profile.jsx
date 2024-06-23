import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";
import { Container, Header } from 'semantic-ui-react';

function Profile() {
  const { token } = useContext(AuthContext);

  return (
    <Container>
    <Header as="h1">Your profile</Header>
      <p>Your secret token is: {token}</p>
    </Container>
  );
}

export default Profile;