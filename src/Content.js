import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Content extends React.Component {


    render() {
        return (
            <Row className="justify-content-center">
                <Card className="text-center">
                    {this.header()}
                    {this.body()}
                    {this.footer()}
                </Card>
            </Row>
        );
    }

    header() {
        return <Card.Header>
            <div className="jumbotron">
                <h1 className="display-4">AlphaTrader</h1>
                <p>
                    This is a simple application, which predicts your stock market data. The market is predicted by
                    using a
                    deep neural network trained with Keras in Python on NASDAQ, DOW30, S&P 500
                </p>
            </div>
        </Card.Header>;
    }

    body() {
        return <Card.Body>
            <Row>
                <Col style={{padding:"40px"}}>
                    {this.props.children}
                </Col>
            </Row>
            <Row>
                <Col class={"col p-55"}>
                    <Button>Start earning money</Button>
                </Col>
                <Col>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </Col>
            </Row>
        </Card.Body>;
    }

    footer() {
        return <Card.Footer className="text-muted">Application build by Rafael Sterzinger for the lecture <em>Applied
            Deep Learning</em>, WS 2019</Card.Footer>;
    }
}

export default Content;