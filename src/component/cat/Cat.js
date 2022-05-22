import './cat.scss';

const Cat = ({ nameClass }) => {
    return (
        <div className="thumbCat">
            {/* <div className={`thumbCat ${nameClass}`}> */}
            <p className="catText">Транзакції відсутні</p>
            <div className={`cat ${nameClass}`}></div>
        </div>
    );
};
export default Cat;
