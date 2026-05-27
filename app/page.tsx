export default function Home() {
  const faqs = [
    {
      q: 'How does the speaking queue work?',
      a: 'Members type /raise in your Discord server to join the queue. The bot announces their turn, enforces time limits, and moves to the next speaker automatically.'
    },
    {
      q: 'Which Discord permissions does the bot need?',
      a: 'The bot needs Send Messages, Read Message History, and Connect to voice channels. No admin permissions required.'
    },
    {
      q: 'Can I try it before subscribing?',
      a: 'Yes — the bot is free for servers with up to 10 queue entries per day. Subscribe for unlimited queues, analytics, and priority support.'
    }
  ]

  return (
    <main className="min-h-screen px-4 py-16 max-w-3xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Bot + Web Dashboard
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Fair Speaking Queues<br />for Discord Voice Channels
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Let members raise their hand, enforce time limits, and keep conversations structured — without the chaos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[['Hand Raising', '/raise command'], ['Time Limits', 'Auto-enforced'], ['Notifications', 'Your turn alerts']].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-white font-semibold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$19<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Per Discord server</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited queue entries',
              'Custom time limits per server',
              'Web dashboard & analytics',
              'Priority speaker notifications',
              'Multi-channel support',
              'Priority email support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Voice Queue Manager. All rights reserved.
      </footer>
    </main>
  )
}
