import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/novaRifa', 'RifasController.register').as('rifas.register')
  Route.post('/novaRifa', 'RifasController.store').as('rifas.store')

  Route.get('/novoTipo', 'TiposController.register').as('tipos.register')
  Route.post('/novoTipo', 'TiposController.store').as('tipos.store')

  Route.get('/rifas/:rifa_id/premios/create', 'PremiosController.create').as('premios.create')
  Route.post('/rifas/:rifa_id/premios', 'PremiosController.store').as('premios.store')

  Route.get('/rifaslist', 'RifasController.list').as('rifas.list')
  Route.get('/rifas/:rifa_id/show', 'RifasController.show').as('rifas.show')

  Route.post('/bilhete/:rifa_id/store', 'BilhetesController.store').as('bilhete.store')

}).middleware('auth')

Route.get('/register', 'AuthController.register').as('auth.register')
Route.post('/register', 'AuthController.store').as('auth.store')
Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/login', 'AuthController.verify').as('auth.verify')
Route.get('/logout', 'AuthController.logout').as('auth.logout')
Route.get('/about', 'AuthController.about').as('about')

Route.get('/', 'HomeController.index').as('root')
