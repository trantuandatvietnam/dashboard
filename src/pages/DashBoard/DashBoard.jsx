import React from 'react';
import statusCards from '../../assets/JsonData/status-card-data.json';
import StatusCard from '../../components/StatusCard/StatusCard';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
import Badge from '../../components/Badge/Badge';
import { useSelector } from 'react-redux';

const chartOptions = {
    series: [
        {
            name: 'Online customers',
            data: [50, 28, 11, 90, 100, 93, 22, 65, 12, 44, 192, 32],
        },
        {
            name: 'Store Customers',
            data: [45, 12, 45, 22, 77, 34, 23, 213, 34, 11, 53, 23],
        },
    ],
    options: {
        colors: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            category: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        legend: {
            position: 'top',
        },
        grid: {
            show: false,
        },
    },
};

const topCustomers = {
    head: ['user', 'total orders', 'total pending'],
    body: [
        {
            username: 'john doe',
            order: '490',
            price: '$15,870',
        },
        {
            username: 'frank iva',
            order: '250',
            price: '$12,251',
        },
        {
            username: 'anthony baker',
            order: '120',
            price: '$10,840',
        },
        {
            username: 'frank iva',
            order: '110',
            price: '$9,251',
        },
        {
            username: 'anthony baker',
            order: '80',
            price: '$8,840',
        },
    ],
};

const latestOrders = {
    head: ['order id', 'user', 'total price', 'date', 'status'],
    body: [
        {
            id: '#OD1711',
            user: 'john doe',
            date: '17 Jun 2021',
            price: '$900',
            status: 'shipping',
        },
        {
            id: '#OD1712',
            user: 'frank iva',
            date: '1 Jun 2021',
            price: '$400',
            status: 'paid',
        },
        {
            id: '#OD1713',
            user: 'anthony baker',
            date: '27 Jun 2021',
            price: '$200',
            status: 'pending',
        },
        {
            id: '#OD1712',
            user: 'frank iva',
            date: '1 Jun 2021',
            price: '$400',
            status: 'paid',
        },
        {
            id: '#OD1713',
            user: 'anthony baker',
            date: '27 Jun 2021',
            price: '$200',
            status: 'refund',
        },
    ],
};

const orderStatus = {
    paid: 'success',
    refund: 'danger',
    shipping: 'primary',
    pending: 'warning',
};

const renderCustomHead = (item, index) => <th key={index}>{item}</th>;
const renderCustomBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
);

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
);
const DashBoard = () => {
    const themeReducer = useSelector((state) => state.themeReducer.mode);
    return (
        <div>
            <h2 className="page-header">DashBoard</h2>

            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {statusCards.map((item, index) => (
                            <div key={index} className="col-6">
                                <StatusCard
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-6">
                    <div className="card full-height">
                        <Chart
                            options={
                                themeReducer === 'theme-mode-dark'
                                    ? {
                                          ...chartOptions.options,
                                          theme: { mode: 'dark' },
                                      }
                                    : {
                                          ...chartOptions.options,
                                          theme: { mode: 'light' },
                                      }
                            }
                            series={chartOptions.series}
                            type="line"
                            height="100%"
                        />
                    </div>
                </div>

                <div className="col-5">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top Customers</h3>
                        </div>
                        <div className="card-body">
                            {/* table */}
                            <Table
                                headerData={topCustomers.head}
                                renderHead={renderCustomHead}
                                bodyData={topCustomers.body}
                                renderBody={renderCustomBody}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">View all</Link>
                        </div>
                    </div>
                </div>

                <div className="col-7">
                    <div className="card">
                        <div className="card__header">
                            <h3>Lastest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headerData={latestOrders.head}
                                renderHead={renderOrderHead}
                                bodyData={latestOrders.body}
                                renderBody={renderOrderBody}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">View all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
