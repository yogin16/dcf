import React from "react"
import { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import InlineForm from "../components/inlineForm"

function Rate() {
    const [show, setShow] = useState(false);

    return (
        <Layout pageInfo={{ pageName: "rate" }}>
            <Container>
                <Row>
                    <Col>
                        <InlineForm
                            label="Number of Years"
                            placeholder="Enter # of years"
                            onClick={
                                (e) => {
                                    e.preventDefault()
                                    setShow(true)
                                }
                            }
                        />
                    </Col>
                </Row>
                {
                    show && 
                    <Row>
                        <Col>
                            <p>Hello!</p>
                        </Col>
                    </Row>
                }
            </Container>
        </Layout>
    )
}

export default Rate