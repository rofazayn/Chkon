import {
  Alert,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconArrowBack, IconInfoCircle } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import DashboardLayout from '../../../../../components/_layouts/dashboard-layout'
import { useOrganizationQuery } from '../../../../../generated/graphql'
import useUI from '../../../../../hooks/useUI'
import useUser from '../../../../../hooks/useUser'

const OrgSettingsHome = ({ children }: { children: ReactNode }) => {
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
              Organization Settings for {orgData?.organization?.name}
            </Text>
            {/* <Badge radius={6}>{orgData?.organization?.id}</Badge> */}
          </Group>

          <Text color='dimmed'>
            Here are the settings for this organization, only authorized users
            have access to this page, if you don&apos;t know what you are doing,
            please leave it immediately!
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
            Go back
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box>
        <Group spacing={8} align='center'>
          <Text weight='bold' size='md'>
            Credentials that you can request
          </Text>
        </Group>
        <Group mt={8}>
          {orgData?.organization?.allowedCredentialTypes &&
          orgData.organization?.allowedCredentialTypes.length > 0 ? (
            orgData.organization.allowedCredentialTypes.map((credType): any => (
              <Box key={credType.id}>{credType.name}</Box>
            ))
          ) : (
            <Alert icon={<IconInfoCircle size={18} />} color='yellow'>
              This issuer is not allowed to issue any type of credentials at the
              moment.
              <Box mt={8}>
                <Button
                  component={Link}
                  href={`/dashboard/organizations/${orgId}/settings/request-types`}
                  size='xs'
                  color='orange'
                  variant='light'
                >
                  Request to add allowed types
                </Button>
              </Box>
            </Alert>
          )}
        </Group>
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
