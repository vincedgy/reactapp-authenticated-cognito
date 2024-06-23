import { useState } from "react"
import { signUp } from "./auth"
import { Button, Form, FormInput, Segment } from "semantic-ui-react"

export default function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await signUp(username, email, password)
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    }
  }

  if (success) {
    return (
      <Segment>
        <h2>Signup successful!</h2>
        <p>Please check your email for the confirmation code.</p>
      </Segment>
    )
  }

  return (
    <Segment>
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button primary submit>Signup</Button>
      </Form>
      <p>
        {error && <p>{error}</p>}
      </p>
    </Segment>
  )
}