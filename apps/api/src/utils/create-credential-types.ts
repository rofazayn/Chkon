import prisma from '../configs/prisma-client'

async function main() {
  await prisma.credentialType.createMany({
    data: [
      // {
      //   name: 'Student Card',
      //   typename: 'Student Card',
      //   attributes: [
      //     { name: 'name', dataType: 'string' },
      //     { name: 'dob', dataType: 'date' },
      //     { name: 'registrationNumber', dataType: 'string' },
      //     { name: 'study', dataType: 'string' },
      //     { name: 'issueDate', dataType: 'date' },
      //     { name: 'expiryDate', dataType: 'date' },
      //   ],
      // },
      // {
      //   name: 'Basic Identity Card',
      //   typename: 'BasicIdentityCard',
      //   attributes: [
      //     { name: 'name', dataType: 'string' },
      //     { name: 'dob', dataType: 'date' },
      //     { name: 'region', dataType: 'string' },
      //     { name: 'city', dataType: 'string' },
      //     { name: 'nationality', dataType: 'string' },
      //     { name: 'registrationNumber', dataType: 'string' },
      //     { name: 'issueDate', dataType: 'date' },
      //     { name: 'expiryDate', dataType: 'date' },
      //   ],
      // },
      {
        name: "Basic Driver's License",
        typename: 'BasicDriverLicense',
        attributes: [
          { name: 'name', dataType: 'string' },
          { name: 'dob', dataType: 'date' },
          { name: 'region', dataType: 'string' },
          { name: 'city', dataType: 'string' },
          { name: 'nationality', dataType: 'string' },
          { name: 'registrationNumber', dataType: 'string' },
          { name: 'licenseType', dataType: 'string' },
          { name: 'issueDate', dataType: 'date' },
          { name: 'expiryDate', dataType: 'date' },
        ],
      },
    ],
  })

  console.log('Done seeding!')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
