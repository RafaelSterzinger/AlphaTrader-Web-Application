import React from "react";
import Chart from "chart.js"

class Graph extends React.Component{
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.chartRef = new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.color
                }]
            }
        });
    }

    render() {
        return (
            <canvas ref={this.chartRef} />
        );
    }
}

export default Graph;