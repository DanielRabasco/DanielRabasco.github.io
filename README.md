# Nombre de tu Proyecto

## Configuración y Ejecución con Docker Compose

1.  **Instala Docker y Docker Compose**: Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
    
2.  **Clona el repositorio**:
    ```bash
    git clone [https://github.com/DanielRabasco/DanielRabasco.github.io.git](https://github.com/DanielRabasco/DanielRabasco.github.io.git)
    cd DanielRabasco.github.io
    ```

3.  **Configura las variables de entorno**:
    * Este proyecto requiere variables de entorno para la conexión a la base de datos.
    * Crea un archivo llamado `.env` en la raíz del proyecto.
    * Copia el contenido de `.env.example` en tu nuevo archivo `.env` y sustituye los valores de ejemplo por los tuyos.
    
    _Ejemplo de `.env`_
    ```ini
    DB_USER=mi_usuario_db
    DB_PASSWORD=mi_contraseña_segura
    DB_DATABASE=mi_base_de_datos
    DB_HOST=db
    DB_PORT=5432
    ```

4.  **Levanta la aplicación**:
    * Ejecuta el siguiente comando para construir las imágenes y arrancar los contenedores. La primera vez puede tardar unos minutos.
    ```bash
    docker-compose up --build
    ```

5.  **Accede a la aplicación**:
    * Una vez que los contenedores estén en funcionamiento, tu portfolio estará disponible en:
    [http://localhost:3000](http://localhost:3000)