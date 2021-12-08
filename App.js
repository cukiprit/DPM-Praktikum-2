import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/Focus/Focus';
import { Timer } from './src/features/Timer/Timer';
import { fontSizes, paddingSizes, marginSizes } from './src/utils/sizes';
import { colors } from './src/utils/colors';

export default function App() {
  const [focSubject, setFocSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focSubject ? (
        <Timer focusSubject={focSubject} />
      ) : (
        <Focus addSubject={setFocSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS !== 'ios' ?  paddingSizes.md : paddingSizes.xl,
    backgroundColor: colors.cyan,
  },
});
