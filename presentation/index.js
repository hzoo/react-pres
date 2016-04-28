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
  reactTrending: require("../assets/react-trending.png"),
  stackOverflow: require("../assets/stackoverflow-2016.png"),
  reactHotLoader: require("../assets/react-hot-loader.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={250} progress="bar">
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              React
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
            </Heading>
          </Slide>
          <Slide bgImage={images.stackOverflow.replace("/", "")} bgDarken={0.25}>
            <Image src={images.reactTrending.replace("/", "")} margin="0px auto 350px" height="300px"/>
          </Slide>
          <Slide notes="commands: append, remove, update, etc">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              How do we update when data changes?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Interactive/>
          </Slide>
          <Slide notes="commands: append, remove, update, etc">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              DOM Manipulation is Imperative
            </Heading>
              <Text>document.createElement("p");</Text>
              <Text>node.removeChild(element);</Text>
              <Text>node.addChild(element);</Text>
              <Text>node.classList.add(string);</Text>
              <Text>...</Text>
          </Slide>
          <Slide notes="ui state: data changing over time">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              State is difficult to manage
            </Heading>
            <Text>What state is the UI in currently?</Text>
            <Text>What was the previous state?</Text>
            <Text>What needs to happen to get from A -> B, or A -> C, or B -> C?</Text>
          </Slide>
          <Slide>
            <Image
              src={"https://i.imgur.com/x36z4gi.png"}
              height="450px"
            />
            <Link target="_blank" href="https://www.youtube.com/watch?v=rI0GQc__0SM">
              <S type="underline"><Text>(Decomplexifying Code With React)</Text></S>
            </Link>
          </Slide>
          <CodeSlide notes="the dom remembers state and doesn't throw it away"
            transition={[]}
            lang="js"
            code={require("raw!../assets/notification.example")}
            ranges={[
              { loc: [0, 20], title: "Retained-mode rendering" },
              { loc: [0, 9] },
              { loc: [1, 4] },
              { loc: [5, 8] },
              { loc: [9, 15] },
              { loc: [15, 18] },
              { loc: [18, 20] },
            ]}
          />
          <Slide notes="what vs how (instructions), finding a loaf of bread, removing two slices, applying toppings, etc">
            <Link target="_blank" href="https://github.com/facebook/react-devtools">
              <Heading bold caps textColor="tertiary">React is Declarative</Heading>
              <Text size={2} bold caps textColor="tertiary">(Think SQL)</Text>
            </Link>
            <Image
              src={"https://imgs.xkcd.com/comics/sandwich.png"}
              margin="0px auto 350px"
              height="500px"
            />
          </Slide>
          <Slide notes="">
            <Heading bold caps textColor="tertiary">React lets you describe the state of your UI at any point in time</Heading>
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
          <CodeSlide notes="similar to game engines"
            transition={[]}
            lang="js"
            code={require("raw!../assets/react.example")}
            ranges={[
              { loc: [0, 18], title: "Immediate-mode rendering" },
              { loc: [0, 3] },
              { loc: [3, 10] },
              { loc: [10, 17] },
            ]}
          />
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Output = F(Input)
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/function.example")}
            ranges={[
              { loc: [0, 3], title: "Pure Function" },
              { loc: [0, 1], note: "input is the parameter a" },
              { loc: [1, 2], note: "output is the doubling of a" },
              { loc: [3, 6], note: "f(input) = ouput" }
            ]}
          />
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              UI = f(state)
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/ui.example")}
            ranges={[
              { loc: [0, 1], title: "UI = F(State)" },
              { loc: [0, 1], note: "input" },
              { loc: [1, 2], note: "output uses the input" },
              { loc: [4, 7], note: "f(input) = ouput" },
              { loc: [8, 11], note: "F in UI = F(props)" },
              { loc: [12, 13], note: "F(props) = Component(count)" }
            ]}
          />
          <Slide notes="Seperate concerns by components rather than by templates or technologies (html, css, js)">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Everything is a Component
            </Heading>
          </Slide>
          <Slide notes="some demos of tools">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Some Demos
            </Heading>
          </Slide>
          <Slide>
            <Link target="_blank" href="https://github.com/facebook/react-devtools">
              <Heading bold caps textColor="tertiary">React Devtools</Heading>
            </Link>
            <Link target="_blank" href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">
              <Image
                src={"https://github.com/facebook/react-devtools/raw/master/images/devtools-full.gif"}
                margin="0px auto 350px"
                height="500px"
              />
            </Link>
          </Slide>
          <Slide notes="babel">
            <Heading size={1} caps fit textColor="tertiary">
              <Link target="_blank" href="http://babeljs.io/repl/#?evaluate=true&presets=es2015%2Ces2015-loose%2Creact&experimental=false&loose=false&spec=false&code=var%20Constant%20%3D%20%3Cdiv%3EHello%20World%3C%2Fdiv%3E%3B%0A%0Avar%20ES5Component%20%3D%20React.createClass(%7B%0A%20%20render%3A%20function()%20%7B%0A%20%20%20%20return%20%3Cdiv%3EHello%20%7Bthis.props.name%7D%3C%2Fdiv%3E%3B%0A%20%20%7D%0A%7D)%3B%0A%0Aclass%20ES2015ClassComponent%20extends%20React.Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20%3Cdiv%3EHello%20%7Bthis.props.name%7D%3C%2Fdiv%3E%3B%0A%20%20%7D%0A%7D%0A%0Afunction%20StatelessFunction(props)%20%7B%0A%20%20return%20%3Cdiv%3EHello%20%7Bprops.name%7D%3C%2Fdiv%3E%3B%0A%7D%0A%0Aconst%20ES2015StatelessFunction%20%3D%20(props)%20%3D%3E%20%3Cdiv%3EHello%20%7Bprops.name%7D%3C%2Fdiv%3E%3B&playground=true">
                <S type="underline"><Text bold caps textColor="tertiary">Babel</Text></S>
              </Link>
            </Heading>
            <Link target="_blank" href="http://babeljs.io/repl/#?evaluate=true&presets=es2015%2Ces2015-loose%2Creact&experimental=false&loose=false&spec=false&code=class%20Interactive%20extends%20React.Component%20%7B%0A%20%20constructor()%20%7B%0A%20%20%20%20super()%3B%0A%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20count%3A%200%0A%20%20%20%20%7D%3B%0A%20%20%20%20this.handleClick%20%3D%20this.handleClick.bind(this)%3B%0A%20%20%7D%0A%20%20handleClick()%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%20%20render()%20%7B%0A%20%20%20%20const%20headingStyle%20%3D%20%7B%0A%20%20%20%20%20%20textTransform%3A%20'uppercase'%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20styles%20%3D%20%7B%0A%20%20%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20%20%20background%3A%20%22black%22%2C%0A%20%20%20%20%20%20minWidth%3A%20300%2C%0A%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20textTransform%3A%20%22uppercase%22%2C%0A%20%20%20%20%20%20border%3A%20%22none%22%2C%0A%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20outline%3A%20%22none%22%2C%0A%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20fontSize%3A%20%222em%22%0A%20%20%20%20%7D%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%7Bthis.state.count%20%3C%205%20%3F%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ch1%20style%3D%7BheadingStyle%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20button%20has%20been%20clicked%20%7Bthis.state.count%7D%20times%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fh1%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbutton%20style%3D%7Bstyles%7D%20type%3D%22button%22%20onClick%3D%7Bthis.handleClick%7D%3EClick%20Me%3C%2Fbutton%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%20%3A%0A%20%20%20%20%20%20%20%20%20%20%3Ch1%20style%3D%7BheadingStyle%7D%3EEasy%20there%20pal%3C%2Fh1%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0AReact.render(%3CInteractive%2F%3E%2C%20document.body)%3B&playground=true">
              <S type="underline"><Text bold caps textColor="tertiary">Button Example</Text></S>
            </Link>
          </Slide>
          <Slide align="flex-start" notes="show how the slides themselves are hot reloadable, show error messages by typo, etc" bgImage={images.reactHotLoader.replace("/", "")}>
            <Link target="_blank" href="http://gaearon.github.io/react-hot-loader/">
              <Text>Link</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
