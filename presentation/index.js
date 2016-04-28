// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Link,
  Markdown,
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
  reactHotLoader: require("../assets/react-hot-loader.png"),
  diff: require("../assets/diff.png"),
  codemod: require("../assets/codemod.png"),
  codemod1: require("../assets/codemod1.png"),
  codemod2: require("../assets/codemod2.png"),
  reactnative: require("../assets/reactnative.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

const names = ["Alice", "Emily", "Kate"];

const HelloMessage = (props) => <h1>Hello {props.name}</h1>;

const ValidateHelloMessage = (props) => <h1>Hello {props.name}</h1>;

ValidateHelloMessage.propTypes = {
  name: React.PropTypes.string.isRequired,
};

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const text = this.state.liked ? "like" : "haven't liked";
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
}

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
            <br />
          </Slide>
          <Slide bgImage={images.stackOverflow.replace("/", "")} bgDarken={0.25}>
            <Image src={images.reactTrending.replace("/", "")} margin="0px auto 350px" height="300px"/>
          </Slide>
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              How do we update the UI when data changes?
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
          <Slide notes="Instead of: How do we update the UI when data changes?">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              What should the UI look like when data changes?
            </Heading>
          </Slide>
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
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              React abstracts the imperative DOM
            </Heading>
            <Image
              src={images.diff.replace("/", "")}
            />
          </Slide>
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              What about reusability?
            </Heading>
          </Slide>
          <Slide notes="Seperate concerns by components rather than by templates or technologies (html, css, js)">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Everything is a React Component
            </Heading>
            <br />
            <Text>What if you could make your own HTML elements (select, h1, img)?</Text>
            <br />
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              import Toolbar from 'components/toolbar';
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/template.example")}
            ranges={[
              { loc: [0, 7], note: "no need to learn a new templating syntax" },
              { loc: [8, 18], title: "You can use anything in JS" },
            ]}
          />
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              React as Library
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

var data = 123;
ReactDOM.render(
  <MyTitle title={data} />,
  document.getElementById('example')
);

// Warning: Failed propType: Invalid prop 'title' of type 'number' supplied to 'MyTitle', expected 'string'.`}
            ranges={[
              { loc: [0, 20], title: "React Proptypes" },
              { loc: [1, 4], title: "Component Validation" },
              { loc: [6, 7], note: "make sure title is a string and is required" },
              { loc: [10, 13], note: "passing a number rather than a string" },
              { loc: [16, 17], note: "results in a warning" },
            ]}
          />
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Helpful error messages in development
            </Heading>
            <Image
              src="http://reactkungfu.com/assets/images/upgrading-to-react-014/console1.png"
            />
          </Slide>
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Same in Upgrading
            </Heading>
            <Image
              src="http://reactkungfu.com/assets/images/upgrading-to-react-014/console2.png"
            />
          </Slide>
          <Slide>
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Automated code modifications for API changes
            </Heading>
            <Image
              src={images.codemod.replace("/", "")}
            />
          </Slide>
          <Slide>
            <Image
              src={images.codemod1.replace("/", "")}
            />
            <Image
              src={images.codemod2.replace("/", "")}
            />
          </Slide>
          <Slide notes="would be difficult to lint strings">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Lint JSX
            </Heading>
            <Image
              src="http://eslint.org/img/logo.svg"
              width="100px"
            />
            <Link target="_blank" href="https://github.com/yannickcr/eslint-plugin-react">
              <Text>eslint-plugin-react</Text>
            </Link>
            <Link target="_blank" href="https://github.com/babel/babel-eslint">
              <Text>babel-eslint</Text>
            </Link>
            <Markdown>
            {
              `
    // jsx-uses-vars'
    var Hello = require('./Hello'); // warns unused

    ---

    var Hello = require('./Hello'); // no warning
    <Hello name="John" />;
              `
            }
            </Markdown>
          </Slide>
          <Slide notes="some demos of tools">
            <Heading size={2} fit caps lineHeight={1} textColor="black">
              Some Demos
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);`}
            ranges={[
              { loc: [0, 4], note: "render(ReactElement element, DOMElement container)" },
            ]}
          />
          <Slide>
            <h1>Hello, world!</h1>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);`}
            ranges={[
              { loc: [0, 13], title: "rendering a list of names" },
              { loc: [4, 9], note: "any valid javascript expression in {}" },
            ]}
          />
          <Slide>
            <div>
            {
              names.map((name) => <div>Hello, {name}!</div>)
            }
            </div>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`var HelloMessage = (props) => <h1>Hello {props.name}</h1>;

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);`}
            ranges={[
              { loc: [0, 13], title: "Defining a Component" },
            ]}
          />
          <Slide>
            <HelloMessage name="John" />
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`var ValidateHelloMessage = (props) => <h1>Hello {props.name}</h1>;

ValidateHelloMessage.propTypes = {
  name: React.PropTypes.string.isRequired,
};
ReactDOM.render(
  <ValidateHelloMessage name="John" />,
  document.getElementById('example')
);`}
            ranges={[
              { loc: [0, 13], title: "Proptypes" },
            ]}
          />
          <Slide>
            <ValidateHelloMessage name={1} name="John" />
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={
`class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);`}
            ranges={[
              { loc: [0, 30], title: "State" },
              { loc: [0, 1], note: "ES2015 Class syntax" },
              { loc: [1, 7], note: "setup initial state (false)" },
              { loc: [11, 20], note: "render method" },
              { loc: [14, 15], note: "click handler" },
              { loc: [7, 10], note: "setState -> re-render" },
            ]}
          />
          <Slide>
            <LikeButton />
          </Slide>
          <Slide notes="babel">
            <Heading size={1} caps fit textColor="tertiary">
              <Link target="_blank" href="http://babeljs.io/repl/#?evaluate=true&presets=es2015%2Ces2015-loose%2Creact&experimental=false&loose=false&spec=false&code=var%20Constant%20%3D%20%3Cdiv%3EHello%20World%3C%2Fdiv%3E%3B%0A%0Avar%20ES5Component%20%3D%20React.createClass(%7B%0A%20%20render%3A%20function()%20%7B%0A%20%20%20%20return%20%3Cdiv%3EHello%20%7Bthis.props.name%7D%3C%2Fdiv%3E%3B%0A%20%20%7D%0A%7D)%3B%0A%0Aclass%20ES2015ClassComponent%20extends%20React.Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20%3Cdiv%3EHello%20%7Bthis.props.name%7D%3C%2Fdiv%3E%3B%0A%20%20%7D%0A%7D%0A%0Afunction%20StatelessFunction(props)%20%7B%0A%20%20return%20%3Cdiv%3EHello%20%7Bprops.name%7D%3C%2Fdiv%3E%3B%0A%7D%0A%0Aconst%20ES2015StatelessFunction%20%3D%20(props)%20%3D%3E%20%3Cdiv%3EHello%20%7Bprops.name%7D%3C%2Fdiv%3E%3B&playground=true">
                <S type="underline"><Text bold caps textColor="tertiary">Babel</Text></S>
              </Link>
            </Heading>
            <Text>babel-plugin-transform-react-jsx</Text>
          </Slide>
          <Slide>
            <Heading size={1} caps fit textColor="tertiary">
              <Link target="_blank" href="https://github.com/thejameskyle/babel-react-optimize#babel-react-optimize">
                <S type="underline"><Text bold caps textColor="tertiary">React Optimizations</Text></S>
              </Link>
            </Heading>
          </Slide>
          <Slide align="flex-start" notes="show how the slides themselves are hot reloadable, show error messages by typo, etc" bgImage={images.reactHotLoader.replace("/", "")}>
            <Link target="_blank" href="http://gaearon.github.io/react-hot-loader/">
              <Text>Link</Text>
            </Link>
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
          <Slide>
            <Link target="_blank" href="https://github.com/zalmoxisus/redux-devtools-extension">
              <Heading bold caps textColor="tertiary">Redux + Redux Devtools</Heading>
            </Link>
          </Slide>
          <Slide>
            <Link target="_blank" href="https://github.com/kadirahq/react-storybook">
              <Heading bold caps textColor="tertiary">React Storyboard</Heading>
            </Link>
          </Slide>
          <Slide align="flex-start" bgImage={images.reactnative.replace("/", "")} />
        </Deck>
      </Spectacle>
    );
  }
}
