import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news-list';
import FooterNews from './components/footer';

class App extends Component {
  state = {
    filtered: JSON,
    footerText: 'Copyright @ shridharKamma.github.io',
  };

  getKeywords = (event) => {
    let keywords = event.target.value;
    // console.log(keywords);
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    });
    this.setState({
      filtered,
    });
  };

  render() {
    const { filtered, news, footerText } = this.state;
    return (
      <>
        <Header getKeywords={this.getKeywords} />
        <NewsList jsonNews={filtered}>
          <br />
          <h4>Proof of Concept: (Intercom/TCS)</h4>
        </NewsList>
        <FooterNews footerText={footerText} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
