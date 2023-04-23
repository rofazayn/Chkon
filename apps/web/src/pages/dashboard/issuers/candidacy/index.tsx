import {
  Box,
  Button,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { IconWorldCheck, IconWorldPlus } from '@tabler/icons-react'
import { useState } from 'react'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import useUser from '../../../../hooks/useUser'
import { useCreateOneOrganizationMutation } from '../../../../generated/graphql'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/router'

type OrganizationValues = {
  name: string
  description?: string
}

const OrganizationCandidacy = () => {
  const theme = useMantineTheme()
  const { user } = useUser()
  const router = useRouter()
  const [createOneOrganizationMutation, { loading }] =
    useCreateOneOrganizationMutation()
  const [values, setValues] = useState<OrganizationValues>({
    name: '',
    description: '',
  })

  const handleApplyCandidacy = async () => {
    const { name, description } = values
    try {
      const orgCreation = await createOneOrganizationMutation({
        variables: {
          data: {
            name,
            description,
            memberships: {
              create: [{ user: { connect: { id: user.id } }, role: 'admin' }],
            },
          },
        },
      })

      if (orgCreation.data) {
        notifications.show({
          title: 'Congratulations!',
          message:
            'You organization candidacy was submitted successfully, you can use its functionalities now',
          icon: <IconWorldCheck />,
          color: 'green',
          autoClose: 5000,
        })

        router.push('/dashboard/issuers')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DashboardLayout>
      <Stack
        spacing={6}
        sx={{
          maxWidth: 520,
        }}
      >
        <Box>
          <Text size='lg' weight='bold'>
            Organization (issuer) candidacy.
          </Text>
          <Text color='dimmed'>
            You can apply for your organization by filling the form below.
          </Text>
        </Box>

        <Stack spacing={6}>
          <TextInput
            variant='filled'
            label='Organization name'
            placeholder={'Enter your organization name here'}
            value={values.name}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
          />

          <TextInput
            variant='filled'
            label='Organization Description'
            placeholder={'Enter the description of you organization here'}
            value={values.description}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          <Box mt={16}>
            <Button
              onClick={handleApplyCandidacy}
              rightIcon={<IconWorldPlus size={18} />}
            >
              Apply for candidacy
            </Button>
          </Box>
        </Stack>
      </Stack>
    </DashboardLayout>
  )
}

export default OrganizationCandidacy
