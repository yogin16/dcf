import React from "react"
import { useState, useRef, createRef } from "react"
import { Row, Col, Container, Form } from "react-bootstrap"

import Layout from "../components/layout"
import InlineForm from "../components/inlineForm"


const CFInput = ({ yearNo, yearRef }) => {
    var controlId = "year" + yearNo
    return (
        <Col>
            <Form inline>
                <Form.Group controlId={controlId}>
                    <Form.Label>{"Cash Flow for Year: " + yearNo}</Form.Label>
                    <Form.Control ref={yearRef} type="number" className="mx-sm-3" />
                </Form.Group>
            </Form>
        </Col>
    )
}


const CFInputGroup = ({ numYears }) => {
    const refs = {}
    const rows = [];
    numYears = parseInt(numYears);
    for (var i = 1; i < numYears + 1; i++) {
        const ref = createRef();
        refs[i] = ref;
        rows.push(
            <CFInput yearNo={i} yearRef={ref} />
        );
    }
    return (
        <Container>
            {
                rows.map((val, idx) => {
                    return (
                        <Row key={idx}>
                            {val}
                        </Row>
                    )
                })
            }
        </Container>
    )
}


const RateForm = ({ show, yearsRef }) => {
    if (show) {
        return (
            <Col>
                <p>Hello!</p>
                <CFInputGroup numYears={yearsRef.current.value} />
            </Col>
        )
    } else {
        return (
            <Col>
                <p>Test!</p>
            </Col>
        )
    }

}


function Rate() {
    const [show, setShow] = useState(false);
    const inputYears = useRef(null);

    return (
        <Layout pageInfo={{ pageName: "rate" }}>
            <Container>
                <Row>
                    <Col>
                        <InlineForm
                            label="Number of Years"
                            placeholder="Enter # of years"
                            inputRef={inputYears}
                            onClick={
                                (e) => {
                                    e.preventDefault()
                                    setShow(true)
                                }
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <RateForm show={show} yearsRef={inputYears} />
                </Row>
            </Container>
        </Layout>
    )
}

export default Rate