
import './App.css';
import Counter from './component/chap3/Counter';
import MyComponent from './component/chap3/MyComponent';
import Say from './component/chap3/Say';
import ValidationSample from './component/chap3/ValidationSample';

function App() {
  return (
    // string: "" integer: {} 으로 props 전달
    //<MyComponent name="변백현" favoritNum={5}>웅잉</MyComponent>
    //<Counter></Counter>
    //<Say/>
    <ValidationSample/>
  );
}

export default App;
