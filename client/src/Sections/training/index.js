import React, { useEffect,useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import axios from "axios"

export const Training = () => {
  
  

  return (
    <div id="training">
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Training Sessions | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Training Sessions </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
            <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 9 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="https://fr.web.img3.acsta.net/r_654_368/newsv7/21/04/29/14/22/0010719.jpg" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </Container>
      </HelmetProvider>
    </div>
  );
};
