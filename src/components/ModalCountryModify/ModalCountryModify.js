import Button from "@restart/ui/esm/Button";
import { Form, Modal } from "react-bootstrap"
import './ModalCountryModify.css'

export const ModalCountryModify = ({isOpen, handleClose, setModalInfo, modalInfo, handleUpdate}) => {
    
const handlceCheckBox = (e) => {
    const { checked} = e.target

    setModalInfo({
        ...modalInfo,
        ["independent"]: checked
    })
}

    const handleInputChange = (e) => {
      
        setModalInfo({
            ...modalInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Country</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="py-1">
                <Form.Label>Country Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Country Name" name="countryName"  value={modalInfo.countryName} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Short Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Short Name" name="shortName"  value={modalInfo.shortName} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Alpha 2 Code</Form.Label>
                <Form.Control type="text" maxLength="2" placeholder="Enter Alpha2Code" name="alpha2Code"  value={modalInfo.alpha2Code} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Alpha 3 Code</Form.Label>
                <Form.Control type="text" maxLength="3" placeholder="Enter Alpha3Code" name="alpha3Code"  value={modalInfo.alpha3Code} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Numeric Code</Form.Label>
                <Form.Control type="number" placeholder="Enter mumeric Code" name="numericCode"  value={modalInfo.numericCode} onChange={handleInputChange} /> 
                </div>
                <div className="py-1">
                <Form.Label>Remarks</Form.Label>
                <Form.Control type="text" placeholder="Enter Remarks" name="remarks"  value={modalInfo.remarks} onChange={handleInputChange} /> 
                </div>
                
                <div className="py-1"></div>
                <Form.Label>Independent</Form.Label>
                <div className="checkbox checkbox-circle checkbox-color-scheme">
                        <label className="checkbox-checked">
                            <input type="checkbox" value={modalInfo.independent} checked={modalInfo.independent} onChange={handlceCheckBox}/>
                        </label>
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