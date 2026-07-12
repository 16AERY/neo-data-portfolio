import type { Config } from "tailwindcss"

const config = {
    darkMode: "class",
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: { "2xl": "1400px" },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-space-grotesk)', 'sans-serif'],
                heading: ['var(--font-space-grotesk)', 'sans-serif'],
            },
            boxShadow: {
                neo: '4px 4px 0px 0px rgba(23,23,23,1)',
                'neo-hover': '2px 2px 0px 0px rgba(23,23,23,1)',
                'neo-lg': '5px 5px 0px 0px rgba(23,23,23,1)',
                'neo-dark': '4px 4px 0px 0px rgba(250,250,250,0.95)',
                'neo-dark-hover': '2px 2px 0px 0px rgba(250,250,250,0.95)',
                'neo-dark-lg': '5px 5px 0px 0px rgba(250,250,250,0.95)',
            },
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
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                accent: {
                    DEFAULT: "#FF4911",
                    foreground: "#FFFFFF",
                },
                violet: {
                    DEFAULT: "#7C5CFF",
                    foreground: "#FFFFFF",
                },
                lime: {
                    DEFAULT: "#C6F135",
                    foreground: "#1F2900",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                card: '14px',
                pill: '999px',
            },
            borderWidth: {
                neo: '2.5px',
            },
            backgroundImage: {
                'graph-light': 'linear-gradient(rgba(23,23,23,0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(23,23,23,0.2) 1.5px, transparent 1.5px)',
                'graph-dark': 'linear-gradient(rgba(250,250,250,0.13) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(250,250,250,0.13) 1.5px, transparent 1.5px)',
            },
            backgroundSize: {
                graph: '20px 20px',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config