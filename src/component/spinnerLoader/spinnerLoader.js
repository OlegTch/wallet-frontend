import { useTranslation } from 'react-i18next';
import './spinnerLoader.scss';

function LoaderRoket() {
    const { t } = useTranslation();
    return <div className="loader">{t('loading')}</div>;
}
export default LoaderRoket;
