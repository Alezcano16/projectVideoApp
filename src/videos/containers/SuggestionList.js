import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Layout from '../../videos/components/SuggestionListLayout';
import Empty from '../../videos/components/Empty';
import Separator from '../../videos/components/Separator';
import Suggestions from '../../videos/components/Suggestions';
import {connect} from 'react-redux';
class SuggestionList extends Component {
  RenderEmpty = () => {
    return <Empty text="No hay Sugerencias" />;
  };
  ItemSeparator = () => {
    return <Separator />;
  };
  viewMovie = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      },
    });
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
    return (
      <Suggestions
        {...item}
        onPress={() => {
          this.viewMovie(item);
        }}
      />
    );
  };
  keyExtractor = item => item.id.toString();
  render() {
    console.log(this.props.list);
    return (
      <Layout title="Recomendado para ti">
        <View style={styles.container}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            ItemSeparatorComponent={this.ItemSeparator}
            ListEmptyComponent={this.RenderEmpty}
            renderItem={this.RenderItem}
          />
        </View>
      </Layout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    overflow: 'hidden',
  },
});

const mapStateToProps = state => {
  console.log(state);
  return {list: state.MoviesSuggestion};
};

export default connect(
  mapStateToProps,
  null,
)(SuggestionList);
