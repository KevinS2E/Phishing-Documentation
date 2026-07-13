import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Portal de concientización sobre phishing',
      })}
      description={translate({
        id: 'homepage.description',
        message:
          'Portal corporativo para aprender a detectar correos de phishing con ejemplos visuales y pasos simples.',
      })}>
      <main>
        <div className="awareness-page">
          <section className="awareness-hero">
            <div className="awareness-hero__inner">
              <div className="awareness-hero__content">
                <span className="awareness-kicker">
                  <Translate id="homepage.hero.kicker">
                    Concientización · Seguridad informática · Usuarios no técnicos
                  </Translate>
                </span>
                <Heading as="h1" className="awareness-title">
                  <Translate id="homepage.hero.title">
                    Aprende a reconocer correos de phishing antes de que sea tarde
                  </Translate>
                </Heading>
                <p className="awareness-summary">
                  <Translate id="homepage.hero.summary">
                    Este portal ayuda a identificar señales comunes de fraude por correo, entender el riesgo para la empresa y actuar con seguridad sin necesidad de conocimientos técnicos.
                  </Translate>
                </p>

                <div className="awareness-hero__actions">
                  <Link className="button button--primary button--lg" to="/docs/reconocer-phishing">
                    <Translate id="homepage.hero.action.guide">Abrir la guía de phishing</Translate>
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/reconocer-phishing">
                    <Translate id="homepage.hero.action.report">Ver cómo reportarlo</Translate>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="awareness-section">
            <div className="awareness-section__inner">
              <div className="awareness-section__header">
                <span className="awareness-section__kicker">
                  <Translate id="homepage.signals.kicker">Señales comunes</Translate>
                </span>
                <Heading as="h2">
                  <Translate id="homepage.signals.title">Qué revisar en segundos</Translate>
                </Heading>
                <p>
                  <Translate id="homepage.signals.description">
                    La meta no es memorizar reglas complejas. Es reconocer patrones que suelen aparecer en mensajes falsos o manipuladores.
                  </Translate>
                </p>
              </div>

              <div className="awareness-grid">
                <article className="awareness-card awareness-card--signal">
                  <div className="awareness-card__icon" aria-hidden="true">✍️</div>
                  <h3>
                    <Translate id="homepage.signals.writing.title">Errores de escritura</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.signals.writing.description">
                      Los mensajes de fraude suelen tener errores ortográficos, frases extrañas o traducciones pobres.
                    </Translate>
                  </p>
                </article>
                <article className="awareness-card awareness-card--signal">
                  <div className="awareness-card__icon" aria-hidden="true">🌐</div>
                  <h3>
                    <Translate id="homepage.signals.domains.title">Dominios extraños</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.signals.domains.description">
                      Un remitente con nombres raros, dominios públicos o ligeras variaciones puede ser una pista importante.
                    </Translate>
                  </p>
                </article>
                <article className="awareness-card awareness-card--signal">
                  <div className="awareness-card__icon" aria-hidden="true">⏱️</div>
                  <h3>
                    <Translate id="homepage.signals.urgency.title">Urgencia artificial</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.signals.urgency.description">
                      Frases como &quot;actúa ahora&quot; o &quot;tu cuenta será bloqueada&quot; buscan que respondas sin pensar.
                    </Translate>
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="awareness-section awareness-section--alt">
            <div className="awareness-section__inner">
              <div className="awareness-section__header">
                <span className="awareness-section__kicker">
                  <Translate id="homepage.safe.kicker">Ruta segura</Translate>
                </span>
                <Heading as="h2">
                  <Translate id="homepage.safe.title">Qué hacer cuando un correo te genera dudas</Translate>
                </Heading>
                <p>
                  <Translate id="homepage.safe.description">
                    No hace falta saber si es fraude al 100 por ciento para actuar bien. El paso correcto es detenerse y reportar.
                  </Translate>
                </p>
              </div>

              <div className="awareness-steps">
                <article className="awareness-card awareness-card--step">
                  <span className="awareness-step-badge">1</span>
                  <h3>
                    <Translate id="homepage.safe.step1.title">No interactuar</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.safe.step1.description">
                      Evita abrir enlaces, descargar adjuntos o responder al remitente hasta verificar el mensaje.
                    </Translate>
                  </p>
                </article>
                <article className="awareness-card awareness-card--step">
                  <span className="awareness-step-badge">2</span>
                  <h3>
                    <Translate id="homepage.safe.step2.title">Reportar en Outlook</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.safe.step2.description">
                      Usa la opción &quot;Report Phishing&quot; para que el equipo de seguridad reciba y analice el correo.
                    </Translate>
                  </p>
                </article>
                <article className="awareness-card awareness-card--step">
                  <span className="awareness-step-badge">3</span>
                  <h3>
                    <Translate id="homepage.safe.step3.title">Borrar después de reportar</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.safe.step3.description">
                      Elimina el mensaje solo cuando ya lo hayas reportado y no necesites conservarlo como evidencia.
                    </Translate>
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
