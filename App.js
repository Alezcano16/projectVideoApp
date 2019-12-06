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
import API from './src/utils/Api';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type Props = {};
class App extends Component<Props> {
  state = {
    list: [],
  };
  async componentDidMount() {
    const Movies = await API.getSuggestion(2);
    console.log(Movies);
    this.setState({list: Movies});
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
              <SuggestionList list={this.state.list} />
              <Text>Aqui van los videos</Text>
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
});

export default App;
