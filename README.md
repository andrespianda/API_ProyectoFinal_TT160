# ⚙️ Backend - Proyecto Resolución 247 de 2016 - Cuenta de Alto Costo (CAC) 

Este backend gestiona la captura, validación y almacenamiento de datos relacionados con casos de cáncer en Colombia, cumpliendo con lo establecido en la **Resolución 247 de 2016** de la Cuenta de Alto Costo (CAC).

---

## 📋 Descripción
La **Resolución 247 de 2016** define los formatos y variables que deben reportar las EPS y demás entidades para el seguimiento de cáncer en Colombia.  
Este backend:
- 📥 Recibe datos enviados desde el frontend.
- 📑 Valida que cumplan con la estructura exigida.
- 💾 Guarda la información en MongoDB.
- 🔍 Permite listar y actualizar registros.

---

## 🛠️ Tecnologías utilizadas
- **Express** 
- **Mongoose** 
- **CORS** 
- **Dotenv** 

---

## 📦 1️⃣ Instalación y Configuración

### Instalar dependencias
En la carpeta del backend, ejecutar:
```bash
npm install

## 2️⃣ Configurar variables de entorno
Crea un archivo **.env** en la raíz del backend con el contenido de las credenciales necesarias.


## 3️⃣ El backend quedará disponible en:

http://localhost:3005

## 4️⃣ Método	Ruta	Descripción
- **POST	/res247/crear**	-> Crea un nuevo registro de cáncer.
- **GET	/res247/lista**	-> Lista todos los registros almacenados.
- **PUT	/res247/actualizar/:id**	-> Modifica un registro existente por su ID.


