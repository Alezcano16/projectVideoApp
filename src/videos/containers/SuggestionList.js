import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, SafeAreaView} from 'react-native';
import Layout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../videos/components/Separator';
import Suggestions from '../../videos/components/Suggestions';

class SuggestionList extends Component {
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
    console.log(this.props.list);
    return (
      <Layout title="Recomendado para ti">
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.props.list}
            ItemSeparatorComponent={this.ItemSeparator}
            ListEmptyComponent={this.RenderEmpty}
            renderItem={this.RenderItem}
          />
        </SafeAreaView>
      </Layout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SuggestionList;
