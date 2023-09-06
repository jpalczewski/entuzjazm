<script lang="ts">
    export let tags: string[];
    import '../styles/tag.css';
</script>

{#each tags as tag}
<span class="tag">
    #{tag}
</span>
{/each}