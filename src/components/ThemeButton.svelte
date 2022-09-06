<script>
  import { theme } from "../lib/theme";

  const onClick = () => {
    theme.toggle();
  };
</script>

<button id="theme-button" on:click={onClick}>
  <div class="i-bi:moon-stars-fill" />
  <div class="i-bi:sun" />
</button>

<style lang="scss">
  button {
    background-color: transparent;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
    display: inline-block;
    fill: var(--clr-palette-white);
    font-size: 0;
    margin: 0;
    padding: var(--size-padding-x-small);

    div {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  :global([data-theme="dark"]) {
    div:last-child {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }

  :global([data-theme="light"]) {
    div:first-child {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
</style>
