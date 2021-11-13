import react, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import SignIn from '../screens/signin'
import SignUp from '../screens/signup'
import Restraunt from '../screens/RestrauntPage'
import { auth, onAuthStateChanged, db, doc, getDoc } from './firebase'

export default function Routes () {
  const { state, dispatch } = useContext(GlobalContext)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        fetchUserInfo(user.uid)
      } else {
        console.log('user not found')
      }
    })
  }, [])

  const fetchUserInfo = async uid => {
    let userRef = doc(db, 'users', uid)
    let userInfo = await getDoc(userRef)
    userInfo = userInfo.data()
    console.log(userInfo)
    dispatch({
      type: 'AUTH_USER',
      payload: userInfo
    })
  }

  return (
    <Router>
      <div>
        <Switch>
          {state.authUser ? 
           null
           : (
            <Route path='/'>
              <SignUp />
            </Route>
          )}

          <Route path='/RestrauntPage'>
            <Restraunt />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
