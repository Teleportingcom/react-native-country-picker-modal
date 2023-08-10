import React from 'react';
import { Image, TouchableNativeFeedback, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
    container: {
        height: 48,
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: 25,
        width: 25,
    }
});
const CloseButtonAndroid = (props) => {
    let closeImage = require('./assets/images/close.png');
    if (props.image) {
        closeImage = props.image;
    }
    return (React.createElement(View, { style: [styles.container, props.style] },
        React.createElement(TouchableNativeFeedback, { background: Platform.Version < 21
                ? TouchableNativeFeedback.SelectableBackground()
                : TouchableNativeFeedback.SelectableBackgroundBorderless(), onPress: props.onPress },
            React.createElement(View, null,
                React.createElement(Image, { source: closeImage, style: [
                        styles.imageStyle,
                    ] })))));
};
const CloseButtonIOS = (props) => {
    let closeImage = require('./assets/images/close.png');
    if (props.image) {
        closeImage = props.image;
    }
    return (React.createElement(View, { style: [styles.container, props.style] },
        React.createElement(TouchableOpacity, { onPress: props.onPress },
            React.createElement(Image, { source: closeImage, style: [
                    styles.imageStyle,
                ] }))));
};
const propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.any
};
CloseButtonIOS.prototype = propTypes;
CloseButtonAndroid.prototype = propTypes;
export default Platform.select({
    ios: CloseButtonIOS,
    android: CloseButtonAndroid,
    web: CloseButtonIOS
});
//# sourceMappingURL=CloseButton.js.map