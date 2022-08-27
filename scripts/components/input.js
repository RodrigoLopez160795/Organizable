export function Input({ label, placeholder, icon, name, type, alt, value = "" }) {
  return `
  <div class="input-main">
      <label for="${name}" class="upcase label font-xs">${label}</label>
      <div class="input-container">
        <img src="${icon}" alt="${alt}">
        <input type="${type}"
          name="${name}"
          placeholder="${placeholder}"
          id="${name}"
          value = "${value}"
          class="text-reg w-100">
      </div>
    </div>
    `;
}
