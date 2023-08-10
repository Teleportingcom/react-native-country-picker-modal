import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from './CountryTheme';
const styles = StyleSheet.create({
    input: {
        flexGrow: 1,
        height: 56,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        paddingHorizontal: 16,
        fontSize: 14,
        lineHeight: 18,
        includeFontPadding: false,
        color: '#fff',
        marginHorizontal: 24,
    },
});
export const CountryFilter = (props) => {
    const { filterPlaceholderTextColor, fontFamily, fontSize, onBackgroundTextColor, } = useTheme();
    return (React.createElement(TextInput, Object.assign({ testID: 'text-input-country-filter', autoCorrect: false, placeholderTextColor: filterPlaceholderTextColor, style: [
            styles.input,
            { fontFamily, fontSize, color: onBackgroundTextColor },
        ] }, props)));
};
CountryFilter.defaultProps = {
    autoFocus: false,
    placeholder: 'Enter country name',
};
//# sourceMappingURL=CountryFilter.js.map