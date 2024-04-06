import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export const FavourablePoints = (props) => {
    const {demoData} = props
    console.log(demoData[0].data,"llll");
  return (
    <View style={styles.main}>
        <Text style={styles.text1}>{demoData[0]?.heading}</Text>
        <ScrollView>
      <View style={styles.container1}>
        
            {
        Object.entries(demoData[0].data).map(([key,value],index)=>
        <View key={index} style={styles.container2}>
            <View style={styles.container3}>
                <Text style={styles.text2}>{key}</Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.container3}>
            <Text style={styles.text2}>{value}</Text>
            </View>
            </View>
        )
}

        
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    text1:{
        fontSize:16,
        color:"#000",
        width:"90%",
        alignSelf:"center",
        marginTop:20
    },
    container1:{
        width:"90%",
        // height:50,
        alignSelf:"center",
        marginTop:10,
        borderWidth:1,
        borderColor:"#000",
        marginBottom:10
    },
    container2:{
        width:"100%",
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    container3:{
        width:"49.5%",
        height:50,
        justifyContent:"center",
        borderBottomWidth:1,
        borderColor:"#000"
        // alignItems:"center"
    },
    divider:{
        height:50,
        width:"1%",
        backgroundColor:"#000"
    },
    text2:{
        marginHorizontal:5
    }
})