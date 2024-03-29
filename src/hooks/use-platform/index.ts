import {Platform} from 'react-native'
import { useState } from 'react'


export const usePlatform = () => {
    const [isIos] = useState(Platform.OS === 'ios')
    const [isAndroid] = useState(Platform.OS === 'android')


    return {isIos, isAndroid}
}