import { Box, Stack } from '@mantine/core'
import {
  IconBuildingArch,
  IconHome,
  IconIdBadge,
  IconIdBadge2,
  IconSeeding,
  IconSettings,
} from '@tabler/icons-react'
import NavLink from './nav-link'
import useAuth from '../hooks/useAuth'

const data = [
  {
    link: '/dashboard',
    label: 'Home',
    labelExtended: 'Dashboard home',
    icon: IconHome,
  },
  {
    link: '/dashboard/issuers',
    label: 'issuers',
    labelExtended: 'Browse verified issuers',
    icon: IconBuildingArch,
  },
  {
    link: '/dashboard/credentials',
    label: 'credentials',
    labelExtended: 'My verifiable credentials',
    icon: IconIdBadge2,
  },
  {
    link: '/dashboard/presentations',
    label: 'presentations',
    labelExtended: 'My Presentations',
    icon: IconIdBadge,
  },
]

export function DashboardLinks() {
  const { user } = useAuth()
  return (
    <Box>
      <Stack spacing={4}>
        {user?.status === 'verified' ? (
          data.map((item: any, id) => <NavLink item={item} key={id} />)
        ) : (
          <NavLink
            item={{
              link: '/dashboard/verification',
              label: 'Verification',
              labelExtended: 'User Verification',
              icon: IconSeeding,
            }}
          />
        )}
      </Stack>
    </Box>
  )
}
