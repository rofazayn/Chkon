import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Breadcrumbs,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAntenna,
  IconApi,
  IconBell,
  IconBolt,
  IconBorderOuter,
  IconRoute,
  IconRouter,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Topbar = () => {
  const theme = useMantineTheme()
  const router = useRouter()

  const [breadcrumbs, setBreadcrumbs] = useState<any>()
  const [items, setItems] = useState<[]>([])
  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()

    pathArray = pathArray.filter((path) => path !== '')

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        href,
        label: (path.charAt(0).toUpperCase() + path.slice(1)).replace(
          /-/g,
          ' '
        ),
      }
    })

    setBreadcrumbs(breadcrumbs)
  }, [router.asPath])

  useEffect(() => {
    if (breadcrumbs) {
      setItems(
        breadcrumbs.map((item: any, index: number) => (
          <Anchor
            component={Link}
            href={item.href}
            key={index}
            sx={{ lineHeight: 1 }}
            color='none'
            weight={index === 0 ? 'bold' : '500'}
            scroll={true}
          >
            {item.label}
          </Anchor>
        ))
      )
    } else {
      setItems([])
    }
  }, [breadcrumbs])

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 40,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
        paddingInline: 24,
        paddingBlock: 16,
        borderRadius: 6,
        // borderTopLeftRadius: 6,
        // borderTopRightRadius: 6,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        marginBottom: 16,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[0]
        }`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {items && items.length > 0 ? (
          <Group spacing={16}>
            <IconAntenna />
            <Breadcrumbs separator='/'>{items}</Breadcrumbs>
          </Group>
        ) : null}
      </Box>
      <Box>
        <Group spacing={8}>
          <ActionIcon variant='subtle' size='lg'>
            <IconBell size={20} />
          </ActionIcon>
          <Avatar radius={6} size={48}>
            AZ
          </Avatar>
        </Group>
      </Box>
    </Box>
  )
}

export default Topbar
