import dva from 'dva'
const createHashHistory = require('history').createHashHistory
import router from './router'
import { useModel } from './models'
import './styles'

const app = dva({
  history: createHashHistory()
})
useModel(app)
app.router(router)
app.start('#app')