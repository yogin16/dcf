import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
    <React.Fragment>
        <Container fluid className="px-0 main">
            <Navbar pageInfo={pageInfo} />
            <Row noGutters>
                <Col>
                    <Container className="mt-5">
                        <main>{children}</main>
                    </Container>
                </Col>
            </Row>
        </Container>
        {/* <Container fluid className="px-0">
            <Row noGutters>
                <Col className="footer-col">
                    <footer>
                        <span>
                            © {new Date().getFullYear()}, Built with{` `}
                            <a href="https://www.gatsbyjs.org">Gatsby</a>
                        </span>
                    </footer>
                </Col>
            </Row>
        </Container> */}
    </React.Fragment>
)

export default Layout