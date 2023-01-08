import "./ModalError.scss";
import errorImg from "../../resources/error.webp";

const ModalError = ({ open }) => {
  const modalClass = open ? "Modal-error" : "";
  const reloadPage = () => {
    window.location.reload();
  };
  if (open) {
    document.body.style.overflow = "hidden";
  }
  return (
    <div className={modalClass}>
      <div className="errorContent">
        <div className="errorContent-img">
          <img src={errorImg} alt="error img" />
        </div>
        <p>Oops unknown error</p>
        <button className="accept" onClick={() => reloadPage()}>
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ModalError;
