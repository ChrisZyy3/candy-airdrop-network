import { en } from "./locales/en"
import { zh } from "./locales/zh"

export const locales = {
  en,
  zh,
}

export type Locale = keyof typeof locales
export type LocaleContent = typeof en

