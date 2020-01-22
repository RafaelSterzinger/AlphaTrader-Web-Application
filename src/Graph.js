import React from "react";
import Chart from "chart.js"

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.chart.data.labels = this.props.data.map(d => d.Date);
        this.chart.data.datasets[0].data = this.props.data.map(d => d.Close);
        if (this.props.ticks) {
            this.colorChart()
        }
        this.chart.update();
    }

    componentDidMount() {
        this.chart = new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                labels: this.props.data.map(d => d.Date),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.Close),
                    backgroundColor: this.props.color
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

    colorChart() {
        let color = [];
        for (let i = 0; i < this.chart.data.datasets[0].data.length; i++) {
            if (i < 31) {
                color[i] = 'black'
            } else {
                color[i] = this.props.ticks[i-31] === 0 ? "#ff0000" : '#00ff00';
            }
        }
        this.chart.data.datasets[0].backgroundColor = color;
    }
}

export default Graph;