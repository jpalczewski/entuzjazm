<script lang="ts">
  import projectSchema from "src/schemas/projectSchema";
  import type { z } from "astro:content";
    import ProjectTagList from "./ProjectTagList.svelte";

  export let lang: string | undefined;
  type projectType = z.infer<typeof projectSchema>;
  type projectResponse = Record<string, projectType>;

  async function fetchProjects() {
    const projectsFetched = await fetch("/api/projects.json");
    const projects: projectResponse = await projectsFetched.json();
    console.log( Object.entries(projects));
    return projects;
  }
</script>

{#await fetchProjects()}
<span class="loading loading-spinner loading-lg"></span>
{:then projects}
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project name</th>
          <th>Project tags</th>
          <th>Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {#each Object.entries(projects) as entry, index}
          <tr>
            <th>{index + 1}</th>
            <td>{entry[1].name[lang]}</td>
            <td><ProjectTagList tags={entry[1].tags} /></td>
            <td>{new Date(entry[1].startDate).getFullYear()}</td>
            <td>{@html "<button class='btn' onclick='"+ entry[0] + "_modal.showModal()' >Details</button>"}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    {#each Object.entries(projects) as entry}
    <dialog id="{entry[0]}_modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg"> {entry[1].name[lang]}</h3>
        <p class="py-4">{entry[1].description[lang]}</p>

        <a href="{entry[1].link}" data-astro-reload>Link</a>
        <p class="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  {/each}
  </div>
{/await}
