import {
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconHomeCog, IconSettingsCog, IconWorld } from '@tabler/icons-react'
import useUI from '../hooks/useUI'
import { useRouter } from 'next/router'

const OrganizationCard = ({ org }: any) => {
  const theme = useMantineTheme()
  const { colors } = theme
  const { bgColor } = useUI()
  const router = useRouter()

  return (
    <Flex
      sx={{
        width: '100%',
        backgroundColor: bgColor,
        padding: 16,
        borderRadius: 12,
        height: 180,
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
              {org.name}
            </Text>
          </Box>
          <Box>
            <IconWorld size={18} color={colors.gray[6]} />
          </Box>
        </Flex>
        {org.description && <Text size='sm'>{org.description}</Text>}
      </Stack>
      <Box mt={12}>
        <Group spacing={8}>
          <Button
            variant='light'
            size='xs'
            rightIcon={<IconHomeCog size={16} />}
            onClick={() => router.push(`/dashboard/organizations/${org?.id}/`)}
          >
            Go to control panel
          </Button>
        </Group>
      </Box>
    </Flex>
  )
}

export default OrganizationCard