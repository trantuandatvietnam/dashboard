import React from 'react';
import Table from '../../components/Table/Table';
import customersList from '../../assets/JsonData/customers-list';

const customTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total order',
    'total spend',
    'location',
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
);

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">Customers</h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit={10}
                                headerData={customTableHead}
                                renderHead={renderHead}
                                bodyData={customersList}
                                renderBody={renderBody}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
