import { Logo, Balans } from '@common';
import { HeaderNav, Navigation } from '@dashboard';

export const Header = () => {
    console.log('Header');
    return (
        <>
            <div className="header">
                <div className="container container__header">
                    <Logo />
                    <HeaderNav />
                </div>
            </div>

            <Balans />
            <Navigation />
        </>
    );
};
