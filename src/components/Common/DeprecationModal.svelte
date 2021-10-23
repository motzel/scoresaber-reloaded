<script>
  import {onMount} from 'svelte'
  import keyValueRepository from '../../db/repository/key-value'
  import Button from '../Common/Button.svelte'
  import Dialog from '../Common/Dialog.svelte'

  const DEPRECATION_NOTICE_KEY = 'deprecationNoticeAccepted'

  let show = false;

  async function onOk() {
    await keyValueRepository().set(true, DEPRECATION_NOTICE_KEY);

    show = false;

  }
  onMount(async () => {
    show = !(await keyValueRepository().get(DEPRECATION_NOTICE_KEY)) ?? true;
  })
</script>

{#if show}
  <section>
    <Dialog closeable={false} on:confirm={onOk}>
      <svelte:fragment slot="header">
        <div class="header-title">Deprecation notice</div>
      </svelte:fragment>

      <svelte:fragment slot="content">
        <p>
          This site no longer has active support and is working as-is until Umbranox launches the new
          <a href="https://scoresaber.com/" rel="noopener" target="_blank">scoresaber.com</a> site.
          After that time it will stop working and will be taken down.
        </p>
        <p>You have been warned 😁</p>
      </svelte:fragment>

      <svelte:fragment slot="footer-right">
        <Button label="OK" on:click={onOk}/>
      </svelte:fragment>
    </Dialog>
  </section>
{/if}

<style>
    .header-title {
        text-align: center;
    }

    p:not(:last-child) {
        margin-bottom: 2rem;
    }

    section :global(.ss-modal) {
        max-width: 35rem!important;
    }
</style>