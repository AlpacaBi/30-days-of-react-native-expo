
import {useState, useEffect, useMemo } from 'react'

const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(
    () => {
      let interval;
      if (isRunning) {
        interval = setInterval(
          () => setCurrentTime(() => (new Date()).getTime()),
          10
        );
      }
      return () => clearInterval(interval);
    },
    [isRunning]
  );

  return {
    isRunning,
    setIsRunning,
    currentTime,
    setCurrentTime
  };
};

const useStopWatch = () => {

  const { isRunning, setIsRunning, currentTime, setCurrentTime } = useTimer();

  const [initialTime, setInitialTime] = useState(0)
  const [timeAccumulation , setTimeAccumulation] = useState(0)
  const [record, setRecord] = useState([/*{title:"",time:""}*/])
  const [recordCounter, setRecordCounter] = useState(0)
  const [recordTime, setRecordTime] = useState(0)

  const format = time => {
    let minute = Math.floor(time / (60 * 1000));
    let second = Math.floor((time - 60000 * minute) / 1000);
    let milSecond = Math.floor((time % 1000) / 10);
    let res = (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond)
    return res
  }

  const totalTime = useMemo(()=>{
    return format(timeAccumulation + currentTime - initialTime)
  }, [currentTime])

  const sectionTime = useMemo(()=>{
    return format(timeAccumulation + currentTime - initialTime - recordTime)
  }, [currentTime])

  const startWatch  = () => {
    setInitialTime((new Date()).getTime());
    setIsRunning(true)
  }

  const stopWatch = () => {
    setIsRunning(false)
    setTimeAccumulation(timeAccumulation + currentTime - initialTime) 
  }

  const resetWatch= () => {
    setIsRunning(false);
    setCurrentTime(0);
    setInitialTime(0);
    setTimeAccumulation(0)
    setRecordCounter(0)
    setRecord([])
    setRecordTime(0)
  };

  const addRecord = () => {
    setRecordCounter(val => val + 1);
    let recordCopy = [...record];
    (recordCounter > 8) &&recordCopy.pop();
    recordCopy.unshift({
      title: "计次"+(recordCounter +1 ),
      time: sectionTime
    });
    setRecord(recordCopy)
    setRecordTime(timeAccumulation + currentTime - initialTime)
  }

  return {
    isRunning,
    totalTime,
    sectionTime,
    startWatch,
    stopWatch,
    resetWatch,
    record,
    addRecord
  };
};

export default useStopWatch