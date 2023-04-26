import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconArrowBack } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import DashboardLayout from '../../../../../components/_layouts/dashboard-layout'
import { useOrganizationQuery } from '../../../../../generated/graphql'
import useUI from '../../../../../hooks/useUI'
import useUser from '../../../../../hooks/useUser'

const OrgControlPanelHome = ({ children }: { children: ReactNode }) => {
  const { user } = useUser()
  const router = useRouter()
  const { bgColor } = useUI()
  const theme = useMantineTheme()
  const { orgId } = router.query
  const {
    data: orgData,
    loading: orgLoading,
    error: orgError,
  } = useOrganizationQuery({
    variables: { where: { id: orgId as string } },
  })

  return (
    <DashboardLayout>
      <Flex
        sx={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Box>
          <Group spacing={8} align='center'>
            <Text weight='bold' size='lg'>
              Pending credential requests
            </Text>
          </Group>

          <Text color='dimmed'>
            This page shows you pending credential requests from users in
            real-time, you can issue credentials based on the requests shown
            here
          </Text>
        </Box>

        <Box>
          <Button
            component={Link}
            href={`/dashboard/organizations/${orgId}/`}
            rightIcon={<IconArrowBack size={18} />}
            variant='light'
            color='gray'
          >
            Go Back
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box
        sx={{
          width: '100%',
        }}
      >
        {children}
      </Box>
    </DashboardLayout>
  )
}

export default OrgControlPanelHome