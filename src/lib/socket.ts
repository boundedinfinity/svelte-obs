
import type { LowerThirdMessage, Message, IntroMessage } from './model'

import { lowerThirdMessageDefaults, MessageType, introMessageDefaults } from './model'
import { lowerThirdStore, showIntroStore } from './store'
import { io } from "socket.io-client";

const socket = io();

socket.on("obs", (json: string) => {
    console.log(`incoming: ${json}`)
    const message = parseMessage<Message>(json, {})

    switch (message.type) {
        case MessageType.Intro:
            const imessage = parseMessage<IntroMessage>(json, introMessageDefaults)
            showIntroStore.set(imessage.show || false)
            break;
        case MessageType.LowerThird:
            const ltmessage = parseMessage<LowerThirdMessage>(json, lowerThirdMessageDefaults)
            lowerThirdStore.set(ltmessage);
            break;
        default:
            console.log(`Unknown message: ${json}`)
    }

});

export function sendMessage(message: Message) {
    const json = JSON.stringify(message)
    console.log(`outgoing: ${json}`)
    socket.emit("obs", JSON.stringify(message));
}

function parseMessage<T>(json: string, defaults: T): T {
    console.log(`input: ${json}`);
    const input: T = JSON.parse(json);
    const real: T = { ...defaults, ...input };
    console.log(`real: ${JSON.stringify(real)}`);
    return real
}

export function socketInit() {
    // Just here to load the socket
}