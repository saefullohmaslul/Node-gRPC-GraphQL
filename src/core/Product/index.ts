import { Router, Request, Response } from 'express'

const router = Router()

router.get(
  '/product',
  (req: Request, res: Response) => {
    res.send('Hello')
  }
)

module.exports = router