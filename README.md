# Convertidor WebP

Aplicacion web construida con Next.js, React y Tailwind para convertir imagenes a `.webp` con una interfaz simple y una base pensada para crecer en un repositorio publico.

## Principios del proyecto

- Arquitectura por capas: `presentation`, `application`, `domain` e `infrastructure`.
- Clean Code: modulos pequenos, nombres explicitos y responsabilidades delimitadas.
- SOLID en la practica: la UI no conoce detalles del navegador ni de futuros proveedores externos.
- Seguridad para open source: los secretos no viven en el codigo ni en el repositorio.

## Estructura

```text
src/
  modules/
    webp-converter/
      application/
      domain/
      infrastructure/
      presentation/
  shared/
    config/
      env/
      firebase/
```

## Variables de entorno

1. Duplica `.env.example` como `.env.local`.
2. Coloca solo variables publicas con prefijo `NEXT_PUBLIC_` si realmente deben usarse en cliente.
3. Manten las credenciales sensibles de Firebase Admin solo del lado servidor.

## Firebase y repositorio publico

La configuracion publica del SDK web de Firebase no se considera un secreto por si sola. Lo sensible son las credenciales privilegiadas, por ejemplo claves privadas de Admin SDK, tokens internos o secretos de terceros. Este proyecto deja esa separacion preparada para no mezclar cliente con servidor.

## Scripts

- `npm run dev`
- `npm run lint`
- `npm run build`
