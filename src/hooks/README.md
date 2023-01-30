# React Hooks Enhanced

## Installation

```sh
npm install react-hooks-enhanced
```

## Hooks

### useToggle

```js
import { useToggle } from "react-hooks-enhanced";
function App() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{JSON.stringify(value)}</p>
      <button onClick={toggleValue}>Toggle {value}</button>
      <div>{value}</div>
    </div>
  );
}

export default App;
```
