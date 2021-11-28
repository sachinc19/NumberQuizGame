import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import Color from './constants/Color'
const NumberContainer= props =>{
return(
<View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
</View>
)

}
const styles =StyleSheet.create({
container:{
borderWidth:2,
borderColor:Color.accent,
padding:10,
borderRadius: 10,
alignItems:'center',
justifyContent:'center'
},
number:{
fontSize:22,
color:Color.accent
}
})
export default NumberContainer