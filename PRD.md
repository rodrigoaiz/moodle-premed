# PRD - Moodle PreMed Platform
## Product Requirements Document

---

**Documento**: PRD-001 - Moodle PreMed Platform
**Versión**: 1.0
**Fecha**: 29 de Julio, 2025
**Autor**: Equipo de Desarrollo Moodle PreMed
**Estado**: Draft - En Desarrollo

---

## 📋 Resumen Ejecutivo

### Visión del Producto
Desarrollar una plataforma educativa integral para la formación médica pre-universitaria que combine la funcionalidad robusta de Moodle LMS con una experiencia de usuario moderna y unificada a través de un portal construido en Astro, implementando autenticación SSO para una experiencia fluida.

### Objetivos del Negocio
- **Primario**: Crear una plataforma educativa especializada en medicina que mejore la experiencia de aprendizaje de estudiantes pre-universitarios
- **Secundario**: Establecer una arquitectura escalable y moderna que permita futuras expansiones
- **Terciario**: Implementar un sistema de autenticación unificado que simplifique el acceso a los recursos educativos

### Métricas de Éxito
- **Funcional**: 100% de funcionalidades core implementadas y funcionando
- **Performance**: Tiempo de carga < 3 segundos para páginas principales
- **Seguridad**: Sistema de autenticación SSO funcionando sin vulnerabilidades críticas
- **Usabilidad**: Portal responsive funcionando en dispositivos móviles y desktop

---

## 🎯 Definición del Producto

### Propuesta de Valor
**Moodle PreMed** es una plataforma que unifica la potencia de Moodle LMS con una interfaz moderna y especializada para educación médica, ofreciendo:
- Experiencia de usuario moderna y intuitiva
- Acceso unificado mediante SSO
- Contenido especializado en medicina pre-universitaria
- Arquitectura escalable y mantenible

### Audiencia Objetivo

#### Usuarios Primarios
- **Estudiantes Pre-Med**: Personas preparándose para ingresar a facultades de medicina
- **Instructores/Profesores**: Educadores especializados en ciencias médicas
- **Administradores Educativos**: Personal que gestiona el contenido y usuarios de la plataforma

#### Usuarios Secundarios
- **Desarrolladores**: Equipo técnico que mantiene y expande la plataforma
- **Administradores de Sistemas**: Personal responsable de la infraestructura

### Casos de Uso Principales

#### CU-001: Acceso Unificado al Sistema
**Actor**: Estudiante/Instructor
**Flujo Principal**:
1. Usuario accede al portal principal (Astro)
2. Hace clic en "Iniciar Sesión"
3. Sistema SSO maneja la autenticación
4. Usuario es redirigido al dashboard personalizado
5. Puede acceder a Moodle sin autenticación adicional

**Criterios de Aceptación**:
- SSO funciona sin errores
- No se requiere doble autenticación
- Sesión persiste entre servicios

#### CU-002: Navegación de Cursos
**Actor**: Estudiante
**Flujo Principal**:
1. Usuario autenticado accede al catálogo de cursos desde el portal
2. Explora cursos disponibles con filtros y búsqueda
3. Selecciona un curso de interés
4. Es redirigido automáticamente a Moodle con sesión activa
5. Comienza el curso sin interrupciones

**Criterios de Aceptación**:
- Catálogo muestra todos los cursos disponibles
- Filtros funcionan correctamente
- Redirección a Moodle es transparente

#### CU-003: Gestión de Perfil Unificado
**Actor**: Usuario (cualquier rol)
**Flujo Principal**:
1. Usuario accede a su perfil desde el portal
2. Modifica información personal
3. Cambios se sincronizan automáticamente con Moodle
4. Usuario ve datos actualizados en ambos sistemas

**Criterios de Aceptación**:
- Sincronización bidireccional de datos
- Cambios reflejados en tiempo real
- No inconsistencias entre sistemas

---

## 🛠️ Especificaciones Técnicas

### Arquitectura del Sistema

#### Frontend
- **Framework**: Astro 4.16+
- **Función**: Portal principal, landing pages, dashboard de usuario
- **Responsabilidades**:
  - Interfaz de usuario moderna
  - Catálogo de cursos
  - Dashboard personalizado
  - Perfil de usuario
  - Páginas informativas

#### Backend LMS
- **Plataforma**: Moodle LMS (latest stable)
- **Función**: Gestión de cursos y contenido educativo
- **Responsabilidades**:
  - Gestión de cursos y lecciones
  - Sistema de evaluaciones
  - Foros y comunicación
  - Calificaciones y progreso
  - Gestión de archivos y recursos

#### Servicio SSO
- **Framework**: Express.js + Node.js
- **Función**: Autenticación unificada
- **Responsabilidades**:
  - OAuth2 flow completo
  - Gestión de sesiones
  - Middleware de autenticación
  - APIs de validación de usuarios

#### Infraestructura
- **Containerización**: Docker + Docker Compose
- **Proxy**: Nginx (reverse proxy y load balancer)
- **Base de Datos**: MySQL 8.0
- **Cache**: Redis
- **Email**: MailHog (desarrollo) / SMTP (producción)

### Stack Tecnológico Detallado

```yaml
Frontend:
  - Framework: Astro 4.16+
  - Runtime: Node.js 18+
  - Package Manager: npm
  - Styling: CSS Modules / Tailwind CSS (TBD)

Backend:
  - LMS: Moodle (PHP 8.1+)
  - SSO Service: Express.js + Node.js 18+
  - Database: MySQL 8.0
  - Cache: Redis 7+

DevOps:
  - Containers: Docker + Docker Compose
  - Web Server: Nginx
  - Environment: Linux (production)
  - Monitoring: TBD (Prometheus + Grafana)
```

### Integración entre Servicios

#### Portal Astro ↔ SSO Backend
- **Protocolo**: HTTP/HTTPS REST API
- **Autenticación**: JWT tokens
- **Endpoints principales**:
  - `POST /auth/login` - Iniciar sesión
  - `POST /auth/logout` - Cerrar sesión
  - `GET /auth/validate` - Validar token
  - `GET /auth/user` - Datos de usuario

#### SSO Backend ↔ Moodle
- **Protocolo**: OAuth2 + Moodle Web Services API
- **Configuración**: Plugin OAuth2 en Moodle
- **Funciones**:
  - Autenticación de usuarios
  - Sincronización de datos de perfil
  - Gestión de sesiones unificadas

#### Portal Astro ↔ Moodle
- **Protocolo**: Moodle Web Services API
- **Función**: Obtener datos de cursos para mostrar en el portal
- **APIs utilizadas**:
  - `core_course_get_courses` - Lista de cursos
  - `core_user_get_users` - Información de usuarios
  - `core_grades_get_grades` - Calificaciones

---

## 🎨 Especificaciones de Diseño y UX

### Principios de Diseño
1. **Simplicidad**: Interfaz limpia y fácil de navegar
2. **Consistencia**: Elementos de UI uniformes entre secciones
3. **Accesibilidad**: Cumplir con estándares WCAG 2.1
4. **Responsividad**: Funcionar perfectamente en móvil, tablet y desktop
5. **Performance**: Carga rápida y transiciones fluidas

### Estructura de Navegación

#### Portal Principal (Astro)
```
Homepage
├── Header
│   ├── Logo
│   ├── Navegación Principal
│   └── User Menu / Login
├── Hero Section
├── Courses Preview
├── Features
└── Footer

Dashboard (Autenticado)
├── Header (con user menu)
├── Sidebar Navigation
│   ├── My Courses
│   ├── Browse Courses
│   ├── Profile
│   └── Settings
├── Main Content Area
│   ├── Quick Stats
│   ├── Recent Activity
│   └── Recommended Courses
└── Footer
```

#### Flujo de Páginas Principales
1. **Landing Page** → Información del proyecto y call-to-action
2. **Login/Register** → Formularios de autenticación
3. **Dashboard** → Vista personalizada post-login
4. **Course Catalog** → Listado y filtros de cursos
5. **Profile** → Gestión de perfil de usuario
6. **Moodle Integration** → Transición transparente a Moodle

### Responsive Design Requirements
- **Mobile First**: Diseño optimizado para móviles (320px+)
- **Tablet**: Adaptación para tablets (768px+)
- **Desktop**: Experiencia completa en desktop (1024px+)
- **Large Screens**: Optimización para pantallas grandes (1440px+)

---

## 🔐 Requisitos de Seguridad

### Autenticación y Autorización
- **Método**: OAuth2 + JWT tokens
- **Política de Contraseñas**: Mínimo 8 caracteres, mayúsculas, minúsculas, números
- **Sesiones**: Timeout automático después de inactividad
- **Roles**: Estudiante, Instructor, Administrador

### Protección de Datos
- **Encriptación**: HTTPS en todos los endpoints
- **Base de Datos**: Contraseñas hasheadas con bcrypt
- **Variables de Entorno**: Secretos en archivos .env separados
- **CORS**: Configurado adecuadamente para permitir comunicación entre servicios

### Cumplimiento
- **GDPR**: Consideraciones para protección de datos (para uso futuro en Europa)
- **Logs**: Sistema de logging para auditoría de accesos
- **Backup**: Políticas de respaldo automático de datos críticos

---

## 📊 Requisitos Funcionales Detallados

### RF-001: Sistema de Autenticación SSO
**Prioridad**: Alta
**Descripción**: Implementar autenticación única que permita acceso a portal y Moodle
**Criterios de Aceptación**:
- Usuario se autentica una sola vez
- Sesión persiste entre servicios
- Logout cierra sesión en todos los servicios
- Tokens JWT con expiración configurable

### RF-002: Portal de Cursos
**Prioridad**: Alta
**Descripción**: Catálogo de cursos integrado que muestre información de Moodle
**Criterios de Aceptación**:
- Lista todos los cursos disponibles
- Filtros por categoría, dificultad, duración
- Búsqueda por texto
- Enlaces directos a cursos en Moodle

### RF-003: Dashboard Personalizado
**Prioridad**: Media
**Descripción**: Panel personalizado con información relevante del usuario
**Criterios de Aceptación**:
- Cursos actuales del usuario
- Progreso de cursos
- Próximas fechas de entrega
- Actividad reciente

### RF-004: Gestión de Perfil
**Prioridad**: Media
**Descripción**: Interfaz para gestionar información personal
**Criterios de Aceptación**:
- Editar información básica
- Cambiar contraseña
- Subir foto de perfil
- Sincronización con Moodle

### RF-005: Sistema de Notificaciones
**Prioridad**: Baja
**Descripción**: Notificaciones unificadas entre sistemas
**Criterios de Aceptación**:
- Notificaciones de nuevos cursos
- Recordatorios de tareas
- Mensajes del sistema
- Configuración de preferencias

---

## 📈 Requisitos No Funcionales

### Performance
- **Tiempo de Carga**: < 3 segundos para páginas principales
- **Time to First Byte (TTFB)**: < 500ms
- **Concurrent Users**: Soporte para 100+ usuarios concurrentes
- **Database Queries**: Optimización para < 100ms promedio

### Escalabilidad
- **Horizontal Scaling**: Arquitectura preparada para múltiples instancias
- **Load Balancing**: Nginx configurado para distribución de carga
- **Database**: Índices optimizados para consultas frecuentes
- **Cache**: Redis para reducir carga en base de datos

### Disponibilidad
- **Uptime**: 99.5% durante horarios de desarrollo
- **Recovery Time**: < 15 minutos en caso de fallas
- **Backup**: Respaldos automáticos diarios
- **Health Checks**: Monitoreo automático de servicios

### Usabilidad
- **Cross-browser**: Soporte para Chrome, Firefox, Safari, Edge
- **Mobile Support**: Funcionalidad completa en dispositivos móviles
- **Accessibility**: Cumplir WCAG 2.1 nivel AA
- **Loading States**: Indicadores claros durante procesos

---

## 🗓️ Roadmap y Fases de Desarrollo

### Fase 1: Fundación (Semanas 1-4)
**Objetivo**: Establecer infraestructura base y servicios core
**Entregables**:
- [ ] Docker Compose funcionando completamente
- [ ] Moodle instalado y configurado
- [ ] SSO Backend con endpoints básicos
- [ ] Portal Astro con páginas básicas
- [ ] Base de datos configurada y funcionando

**Criterios de Finalización**:
- Todos los servicios inician sin errores
- Comunicación entre contenedores establecida
- Health checks funcionando

### Fase 2: Autenticación y Seguridad (Semanas 5-8)
**Objetivo**: Implementar sistema SSO completo
**Entregables**:
- [ ] OAuth2 flow completo implementado
- [ ] Plugin OAuth2 configurado en Moodle
- [ ] JWT tokens funcionando
- [ ] Middleware de autenticación
- [ ] Páginas de login/registro en portal

**Criterios de Finalización**:
- Usuario puede autenticarse y acceder a ambos sistemas
- Sesión persiste entre servicios
- Logout funciona correctamente

### Fase 3: Integración Portal-Moodle (Semanas 9-12)
**Objetivo**: Conectar portal con datos de Moodle
**Entregables**:
- [ ] API bridge para datos de cursos
- [ ] Catálogo de cursos en portal
- [ ] Dashboard con información de usuario
- [ ] Perfil de usuario editable
- [ ] Redirección transparente a Moodle

**Criterios de Finalización**:
- Portal muestra datos reales de Moodle
- Usuario puede navegar sin fricciones
- Sincronización de datos funcionando

### Fase 4: UI/UX y Optimización (Semanas 13-16)
**Objetivo**: Pulir experiencia de usuario y performance
**Entregables**:
- [ ] Diseño responsive completo
- [ ] Optimización de performance
- [ ] Mejoras de accesibilidad
- [ ] Testing exhaustivo
- [ ] Documentación de usuario

**Criterios de Finalización**:
- Sistema funciona en todos los dispositivos objetivo
- Performance cumple métricas establecidas
- Testing suite completo pasa al 100%

---

## 🧪 Plan de Testing

### Testing Funcional
- **Unit Tests**: Cada componente y función crítica
- **Integration Tests**: Comunicación entre servicios
- **End-to-End Tests**: Flujos completos de usuario
- **API Tests**: Todos los endpoints del SSO backend

### Testing No Funcional
- **Performance Tests**: Load testing con k6
- **Security Tests**: Vulnerabilidades comunes (OWASP Top 10)
- **Accessibility Tests**: Compliance con WCAG 2.1
- **Cross-browser Tests**: Compatibilidad en navegadores objetivo

### Herramientas de Testing
- **Frontend**: Vitest + Testing Library
- **Backend**: Jest + Supertest
- **E2E**: Playwright
- **Performance**: k6
- **Security**: OWASP ZAP

---

## 📋 Criterios de Aceptación del Producto

### Criterios Funcionales Mínimos
- [ ] Usuario puede registrarse y autenticarse
- [ ] SSO funciona entre portal y Moodle
- [ ] Portal muestra catálogo de cursos de Moodle
- [ ] Usuario puede acceder a cursos desde el portal
- [ ] Perfil de usuario es editable y se sincroniza
- [ ] Sistema funciona en móvil y desktop

### Criterios de Calidad
- [ ] Performance cumple métricas establecidas
- [ ] No vulnerabilidades de seguridad críticas
- [ ] Código cumple estándares establecidos
- [ ] Documentación técnica completa
- [ ] Testing coverage > 80%

### Criterios de Despliegue
- [ ] Sistema deployable con un comando
- [ ] Variables de entorno documentadas
- [ ] Backup y recovery procedures definidos
- [ ] Monitoring básico implementado
- [ ] Logs estructurados y accesibles

---

## 🤝 Stakeholders y Roles

### Equipo de Desarrollo
- **Tech Lead**: Arquitectura y decisiones técnicas
- **Frontend Developer**: Portal Astro y UI/UX
- **Backend Developer**: SSO backend y integraciones
- **DevOps Engineer**: Infraestructura y deployment
- **QA Engineer**: Testing y calidad

### Stakeholders de Negocio
- **Product Owner**: Requisitos y priorización
- **Educational Content Manager**: Estructura de cursos
- **System Administrator**: Configuración de Moodle
- **End Users**: Estudiantes e instructores (feedback)

---

## 📚 Documentación y Entregables

### Documentación Técnica
- [x] PRD (este documento)
- [ ] Arquitectura Técnica Detallada
- [ ] API Documentation (OpenAPI/Swagger)
- [ ] Database Schema Documentation
- [ ] Deployment Guide
- [ ] Troubleshooting Guide

### Documentación de Usuario
- [ ] User Manual (Estudiantes)
- [ ] Instructor Guide
- [ ] Administrator Guide
- [ ] FAQ y Knowledge Base

### Documentación de Desarrollo
- [ ] Contribution Guidelines
- [ ] Code Style Guide
- [ ] Git Workflow Documentation
- [ ] Testing Guidelines

---

## 🔄 Proceso de Cambios y Actualizaciones

### Control de Versiones
- **Semantic Versioning**: vMajor.Minor.Patch
- **Git Flow**: Feature branches, develop, main
- **Release Process**: Tags y release notes

### Gestión de Cambios en PRD
- **Versioning**: Este documento seguirá versionado semántico
- **Approval Process**: Cambios requieren aprobación del Product Owner
- **Change Log**: Documentar todas las modificaciones
- **Stakeholder Notification**: Comunicar cambios relevantes

### Feedback y Iteración
- **User Feedback**: Recolección continua durante desarrollo
- **Retrospectives**: Cada fase incluye retrospectiva
- **Metrics Review**: Evaluación regular de métricas de éxito
- **Roadmap Updates**: Ajustes basados en aprendizajes

---

## 📊 Métricas y KPIs

### Métricas Técnicas
- **Uptime**: > 99.5%
- **Response Time**: < 3s para páginas principales
- **Error Rate**: < 1% para operaciones críticas
- **Test Coverage**: > 80%

### Métricas de Usuario
- **User Registration Rate**: Conversión de visitantes a usuarios
- **Session Duration**: Tiempo promedio en la plataforma
- **Course Completion Rate**: Porcentaje de cursos completados
- **User Satisfaction**: Score basado en feedback

### Métricas de Negocio
- **Active Users**: Usuarios activos diarios/semanales/mensuales
- **Course Engagement**: Interacción con contenido de cursos
- **Platform Growth**: Crecimiento de usuarios y contenido
- **System Utilization**: Uso de recursos de infraestructura

---

**Fin del Documento PRD-001**

---

*Este documento es un working document que evolucionará durante el desarrollo del proyecto. Todas las secciones marcadas como TBD (To Be Determined) serán completadas durante las fases correspondientes del desarrollo.*

**Última actualización**: 29 de Julio, 2025
**Próxima revisión**: 5 de Agosto, 2025
**Estado**: Draft - Pendiente de aprobación final
