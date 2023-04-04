import { Box } from '@mantine/core'

const PageLayout = ({ children }: any) => {
  return (
    <Box
      sx={{
        width: '100%',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  )
}

export default PageLayout
