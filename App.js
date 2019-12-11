import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoriesList from './src/videos/containers/CategoriesList';
import API from './src/utils/Api';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Player from './src/players/containers/Player';

//importar redux provider

import {Provider} from 'react-redux';
import store from './store';
type Props = {};
class App extends Component<Props> {
  state = {
    // listSuggestions: [],
    // listCategories: [],
  };
  async componentDidMount() {
    const MoviesSuggestion = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        MoviesSuggestion,
      },
    });
    const MoviesCategories = await API.getMovies();
    //console.log(Categories);
    //this.setState({listSuggestions: MoviesSuggestion, Categories: Categories});
    //this.fetchData();
    store.dispatch({
      type: 'SET_MOVIE_CATEGORIES',
      payload: {
        MoviesCategories,
      },
    });
  }
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Home>
              <Header>
                <Text>Hola desde Header </Text>
              </Header>
              <Player />
              <CategoriesList />
              <SuggestionList />
            </Home>
          </ScrollView>
        </SafeAreaView>
      </Provider>
    );
  }
}
// type Props = {}
// const App: () => React$Node<Props> = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Home>
//             <Header>
//               <Text>Hola desde Header </Text>
//             </Header>
//             <SuggestionList />
//             <Text>Aqui van los videos</Text>
//           </Home>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

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
});

export default App;
