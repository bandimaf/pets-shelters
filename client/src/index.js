import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import PetStore from './store/PetStore';
import NewsStore from './store/NewsStore';
import FundStore from './store/FundStore';
import ShelterStore from './store/ShelterStore';
import ReportsStore from './store/ReportsStore';
import BankDetailsStore from './store/BankDetailsStore';
// ReactDOM.render(
//   <App />,
//   document.getElementById('room')
// );

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Context.Provider value={{
    user: new UserStore(),
    pet: new PetStore(),
    news: new NewsStore(),
    fund: new FundStore(),
    shelter: new ShelterStore(),
    reports: new ReportsStore(),
    details: new BankDetailsStore()
    
  }}>
    <App />
  </Context.Provider>,

);
