import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { OtpInput } from '@avi99/aui/src'

export default function OtpInputPage() {
  const [otp, setOtp] = useState();
  const optComplete = (value) => {
    console.log(value)
  }
  return (
    <View style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white'
    }}>
      <OtpInput length={6} onChange={(value) => setOtp(value)} onComplete={(value) => optComplete(value)} />
    </View>
  )
}