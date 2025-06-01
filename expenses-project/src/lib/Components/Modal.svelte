<script lang="ts">
    import {Button} from "@sveltestrap/sveltestrap";

    export let isVisible = false;
</script>

{#if isVisible}
    <div class="modal">
        <div class="modal-content">
            <slot>
            </slot>
        </div>
    </div>
{/if}

<style>
    
</style>