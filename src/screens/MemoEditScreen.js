import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.memoEditInput} multiline value="Hi!" />

                <CircleButton>
                    <Icon name="check" size={20} />
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        backgroundColor: '#ddd',
        paddingTop: 32,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
    },
});

export default MemoEditScreen;