import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  // 配置内容路径，包括Hero UI组件
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // 添加Hero UI组件路径
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // 扩展字体配置
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  // 启用暗色模式支持
  darkMode: "class",
  // 添加Hero UI插件
  plugins: [heroui()],
}

