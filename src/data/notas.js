// Notas y ensayos cortos de Casa Banega. Vacío a propósito: esta sección no se linkea
// desde ningún nav hasta tener el primer texto real (ver docs/sistema-de-marca.md).
export const NOTAS = [];

export const notaPorSlug = (slug) => NOTAS.find((n) => n.slug === slug);
