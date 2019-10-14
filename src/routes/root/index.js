import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { UserActionContext } from 'contexts/user.context'
import './styles.scss'


function Root() {
  const { updateUserData } = useContext(UserActionContext)

  const loginUser = async () => {
    await updateUserData({})
  }

  return (
    <div className="root">
      <h1>Hello World</h1>
      <div className="content">
        <h3>Routes</h3>
        <ul>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/auth/signup">Sign up</Link></li>
          <li><Link to="/auth/login">Login</Link></li>
        </ul>
        <h3>Actions</h3>
        <ul>
          <li><button onClick={loginUser}>Login User</button></li>
        </ul>
      </div>
    </div>
  );
}

export default withRouter(Root)