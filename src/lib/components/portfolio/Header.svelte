<script lang="ts">
  import logo from "$lib/assets/logo.svg"
  import { LL } from "$lib/i18n/i18n-svelte"
</script>

<header>
  <img alt="The project logo" src={logo} />

  <h1>{$LL.portfolio.name()}</h1>

  <nav>
    <ul role="list" class="menu">
      <li>
        <a href="/">{$LL.portfolio.nav.home()}</a>
      </li>
      <li>
        <a href="/cv/fr">{$LL.portfolio.nav.cv()}</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 35px 1fr auto;
    align-items: center;
    gap: var(--s3);
    padding: var(--s6) var(--s3);
    max-width: 1000px;
    margin: 0 auto;
    background-color: var(--grey3);
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--s7);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--color2);
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 782px) {
    img {
      width: 25px;
      height: 25px;
    }

    h1 {
      font-size: 1rem;
    }

    .menu {
      gap: var(--s3);
    }
  }
</style>
