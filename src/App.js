import './App.css';
import Home from './components/Home/Home';
import Footer  from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Home/Header/Header';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import InventoryItems from './components/InventoryItems/InventoryItems';
import MyItem from './components/MyItem/MyItem';
import AddItem from './components/AddItem/AddItem';
import ManageItems from './components/ManageItems/ManageItems';

function App() {
  return (
    <div >
      
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:inventoryId' 
       element={ 
         <RequireAuth>
           <InventoryItems></InventoryItems>
         </RequireAuth>
         
       }
        ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
