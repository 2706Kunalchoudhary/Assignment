import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const HouseCusps = (props) => {
    const {demoData} = props
  return (
    <View style={styles.main}>
      <View style={styles.container1}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
                <View style={{flexDirection:"row"}}>
        {
                Object.entries(demoData[0].data[0]).map(([key,value])=>
                {
                    return(
                        <View style={styles.container2}>
                <Text style={styles.text1}>{key}</Text>
                </View>
                    )
                }
            )
            
            }
            </View>
            {
                demoData[0].data.map((item,index)=>{
                    return(
                        <View style={styles.container3}>
                        <Text style={styles.text2}>{item.house}</Text>
                        <Text style={styles.text2}>{item.degree}</Text>
                        <Text style={styles.text2}>{item.sign}</Text>
                        <Text style={styles.text2}>{item.sign_lord}</Text>
                        <Text style={styles.text2}>{item.start_lord}</Text>
                        <Text style={styles.text2}>{item.sub_lord}</Text>
                        </View>
                    )
                })
            }
            </View>
        </ScrollView>
        
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    main:{
        flex:1
    },
    container1:{
        width:"100%",
        marginTop:20,
        borderWidth:1,
        borderColor:"#000",
    },
    container2:{
        width:100,
        justifyContent:"center",
        alignItems:"center"
    },
    container3:{
        flexDirection:"row",
        height:40,
        justifyContent:"space-around",
        alignItems:"center"
        
    },
    text1:{
        fontSize:18,
        color:"#000",
    },
    text2:{
        fontSize:14,
        color:"#000",
        width:100,
        textAlign:"center"
    },
})