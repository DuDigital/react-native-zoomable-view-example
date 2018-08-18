import React from 'react';
import { View, Image } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default class App extends React.Component {
  /**
   * Log out an example event after zooming
   *
   * @param event
   * @param gestureState
   * @param zoomableViewEventObject
   */
  logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    console.log('');
    console.log('');
    console.log('-------------');
    console.log('Event: ', event);
    console.log('GestureState: ', gestureState);
    console.log('ZoomableEventObject: ', zoomableViewEventObject);
    console.log('');
    console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          style={{
            padding: 10,
            backgroundColor: 'red',
          }}
        >
          <Image style={{ flex: 1, width: null, height: '100%' }}
                 source={require('./image.jpg')}
                 resizeMode="contain" />
        </ReactNativeZoomableView>
      </View>
    );
  }
}