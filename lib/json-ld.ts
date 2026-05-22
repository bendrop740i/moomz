/**
 * Serialize a value for safe embedding inside a
 * `<script type="application/ld+json">` tag.
 *
 * Plain `JSON.stringify` is NOT safe here. If any string in the payload
 * contains the sequence `</script>`, the browser HTML parser closes the
 * script element early and parses the rest of the JSON as markup — a stored
 * XSS vector on every page whose JSON-LD carries user-authored text (poll
 * questions, options, profile names / bios, ASK answers…).
 *
 * Escaping `<` as the JSON unicode escape neutralises the closing tag while
 * keeping the payload byte-identical once parsed as JSON. `>` and `&` are
 * escaped too as defence in depth, and U+2028 / U+2029 because some crawlers
 * evaluate the block as JavaScript rather than parsing it as JSON (those two
 * code points are valid in JSON strings but break JS string literals).
 */
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
