import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { isErrorCategory } from '@redux/categories/categories-selector';
import { isErrorFinance } from '@redux/finance/finance-selector';
import { isErrorStatistic } from '@redux/statistic/statistic-selector';
import { defineLocale } from 'moment';

const Error = () => {
    const errorCategory = useSelector(isErrorCategory);
    const errorFinance = useSelector(isErrorFinance);
    const errorStatistic = useSelector(isErrorStatistic);

    useEffect(() => {
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
    return <></>;
};

export default Error;
