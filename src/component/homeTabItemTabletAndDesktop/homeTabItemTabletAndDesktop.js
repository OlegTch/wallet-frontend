import { useState } from 'react';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';
import './homeTabItemTabletAndDesktop.scss';

const HomeTabItemTabletAndDesktop = ({ operation }) => {
    const [openRow, setOpenRow] = useState(false);

    const onClick = e => {
        setOpenRow(openRow ? false : true);
    };
    return (
        <>
            <p>{moment(operation.datetime).format('DD.MM.YY')}</p>
            <p>{operation.income ? '+' : '-'}</p>
            <p
                className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
                onClick={onClick}
            >
                {openRow ? (
                    operation.category.name
                ) : (
                    <EllipsisText text={operation.category.name} length={10} />
                )}
            </p>
            <p
                className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
                onClick={onClick}
            >
                {openRow ? (
                    operation.comment
                ) : (
                    <EllipsisText
                        text={
                            operation.comment === null || ''
                                ? '-'
                                : operation.comment
                        }
                        length={13}
                    />
                )}
            </p>
            <p
                className={`
                    ${
                        operation.income
                            ? 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--green'
                            : 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--red'
                    } ${openRow ? 'homeTabItemAndDesktopResult--open' : ''}`}
            >
                {openRow ? (
                    operation.sum
                ) : (
                    <EllipsisText text={String(operation.sum)} length={8} />
                )}
            </p>
            <p
                className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
                onClick={onClick}
            >
                {openRow ? (
                    operation.balance
                ) : (
                    <EllipsisText text={String(operation.balance)} length={8} />
                )}
            </p>
        </>
    );
};

export default HomeTabItemTabletAndDesktop;
