import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Util from '../utils';

function WatchControl({isRunning, stopWatch, startWatch, resetWatch, addRecord}) {
    return(
        
        isRunning ? 

        (<View style={styles.watchControlContainer}>
            <View style={{flex:1,alignItems:"flex-start"}}>
                <TouchableHighlight style={styles.btnStop} underlayColor='#fff' onPress={addRecord}>
                    <Text style={styles.btnStopText}>计次</Text>
                </TouchableHighlight>
                </View>
                <View style={{flex:1,alignItems:"flex-end"}}>
                <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> stopWatch()}>
                    <Text style={[styles.btnStartText,{color:'#ff0044'}]}>停止</Text>
                </TouchableHighlight>
            </View>
        </View>)

        :

        (<View style={styles.watchControlContainer}>
        <View style={{flex:1,alignItems:"flex-start"}}>
            <TouchableHighlight style={styles.btnStop} underlayColor='#eee' onPress={resetWatch}>
                <Text style={styles.btnStopText}>复位</Text>
            </TouchableHighlight>
            </View>
            <View style={{flex:1,alignItems:"flex-end"}}>
            <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> startWatch()}>
                <Text style={[styles.btnStartText,{color:'#60B644'}]}>启动</Text>
            </TouchableHighlight>
            </View>
        </View>)
            
    )
}

const styles = StyleSheet.create({
    watchControlContainer:{
        width: Util.size.width,
        height: 100,
        flexDirection:"row",
        backgroundColor: '#f3f3f3',
        paddingTop: 30, paddingLeft: 60, paddingRight:60, paddingBottom:0,
    },
    btnStart:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    btnStop:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    btnStartText:{
        fontSize:14,
        backgroundColor:"transparent"
    },
    btnStopText:{
        fontSize:14,
        backgroundColor:"transparent",
        color:"#555"
    }
});

export default WatchControl