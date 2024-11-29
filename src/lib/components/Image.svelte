<script>
  import { base } from "$app/paths";
  let { data } = $props();
</script>

<figure class="main-img">
  <img loading="lazy" width="340px" src={base + data.image.path} alt="" />
  <figcaption class="caption">
    Image by
    <a href={base + data.image.path} class="secondary">{data.image.credit}</a>
  </figcaption>
</figure>
