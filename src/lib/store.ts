import type { LowerThirdMessage } from './model'

import { writable } from 'svelte/store'

export const lowerThirdStore = writable<LowerThirdMessage | undefined>(undefined)
export const showIntroStore = writable<boolean>(false)
