import { Box, Stack } from '@mantine/core'
import {
  IconBuildingArch,
  IconHome,
  IconIdBadge,
  IconIdBadge2,
  IconSeeding,
  IconSettings,
} from '@tabler/icons-react'
import useUser from '../hooks/useUser'
import NavLink from './nav-link'

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
  // {
  //   link: '/dashboard/presentations',
  //   label: 'presentations',
  //   labelExtended: 'Verifiable Presentations',
  //   icon: IconIdBadge,
  // },
  {
    link: '/dashboard/credentials',
    label: 'credentials',
    labelExtended: 'My verifiable credentials',
    icon: IconIdBadge2,
  },
]

export function DashboardLinks() {
  const { user } = useUser()
  return (
    <Box>
      <Stack spacing={4}>
        {user?.verified ? (
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
