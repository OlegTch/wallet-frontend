import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@style/style.scss';
import App from '@root/App';
import { BrowserRouter } from 'react-router-dom';
import { rootStore } from '@redux/store';
import 'react-datetime/css/react-datetime.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={rootStore.store}>
            <PersistGate loader={null} persistor={rootStore.persistedStore}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
