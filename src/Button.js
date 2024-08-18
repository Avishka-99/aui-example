import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Button } from '@avi99/aui/src';
import { IconButton } from '@avi99/aui/src';
export default function ButtonPage() {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{ width: '100%', height: 300, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button mode='flat' title={'Flat Button - Ripple'} onPress={() => console.log("pressed")} ripple={true} containerStyle={{ width: 160 }} />
                <Button mode='flat' title={'Flat Button'} onPress={() => console.log("pressed")} containerStyle={{ width: 160 }} background={'#88D66C'} />
                <Button mode='outlined' title={'Outlined Button'} onPress={() => console.log("pressed")} containerStyle={{ width: 160 }} outlineColor={'black'} color={'black'} background={'white'} />
                <Button mode='outlined' title={'Outlined Button - ripple'} onPress={() => console.log("pressed")} containerStyle={{ width: 160 }} outlineColor={'#BC5A94'} color={'black'} background={'white'} ripple={true} />
                <Button mode='text' title={'Text Button'} onPress={() => console.log("pressed")} containerStyle={{ width: 160 }} color={'tomato'} />
                <Button mode='text' title={'Text Button - ripple'} onPress={() => console.log("pressed")} containerStyle={{ width: 160 }} color={'#006769'} ripple={true} />
                <IconButton icon='home' title={'Icon Button'} onPress={() => console.log("pressed")} background={'#E8751A'} containerStyle={{ width: 160 }} />
            </View>
        </View>
    )
}