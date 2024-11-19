Bases de Redux Toolkit 🛠️

Ce guide fournit une introduction simple à Redux Toolkit et montre comment le configurer et l'utiliser dans un projet React.
📦 Installation

Tout d'abord, installez les packages nécessaires :

npm install @reduxjs/toolkit react-redux

1. Créer un Slice

Un "slice" représente une partie de l'état de votre application avec ses actions et ses réducteurs.

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

|| -Extraction des Actions

export const { increment, decrement, reset } = counterSlice.actions;

counterSlice.actions :

Lorsque vous créez un slice avec createSlice de Redux Toolkit, il génère automatiquement des actions basées sur les fonctions définies dans l'objet reducers de votre slice.

    Ces actions sont des objets contenant un type correspondant à chaque action définie (par exemple, increment, decrement et reset dans cet exemple).

const { increment, decrement, reset } :

Cette syntaxe utilise la déstructuration pour extraire les actions générées automatiquement par createSlice.

    Cela permet de les utiliser facilement dans le code.

export const :

Les actions (increment, decrement, et reset) sont exportées pour pouvoir être utilisées dans d'autres parties de l'application, comme les composants React.

    Ces actions sont utilisées avec dispatch pour déclencher des changements d'état dans le store.

2. Créer le Store

Combinez les slices et créez le store Redux.

// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

3. Fournir le Store à React

Enveloppez votre application avec <Provider> pour rendre le store accessible à l'ensemble de l'arbre de composants.

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

🧩 Utiliser Redux dans les Composants
1. Lire l'État avec useSelector

// src/features/counter/CounterDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);
  return <h1>Count: {count}</h1>;
};

export default CounterDisplay;

2. Envoyer des Actions avec useDispatch

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

🔄 Assembler le Tout
Structure de l'Application :

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

⚡ Résumé

    Redux Toolkit simplifie la gestion de l'état avec des outils comme createSlice et createAsyncThunk.
    Utilisez useSelector pour lire l'état et useDispatch pour envoyer des actions.
    Combinez les slices dans un store central et fournissez-le à votre application avec <Provider>.

Bon codage ! 🎉