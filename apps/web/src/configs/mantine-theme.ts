import { MantineThemeOverride } from '@mantine/core'

const mantineTheme: MantineThemeOverride = {
  headings: {
    fontFamily: 'Epilogue, Merriweather Sans, IBM Plex Sans Arabic, serif',
  },
  fontFamily: 'Work Sans, IBM Plex Sans Arabic, sans-serif',
  defaultRadius: 4,
  primaryColor: 'violet',
  // lineHeight: 1,
  components: {
    Title: {
      defaultProps: {
        sx: {
          lineHeight: 1.4,
        },
      },
    },
    Text: {
      defaultProps: {
        sx: {
          lineHeight: 1.8,
        },
      },
    },
    Divider: {
      defaultProps: {
        sx: {
          opacity: 0.6,
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
