
import './App.css';
import MyComponent from './component/MyComponent';

function App() {
  return (
    // string: "" integer: {} 으로 props 전달
    <MyComponent name="변백현" favoritNum={5}>웅잉</MyComponent>
  );
}

export default App;
