import React, { type FC } from 'react'
import { Button, View, Text } from 'react-native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type RootStackParamList } from '../screen-types'
import NativeSafeAreaView from '../../components/ui/native-safearea-view'

// @ts-expect-error RootStackParamList does not extend type ParamListBase
type Props = NativeStackScreenProps<RootStackParamList, 'payment'>

const PaymentScreen: FC<Props> = (prop) => {
  const { navigation: { navigate }, route: { params: { intention, paymentRef } } } = prop
  return (
        <NativeSafeAreaView>
            <Text>{intention}</Text>
            <Text>{paymentRef}</Text>
            <Button title={'Go Home'} onPress={() => { navigate('settings') }} />
            <View></View>
        </NativeSafeAreaView>
  )
}

export default PaymentScreen
