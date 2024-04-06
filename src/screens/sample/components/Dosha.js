import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export const Dosha = (props) => {
    const [activeTab, setActiveTab] = useState("kalsarpaDosha")
    const {demoData} = props
    console.log(Object.entries(demoData.kalsarpaDosha).map(([key,value])=>value.heading),"dosha");

    const Kalsarpa = ()=>{
        return(
            <View style={styles.container3}>
                {
                   Object.entries(demoData.kalsarpaDosha).map(([key,value],index)=>{
                    return(
                        <View>
                            <Text style={styles.text1}>{value.heading}</Text>
                            {
                                Object.entries(value.data).map(([key,value])=>{
                                    const detail = value.toString()
                                    return(
                                <Text style={styles.text2}>{key}-{detail}</Text>
                                    )
                                }
                            )
                            }
                        </View>
                    )
                   }) 
                }
            </View>
        )
    }
  return (
    <View style={styles.main}>
      <View style={styles.container1}>
        {
            Object.entries(demoData).map(([key])=>{
                return(
                    <Pressable
                     style={[styles.container2,activeTab===key&&styles.activeContainer]}
                     onPress={()=>setActiveTab(key)}
                     >
                        <Text style={[styles.text01,activeTab===key&&styles.activeText]}>{key}</Text>
                    </Pressable>
                )
            }
        )
        }
      </View>
      {activeTab==="kalsarpaDosha"&&<Kalsarpa/>}
    </View>
  )
}


const styles = StyleSheet.create({
    main:{
        flex:1
    },
    container1:{
        marginTop:20,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    container2:{
        width:"30%",
        height:30,
        borderRadius:6,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#000"
    },
    activeContainer:{
        borderColor:"#FF5C5C"
    },
    container3:{
        width:"90%",
        alignSelf:"center",
        marginTop:20
    },
    text01:{
        fontSize:14,
        color:"#000"
    },
    activeText:{
        color:"#FF5C5C"
    },
    text1:{
        marginTop:20,
        fontSize:20,
        color:"#000"
    },
    text2:{
        marginTop:20,
        fontSize:14,
        color:"#000",
        textAlign:"justify"
    },
})