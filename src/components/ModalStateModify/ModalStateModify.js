import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

export const ModalStateModify = ({isOpen, handleClose, setModalInfo, modalInfo, handleUpdate}) => {
    const [show, setShow] = useState(false);

    


    const handleInputChange = (e) => {
      
        setModalInfo({
            ...modalInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit State</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="py-1">
                    <Form.Label>State Code</Form.Label>
                    <Form.Control type="text" maxLength="2" placeholder="Enter Country Name" name="code"  value={modalInfo.code} onChange={handleInputChange} /> 
                </div>

                <div className="py-1">
                    <Form.Label>Subdivision Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Short Name" name="subdivisionName"  value={modalInfo.subdivisionName} onChange={handleInputChange} /> 
                </div>

                <div className="py-1">
                    <Form.Label>Subdivision Category</Form.Label>
                    <Form.Control type="text" maxLength="3" placeholder="Enter Alpha2Code" name="subdivisionCategory"  value={modalInfo.subdivisionCategory} onChange={handleInputChange} /> 
                </div>
            </Modal.Body>
            
            
            <Modal.Footer>
            <Button className="btn btn-secondary" onClick={handleClose}>
                Close
            </Button>
            <Button className="btn btn-primary" onClick={handleUpdate}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>
    )
}