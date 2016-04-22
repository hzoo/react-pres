// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// code slide
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {

};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={250} progress="bar">
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              React
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              UI = f(state)
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Text caps lineHeight={1} textColor="white">
              Outline
            </Text>
            <List>
              <ListItem>Components</ListItem>
              <Appear><ListItem>JSX</ListItem></Appear>
              <Appear><ListItem>React API</ListItem></Appear>
              <Appear><ListItem>React as Platform</ListItem></Appear>
              <Appear><ListItem>State Management</ListItem></Appear>
              <Appear><ListItem>Styling</ListItem></Appear>
              <Appear><ListItem>Other Tools</ListItem></Appear>
            </List>
          </Slide>
          <Slide notes="html to jsx">
            <Link href="//facebook.github.io/react/html-jsx.html">
              <Heading bold caps textColor="tertiary">JSX and HTML</Heading>
            </Link>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/htmltojsx.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide notes="react component lifecycle">
            <iframe
              height="600"
              width="100%"
              scrolling="no"
              src="//codepen.io/eduardoboucas/embed/jqWbdb/?height=600&theme-id=dark&default-tab=result"
              frameBorder="no"
              allowTransparency="true"
              allowFullscreen="true"
            >
            </iframe>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
