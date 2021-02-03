'use strict';

import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as CONST from "constants/index.js";

// import IMAGE1 from "assets/1.png";
// import IMAGE2 from "assets/2.png";
// import IMAGE3 from "assets/3.png";
// import IMAGE1 from "assets/ios_screenshots/1.6.0/5_5/screenshot1__5.5__1242x2208.png";
// import IMAGE2 from "assets/ios_screenshots/1.6.0/5_5/screenshot2__5.5__1242x2208.png";
// import IMAGE3 from "assets/ios_screenshots/1.6.0/5_5/screenshot3__5.5__1242x2208.png";

const MAX_PAGE = 3;

class SomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      gestureName: 'none'
    };
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        if (this.state.page === MAX_PAGE) break;;
        this.setState({ page: this.state.page + 1 });
        break;
      case SWIPE_RIGHT:
        if (this.state.page === 1) break;
        this.setState({ page: this.state.page - 1 });
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          borderRadius: 8,
          padding: 0
        }}
        >
          {this.state.page > 1 && <IconSimpleLineIcons style={{ fontSize: 30, color: "#8F97AB", position: "absolute", top: "50%", left: 5 }} name="arrow-left" />}
          {this.state.page < MAX_PAGE && <IconSimpleLineIcons style={{ fontSize: 30, color: "#8F97AB", position: "absolute", top: "50%", right: 5 }} name="arrow-right" />}
          {this.state.page === 1 && <View style={{ flex: 1 }}>
            {/* <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain"
              }}
              source={require("assets/1.png")}
            /> */}
          </View>}
          {this.state.page === 2 && <View>
            {/* <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain"
              }}
              source={require("assets/2.png")}
            /> */}
          </View>}
          {this.state.page === 3 && <View>
            {/* <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain"
              }}
              source={require("assets/3.png")}
            /> */}
          </View>}
      </GestureRecognizer>
    );
  }
}

export default SomeComponent;