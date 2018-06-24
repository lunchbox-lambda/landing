import { IStore, ReduxStore } from 'lib/redux'

const app = {
  store: new ReduxStore() as IStore
}

window['app'] = app

export default app
