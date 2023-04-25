import prisma from '../configs/prisma-client'

async function main() {
  await prisma.credentialType.create({
    data: {
      name: 'StudentCard',
      attributes: [
        { name: 'name', dataType: 'string' },
        { name: 'dob', dataType: 'date' },
        { name: 'registrationNumber', dataType: 'string' },
        { name: 'study', dataType: 'string' },
        { name: 'issueDate', dataType: 'date' },
        { name: 'expiryDate', dataType: 'date' },
      ],
    },
  })

  console.log('Done seeding!')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
