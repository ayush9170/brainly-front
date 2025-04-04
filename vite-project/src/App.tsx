
import './App.css'
import DashBoard from './pages/compound'
import { Front } from './pages/front'
import { SignIn } from './pages/signin'
import { SignUp } from './pages/signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App(){
    return <div>
        <BrowserRouter>
      <Routes>
      <Route  path='/'  element={<Front></Front>}> </Route>
      <Route  path='/signup'  element={<SignUp></SignUp>}> </Route>
      <Route  path='/signin'  element={<SignIn></SignIn> }> </Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
      </Routes>
 </BrowserRouter>
    </div>
}
export default App
