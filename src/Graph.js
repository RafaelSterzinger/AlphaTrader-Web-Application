import React from "react";
import Chart from "chart.js"

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.chartRef = new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                labels: this.props.data.map(d => d.Date),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.Close),
                    backgroundColor: this.props.color,
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.0
                    }
                }
            }
        });
    }

    render() {
        return (
            <canvas ref={this.chartRef}/>
        );
    }
}

export default Graph;