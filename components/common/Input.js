import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
    const { inputStyle, containerStyle } = styles;
    return <View style={containerStyle}>
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            multiline
        />
    </View>;
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1
    },
    containerStyle: {
        borderColor: 'red', borderWidth: 1,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };