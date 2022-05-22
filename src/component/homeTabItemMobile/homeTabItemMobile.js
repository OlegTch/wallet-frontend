import { useState } from 'react';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';

import ButtonDelete from '@component/buttonDelete';
import './homeTabItemMobile.scss';

const HomeTabItemMobile = ({ operation }) => {
    const [openCategory, setOpenCategory] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const [openSum, setOpenSum] = useState(false);
    const [openBalance, setOpenBalance] = useState(false);

    const onClick = e => {
        switch (e.currentTarget.dataset.name) {
            case 'category':
                setOpenCategory(openCategory ? false : true);
                break;
            case 'comment':
                setOpenComment(openComment ? false : true);
                break;
            case 'sum':
                setOpenSum(openSum ? false : true);
                break;
            case 'balance':
                setOpenBalance(openBalance ? false : true);
                break;
            default:
                return;
        }
    };

    const makeMoney = n => {
        return parseFloat(n)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
    };

    return (
        <>
            <p>
                Дата:
                <span>{moment(operation.datetime).format('DD.MM.YY')}</span>
            </p>
            <p>
                Тип:<span>{operation.income ? '+' : '-'}</span>
            </p>
            <p
                data-name="category"
                className={openCategory ? 'homeTabItem--open' : ''}
                onClick={onClick}
            >
                Категорія:
                <span>
                    {openComment ? (
                        operation.category.name
                    ) : (
                        <EllipsisText
                            text={operation.category.name}
                            length={13}
                        />
                    )}
                </span>
            </p>
            <p
                data-name="comment"
                className={openComment ? 'homeTabItem--open' : ''}
                onClick={onClick}
            >
                Коментар:
                <span>
                    {openComment ? (
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
                </span>
            </p>
            <p
                data-name="sum"
                className={openSum ? 'homeTabItem--open' : ''}
                onClick={onClick}
            >
                Сума:
                <span className="homeTabItemResult">
                    {openComment ? (
                        makeMoney(operation.sum)
                    ) : (
                        <EllipsisText
                            text={String(makeMoney(operation.sum))}
                            length={13}
                        />
                    )}{' '}
                </span>
            </p>
            <p
                data-name="balance"
                className={openBalance ? 'homeTabItem--open' : ''}
                onClick={onClick}
            >
                Баланс:
                <span>
                    {openComment ? (
                        makeMoney(operation.balance)
                    ) : (
                        <EllipsisText
                            text={String(makeMoney(operation.balance))}
                            length={13}
                        />
                    )}
                </span>
            </p>
            <p className="homeTabItem--center">
                <ButtonDelete id={operation._id} />
            </p>
        </>
    );
};

export default HomeTabItemMobile;
