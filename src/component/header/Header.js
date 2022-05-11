import { Logo } from '@common';
import { HeaderNav } from '@dashboard';

export const Header = () => {
    console.log('Header');
    return (
        <div className="container header">
            <Logo />
            <HeaderNav />
        </div>
    );
};
