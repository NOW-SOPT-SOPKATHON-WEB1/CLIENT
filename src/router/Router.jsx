import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DPage from '../pages/DPage/DPage';
import APage from '../pages/APage/APage';
import BPage from '../pages/BPage/BPage';
import CPage from '../pages/CPage/CPage';
import RoomCreate from '../pages/RoomCreate/RoomCreate';
import RoomJoin from '../pages/RoomJoin/RoomJoin';
import Writing from '../pages/Writing/Writing';
import GamePage from '../pages/gamePage/GamePage';
import RuleExplain from '../pages/RuleExplain/RuleExplain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<APage />}></Route>
        <Route path='/bpage' element={<BPage />}></Route>
        <Route path='/cpage' element={<CPage />}></Route>
        <Route path='/dpage' element={<DPage />}></Route>
        <Route path='/game' element={<GamePage />}></Route>
        <Route path='/room-create' element={<RoomCreate />}></Route>
        <Route path='/room-join' element={<RoomJoin />}></Route>
        <Route path='/writing' element={<Writing />}></Route>
        <Route path='/rule' element={<RuleExplain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
