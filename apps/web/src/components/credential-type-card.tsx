import {
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import {
  IconAlertCircle,
  IconCheck,
  IconLockCheck,
  IconPlus,
  IconWorld,
} from '@tabler/icons-react'
import { useRouter } from 'next/router'
import {
  useOrganizationQuery,
  useUpdateOneOrganizationMutation,
} from '../generated/graphql'
import useUI from '../hooks/useUI'

const CredentialTypeCard = ({ credType, orgId }: any) => {
  const theme = useMantineTheme()
  const { colors } = theme
  const { bgColor } = useUI()
  const router = useRouter()
  const organizationQuery = useOrganizationQuery({
    variables: { where: { id: (orgId as string) || undefined } },
  })

  const [updateOneOrganizationMutation, { loading }] =
    useUpdateOneOrganizationMutation()
  const handleRequestCredentialType = async () => {
    try {
      const res = await updateOneOrganizationMutation({
        variables: {
          data: {
            allowedCredentialTypes: { connect: [{ id: credType.id }] },
          },
          where: {
            id: orgId as string | undefined,
          },
        },
      })

      if (res.data?.updateOneOrganization?.allowedCredentialTypesIds) {
        notifications.show({
          title: 'Success!',
          message:
            'You have successfully requested access to obtain this credential type',
          icon: <IconLockCheck />,
          color: 'green',
          autoClose: 5000,
        })
      }
      organizationQuery.refetch()
    } catch (err) {
      notifications.show({
        title: 'Request failed!',
        message:
          'Something went wrong while trying to request access to this credential type!',
        icon: <IconAlertCircle />,
        color: 'red',
        autoClose: 5000,
      })
    }
  }

  return (
    <Flex
      sx={{
        width: '100%',
        backgroundColor: bgColor,
        padding: 16,
        borderRadius: 12,
        minHeight: 104,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Stack
        spacing={4}
        sx={{
          maxHeight: 100,
          overflow: 'hidden',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Text weight='bold' size='md'>
              {credType.name}
            </Text>
          </Box>
          <Box>
            <IconWorld size={18} color={colors.gray[6]} />
          </Box>
        </Flex>
      </Stack>
      <Box mt={12}>
        <Group spacing={4}>
          {!credType.allowedOrganizationsIds.includes(orgId) ? (
            <Button
              variant='light'
              color='indigo'
              size='xs'
              rightIcon={<IconPlus size={16} />}
              onClick={handleRequestCredentialType}
              loading={loading || organizationQuery.loading}
              disabled={credType.allowedOrganizationsIds.includes(orgId)}
            >
              {credType.allowedOrganizationsIds.includes(orgId)
                ? 'Already obtained'
                : 'Request access to type'}
            </Button>
          ) : (
            <>
              <IconCheck size={16} color={theme.colors.green[5]} />
              <Text color='green.5' weight='500' size='sm'>
                Already obtained
              </Text>
            </>
          )}
        </Group>
      </Box>
    </Flex>
  )
}

export default CredentialTypeCard
