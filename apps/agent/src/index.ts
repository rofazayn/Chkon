import express, { json, Request, Response } from 'express'
import agent from './configs/agent.js'

async function main() {
  const app = express()
  app.use(json())

  app.get('/', (_, res: Response) => {
    res.send('chkon? 👀')
  })

  app.post('/create-did', async (req: Request, res: Response) => {
    try {
      const { userId } = req.body
      const did = await agent.didManagerCreate({
        alias: userId,
      })

      const resolvedDID = await agent.didManagerGetByAlias({ alias: userId })

      return res.json({ did, resolvedDID })
    } catch (error) {
      console.log(error)
      res.status(500).send('something went wrong')
    }
  })

  app.listen(4001)
}

main().catch((err) => console.log(err))
