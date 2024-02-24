import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center flex-col font-custom1 min-h-96 text-lemonGrey">
      <FontAwesomeIcon icon={faPersonDigging} className='text-5xl md:text-9xl' />
      <h2 className='text-3xl md:text-4xl'>Page under construction</h2>
    </div>
  );
};

export default UnderConstruction;