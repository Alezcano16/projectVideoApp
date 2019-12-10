import React, {Component} from 'react';
import {FlatList, StyleSheet, ScrollView} from 'react-native';
import Layout from '../../videos/components/CategoriesListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../videos/components/SeparatorHorizontal';
import Category from '../../videos/components/Category';

export default class CategoryList extends Component {
  RenderEmpty = () => {
    return <Empty text="No hay Sugerencias" />;
  };
  ItemSeparator = () => {
    return <Separator />;
  };
  RenderItem = ({item}) => {
    return <Category {...item} />;
  };
  keyExtractor = item => item.id.toString();
  render() {
    return (
      <Layout title="Categorías">
        <FlatList
          horizontal={true}
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ItemSeparatorComponent={this.ItemSeparator}
          ListEmptyComponent={this.RenderEmpty}
          renderItem={this.RenderItem}
        />
      </Layout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
  },
});
