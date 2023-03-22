import Toast from 'react-bootstrap/Toast';

const ToastComponent = ({bg, toastMsg}) => {
    return (
        <Toast          
          bg={bg}
          show={true}
          delay={3000} 
          autohide
          >
            <Toast.Body className="text-white">
            {toastMsg}
          </Toast.Body>
          </Toast>
    );
}

export default ToastComponent;