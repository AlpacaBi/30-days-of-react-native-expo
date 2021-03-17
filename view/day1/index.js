import React, {useEffect} from 'react'
import { StyleSheet, Platform, StatusBar, Text, View } from 'react-native';
import useStopWatch from './hooks/useStopWatch'

import WatchFace from './WatchFace'
import WatchControl from './WatchControl'
import WatchRecord from './WatchRecord'


function Day1() {

    const {
        totalTime,
        sectionTime,
        isRunning,
        startWatch ,
        stopWatch,
        resetWatch,
        record,
        addRecord
    } = useStopWatch();

    useEffect(() => {
        // componentDidMount
        (Platform.OS === "ios") && StatusBar.setBarStyle(0)
        return () => {
            // componentWillUnmount
            resetWatch()
        }
    },[])

    return (
        <View style={styles.watchContainer}>
            <WatchFace totalTime={totalTime} sectionTime={sectionTime}></WatchFace>
            <WatchControl 
                isRunning = {isRunning}
                startWatch={startWatch} 
                stopWatch={stopWatch}
                resetWatch={resetWatch} 
                addRecord={addRecord}
            ></WatchControl>
            <WatchRecord record={record}></WatchRecord>
        </View>
    )
}

const styles = StyleSheet.create({
    watchContainer:{
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        marginTop: 60,
    }
});

export default Day1
