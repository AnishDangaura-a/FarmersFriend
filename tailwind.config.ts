import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Farmers Friend colors
        forest: {
          DEFAULT: "#0D3D2B",
          50: "#0A2219",
          100: "#155235",
          200: "#1E6B46",
        },
        leaf: {
          DEFAULT: "#27AE72",
          light: "#3DD68C",
          glow: "rgba(61, 214, 140, 0.18)",
        },
        gold: {
          DEFAULT: "#F5A623",
          light: "#FFD166",
        },
        sky: {
          DEFAULT: "#2D9CDB",
          light: "#56CCF2",
        },
        earth: "#8B5E3C",
        danger: {
          DEFAULT: "#E74C3C",
          light: "#FF6B6B",
        },
        warn: "#F39C12",
        gray: {
          0: "#FFFFFF",
          50: "#F8FAF9",
          100: "#F2F7F4",
          200: "#E4EDE8",
          300: "#C8DDD0",
          400: "#8BA899",
          600: "#4A6B5A",
          700: "#1C3328",
          800: "#0A1F15",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(13, 61, 43, 0.08)",
        md: "0 4px 20px rgba(13, 61, 43, 0.12)",
        lg: "0 8px 40px rgba(13, 61, 43, 0.16)",
        glow: "0 0 24px rgba(61, 214, 140, 0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scanAnim: {
          "0%": {
            top: "4px",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            top: "calc(100% - 4px)",
            opacity: "0",
          },
        },
        typingDot: {
          "0%, 80%, 100%": {
            transform: "scale(0.8)",
            opacity: "0.4",
          },
          "40%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.4",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeUp: "fadeUp 0.28s ease",
        scanAnim: "scanAnim 2s ease-in-out infinite",
        typingDot: "typingDot 1.2s ease-in-out infinite",
        pulse: "pulse 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
