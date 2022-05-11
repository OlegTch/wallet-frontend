import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import '@style/style.scss';
import App from '@root/App';
// import { rootStore } from '@redux/store'

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={rootStore.store}>
			<PersistGate persistor={rootStore.persistedStore}> */}
        <App />
        {/* </PersistGate>
		</Provider> */}
    </React.StrictMode>,
    document.getElementById('root'),
);
