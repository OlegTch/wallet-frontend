import { HeaderNav } from '@component';
import { Logo } from '@shared';
import './header.scss';

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container container__header">
                    <Logo />
                    <HeaderNav />
                </div>
            </div>
        </>
    );
};
