import logoImage from '@/../public/assets/png/logo.png'
import {
  Box,
  Button,
  Divider,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { IconMoon, IconPower, IconSettings, IconSun } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'
import { DashboardLinks } from './dashboard-links'
import NavLink from './nav-link'

const DashboardNavbar = () => {
  const { logout } = useAuth()
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { hovered, ref } = useHover<any>()
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        borderStartEndRadius: 12,
        borderEndEndRadius: 12,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',

        paddingInline: 24,
        paddingBlock: 32,
        position: 'sticky',
        top: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Group spacing={12} mb={28}>
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

          <Divider my={16} variant='dashed' />

          <Box>
            <DashboardLinks />
          </Box>
        </Box>
        <Box>
          <Box>
            <NavLink
              item={{
                link: '/dashboard/settings',
                label: 'Settings',
                labelExtended: 'Account Settings',
                icon: IconSettings,
              }}
            />
          </Box>
          <Box my={16}>
            <Divider variant='dashed' />
          </Box>
          <Box>
            <Text mb={16} size='sm' color='gray.6' sx={{ lineHeight: 1.6 }}>
              Use the buttons below <br /> to toggle your color scheme
            </Text>
            <Button.Group sx={{ width: '100%' }}>
              <Button
                variant='light'
                onClick={() => toggleColorScheme()}
                fullWidth
                rightIcon={<IconSun size={18} />}
                color={colorScheme === 'light' ? 'violet' : 'gray'}
                sx={{
                  paddingInline: 16,
                  minHeight: 40,
                  '& > div': {
                    display: 'flex',
                    justifyContent: 'space-between',
                  },
                }}
              >
                Light
              </Button>
              <Button
                variant='light'
                onClick={() => toggleColorScheme()}
                fullWidth
                rightIcon={<IconMoon size={18} />}
                color={colorScheme === 'dark' ? 'violet' : 'gray'}
                sx={{
                  paddingInline: 16,
                  minHeight: 40,
                  '& > div': {
                    display: 'flex',
                    justifyContent: 'space-between',
                  },
                }}
              >
                Dark
              </Button>
            </Button.Group>
          </Box>
          <Box my={16}>
            <Divider variant='dashed' />
          </Box>
          <Text mb={16} size='sm' sx={{ lineHeight: 1.6 }} color='gray.6'>
            Don&apos;t forget to logout of your
            <br />
            account when you are done!
          </Text>
          <Box>
            <Button
              variant='light'
              ref={ref}
              color={hovered ? 'red' : 'gray'}
              fullWidth
              rightIcon={<IconPower size={20} color={theme.colors.red[5]} />}
              onClick={() => {
                logout()
              }}
              sx={{
                color: theme.colors.red[5],
                paddingInline: 16,
                minHeight: 48,
                '& > div': {
                  display: 'flex',
                  justifyContent: 'space-between',
                },
              }}
            >
              Logout of your account
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardNavbar
