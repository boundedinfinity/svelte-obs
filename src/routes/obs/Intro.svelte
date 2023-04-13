<script lang="ts">
    import { fade } from "svelte/transition";
    import { showIntroStore } from "$lib";
    import Box1 from "./Box1.svelte";
    import Box2 from "./Box2.svelte";

    export let duration = 10;
    
    $: if ($showIntroStore) {
        setTimeout(() => {
            showIntroStore.set(false);
        }, duration * 1000);
    }
</script>

{#if $showIntroStore}
    {#key $showIntroStore}
        <div class="wrapper" transition:fade>
            <Box2 padding="3vw">
                <section>
                    <h1>Behind Schedule</h1>
                    <p>and</p>
                    <h1>Over Budget</h1>
                </section>
            </Box2>
        </div>
    {/key}
{/if}

<style>
    .wrapper {
        top: 25vh;
        left: 65vh;
        position: absolute;
    }

    section {
        display: grid;
        place-items: center;
    }
</style>
