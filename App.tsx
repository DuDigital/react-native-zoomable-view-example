import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ReactNativeZoomableView } from '@dudigital/react-native-zoomable-view';

/**
 * Log out an example event after zooming
 *
 * @param event
 * @param gestureState
 * @param zoomableViewEventObject
 */
function logOutZoomState(event, gestureState, zoomableViewEventObject) {
  console.log('');
  console.log('');
  console.log('-------------');
  console.log('Event: ', event);
  console.log('GestureState: ', gestureState);
  console.log('ZoomableEventObject: ', zoomableViewEventObject);
  console.log('');
  console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
}

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native Zoomable View</Text>
      </View>

      <View style={styles.zoomWrapper}>
        <ReactNativeZoomableView
          zoomEnabled={true}
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.25}
          initialZoom={0.9}
          bindToBorders={true}
          onZoomAfter={logOutZoomState}
          style={styles.zoomableView}
        >
          <Image
            style={styles.image}
            source={require('./image.jpg')}
            resizeMode="stretch"
          />
          <Text style={styles.caption}>Vienna, Austria</Text>
        </ReactNativeZoomableView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#5569ff',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  zoomWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  zoomableView: {
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '80%',
    marginBottom: 10,
  },
  caption: {
    fontSize: 10,
    color: '#444',
    alignSelf: 'center',
  },
});
