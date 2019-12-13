import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import MovieLayout from './MovieLayout';
import Player from '../../players/containers/Player';
import Header from '../../sections/components/Header';

class Movie extends Component {
  backHome = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };
  render() {
    return (
      <MovieLayout>
        <Header>
          <TouchableOpacity onPress={this.backHome}>
            <Text>Regresar</Text>
          </TouchableOpacity>
        </Header>
        <Player />
      </MovieLayout>
    );
  }
}

export default connect(null)(Movie);
