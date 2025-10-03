export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-[var(--fontColor)] font-[var(--font-wix-madefor-display)] mb-4">
                    🔒 Privacy Policy
                </h1>
                <p className="text-gray-600 font-[var(--font-dm-sans)] text-lg">
                    Your data is like your favorite coffee - we keep it hot, fresh, and never share it with strangers! ☕
                </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
                <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-[var(--secondaryBackground)]">
                    <h2 className="text-2xl font-bold text-[var(--secondaryBackground)] font-[var(--font-wix-madefor-display)] mb-4">
                        🎯 What We Collect (The Good Stuff)
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We collect the essentials to make your Coordinator experience amazing:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li><strong>Your name</strong> - So we can greet you properly (no Hey you! here!)</li>
                        <li><strong>Email address</strong> - For important updates and the occasional cat meme</li>
                        <li><strong>Usage data</strong> - To make our app work like a well-oiled machine</li>
                        <li><strong>Cookies</strong> - The digital kind, not the chocolate chip ones (sadly)</li>
                    </ul>
                </section>

                <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h2 className="text-2xl font-bold text-green-700 font-[var(--font-wix-madefor-display)] mb-4">
                        🛡️ How We Protect Your Data
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We treat your data like it&apos;s the last slice of pizza - with extreme care and protection! Our security measures include:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li><strong>Encryption</strong> - Your data is scrambled like a secret code</li>
                        <li><strong>Secure servers</strong> - Protected by digital dragons (metaphorically speaking)</li>
                        <li><strong>Regular backups</strong> - Because nobody likes losing their stuff</li>
                        <li><strong>Access controls</strong> - Only authorized wizards can see your data</li>
                    </ul>
                </section>

                <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-[var(--accentColor)]">
                    <h2 className="text-2xl font-bold text-[var(--accentColor)] font-[var(--font-wix-madefor-display)] mb-4">
                        🚫 What We DON&apos;T Do
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We promise we&apos;re not the villains in this story:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li>We don&apos;t sell your data to sketchy third parties</li>
                        <li>We don&apos;t read your private messages (pinky promise!)</li>
                        <li>We don&apos;t track you across the entire internet like a digital stalker</li>
                        <li>We don&apos;t use your data for evil world domination plans</li>
                    </ul>
                </section>

                <section className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h2 className="text-2xl font-bold text-purple-700 font-[var(--font-wix-madefor-display)] mb-4">
                        🎪 Your Rights (You&apos;re the Star!)
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        You have superpowers when it comes to your data:
                    </p>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                        <li><strong>Access</strong> - See what we know about you (spoiler: it&apos;s not much!)</li>
                        <li><strong>Update</strong> - Change your info whenever you want</li>
                        <li><strong>Delete</strong> - Make us forget you (we&apos;ll be sad, but we&apos;ll do it)</li>
                        <li><strong>Port</strong> - Take your data and run (we won&apos;t chase you)</li>
                    </ul>
                </section>

                <section className="bg-red-50 p-6 rounded-lg border-l-4 border-[var(--accentColor2)]">
                    <h2 className="text-2xl font-bold text-[var(--accentColor2)] font-[var(--font-wix-madefor-display)] mb-4">
                        📞 Contact Us (We&apos;re Friendly!)
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Questions about privacy? We&apos;re here to help! Drop us a line at:
                    </p>
                    <div className="mt-4 p-4 bg-white rounded-lg border">
                        <p className="text-[var(--accentColor)] font-medium">
                            📧 privacy@coordinator.app<br/>
                            📱 +1 (555) COORDINATE<br/>
                            🏢 123 Privacy Street, Data City, DC 12345
                        </p>
                    </div>
                </section>

                <div className="text-center mt-8 p-6 bg-gradient-to-r from-[var(--secondaryBackground)] to-[var(--accentColor)] rounded-lg text-white">
                    <p className="text-lg font-[var(--font-wix-madefor-display)]">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="text-sm mt-2 opacity-90">
                        We promise to keep this policy as fresh as our coffee! ☕✨
                    </p>
                </div>
            </div>
        </div>
    )
}