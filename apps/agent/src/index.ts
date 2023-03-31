import express, { json, Response } from 'express'

async function main() {
  const app = express()
  app.use(json())

  app.get('/', async (_, res: Response) => {
    res.send('chkon? 👀')
  })

  app.listen(4001)
}

main().catch((err) => console.log(err))
