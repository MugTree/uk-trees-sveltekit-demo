<script>
  export let data;
  const thumbnail = (path) => path.replace("trees", "trees/thumbs");
</script>

<a href={"/trees/" + data.slug}
  ><img
    alt=""
    loading="lazy"
    width="340px"
    class="grid-img"
    src={"/static" + thumbnail(data.meta.image.path)}
  /></a
>

<h2 class="grid-head">
  <a href={"/trees/" + data.slug}>{data.meta.title}</a>
</h2>

<p class="grid-content">{data.meta.summary}</p>
