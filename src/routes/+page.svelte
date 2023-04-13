<script lang="ts">
    import type { LowerThirdMessage, IntroMessage } from "$lib/model";
    import { persisted } from "svelte-local-storage-store";
    import { MessageType } from "$lib/model";
    import { sendMessage } from "$lib/socket";
    import { text } from "svelte/internal";

    let messageText: string;
    export const messages = persisted<LowerThirdMessage[]>("messages", []);

    function add() {
        const message: LowerThirdMessage = {
            type: MessageType.LowerThird,
            text: messageText,
            displayDuration: 5,
            transDuration: 2,
        };

        messages.update((m) => [...m, message]);
    }

    function send(text: string) {
        const message = $messages.filter(m => m.text == text)[0];
        sendMessage(message);
    }

    function remove(text: string) {
        messages.update(ms => ms.filter(m => m.text != text));
    }

    function showIntro() {
        const message: IntroMessage = {
            type: MessageType.Intro,
            show: true,
        };

        sendMessage(message);
    }

    function clear() {
        messages.set([]);
    }
</script>

<div>
    <button on:click={showIntro}>Show Intro</button>
</div>

<div>
    <input bind:value={messageText} />
    <div>
        <button on:click={add}>Add</button>
        <button on:click={clear}>Clear</button>
    </div>

    <div>
        <table border={1}>
            <tr>
                <td />
                <td>Message</td>
                <td>DisplayDuration</td>
                <td>TransDuration</td>
                <td />
            </tr>
            {#each $messages as message, i}
                <tr>
                    <td><button on:click={() => send(message.text)}>Display</button></td>
                    <td>{message.text}</td>
                    <td>{message.displayDuration}</td>
                    <td>{message.transDuration}</td>
                    <td><button on:click={() => remove(message.text)}>Remove</button></td>
                </tr>
            {/each}
        </table>
    </div>
</div>

<style>
    input {
        @apply border border-slate-400 m-2 p-2 w-5/6;
    }

    button {
        @apply p-2 m-2 rounded-sm border border-slate-400;
    }
</style>
