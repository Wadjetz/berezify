import React from "react"
import { Lang } from "./Intl"
import { messages, Messages } from "./messages"

export interface IntlState {
  lang: Lang
  messages: Messages
}

export const initIntlState: IntlState = {
  lang: "fr",
  messages
}

export const IntlContext = React.createContext<IntlState>(initIntlState)
