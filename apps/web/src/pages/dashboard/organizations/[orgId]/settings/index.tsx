import {
  Alert,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAlertHexagon,
  IconArrowBack,
  IconBadge3d,
  IconCheck,
  IconIdBadge,
  IconIdBadge2,
  IconInfoCircle,
  IconPlus,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import DashboardLayout from '../../../../../components/_layouts/dashboard-layout'
import { useOrganizationQuery } from '../../../../../generated/graphql'
import useUI from '../../../../../hooks/useUI'
import useAuth from '../../../../../hooks/useAuth'

const OrgSettingsHome = ({ children }: { children: ReactNode }) => {
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
            Organization verification status
          </Text>
          {orgData?.organization?.status === 'verified' ? (
            <Badge
              color='green'
              size='md'
              leftSection={
                <Center>
                  <IconCheck size={14} />
                </Center>
              }
            >
              Verified
            </Badge>
          ) : (
            <Badge
              color='red'
              size='md'
              leftSection={
                <Center>
                  <IconAlertHexagon size={14} />
                </Center>
              }
            >
              Not verified
            </Badge>
          )}
        </Group>
        {orgData?.organization?.status !== 'verified' && (
          <Group spacing={8} mt={8}>
            <Text size='sm'>
              It seems that your organization is not yet vefrified
            </Text>
            <Button
              size='xs'
              color='violet'
              variant='light'
              rightIcon={<IconCheck size={18} />}
              component={Link}
              href={`/dashboard/organizations/${
                orgId as string
              }/settings/verification`}
            >
              Verify now
            </Button>
          </Group>
        )}
      </Box>
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
            <>
              {orgData.organization.allowedCredentialTypes.map(
                (credType): any => (
                  <Group
                    align='center'
                    spacing={8}
                    sx={{
                      borderRadius: 12,
                      paddingBlock: 8,
                      paddingInline: 12,
                      backgroundColor: bgColor,
                    }}
                    key={credType.id}
                  >
                    <IconIdBadge2 size={20} />
                    <Text size='sm' weight='500'>
                      {credType.name}
                    </Text>
                  </Group>
                )
              )}
              <Button
                variant='light'
                component={Link}
                href={`/dashboard/organizations/${orgId}/settings/request-types/`}
                radius={12}
                leftIcon={<IconPlus size={16} />}
              >
                Request more types
              </Button>
            </>
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
                  Request more allowed types
                </Button>
              </Box>
            </Alert>
          )}
        </Group>
      </Box>
    </DashboardLayout>
  )
}

export default OrgSettingsHome
