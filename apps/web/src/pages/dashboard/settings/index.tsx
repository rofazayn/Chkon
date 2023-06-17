import { Box, Button, Divider, Flex, Grid, Stack, Text } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import { useUpdateOneUserMutation } from '../../../generated/graphql'
import useAuth from '../../../hooks/useAuth'
import useUI from '../../../hooks/useUI'

const SettingsHome = () => {
  const { bgColor } = useUI()
  const [updateOneUser, { loading }] = useUpdateOneUserMutation()
  const { user, logout } = useAuth()

  async function handleDeletion() {
    try {
      const res = await updateOneUser({
        variables: {
          where: { id: user?.id },
          data: {
            deleted: { set: true },
          },
        },
      })

      if (res.data?.updateOneUser?.deleted) {
        logout()
      }
    } catch (error) {}
  }

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
        <Box sx={{ width: '100%' }}>
          <Box>
            <Text weight='bold' size='lg'>
              Your account&apos;s settings
            </Text>
            <Text color='dimmed' mt={-3}>
              These are your account settings, you can edit a few of them,
              others requires you to contact us first.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box>
        <Grid>
          <Grid.Col span={4}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                paddingTop: 12,
                paddingBottom: 16,
                borderRadius: 12,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack pt={4} mb={4} spacing={6}>
                <Text weight='500' size='md'>
                  Account Removal
                </Text>
                <Text size='sm' color='gray.6'>
                  If for any reason you would like you account to be deleted,
                  you can do it from here, but please know that once you delete
                  your account, you cannot get it back.
                </Text>
                <Box mt={12}>
                  <Button
                    size='xs'
                    color='red'
                    rightIcon={<IconTrash size={14} />}
                    loading={loading}
                    onClick={handleDeletion}
                  >
                    Delete my account
                  </Button>
                </Box>
              </Stack>
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </DashboardLayout>
  )
}

export default SettingsHome
