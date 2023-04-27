import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconArrowBack, IconInfoCircle } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import DashboardLayout from '../../../../../components/_layouts/dashboard-layout'
import CredentialTypeCard from '../../../../../components/credential-type-card'
import { useCredentialTypesQuery } from '../../../../../generated/graphql'
import useUI from '../../../../../hooks/useUI'
import useUser from '../../../../../hooks/useUser'

const OrgSettingsHome = ({ children }: { children: ReactNode }) => {
  const { user } = useUser()
  const router = useRouter()
  const { bgColor } = useUI()
  const theme = useMantineTheme()
  const { orgId } = router.query

  const credentialTypesQuery = useCredentialTypesQuery()
  const {
    data: credTypesData,
    loading: credTypesLoading,
    error: credTypesError,
  } = credentialTypesQuery

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
              Organization&apos;s available credential types
            </Text>
            {/* <Badge radius={6}>{orgData?.organization?.id}</Badge> */}
          </Group>

          <Text color='dimmed'>
            Here are the available credential types for your organization, you
            can request access to them by clicking on the Request access button.
          </Text>
        </Box>

        <Box>
          <Button
            component={Link}
            href={`/dashboard/organizations/${orgId}/settings`}
            rightIcon={<IconArrowBack size={18} />}
            variant='light'
            color='gray'
          >
            Go back
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box sx={{ width: '100%' }}>
        {credTypesData?.credentialTypes &&
        credTypesData?.credentialTypes.length > 0 ? (
          <Grid>
            {credTypesData?.credentialTypes.map((credType): any => (
              <Grid.Col span={3} key={credType.id}>
                <CredentialTypeCard credType={credType} orgId={orgId} />
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Alert icon={<IconInfoCircle size={18} />} color='yellow'>
            There aren&apos;t any available credential types for you to request
            at the moment.
          </Alert>
        )}
      </Box>
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

export default OrgSettingsHome
