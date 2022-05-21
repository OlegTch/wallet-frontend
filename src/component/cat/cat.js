// import cat from '../../assets/img/cat.png';
import './cat.scss';

const Cat = ({ nameClass }) => {
    return (
        <div>
            <p className="catText">Транзакції відсутні</p>
            <div className={`cat ${nameClass}`}></div>
        </div>
    );
};
export default Cat;
