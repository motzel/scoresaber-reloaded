<script>
  import {exportJsonData} from './utils/export-import'
</script>

<main>
  <article>
    <header>
      <h1 class="title is-5">Project closed</h1>
      <p>New shiny ScoreSaber website has been released.</p>
      <p><a href="https://scoresaber.com" rel="noreferrer">Go to scoresaber.com</a></p>
    </header>

    <p>...and don't forget about the other great sites that will supplement your data.</p>

    <p>
      <a href="https://www.beatsavior.io/" rel="noreferrer">Beat Savior</a>
      <small>detailed data on your swings, install <a href="https://github.com/Mystogan98/BeatSaviorData" rel="noreferrer">BS mod</a> first</small>
    </p>

    <p>
      <a href="https://www.accsaber.com/" rel="noreferrer">AccSaber</a>
      <small>if you want to become an ACC champ</small>
    </p>

    <footer>
      If for some reason you would like to download your data stored in SSR,
      <a href="#" on:click|preventDefault={() => exportJsonData()}>click here</a>
      (and wait a few seconds).

      <p>
        <strong>May the 115 be with you!</strong>
      </p>
    </footer>
  </article>
</main>


<style>
    main {
        display: flex;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    article > * {
        text-align: center;
    }

    header {
        margin-bottom: 4rem;
    }

    p {
        margin-bottom: .75rem;
    }

    small {
        display: block;
        font-size: .75rem;
        color: #aaa;
    }

    footer {
        margin-top: 6rem;
        font-size: .875em;
        color: #aaa;
    }
</style>