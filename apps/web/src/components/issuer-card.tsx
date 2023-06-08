import {
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconHeartPlus, IconSeeding, IconWorld } from '@tabler/icons-react'
import useUI from '../hooks/useUI'
import Link from 'next/link'

const IssuerCard = ({ org }: any) => {
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
        minHeight: 180,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Stack
        spacing={4}
        sx={{
          maxHeight: 100,
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
            <Text
              weight='bold'
              size='md'
              component={Link}
              href={`/dashboard/issuers/${org.id}/`}
            >
              {org.name}
            </Text>
          </Box>
          <Box>
            <IconWorld size={18} color={colors.gray[6]} />
          </Box>
        </Flex>
        {org.description && <Text size='sm'>{org.description}</Text>}
        {/* {org.did && (
          <Box mb={8}>
            <Badge color='green' variant='dot'>
              {org.did}
            </Badge>
          </Box>
        )} */}
      </Stack>
      <Box mt={12}>
        <Group spacing={12}>
          <Button
            variant='light'
            size='xs'
            rightIcon={<IconSeeding size={16} />}
            component={Link}
            href={`/dashboard/issuers/${org.id}/request-credential`}
          >
            Request credentials
          </Button>
          <Button
            variant='subtle'
            rightIcon={<IconHeartPlus size={16} />}
            size='xs'
            color='pink'
            component={Link}
            href={`/dashboard/issuers/${org.id}/present-credential`}
          >
            Present credentials
          </Button>
        </Group>
      </Box>
    </Flex>
  )
}

export default IssuerCard
