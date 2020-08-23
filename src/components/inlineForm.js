import React from "react"

import { Form, Button } from "react-bootstrap"

const InlineForm = ({ label, placeholder, onClick }) => {
    return (
        <Form inline>
            <Form.Group controlId="numberOfYears">
                <Form.Label>{label}</Form.Label>
                <Form.Control type="number" className="mx-sm-3" placeholder={placeholder} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onClick}>
                Submit
            </Button>
        </Form>
    )
}

export default InlineForm
