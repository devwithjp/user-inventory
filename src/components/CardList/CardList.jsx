import './CardList.scss';
import { users } from '../../common/data';
import Card from '../Card/Card';

export default function CardList(props) {
    const cardList = users.map((user, index) => (
        <Card {...user}/>
    ));
    return(
        <div className='cards-container'>
            {cardList}
        </div>
    );     
}