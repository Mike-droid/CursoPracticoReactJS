import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNmaes from 'classnames';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user = {}, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0 ; //*Object.keys() lo usamos como si fuera un array para poder usar el método length

  const handleLogout = () => {
    props.logoutRequest({}); //*Al mandar un objeto vacío, se reinicia el estado y ya no hay usuario
  };

  Header.propTypes = {
    user: PropTypes.object,
  };

  const headerClass = classNmaes('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/' rel='canonical'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='User pic' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <li><Link to='/'>{user.name}</Link></li> :
              null
          }
          {
            hasUser ?
              <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li> :
              <li><Link to='/login'>Iniciar sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
