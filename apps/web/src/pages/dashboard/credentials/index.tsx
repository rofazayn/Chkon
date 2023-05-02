import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Loader,
  Text,
  TextInput,
} from '@mantine/core'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import { IconSearch, IconSeeding, IconWorldPlus } from '@tabler/icons-react'
import Link from 'next/link'
import useUser from '../../../hooks/useUser'
import { useCredentialsQuery } from '../../../generated/graphql'

const VerifiableCredentialsHome = () => {
  const { user } = useUser()
  const consentedCredentialsQuery = useCredentialsQuery({
    variables: {
      where: {
        userId: { equals: (user?.id as string) || undefined },
        holderConsent: { equals: true },
        issuerConsent: { equals: true },
      },
    },
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  })

  const unconsentedCredentialsQuery = useCredentialsQuery({
    variables: {
      where: {
        userId: { equals: (user?.id as string) || undefined },
        holderConsent: { equals: false },
        issuerConsent: { equals: true },
      },
    },
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  })

  console.log(consentedCredentialsQuery.data)
  console.log(unconsentedCredentialsQuery.data)
  return (
    <DashboardLayout>
      {user ? (
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
            <Box sx={{ width: '100%' }}>
              <Text weight='bold' size='lg'>
                {user?.name}&apos; credentials
              </Text>
              <Text color='dimmed' mt={-3}>
                Here are credentials that have been issued to you
              </Text>
              <Box mt={8} sx={{ maxWidth: 520 }}>
                <TextInput
                  sx={{ width: '100%' }}
                  icon={<IconSearch size={16} style={{ opacity: 0.75 }} />}
                  variant='filled'
                  placeholder='Search credentials'
                />
              </Box>
            </Box>

            <Box>
              <Button
                component={Link}
                href='/dashboard/issuers/'
                leftIcon={<IconSeeding size={18} />}
                variant='light'
                color='gray'
              >
                Request another credential
              </Button>
            </Box>
          </Flex>
          <Divider variant='dashed' my={16} />
          <Box sx={{ width: '100%' }}>
            <Box>
              <Text weight='bold' size='md'>
                Credentials you consent to
              </Text>
              <Text color='dimmed' mt={-3}>
                These are the credentials that you already accepted to be yours
              </Text>
            </Box>
          </Box>
          <Divider variant='dashed' my={16} />
          <Box sx={{ width: '100%' }}>
            <Box>
              <Text weight='bold' size='md'>
                Credentials awaiting consent
              </Text>
              <Text color='dimmed' mt={-3}>
                Here are the credentials awaiting your consent
              </Text>
            </Box>
          </Box>
        </>
      ) : (
        <Loader size='sm' />
        // <Alert color='red'>
        //   There was something wrong while trying to fetch your credentials
        // </Alert>
      )}
    </DashboardLayout>
  )
}

export default VerifiableCredentialsHome
