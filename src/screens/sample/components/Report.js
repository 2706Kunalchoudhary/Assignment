import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FavourablePoints } from './FavourablePoints'
import { NumerologyReport } from './NumerologyReport'
import { AscendantReport } from './AscendantReport'

export const Report = (props) => {
  const [activeTab,setActiveTab] = useState("favourablePoints")
  const {demoData} = props
  return (
    <View style={styles.main}>
    <View style={styles.container1}>
      {
        Object.keys(demoData).map((item,index)=>{
          return(
            <Pressable key={index} style={[styles.tabContainer,activeTab===item&&styles.activeTabContainer]} onPress={()=>setActiveTab(item)}>
              <Text style={[styles.text1,activeTab===item&&styles.activeText]}>{item}</Text>
            </Pressable>
          )
        })
      }
      </View>
      {activeTab==="favourablePoints"&&<FavourablePoints demoData={demoData.favourablePoints}/>}
      {activeTab==="numerologyReport"&&<NumerologyReport demoData={demoData.numerologyReport}/>}
      {activeTab==="ascendantReport"&&<AscendantReport demoData={demoData.ascendantReport}/>}
    </View>

  )
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  container1:{
    width:"100%",
    marginTop:"10%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  tabContainer:{
    width:"32%",
    height:30,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:6,
    borderWidth:1,
    borderColor:"#000"
  },
  activeTabContainer:{
    borderColor:"#FF5C5C",
  },
  text1:{
    fontSize:12,
    color:"#000"
  },
  activeText:{
    color:"#FF5C5C"
  },
})