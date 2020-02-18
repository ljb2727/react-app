import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Content'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Subject title="web" sub="word"></Subject>
      <TOC></TOC>
      <Content title="title" desc="desc"></Content>
    </div>
    )
  }
}

export default App;
