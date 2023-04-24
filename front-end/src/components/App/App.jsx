import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"

import HomePage from "../../pages/Home/homepage"
import SignInPage from "../../pages/Sign-in/signinpage"
import UserPage from "../../pages/User/userpage"
import ErrorPage from "../../pages/Error/errorpage"
import Header from "../Header/header"
import Footer from "../Footer/footer"

import userReducers from "../../Feature/reducer"
import store from '../../store/store'


function App() {
    return(
        <Provider store={store}>
                <React.Fragment>
                    <Router>
                        <Header />
                            <Routes>
                                <Route path='/' element={<HomePage />} />
                                <Route path='/login' element={<SignInPage />} />
                                <Route path='/user' element={<UserPage />} />
                                <Route path="/*" element={<ErrorPage />} />
                            </Routes>
                        <Footer />
                    </Router>
                </React.Fragment>
        </Provider>
    )
}

export default App