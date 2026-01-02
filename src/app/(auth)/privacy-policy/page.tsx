import { legalPageStyles } from "@/app/(auth)/_styles/privacyPolicyStyles";

export default function PrivacyPolicyPage() {
    const { container, header, section, content, contact, footer } = legalPageStyles;
    
    return (
        <div className={container.container}>
            <div className={header.header}>
                <h1 className={header.title}>
                    🔒 Privacy Policy
                </h1>
                <p className={header.subtitle}>
                    Your data is like your favorite coffee - we keep it hot, fresh, and never share it with strangers! ☕
                </p>
            </div>

            <div className={container.infoContainer}>
                <section className={section.blue.container}>
                    <h2 className={section.blue.title}>
                        🎯 What We Collect (The Good Stuff)
                    </h2>
                    <p className={content.paragraph}>
                        We collect the essentials to make your Coordinator experience amazing:
                    </p>
                    <ul className={content.list}>
                        <li><span className={content.strong}>Your name</span> - So we can greet you properly (no Hey you! here!)</li>
                        <li><span className={content.strong}>Email address</span> - For important updates and the occasional cat meme</li>
                        <li><span className={content.strong}>Usage data</span> - To make our app work like a well-oiled machine</li>
                        <li><span className={content.strong}>Cookies</span> - The digital kind, not the chocolate chip ones (sadly)</li>
                    </ul>
                </section>

                <section className={section.green.container}>
                    <h2 className={section.green.title}>
                        🛡️ How We Protect Your Data
                    </h2>
                    <p className={content.paragraph}>
                        We treat your data like it&apos;s the last slice of pizza - with extreme care and protection! Our security measures include:
                    </p>
                    <ul className={content.list}>
                        <li><span className={content.strong}>Encryption</span> - Your data is scrambled like a secret code</li>
                        <li><span className={content.strong}>Secure servers</span> - Protected by digital dragons (metaphorically speaking)</li>
                        <li><span className={content.strong}>Regular backups</span> - Because nobody likes losing their stuff</li>
                        <li><span className={content.strong}>Access controls</span> - Only authorized wizards can see your data</li>
                    </ul>
                </section>

                <section className={section.yellow.container}>
                    <h2 className={section.yellow.title}>
                        🚫 What We DON&apos;T Do
                    </h2>
                    <p className={content.paragraph}>
                        We promise we&apos;re not the villains in this story:
                    </p>
                    <ul className={content.list}>
                        <li>We don&apos;t sell your data to sketchy third parties</li>
                        <li>We don&apos;t read your private messages (pinky promise!)</li>
                        <li>We don&apos;t track you across the entire internet like a digital stalker</li>
                        <li>We don&apos;t use your data for evil world domination plans</li>
                    </ul>
                </section>

                <section className={section.purple.container}>
                    <h2 className={section.purple.title}>
                        🎪 Your Rights (You&apos;re the Star!)
                    </h2>
                    <p className={content.paragraph}>
                        You have superpowers when it comes to your data:
                    </p>
                    <ul className={content.list}>
                        <li><span className={content.strong}>Access</span> - See what we know about you (spoiler: it&apos;s not much!)</li>
                        <li><span className={content.strong}>Update</span> - Change your info whenever you want</li>
                        <li><span className={content.strong}>Delete</span> - Make us forget you (we&apos;ll be sad, but we&apos;ll do it)</li>
                        <li><span className={content.strong}>Port</span> - Take your data and run (we won&apos;t chase you)</li>
                    </ul>
                </section>

                <section className={section.red.container}>
                    <h2 className={section.red.title}>
                        📞 Contact Us (We&apos;re Friendly!)
                    </h2>
                    <p className={content.paragraph}>
                        Questions about privacy? We&apos;re here to help! Drop us a line at:
                    </p>
                    <div className={contact.container}>
                        <p className={contact.text}>
                            📧 privacy@coordinator.app<br/>
                            📱 +1 (555) COORDINATE<br/>
                            🏢 123 Privacy Street, Data City, DC 12345
                        </p>
                    </div>
                </section>

                <div className={footer.container}>
                    <p className={footer.date}>
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className={footer.note}>
                        We promise to keep this policy as fresh as our coffee! ☕✨
                    </p>
                </div>
            </div>
        </div>
    )
}