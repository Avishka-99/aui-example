import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Loader } from '@avi99/aui/src'
export default function LoaderPage() {
    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} >
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderTopWidth: 2, borderLeftWidth: 2 }}>
                        <Loader name='6Dots' />
                        <Text style={{ fontWeight: "600" }}>6Dots</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderTopWidth: 2 }}>
                        <Loader name='3Dots' color={'green'} />
                        <Text style={{ fontWeight: "600" }}>3Dots</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderTopWidth: 2, borderRightWidth: 2 }}>
                        <Loader name='curveSpin' color={'violet'} />
                        <Text style={{ fontWeight: "600" }}>curveSpin</Text>
                    </View>
                </View>
                <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
                        <Loader name='triangle' color={'royalblue'} />
                        <Text style={{ fontWeight: "600" }}>triangle</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>

                        <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='dotGliding' color={'blue'} /></View>
                        <Text style={{ fontWeight: "600" }}>dotGliding</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>

                        <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='fadingBox' color={'red'} /></View>
                        <Text style={{ fontWeight: "600" }}>fadingBox</Text>
                    </View>
                </View>
                <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
                        <Loader name='4DotSquare' color={'black'} />
                        <Text style={{ fontWeight: "600" }}>4DotSquare</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>

                        <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='3DotScale' color={'purple'} /></View>
                        <Text style={{ fontWeight: "600" }}>3DotScale</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>

                        <View style={{ height: 47, display: 'flex', justifyContent: 'center' }}><Loader name='3DotBlinking' color={'#1C1678'} /></View>
                        <Text style={{ fontWeight: "600" }}>3DotBlinking</Text>
                    </View>
                </View>
                <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
                        <Loader name='3DotSwap' color={'#A34343'} />
                        <Text style={{ fontWeight: "600" }}>3DotSwap</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                        <Loader name='3DotSway' color={'#D20062'} />
                        <Text style={{ fontWeight: "600" }}>3DotSway</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
                        <Loader name='3Rings' color={'#ff0000'} />
                        <Text style={{ fontWeight: "600" }}>3Rings</Text>
                    </View>
                </View>
                <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
                        <Loader name='tinyCurve' color={'#8E7AB5'} />
                        <Text style={{ fontWeight: "600" }}>tinyCurve</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                        <Loader name='2Curves' color={'#FC6736'} />
                        <Text style={{ fontWeight: "600" }}>2Curves</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
                        <Loader name='3Quarters' color={'#280274'} />
                        <Text style={{ fontWeight: "600" }}>3Quarters</Text>
                    </View>
                </View>
                <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
                        <Loader name='ringExpand' color={'#8E7AB5'} />
                        <Text style={{ fontWeight: "600" }}>ringExpand</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                        <Loader name='endlessSquares' color={'#3468C0'} />
                        <Text style={{ fontWeight: "600" }}>endlessSquares</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
                        <Loader name='spinningSquare' color={'#B80000'} />
                        <Text style={{ fontWeight: "600" }}>spinningSquare</Text>
                    </View>
                </View>
                <View style={{ height: 80, width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ height: '100%', width: '33.33%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderLeftWidth: 2 }}>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}>
                        <Loader name='5DotWave' color={'#8E7AB5'} />
                        <Text style={{ fontWeight: "600" }}>5DotWave</Text>
                    </View>
                    <View style={{ height: '100%', width: '33.33%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 2 }}>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}