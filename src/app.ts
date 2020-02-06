import { Server } from './bin/Application'

const server = new Server()

server.listen((port: number) => {
  console.log(`server listen on port: ${port} 🚀🚀🚀`)
})