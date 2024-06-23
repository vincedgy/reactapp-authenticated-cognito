import { Container, Header } from "semantic-ui-react";
export default function About() {
  return (
    <Container>
      <Header as="h1">About...</Header>
      <Header as="h3">
        This is an example Single Page Application using AWS Cognito as Identity
        Provider
      </Header>
      <p>
        This example program demonstrates the creation of a Single Page
        Application (SPA) using ReactJS, Vite for compiling and packaging, and
        AWS Cognito for authentication. The application will cover the complete
        user authentication lifecycle, including user registration (signup),
        login (signin), password reset, and user verification.
      </p>

      <p>
        This example program covers the fundamental aspects of integrating AWS Cognito
        with a ReactJS SPA using Vite. It provides a complete user
        authentication lifecycle, including registration, login, password reset,
        and email verification. The structure and components can be further
        expanded and customized based on specific application needs.
      </p>
    </Container>
  );
}
