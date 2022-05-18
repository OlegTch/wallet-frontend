import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { isErrorCategory } from '@redux/categories/categories-selector';
import { isErrorFinance } from '@redux/finance/finance-selector';
import { isErrorStatistic } from '@redux/statistic/statistic-selector';
// import { isErrorUser } from '@redux/user/user-selector';

export const Error = () => {
    // const errorUser = useSelector(isErrorUser);
    const errorCategory = useSelector(isErrorCategory);
    const errorFinance = useSelector(isErrorFinance);
    const errorStatistic = useSelector(isErrorStatistic);

    useEffect(() => {
        // if (errorUser) {
        //     toast.error(errorUser);
        // }
        if (errorCategory) {
            toast.error(errorCategory);
        }
        if (errorFinance) {
            toast.error(errorFinance);
        }
        if (errorStatistic) {
            toast.error(errorStatistic);
        }
    }, [errorCategory, errorFinance, errorStatistic]);
    // errorUser
    return <></>;
};
