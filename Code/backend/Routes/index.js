import Home from './Home.js'
import Airport from './AirportRoute.js'

const Routes = (app) => {
    app.use('/', Home)
    app.use('/airport', Airport)
}

export default Routes