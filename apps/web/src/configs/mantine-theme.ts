import { MantineThemeOverride } from '@mantine/core'

const mantineTheme: MantineThemeOverride = {
  headings: {
    fontFamily: 'Epilogue, Merriweather Sans, IBM Plex Sans Arabic, serif',
  },
  fontFamily: 'Work Sans, IBM Plex Sans Arabic, sans-serif',
  defaultRadius: 7,
  primaryColor: 'violet',
  components: {
    Title: {
      defaultProps: {
        sx: {
          lineHeight: 1.35,
        },
      },
    },
    Text: {
      defaultProps: {
        sx: {
          lineHeight: 1.65,
        },
      },
    },
    Divider: {
      defaultProps: {
        sx: {
          opacity: 0.4,
        },
      },
    },
    InputWrapper: {
      defaultProps: {
        inputWrapperOrder: ['label', 'error', 'input', 'description'],
      },
    },
    Input: {
      styles: (_theme: any) => ({
        input: { borderWidth: 3, height: 42 },
      }),
    },
    Button: {
      defaultProps: {
        loaderPosition: 'right',
      },
    },
  },
}

export default mantineTheme
