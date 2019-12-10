import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoriesList from './src/videos/containers/CategoriesList';
import API from './src/utils/Api';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';
type Props = {};
class App extends Component<Props> {
  state = {
    listSuggestions: [],
    listCategories: [],
  };
  async componentDidMount() {
    const MoviesSuggestion = await API.getSuggestion(10);
    const Categories = await API.getMovies();
    console.log(Categories);
    this.setState({listSuggestions: MoviesSuggestion, Categories: Categories});
    //this.fetchData();
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Home>
              <Header>
                <Text>Hola desde Header </Text>
              </Header>
              <View style={styles.videoContainer}>
                <Video
                  source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}} // Can be a URL or a local file.
                  ref={ref => {
                    this.player = ref;
                  }} // Store reference
                  onBuffer={this.onBuffer} // Callback when remote video is buffering
                  onError={this.videoError} // Callback when video cannot be loaded
                  style={styles.backgroundVideo}
                />
              </View>
              <CategoriesList list={this.state.Categories} />
              <SuggestionList list={this.state.listSuggestions} />
            </Home>
          </ScrollView>
        </SafeAreaView>
      </>
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
  videoContainer: {
    flex: 1,
    height: 200,
  },
});

export default App;
