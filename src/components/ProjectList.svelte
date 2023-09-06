<script lang="ts">
  import projectSchema from "src/schemas/projectSchema";
  import type { z } from "astro:content";
    import ProjectTagList from "./ProjectTagList.svelte";

  export let lang: string;
  type projectType = z.infer<typeof projectSchema>;
  type projectResponse = Record<string, projectType>;

  async function fetchProjects() {
    const projectsFetched = await fetch("/api/projects.json");
    const projects: projectResponse = await projectsFetched.json();
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
        {#each Object.entries(projects) as [_slug, project], index}
          <tr>
            <th>{index + 1}</th>
            <td>{project.name[lang]}</td>
            <td><ProjectTagList tags={project.tags} /></td>
            <td>{new Date(project.startDate).getFullYear()}</td>
            <td><button class="btn">Details</button></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/await}
