# 🍲 Restaurante Delicias' Caseras — Menú Digital con Pedidos (PWA)

Carta digital interactiva con **fotos reales de los platos** y toma de pedidos por **WhatsApp** para el Restaurante Delicias' Caseras (Caucasia, Antioquia). Domicilios al **314 851 4758**.

## ✨ Funciones

- 📸 Carta con fotos reales por categorías: **Desayunos** y **Almuerzos**
- 🕐 Reloj de Colombia (UTC-5) en vivo + indicador **Abierto / Cerrado** según horario
- ☀️ Saludo inteligente según la hora (muestra desayunos en la mañana, almuerzos al mediodía)
- 🛒 Carrito con botones **+ / −** por plato, drawer de pedido y total automático
- 🛵 Tipo de entrega: **Domicilio** (con dirección y botón 📍 GPS) o **Paso a recoger**
- 💳 Métodos de pago: Efectivo, Nequi, Daviplata, Transferencia
- 📲 Envío del pedido formateado por WhatsApp al 314 851 4758
- ✅ Pantalla de éxito y opción de hacer otro pedido
- 🔒 Aviso de protección de datos (Ley 1581 de 2012 — Habeas Data)
- 📱 PWA instalable: `manifest.json`, Service Worker (funciona offline), iconos 192/512
- 🔗 Meta tags Open Graph para vista previa en WhatsApp y redes

## 📂 Estructura

```
delicias-caseras/
├── index.html      ← App completa (HTML + CSS + JS)
├── manifest.json   ← Configuración PWA
├── sw.js           ← Service Worker (offline)
├── README.md
└── img/            ← Fotos reales optimizadas + logo + iconos
```

## ⚙️ Personalización (todo está al inicio del `<script>` en index.html)

| Qué ajustar | Dónde |
|---|---|
| **Precios, nombres y descripciones** | Constante `MENU` (cada plato tiene `nombre`, `desc`, `precio`, `img`) |
| **Número de WhatsApp** | Constante `WHATSAPP` (`573148514758`) |
| **Horario de atención** | Constante `HORARIO` (`abre: 6, cierra: 16`) |
| **Vista previa en redes** | Reemplazar `https://CAMBIAR-DOMINIO/` en las metas `og:image` y `og:url` por la URL real al publicar |

> ⚠️ **Los precios actuales son de referencia.** Confirmar con la dueña antes de publicar. El plato "Pescado Frito del Día" puede renombrarse (ej. Bocachico) según lo que ella maneje.

## 🚀 Publicación

1. Subir la carpeta completa a GitHub (este `README.md` + todos los archivos).
2. Activar **GitHub Pages** (o desplegar en Netlify / Hostinger).
3. Actualizar las metas `og:url` y `og:image` con el dominio definitivo.
4. Probar en el celular: el navegador ofrecerá **"Agregar a pantalla de inicio"**.

## 🔒 Habeas Data

Los datos del cliente (nombre, celular, dirección, GPS) **no se almacenan en el sitio**: solo viajan en el mensaje de WhatsApp que el propio cliente envía. El formulario incluye el aviso de tratamiento de datos conforme a la Ley 1581 de 2012.

---

*Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados.*
