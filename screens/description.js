import React from 'react';
import {Dimensions} from 'react-native';

import { WebView } from 'react-native-webview';

const { height, width } = Dimensions.get("window");

export default function Description({navigation,route}) {
  
  return(
        
    <WebView

      style={{ height: height, width: width }}
      source={{ uri: route.params.URL}}
      scrollEnabled={true}

      renderError={(error) => (
        <View style={{ flex: 1 }}>
          <Text>{error}</Text>
        </View>
      )}

      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn("WebView error: ", nativeEvent);
      }}

      onNavigatorStateChange={(event) => {
        if (event.url !== testURI) {
          this.webview.stopLoading();
          Linking.openURL(event.url);
        }
      }} 

    />
    )
    
}