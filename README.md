# Portafolio César Alfonso Caro Caro

Sitio estático de una sola página para el portafolio profesional de César Alfonso Caro Caro.

## Archivos principales
- `index.html`: contenido y estructura del portafolio.
- `assets/css/styles.css`: estilos responsive y accesibles.
- `assets/js/main.js`: navegación móvil y mejoras visuales progresivas.
- `assets/img/placeholder.svg`: marcador local para imágenes pendientes.
- `CONTENT.md`: fuente oficial de información profesional.
- `escritos/`: fichas de las dos muestras escritas; el sitio enlaza a los originales completos.
- `campanas/`: fichas de las dos campañas y notas de revisión de créditos.

## Uso
- Abrir `index.html` directamente en el navegador.
- Publicar en GitHub Pages desde la raíz del repositorio.
- No requiere instalación, paquetes, npm, base de datos ni proceso de build.

## Reglas de contenido
- Usar solo información de `CONTENT.md`.
- No mostrar datos marcados como `PENDIENTE`.
- No modificar `CONTENT.md` sin autorización.
- No usar imágenes, fuentes ni recursos externos.

## Actualización local del 28-10-2026
- Se mantienen los ocho proyectos audiovisuales originales, incluidos Entre Lates y Voces Divergentes.
- Se incorporan dos muestras de escritura y dos campañas de difusión, en secciones separadas.
- Las campañas conservan tarjetas tipográficas, sin imágenes vacías ni embeds externos; admiten incorporar el bloque de imagen del diseño cuando estén disponibles los archivos definitivos.
- Cine Mudo utiliza el logo local `assets/img/cine-mudo/Afiche_cine_mudo.png`, mostrado completo, y enlaza al episodio 1 proporcionado por César.
- Los enlaces originales de lectura y redes se abren en pestañas nuevas.
- El CV público `documentos/cv-cesar-caro.pdf` corresponde a la versión actualizada sin teléfono proporcionada por César, verificada mediante la lectura de sus dos páginas. El original entregado como `CV_Cesar_Caro_Portafolio_Sin_Telefono.pdf` se trasladó a `private/cv-publico-sin-telefono-original-20261029.pdf` tras comprobar que era idéntico por SHA-256, para evitar duplicados en la carpeta pública. El CV anterior se conserva en `private/cv-cesar-caro-anterior-20261028-234556-1600993c9e984732afb54b3a93416b91.pdf`, sin sobrescribir otros respaldos. El PDF con teléfono del paquete temporal no se utiliza.
- `Actualizacion_Portafolio_Cesar_Caro_2026-10-28/` se conserva intacta y está excluida mediante `.gitignore`. No incluirla en ningún despliegue manual; `.gitignore` no impide que un servidor publique una carpeta local si se copia todo el directorio.
- No se han modificado respaldos ni archivos privados. Los archivos previos versionados siguen conservados en `main`; los cambios de esta actualización están sin commit en la rama de trabajo.
