import './homeTab.scss';
import { getFinanceOpertaion } from '@redux/finance/finance-operation';
import {
    getOperations,
    isLoading,
    isSaveModalDateStatic,
} from '@redux/finance/finance-selector';
import HomeTabList from '../homeTabList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SpinnerLoader from '../spinnerLoader/spinnerLoader';

const HomeTab = () => {
    const dispatch = useDispatch();
    const isLoad = useSelector(isLoading);
    const isModalAdd = useSelector(isSaveModalDateStatic);
    const operations = useSelector(getOperations);

    useEffect(() => {
        if (operations.length === 0) {
            dispatch(getFinanceOpertaion.getOperations());
        }
    }, []);

    return !isLoad && !isModalAdd ? (
        <section className="homeTab-section">
            <HomeTabList operations={operations} />
        </section>
    ) : (
        <SpinnerLoader />
    );
};

export default HomeTab;
