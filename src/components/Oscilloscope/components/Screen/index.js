import React, { PureComponent } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const DEFAULT_X_MIN = 0;
const DEFAULT_X_MAX = 100;

class Screen extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                tooltip: {
                    enabled: false
                },
                grid: {
                    show: true,
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                chart: {
                    id: 'realtime',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1000
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'numeric',
                    labels: {
                        show: false
                    },
                    tickAmount: 18,
                    min: DEFAULT_X_MIN,
                    max: DEFAULT_X_MAX,
                    range: this.props.range
                },
                yaxis: {
                    type: 'numeric',
                    min: -5,
                    max: 5,
                    labels: {
                        show: false
                    },
                    tickAmount: 8,
                },
                legend: {
                    show: false
                }
            },
            intervalHandle: null,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { channel1Data: data1, channel2Data: data2, timeOffset } = this.props;

        const seriesData = [];
        if (Array.isArray(data1)){
            seriesData.push({data: data1});
        }
        if (Array.isArray(data2)){
            seriesData.push({data: data2});
        }

        ApexCharts.exec('realtime', 'updateSeries', seriesData);

        const chartOptions = this.state.options;
        chartOptions.xaxis.min = DEFAULT_X_MIN - timeOffset;
        chartOptions.xaxis.max = DEFAULT_X_MAX - timeOffset;
        this.setState({options: chartOptions});
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={[]} type="line" height="350" />
            </div>
        );
    }
}

export default Screen;
