import React, {Component} from 'react';
import {FlatList, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Layout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../videos/components/Separator';
import Suggestions from '../../videos/components/Suggestions';

export default class CategoryList extends Component {
  RenderEmpty = () => {
    return <Empty text="No hay Sugerencias" />;
  };
  ItemSeparator = () => {
    return <Separator />;
  };
  RenderItem = ({item}) => {
    return <Suggestions {...item} />;
  };
  keyExtractor = item => item.id.toString();
  render() {
    return (
      <Layout title="Recomendado para ti">
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal={true}
            keyExtractor={this.keyExtractor}
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
    height: 200,
  },
});
