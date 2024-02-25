// eslint keeps changing the RootstackparamList from type RootStackParamList to interface fixing this lint problem will
// will solve the ParamListBase Issue

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export type RootStackParamList = {
  Home: undefined
  Settings: undefined
  Rewards: undefined
  Order: undefined
  Payment: {
    paymentRef: string
    intention: string
  }
}
