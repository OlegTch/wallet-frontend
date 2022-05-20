import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@style/style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from '@root/App';
import { rootStore } from '@redux/store';
import i18n from './services/lang';
import 'react-datetime/css/react-datetime.css';
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={rootStore.store}>
            <PersistGate loader={null} persistor={rootStore.persistedStore}>
                <BrowserRouter>
                    {/* <I18nextProvider i18n={i18n}> */}
                    <App />
                    {/* </I18nextProvider> */}
                    <ToastContainer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
