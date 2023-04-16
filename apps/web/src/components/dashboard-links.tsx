import { Box, Stack } from '@mantine/core'
import { IconHome, IconSettings } from '@tabler/icons-react'
import NavLink from './nav-link'

const data = [
  {
    link: '/dashboard',
    label: 'Home',
    labelExtended: 'Dashboard Home',
    icon: IconHome,
  },
  // {
  //   link: '/dashboard/issuers',
  //   label: 'issuers',
  //   labelExtended: 'Trusted Issuers List',
  //   icon: IconBuildingArch,
  // },
  // {
  //   link: '/dashboard/dids',
  //   label: 'dids',
  //   labelExtended: 'Decentralized Identifiers',
  //   icon: IconAnchor,
  // },

  // {
  //   link: '/dashboard/presentations',
  //   label: 'presentations',
  //   labelExtended: 'Verifiable Presentations',
  //   icon: IconIdBadge,
  // },
  // {
  //   link: '/dashboard/credentials',
  //   label: 'credentials',
  //   labelExtended: 'Verifiable Credentials',
  //   icon: IconIdBadge2,
  // },
]

export function DashboardLinks({
  withSettings = false,
}: {
  withSettings?: boolean
}) {
  return (
    <Box>
      <Stack spacing={4}>
        {data.map((item: any, id) => (
          <NavLink item={item} key={id} />
        ))}
        {withSettings && (
          <NavLink
            item={{
              link: '/dashboard/settings',
              label: 'Settings',
              labelExtended: 'Account Settings',
              icon: IconSettings,
            }}
          />
        )}
      </Stack>
    </Box>
  )
}
