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
  S,
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
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              UI = f(state)
            </Heading>
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
            <Link href="https://facebook.github.io/react/docs/dom-differences.html">
              <S type="underline"><Text bold caps textColor="tertiary">DOM differences</Text></S>
            </Link>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/htmltojsx.example")}
            ranges={[
              { loc: [0, 20], title: "HTML to JSX" },
              { loc: [0, 5], title: "HTML" },
              { loc: [6, 17], title: "React Component with JSX" },
              { loc: [9, 10], note: "class -> className (class is a keyword in JS)" },
              { loc: [10, 11], note: "style takes a js object (wrap JS expressions in {})" },
              { loc: [10, 11], note: "border-top -> borderTop (attributes are camelCased)" },
              { loc: [11, 12], note: "for -> htmlFor (for is a keyword in JS)" }
            ]}
          />
          <Slide transition={["slide"]} bgColor="primary">
            <Interactive/>
          </Slide>
          <Slide notes="babel">
            <Heading size={1} caps fit textColor="tertiary">
              <Link href="http://babeljs.io/repl/#?evaluate=true&presets=es2015%2Ces2015-loose%2Creact&experimental=false&loose=false&spec=false&code=var%20Constant%20%3D%20%3Cdiv%3EHello%20World%3C%2Fdiv%3E%3B%0A%0Avar%20ES5Component%20%3D%20React.createClass(%7B%0A%20%20render%3A%20function()%20%7B%0A%20%20%20%20return%20%3Cdiv%3EHello%20%7Bthis.props.name%7D%3C%2Fdiv%3E%3B%0A%20%20%7D%0A%7D)%3B%0A%0Aclass%20ES2015ClassComponent%20extends%20React.Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20%3Cdiv%3EHello%20%7Bthis.props.name%7D%3C%2Fdiv%3E%3B%0A%20%20%7D%0A%7D%0A%0Afunction%20StatelessFunction(props)%20%7B%0A%20%20return%20%3Cdiv%3EHello%20%7Bprops.name%7D%3C%2Fdiv%3E%3B%0A%7D%0A%0Aconst%20ES2015StatelessFunction%20%3D%20(props)%20%3D%3E%20%3Cdiv%3EHello%20%7Bprops.name%7D%3C%2Fdiv%3E%3B&playground=true">
                <S type="underline"><Text bold caps textColor="tertiary">Babel</Text></S>
              </Link>
            </Heading>
            <Link href="http://babeljs.io/repl/#?evaluate=true&presets=es2015%2Ces2015-loose%2Creact&experimental=false&loose=false&spec=false&code=class%20Interactive%20extends%20React.Component%20%7B%0A%20%20constructor()%20%7B%0A%20%20%20%20super()%3B%0A%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20count%3A%200%0A%20%20%20%20%7D%3B%0A%20%20%20%20this.handleClick%20%3D%20this.handleClick.bind(this)%3B%0A%20%20%7D%0A%20%20handleClick()%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%20%20render()%20%7B%0A%20%20%20%20const%20headingStyle%20%3D%20%7B%0A%20%20%20%20%20%20textTransform%3A%20'uppercase'%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20styles%20%3D%20%7B%0A%20%20%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20%20%20background%3A%20%22black%22%2C%0A%20%20%20%20%20%20minWidth%3A%20300%2C%0A%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20textTransform%3A%20%22uppercase%22%2C%0A%20%20%20%20%20%20border%3A%20%22none%22%2C%0A%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20outline%3A%20%22none%22%2C%0A%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20fontSize%3A%20%222em%22%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%7Bthis.state.count%20%3C%205%20%3F%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ch1%20style%3D%7BheadingStyle%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20button%20has%20been%20clicked%20%7Bthis.state.count%7D%20times%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fh1%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbutton%20style%3D%7Bstyles%7D%20type%3D%22button%22%20onClick%3D%7Bthis.handleClick%7D%3EClick%20Me%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%20%3A%0A%20%20%20%20%20%20%20%20%20%20%3Ch1%20style%3D%7BheadingStyle%7D%3EEasy%20there%20pal%3C%2Fh1%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0AReact.render(%3CInteractive%2F%3E%2C%20document.body)%3B&playground=true">
              <S type="underline"><Text bold caps textColor="tertiary">Previous Component</Text></S>
            </Link>
          </Slide>
          <Slide notes="react component lifecycle">
            <Heading size={1} caps fit textColor="tertiary">
              <Link href="http://codepen.io/eduardoboucas/full/jqWbdb/">
                <S type="underline"><Text bold caps textColor="tertiary">Component Lifecycle</Text></S>
              </Link>
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
