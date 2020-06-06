import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';
import Icon from 'react-native-vector-icons/FontAwesome';


class MemoDetailScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
                        <Text style={styles.memoHeaderDate}>2020/06/03</Text>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text>
                        講座のアイデアです。テスト。
                    </Text>
                </View>

                <CircleButton color="white" style={styles.editButton}>
                    <Icon name="pencil" size={24} />
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
    memoHeader: {
        height: 100,
        backgroundColor: '#17313c',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor:'#fff',
        flex: 1,
    },
    editButton: {
        top: 75,
    },
});

export default MemoDetailScreen;