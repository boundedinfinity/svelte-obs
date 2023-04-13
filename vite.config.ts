import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { Server } from 'socket.io'

const webSocketServer = {
  name: 'webSocketServer',
  configureServer(server) {
    const io = new Server(server.httpServer)

    io.on('connection', (socket) => {
      console.log("server: client connected")

      socket.broadcast.emit("obs", JSON.stringify({
        type: "LowerThird",
        text: "overlay connected",
      }))

      socket.on("obs", (message) => {
        socket.broadcast.emit("obs", message)
        console.log(`server: ${message}`)
      })

      socket.on("disconnect", () => {
        console.log("server: client disconnected")
      })
    })
  },
}

const config: UserConfig = {
  plugins: [sveltekit(), webSocketServer]
};

export default config;
