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
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import {
  SortOrder,
  useOrganizationQuery,
  usePresentationsQuery,
} from '../../../../generated/graphql'
import useAuth from '../../../../hooks/useAuth'
import useUI from '../../../../hooks/useUI'
import humanizeDate from '../../../../utils/humanize-date'

const OrgControlPresentations = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const router = useRouter()
  const { bgColor } = useUI()
  const theme = useMantineTheme()
  const { orgId } = router.query
  const {
    data: orgData,
    loading: orgLoading,
    error: orgError,
  } = useOrganizationQuery({
    variables: { where: { id: (orgId as string) || undefined } },
    // skip: !orgId,
  })
  console.log(orgData)
  const presentationsQuery = usePresentationsQuery({
    variables: {
      where: {
        organizationId: { equals: (orgId as string) || undefined },
        holderConsent: { equals: true },
      },
      take: 20,
      orderBy: { createdAt: SortOrder.Desc },
    },
    pollInterval: 5000,
    fetchPolicy: 'network-only',
  })
  const rows = presentationsQuery.loading
    ? null
    : presentationsQuery.data?.presentations.map((presentation) => (
        <tr key={presentation.id} style={{ cursor: 'pointer' }}>
          <td>
            <Stack spacing={0}>
              <Box sx={{ fontWeight: 500, fontSize: theme.fontSizes.md }}>
                {' '}
                {presentation.credential.type.name}
              </Box>
              <Box>
                <Code sx={{ weight: 'bold' }} color='indigo'>
                  {presentation.credential.type.typename}
                </Code>
              </Box>
            </Stack>
          </td>

          <td>
            <Box sx={{ fontWeight: 500 }}>{presentation.user.name}</Box>
          </td>

          <td>
            <Box>{presentation.credential.issuer.name}</Box>
          </td>
          <td>
            <Badge color='green'>Consented</Badge>
          </td>
          <td>{humanizeDate(presentation.createdAt)}</td>
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
                  rightIcon={<IconSettings2 size={14} />}
                  size='xs'
                  variant='light'
                  color='indigo'
                  component={Link}
                  href={`/presentation/${presentation.id}`}
                  target='_blank'
                >
                  Access presentation
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
              Presentations to this organization
            </Text>
          </Group>

          <Text color='dimmed'>
            This page shows you presentations from users in real-time, you can
            access the payload of the presentation here
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
            It appears that there aren&apos;t any available presentation for
            your organization at the moment
          </Alert>
        ) : rows && rows.length > 0 ? (
          <Table striped withBorder={false} verticalSpacing={'sm'}>
            <thead>
              <tr>
                <th>Presentation Type</th>
                <th>Presented by</th>
                <th>Issued by</th>
                <th>Holder Consent</th>
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

export default OrgControlPresentations
