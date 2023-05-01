import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  IconChecklist,
  IconIdBadge2,
  IconLockCheck,
  IconMoodX,
  IconSettings,
  IconUserX,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import {
  useAggregateCredentialRequestQuery,
  useOrganizationQuery,
} from '../../../../generated/graphql'
import useUI from '../../../../hooks/useUI'
import useUser from '../../../../hooks/useUser'

const OrgRequestsPage = () => {
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

  const credentialRequestsQuery = useAggregateCredentialRequestQuery({
    skip: true,
  })

  const [pendingReqs, setPendingReqs] = useState<number>(0)
  async function fetchPendingCount() {
    try {
      const res = await credentialRequestsQuery.refetch({
        where: {
          status: { equals: 'pending' },
          issuerId: { equals: (orgId as string) || undefined },
        },
      })
      setPendingReqs(res.data?.aggregateCredentialRequest?._count?.id || 0)
    } catch {
      setPendingReqs(0)
    }
  }

  const [fulfilledReqs, setFulfilledReqs] = useState<number>(0)
  async function fetchFulfilledCount() {
    try {
      const res = await credentialRequestsQuery.refetch({
        where: {
          status: { equals: 'fulfilled' },
          issuerId: { equals: (orgId as string) || undefined },
        },
      })
      setFulfilledReqs(res.data?.aggregateCredentialRequest?._count?.id || 0)
    } catch {
      setFulfilledReqs(0)
    }
  }

  const [revokedReqs, setRevokedReqs] = useState<number>(0)
  async function fetchRevokedCount() {
    try {
      const res = await credentialRequestsQuery.refetch({
        where: {
          status: { equals: 'revoked' },
          issuerId: { equals: (orgId as string) || undefined },
        },
      })
      setRevokedReqs(res.data?.aggregateCredentialRequest?._count?.id || 0)
    } catch {
      setRevokedReqs(0)
    }
  }

  useEffect(() => {
    fetchPendingCount()
    fetchFulfilledCount()
    fetchRevokedCount()
    let fetchRequestsInterval = setInterval(() => {
      fetchPendingCount()
      fetchFulfilledCount()
      fetchRevokedCount()
    }, 5000)

    return () => clearInterval(fetchRequestsInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              Control panel of {orgData?.organization?.name}
            </Text>
            <Badge radius={6}>{orgData?.organization?.id}</Badge>
          </Group>
          {orgData?.organization?.description && (
            <Text color='dimmed'>{orgData.organization.description}</Text>
          )}
        </Box>

        <Box>
          <Button
            color='gray'
            component={Link}
            href={`/dashboard/organizations/${orgId}/settings`}
            rightIcon={<IconSettings size={18} />}
            variant='light'
          >
            Organization Settings
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Grid>
          <Grid.Col span={2}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                height: 200,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack align='center' pt={4} mb={4} spacing={3}>
                <IconIdBadge2 size={28} stroke={1.6} />
                <Text weight='500' size='sm'>
                  Credential Requests
                </Text>
                <Badge variant='light' color='yellow' mt={2}>
                  {pendingReqs} pending
                </Badge>
              </Stack>
              <Button
                color='violet'
                size='xs'
                variant='light'
                component={Link}
                href={`/dashboard/organizations/${orgId}/requests/pending/`}
              >
                Browse requests
              </Button>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                height: 200,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack align='center' pt={4} mb={4} spacing={3}>
                <IconLockCheck size={28} stroke={1.6} />
                <Text weight='500' size='sm'>
                  Fulfilled Requests
                </Text>
                <Badge variant='light' color='green' mt={2}>
                  {fulfilledReqs} fulfilled
                </Badge>
              </Stack>
              <Button color='violet' size='xs' variant='light'>
                Browse requests
              </Button>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                height: 200,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack align='center' pt={4} mb={4} spacing={3}>
                <IconMoodX size={28} stroke={1.6} />
                <Text weight='500' size='sm'>
                  Revoked requests
                </Text>
                <Badge variant='light' color='red' mt={2}>
                  {revokedReqs} revoked
                </Badge>
              </Stack>
              <Button color='violet' size='xs' variant='light'>
                Browse requests
              </Button>
            </Flex>
          </Grid.Col>
        </Grid>
        <Divider variant='dashed' my={16} />
        <Grid>
          <Grid.Col span={2}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                height: 200,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack align='center' pt={4} mb={4} spacing={3}>
                <IconChecklist size={28} stroke={1.6} />
                <Text weight='500' size='sm'>
                  Issued Credentials
                </Text>
                <Badge variant='light' color='cyan' mt={2}>
                  0 issued
                </Badge>
              </Stack>
              <Button color='violet' size='xs' variant='light'>
                Browse credentials
              </Button>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                height: 200,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack align='center' pt={4} mb={4} spacing={3}>
                <IconUserX size={28} stroke={1.6} />
                <Text weight='500' size='sm'>
                  Banned users
                </Text>
                <Badge variant='light' color='red' mt={2}>
                  0 banned
                </Badge>
              </Stack>
              <Button color='violet' size='xs' variant='light'>
                Browse banned users
              </Button>
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </DashboardLayout>
  )
}

export default OrgRequestsPage
