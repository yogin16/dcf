import React from "react"
import { Finance } from "financejs"
import { useState, useRef, createRef } from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import InlineForm from "../components/inlineForm"

const finance = new Finance();


const CFInputFormLabel = ({yearNo}) => {
    if(yearNo === 0) {
        return (
            <Form.Label>{"Present Value (Year 0):"}</Form.Label>    
        )
    }
    return (
        <Form.Label>{"Cash Flow for Year: " + yearNo}</Form.Label>
    )
}


const CFInput = ({ yearNo, yearRef }) => {
    var controlId = "year" + yearNo
    return (
        <Col>
            <Form inline>
                <Form.Group controlId={controlId}>
                    <CFInputFormLabel yearNo={yearNo} />
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

    const [showResult, setShowResult] = useState(false);
    const [rate, setRate] = useState("computing");

    for (var i = 0; i < numYears + 1; i++) {
        const ref = createRef();
        refs[i] = ref;
        rows.push(
            <CFInput yearNo={i} yearRef={ref} />
        );
    }

    const onClick = (e) => {
        e.preventDefault()

        const cashFlow = [];
        for (var i = 0; i < numYears + 1; i++) {
            cashFlow[i] = parseFloat(refs[i].current.value)
        }

        var initial = cashFlow[0]
        var cf = cashFlow.slice(1)
        setRate(finance.IRR(initial, ...cf))
        setShowResult(true)
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
            <Row>
                <Button variant="primary" type="submit" onClick={onClick}>
                    Submit
                </Button>
            </Row>
            {
                showResult && 
                <Row>
                    <p>{"Rate is: " + rate}</p>
                </Row>
            }
        </Container>
    )
}


const RateForm = ({ show, years }) => {
    if (show) {
        return (
            <Col>
                <p>Hello!</p>
                <CFInputGroup numYears={years} />
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
    const [years, setYears] = useState(0);
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
                                    setYears(inputYears.current.value)
                                    setShow(true)
                                }
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <RateForm show={show} years={years} />
                </Row>
            </Container>
        </Layout>
    )
}

export default Rate