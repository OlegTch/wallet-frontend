import './buttonClose.scss';

//import PropTypes from 'prop-types'; {onClick}

const ButtonClose = ({ onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            <span className="button_vectotA"></span>
            <span className="button_vectotB"></span>
        </button>
    );
};
export default ButtonClose;
