export const Balans = () => {
    const balans = 24000.6;
    return (
        <div className="balans">
            <p className="balans__title">Ваш баланс</p>
            <p className="balans__order">&#8372; {balans}</p>
        </div>
    );
};
