import React, { type FC } from 'react'
import { View, Text, Button } from 'react-native'
import { type SettingScreenProps } from './settings.types'
import NativeSafeAreaView from '@components/ui/native-safearea-view'

const SettingsScreen: FC<SettingScreenProps> = (props) => {
  const { navigation: { navigate } } = props
  return (
      <NativeSafeAreaView>
        <View>
            <Text>This is the settings screen</Text>
            <Button title={'Go to payment'} onPress={() => { navigate('Payment', { intention: 'airtime', paymentRef: '2024XXXZDEWW' }) }} />
        </View>
      </NativeSafeAreaView>

  )
}

export default SettingsScreen
