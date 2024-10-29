# Challenge: Gestión Eldar

En el marco del challenge, se construyó una aplicación de gestión de proyectos desarrollada en **ReactJS** con **TypeScript** y utilizando **Material UI** para la interfaz de usuario. La aplicación permite la administración de proyectos en las diferentes áreas de la empresa, con roles de usuario y permisos específicos.

## Descripción

La aplicación permite gestionar proyectos en las áreas de **Investigación y Desarrollo (R+D)**, **Calidad de Software (Software Quality)**, **Plataforma POS (POS Platform)**, **Ingeniería Full Stack (Full Stack Engineering)**, **E-Commerce**, y **Lenguajes y Tecnologías**. Los usuarios pueden visualizar el listado de los proyectos para cada área junto con un detalle, mientras que los administradores pueden además editarlo y eliminarlos.

## Características

- **Roles y Permisos**:
  - **Admin**: Usuario con permisos de administración, puede editar y eliminar proyectos.
  - **User**: Usuario con permisos de solo lectura, puede visualizar los proyectos en todas las áreas pero no realizar modificaciones.
  
- **Gestión de Proyectos**:
  - Listado de proyectos junto con su área asignada, título, descripción, responsable y nivel de progreso.
  - Edición de proyectos existentes.
  - Vista de detalles del proyecto.
  
- **Autenticación**:
  - La aplicación tiene dos usuarios predefinidos para el ingreso inicial:
    - **Admin**:
      - Username: `eldarAdmin`
      - Password: `challenge`
    - **User**:
      - Username: `eldarUser`
      - Password: `challenge`

## Instalación

Para ejecutar este proyecto localmente:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
2. Instala las dependencias:
    ```bash
    npm install

3. Inicia la aplicación:
    ```bash
    npm run start
    
4. Ingresar a [text](http://localhost:3000)

## Uso de la Aplicación

### Ingreso

Ingresar con las credenciales de cualquiera de los dos usuarios mencionados anteriormente.

### Navegación por Roles

- **eldarAdmin**: Este usuario tendrá acceso a todas las funciones de la aplicación, incluyendo la edición y eliminación de proyectos.
- **eldarUser**: Este usuario podrá visualizar proyectos en cada área, pero no realizar modificaciones.

## Estructura del Proyecto

- `src/components`: Componentes reutilizables de la aplicación.
- `src/pages`: Vistas principales para cada área de la aplicación.
- `src/routes`: Configuración de rutas y autenticación.
- `src/services`: Servicios para la gestión de datos de proyectos.
