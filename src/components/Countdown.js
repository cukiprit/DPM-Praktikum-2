import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constant from 'expo-constants';
import { colors } from '../utils/colors';
import { fontSizes, paddingSizes, marginSizes } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 1, isPaused, onProgress }) => {
  const interval = useRef(null);
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // Do some stuff
        return time;
      }

      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMillis(minute));
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const second = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.timerTxt}>
      {formatTime(minute)} : {formatTime(second)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timerTxt: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.white,
    padding: paddingSizes.lg,
    backgroundColor: colors.purpleBlue,
    borderRadius: 10,
  },
});
