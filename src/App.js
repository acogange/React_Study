
import './App.css';
//import Counter from './component/chap3/Counter';
import Counter from './component/chap8/Counter';
import MyComponent from './component/chap3/MyComponent';
import Say from './component/chap3/Say';
import ValidationSample from './component/chap5/ValidationSample';
import ScrollBox from './component/chap5/ScrollBox';
import { render } from '@testing-library/react';
import { Component } from 'react';
import IterationSample from './component/chap6/IterationSample';
import LifeCycleSample from './component/chap7/LifeCycleSample';
import Info from './component/chap8/Info';

class App extends Component {
  render() {
    return (
      // string: "" integer: {} 으로 props 전달
      //<MyComponent name="변백현" favoritNum={5}>웅잉</MyComponent>
      <Counter/>
      //<Info/>
    );
  }
}

export default App;
