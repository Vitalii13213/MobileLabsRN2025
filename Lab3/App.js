import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler, LongPressGestureHandler, PanGestureHandler, FlingGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import 'react-native-gesture-handler';

// TaskItem Component
const TaskItem = ({ title, completed, onToggle }) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={styles.taskItem}
    >
      <View
        style={[
          styles.checkbox,
          completed ? styles.checkboxCompleted : styles.checkboxIncomplete,
        ]}
      />
      <Text
        style={[
          styles.taskText,
          completed ? styles.taskTextCompleted : styles.taskTextIncomplete,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// TasksScreen Component
const TasksScreen = () => {
  const initialTasks = [
    { id: '1', title: 'Make 10 clicks', completed: false },
    { id: '2', title: 'Make 5 double clicks', completed: false },
    { id: '3', title: 'Hold object for 3 seconds', completed: false },
    { id: '4', title: 'Drag the object', completed: false },
    { id: '5', title: 'Swipe right', completed: false },
    { id: '6', title: 'Swipe left', completed: false },
    { id: '7', title: 'Resize the object', completed: false },
    { id: '8', title: 'Earn 100 points', completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.tasksContainer}>
      <Text style={styles.tasksTitle}>Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleTaskCompletion(item.id)}
          />
        )}
      />
    </View>
  );
};

// MainScreen Component
const MainScreen = () => {
  const navigation = useNavigation();
  const [score, setScore] = useState(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const lastScale = useSharedValue(1);

  // Handle Tap (Single and Double)
  const handleSingleTap = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      setScore((prev) => prev + 1);
    }
  };

  const handleDoubleTap = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      setScore((prev) => prev + 2);
    }
  };

  // Handle Long Press
  const handleLongPress = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      setScore((prev) => prev + 10);
    }
  };

  // Handle Pan (Drag)
  const handlePan = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      translateX.value = nativeEvent.translationX;
      translateY.value = nativeEvent.translationY;
    } else if (nativeEvent.state === State.END) {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    }
  };

  // Handle Fling (Swipe)
  const handleFlingRight = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      const randomPoints = Math.floor(Math.random() * 10) + 1;
      setScore((prev) => prev + randomPoints);
    }
  };

  const handleFlingLeft = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      const randomPoints = Math.floor(Math.random() * 10) + 1;
      setScore((prev) => prev + randomPoints);
    }
  };

  // Handle Pinch (Scale)
  const handlePinch = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      scale.value = lastScale.value * nativeEvent.scale;
    } else if (nativeEvent.state === State.END) {
      lastScale.value = scale.value;
      if (scale.value > 1.5 || scale.value < 0.5) {
        setScore((prev) => prev + 5);
      }
    }
  };

  // Animated Style for the Interactive Object
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <FlingGestureHandler
        direction={128} // RIGHT
        onHandlerStateChange={handleFlingRight}
      >
        <FlingGestureHandler
          direction={64} // LEFT
          onHandlerStateChange={handleFlingLeft}
        >
          <PinchGestureHandler onHandlerStateChange={handlePinch}>
            <PanGestureHandler onHandlerStateChange={handlePan}>
              <LongPressGestureHandler
                onHandlerStateChange={handleLongPress}
                minDurationMs={1000}
              >
                <TapGestureHandler
                  onHandlerStateChange={handleSingleTap}
                  numberOfTaps={1}
                >
                  <TapGestureHandler
                    onHandlerStateChange={handleDoubleTap}
                    numberOfTaps={2}
                  >
                    <Animated.View
                      style={[styles.interactiveObject, animatedStyle]}
                    >
                      <Text style={styles.objectText}>Click Me!</Text>
                    </Animated.View>
                  </TapGestureHandler>
                </TapGestureHandler>
              </LongPressGestureHandler>
            </PanGestureHandler>
          </PinchGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Tasks"
          onPress={() => navigation.navigate('Tasks')}
          color="#1E3A8A"
        />
      </View>
    </View>
  );
};

// App Component
const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ title: 'Clicker Game', headerStyle: { backgroundColor: '#1E3A8A' }, headerTintColor: '#fff' }}
          />
          <Stack.Screen
            name="Tasks"
            component={TasksScreen}
            options={{ title: 'Tasks', headerStyle: { backgroundColor: '#1E3A8A' }, headerTintColor: '#fff' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scoreText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 16,
  },
  interactiveObject: {
    width: 120,
    height: 120,
    backgroundColor: '#EF4444',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  objectText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 32,
  },
  tasksContainer: {
    flex: 1,
    backgroundColor: '#DBEAFE',
    padding: 16,
  },
  tasksTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1E3A8A',
    marginRight: 12,
  },
  checkboxCompleted: {
    backgroundColor: '#1E3A8A',
  },
  checkboxIncomplete: {
    backgroundColor: '#fff',
  },
  taskText: {
    fontSize: 18,
  },
  taskTextCompleted: {
    color: '#6B7280',
    textDecorationLine: 'line-through',
  },
  taskTextIncomplete: {
    color: '#1E3A8A',
  },
});