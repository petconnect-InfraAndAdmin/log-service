# Log Service – PetConnect

Microservicio para almacenar logs enviados por otros microservicios.

## Endpoints

| Método | Ruta              | Descripción                     |
|--------|-------------------|----------------------------------|
| POST   | /api/v1/logs      | Crear nuevo log                 |
| GET    | /api/v1/logs      | Obtener últimos 100 logs        |

### Ejemplo de log (JSON)

```json
{
  "service": "auth-service",
  "level": "error",
  "message": "Error al autenticar usuario",
  "metadata": {
    "userId": "12345"
  }
}
