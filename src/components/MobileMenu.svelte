<script>
  let visible = false;
  function toggleMenu() {
    visible = !visible;
  }
</script>

<div class="btn btn-ghost normal-case text-xl m-1" on:click={toggleMenu}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
</div>
{#if visible}
  <div id="menu">
    <ul class="menu menu-vertical px-1">
      <slot />
    </ul>
  </div>
{/if}
