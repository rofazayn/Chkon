import { Box, Text } from '@mantine/core'
import { IconBulb, IconCheck } from '@tabler/icons-react'

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean
  label: string
}) {
  return (
    <Text
      sx={(theme) => ({
        color: meets ? theme.colors.teal[6] : theme.colors.orange[6],
        display: 'flex',
        alignItems: 'center',
      })}
      mt={7}
      size='sm'
    >
      {meets ? <IconCheck size='0.9rem' /> : <IconBulb size='0.9rem' />}{' '}
      <Box sx={{ marginInlineStart: 12 }}>
        <Text>{label}</Text>
      </Box>
    </Text>
  )
}

export const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  // { re: /[a-z]/, label: 'Includes lowercase letter' },
  // { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
]

export function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
}

export default PasswordRequirement
