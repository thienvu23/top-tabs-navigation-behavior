import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Button, LogBox, StyleSheet, Text, View } from 'react-native';

LogBox.ignoreAllLogs();

const initTabs = ['Screen_1', 'Screen_2', 'Screen_3', 'Screen_4'];
export default function App() {
  const [tabs, setTabs] = useState(initTabs)

  const Tab = useRef(createMaterialTopTabNavigator()).current;

  const Component = ({it}: {it: string}) => {
    return <View style={{gap: 10, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
      {it}
    </Text>
    <Button title='Remove This Tab' onPress={() => {
        setTabs((preTabs) => {
          return preTabs.filter(name => name != it);
        })
    }}/>
    <Button title=' Reset Tabs' onPress={() => setTabs(initTabs)} />
  </View>
  }

  return (
    <View style={{paddingTop: 60, flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator>
          {tabs.map(it => <Tab.Screen key={it} name={it} component={() => <Component it={it} />} />)}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
