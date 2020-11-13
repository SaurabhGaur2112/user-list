// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import Table from '@hawk-ui/table';

export default class Home extends Component {
  static propTypes = {
    userLists: PropTypes.object,
  }

  state = {
    lists: this.props.userLists,
    pagination: {
      activePage: 1,
      total: 100,
      pageRange: 3,
      pageSize: 10,
    },
  };

  render() {
    const { lists, pagination } = this.state;
    const header = [
      { key: 'id', title: 'Id', dataIndex: 'id' },
      { key: 'title', title: 'Title', dataIndex: 'title' },
      { key: 'body', title: 'Body', dataIndex: 'body' },
      { key: 'action', title: 'Action', dataIndex: '', render: (event) => <span onClick={() => { console.log(event); }} style={{ cursor: 'pointer' }}>Delete</span> },
    ];

    return (
      <div className="home">
        <Table
          tableContent={lists}
          tableSearchContent={[
            'title',
            'body',
          ]}
        >
          <Table.SEARCH />
          <Table.CONTENT
            tableHeader={header}
            isLoading={false}
          />
          <Table.PAGINATION
            pageRangeDisplayed={_.get(pagination, 'pageRange')}
            itemsCountPerPage={_.get(pagination, 'pageSize')}
            totalItemsCount={_.get(pagination, 'total')}
            onPaginationChange={(event) => {
              console.log('query event', event);
              // this.setState((prevState) => {
              //   const pagination = { ...prevState.pagination };
              //   pagination.activePage = parseInt(pageNo, 10);
              //   return { pagination };
              // });
            }}
          />
        </Table>
      </div>
    );
  }
}
