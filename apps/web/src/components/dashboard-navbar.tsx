import logoImage from '@/../public/assets/png/logo.png'
import { Box, Group, Stack, Text, useMantineTheme } from '@mantine/core'
import Image from 'next/image'
import { DashboardLinks } from './dashboard-links'
import Link from 'next/link'

const DashboardNavbar = () => {
  const theme = useMantineTheme()
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderStartEndRadius: 8,
        borderEndEndRadius: 8,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
        paddingInline: 24,
        paddingBlock: 32,
      }}
    >
      <Box>
        <Group spacing={12} mb={36}>
          <Box component={Link} href='/'>
            <Image
              src={logoImage}
              alt='chkon logo'
              width='48'
              height='48'
              placeholder='blur'
            />
          </Box>
          <Stack spacing={4}>
            <Text weight='bold' sx={{ lineHeight: 1 }}>
              Chkon.
            </Text>
            <Text size='sm' sx={{ lineHeight: 1 }}>
              Digital Identity
            </Text>
          </Stack>
        </Group>

        <Box>
          <DashboardLinks />
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardNavbar
