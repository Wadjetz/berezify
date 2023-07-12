<script lang="ts">
  import { cvData } from "$lib/cv/data/CvData"

  import GithubIcon from "virtual:icons/mdi/github"
  import LinkedinIcon from "virtual:icons/mdi/linkedin"
  import WebIcon from "virtual:icons/mdi/web"
</script>

<section>
  <div class="item">
    <GithubIcon size="20" color="#3d7ad9" />
    <a href="https://github.com/{cvData.person.github}" class="link" target="_blank">
      {cvData.person.github}
    </a>
  </div>
  <div class="item">
    <LinkedinIcon size="20" color="#3d7ad9" />
    <a href="https://www.linkedin.com/in/{cvData.person.linkedin}" class="link" target="_blank">
      {cvData.person.linkedin}
    </a>
  </div>
  <div class="item">
    <WebIcon size="20" color="#3d7ad9" />
    <a href="https://{cvData.person.website}" class="link" target="_blank">
      {cvData.person.website}
    </a>
  </div>
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
