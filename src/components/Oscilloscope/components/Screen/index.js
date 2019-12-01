import React, { PureComponent } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

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
                },
                yaxis: {
                    type: 'numeric',
                    min: -1,
                    max: 1,
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
        const { channel1Data: data1, channel2Data: data2 } = this.props;

        const seriesData = [];
        if (Array.isArray(data1)){
            seriesData.push({data: data1});
        }
        if (Array.isArray(data2)){
            seriesData.push({data: data2});
        }

        ApexCharts.exec('realtime', 'updateSeries', seriesData);
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
