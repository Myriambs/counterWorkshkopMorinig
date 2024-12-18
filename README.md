# Redux Toolkit Basics 🛠️

This guide provides a simple introduction to Redux Toolkit and demonstrates how to set up and use it in a React project.

---

## 📦 Installation

First, install the necessary packages:

```bash
npm install @reduxjs/toolkit react-redux


# 1. Create a Slice

A "slice" is a piece of your app's state along with actions and reducers.

// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

///////////////////////**Note **/////////////////////////////////////

Extraction of Actions
export const { increment, decrement, reset } = counterSlice.actions;
counterSlice.actions:

When you create a slice using createSlice from Redux Toolkit, it automatically generates actions based on the functions defined in the reducers object of your slice.

    These actions are objects containing a type that corresponds to each defined action (e.g., increment, decrement, and reset in this example).
    const { increment, decrement, reset }:

This syntax uses destructuring to extract the automatically generated actions from createSlice.

    This makes it easier to access and use these actions in your code.

export const:

The actions (increment, decrement, and reset) are exported so they can be used in other parts of the application, such as in React components.

    These actions are dispatched to trigger state changes in the store.





### 2. Create the Store

Combine slices and create the Redux store.
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;


### 3. Provide the Store to React

Wrap your app with <Provider> to make the store available throughout your component tree.

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

🧩 Using Redux in Components
1. Read State with useSelector
// src/features/counter/CounterDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);
  return <h1>Count: {count}</h1>;
};

export default CounterDisplay;

2. Dispatch Actions with useDispatch
// src/features/counter/CounterControls.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default CounterControls;

🔄 Putting It All Together
Example App Layout:

// src/App.js
import React from 'react';
import CounterDisplay from './features/counter/CounterDisplay';
import CounterControls from './features/counter/CounterControls';

function App() {
  return (
    <div>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}

export default App;




        ⚡ Summary

    Redux Toolkit simplifies state management with tools like createSlice and createAsyncThunk.
    Use useSelector to read state and useDispatch to dispatch actions.
    Combine slices in a central store and provide it to your app with <Provider>.