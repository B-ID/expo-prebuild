import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type RootStackParamList } from '../screen-types'

// @ts-expect-error RootStackParamList does not extend type ParamListBase
export type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>
