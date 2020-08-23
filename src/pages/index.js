import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Container>
      <Row>
        <Col>
          <p>Hello World</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
