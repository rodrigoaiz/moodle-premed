# Moodle PreMed - Plataforma de Educación Médica 🩺

## 📋 Descripción del Proyecto

**Moodle PreMed** es una plataforma educativa integral diseñada específicamente para la formación médica pre-universitaria. El proyecto combina la robustez de Moodle LMS con una interfaz moderna construida en Astro, integrando un sistema de autenticación SSO (Single Sign-On) para una experiencia de usuario fluida y unificada.

### 🏗️ Arquitectura del Sistema

El proyecto está diseñado como una aplicación multi-container utilizando Docker Compose, con los siguientes componentes principales:

- **🌐 Frontend Portal**: Aplicación Astro que sirve como punto de entrada principal
- **📚 Moodle LMS**: Sistema de gestión de aprendizaje para cursos y contenido educativo
- **🔐 SSO Backend**: Servicio de autenticación única para integrar Moodle con el portal
- **🗄️ Base de Datos**: MySQL 8.0 para persistencia de datos de Moodle
- **⚡ Redis**: Cache distribuido para optimización de rendimiento
- **🌉 Nginx**: Proxy inverso que maneja el enrutamiento entre servicios
- **📧 MailHog**: Simulador de correo para desarrollo

## 🚀 Tecnologías Utilizadas

### Frontend

- **Astro 4.16+**: Framework moderno para sitios web estáticos y dinámicos
- **Node.js**: Runtime para el desarrollo frontend

### Backend

- **Moodle LMS**: Plataforma de aprendizaje open-source
- **PHP-FPM**: Procesador PHP para Moodle
- **Express.js**: Framework minimalista para el backend SSO
- **Node.js**: Runtime para servicios backend

### Infraestructura

- **Docker & Docker Compose**: Containerización y orquestación
- **Nginx**: Servidor web y proxy inverso
- **MySQL 8.0**: Base de datos relacional
- **Redis**: Store de datos en memoria para cache

## 🛠️ Estructura del Proyecto

```text
moodle-premed/
├── 📁 astro-app/              # Aplicación frontend Astro
│   ├── Dockerfile.dev         # Container de desarrollo Astro
│   ├── package.json          # Dependencias y scripts del frontend
│   └── src/                  # Código fuente del portal
├── 📁 moodle/                 # Instalación completa de Moodle
│   ├── Dockerfile.moodle     # Container PHP-FPM para Moodle
│   ├── config.php           # Configuración de Moodle
│   └── [moodle-core-files]  # Archivos del núcleo de Moodle
├── 📁 sso-backend/            # Servicio de autenticación SSO
│   ├── Dockerfile           # Container del backend SSO
│   ├── server.js           # Servidor Express principal
│   └── package.json        # Dependencias del backend
├── 📁 nginx/                  # Configuración del proxy Nginx
│   └── conf.d/default.conf  # Reglas de enrutamiento
├── 📁 moodledata/            # Datos persistentes de Moodle
├── docker-compose.yml        # Orquestación de servicios
└── README.md                # Este archivo
```

## 🔧 Configuración e Instalación

### Prerrequisitos

- Docker Engine 20.10+
- Docker Compose 2.0+
- Puerto 4324 disponible en el host
- Al menos 4GB de RAM disponible

### 🚀 Inicio Rápido

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd moodle-premed
   ```

2. **Configurar variables de entorno**

   ```bash
   # Crear archivo .env en la carpeta moodle/
   cp moodle/.env.example moodle/.env
   # Editar las credenciales de base de datos y SSO
   ```

3. **Inicializar la aplicación**

   ```bash
   docker-compose up -d
   ```

4. **Verificar el estado de los servicios**

   ```bash
   docker-compose ps
   ```

5. **Acceder a la aplicación**

   - Portal principal: <http://localhost:4324>
   - Moodle: <http://localhost:4324/moodle>
   - SSO Backend: <http://localhost:3001>
   - MailHog: <http://localhost:8025>

## 🔗 URLs y Puertos

| Servicio | URL de Desarrollo | Puerto | Descripción |
|----------|------------------|--------|-------------|
| Portal Principal | <http://localhost:4324> | 4324 | Interfaz principal Astro |
| Moodle LMS | <http://localhost:4324/moodle> | 4324/moodle | Plataforma educativa |
| SSO Backend | <http://localhost:3001> | 3001 | API de autenticación |
| MailHog | <http://localhost:8025> | 8025 | Interfaz de correos |

## 📚 Documentación de APIs

### SSO Backend Endpoints

- `GET /health` - Health check del servicio
- `POST /auth/login` - Iniciar sesión (próximamente)
- `POST /auth/logout` - Cerrar sesión (próximamente)
- `GET /auth/callback` - Callback OAuth2 (próximamente)

## 🧪 Testing y Desarrollo

### Comandos de Desarrollo

```bash
# Iniciar servicios en modo desarrollo
docker-compose up

# Reconstruir containers después de cambios
docker-compose up --build

# Ver logs de un servicio específico
docker-compose logs -f astro-dev
docker-compose logs -f moodle-php
docker-compose logs -f sso-backend

# Ejecutar comandos dentro de containers
docker-compose exec astro-dev npm install
docker-compose exec moodle-php php -v
```

## 🔒 Seguridad

### Variables de Entorno Críticas

⚠️ **IMPORTANTE**: Antes de desplegar en producción, asegúrate de cambiar:

- `MYSQL_ROOT_PASSWORD`: Contraseña root de MySQL
- `MYSQL_PASSWORD`: Contraseña del usuario de Moodle
- `MOODLE_OAUTH_CLIENT_ID`: ID del cliente OAuth2
- `MOODLE_OAUTH_CLIENT_SECRET`: Secret del cliente OAuth2

## 📋 TODO List - Roadmap de Desarrollo

### 🚨 Prioridad Alta (Crítico)

- [ ] **Configuración de Producción**
  - [ ] Configurar HTTPS/SSL certificates
  - [ ] Implementar variables de entorno seguras
  - [ ] Configurar backup automático de base de datos
  - [ ] Optimizar configuración de Nginx para producción

- [ ] **Autenticación SSO Completa**
  - [ ] Implementar OAuth2 flow completo en SSO backend
  - [ ] Configurar plugin OAuth2 en Moodle
  - [ ] Integrar autenticación entre Astro y Moodle
  - [ ] Añadir middleware de validación de sesiones

- [ ] **Configuración de Base de Datos**
  - [ ] Completar instalación inicial de Moodle
  - [ ] Configurar usuarios y roles predeterminados
  - [ ] Importar estructura de cursos base
  - [ ] Configurar políticas de backup y recuperación

### 🔄 Prioridad Media (Funcionalidades Core)

- [ ] **Portal Astro - Desarrollo Frontend**
  - [ ] Diseñar e implementar página de inicio
  - [ ] Crear sistema de navegación principal
  - [ ] Desarrollar página de login/registro
  - [ ] Implementar dashboard de usuario
  - [ ] Añadir página de catálogo de cursos
  - [ ] Crear perfil de usuario

- [ ] **Integración Moodle-Portal**
  - [ ] Sincronizar datos de usuario entre sistemas
  - [ ] Implementar API bridge para datos de cursos
  - [ ] Crear widgets embebidos de Moodle en portal
  - [ ] Desarrollar sistema de notificaciones unificado

- [ ] **Mejoras de Infraestructura**
  - [ ] Implementar healthchecks para todos los servicios
  - [ ] Configurar logging centralizado
  - [ ] Añadir monitoring y métricas (Prometheus/Grafana)
  - [ ] Implementar CI/CD pipeline

### 🎨 Prioridad Baja (Mejoras y Optimizaciones)

- [ ] **UI/UX Improvements**
  - [ ] Implementar tema responsive completo
  - [ ] Añadir modo oscuro/claro
  - [ ] Optimizar experiencia móvil
  - [ ] Implementar Progressive Web App (PWA)

- [ ] **Funcionalidades Avanzadas**
  - [ ] Sistema de gamificación
  - [ ] Chat en tiempo real
  - [ ] Video conferencias integradas
  - [ ] Sistema de evaluación avanzado
  - [ ] Analytics y reportes de progreso

- [ ] **Performance y Escalabilidad**
  - [ ] Implementar CDN para assets estáticos
  - [ ] Optimizar queries de base de datos
  - [ ] Configurar cache distribuido avanzado
  - [ ] Load balancing para múltiples instancias

### 🧪 Testing y Calidad

- [ ] **Testing Suite**
  - [ ] Unit tests para SSO backend
  - [ ] Integration tests para el flow completo
  - [ ] E2E tests con Playwright/Cypress
  - [ ] Performance testing con k6

- [ ] **Documentación**
  - [ ] Guía de instalación detallada
  - [ ] Documentación de APIs
  - [ ] Manual de usuario final
  - [ ] Documentación de troubleshooting

### 🔧 DevOps y Mantenimiento

- [ ] **Automation**
  - [ ] Scripts de deployment automatizado
  - [ ] Backup automatizado de datos
  - [ ] Scripts de migración de BD
  - [ ] Monitoring automatizado de servicios

## 👥 Contribución

### Workflow de Desarrollo

1. Crear branch desde `main` para nuevas funcionalidades
2. Desarrollar y probar localmente con Docker Compose
3. Crear Pull Request con descripción detallada
4. Review de código y testing
5. Merge a `main` después de aprobación

### Convenciones de Código

- **JavaScript/TypeScript**: ESLint + Prettier
- **PHP**: PSR-12 coding standards
- **Git**: Conventional Commits format
- **Docker**: Multi-stage builds cuando sea posible

## 📞 Soporte

- **Issues**: Reportar bugs y solicitar funcionalidades en GitHub Issues
- **Documentación**: Wiki del proyecto para guías detalladas
- **Desarrollo**: Contactar al equipo de desarrollo para contribuciones

---

## 📄 Licencia

Este proyecto está bajo licencia [Especificar Licencia]. Ver archivo `LICENSE` para más detalles.

---

**Última actualización**: Julio 2025
