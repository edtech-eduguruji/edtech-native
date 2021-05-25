import React from 'react'
import LocalStorage from '../common/LocalStorage'

function withLoggedIn(WrappedComponent) {
  // ...and returns another component...
  return props => {
    // Notice that we pass through any additional props
    const user = LocalStorage.getUser()
    if (user) {
      return <WrappedComponent {...props} user={user} role={user.role} />
    } else {
      // return <Redirect to="/login" />;
      return null
    }
  }
}

export default withLoggedIn
