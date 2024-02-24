import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center gap-3 p-3 text-lemonGrey font-custom2">
      <FontAwesomeIcon icon={faCircleCheck} className='text-7xl'/>
      <h2 className='text-xl'>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;