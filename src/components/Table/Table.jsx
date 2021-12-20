import React, { useState, useEffect, useCallback } from 'react';
import './table.css';

const Table = (props) => {
    const initDataShow =
        props.limit && props.bodyData
            ? props.bodyData.slice(0, Number(props.limit))
            : props.bodyData;
    const [dataShow, setDataShow] = useState(initDataShow);
    const [currentPage, setCurrentPage] = useState(1);
    let pages = 1;
    let range = [];

    if (props.limit !== undefined) {
        pages = Math.ceil(props.bodyData.length / Number(props.limit));
        range = [...Array(pages).keys()];
    }

    const selectPage = useCallback(
        (page) => {
            const start = (page - 1) * props.limit;
            const end = start + props.limit;
            setDataShow(
                props.limit ? props.bodyData.slice(start, end) : props.bodyData
            );
        },
        [props.limit, props.bodyData]
    );

    useEffect(() => {
        selectPage(currentPage);
    }, [currentPage, selectPage]);

    return (
        <div className="table-wraper">
            <table>
                {props.headerData && props.renderHead ? (
                    <thead>
                        <tr>
                            {props.headerData.map((item, index) =>
                                props.renderHead(item, index)
                            )}
                        </tr>
                    </thead>
                ) : null}

                {props.renderBody && dataShow ? (
                    <tbody>
                        {dataShow.map((item, index) =>
                            props.renderBody(item, index)
                        )}
                    </tbody>
                ) : null}
            </table>
            {pages > 1 ? (
                <div className="table__pagination">
                    {range.map((item, index) => (
                        <div
                            key={index}
                            className={`table__pagination--item ${
                                item + 1 === currentPage ? 'active' : ''
                            }`}
                            onClick={() => {
                                setCurrentPage(item + 1);
                            }}
                        >
                            {item + 1}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Table;
