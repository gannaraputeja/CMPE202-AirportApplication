import HomeRoute from './HomeRoute.js'

const Routes = (app) => {
    app.use('/', HomeRoute)
}

export default Routes