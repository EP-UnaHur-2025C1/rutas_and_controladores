# Rutas y Controladores

### Creamos estructura con Sequelize-Cli

Ejecutamos **npx sequelize-cli init** para que se nos cree la estructura con las carpetas básicas.

```plaintext
📂 data/
📂 db/
 ┣ 📂 config/
 ┣ 📂 migrations/
 ┣ 📂 models/
 ┣ 📂 seeders/
📄 index.js
📄 package.json
```

 Agregamos la caperta routes y controllers por fuera de la carpeta db

```plaintext
 📂 controllers/
 📂 data/
 📂 db/
 ┣ 📂 config/
 ┣ 📂 migrations/
 ┣ 📂 models/
 ┣ 📂 seeders/
 📂 routes/
 📄 index.js
 📄 package.json
```

#### Los controladores (controllers/): contienen la lógica de cada acción (listar, crear, actualizar, eliminar, etc.).  
Ejemplo (userControllers.js):
``` js
const getUser = async (req, res) => {
  res.status(200).json(await User.findAll({}));
};
```
  
#### En rutas (routes/): definen los endpoints y usan los controladores.  
Ejemplo (userRoutes.js):
``` js
const controller = require("../controllers/userController");
  
route.get("/", controller.getUser);
route.get("/:id", controller.getUserById);  
```  
  
#### Las rutas creadas las debemos importar en index.js del proyecto e indicarle a la aplicación que las use con una URL base que definimos acompañada de las rutas generadas  

```js
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);
```      
#### Agregamos modelo con el comando Sequelize-Cli  
Ejecutamos el comando **npx sequelize-cli model:generate --name User --atributtes "userName:string, edad:integer, enabled:boolean"**  
De esta forma genera automáticamente un archivo en la carpeta models/ llamado user.js, que contiene el modelo User con los siguientes atributos:  
- **`userName`**: tipo `string`
- **`edad`**: tipo `integer`
- **`enabled`**: tipo `boolean`
  

