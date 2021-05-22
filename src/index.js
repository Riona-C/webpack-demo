import '@babel/polyfill';
import react, { Component } from 'react';
import reactDom from 'react-dom';

class App extends Component {
  render() {
    return <div>你好 冉冉 加油</div>
  }
}

reactDom.render(<App />, document.getElementById('root'));