import React from 'react';
import ReactDom from 'react-dom'; 
import App from './App';

// 4. Provider로 App에 store 전달하기
import { Provider } from 'react-redux';
import store from './State/Store';

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    
    document.getElementById("root")
);