import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const NumerologyReport = (props) => {
    const {demoData} = props
    console.log(demoData.map(i=>i.heading));
  return (
    <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {
            demoData?.map((item,index)=>{
                return(
                    <View key={index} style={styles.container1}>
                        <Text style={styles.text1}>{item.heading}</Text>
                        <Text style={styles.text2}>{item.data}</Text>
                    </View>
                )
            })
        }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    container1:{
        width:"90%",
        alignSelf:"center",
        marginVertical:10
    },
    text1:{
        fontSize:20,
        color:"#000"
    },
    text2:{
        fontSize:14,
        color:"#000",
        marginTop:2,
        textAlign:"justify"
    },
})