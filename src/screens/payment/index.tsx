import React, { type FC } from 'react'
import { Button, Text } from 'react-native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type RootStackParamList } from '../screen-types'
import NativeSafeAreaView from '../../components/ui/native-safearea-view'

type Props = NativeStackScreenProps<RootStackParamList, 'Payment'>

const PaymentScreen: FC<Props> = (prop) => {
  const { navigation: { navigate }, route: { params: { intention, paymentRef } } } = prop
  return (
        <NativeSafeAreaView>
            <Text>{intention}</Text>
            <Text>{paymentRef}</Text>
            <Button title={'Go Home'} onPress={() => { navigate('Home') }} />
        </NativeSafeAreaView>
  )
}

export default PaymentScreen
