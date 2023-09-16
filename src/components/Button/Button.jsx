import './Button.scss';

export default function Button(props) {
    //btnType: blue, red
    const {style, btnType, text, onClick} = props;
    return (
        <button style={style} className={btnType} onClick={onClick}>{text}</button>
    );
}