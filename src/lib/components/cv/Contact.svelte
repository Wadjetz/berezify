<script lang="ts">
  import EmailIcon from "virtual:icons/mdi/email"
  import GithubIcon from "virtual:icons/mdi/github"
  import LinkedinIcon from "virtual:icons/mdi/linkedin"
  import PhoneIcon from "virtual:icons/mdi/phone-classic"
  import WebIcon from "virtual:icons/mdi/web"
  import { page } from "$app/state"
  import { cvData } from "$lib/cv/data/CvData"

  const queries = $derived(Object.fromEntries(new URLSearchParams(page.url.search)))
</script>

<section>
  <h3 class="cv-h3">{cvData.person.firstName} {cvData.person.lastName}</h3>
  <div class="item">
    <GithubIcon width="20" height="20" color="#3d7ad9" />
    <a href="https://github.com/{cvData.person.github}" class="link" target="_blank">
      {cvData.person.github}
    </a>
  </div>
  <div class="item">
    <LinkedinIcon width="20" height="20" color="#3d7ad9" />
    <a href="https://www.linkedin.com/in/{cvData.person.linkedin}" class="link" target="_blank">
      {cvData.person.linkedin}
    </a>
  </div>
  <div class="item">
    <WebIcon width="20" height="20" color="#3d7ad9" />
    <a href="https://{cvData.person.website}" class="link" target="_blank">
      {cvData.person.website}
    </a>
  </div>
  {#if queries["phone"]}
    <div class="item">
      <PhoneIcon width="20" height="20" color="#3d7ad9" />
      <a href="tel:{queries['phone']}" class="link" target="_blank">
        {queries["phone"]}
      </a>
    </div>
  {/if}
  {#if queries["email"]}
    <div class="item">
      <EmailIcon width="20" height="20" color="#3d7ad9" />
      <a href="mailto:{queries['email']}" class="link" target="_blank">
        {queries["email"]}
      </a>
    </div>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
  }
  .link {
    color: var(--color1);
    text-decoration: none;
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--s2);
  }
</style>
