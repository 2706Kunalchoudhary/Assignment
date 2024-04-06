import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const AscendantReport = (props) => {
    const { demoData } = props
    return (
        <View style={styles.main}>
            <View style={styles.container1}>
                <Text style={styles.text1}>{demoData[0].heading}</Text>
                <Text style={styles.text01}>{demoData[0].data.ascendant}</Text>
                <Text style={styles.text2}>{demoData[0].data.report}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container1: {
        width: "90%",
        alignSelf: "center",
        marginVertical: 10
    },
    text1: {
        fontSize: 20,
        color: "#000"
    },
    text01: {
        fontSize: 18,
        color: "#000",
        marginTop:10
    },
    text2: {
        fontSize: 14,
        color: "#000",
        marginTop: 2,
        textAlign: "justify"
    },
})