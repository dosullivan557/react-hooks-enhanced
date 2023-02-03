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
      <p>{JSON.stringify(value)}</p>
      <button onClick={toggleValue}>Toggle {value}</button>
      <div>{value}</div>
    </div>
  );
}

export default App;
```

### useAsyncHook

```js
import { useAsyncHook } from "react-hooks-enhanced";
function App(props) {
  const [result, error, isLoading] = useAsyncHook(props.processData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="App">
      <p>{JSON.stringify(result)}</p>
      <div>{value}</div>
    </div>
  );
}

export default App;
```

### useDebounce

```js
import React, { useState } from "react";
import { useDebounce } from "react-hooks-enhanced";

const ExampleComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Make API call or perform search with debouncedSearchTerm
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default ExampleComponent;
```

### useValidatedForm

There are a few regular expressions built in. See below how to use. See [here](#regular-expressions) what regular expressions are included.

```js
import React, { useState } from "react";
import { useValidatedForm, regex } from "react-hooks-enhanced";

function App() {
  const [value, setValue, isValid] = useValidatedForm(regex.emailAddress);
  return (
    <div className="App">
      <input onChange={(e) => setValue(e.target.value)} />
      <p>{JSON.stringify(isValid)}</p>
    </div>
  );
}

export default App;
```

## Regular Expressions

- Postcode 
- Email Address
- Complex Password
- Moderate Password
- AlphaNumeric Value
- Username
- Url
- International Phone Number