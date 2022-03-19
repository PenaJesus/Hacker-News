import { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListArticles from './components/ListArticles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfStories: [],
      url: ""
    }
  }
  
  componentDidMount() {
    axios.get('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50')
      .then(res => {
        const arrayOfStories = res.data.hits
        this.setState({ arrayOfStories });
      })
  }
  

  componentDidUpdate() {
    axios.get(`http://hn.algolia.com/api/v1/search?query=${this.state.url}&hitsPerPage=50`)
    .then(res => {
      const arrayOfStories = res.data.hits
      this.setState({ arrayOfStories });
    })
  }
  
  handleChange = (event) => {
    this.setState({
      url: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <form>
            <input
              name="url"
              type="text"
              value={this.state.url}
              onChange={ (event) => {this.handleChange(event)} }
              placeholder="Search by Title or Author"
            ></input>
          </form>
        </header>
        <body>
          <ListArticles article={this.state.arrayOfStories}/>
        </body>
      </div>
    )
  };
}

export default App;