import { Box, Button, Divider, Flex, Stack, Text } from '@mantine/core'
import { IconArrowBack, IconUserCheck } from '@tabler/icons-react'
import Link from 'next/link'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'

const SettingsHome = () => {
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
              Logged in user&apos;s settings
            </Text>
            <Text color='dimmed' mt={-3}>
              These are your account settings, you can edit a few of them,
              others requires you to contact us first.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
    </DashboardLayout>
  )
}

export default SettingsHome
