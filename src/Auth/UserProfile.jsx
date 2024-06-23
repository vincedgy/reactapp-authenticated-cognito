import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Button, Header, Segment } from "semantic-ui-react"

export default function UserProfile() {
  const { user, signOut } = useContext(AuthContext)

  return (
    <div>
      {user && (
        <Segment>
          <Header as="h2">Profile</Header>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Display any other user data here */}
        </Segment>
      )}
      <Button secondary onClick={signOut}>Sign Out</Button>
    </div>
  )
}