import prisma from '../configs/prisma-client'

async function main() {
  await prisma.credentialType.createMany({
    data: [
      {
        name: 'Student Card',
        typename: 'StudentCardV1',
        attributes: [
          {
            name: 'firstName',
            label: 'First name',
            inputType: 'text',
          },
          {
            name: 'lastName',
            label: 'Last name',
            inputType: 'text',
          },
          {
            name: 'dob',
            label: 'Date of birth',
            inputType: 'date',
          },
          {
            name: 'study',
            label: 'Field of study',
            inputType: 'text',
          },
          {
            name: 'speciality',
            label: 'Speciality of study',
            inputType: 'text',
          },
          {
            name: 'issuedAt',
            label: 'Issuance date',
            inputType: 'date',
          },
          {
            name: 'expiresAt',
            label: 'Expiration date',
            inputType: 'date',
          },
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
