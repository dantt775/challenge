// import React from 'react'
// import ReactDOM from 'react-dom'
// import Routes from './components/routes/Routes.jsx'
// import "./assets/scss/main.scss"

// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//     palette: {
//         primary: { main: '#003368' }, // Purple and green play nicely together.
//         secondary: { main: '#ffffff' }, // This is just green.A700 as hex.
//     },
//     overrides: {
//         MuiInput: {
//             underline: {
//                 '&:before': {
//                     borderBottom: '1px solid #ffffff'
//                 },
//                 '&:hover:not($disabled):not($error):not($focused):before': {
//                     borderBottom: '2px solid #ffffff'
//                 },
//             },
//             disabled: { borderBottom: '1px solid #ffffff' },
//             focused: { borderBottom: '1px solid #ffffff' },

//         },
//         Contact: {
//             textField: {
//                 width: '400px',                
//                 fontSize: '60px'
//             }
//         },



//     },
// });



// ReactDOM.render(
//     <MuiThemeProvider theme={theme}>
//         <Routes />
//     </MuiThemeProvider>
//     , document.getElementById('app')
// );


import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';


const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload],
            };

            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;

    }
    return state;
};

const userReducer = (state = {
    name: 'Max',
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
            };

            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload,
            };

            break;

    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action', action);
    next(action);
}

const store = createStore(
    combineReducers({ mathReducer, userReducer }), //the reducers have the same name 
    {},
    applyMiddleware(createLogger())
);

store.subscribe(() => {
    // console.log("Store update", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100,
});

store.dispatch({
    type: "ADD",
    payload: 22,
});

store.dispatch({
    type: 'SUBTRACT',
    payload: 80,
})

store.dispatch({
    type: 'SET_AGE',
    payload: ageGet
})

store.dispatch({
    type: 'SET_NAME',
    payload: 'Test'
})

var ageGet = () =>{
    return 11;
}

function ageCalc() {


    return 35;
}