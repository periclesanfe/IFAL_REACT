import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [running, setRunning] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds + 1 === 60) {
            setMinutes((prevMinutes) => {
              if (prevMinutes + 1 === 60) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              } else {
                return prevMinutes + 1;
              }
            });
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const saveHistory = () => {
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    setHistory((prevHistory) => [...prevHistory, time]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Stop" onPress={stopTimer} />
        <Button title="Reset" onPress={resetTimer} />
        <Button title="Save" onPress={saveHistory} />
      </View>
      <View style={styles.historyContainer}>
        {history.map((time, index) => (
          <Text key={index}>{time}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 50,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  historyContainer: {
    marginTop: 20,
  },
});
