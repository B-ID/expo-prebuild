import { Text, View } from 'react-native'
import React, { type FC } from 'react'
import { type IActionRowProps } from '@components/action-row/action-row.types'

const ActionRow: FC<IActionRowProps> = (props) => {
  // const { title, screen, color, vertical, icon } = props
  return (
    <View>
      <Text>ActionRow</Text>
    </View>
  )
}

export default ActionRow
