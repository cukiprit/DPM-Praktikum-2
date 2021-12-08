import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import Constant from 'expo-constants';
import { Countdown } from '../../components/Countdown';
import { colors } from '../../utils/colors';
import { fontSizes, paddingSizes, marginSizes } from '../../utils/sizes';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress} />
      </View>
      <View style={styles.contentFocus}>
        <Text style={styles.txtTitle}>Saat ini sedang:</Text>
        <Text style={styles.focus}>{focusSubject}</Text>
      </View>

      <ProgressBar
        style={{
          marginHorizontal: marginSizes.md,
          height: 10,
          borderRadius: 10,
          marginTop: marginSizes.md,
        }}
        color={colors.purpleBlue}
        progress={progress}
      />

      {isStarted ? (
        <Button
          color={colors.purpleBlue}
          dark={true}
          style={styles.btn}
          mode="contained"
          size={50}
          onPress={() => setIsStarted(false)}>
          Pause
        </Button>
      ) : (
        <Button
          color={colors.purpleBlue}
          dark={true}
          style={styles.btn}
          mode="contained"
          size={50}
          onPress={() => setIsStarted(true)}>
          Mulai
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: Constant.statusBarHeight,
  },
  contentFocus: {
    alignItems: 'center',
    marginTop: Constant.statusBarHeight,
  },
  txtTitle: {
    fontSize: fontSizes.xl,
    color: colors.black,
    fontWeight: 'bold',
  },
  focus: {
    fontSize: fontSizes.lg,
    color: colors.black,
  },
  countdown: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: marginSizes.lg,
    marginHorizontal: marginSizes.md,
    padding: paddingSizes.sm,
  },
});
