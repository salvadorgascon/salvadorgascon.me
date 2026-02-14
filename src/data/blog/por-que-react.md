---
author: Salvador Gascon
pubDatetime: 2026-02-14T09:07:29Z
title: Por qué elegí React y Typescript para un SaaS
slug: por-que-react-y-typescript
featured: false
draft: false
tags:
  - react
  - typescript
  - saas
  - b2b  
  - logistica
  - 3pl
  - dock-ops
description: "Por qué elegí React y Typescript para un SaaS B2B de operaciones"
---

Hace poco me vi decidiendo algo que parece “de frontend”, pero en realidad es de negocio: 

**¿qué me deja sacar pantallas rápido sin vivir con miedo a tocar nada?**

Estoy construyendo un SaaS B2B para operaciones (dock appointments, incidencias, evidencias, penalizaciones). 

Aquí el frontend no es “pintar botones”: es donde se decide si un operador trabaja fluido o si acaba volviendo al Excel.

En el [post anterior](/entradas/por-que-net) ya conté el stack de **backend** y el **hosting**. 

Esto es el complemento: por qué me quedé con **React + TypeScript + Tailwind CSS**.

## El momento en que lo vi claro

No fue por un debate de frameworks. 

Fue cuando empecé a listar, en serio, las pantallas y flujos que iba a necesitar:

- listado con filtros y acciones rápidas
- detalle con historial/timeline
- formularios con validación y estados intermedios
- adjuntos y evidencias

En cuanto aparecieron esas piezas, la decisión dejó de ser “qué me apetece” y pasó a ser “qué me evita líos cuando esto crezca”.

## Qué necesito que haga el frontend

Mi escenario no es una landing (página de ventas). 

Es una aplicación para el día a día de operaciones, con prisas y cambios constantes:
- Formularios largos (citas, incidencias)
- Roles y permisos (operaciones vs administración vs transportista)
- Estados reales (creada → confirmada → en muelle → con incidencia → cerrada)
- Evidencias (fotos, PDFs, timestamps)
- Tablas y filtros que la gente usa “a fuego”
- Mucho “lo toco y cambia todo” (reagendar, reasignar muelle, justificar esperas)

Conclusión: necesito que el frontend soporte **estado, UI dinámica, componentes reutilizables y cambios constantes** sin volverse frágil.

## Cómo decidí (y qué intenté evitar)

Elegí con 5 criterios prácticos:
1. **Iterar rápido sin romper cosas**
2. **Mantenibilidad cuando crece** (aunque sea side project)
3. **Ecosistema** (formularios, tablas, validación, auth)
4. **Que pueda delegarlo algún día**
5. **Encaje limpio con el backend y el despliegue** (que ya expliqué)

Y, sobre todo, quería evitar dos trampas:
- el “setup infinito”
- y el “ya lo arreglamos luego” (spoiler: luego nunca llega)

## Por qué React + TypeScript + Tailwind CSS

### 1) TypeScript me reduce bugs tontos (los caros)

En un SaaS B2B, los bugs que cuestan dinero rara vez son que se caiga la aplicación. 

Suelen ser:
- un dato que llega vacío y rompe un flujo
- un estado intermedio que existe en la vida real (y no en tu cabeza)
- un permiso mal aplicado
- un cambio en los datos que devuelve el backend que te deja una pantalla incoherente

TypeScript no te salva de todo, pero reduce mucho el “**esto funcionaba ayer**”.

Y esa seguridad se amortiza justo cuando más duele: cuando ya hay varias pantallas conectadas entre sí.

### 2) React me encaja para pantallas “vivas”

En una aplicación de operaciones voy a vivir en:
- componentes reutilizables (badges de estado, modales, drawers)
- formularios (validación, pasos, autosave)
- estado (datos del servidor + estado de UI)

React me da un modelo mental estable: **la UI es una función del estado**.

Para un producto en construcción, eso vale más que cualquier debate filosófico.

### 3) Tailwind me da velocidad y consistencia sin montar un design system

Lo que no quería era abrir dos frentes a la vez: producto + “arquitectura CSS”.

Con Tailwind consigo:
- layouts consistentes
- spacing y tipografía coherentes
- iteración rápida sin pelearme con nombres de clases

En un B2B, el objetivo es “claro y usable”, no “premio de diseño”. 

Tailwind me ayuda a llegar ahí antes.

### 4) Ecosistema para no reinventar lo aburrido

No quiero perder semanas montando infraestructura de frontend:
- rutas
- gestión y caché de datos del servidor
- formularios
- tablas
- validación
- accesibilidad

En React hay muchas piezas probadas y un montón de ejemplos de apps B2B reales.

Eso reduce incertidumbre. 

Y, para mí, eso es velocidad.

### 5) Si mañana pivoto, el combo sigue sirviendo

Estoy explorando un nicho (dock ops). 

Si pivotara, **React + TS + Tailwind** me sigue valiendo para casi cualquier B2B.

Stack defensivo y reutilizable.

## Por qué descarté las alternativas

### Opción 1: Razor + JavaScript

Ventaja: todo “en casa” si vienes de ASP.NET.

Costes ocultos que ya he visto demasiadas veces:
- JS pegado a vistas que se vuelve inmanejable
- reutilización pobre (lo mismo repetido en 4 sitios)
- estado complejo a base de parches
- interactividad moderna convertida en pelea constante

Razor lo veo bien para backoffice simple y pantallas estáticas.

Para pantallas con estado y mucha interacción, a mí me sale caro.

### Opción 2: Vue + TypeScript

Vue me gusta y podría haberlo hecho.

Pero aquí decidí por reducción de riesgo:
- en React encuentro más “caminos estándar” para tablas/formularios/patrones B2B
- en mi contexto hay más ejemplos, integraciones y gente disponible si algún día necesito ayuda

No es que Vue sea peor. 

Es que React me quita dudas.

### Opción 3: Vue + JavaScript

Si ya pago el coste de framework, no quiero renunciar a TypeScript.

En un producto que cambia cada semana, **JS puro se convierte en deuda**.

### Opción 4: React + JavaScript

El mismo argumento: si estoy en React, TypeScript es el cinturón de seguridad.

Puedo empezar sin TS… pero sé cómo acaba: “ya lo metemos luego”.

Y luego nunca llega.

## Lo bueno y lo malo de esta elección

Gano:
- cambios rápidos con menos sustos
- refactor más seguro
- componentes reutilizables de verdad
- ecosistema para avanzar sin inventar nada
- consistencia visual sin pelearme con CSS

Pierdo:
- curva inicial (TS + tooling + aprender Tailwind bien)
- más piezas que coordinar que con Razor
- riesgo de sobre-ingeniería si me emociono
- Tailwind puede acabar en “sopa de clases” si no pongo límites

La clave: **este stack no te obliga a complicarte, pero te lo permite**. 

Y ahí es donde me tengo que poner frenos.

## Cuándo esta decisión falla

Si estás en alguno de estos casos, yo no elegiría React + TS + Tailwind:
- 3 pantallas y un formulario, y se acabó
- equipo 100% .NET y cero ganas de tocar frontend moderno
- app interna, de baja rotación, y no vas a iterar rápido

Ahí, Razor (o algo muy simple) puede ganar por coste y foco.

## Qué haría distinto para no liarla

Reglas desde el día 1:
1. Pantallas reales primero: nada de demos bonitas
2. Abstracciones tarde: si se repite 3 veces, entonces componente
3. Límites a Tailwind: si una pieza se repite, componente y fuera
4. Una librería para formularios y otra para gestionar datos del servidor (y ya)
5. Un patrón repetible “pantalla + hooks + servicios”

Menos arquitectura. 

Más entregar.