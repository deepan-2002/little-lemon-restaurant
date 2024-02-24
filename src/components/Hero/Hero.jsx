import { Link } from 'react-router-dom';
import restaurantFoodImage from '../../assets/img/food.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero font-custom2">
      <div className="container grid">
        <div className="hero-information p-5">
          <h1 className='text-5xl font-custom1'>Little Lemon</h1>
          <h2 className='text-3xl font-custom1'>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="bg-lemonYellow px-3 py-2 rounded-md block w-fit hover:bg-lemonGrey hover:text-lemonWhite my-2" to={'/reserve'}>
            Reserve a table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;