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
                        enabled: false,
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

        const data1IsArray = Array.isArray(data1);
        const data2IsArray = Array.isArray(data2);

        const seriesData = [];
        if (data1IsArray){
            seriesData.push({data: data1});
        }
        if (data2IsArray){
            seriesData.push({data: data2});
        }

        ApexCharts.exec('realtime', 'updateSeries', seriesData);

        const chartOptions = this.state.options;
        chartOptions.xaxis.min = DEFAULT_X_MIN - timeOffset;
        chartOptions.xaxis.max = DEFAULT_X_MAX - timeOffset;

        const COLORS_ONLY_CHANNEL1 = ['#008FFB'];
        const COLORS_ONLY_CHANNEL2 = ['#00E396'];
        const COLORS_BOTH_CHANNELS = ['#008FFB', '#00E396'];

        if (data1IsArray && !data2IsArray){
            console.log('Only #1');
            chartOptions.colors = COLORS_ONLY_CHANNEL1;
        }
        if (data2IsArray && !data1IsArray){
            console.log('Only #2');
            chartOptions.colors = COLORS_ONLY_CHANNEL2;
        }
        if (data1IsArray && data2IsArray){
            console.log('Both');
            chartOptions.colors = COLORS_BOTH_CHANNELS;
        }

        this.setState({options: chartOptions});
    }

    render() {
        console.log('Render Colors : ', this.state.options.colors);
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={[]} type="line" height="350" />
            </div>
        );
    }
}

export default Screen;
