import { View, Text } from 'react-native'
import React from 'react';
import { Seperator, Button } from '@avi99/aui/src';

export default function SeperatorPage() {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{ width: '100%', height: 300, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button mode='flat' title={'Flat Button - ripple'} onPress={() => console.log("pressed")} width={160} />
                <Seperator />
                <Button mode='flat' title={'Flat Button'} onPress={() => console.log("pressed")} width={160} ripple={true} background={'#88D66C'} />
                <Seperator />
                <Button mode='outlined' title={'Outlined Button'} onPress={() => console.log("pressed")} width={160} outlineColor={'black'} color={'black'} background={'white'} />
                <Seperator />
                <Button mode='outlined' title={'Outlined Button - ripple'} onPress={() => console.log("pressed")} width={160} outlineColor={'#BC5A94'} color={'black'} background={'white'} ripple={true} />
                <Seperator />
                <Button mode='text' title={'Text Button'} onPress={() => console.log("pressed")} width={160} color={'tomato'} />
                <Seperator />
                <Button mode='text' title={'Text Button - ripple'} onPress={() => console.log("pressed")} width={160} color={'#006769'} ripple={true} />
            </View>
        </View>
    )
}