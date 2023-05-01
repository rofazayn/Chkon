import {
  Alert,
  Badge,
  Box,
  Button,
  Code,
  Divider,
  Flex,
  Group,
  Loader,
  Stack,
  Table,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  IconArrowBack,
  IconInfoCircle,
  IconSettings2,
  IconTrash,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import DashboardLayout from '../../../../../components/_layouts/dashboard-layout'
import {
  SortOrder,
  useCredentialRequestsQuery,
  useOrganizationQuery,
} from '../../../../../generated/graphql'
import useUI from '../../../../../hooks/useUI'
import useUser from '../../../../../hooks/useUser'
import humanizeDate from '../../../../../utils/humanize-date'

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
  const credentialRequestsQuery = useCredentialRequestsQuery({
    variables: {
      where: {
        status: { equals: 'pending' },
        issuerId: { equals: (orgId as string) || undefined },
      },
      take: 20,
      orderBy: { createdAt: SortOrder.Desc },
    },
    pollInterval: 5000,
    fetchPolicy: 'network-only',
  })
  const rows = credentialRequestsQuery.loading
    ? null
    : credentialRequestsQuery.data?.credentialRequests.map((credReq) => (
        <tr key={credReq.id} style={{ cursor: 'pointer' }}>
          <td>
            <Stack spacing={0}>
              <Box sx={{ fontWeight: 500, fontSize: theme.fontSizes.md }}>
                {' '}
                {credReq.credentialType.name}
              </Box>
              <Box>
                <Code sx={{ weight: 'bold' }} color='indigo'>
                  {credReq.credentialType.typename}
                </Code>
              </Box>
            </Stack>
          </td>

          <td>
            <Box sx={{ fontWeight: 500 }}>{credReq.user.name}</Box>
          </td>

          <td>
            <Box>{credReq.issuer.name}</Box>
          </td>
          <td>
            <Badge color='yellow'>{credReq.status.toUpperCase()}</Badge>
          </td>
          <td>{humanizeDate(credReq.createdAt)}</td>
          <td>
            <Flex
              sx={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                zIndex: 9,
              }}
            >
              <Group spacing={12}>
                <Button
                  leftIcon={<IconTrash size={14} />}
                  size='sm'
                  variant='subtle'
                  color='red'
                >
                  Revoke
                </Button>
                <Button
                  rightIcon={<IconSettings2 size={14} />}
                  size='sm'
                  variant='light'
                  onClick={() =>
                    router.push(
                      `/dashboard/organizations/${orgId}/requests/${credReq.id}/handle/`
                    )
                  }
                >
                  Handle
                </Button>
              </Group>
            </Flex>
          </td>
        </tr>
      )) || []

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
        {rows && rows.length === 0 ? (
          <Alert icon={<IconInfoCircle size={18} />} color='yellow'>
            It appears that there aren&apos;t any available pending requests for
            your organization at the moment
          </Alert>
        ) : rows && rows.length > 0 ? (
          <Table striped withBorder={false} verticalSpacing={'sm'}>
            <thead>
              <tr>
                <th>Credential Type</th>
                <th>Requested by</th>
                <th>Target Issuer</th>
                <th>Status</th>
                <th>Requested</th>
                <th style={{ textAlign: 'end' }}>Options</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        ) : (
          <Loader size='sm' />
        )}
      </Box>
    </DashboardLayout>
  )
}

export default OrgControlPanelHome
