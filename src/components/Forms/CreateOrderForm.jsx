import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomSelectBox from '../FormInputs/CustomSelectBox';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { post } from '../../utilities/apim';
import { getFormattedDate, priorityOptions, teamOptions, getRandomNum } from '../../utilities';

const today = new Date();

const CreateOrderForm = () => {
    const teamMemberNameRef = useRef(null);
    const priorityRef = useRef(null);
    const teamRef = useRef(null);
    const [dueDate, setDueDate] = useState(today);
    const [fieldError, setFieldError] = useState({});

    const handleSubmit = () => {
        let valid = true;
        const fieldError = {}
        if (!teamMemberNameRef?.current?.value) {                        
            valid = false;
            fieldError["teamMemberName"] = {
                error: "Please Enter team member name!"
            }
        }
        if (!priorityRef?.current?.value) {            
            valid = false;
            fieldError["priority"] = {
                error: "Please Select priority!"
            }
        }
        if (!teamRef?.current?.value) {            
            valid = false;
            fieldError["team"] = {
                error: "Please Select Team!"                                
            }
        }

        if (!valid) {
            setFieldError({...fieldError});
            return;
        }        

        if (valid) {
            const payload = {
                teamMemberName: teamMemberNameRef?.current?.value,
                priority: priorityRef?.current?.value,
                team: teamRef?.current?.value,
                dueDate: getFormattedDate(dueDate),
                orderNumber: getRandomNum(40000, 70000)
            }        
            const requestHeaders = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)            
            }
            postOrders(requestHeaders);
        };
    }

    const postOrders = async (requestHeaders) => {
        const data = await post("/order-list", requestHeaders);
        if(data) alert("Order created successfully");
    }

    const onBlurHandler = (field, evt) => {
        const { target: {value}} = evt;
        const fieldErrors = {...fieldError};        
        if (value) fieldErrors[field]["error"] = "";

        setFieldError({...fieldErrors});
        
    }

    const onCancel = () => {
        setFieldError({});
        teamMemberNameRef.current.value = ""
        priorityRef.current.value = ""
        teamRef.current.value = ""        
    }

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="teamMemberName">Team Member Name</Form.Label>
                <Form.Control
                    type="text"
                    id="teamMemberName"
                    ref={teamMemberNameRef}
                    onBlur={(e) => onBlurHandler("teamMemberName", e)}
                />
                {fieldError?.teamMemberName && fieldError?.teamMemberName?.error && <Form.Text muted>
                    {fieldError?.teamMemberName.error}
                </Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="priority" className="text-bold">Priority</Form.Label>
                <CustomSelectBox
                    label="Select Priority"
                    optionItems={priorityOptions}
                    setRef={priorityRef}
                    onBlurHandler={(val, e) => onBlurHandler(val || "priority", e)}
                />
                {fieldError?.priority && fieldError?.priority?.error && <Form.Text muted>
                    {fieldError?.priority.error}
                </Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="team" className="text-bold">Team</Form.Label>
                <CustomSelectBox
                    label="Select Team"
                    optionItems={teamOptions}
                    setRef={teamRef}
                    onBlurHandler={(val, e) => onBlurHandler(val || "team", e)}
                />

                {fieldError?.team && fieldError?.team?.error && <Form.Text muted>
                    {fieldError?.team.error}
                </Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="dueDate" className="text-bold">Due Date</Form.Label>
                <DatePicker
                    selected={Date.parse(dueDate)}
                    value={Date.parse(dueDate)}
                    dateFormat="MM/dd/yyyy"
                    maxDate={today}
                    customInput={
                        <Form.Control
                            type="text"
                            id="dueDateInput"
                        />
                    }
                    onChange={(date) => setDueDate(date)}
                />
                <Form.Text id="dueDateInput" muted>
                    Date format must be mm/dd/yyyy
                </Form.Text>
            </Form.Group>
            <Row>
                <Col><Button variant="secondary" onClick={onCancel}>Cancel</Button></Col>
                <Col align="end"><Button variant="primary" onClick={handleSubmit}>Submit</Button></Col>
            </Row>
        </>
    );
}

export default CreateOrderForm;