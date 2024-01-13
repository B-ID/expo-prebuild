import React, { type FC } from 'react'
import { View, Text } from 'react-native'

interface IButtonProps {
  text?: string
}

const Button: FC<IButtonProps> = (props) => {
  const { text } = props
  return (
        <View>
            {/* Your component code here */}
            <Text>{text}</Text>
        </View>
  )
}

export default Button
