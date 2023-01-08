import './LittleSpinner.scss';
const LittleSpinner = ({content}) => {
    const lsClass = content ? 'Little-spinner-content Little-spinner' : 'Little-spinner';
    return (
        <div className={lsClass} >
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>   
        </div>
    );
};
export default LittleSpinner;