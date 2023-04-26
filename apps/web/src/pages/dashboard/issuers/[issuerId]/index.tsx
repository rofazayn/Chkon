import {
  Alert,
  Box,
  Divider,
  Flex,
  Group,
  Loader,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAlertCircle,
  IconChecks,
  IconInfoCircle,
} from '@tabler/icons-react'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import { useOrganizationQuery } from '../../../../generated/graphql'

const IssuerHome = () => {
  const theme = useMantineTheme()
  const router = useRouter()
  const { issuerId } = router.query
  const issuerQuery = useOrganizationQuery({
    variables: { where: { id: (issuerId as string) || undefined } },
  })
  const {
    data: issuerData,
    loading: issuerLoading,
    error: issuerError,
  } = issuerQuery
  return (
    <DashboardLayout>
      {issuerLoading ? (
        <Loader size='sm' />
      ) : issuerData ? (
        <>
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
                  {issuerData?.organization?.name}
                </Text>
                <IconChecks color={theme.colors.green[5]} size={24} />
              </Group>
              {issuerData?.organization?.description && (
                <Text color='dimmed'>
                  {issuerData.organization.description}
                </Text>
              )}
            </Box>

            {/* <Box>
          <Button
            component={Link}
            href={`/dashboard/organizations/${issuerId}/settings`}
            rightIcon={<IconSettings size={18} />}
            variant='light'
            color='gray'
          >
            Organization Settings
          </Button>
        </Box> */}
          </Flex>
          <Divider variant='dashed' my={16} />
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
                <Text weight='bold' size='md'>
                  Credentials that you can request
                </Text>
              </Group>
              <Group mt={8}>
                {issuerData.organization?.allowedCredentialTypes &&
                issuerData.organization?.allowedCredentialTypes.length > 0 ? (
                  issuerData.organization.allowedCredentialTypes.map(
                    (credType): any => (
                      <Box key={credType.id}>{credType.name}</Box>
                    )
                  )
                ) : (
                  <Alert icon={<IconInfoCircle size={18} />} color='yellow'>
                    This issuer is not allowed to issue any type of credentials
                    at the moment.
                  </Alert>
                )}
              </Group>
            </Box>
          </Flex>
        </>
      ) : (
        <Alert icon={<IconAlertCircle size={18} />} color='red'>
          Something went wrong, refresh the page to see if it gets fixed!
        </Alert>
      )}
    </DashboardLayout>
  )
}

export default IssuerHome
