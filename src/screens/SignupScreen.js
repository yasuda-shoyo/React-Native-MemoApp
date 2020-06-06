import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native';

class SignupScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    メンバー登録
                </Text>

                <TextInput style={styles.input} value="Email address" />
                <TextInput style={styles.input} value="Password" />
                <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor="#c70f66">
                    <Text style={styles.buttonTitle}>
                        登録する
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor:'#e31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default SignupScreen;