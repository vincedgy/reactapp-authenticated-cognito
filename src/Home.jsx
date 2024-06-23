import { useContext, useState } from "react";
import { AuthContext } from "./Auth/AuthContext";
import {
  Container,
  Segment,
  Header,
  Button,
  Image,
  Placeholder,
  PlaceholderImage,
  PlaceholderHeader,
  PlaceholderParagraph,
  PlaceholderLine,
  CardContent,
} from "semantic-ui-react";

function Home() {
  const { user, signOut } = useContext(AuthContext);
  const [catPhoto, setCatPhoto ] = useState(null)

  return (
    <div>
      <Header as="h1">Welcome !</Header>
      {user ? (
        <Container>
          <Header as="h3">Now you are logged in.</Header>
          <Segment>
            <CardContent>
            {catPhoto ? (
              <Image
                src={{uri: catPhoto}}
                size="medium"
                bordered
              />
            ) : (
              <Placeholder>
                <PlaceholderImage square />
              </Placeholder>
            )}
            </CardContent>
          </Segment>
          <Button secondary onClick={signOut}>
            Sign Out
          </Button>
        </Container>
      ) : (
        <Container>
          <Header as="h3">You're not logged in</Header>
          <p>Please log in to access more features.</p>
        </Container>
      )}
    </div>
  );
}

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={3}
    style={{ width: "300px" }}
  >
    <Slider>
      <CustomCardSlide
        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CustomCardSlide
        header="Elliot Baker"
        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
        index={1}
        meta="Friend"
      />
      <CustomCardSlide
        header="Steve Sanders"
        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
        index={2}
        meta="Friend"
      />
    </Slider>

    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default Home;
