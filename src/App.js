
import './App.css';
import Counter from './component/chap3/Counter';
import MyComponent from './component/chap3/MyComponent';

function App() {
  return (
    // string: "" integer: {} 으로 props 전달
    //<MyComponent name="변백현" favoritNum={5}>웅잉</MyComponent>
    <Counter></Counter>
  );
}

export default App;
