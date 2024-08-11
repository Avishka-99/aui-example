import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ProgressBar, Button } from '@avi99/aui/src';
export default function ProgressBarPage() {
    const [progress, setProgress] = useState(0);
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white'
        }}>
            <ProgressBar value={progress} color={'tomato'} width={'70%'} />
            <View style={{ height: 10 }}></View>
            <Button mode='flat' onPress={() => setProgress(progress + 10)} title={'Increase progress'} color={'white'} />
        </View>
    )
}