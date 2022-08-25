export function Input({ label, placeholder, icon, name, type, alt }) {
  return `
    <label for="${name}">${label}</label>
    <div>
    <img src="${icon} alt="${alt}">
    <input type="${type}" name="${name} placeholder="${placeholder}>
    </div>
    `;
}
