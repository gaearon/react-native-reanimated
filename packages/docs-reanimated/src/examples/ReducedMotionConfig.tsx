import { useColorScheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, View, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  ReducedMotionConfig,
  ReduceMotion,
} from 'react-native-reanimated';

export default function App() {
  const { colorScheme } = useColorScheme();
  const [isReduceMotionDisabled, setIsReduceMotionDisabled] = useState(false);
  const sv = useSharedValue<number>(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value}deg` }],
  }));

  useEffect(() => {
    sv.value = 0;
    sv.value = withRepeat(withTiming(360, { duration: 2000 }), -1, true);
  }, [colorScheme, isReduceMotionDisabled]);

  const textColor =
    colorScheme === 'light' ? styles.darkText : styles.lightText;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.text, textColor]}>Disable reduced motion</Text>
        <Switch
          value={isReduceMotionDisabled}
          onValueChange={setIsReduceMotionDisabled}
        />
      </View>
      <ReducedMotionConfig
        mode={isReduceMotionDisabled ? ReduceMotion.Never : ReduceMotion.System}
      />
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    marginRight: 10,
    fontFamily: 'Aeonik',
    fontSize: 16,
  },
  lightText: {
    color: 'var(--swm-off-white)',
  },
  darkText: {
    color: 'var(--swm-navy-light-100)',
  },
});