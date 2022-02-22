import { Table } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { RecentRequests } from '../../static/recentRequests';
import { ActionCircle } from './globalstyle.styled';
import { RiArrowRightSLine } from 'react-icons/ri';

const DashboardTableRecord = () => {
    const requestCols = [
        {
            title: 'Name/Email',
            dataIndex: 'name',
            render: (_text, record) => (
                <>
                    <div className="t-flex t-items-center">
                        <div className="t-overflow-hidden t-rounded-md t-mr-4">
                            <img src={record.photo} alt="phot" />
                        </div>
                        <div>
                            <h3 className="t-text-black t-font-semibold">{record.name}</h3>
                            <h4>{record.email}</h4>
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            render: (_text, record) => (
                <>
                    <span className="t-text-slate-400">{record.type}</span>
                </>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (_text, record) => (
                <>
                    <StatusHolder
                        background={record.status === 'Pending' ? '#FFAC321A' : '#63B67F1A'}
                        color={record.status === 'Pending' ? '#FFB648' : '#63B67F'}
                    >
                        {record.status}
                    </StatusHolder>
                </>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: '',
            dataIndex: '',
            render: (_text, record) => (
                <>
                    <ActionCircle record={record}>
                        <RiArrowRightSLine />
                    </ActionCircle>
                </>
            ),
        },
    ];
    return (
        <TableContainer>
            <Table columns={requestCols} dataSource={RecentRequests} rowKey={record => record.id} />
        </TableContainer>
    );
};

export default DashboardTableRecord;

const TableContainer = styled.div`
    .ant-table-thead > tr > th {
        background: transparent;
        color: #8392ab;
        font-weight: 800;
        font-size: 1rem;
    }
    // override ant table
    .ant-table-thead
        > tr
        > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        width: 0;
    }
`;

const StatusHolder = styled.div`
    background: ${props => props.background || '#9ca3af'};
    color: ${props => props.color || '#fafafa'};
    border-radius: 18px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    max-width: 7rem;
    width: 7rem;
`;
