import type { Config } from 'tailwindcss'
import svgToDataUri from 'mini-svg-data-uri'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'inter-sans': ['var(--font-inter)'],
        'norse-sans': ['var(--font-norse)']
      },
      colors: {
        black: {
          100: '#000319',
          200: 'rgba(17, 25, 40, 0.75)',
          300: 'rgba(255, 255, 255, 0.125)',
          DEFAULT: '#000'
        },
        white: {
          100: '#BEC1DD',
          200: '#C1C2D3',
          DEFAULT: '#FFF'
        },
        blue: {
          100: '#E4ECFF'
        },
        purple: '#CBACF9',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)'
          }
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)'
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)'
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)'
          }
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(180deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '50%': {
            transform: 'translateY(50%)'
          },
          '100%': {
            transform: 'translateY(-50%)'
          }
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))'
          }
        },
        meteor: {
          '0%': {
            transform: 'rotate(215deg) translateX(0)',
            opacity: '1'
          },
          '70%': {
            opacity: '1'
          },
          '100%': {
            transform: 'rotate(215deg) translateX(-1000px)',
            opacity: '0'
          }
        },
        loading: {
          to: {
            transform: 'rotate(360deg)'
          }
        },
        flip: {
          to: {
            transform: 'rotate(360deg)'
          }
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)'
          }
        },
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
          }
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)'
          }
        },
        blob: {
          '0%': {
            transform: 'translate(-50%, -50%) rotate(0deg) scale(1)'
          },
          '33%': {
            transform: 'translate(-50%, -50%) rotate(120deg) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-50%, -50%) rotate(240deg) scale(0.9)'
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg) scale(1)'
          }
        },
        'image-glow': {
          '0%': {
            opacity: '0',
            'animation-timing-function': 'cubic-bezier(.74, .25, .76, 1)'
          },
          '10%': {
            opacity: '0.5',
            'animation-timing-function': 'cubic-bezier(.12, .01, .08, .99)'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        shimmer: 'shimmer 2s linear infinite',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        'meteor-effect': 'meteor 5s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        loading: 'loading 0.6s linear infinite',
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
        blob: 'blob 7s infinite',
        'image-glow': 'image-glow 6s ease-out 0.6s forwards'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    }
  ]
} satisfies Config

function addVariablesForColors ({
  addBase,
  theme
}: {
  addBase: any
  theme: (path: string) => Record<string, string>
}) {
  const allColors: Record<string, string> = flattenColorPalette(
    theme('colors')
  )
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars
  })
}
