import { View, Text } from 'react-native'
import React from 'react'
import { BottomSheet } from '@avi99/aui/src';
import { useRef } from 'react';
import { Portal } from '@avi99/aui/src';
import { Button } from '@avi99/aui/src';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Sheet = () => {
    const sheetRef = useRef(null);
    const sheetRef_2 = useRef(null);
    const openSheet = () => {
        sheetRef.current?.open()
    }
    const closeSheet = () => {
        sheetRef.current?.close()
    }
    const openSheet_2 = () => {
        sheetRef_2.current?.open()
    }
    const closeSheet_2 = () => {
        sheetRef_2.current?.close()
    }
    return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <View style={{ height: 80, display: 'flex', justifyContent: 'space-between' }}>
                <Button onPress={openSheet} title={'Open sheet - With portal'} mode='flat' />
                <Button onPress={openSheet_2} title={'Open sheet - Without portal'} mode='flat' />
            </View>

            <Portal name="bottomsheet">
                <BottomSheet height={'90%'} ref={sheetRef} backdropColor={'black'} close={closeSheet}>
                    <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                        <Button onPress={closeSheet} title={'close sheet'} mode='flat' />
                    </View>
                </BottomSheet>
            </Portal>
            <BottomSheet height={'90%'} ref={sheetRef_2} backdropColor={'black'} close={closeSheet}>
                <View style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                    <Button onPress={closeSheet_2} title={'close sheet'} mode='flat' />
                </View>
            </BottomSheet>
        </View>
    )
}
export default function BottomSheetPage() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarIconStyle: { display: 'none' },
                tabBarLabelStyle: { textAlign: 'center', fontSize: 32 },
            }}
        >
            <Tab.Screen
                name='Bottom Sheet'
                component={Sheet}

                options={{
                    headerShown: false,
                    tabBarInactiveTintColor: 'black',
                    tabBarActiveTintColor: 'dodgerblue',
                    tabBarShowLabel: true,
                }}
            />

        </Tab.Navigator>
    )
}