import React, { type FC } from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import NativeSafeAreaView from "@components/ui/native-safearea-view";
import { type HomeScreenProps } from './home.types'
import {Ionicons} from '@expo/vector-icons'

const HomeScreen: FC<HomeScreenProps> = (props) => {
  // const {navigate} = useNavigation()
  const { navigation: { navigate } } = props

  return (
        <NativeSafeAreaView style={styles.safeArea}>
            <ScrollView className={'bg-gray-100 flex-1'}>

            {/*Pro upgrade button*/}
            <TouchableOpacity className={'items-end absolute right-4 top-8'}>
                <View className={'items-center'}>

                <Ionicons name={'person-circle'} size={30} color={'#E5962D'}/>
                <Text className={'text-center text-[#E5962D]'}>PRO/UPGRADE</Text>
                </View>
            </TouchableOpacity>

            <View className='flex-1 px-4' >
                <Image
                    source={{uri: 'https://i.imgur.com/e14NE49.png'}}
                    className={'w-full h-64'}
                />
            </View>

            </ScrollView>
        </NativeSafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  }

})
