import {
  Alert,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Loader,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAlertCircle,
  IconIdBadge2,
  IconInfoCircle,
  IconWorldPlus,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import OrganizationCard from '../../../../components/organization-card'
import {
  useOrganizationQuery,
  useOrganizationsQuery,
} from '../../../../generated/graphql'
import useUser from '../../../../hooks/useUser'
import useUI from '../../../../hooks/useUI'

const OrgControlPanelHome = () => {
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
              Control panel of {orgData?.organization?.name}
            </Text>
            <Badge radius={6}>{orgData?.organization?.id}</Badge>
          </Group>
          {orgData?.organization?.description && (
            <Text color='dimmed'>{orgData.organization.description}</Text>
          )}
        </Box>

        {/* <Box>
          <Button
            component={Link}
            href='/dashboard/organizations/candidacy'
            leftIcon={<IconWorldPlus size={18} />}
            variant='light'
            color='gray'
          >
            Register an organization
          </Button>
        </Box> */}
      </Flex>
      <Divider variant='dashed' my={16} />
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Grid>
          <Grid.Col span={2}>
            <Flex
              sx={{
                width: '100%',
                backgroundColor: bgColor,
                padding: 16,
                borderRadius: 12,
                height: 200,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack align='center' pt={4} mb={4} spacing={3}>
                <IconIdBadge2
                  size={28}
                  // color={theme.colors.gray[6]}
                  stroke={1.6}
                ></IconIdBadge2>
                <Text weight='500' size='sm'>
                  Credential Requests
                </Text>
                <Badge variant='light' color='yellow' mt={2}>
                  0 requests
                </Badge>
              </Stack>
              <Button size='xs' variant='light'>
                Browse requests
              </Button>
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    </DashboardLayout>
  )
}

export default OrgControlPanelHome
