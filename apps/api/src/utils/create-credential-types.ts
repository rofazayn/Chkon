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
            name: 'expiresAt',
            label: 'Expiration date',
            inputType: 'date',
          },
        ],
      },
      // {
      //   name: 'Teacher Card',
      //   typename: 'TeacherCardV1',
      //   attributes: [
      //     {
      //       name: 'firstName',
      //       label: 'First name',
      //       inputType: 'text',
      //     },
      //     {
      //       name: 'lastName',
      //       label: 'Last name',
      //       inputType: 'text',
      //     },
      //     {
      //       name: 'dob',
      //       label: 'Date of birth',
      //       inputType: 'date',
      //     },
      //     {
      //       name: 'field',
      //       label: 'Field of teaching',
      //       inputType: 'text',
      //     },
      //     {
      //       name: 'speciality',
      //       label: 'Speciality of teaching',
      //       inputType: 'text',
      //     },
      //     {
      //       name: 'expiresAt',
      //       label: 'Expiration date',
      //       inputType: 'date',
      //     },
      //   ],
      // },
      {
        name: 'Identity Card',
        typename: 'IdentityCardV1',
        attributes: [
          {
            name: 'issuingAuthority',
            label: 'Issuing authority',
            inputType: 'text',
          },
          {
            name: 'dateOfIssuance',
            label: 'Date of issuance',
            inputType: 'date',
          },
          {
            name: 'expiresAt',
            label: 'Date of expiration',
            inputType: 'date',
          },
          {
            name: 'nationalIdentifyingNumber',
            label: 'National identifying number',
            inputType: 'text',
          },
          {
            name: 'lastName',
            label: 'Last name',
            inputType: 'text',
          },
          {
            name: 'firstName',
            label: 'First name',
            inputType: 'text',
          },
          {
            name: 'dateOfBirth',
            label: 'Date of birth',
            inputType: 'date',
          },
          {
            name: 'placeOfBirth',
            label: 'Place of birth',
            inputType: 'text',
          },
          {
            name: 'gender',
            label: 'Gender',
            inputType: 'text',
          },
          {
            name: 'bloodType',
            label: 'Blood type',
            inputType: 'text',
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
