import React, { type FC } from 'react'
import { Text, Button } from 'react-native'
import NativeSafeAreaView from '../../components/ui/native-safearea-view'
import { type HomeScreenProps } from './home.types'

const HomeScreen: FC<HomeScreenProps> = (props) => {
  // const {navigate} = useNavigation()
  const { navigation: { navigate } } = props

  return (
        <NativeSafeAreaView>
            <Text> This is the home school</Text>
            <Button title={'Go to Settings'} onPress={() => { navigate('settings') }} />
        </NativeSafeAreaView>
  )
}

export default HomeScreen
