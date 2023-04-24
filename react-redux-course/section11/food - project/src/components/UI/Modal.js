import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({onHideCart}) => {
  return <div className={classes.backdrop} onClick={onHideCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onHideCart }) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
