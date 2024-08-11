import { View } from 'react-native'
import React, { useState } from 'react'
import { Switch } from '@avi99/aui/src'

export default function SwitchPage() {
    const [value, setValue] = useState(false)
    const [value_, setValue_] = useState(true)
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                height: 90,
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Switch value={value} onChange={(value) => setValue(value)} />
                <Switch value={value_} onChange={(value) => setValue_(value)} color='#EE4266' />
            </View>

        </View>
    )
}