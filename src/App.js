import React from "react";
import { FaTwitter } from "react-icons/fa";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      randomQuote: {
        text: "Life is about the journey , not the destination.",
        author: "Sri Krishna",
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ quotes: data });
      });
  }

  handleClick(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.quotes.length);
    console.log(randNum, "this is a random number");
    const randQuote = this.state.quotes[randNum];
    console.log(randQuote);
    this.setState({
      randomQuote: randQuote,
    });
  }

  render() {
    return (
      <div className="container">
        <div id="quote-box">
          <h1 id="text">{this.state.randomQuote.text}</h1>
          <p id="author">- {this.state.randomQuote.author}</p>
          <div className="but-parent">
            <a
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              className="twitter social"
            >
              <FaTwitter size="4em" color="whitesmoke" />
            </a>
            <button id="new-quote" onClick={this.handleClick}>
              New Quote
            </button>
          </div>
          <div className="social-media-buttons"></div>
        </div>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </div>
    );
  }
}

export default App;
