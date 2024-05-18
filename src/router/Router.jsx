import { BrowserRouter, Route, Routes } from 'react-router-dom';
import APage from '../pages/APage/APage';
import BPage from '../pages/BPage/BPage';
import CPage from '../pages/CPage/CPage';
import DPage from '../pages/DPage/DPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<APage />}></Route>
        <Route path='/bpage' element={<BPage />}></Route>
        <Route path='/cpage' element={<CPage />}></Route>
        <Route path='/dpage' element={<DPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
