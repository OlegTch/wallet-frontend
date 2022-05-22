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
        <tr className="homeTabItemTabletAndDesktop" key={operation._id}>
            <td onClick={onClick}>
                {moment(operation.datetime).format('DD.MM.YY')}
            </td>
            <td onClick={onClick}>{operation.income ? '+' : '-'}</td>
            <td
                className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
                onClick={onClick}
            >
                {openRow ? (
                    operation.category.name
                ) : (
                    <EllipsisText text={operation.category.name} length={10} />
                )}
            </td>
            <td
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
            </td>
            <td
                className={`
                    ${
                        operation.income
                            ? 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--green'
                            : 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--red'
                    } ${openRow ? 'homeTabItemAndDesktopResult--open' : ''}`}
                onClick={onClick}
            >
                {openRow ? (
                    makeMoney(operation.sum)
                ) : (
                    <EllipsisText
                        text={String(makeMoney(operation.sum))}
                        length={7}
                    />
                )}
            </td>
            <td
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
            </td>
        </tr>
    );
};

export default HomeTabItemTabletAndDesktop;

// import { useState } from 'react';
// import moment from 'moment';
// import EllipsisText from 'react-ellipsis-text';
// import './homeTabItemTabletAndDesktop.scss';

// const HomeTabItemTabletAndDesktop = ({ operation }) => {
//     const [openRow, setOpenRow] = useState(false);

//     const onClick = e => {
//         setOpenRow(openRow ? false : true);
//     };

//     const makeMoney = n => {
//         return parseFloat(n)
//             .toFixed(2)
//             .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
//     };

//     return (
//         <tr className="homeTabItemTabletAndDesktop" key={operation._id}>
//             <td onClick={onClick}>
//                 {moment(operation.datetime).format('DD.MM.YY')}
//             </td>
//             <td onClick={onClick}>{operation.income ? '+' : '-'}</td>
//             <td
//                 className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
//                 onClick={onClick}
//             >
//                 {openRow ? (
//                     operation.category.name
//                 ) : (
//                     <EllipsisText text={operation.category.name} length={10} />
//                 )}
//             </td>
//             <td
//                 className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
//                 onClick={onClick}
//             >
//                 {openRow ? (
//                     operation.comment
//                 ) : (
//                     <EllipsisText
//                         text={
//                             operation.comment === null || ''
//                                 ? '-'
//                                 : operation.comment
//                         }
//                         length={13}
//                     />
//                 )}
//             </td>
//             <td
//                 className={`
//                     ${
//                         operation.income
//                             ? 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--green'
//                             : 'homeTabItemAndDesktopResult homeTabItemAndDesktopResult--red'
//                     } ${openRow ? 'homeTabItemAndDesktopResult--open' : ''}`}
//                 onClick={onClick}
//             >
//                 {openRow ? (
//                     makeMoney(operation.sum)
//                 ) : (
//                     <EllipsisText
//                         text={String(makeMoney(operation.sum))}
//                         length={7}
//                     />
//                 )}
//             </td>
//             <td
//                 className={openRow ? 'homeTabItemAndDesktopResult--open' : ''}
//                 onClick={onClick}
//             >
//                 {openRow ? (
//                     makeMoney(operation.balance)
//                 ) : (
//                     <EllipsisText
//                         text={String(makeMoney(operation.balance))}
//                         length={8}
//                     />
//                 )}
//             </td>
//         </tr>
//     );
// };

// export default HomeTabItemTabletAndDesktop;
