# Todoism - Repositorio de Pruebas

Este repositorio contiene pruebas automatizadas para la aplicación [Todoism](https://github.com/Jguerra47/todoism). Utiliza **Playwright** para la creación de pruebas de interfaz y automatización de flujos de usuario clave en la aplicación.

## Autor

Jguerra47

## Estructura del Proyecto

```plaintext
├── package-lock.json
├── package.json
├── pages
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── ToDoPage.ts
├── playwright.config.ts
└── tests
    └── todoism.spec.ts
```

- **package.json y package-lock.json**: Archivos de configuración para dependencias y scripts.
- **pages**: Componentes de página que representan diferentes secciones de la aplicación Todoism.
- **playwright.config.ts**: Configuración para Playwright, donde se definen las opciones y parámetros para las pruebas.
- **tests**: Contiene las pruebas para Todoism, actualmente en el archivo todoism.spec.ts, que ejecuta las pruebas principales para verificar la funcionalidad de la aplicación.

## Requisitos
Para ejecutar estas pruebas necesitas:

1. **Node.js** versión 14 o superior
2. **Playwright** como entorno de pruebas. Al instalar las dependencias, Playwright se encargará de instalar automáticamente los navegadores necesarios para las pruebas.

## Instalación
Clona el repositorio:
```bash
git clone https://github.com/Jguerra47/todoism-tests.git
```

Navega al directorio del repositorio:
```bash
cd todoism-tests
```

Instala las dependencias:
```bash
npm install
```

## Ejecución de las Pruebas
Para ejecutar todas las pruebas:

```bash
npx playwright test
```

Si deseas ejecutar pruebas específicas o ver la lista completa de comandos, puedes consultar la documentación de Playwright.

Este repositorio está diseñado para pruebas automatizadas de Todoism.






