# BioConvert 🧬

BioConvert is a modern, responsive, and interactive bioinformatics web application designed for researchers and students to seamlessly translate and reverse-translate biological sequences (DNA, RNA, and Protein).

Built with a premium Slate-based design, BioConvert detects input sequence types in real-time, supports file downloads, and features direct clipboard copying for maximum workflow efficiency.

---

## 📸 Screenshots

| Initial State (Empty) | Active State (Translated) |
|---|---|
| ![Initial State](./public/screenshot1.png) | ![Translated State](./public/screenshot2.png) |

---

## ✨ Features

- **Real-Time Input Detection**: Automatically detects whether your sequence is **DNA**, **RNA**, or **Protein** based on molecular alphabet composition (e.g. A/T/C/G, A/U/C/G, or standard Amino Acids).
- **Comprehensive Conversion Matrix**:
  - **DNA** → **RNA** (Transcription)
  - **DNA** → **Protein** (Transcription + Translation)
  - **RNA** → **DNA** (Reverse Transcription)
  - **RNA** → **Protein** (Translation using standard Codon mapping)
  - **Protein** → **DNA** (Reverse Translation using representative Codons)
  - **Protein** → **RNA** (Reverse Translation to transcripts)
- **Interactive Controls**:
  - One-click copy output to clipboard.
  - Download outputs as text files (`sequence_output.txt`).
  - Interactive validation states for sequence types.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern `@theme` system)
- **UI Components**: [Material UI](https://mui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Utilities**: [File Saver](https://github.com/eligrey/FileSaver.js/), Axios

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Self-Lakshh/BioConvert.git
   cd BioConvert
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🏷️ Tags & Metadata

`#Bioinformatics` `#DNA-Translation` `#RNA-Transcription` `#Vite-React` `#Tailwind-CSS-v4` `#BioConvert` `#Web-Application`