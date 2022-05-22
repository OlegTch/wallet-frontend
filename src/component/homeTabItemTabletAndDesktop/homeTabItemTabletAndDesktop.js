import { useState } from 'react';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';
import './homeTabItemTabletAndDesktop.scss';

const HomeTabItemTabletAndDesktop = ({ operation }) => {
    const [openRow, setOpenRow] = useState(false);

    const onClick = e => {
        setOpenRow(openRow ? false : true);
    };

    const makeMoney = n => {
        return parseFloat(n)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
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
                    makeMoney(operation.sum)
                ) : (
                    <EllipsisText
                        text={String(makeMoney(operation.sum))}
                        length={8}
                    />
                )}
            </p>
            <p
                className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
                onClick={onClick}
            >
                {openRow ? (
                    makeMoney(operation.balance)
                ) : (
                    <EllipsisText
                        text={String(makeMoney(operation.balance))}
                        length={8}
                    />
                )}
            </p>
        </>
    );
};

export default HomeTabItemTabletAndDesktop;
