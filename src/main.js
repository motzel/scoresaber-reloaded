import App from './App.svelte';
import log from './utils/logger'
import initDb from './db/db'
import initializeRepositories from './db/repositories-init';
import setupDataFixes from './db/fix-data'
import ErrorComponent from './components/Common/Error.svelte'

let app = null;

(async() => {
  try {
    log.info('Starting up...', 'Main')

    await initDb();
    await initializeRepositories();
    await setupDataFixes();

    log.info('Site initialized', 'Main')

    app = new App({
      target: document.body,
      props: {},
    });
  } catch(error) {
    console.error(error);

    if (error instanceof DOMException && error.toString() === 'InvalidStateError: A mutation operation was attempted on a database that did not allow mutations.')
      error = new Error('Firefox in private mode does not support the database. Please run the site in normal mode.')

    app = new ErrorComponent({
      target: document.body,
      props: {error, withTrace: true},
    });
  }
})();


export default app;