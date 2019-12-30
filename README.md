# TestMEVN
Consigna: 

Desarrollar una API rest basada NodeJS con ExpressJS como framework, que responda a los siguientes servicios:      

1- addUser (POST): Username, Nombre, Apellido, Email. Almacenarlo en mongodb.     
2- delUser (DELETE): Por id.      
3- getUsers (GET): Listado de usuarios.     
4- updateUser (PUT)     
5- Adicional al item anterior, levantar una vista que a través de componentes en VUE utilizando Vuex, 
Vue Router y Axios para que consuman dichos servicios y presente lo siguiente:  
  Panel de navegación. 
  Listado de usuarios ingresados. 
  Formulario para la busqueda, alta, baja y modificacion de usuarios.

-------------------

Levantar servicios con docker:

$ docker-compose up -d

Alternativa:

1 - Levantar mongodb en 27017.

// SERVER
2 - $ cd server
3 - $ npm install
4 - $ npm start

// CLIENT
5 - $ cd client
6 - $ npm install
7 - $ npm run serve
