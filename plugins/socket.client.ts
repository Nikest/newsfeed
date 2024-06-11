import { io } from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
        console.log("Connected to websocket server");
    });

    nuxtApp.provide("socket", socket);
});
