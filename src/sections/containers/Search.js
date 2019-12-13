import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import API from '../../utils/Api';

class Search extends Component {
  state = {
    text: '',
  };
  handleSubmit = async () => {
    const MovieFind = await API.SearchMovie(this.state.text);
    console.log(MovieFind);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: MovieFind[0],
      },
    });
  };
  handleChangeText = text => {
    this.setState({
      text,
    });
  };
  render() {
    return (
      <TextInput
        placeholder="busca tu pelicula Favorita"
        autoCorrect={false}
        autoCapitalize="none"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    );
  }
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default connect(null)(Search);
