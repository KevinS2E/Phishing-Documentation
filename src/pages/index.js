import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Portal de concientización sobre phishing"
      description="Portal corporativo para aprender a detectar correos de phishing con ejemplos visuales y pasos simples.">
      <main>
        <div className="awareness-page">
          <section className="awareness-hero">
            <div className="awareness-hero__inner">
              <div className="awareness-hero__content">
                <span className="awareness-kicker">Concientización · Seguridad informática · Usuarios no técnicos</span>
                <Heading as="h1" className="awareness-title">
                  Aprende a reconocer correos de phishing antes de que sea tarde
                </Heading>
                <p className="awareness-summary">
                  Este portal ayuda a identificar señales comunes de fraude por correo, entender el riesgo para la empresa y actuar con seguridad sin necesidad de conocimientos técnicos.
                </p>

                <div className="awareness-hero__actions">
                  <Link className="button button--primary button--lg" to="/docs/reconocer-phishing">
                    Abrir la guía de phishing
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/reconocer-phishing">
                    Ver cómo reportarlo
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="awareness-section">
            <div className="awareness-section__inner">
              <div className="awareness-section__header">
                <span className="awareness-section__kicker">Señales comunes</span>
                <Heading as="h2">Qué revisar en segundos</Heading>
                <p>
                  La meta no es memorizar reglas complejas. Es reconocer patrones que suelen aparecer en mensajes falsos o manipuladores.
                </p>
              </div>

              <div className="awareness-grid">
                <article className="awareness-card awareness-card--signal">
                  <div className="awareness-card__icon" aria-hidden="true">✍️</div>
                  <h3>Errores de escritura</h3>
                  <p>Los mensajes de fraude suelen tener errores ortográficos, frases extrañas o traducciones pobres.</p>
                </article>
                <article className="awareness-card awareness-card--signal">
                  <div className="awareness-card__icon" aria-hidden="true">🌐</div>
                  <h3>Dominios extraños</h3>
                  <p>Un remitente con nombres raros, dominios públicos o ligeras variaciones puede ser una pista importante.</p>
                </article>
                <article className="awareness-card awareness-card--signal">
                  <div className="awareness-card__icon" aria-hidden="true">⏱️</div>
                  <h3>Urgencia artificial</h3>
                  <p>Frases como &quot;actúa ahora&quot; o &quot;tu cuenta será bloqueada&quot; buscan que respondas sin pensar.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="awareness-section awareness-section--alt">
            <div className="awareness-section__inner">
              <div className="awareness-section__header">
                <span className="awareness-section__kicker">Ruta segura</span>
                <Heading as="h2">Qué hacer cuando un correo te genera dudas</Heading>
                <p>
                  No hace falta saber si es fraude al 100 por ciento para actuar bien. El paso correcto es detenerse y reportar.
                </p>
              </div>

              <div className="awareness-steps">
                <article className="awareness-card awareness-card--step">
                  <span className="awareness-step-badge">1</span>
                  <h3>No interactuar</h3>
                  <p>Evita abrir enlaces, descargar adjuntos o responder al remitente hasta verificar el mensaje.</p>
                </article>
                <article className="awareness-card awareness-card--step">
                  <span className="awareness-step-badge">2</span>
                  <h3>Reportar en Outlook</h3>
                  <p>Usa la opción &quot;Report Phishing&quot; para que el equipo de seguridad reciba y analice el correo.</p>
                </article>
                <article className="awareness-card awareness-card--step">
                  <span className="awareness-step-badge">3</span>
                  <h3>Borrar después de reportar</h3>
                  <p>Elimina el mensaje solo cuando ya lo hayas reportado y no necesites conservarlo como evidencia.</p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}