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

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <Form title={'ADD USER'} onClose={closePopup}/>
      </Popup>
      <header>
          <Header />
          <PageHeader onClickView={()=>openPopup()}/>
          <CardList />
          
      </header>
      
    </div>
  );
}

export default App;
