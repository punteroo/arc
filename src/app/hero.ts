import { heroui } from "@heroui/react";
export default heroui({
  defaultTheme: "dark",
  themes: {
    light: {
      colors: {
        default: {
          "50": "#f1f1f1",
          "100": "#dddddd",
          "200": "#cacaca",
          "300": "#b6b6b6",
          "400": "#a3a3a3",
          "500": "#8f8f8f",
          "600": "#767676",
          "700": "#5d5d5d",
          "800": "#444444",
          "900": "#2b2b2b",
          foreground: "#000",
          DEFAULT: "#8f8f8f",
        },
        primary: {
          "50": "#ffffff",
          "100": "#ffffff",
          "200": "#ffffff",
          "300": "#ffffff",
          "400": "#ffffff",
          "500": "#ffffff",
          "600": "#d2d2d2",
          "700": "#a6a6a6",
          "800": "#797979",
          "900": "#4d4d4d",
          foreground: "#000",
          DEFAULT: "#ffffff",
        },
        secondary: {
          "50": "#f9f8fc",
          "100": "#f1edf8",
          "200": "#e9e3f5",
          "300": "#e1d9f1",
          "400": "#d9ceed",
          "500": "#d1c4e9",
          "600": "#aca2c0",
          "700": "#887f97",
          "800": "#635d6f",
          "900": "#3f3b46",
          foreground: "#000",
          DEFAULT: "#d1c4e9",
        },
        success: {
          "50": "#eff8f0",
          "100": "#d9eeda",
          "200": "#c3e4c5",
          "300": "#addbaf",
          "400": "#97d19a",
          "500": "#81c784",
          "600": "#6aa46d",
          "700": "#548156",
          "800": "#3d5f3f",
          "900": "#273c28",
          foreground: "#000",
          DEFAULT: "#81c784",
        },
        warning: {
          "50": "#fff6e9",
          "100": "#ffe9ca",
          "200": "#ffddaa",
          "300": "#ffd08b",
          "400": "#ffc46c",
          "500": "#ffb74d",
          "600": "#d29740",
          "700": "#a67732",
          "800": "#795725",
          "900": "#4d3717",
          foreground: "#000",
          DEFAULT: "#ffb74d",
        },
        danger: {
          "50": "#fceeee",
          "100": "#f7d5d5",
          "200": "#f3bdbd",
          "300": "#eea4a4",
          "400": "#ea8c8c",
          "500": "#e57373",
          "600": "#bd5f5f",
          "700": "#954b4b",
          "800": "#6d3737",
          "900": "#452323",
          foreground: "#000",
          DEFAULT: "#e57373",
        },
        background: "#ffffff",
        foreground: "#4a4a4a",
        content1: {
          DEFAULT: "#f0f0f0",
          foreground: "#000",
        },
        content2: {
          DEFAULT: "#e6e6e6",
          foreground: "#000",
        },
        content3: {
          DEFAULT: "#dcdcdc",
          foreground: "#000",
        },
        content4: {
          DEFAULT: "#d2d2d2",
          foreground: "#000",
        },
        focus: "#db924b",
        overlay: "#000000",
      },
    },
    dark: {
      colors: {
        default: {
          "50": "#0a0a0a",
          "100": "#141414",
          "200": "#1e1e1e",
          "300": "#282828",
          "400": "#323232",
          "500": "#5b5b5b",
          "600": "#848484",
          "700": "#adadad",
          "800": "#d6d6d6",
          "900": "#ffffff",
          foreground: "#fff",
          DEFAULT: "#323232",
        },
        primary: {
          "50": "#4d4d4d",
          "100": "#797979",
          "200": "#a6a6a6",
          "300": "#d2d2d2",
          "400": "#ffffff",
          "500": "#ffffff",
          "600": "#ffffff",
          "700": "#ffffff",
          "800": "#ffffff",
          "900": "#ffffff",
          foreground: "#000",
          DEFAULT: "#ffffff",
        },
        secondary: {
          "50": "#1c1c1c",
          "100": "#2d2d2d",
          "200": "#3d3d3d",
          "300": "#4e4e4e",
          "400": "#5e5e5e",
          "500": "#7a7a7a",
          "600": "#969696",
          "700": "#b3b3b3",
          "800": "#cfcfcf",
          "900": "#ebebeb",
          foreground: "#fff",
          DEFAULT: "#5e5e5e",
        },
        success: {
          "50": "#112b12",
          "100": "#1b431d",
          "200": "#245c27",
          "300": "#2e7532",
          "400": "#388e3c",
          "500": "#5ba25e",
          "600": "#7eb680",
          "700": "#a0c9a2",
          "800": "#c3ddc5",
          "900": "#e6f1e7",
          foreground: "#000",
          DEFAULT: "#388e3c",
        },
        warning: {
          "50": "#4a2500",
          "100": "#743b00",
          "200": "#9f5100",
          "300": "#ca6600",
          "400": "#f57c00",
          "500": "#f7932d",
          "600": "#f9aa59",
          "700": "#fac186",
          "800": "#fcd8b3",
          "900": "#feefdf",
          foreground: "#000",
          DEFAULT: "#f57c00",
        },
        danger: {
          "50": "#3f0e0e",
          "100": "#641616",
          "200": "#891f1f",
          "300": "#ae2727",
          "400": "#d32f2f",
          "500": "#db5353",
          "600": "#e27878",
          "700": "#ea9c9c",
          "800": "#f2c1c1",
          "900": "#fae5e5",
          foreground: "#fff",
          DEFAULT: "#d32f2f",
        },
        background: "#000000",
        foreground: "#b0b0b0",
        content1: {
          DEFAULT: "#2a2a2a",
          foreground: "#fff",
        },
        content2: {
          DEFAULT: "#3b3b3b",
          foreground: "#fff",
        },
        content3: {
          DEFAULT: "#4c4c4c",
          foreground: "#fff",
        },
        content4: {
          DEFAULT: "#5d5d5d",
          foreground: "#fff",
        },
        focus: "#000000",
        overlay: "#ffffff",
      },
    },
  },
  layout: {
    disabledOpacity: "0.5",
  },
});
