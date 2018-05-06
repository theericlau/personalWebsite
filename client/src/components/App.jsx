import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import PhotoGrid from './PhotoGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Eric',
      photos: [],
    };
  }

  componentDidMount() {
    let dummyData = [];
    for (let i = 0; i < 10; i++) {
      dummyData.push(`image${i}`);
    }
    this.setState({
      photos: dummyData
    })
  }
  render() {
    console.log('im the props', this.props);
    return (
      <div>
        <Header />
        <PhotoGrid photos={this.state.photos}/>
      </div>
    )
    // return (
    //   <Router history={hashHistory}>
    //     <Route path="/" component={Home}>
    //       <IndexRoute component={Home} />
    //     </Route>
    //   </Router>
    // );
  }
}

export default App;
