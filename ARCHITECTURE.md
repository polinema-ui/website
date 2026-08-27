# Polinema UI — System Specification & Architectural SRS

> **Visi Proyek:** Sistem CLI & komponen UI berarsitektur _copy-and-paste_ (terinspirasi dari `shadcn/ui`) yang dirancang untuk membantu mahasiswa/developer dalam proyek PBL (Project-Based Learning). Polinema UI memastikan kode UI estetis, struktur folder rapi/terstandarisasi, serta mendukung kombinasi bahasa, framework, dan CSS _engine_ pilihan.

---

## 1. Problem Statement & Objectives

### Masalah

- **UI Aesthetic Gap:** Mahasiswa paham logika pemrograman (backend/PHP/JS), tetapi kesulitan membuat visual UI yang modern, rapi, dan konsisten.
- **Messy Project Structure:** Tidak ada konvensi struktur folder pada proyek PBL, menyebabkan _spaghetti code_ dan arsitektur file yang sulit dibaca.
- **Tooling Fragmentation:** Komponen UI populer biasanya terkunci pada satu _tech stack_ (misal: React saja), sementara proyek akademik memerlukan variasi seperti PHP Native, Blade (Laravel), HTML murni, hingga React/Next.js.

### Solusi

Polinema UI menyediakan **CLI Tooling** untuk menggenerasi komponen terstruktur langsung ke dalam repositori pengguna, dikombinasikan dengan konfigurasi `components.json` untuk adaptabilitas lintas _stack_.

---

## 2. Core Architectural Principles

- **Code Ownership (Copy & Paste Model):** Komponen disuntikkan langsung ke folder proyek pengguna, bukan sebagai _dependency_ package NPM/Composer yang kaku.
- **Stack Agnostic Engine:** Komponen dapat di-render ke sintaks target (`.html`, `.php`, `.blade.php`, `.jsx`/`.tsx`).
- **Enforced Folder Hygiene:** Proses inisialisasi CLI otomatis merapikan struktur direktori proyek sesuai _best practices_ industri.

---

## 3. CLI Specification & Command Line Interface

### 3.1 Initialization Command

Perintah `init` digunakan untuk memicu konfigurasi awal proyek dan menghasilkan berkas `components.json`.

```bash
npx polinema-ui init [options]
```

#### Flags Options

| Flag          | Values                              | Description                                       | Default    |
| :------------ | :---------------------------------- | :------------------------------------------------ | :--------- |
| `--css`       | `tailwind`, `bootstrap`             | Menentukan CSS engine / framework styling         | `tailwind` |
| `--framework` | `react`, `next`, `blade`, `vanilla` | Target ekosistem framework proyek                 | `react`    |
| `--language`  | `ts`, `js`, `php`, `html`           | Dialek / bahasa pemrograman berkas                | `ts`       |
| `-y`, `--yes` | -                                   | Menggunakan nilai default tanpa prompt interaktif | `false`    |

#### Contoh Penggunaan CLI

- **Proyek Laravel + Blade + Bootstrap 5:**
  ```bash
  npx polinema-ui init --framework blade --language php --css bootstrap
  ```
- **Proyek React + TypeScript + Tailwind CSS v4:**
  ```bash
  npx polinema-ui init --framework react --language ts --css tailwind
  ```
- **Proyek PHP Native / HTML + Bootstrap 5:**
  ```bash
  npx polinema-ui init --framework vanilla --language php --css bootstrap
  ```

---

### 3.2 Component Addition Command

Perintah `add` mengambil kode sumber komponen dari repositori pustaka (registry) dan menempatkannya ke folder lokal proyek.

```bash
npx polinema-ui add <component-name> [options]
```

**Contoh:**

```bash
npx polinema-ui add button card data-table
```

---

## 4. Configuration Schema (`components.json`)

File `components.json` bertindak sebagai _source of truth_ untuk menentukan bagaimana komponen di-generate dan diletakkan di dalam struktur folder proyek.

```json
{
	"$schema": "[https://polinema-ui.com/schema.json](https://polinema-ui.com/schema.json)",
	"style": "default",
	"cssEngine": "tailwind-v4", // Options: "tailwind-v4" | "bootstrap-5"
	"framework": "blade", // Options: "react" | "next" | "blade" | "vanilla"
	"language": "php", // Options: "ts" | "js" | "php" | "html"
	"paths": {
		"components": "resources/views/components/ui",
		"utils": "resources/js/lib/utils.js",
		"css": "resources/css/app.css"
	},
	"aliases": {
		"components": "@/components",
		"utils": "@/lib/utils"
	}
}
```

---

## 5. Ecosystem Compatibility Matrix

Polinema UI menjamin komponen dapat berjalan di atas kombinasi _stack_ berikut dengan mekanisme penyampaian (_delivery mechanism_) yang disesuaikan:

| Framework Target    | Dialek Bahasa             | CSS Engine                 | Delivery Method & Output Target                                                     |
| :------------------ | :------------------------ | :------------------------- | :---------------------------------------------------------------------------------- |
| **Laravel**         | Blade (`.blade.php`)      | Tailwind v4 \| Bootstrap 5 | Native Component Tag (`<x-ui.button />`) $\rightarrow$ `button.blade.php`           |
| **PHP Native**      | PHP (`.php`)              | Tailwind v4 \| Bootstrap 5 | Server-side File Include (`include 'ui/button.php';`) $\rightarrow$ `button.php`    |
| **React / Next.js** | TSX / JSX (`.tsx`/`.jsx`) | Tailwind v4 \| Bootstrap 5 | ES Module Import (`import { Button } ...`) $\rightarrow$ `button.tsx`               |
| **Vanilla HTML**    | HTML Murni (`.html`)      | Tailwind v4 \| Bootstrap 5 | **Raw Snippet Copy-Paste** (Markup + Script Vanilla JS) $\rightarrow$ `button.html` |

---

## 6. Standardized Directory Layout (PBL Guidance)

Saat `init` dijalankan, Polinema UI merapikan struktur direktori agar ramah dibaca dan mudah dikelola oleh mahasiswa.

### Contoh Structure: PHP / Blade + Bootstrap 5 (PBL Standard)

```text
my-pbl-project/
├── components.json
├── public/
│   ├── css/
│   └── js/
├── resources/
│   └── views/
│       ├── components/
│       │   └── ui/          <-- Lokasi komponen Polinema UI
│       │       ├── button.blade.php
│       │       └── card.blade.php
│       ├── layouts/
│       └── pages/
```

### Contoh Structure: React / Next.js + Tailwind v4

```text
my-pbl-project/
├── components.json
├── src/
│   ├── components/
│   │   └── ui/              <-- Lokasi komponen Polinema UI
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── app/
```

---

## 7. Roadmap & Development Phases

- [ ] **Phase 1: CLI Core Engine**
  - Parser argumen CLI (`--css`, `--framework`, `--language`).
  - Generator `components.json` interaktif.
- [ ] **Phase 2: Multi-Registry Architecture**
  - Penyediaan repositori template komponen dalam variasi (Blade + Bootstrap, React + Tailwind, dsb).
- [ ] **Phase 3: PBL Component Starter Collection**
  - Komponen standar: Data Table, Form Validation, Auth Card, Navbar Academic, Stats Widget.
- [ ] **Phase 4: Documentation & CLI Testing**
  - Portal dokumentasi interaktif dengan _live preview_ per pilihan _stack_.
