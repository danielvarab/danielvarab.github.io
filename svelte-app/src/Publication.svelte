<script>
    export let title;
    export let authors;
    export let pdf_link;
    export let code_link;
    export let venue;

    let links_present = pdf_link || code_link
</script>

<p>
    {title} <br>
    {authors} <br>
    {venue} {#if links_present}-{/if} 
    {#if pdf_link}
    <a href="{pdf_link}">pdf</a>{#if code_link}, {/if} 
    {/if}

    

    {#if code_link}
    <a href="{code_link}">code</a>
    {/if}

</p>