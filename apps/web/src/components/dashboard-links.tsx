import { Box, Stack } from '@mantine/core'
import {
  IconAnchor,
  IconBuildingArch,
  IconHome,
  IconIdBadge,
  IconIdBadge2,
  IconSettings,
} from '@tabler/icons-react'
import NavLink from './nav-link'

const data = [
  {
    link: '/app',
    label: 'Home',
    labelExtended: 'Dashboard Home',
    icon: IconHome,
  },
  {
    link: '/app/dids',
    label: 'dids',
    labelExtended: 'Decentralized Identifiers',
    icon: IconAnchor,
  },
  {
    link: '/app/presentations',
    label: 'presentations',
    labelExtended: 'Verifiable Presentations',
    icon: IconIdBadge,
  },
  {
    link: '/app/credentials',
    label: 'credentials',
    labelExtended: 'Verifiable Credentials',
    icon: IconIdBadge2,
  },

  {
    link: '/app/issuers',
    label: 'issuers',
    labelExtended: 'List of Issuers',
    icon: IconBuildingArch,
  },
]

export function DashboardLinks({
  withSettings = false,
}: {
  withSettings?: boolean
}) {
  return (
    <Box>
      <Stack spacing={3}>
        {data.map((item: any, id) => (
          <NavLink item={item} key={id} />
        ))}
        {withSettings && (
          <NavLink
            item={{
              link: '/app/settings',
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
