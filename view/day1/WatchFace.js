import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Util from '../utils';

function WatchFace({sectionTime, totalTime}) {
    return(
        <View style={styles.watchFaceContainer}>
            <Text style={styles.sectionTime}>{sectionTime}</Text>
            <Text style={styles.totalTime}>{totalTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    watchFaceContainer:{
        width: Util.size.width,
        paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
        backgroundColor: "#fff",
        borderBottomWidth: 1, borderBottomColor:"#ddd",
        height: 170,
    },
    sectionTime:{
        fontSize: 20,
        fontWeight:"100",
        paddingRight: 30,
        color: "#555",
        position:"absolute",
        left:Util.size.width-140,
        top:30
    },
    totalTime:{
        fontSize: Util.size.width === 375? 70:60,
        fontWeight: "100",
        color: "#222",
        paddingLeft:20
    }
});

export default WatchFace