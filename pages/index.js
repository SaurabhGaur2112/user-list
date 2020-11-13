// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react modules
import _ from 'lodash';
import Table from '@hawk-ui/table';
import Layout from '../modules/layout';
// webUtils modules
import { getUserLists } from '../webUtils/home';

export default class Index extends Component {
  static async getInitialProps() {
    let userId = 1;
    try {
      const response = await getUserLists({ userId });
      return {
        userLists: response,
      };
    } catch (error) {
      return {
        userLists: {},
      };
    }
  };

  static propTypes = {
    userLists: PropTypes.object,
  }

  state = {
    pagination: {
      activePage: 1,
      total: 100,
      pageRange: 3,
      pageSize: 10,
    },
  };

  render() {
    const { pagination } = this.state;
    const { userLists } = this.props;
    const header = [
      { key: 'id', title: 'Id', dataIndex: 'id' },
      { key: 'title', title: 'Title', dataIndex: 'title' },
      { key: 'body', title: 'Body', dataIndex: 'body' },
      { key: 'action', title: 'Action', dataIndex: '', render: (event) => <span onClick={() => { console.log(event); }} style={{ cursor: 'pointer' }}>Delete</span> },
    ];

    console.log('query userLists', userLists);
    return (
      <Layout>
        <button onClick={() => { alert('Hello World'); }}>Click me</button>
        <Table
          tableContent={userLists}
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
      </Layout>
    );
  }
}
