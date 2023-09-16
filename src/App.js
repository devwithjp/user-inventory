import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header.jsx';
import PageHeader from './components/PageHeader/PageHeader.jsx';
import {useState} from 'react';
import Popup from './components/Popup/Popup';
import Form from './components/Form/Form';
import {users} from './common/data';


function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [usersData, setUsersData] = useState(users);
  const [formType, setFormType] = useState('ADD USER');
  const [id, setId] = useState(null);



  const closePopup = () => {
    setFormType('');
  };

  const onDelete = (id) => {
    const filteredUsers = usersData.filter((user) => user.id !== id);
    setUsersData(filteredUsers);
  }

  

  return (
    <div className="App">
      <Popup isOpen={formType !== ''} onClose={closePopup}>
        <Form title={formType} onClose={closePopup} setUsersData={setUsersData} usersData={usersData} id={id}/>
      </Popup>
      <header>
          <Header />
          <PageHeader setFormType={ setFormType}/>
          <CardList users={usersData} onDelete={onDelete} setFormType={setFormType} setId={setId}/>
          
      </header>
      
    </div>
  );
}

export default App;
