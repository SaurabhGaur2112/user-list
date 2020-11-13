// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// react modules
import _ from 'lodash';
import Table from '@hawk-ui/table';
// action modules
import { getUserLists } from './HomeActions';

class Home extends Component {
  static propTypes = {
    getUserLists: PropTypes.func,
    userLists: PropTypes.object,
    userListReducer: PropTypes.object,
  }

  state = {
    lists: this.props.userLists,
    isLoading: false,
    pagination: {
      total: 100,
      pageRange: 3,
      pageSize: 10,
    },
  };

  componentWillReceiveProps(nextProps, prevProps) {
    if (!_.isEqual(nextProps.userListReducer, prevProps.userListReducer) && !_.isEmpty(_.get(nextProps.userListReducer, 'data'))) {
      setTimeout(() => {
        this.setState({
          lists: _.get(nextProps.userListReducer, 'data'),
          isLoading: false,
        });
      }, 300);
    }
  }

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
            'id',
            'title',
            'body',
          ]}
        >
          <Table.SEARCH />
          <Table.CONTENT
            tableHeader={header}
            isLoading={this.state.isLoading}
          />
          <Table.PAGINATION
            pageRangeDisplayed={_.get(pagination, 'pageRange')}
            itemsCountPerPage={_.get(pagination, 'pageSize')}
            totalItemsCount={_.get(pagination, 'total')}
            onPaginationChange={(event) => {
              this.setState({
                isLoading: true,
              }, () => {
                this.props.getUserLists({ userId: event });
              });
            }}
          />
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userListReducer: state.userListReducers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserLists,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
