import './CardList.scss';
import Card from '../Card/Card';

export default function CardList(props) {
    const {users, onDelete, setFormType, setId} = props;
    const cardList = users.map((user, index) => (
        <Card {...user} onDelete={onDelete} setFormType={setFormType} setId={setId}/>
    ));
    return(
        <div className='cards-container'>
            {cardList}
        </div>
    );     
}