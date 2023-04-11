import { Text, useMantineTheme } from '@mantine/core'
import DashboardLayout from '../../components/_layouts/dashboard-layout'

const DashboardHome = () => {
  const theme = useMantineTheme()
  return (
    <DashboardLayout>
      <Text>Welcome to Chkon: Digital Identity.</Text>
    </DashboardLayout>
  )
}

export default DashboardHome
