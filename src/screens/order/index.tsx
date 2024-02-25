import React, { type FC } from 'react'
import { View } from 'react-native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type RootStackParamList } from '../screen-types'
import Button from '@components/ui/button'

type Props = NativeStackScreenProps<RootStackParamList, 'Order'>

const OrderScreen: FC<Props> = (props) => {
  // const {} = props
  return (
        <View>
            <Button text={'hello'} />
            {/* Your component code here */}
        </View>
  )
}

export default OrderScreen
