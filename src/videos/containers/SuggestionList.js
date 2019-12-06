import React, {Component} from 'react';
import {FlatList, Text, SafeAreaView} from 'react-native';
import Layout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../videos/components/Separator';
import Suggestions from '../../videos/components/Suggestions';

class SuggestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  RenderEmpty = () => {
    return <Empty text="No hay Sugerencias" />;
  };
  ItemSeparator = () => {
    return <Separator />;
  };
  fetchData = async () => {
    this.setState({loading: true, error: null});
    try {
      const response = await fetch('https://app.silaba.com/QUOTE/models/v1/');
      const data = await response.json();
      //console.log(data);
      this.setState({list: data, loading: false, error: null});
    } catch (error) {
      this.setState({loading: false, error: error});
    }
  };
  RenderItem = ({item}) => {
    return <Suggestions {...item} />;
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'X-Men',
        key: '2',
      },
    ];
    return (
      <Layout title="Recomendado para ti">
        <SafeAreaView>
          <FlatList
            data={this.state.list}
            ItemSeparatorComponent={this.ItemSeparator}
            ListEmptyComponent={this.RenderEmpty}
            renderItem={this.RenderItem}
          />
        </SafeAreaView>
      </Layout>
    );
  }
}

export default SuggestionList;
