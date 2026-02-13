---
author: Salvador Gascon
pubDatetime: 2026-02-13T18:07:29Z
title: Por qué elegí .NET para un SaaS
slug: por-que-net
featured: false
draft: false
tags:
  - dotnet
  - saas
  - b2b
  - azure
  - logistica
  - 3pl
  - dock-ops
description: "Por qué elegí .NET para un SaaS B2B de operaciones: menos fricción en integraciones, seguridad y trazabilidad. Y por qué descarté Rails, Java y PHP"
---

Hace muy poco me encontré con el típico dilema de side project que parece “técnico”… pero en realidad es de negocio: 


**¿con qué stack construyo el SaaS sin pegarme tiros en el pie dentro de 6 meses?**

Porque una cosa es “hacerlo funcionar” y otra muy distinta es **mantenerlo, venderlo y operarlo** cuando haya clientes, incidencias y presión.

**La frase final**: elegí .NET porque, para mi contexto, es la forma más rápida de llegar a un MVP sin hipotecar mantenimiento, observabilidad y seguridad.

No busco el stack tecnológico perfecto. 

Busco el stack que me deje llegar a usuarios y aprender **sin caos**.

## Contexto: lo único fijo (cliente y dolor)

Estoy explorando un **SaaS B2B para empresas de logística**, sobre todo **3PL / operadores logísticos**.

La hipótesis apunta a mejorar la coordinación operativa del almacén (especialmente alrededor de muelles y entradas/salidas), pero **no tengo un listado cerrado de funcionalidades**. 

Lo que sí tengo claro es el tipo de fricción:
- esperas y “tiempos muertos” que nadie sabe explicar (**dwell time**)
- penalizaciones por demoras (**detention fees**) que llegan tarde y sin evidencia
- cambios de última hora gestionados por WhatsApp/llamadas
- poca trazabilidad: quién cambió qué, cuándo y por qué

Y mi restricción principal: **tiempo limitado**. 

Si el stack me frena, el proyecto muere.

## Criterios de decisión (los que de verdad mandan)

Me hice una lista corta. 

Si un stack fallaba aquí, fuera:
1. **Velocidad de entrega** (MVP en semanas, no en estaciones).
2. **Ergonomía para SaaS B2B** (auth, roles, permisos, auditoría, integraciones).
3. **Mantenibilidad** (yo dentro de 12 meses, con menos memoria y más usuarios).
4. **Observabilidad** (logs, trazas, métricas: el día que algo se rompe, quiero verlo).
5. **Coste total** (infra, tiempo, complejidad, dependencia de terceros).
6. **Contratabilidad** (si mañana entra alguien a ayudar, que no sea una adivinanza).

Nota importante: mi base real es **C#** + **SQL** y el hosting en **Azure**. 

Rails y PHP los he usado, pero no vivo ahí. 

Y Java, directamente, no.

## Por qué .NET encaja en mi caso

### 1) Me da velocidad sin sacrificar lo básico de un SaaS B2B

En un SaaS B2B, casi todo acaba girando alrededor de:
- autenticación
- autorización por roles
- gestión de usuarios
- permisos finos
- auditoría
- integración con email, webhooks, APIs

Con .NET siento que puedo montar esto de forma **bastante estándar**. 

Menos inventos. 

Menos sorpresas.

### 2) Tipado fuerte de variables = menos sustos cuando el dominio crece

En operaciones, los datos importan: horarios, estados, evidencias, penalizaciones, SLAs. 

Un cambio pequeño puede romper un flujo grande.

El tipado de variables y el tooling de C# me ayudan a:
- refactorizar con confianza
- detectar errores antes
- mantener APIs coherentes
- no vivir con miedo al “esto compila pero…”.

### 3) Rendimiento sólido sin obligarme a “arquitectura por deporte”

No busco micro-optimizar. 

Lo perfecto es enemigo de lo bueno.

Pero sí quiero que el backend sea predecible y que aguante picos sin tener que meter capas extra demasiado pronto.

.NET me da ese suelo.

### 4) Datos e integraciones: me siento en casa

En este tipo de SaaS acabaré necesitando (aunque hoy no lo ponga en el roadmap bonito):
- modelos de datos consistentes
- exportaciones
- eventos / webhooks
- integraciones con sistemas del cliente

Con .NET + SQL Server/PostgreSQL estoy cómodo y sé por dónde me van a venir los tiros.

### 5) Contratabilidad y “lenguaje común” en B2B

Esto es impopular, pero real: cuando vendes B2B, a veces te preguntan “¿con qué está hecho?”.

No debería importar tanto… pero importa.

.NET en entornos enterprise se percibe como una apuesta segura. 

Si en algún momento necesito ayuda (freelancers, equipo), **hay mercado**.

### 6) Azure: menos fricción en infraestructura y operaciones

Como hosting ya tenía claro **Azure**. 

Y cuando el hosting está decidido, el stack deja de ser solo “lenguaje” y pasa a ser **operación diaria**.

Con .NET + Azure tengo un camino directo para lo típico de un SaaS B2B:
- desplegar en **App Service / Container Apps** sin inventarme nada raro
- base de datos gestionada (**Azure SQL** o **PostgreSQL**)
- secretos en **Key Vault**
- observabilidad con **Application Insights** + **Azure Monitor**
- colas/jobs/eventos con lo que toque (**Functions/Service Bus**)

Y esto encaja con el tipo de producto que estoy explorando:
- evidencias/documentos: **Blob Storage**
- alertas y notificaciones: **Functions** o **Service Bus**
- acceso corporativo si lo piden: **SSO con Entra ID**

¿La trampa? 

Huele a **dependencias fuertes** si te pasas con servicios específicos. 

Pero para un MVP y primeras ventas, prefiero “menos líos operativos” a “portabilidad teórica”.

## Por qué no Rails (aunque me guste mucho)

Rails es una máquina de sacar producto. 

Lo he usado y sé lo bien que se siente.

Pero en mi caso pesan estas pegas:

- **Ecosistema**: hay joyas, sí, pero también mucha variabilidad. Me cuesta más estandarizar.
- **Happy path de una sola base de datos**: Rails brilla cuando la app vive alrededor de **una BD principal**. En cuanto necesito **varias bases de datos** (por aislamiento por cliente, por separar dominios, o por convivir con datos externos), se puede hacer… pero empiezas a meter configuración y soluciones “a medida” para cuadrarlo. Y eso, con el tiempo, es mantenimiento y fricción.
- **Escalado de complejidad**: cuando el dominio crece (roles, auditoría, integraciones, background jobs), el “magic” a veces se vuelve deuda.

Mi contexto: con tiempo limitado, prefiero apostar por el stack donde voy a cometer menos errores por fricción/decisiones implícitas.

Rails no es mala opción. 

Simplemente, para este producto, **no es la mejor para mí**.

## Por qué no PHP (y cuándo sí lo usaría)

PHP hoy no es el PHP de 2008. 

Con frameworks modernos puedes hacer cosas muy serias.

Aun así, para este SaaS, lo descarté por:

- **Coherencia del ecosistema**: siento más dispersión en herramientas, estilos y convenciones.
- **Tooling/refactor**: comparado con C# + IDE, me cuesta más mantener el mismo nivel de seguridad al cambiar cosas.
- **Mi objetivo**: prefiero un stack con un “camino feliz” claro para B2B (auth, seguridad, APIs, jobs, observabilidad).

¿Cuándo sí usaría PHP?
- landing + contenido + algo simple
- productos muy orientados a CMS
- proyectos donde el equipo ya domina Laravel/Symfony y el time-to-market manda

No es mi caso ahora.

## Por qué no Java (aunque sería una apuesta segura)

Si solo mirase “enterprise”, Java encaja perfecto para un SaaS B2B.

Lo descarté por un motivo bastante menos glamuroso: **no tengo conocimientos ni experiencia real desarrollando en Java**.

Para un side project con tiempo limitado, eso es un coste directo:
- más fricción para avanzar
- más probabilidad de decisiones mediocres por desconocimiento
- más horas peleándome con el stack en vez de hablar con usuarios

¿Lo consideraría en el futuro?

Sí, si el producto valida y necesito un equipo que ya viva en Java, o si entro en un entorno donde Java sea el estándar de facto. 

Pero hoy, mi ventaja es construir rápido con confianza, y ahí **.NET me gana**.

## Las compensaciones reales de elegir .NET

Nada es gratis. Con .NET acepto:
- **Más ceremonia** en ciertas partes (aunque cada vez menos).
- Que el “MVP feo pero funcional” puede tardar más si me lío con arquitectura.
- Que es fácil pasarse de enterprise antes de tener clientes.

El riesgo aquí no es .NET.

El riesgo soy yo montando una catedral.

## Guardarraíles (para no convertirme en mi peor enemigo)

Para que .NET no se convierta en “sobre-arquitectura”, me pongo reglas:
- **Una vertical end-to-end primero**: del input al resultado. Sin módulos.
- **Auditoría simple desde el día 1**: quién, qué, cuándo. Sin épica.
- **Observabilidad básica**: logs estructurados + un dashboard mínimo.
- **Integraciones tarde**: primero demostrar que el flujo manual duele.

## Qué haría distinto si empezara mañana

1. **Deploy a Azure desde el minuto cero**: aunque sea un “hello world”. Prefiero descubrir fricción de despliegue y observabilidad cuando aún no hay usuarios. Se evitan muchas sorpresas. Ademas SQL Server y SQL Azure tienen algunas pequeñas diferencias.
2. **Tratar la auditoría como requisito**: no como feature “nice to have”. En operaciones, sin trazabilidad hay discusiones eternas.
3. **Validar venta/precio antes de integraciones**: las integraciones son un pozo de tiempo. Primero confirmo que el flujo manual duele y que alguien pagaría por quitar esa fricción.

## Si lo copias…

Si estás construyendo un SaaS B2B de operaciones con datos sensibles y workflows, **.NET es una apuesta muy razonable**.

Y un matiz importante: si ya dominas otro stack y te cubre **auth/roles/auditoría/observabilidad**, probablemente lo mejor sea ir con ese. 

Lo caro no es el framework. 

Es el tiempo.

Pero si tu producto es una web de contenido con cuatro formularios, o tu ventaja competitiva es solo distribución, quizá necesitas otra cosa: lo que manda ahí es velocidad absoluta y coste mínimo.

**Primer paso hoy (30 minutos)**:

Haz esta lista para tu producto:
- 3 flujos críticos (de principio a fin)
- 5 integraciones probables
- 3 cosas que sí o sí tienes que auditar

Luego elige el stack que te deje construir eso con menos fricción.

## Cierre

He elegido .NET no porque sea “el mejor”, sino porque es el mejor **para este tipo de SaaS y para mi contexto**: poco tiempo, necesidad de orden, y un dominio donde los errores cuestan dinero.

Ahora toca lo único que importa: **hablar con operadores**, sacar un MVP y ver si el dolor es real.

Si trabajas en un **3PL** u operas un almacén y esto te suena, me interesa entender tu realidad. 

No vengo a venderte nada: vengo a evitar construir el producto equivocado.