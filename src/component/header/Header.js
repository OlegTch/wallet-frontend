import { Link } from 'react-router-dom';

import HeaderNav from '@component/headerNav';
import Logo from '@component/logo';
import './header.scss';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container container__header">
                    <Link to="/" className="logo_link">
                        <Logo />
                    </Link>
                    <HeaderNav />
                </div>
            </div>
        </>
    );
};

export default Header;
