import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../videos/components/Separator';

class SuggestionList extends Component {
  RenderEmpty = () => {
    return <Empty text="No hay Sugerencias" />;
  };
  ItemSeparator = () => {
    return <Separator />;
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
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          ItemSeparatorComponent={this.ItemSeparator}
          ListEmptyComponent={this.RenderEmpty}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
