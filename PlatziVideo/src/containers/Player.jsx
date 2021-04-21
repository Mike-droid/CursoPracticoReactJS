import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import getVideoSource from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;  //*Esto nos lo manda router
  const hasPlaying = Object.keys(props.playing).length > 0 ;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
};

Player.propTypes = {
  getVideoSource: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
