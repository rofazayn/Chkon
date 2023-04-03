import { MantineThemeOverride } from '@mantine/core'

const mantineTheme: MantineThemeOverride = {
  headings: {
    fontFamily: 'Epilogue, Merriweather Sans, IBM Plex Sans Arabic, serif',
  },
  fontFamily: 'Work Sans, IBM Plex Sans Arabic, sans-serif',
  defaultRadius: 7,
  primaryColor: 'violet',
  lineHeight: 1.6,
  components: {
    InputWrapper: {
      defaultProps: {
        inputWrapperOrder: ['label', 'error', 'input', 'description'],
      },
    },
    Input: {
      styles: (_theme: any) => ({
        input: { borderWidth: 3, height: 44 },
      }),
    },
  },
}

export default mantineTheme
