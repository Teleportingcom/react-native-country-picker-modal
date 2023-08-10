import React from 'react'
import {
  Image,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  imageStyle: {
    height: 32,
    width: 32,
    marginTop: 8,
  }
})

interface CloseButtonProps {
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  image?: ImageSourcePropType
  onPress?(): void
}

const CloseButtonAndroid = (props: CloseButtonProps) => {
  let closeImage = require('./assets/images/close.png')

  if (props.image) {
    closeImage = props.image
  }
  return (
    <View style={props.style}>
      <TouchableNativeFeedback
        background={
          Platform.Version < 21
            ? TouchableNativeFeedback.SelectableBackground()
            : TouchableNativeFeedback.SelectableBackgroundBorderless()
        }
        onPress={props.onPress}
      >
        <View>
          <Image
            source={closeImage}
            style={[
              styles.imageStyle,
              // props.imageStyle,
            ]}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const CloseButtonIOS = (props: CloseButtonProps) => {
  let closeImage = require('./assets/images/close.png')

  if (props.image) {
    closeImage = props.image
  }
  return (
    <View style={props.style}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={closeImage}
          style={[
            styles.imageStyle,
            // props.imageStyle,
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

const propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.any
}
CloseButtonIOS.prototype = propTypes
CloseButtonAndroid.prototype = propTypes

export default Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS
})
