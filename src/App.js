import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';

import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import SuggestionList from './videos/containers/SuggestionList';
import CategoriesList from './videos/containers/CategoriesList';
import Movie from './screens/components/Movie';
import API from './utils/Api';
import Search from './sections/containers/Search';
class AppLayout extends Component {
  state = {
    // listSuggestions: [],
    // listCategories: [],
  };
  async componentDidMount() {
    const MoviesSuggestion = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        MoviesSuggestion,
      },
    });
    const MoviesCategories = await API.getMovies();
    //console.log(Categories);
    //this.setState({listSuggestions: MoviesSuggestion, Categories: Categories});
    //this.fetchData();
    this.props.dispatch({
      type: 'SET_MOVIE_CATEGORIES',
      payload: {
        MoviesCategories,
      },
    });
  }

  render() {
    if (this.props.selectedMovie) {
      return (
        <SafeAreaView style={styles.container}>
          <Movie />
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <Home>
          <Header />
          <Search />
          <CategoriesList />
          <SuggestionList />
        </Home>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  imgLogo: {
    width: '80%',
    height: 80,
    position: 'relative',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
  };
};
export default connect(mapStateToProps)(AppLayout);
