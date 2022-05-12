import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '@pages';
import { withAuth } from '@hoc/withAuth';

function App() {
    return (
        <Routes>
            <Route path="login" element={<h1>Login</h1>} />
            <Route path="register" element={<h1>Registration</h1>} />
            <Route path="/" element={withAuth(<Dashboard />)} />
            <Route path="statistic" element={withAuth(<h1>Statistics</h1>)} />
            <Route path="currency" element={withAuth(<h1>Currency</h1>)} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    );
}

export default App;
