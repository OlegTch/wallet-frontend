import sprite from '@assets/sprite.svg';
import { useDispatch } from 'react-redux';

import { openModalDeleteTransaction } from '@redux/finance/finance-slice';
import './buttonDelete.scss';

const ButtonDelete = ({ id }) => {
    const dispatch = useDispatch();

    const onClick = e => {
        dispatch(openModalDeleteTransaction(id));
    };

    return (
        <>
            <button className="buttonDelete" data-id={id} onClick={onClick}>
                <svg className="iconDelete">
                    <use href={`${sprite}#buttonDel`}></use>
                </svg>
            </button>
        </>
    );
};

export default ButtonDelete;
