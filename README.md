# Xovix AI - Enterprise Automation Platform

An advanced AI automation platform featuring a visual whiteboard designer, real-time execution monitoring, and multi-tenant management.

## 🚀 Overview

Xovix AI empowers organizations to build, deploy, and monitor intelligent AI workflows with ease. Our visual designer allows for complex automation logic without writing a single line of code.

## ✨ Key Features

- **Visual Whiteboard Designer**: Drag-and-drop interface for building complex AI workflows.
- **Workflow Engine**: High-performance backend for executing triggers and actions.
- **Real-time Analytics**: Comprehensive dashboard for monitoring token usage and success rates.
- **Multi-Tenant Architecture**: Isolate data and configurations per client or department.
- **Secure API Management**: Encrypted storage for OpenAI, Anthropic, and custom endpoints.

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Visualization**: ReactFlow
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alfred467/AI-automation.git
   cd AI-automation
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Add your API keys to the .env file
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🛠️ Usage as a Template

This project is designed to be a "public view and usage template." To use it for your own projects:

1. Click the "Use this template" button on GitHub.
2. Customize the branding in `components/footer.tsx` and `app/layout.tsx`.
3. Extend the `AutomationEngine` in `lib/automation/engine.ts` with your custom logic.
4. Add new node types in `components/automation/whiteboard.tsx`.

## 🚀 Vercel Deployment

This project is optimized for deployment on **Vercel**.

1. **Connect your GitHub Repository** to Vercel.
2. **Environment Variables**: Add the variables defined in `.env.example` to your Vercel project settings.
3. **Build Command**: `npm run build`
4. **Install Command**: `npm install --legacy-peer-deps` (Already configured in `vercel.json`).
5. **Framework Preset**: Next.js.

## 👨‍💻 Development

This platform was meticulously designed and developed by **Alfred**.

---
**dev by Alfred**
