import React from 'react';
import { MainLayout, ItemShowCase, MainAppBar, Contnant } from './components';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/Cart';
import './App.css';

function Layout() {
  return (
    <div>
      <MainAppBar  />
      <Outlet />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<MainLayout />} />
              <Route path="contant" element={<Contnant/>}/>
              <Route path="item" element={<ItemShowCase />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;