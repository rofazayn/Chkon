import rtlPlugin from 'stylis-plugin-rtl'
import { createEmotionCache } from '@mantine/core'

export const emotionCache = createEmotionCache({ key: 'chkon' })

export const rtlCache = createEmotionCache({
  key: 'chkon-rtl',
  stylisPlugins: [rtlPlugin],
})
