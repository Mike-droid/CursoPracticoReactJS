import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions'; //*No hace falta llamar a un archivo porque tenemos un index
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            {/*Creamos una url por cada elemento que iteramos*/}
            <img
              className='carousel-item__details--img'
              src={playIcon}
              alt='Play Icon'
            />
          </Link>
          {/*Pasamos isList en las props y hacemos una validación*/}
          {
            isList ? (
              <img
                className='carousel-item__details--img'
                src={removeIcon}
                alt='Remove Icon'
                onClick={() => handleDeleteFavorite(id)}
              />
            ) : (
              <img
                className='carousel-item__details--img'
                src={plusIcon}
                alt='Plus Icon'
                onClick={handleSetFavorite}
              />
            )
          }

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

//* PropTypes sirve para asegurarnos que la data que se esta consumiendo es la correcta y evitar así un posible error

CarouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
