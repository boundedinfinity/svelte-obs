export interface Message {
    type?: MessageType
}

export enum MessageType {
    LowerThird = "LowerThird",
    Intro = "Intro"
}

export interface LowerThirdMessage extends Message {
    text: string
    transDuration: number
    displayDuration: number
}

export const lowerThirdMessageDefaults: LowerThirdMessage = {
    type: MessageType.LowerThird,
    text: "",
    transDuration: 2,
    displayDuration: 20,
}


export interface IntroMessage extends Message {
   show?: boolean
}


export const introMessageDefaults: IntroMessage = {
    type: MessageType.LowerThird,
    show: true,
}