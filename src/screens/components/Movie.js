/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity, Animated} from 'react-native';
import {connect} from 'react-redux';
import MovieLayout from './MovieLayout';
import Player from '../../players/containers/Player';
import Header from '../../sections/components/Header';
import Details from '../../videos/components/Details';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  };
  backHome = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}>
        <MovieLayout>
          <Header>
            <TouchableOpacity onPress={this.backHome}>
              <Text>Regresar</Text>
            </TouchableOpacity>
          </Header>
          <Player />
          <Details {...this.props.movie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}
const mapStateToProps = state => {
  return {movie: state.selectedMovie};
};

export default connect(mapStateToProps)(Movie);
