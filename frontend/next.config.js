---
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig

---
postcss.config.js
---
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

---
