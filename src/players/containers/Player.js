import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from './PlayerLayout';
export default class Player extends Component {
  state = {
    loading: true,
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };
  onLoad = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <Layout
        loading={this.state.loading}
        loader={<ActivityIndicator color="white" />}>
        <Video
          source={{
            uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          controls
          resizeMode="contain"
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          onLoad={this.onLoad}
          style={styles.backgroundVideo}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
