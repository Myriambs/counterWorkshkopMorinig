##Extraction des actions :

export const { increment, decrement, reset } = counterSlice.actions;

    counterSlice.actions :
        Lorsque vous créez un slice avec createSlice de Redux Toolkit, il génère automatiquement des actions basées sur les fonctions définies dans l'objet reducers de votre slice.
        Ces actions sont des objets contenant une type qui correspond à chaque action définie (increment, decrement, et reset dans cet exemple).

    const { increment, decrement, reset } :
        Cette syntaxe utilise la déstructuration pour extraire les actions générées automatiquement par createSlice.

    export const :
        Les actions (increment, decrement, reset) sont exportées pour pouvoir être utilisées dans d'autres parties de l'application, comme dans des composants React. Ces actions seront utilisées avec dispatch pour déclencher des changements dans l'état.