import { useState } from "react"
import { confirmSignUp } from "./auth"
import { FormInput, Form, Button } from "semantic-ui-react"

export default function ConfirmSignUp() {
  const [username, setUsername] = useState("")
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await confirmSignUp(username, code)
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    }
  }

  if (success) {
    return (
      <div>
        <h2>Confirmation successful!</h2>
        <p>You can now log in with your credentials. Go rock that app!</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Confirm Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <label>Username</label>
        <FormInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Confirmation code</label>
        <FormInput
          type="text"
          placeholder="Confirmation code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button primary type="submit">Confirm</Button>
      </Form>
      {error && <p>{error}</p>}
    </div>
  )
}