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

  Route.get('/bilhetes/:rifa_id/store', 'BilhetesController.store').as('bilhetes.store')

  Route.get('/bilhetes/:bilhete_id/edit', 'BilhetesController.edit').as('bilhetes.edit')


  Route.get('/usuario/status', 'UsuarioController.status').as('usuario.status')
  Route.get('/usuario/status/:rifa_id/show', 'UsuarioController.show').as('usuario.status.show')

  Route.get('/usuario/minhasRifas', 'UsuarioController.minhas').as('usuario.minhasRifas')

  Route.get('/rifas/:rifa_id/sortear', 'RifasController.sortear').as('rifas.sortear')

  Route.get('/rifas/:rifa_id/ganhadores', 'RifasController.ganhadores').as('rifas.ganhadores')

}).middleware('auth')

Route.get('/register', 'AuthController.register').as('auth.register')
Route.post('/register', 'AuthController.store').as('auth.store')
Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/login', 'AuthController.verify').as('auth.verify')
Route.get('/logout', 'AuthController.logout').as('auth.logout')
Route.get('/about', 'AuthController.about').as('about')

Route.get('/', 'HomeController.index').as('root')
