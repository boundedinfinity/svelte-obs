<script lang="ts">
    import { fade } from "svelte/transition";
    import { lowerThirdStore } from "$lib";
    import Box1 from "./Box1.svelte";
    import Box2 from "./Box2.svelte";

    $: if ($lowerThirdStore) {
        setTimeout(() => {
            lowerThirdStore.set(undefined);
        }, $lowerThirdStore.displayDuration * 1000);
    }
</script>

{#if $lowerThirdStore}
    {#key $lowerThirdStore}
        <div
            class="message"
            transition:fade={{
                duration: $lowerThirdStore.transDuration * 1000,
            }}
        >
        <Box2 padding=".2rem 10rem .2rem 10rem">
            {$lowerThirdStore.text}
        </Box2>
        </div>
    {/key}
{/if}

<style>
    .message {
        position: absolute;
        left: 1vw;
        bottom: 1vw;
    }
</style>
