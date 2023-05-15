import { Box, Text, createStyles } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useStyles = createStyles((theme, _params, _getRef) => {
  return {
    link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: 15,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      paddingInline: 12,
      paddingBlock: 10,
      borderRadius: 12,
      fontWeight: 500,
      // transitionProperty: 'color, background-color',
      // transition: 'ease-in-out 200ms',
      lineHeight: 1,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color:
          theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6],

        [`& svg`]: {
          color:
            theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
        },
      },
    },

    linkIcon: {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[7],
      marginInlineEnd: 12,
      // transitionProperty: 'stroke fill path',
      // transition: 'ease-in-out 200ms',
    },

    linkActive: {
      fontWeight: 'bold',
      '&::before': {
        backgroundColor: theme.colors.violet[5],
      },
      '&, &:hover': {
        paddingBlock: `${theme.spacing.md}px`,
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: 'violet',
        }).background,
        color: theme.fn.variant({ variant: 'light', color: 'violet' }).color,
        [`& svg`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: 'violet',
          }).color,
        },
      },
    },
  }
})

function NavLink({ item }: any) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState<boolean>(false)
  const router = useRouter()

  return (
    <Box>
      <Text
        variant='unstyled'
        component={Link}
        href={item.link}
        className={cx(classes.link, {
          [classes.linkActive]:
            (router.pathname === '/app/' || router.pathname === '/dashboard') &&
            item.label === 'Home'
              ? true
              : router.pathname.split('/').length > 2
              ? router.pathname.split('/')[2].includes(item.label.toLowerCase())
              : false,
        })}
        key={item.label}
        onClick={(_event) => {
          setActive(item.label)
        }}
      >
        <item.icon className={classes.linkIcon} stroke={2} size={22} />
        <span>{item.labelExtended || item.label}</span>
      </Text>
    </Box>
  )
}

export default NavLink
