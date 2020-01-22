import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Graph from "./Graph";
import CSVReader from "react-csv-reader";

export const sample = [
    "Date",
    "Open",
    "High",
    "Low",
    "Close",
    "Adj Close",
    "Volume"
];

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            raw: null,
            profit: 1000
        };
    }

    render() {
        return (
            <Row className="justify-content-center col-12">
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
                <h2>
                    A simple application, which predicts your stock market data from YahoohFinance.<br/> The market is
                    predicted by using a
                    deep neural network trained with Keras in Python on NASDAQ, DOW30, S&P 500.
                </h2>
                <br/>
                <h3>{"Your current balance is € " + this.state.profit}</h3>
            </div>
        </Card.Header>;
    }

    body() {
        return <Card.Body>
            <Row>
                <Col style={{padding: "40px"}}>
                    {this.state.data.length !== 0 ?
                        <Graph data={this.state.data} title={"Your Yahoo Finance Data"} color={"#70CAD1"}/> : null}
                </Col>
            </Row>
            <Row>
                <Col className={"col p-55"}>
                    <Button variant={"success"} disabled={this.state.data.length === 0}
                            onClick={() => this.getPrediction()}>Earn €€€</Button>
                </Col>
                <Col>
                    <CSVReader onFileLoaded={data => this.prepareData(data)}/>
                </Col>
            </Row>
        </Card.Body>;
    }

    footer() {
        return <Card.Footer className="text-muted">Application build by Rafael Sterzinger for the lecture <em>Applied
            Deep Learning</em>, WS 2019</Card.Footer>;
    }

    prepareData(data) {
        if (data[0].length !== sample.length) {
            alert("Wrong format! Please download your data from https://finance.yahoo.com/");
            return;
        }

        for (let i = 0; i < data[0].length; i++) {
            if (data[0][i] !== sample[i]) {
                alert("Wrong format! Please download your data from https://finance.yahoo.com/");
                return;
            }
        }

        try {
            let temp = [];
            for (let i = 1; i < data.length; i++) {
                temp[i - 1] = {
                    Date: data[i][0],
                    Open: data[i][1],
                    High: data[i][2],
                    Low: data[i][3],
                    Close: data[i][4],
                    Adj_Close: data[i][5],
                    Volume: data[i][6]
                }
            }
            this.setState({data: temp, raw: data})
        } catch (e) {
            alert("Wrong format! Could not parse your CSV")
        }
    }

    getPrediction() {
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:5000/'
            },
            body: JSON.stringify(this.state.raw)
        }).then(response => response.json()).then(data => this.setState({profit: this.state.profit*data.profit.toFixed(2), ticks: data.ticks}));
    }

}

export default Content;
