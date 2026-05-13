import { ImageResponse } from 'next/og'

export const alt = 'Lumina — Seu patrimônio intelectual, finalmente organizado'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            zIndex: 1,
            padding: '0 80px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
                <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
              </svg>
            </div>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#FAFAFA', letterSpacing: '-1px' }}>
              Lumina
            </span>
          </div>

          {/* Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 999,
              padding: '8px 20px',
              marginBottom: 32,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#60A5FA' }} />
            <span style={{ fontSize: 18, color: '#A1A1AA', letterSpacing: '0.05em' }}>
              IDENTIDADE EDUCACIONAL PROFISSIONAL
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#FAFAFA',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-2px',
              marginBottom: 24,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            Seu patrimônio intelectual,
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#3B82F6',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-2px',
              marginBottom: 40,
            }}
          >
            finalmente organizado.
          </div>

          {/* Subtext */}
          <div
            style={{
              fontSize: 24,
              color: '#71717A',
              textAlign: 'center',
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Conecte seu e-mail. A Lumina encontra todos os seus cursos, certificados e assinaturas automaticamente.
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 18, color: '#3F3F46' }}>app.stamcom.com.br</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
