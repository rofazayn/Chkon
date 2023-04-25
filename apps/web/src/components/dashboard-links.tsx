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
    labelExtended: 'Dashboard Home',
    icon: IconHome,
  },
  {
    link: '/dashboard/issuers',
    label: 'issuers',
    labelExtended: 'Trusted Issuers List',
    icon: IconBuildingArch,
  },
  {
    link: '/dashboard/presentations',
    label: 'presentations',
    labelExtended: 'Verifiable Presentations',
    icon: IconIdBadge,
  },
  {
    link: '/dashboard/credentials',
    label: 'credentials',
    labelExtended: 'Verifiable Credentials',
    icon: IconIdBadge2,
  },
]

export function DashboardLinks({
  withSettings = false,
}: {
  withSettings?: boolean
}) {
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
        {withSettings && (
          <>
            <NavLink
              item={{
                link: '/dashboard/settings',
                label: 'Settings',
                labelExtended: 'Account Settings',
                icon: IconSettings,
              }}
            />
          </>
        )}
      </Stack>
    </Box>
  )
}
