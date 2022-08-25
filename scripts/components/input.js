export function Input({ label, placeholder, icon, name, type, alt }) {
  return `
  <div class="input-main">
      <label for="${name}" class="upcase label font-xs">${label}</label>
      <div class="input-container">
        <img src="${icon}" alt="${alt}">
        <input type="${type}"
          name="${name}"
          placeholder="${placeholder}"
          id="${name}"
          class="text-reg">
      </div>
    </div>
    `;
}
