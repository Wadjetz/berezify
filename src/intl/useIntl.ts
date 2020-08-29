import React from "react"
import { enUS, fr } from "date-fns/locale"

import { IntlContext } from "./IntlContext"
import { Messages } from "./messages"
import { IntlValue } from "./Intl"

export function useDateLocal() {
  const { lang } = React.useContext(IntlContext)
  return lang === "fr" ? fr : enUS
}

export function useMesages(): (key: keyof Messages) => string {
  const { lang, messages } = React.useContext(IntlContext)
  return key => messages[key][lang]
}

export function useIntl(): (value: IntlValue) => string {
  const { lang } = React.useContext(IntlContext)
  return value => value[lang]
}
