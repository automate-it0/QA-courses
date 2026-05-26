/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Space theme
                'space-bg': '#0B0E1C',
                'space-card': '#141829',
                'space-border': '#1E2340',
                'space-surface': '#1A1F37',
                // Accent colors
                'cosmic-purple': '#8B5CF6',
                'cosmic-purple-light': '#A78BFA',
                'electric-blue': '#3B82F6',
                'electric-blue-light': '#60A5FA',
                'neon-green': '#10B981',
                'neon-green-light': '#34D399',
                'warm-yellow': '#F59E0B',
                'warm-yellow-light': '#FBBF24',
                'rocket-red': '#EF4444',
                'rocket-red-light': '#F87171',
                'cyber-lime': '#84CC16',
                'neon-pink': '#EC4899',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                arabic: ['Cairo', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'gradient-cosmic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-ocean': 'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
                'gradient-sunset': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'gradient-aurora': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'gradient-card': 'linear-gradient(145deg, rgba(20, 24, 41, 0.8) 0%, rgba(26, 31, 55, 0.6) 100%)',
            },
            boxShadow: {
                'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
                'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
                'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
                'glow-yellow': '0 0 20px rgba(245, 158, 11, 0.3)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'slide-up': 'slideUp 0.3s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'fade-in': 'fadeIn 0.3s ease-out',
                'bounce-in': 'bounceIn 0.5s ease-out',
                'spin-slow': 'spin 3s linear infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                bounceIn: {
                    '0%': { transform: 'scale(0.3)', opacity: '0' },
                    '50%': { transform: 'scale(1.05)' },
                    '70%': { transform: 'scale(0.9)' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
};
