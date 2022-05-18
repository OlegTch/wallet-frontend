import { HeaderNav } from '@component';
import { Logo } from '@shared';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
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
