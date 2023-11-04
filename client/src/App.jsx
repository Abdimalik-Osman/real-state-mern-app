import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import PrivateRoute from "./Components/PrivateRoute"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignOut from "./pages/SignOut"
import Signup from "./pages/SignUp"
import Home from "./pages/home"

export default function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
