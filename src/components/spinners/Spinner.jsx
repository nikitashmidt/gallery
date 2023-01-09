import './Spinner.scss';
import fwt from '../../resources/fwt.svg';
const Spinner = () => {
    return (
        <div className='Spinner' >
            <div className="Spinner-circle">
                <img src={fwt} alt="fwt icon" width={120}  height={"100%"}/>
                <span></span>
            </div>
      </div>
    );
};
export default Spinner;