import { Box, Button, Divider, Flex, Stack, Text } from '@mantine/core'
import { IconWorldPlus } from '@tabler/icons-react'
import Link from 'next/link'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'

const IssuersHome = () => {
  return (
    <DashboardLayout>
      <Flex
        sx={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Stack spacing={2}>
          <Text weight='bold' size='lg'>
            Trusted Issuers
          </Text>
          <Text color='dimmed'>
            Here are the verified issuers that you can interact with.
          </Text>
        </Stack>
        <Box>
          <Button
            component={Link}
            href='/dashboard/issuers/candidacy'
            rightIcon={<IconWorldPlus size={18} />}
          >
            Become an issuer
          </Button>
        </Box>
      </Flex>
      <Divider variant='dashed' my={16} />
    </DashboardLayout>
  )
}

export default IssuersHome
