import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@avi99/aui/src'
export default function Main({ navigation }) {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{ width: '100%', height: 450, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Button mode='flat' title={'Button'} onPress={() => navigation.navigate("Button")} containerStyle={{ width: 160 }} ripple={true} />
                <Button mode='flat' title={'Bottomsheet'} onPress={() => navigation.navigate("Bottomsheet")} containerStyle={{ width: 160 }} ripple={true} background={'#FF6868'} />
                <Button mode='flat' title={'Loaders'} onPress={() => navigation.navigate("Loaders")} containerStyle={{ width: 160 }} ripple={true} background={'#88D66C'} />
                <Button mode='flat' title={'OTP Input'} onPress={() => navigation.navigate("OtpInput")} containerStyle={{ width: 160 }} ripple={true} background={'#750E21'} />
                <Button mode='flat' title={'Progressbar'} onPress={() => navigation.navigate("ProgressBar")} containerStyle={{ width: 160 }} ripple={true} background={'#211C6A'} />
                <Button mode='flat' title={'Seperator'} onPress={() => navigation.navigate("Seperator")} containerStyle={{ width: 160 }} ripple={true} background={'#FFB000'} />
                <Button mode='flat' title={'Switch'} onPress={() => navigation.navigate("Switch")} containerStyle={{ width: 160 }} ripple={true} background={'#BC7AF9'} />
                <Button mode='flat' title={'Textinput'} onPress={() => navigation.navigate("TextInput")} containerStyle={{ width: 160 }} ripple={true} background={'#65B741'} />
            </View>
        </View>
    )
}