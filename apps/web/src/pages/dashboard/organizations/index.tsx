import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Loader,
  Text,
} from '@mantine/core'
import {
  IconAlertCircle,
  IconInfoCircle,
  IconWorldPlus,
} from '@tabler/icons-react'
import Link from 'next/link'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import OrganizationCard from '../../../components/organization-card'
import { useOrganizationsQuery } from '../../../generated/graphql'
import useAuth from '../../../hooks/useAuth'

const OrganizationsHome = () => {
  const { user } = useAuth()
  const orgsQuery = useOrganizationsQuery({
    variables: {
      take: 20,
      where: {
        // status: { equals: 'verified' },
        memberships: { some: { user: { is: { id: { equals: user?.id } } } } },
      },
    },
    pollInterval: 10000,
    fetchPolicy: 'network-only',
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
          <Text weight='bold' size='lg'>
            Organizations you are part of
          </Text>
          <Text color='dimmed' mt={-3}>
            Here are the organizations that you have access to.
          </Text>
        </Box>

        <Box>
          <Button
            component={Link}
            href='/dashboard/organizations/candidacy'
            leftIcon={<IconWorldPlus size={18} />}
            variant='light'
            color='gray'
          >
            Register an organization
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box
        sx={{
          width: '100%',
        }}
      >
        {orgsQuery.error ? (
          <Alert icon={<IconAlertCircle size={18} />} color='red'>
            Something went wrong, refresh the page to see if it gets fixed!
          </Alert>
        ) : orgsQuery.loading ? (
          <Loader size='sm' />
        ) : orgsQuery.data && orgsQuery.data.organizations?.length > 0 ? (
          <Grid>
            {orgsQuery.data.organizations.map((org): any => (
              <Grid.Col span={4} key={org.id}>
                <OrganizationCard org={org} />
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Box sx={{ maxWidth: 400 }}>
            <Alert icon={<IconInfoCircle size={18} />} color='yellow'>
              It appears that you aren&apos;t part of any organization at the
              moment, you need an invitation from a supervisor to become a
              member.
            </Alert>
          </Box>
        )}
      </Box>
    </DashboardLayout>
  )
}

export default OrganizationsHome
