import express, { Application } from 'express'
import path from 'path'
import fs from 'fs'

const app: Application = express()
const core: string = path.join(__dirname, '..', 'core')

fs.readdir(core, (err: NodeJS.ErrnoException | null, dirs: string[]) => {
  if (err) {
    // Error Handling
  }

  dirs.forEach((dir: string) => {
    const routes = require(path.join(core, dir))
    app.use(routes)
  })
})

export default app