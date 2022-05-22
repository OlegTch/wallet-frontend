import './cat.scss';

const Cat = ({ nameClass }) => {
    return (
        <div className="thumbCat">
            <p className="catText">Транзакції відсутні</p>
            <div className={`cat ${nameClass}`}></div>
        </div>
    );
};
export default Cat;

console.log();
