<script lang="ts">
    import projectSchema from "src/schemas/projectSchema";
    import type { z } from "astro:content";
    
    export let lang: string;
    type projectType = z.infer<typeof projectSchema>;
    type projectResponse = Record<string, projectType>;   

   
    async function fetchProjects() {
            const projectsFetched = await fetch("/api/projects.json");
            const projects: projectResponse = await projectsFetched.json();
            return projects;    
    }

</script>

{#await fetchProjects() }
   lolading... 
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
            <th>{index+1}</th>
            <td>{project.name[lang]}</td>
            <td>{project.tags.join(" ")}</td>
            <td>{new Date(project.startDate).getFullYear()}</td>
            <td><button class="btn" >Details</button></td>
        </tr>
            
        {/each}
      </tbody>
    </table>
  </div>
{/await}
