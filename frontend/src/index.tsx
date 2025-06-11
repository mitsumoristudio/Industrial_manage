// @ts-ignore
import React from 'react';
// @ts-ignore

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {HelmetProvider} from "react-helmet-async";
import {Provider} from 'react-redux';
import store from "./store";

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </HelmetProvider>
    </React.StrictMode>
);

