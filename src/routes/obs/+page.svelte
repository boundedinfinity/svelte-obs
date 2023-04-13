<script lang="ts">
    import "../../app.postcss";
    import LowerThird from './LowerThird.svelte';
    import Intro from './Intro.svelte';
    import { socketInit } from "$lib";
  
    socketInit();
  
    let innerH: number;
    let innerW: number;
    let debug = false;
  </script>
  
  <svelte:window bind:innerHeight={innerH} bind:innerWidth={innerW} />
  
  <div class="container" style="--obs-h:{innerH}px; --obs-w:{innerW}px;">
    <Intro duration={5} />
    <LowerThird />
    
    {#if debug}
      <div class="dimensions debug">
        <p>Width: {innerW}</p>
        <p>Height: {innerH}</p>
      </div>
    {/if}
  </div>
  
  <style>
    .container {
      /* width: var(--obs-w); */
      /* height: var(--obs-h); */
      width: 100vw;
      height: 100vh;
      /* color: red; */
      @apply flex relative;
    }
  </style>


