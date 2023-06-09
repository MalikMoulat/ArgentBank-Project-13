import React from 'react'
import './header.css'
import logo from '../../assets/img/argentBankLogo.png'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetState } from '../../Feature/reducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { string } from 'prop-types'


function Header() {

  const user = useSelector(state => state.user)
  const tokenStorage = window.localStorage.getItem('TOKEN')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  /**
   * fonction qui deconnecte un utilisateur
   */
  const signOut = () => {
    localStorage.clear()
    navigate("/")
    dispatch(resetState())
  }



  useEffect(() => {

    if (tokenStorage !== null){
      navigate('/user')
    }

  }, [])


  /**
   * userConnected verifie que l'user et bien connecter en vérifiant l'existence de l'id de l'user
   * dans le store redux
   * @param {string} data - l'id de l'user recupérer dans le state redux
   * @returns 
   */
  const userConnected = (userId) => {
    if (userId !== null){

      return  <React.Fragment>
                  <i className="fa fa-user-circle"></i>
                  <p className='nav-margin'>{user.firstName} {user.lastName}</p>
                  <a onClick={signOut}>
                  <i className="fa fa-right-from-bracket"></i>
                    Sign Out</a>
              </React.Fragment>
    } 
    return  <React.Fragment>
              <a className="main-nav-item" href="/login">
              <i className="fa fa-user-circle"></i>
                Sign In
              </a>
            </React.Fragment>
  }

  
    return(
        <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div className='main-nav-button' >
          {userConnected(user.id)}
        </div>
      </nav>
    )
}

export default Header