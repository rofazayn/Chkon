import {
  createAgent,
  ICredentialPlugin,
  IDataStore,
  IDataStoreORM,
  IDIDManager,
  IKeyManager,
  IResolver,
} from '@veramo/core'
import { CredentialPlugin } from '@veramo/credential-w3c'
import {
  DIDStore,
  Entities,
  KeyStore,
  migrations,
  PrivateKeyStore,
} from '@veramo/data-store'
import { DIDManager } from '@veramo/did-manager'
import { KeyDIDProvider } from '@veramo/did-provider-key'
import { DIDResolverPlugin } from '@veramo/did-resolver'
import { KeyManager } from '@veramo/key-manager'
import { KeyManagementSystem, SecretBox } from '@veramo/kms-local'
import { Resolver } from 'did-resolver'
import { getResolver as keyDidResolver } from 'key-did-resolver'
import { DataSource } from 'typeorm'

// const INFURA_PROJECT_ID = '9148edd953d6421f82d4e81214f282ac'
const KMS_SECRET_KEY =
  '60f8b3c84ce6c553c0aa8f668137e98119abd8ed9e596e1921d2d211c5f0f4ef'

const dbSetup = new DataSource({
  type: 'postgres',
  host: 'localhost',
  password: '',
  username: 'ruzo',
  database: 'chkon',
  schema: 'public',
  port: 5432,
  migrations,
  migrationsRun: true,
  entities: Entities,
})

const dbConnection = await dbSetup.initialize()

const agent = createAgent<
  IDIDManager &
    IKeyManager &
    IDataStore &
    IDataStoreORM &
    IResolver &
    ICredentialPlugin
>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection),
      kms: {
        local: new KeyManagementSystem(
          new PrivateKeyStore(dbConnection, new SecretBox(KMS_SECRET_KEY))
        ),
      },
    }),
    new DIDManager({
      store: new DIDStore(dbConnection),
      defaultProvider: 'did:key',
      providers: {
        'did:key': new KeyDIDProvider({
          defaultKms: 'local',
        }),
      },
    }),
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...keyDidResolver(),
      }),
    }),
    new CredentialPlugin(),
  ],
})

export default agent
