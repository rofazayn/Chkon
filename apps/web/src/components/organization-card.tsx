import {
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  Icon3dCubeSphere,
  IconHeartPlus,
  IconSeeding,
} from '@tabler/icons-react'
import useUI from '../hooks/useUI'

const OrganizationCard = ({ org }: any) => {
  const theme = useMantineTheme()
  const { colors } = theme
  const { bgColor } = useUI()

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
            <Icon3dCubeSphere size={18} color={colors.gray[6]} />
          </Box>
        </Flex>
        {org.description && <Text size='sm'>{org.description}</Text>}
      </Stack>
      <Box mt={12}>
        <Group spacing={8}>
          <Button
            variant='light'
            size='xs'
            rightIcon={<IconSeeding size={16} />}
          >
            Request credentials
          </Button>
          <Button
            variant='subtle'
            rightIcon={<IconHeartPlus size={16} />}
            size='xs'
            color='pink'
          >
            Add to trusted
          </Button>
        </Group>
      </Box>
    </Flex>
  )
}

export default OrganizationCard
