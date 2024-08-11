import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from '@avi99/aui/src'
export default function TextInputPage() {
    const [text, setText] = useState('')
    const [password, setPasword] = useState('')
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{ width: 250 }}>
                <TextInput placeholder={'Enter text'} onChange={(text) => setText(text)} />
                <TextInput placeholder={'Enter password'} onChange={(text) => setPasword(text)} secured />
            </View>
        </View>
    )
}