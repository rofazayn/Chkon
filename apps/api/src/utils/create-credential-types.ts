import prisma from '../configs/prisma-client'

async function main() {
  await prisma.credentialType.createMany({
    data: [
      // {
      //   name: 'Student Card',
      //   typename: 'StudentCard',
      //   attributes: [
      //     { name: 'name', dataType: 'string' },
      //     { name: 'dob', dataType: 'date' },
      //     { name: 'registrationNumber', dataType: 'string' },
      //     { name: 'study', dataType: 'string' },
      //     { name: 'issueDate', dataType: 'date' },
      //     { name: 'expiryDate', dataType: 'date' },
      //   ],
      // },
      {
        name: 'National Identity Card',
        typename: 'NationalIdentityCardV1',
        attributes: [
          { name: 'name', dataType: 'string' },
          { name: 'dob', dataType: 'date' },
          { name: 'region', dataType: 'string' },
          { name: 'city', dataType: 'string' },
          { name: 'nationality', dataType: 'string' },
          { name: 'registrationNumber', dataType: 'string' },
          { name: 'issueDate', dataType: 'date' },
          { name: 'expiryDate', dataType: 'date' },
        ],
      },
      // {
      //   name: "Basic Driver's License",
      //   typename: 'BasicDriverLicense',
      //   attributes: [
      //     { name: 'name', dataType: 'string' },
      //     { name: 'dob', dataType: 'date' },
      //     { name: 'region', dataType: 'string' },
      //     { name: 'city', dataType: 'string' },
      //     { name: 'nationality', dataType: 'string' },
      //     { name: 'registrationNumber', dataType: 'string' },
      //     { name: 'licenseType', dataType: 'string' },
      //     { name: 'issueDate', dataType: 'date' },
      //     { name: 'expiryDate', dataType: 'date' },
      //   ],
      // },
    ],
  })

  console.log('Done seeding!')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
