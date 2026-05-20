import { useState } from 'react'
import Reveal from './Reveal'

// FormSubmit — gratuito, sem limite. Na primeira submissão vais receber
// um email de confirmação no teu endereço para activar o formulário.
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/hsvanda18@gmail.com'

export default function RSVP() {
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(false)
  const [form, setForm]       = useState({
    nome: '', apelido: '', telefone: '',
    confirmacao: '', acompanhantes: '0', mensagem: '',
  })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.nome || !form.confirmacao) return
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `RSVP Casamento — ${form.nome} ${form.apelido}`,
          _captcha: 'false',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="rsvp">
      <div className="rsvp-wrap">
        <Reveal>
          <span className="section-label">Confirmação de Presença</span>
          <h2 className="section-title">
            Vens<br /><em>celebrar connosco?</em>
          </h2>
          <p style={{ color: 'var(--soft)', lineHeight: 1.8, fontSize: '.95rem' }}>
            Por favor confirma a tua presença até ao dia{' '}
            <strong style={{ color: 'var(--bark)' }}>01 de Junho de 2026</strong>.
            A tua resposta ajuda-nos a preparar tudo com carinho.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="rsvp-success">
              <h3>Muito Obrigado! 🌿</h3>
              <p>A tua confirmação foi recebida. Mal podemos esperar para celebrar contigo este dia tão especial.</p>
            </div>
          ) : (
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" name="nome" type="text" placeholder="O teu nome" required value={form.nome} onChange={handleChange} />
                </div>
                <div className="field-group">
                  <label htmlFor="apelido">Apelido</label>
                  <input id="apelido" name="apelido" type="text" placeholder="O teu apelido" value={form.apelido} onChange={handleChange} />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input id="telefone" name="telefone" type="tel" placeholder="+244 9XX XXX XXX" value={form.telefone} onChange={handleChange} />
              </div>

              <div className="field-group">
                <label htmlFor="confirmacao">Confirmo a minha presença</label>
                <select id="confirmacao" name="confirmacao" required value={form.confirmacao} onChange={handleChange}>
                  <option value="">— Selecciona uma opção —</option>
                  <option value="Sim, estarei presente!">✓ Sim, estarei presente!</option>
                  <option value="Infelizmente não poderei comparecer">✗ Infelizmente não poderei comparecer</option>
                </select>
              </div>

              {form.confirmacao === 'Sim, estarei presente!' && (
                <div className="field-group">
                  <label htmlFor="acompanhantes">Número de acompanhantes</label>
                  <select id="acompanhantes" name="acompanhantes" value={form.acompanhantes} onChange={handleChange}>
                    <option value="Venho sozinho/a">Venho sozinho/a</option>
                    <option value="+ 1 acompanhante">+ 1 acompanhante</option>
                    <option value="+ 2 acompanhantes">+ 2 acompanhantes</option>
                    <option value="+ 3 acompanhantes">+ 3 acompanhantes</option>
                    <option value="+ 4 acompanhantes">+ 4 acompanhantes</option>
                  </select>
                </div>
              )}

              <div className="field-group">
                <label htmlFor="mensagem">Mensagem para os noivos (opcional)</label>
                <textarea id="mensagem" name="mensagem" placeholder="Deixa uma mensagem especial para o casal…" value={form.mensagem} onChange={handleChange} />
              </div>

              {error && (
                <p style={{ color: 'var(--terracota)', fontSize: '.85rem', marginBottom: '12px' }}>
                  Ocorreu um erro ao enviar. Tenta novamente ou contacta directamente pelo WhatsApp.
                </p>
              )}

              <button type="submit" className="rsvp-submit" disabled={loading}>
                {loading ? 'A enviar…' : 'Confirmar Presença'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
