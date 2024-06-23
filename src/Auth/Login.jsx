import { useState, useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom";
import { Input, Button, FormField, Form, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { user, signIn } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await signIn(username, password)
    } catch (err) {
      setError(err.message)
    }
  }

  // If the user is logged in, don't show the login form
  if (user) {
    // Redirect to the profile page
    return <Navigate to="/profile" />
  }

  return (
    <Segment>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormField>
        <FormField>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </FormField>
        {error && <p className="error">{error}</p>}
        
        <Link to="/forgot-password">Reset Password</Link>
        <Link to="/confirm-sign-up">Confirm</Link>
        <p>
          <Button primary type="submit">Login</Button>
        </p>
      </Form>
    </Segment>
  )
}