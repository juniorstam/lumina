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
        {/* Glow azul central */}
        <div
          style={{
            position: 'absolute',
            width: 700,
            height: 400,
            borderRadius: 999,
            background: 'rgba(59,130,246,0.08)',
            top: '50%',
            left: '50%',
            marginTop: -200,
            marginLeft: -350,
          }}
        />

        {/* Borda sutil no topo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: 'rgba(255,255,255,0.06)',
          }}
        />

        {/* Conteúdo central */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1,
            padding: '0 80px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
              }}
            >
              ◆
            </div>
            <span style={{ fontSize: 38, fontWeight: 700, color: '#FAFAFA', letterSpacing: -1 }}>
              Lumina
            </span>
          </div>

          {/* Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 999,
              padding: '8px 22px',
              marginBottom: 36,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 4, background: '#60A5FA' }} />
            <span style={{ fontSize: 16, color: '#71717A', letterSpacing: 2 }}>
              IDENTIDADE EDUCACIONAL PROFISSIONAL
            </span>
          </div>

          {/* Headline linha 1 */}
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: '#F4F4F5',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: -2,
              marginBottom: 8,
            }}
          >
            Seu patrimônio intelectual,
          </div>

          {/* Headline linha 2 - azul */}
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: '#3B82F6',
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: -2,
              marginBottom: 36,
            }}
          >
            finalmente organizado.
          </div>

          {/* Subtexto */}
          <div
            style={{
              fontSize: 22,
              color: '#52525B',
              textAlign: 'center',
              maxWidth: 660,
              lineHeight: 1.5,
            }}
          >
            Conecte seu e-mail. A Lumina encontra todos os seus cursos, certificados e assinaturas automaticamente.
          </div>
        </div>

        {/* URL no rodapé */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 17, color: '#3F3F46' }}>app.stamcom.com.br</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
