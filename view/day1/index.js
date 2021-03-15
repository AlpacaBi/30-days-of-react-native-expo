import React, {useState, useEffect} from 'react'
import { StyleSheet, Platform, StatusBar, Text, FlatList, View, TouchableHighlight } from 'react-native';
import Util from '../utils';



function WatchFace({sectionTime, totalTime}) {
    return(
        <View style={styles.watchFaceContainer}>
            <Text style={styles.sectionTime}>{sectionTime}</Text>
            <Text style={styles.totalTime}>{totalTime}</Text>
        </View>
    )
}

function WatchControl({stopWatch, clearRecord, startWatch, addRecord}) {

    const [watchOn, setWatchOn] = useState(false)
    const [startBtnText, setStartBtnText] = useState("启动")
    const [startBtnColor, setStartBtnColor] = useState("#60B644")
    const [stopBtnText, setStopBtnText] = useState("计次")
    const [underlayColor, setUnderlayColor] = useState("#fff")

    const _startWatch = () => {
        console.log("WatchControl, _startWatch")
        if (!watchOn) {
            startWatch()
            setStartBtnText("停止")
            setStartBtnColor("#ff0044")
            setStopBtnText("计次")
            setUnderlayColor("#eee")
            setWatchOn(true)
    
        }else{
            stopWatch()
            setStartBtnText("启动")
            setStartBtnColor("#60B644")
            setStopBtnText("复位")
            setUnderlayColor("#eee")
            setWatchOn(false)
        } 
    }

    const _addRecord = () => {
        if (watchOn) {
          addRecord()
        }else{
            clearRecord()
            setStopBtnText("计次")
        }
    }

    return(
        <View style={styles.watchControlContainer}>
          <View style={{flex:1,alignItems:"flex-start"}}>
            <TouchableHighlight style={styles.btnStop} underlayColor={underlayColor} onPress={()=>_addRecord()}>
              <Text style={styles.btnStopText}>{stopBtnText}</Text>
            </TouchableHighlight>
            </View>
            <View style={{flex:1,alignItems:"flex-end"}}>
              <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> _startWatch()}>
                <Text style={[styles.btnStartText,{color:startBtnColor}]}>{startBtnText}</Text>
              </TouchableHighlight>
            </View>
        </View>
    )
}

function WatchRecord({record}) {
    return (
        <FlatList 
            style={styles.recordList}
            data={record}
            keyExtractor={(item,index) => index}
            renderItem={({item}) => (
                <View style={styles.recordItem}>
                <Text style={styles.recordItemTitle}>{item.title}</Text>
                <View style={{alignItems: "center"}}>
                <Text style={styles.recordItemTime}>{item.time}</Text>
              </View>
            </View>)}
        />
    );
}

function Day1() {

    const [stopWatch, setStopWatch] = useState(false)
    const [resetWatch, setResetWatch] = useState(true)
    const [initialTime, setInitialTime] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [recordTime, setRecordTime] = useState(0)
    const [timeAccumulation, setTimeAccumulation] = useState(false)
    const [totalTime, setTotalTime] = useState("00:00:00")
    const [sectionTime, setSectionTime] = useState("00:00:00")
    const [recordCounter, setRecordCounter] = useState(0)
    const [record, setRecord] = useState([
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""},
        {title:"",time:""}
    ])

    const _startWatch = () => {
        console.log("Day1, _startWatch")
        if(resetWatch){
            setStopWatch(false)
            setResetWatch(false)
            setTimeAccumulation(0)
            setInitialTime((new Date()).getTime())
        }else{
            setStopWatch(false)
            setInitialTime((new Date()).getTime())
        }
        let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
        let interval = setInterval(() => {
            setCurrentTime((new Date()).getTime())
            console.log(timeAccumulation, currentTime, initialTime)

            countingTime = timeAccumulation + currentTime - initialTime
            minute = Math.floor(countingTime / (60 * 1000));
            second = Math.floor((countingTime - 6000 * minute) / 1000);
            milSecond = Math.floor((countingTime % 1000) / 10);
            seccountingTime = countingTime - recordTime;
            secminute = Math.floor(seccountingTime / (60 * 1000));
            secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000);
            secmilSecond = Math.floor((seccountingTime % 1000) / 10);

            setTotalTime(minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond)
            setSectionTime(secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond)

            if (stopWatch) {
                setTimeAccumulation(countingTime) 
                clearInterval(interval)
            };
        },10);
    }

    const _stopWatch = () => setStopWatch(true)

    const _addRecord = () => {
        let recordCounter = recordCounter
        let record = [...record]

        recordCounter++;
        if (recordCounter<8) {
          record.pop();
        }
        record.unshift({title: "计次" + recordCounter, time: sectionTime});

        setRecordTime(timeAccumulation + currentTime - initialTime)
        setRecordCounter(recordCounter)
        setRecord(record)
        //use refs to call functions within other sub component
        //can force to update the states
        // this.refs.record._updateData();
    }

    const _clearRecord = () => {
        setStopWatch(false)
        setResetWatch(true)
        setInitialTime(0)
        setCurrentTime(0)
        setRecordTime(0)
        setTimeAccumulation(0)
        setTotalTime("00:00:00")
        setSectionTime("00:00:00")
        setRecordCounter(0)
        setRecord([
            {title:"",time:""},
            {title:"",time:""},
            {title:"",time:""},
            {title:"",time:""},
            {title:"",time:""},
            {title:"",time:""},
            {title:"",time:""}
        ])
    }

    useEffect(()=>{
        _stopWatch()
        _clearRecord()
    }, [])

    useEffect(() => {
        const app = () => {(Platform.OS === "ios") && StatusBar.setBarStyle(0);};
        app();
    }, []);

    return (
      <View style={styles.watchContainer}>
        <WatchFace totalTime={totalTime} sectionTime={sectionTime}></WatchFace>
        <WatchControl addRecord={()=>_addRecord()} clearRecord={()=>_clearRecord()} startWatch={()=>_startWatch()} stopWatch={()=>_stopWatch()}></WatchControl>
        <WatchRecord record={record}></WatchRecord>
      </View>
    )
}

const styles = StyleSheet.create({
    watchContainer:{
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        marginTop: 60,
    },
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
    },
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
    },
    recordList:{
        width: Util.size.width,
        height: Util.size.height - 300,
        paddingLeft: 15,
    },
    recordItem:{
        height: 40,
        borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
        paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
        flexDirection:"row",
        alignItems:"center"
    },
    recordItemTitle:{
        backgroundColor:"transparent",
        flex:1,
        textAlign:"left",
        paddingLeft:20,
        color:"#777"
    },
    recordItemTime:{
        backgroundColor:"transparent",
        flex:1,
        textAlign:"right",
        paddingRight:20,
        color:"#222"
    },
});


export default Day1