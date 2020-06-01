import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import BodyText from './src/elements/BodyText';

export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.appbar}>
                <View>
                    <Text style={styles.appbarTitle}>MEMOT</Text>
                </View>
            </View>
            
            <View style={styles.memoList}>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2020/05/29</Text>
                </View>
                
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2020/05/29</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2020/05/29</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2020/05/29</Text>
                </View>

                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2020/05/29</Text>
                </View>

            </View>

            <View style={styles.memoAddBottun}>
                <Text style={styles.memoAddBottunTitle}>+</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdf6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 78,
    },
    memoAddBottun: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#e31676',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    memoAddBottunTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: '#fff',
    },
    memoList: {
        backgroundColor: '#eee',
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
    },
    appbar: {
        position: 'absolute',
        top: 0,
        height: 80,
        left: 0,
        right: 0,
        paddingTop: 30,
        backgroundColor: "#265366",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        zIndex: 10,
    },
    appbarTitle: {
        color: '#fff',
        fontSize: 20,
    },
});
