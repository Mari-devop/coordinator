import { legalPageStyles } from "../styles/privacyPolicyStyles";

export default function TermsAndConditionPage() {
    const { container, header, section, content, contact, footer } = legalPageStyles;
    
    return (
        <div className={container.containerWide}>
            <div className={header.header}>
                <h1 className={header.title}>
                    📋 Terms & Conditions
                </h1>
                <p className={header.subtitle}>
                    The official rules of our digital playground - where fun meets responsibility! 🎮
                </p>
            </div>

            <div className={container.infoContainer}>
                <section className={section.blue.container}>
                    <h2 className={section.blue.title}>
                        🎉 Welcome to Coordinator!
                    </h2>
                    <p className={content.paragraph}>
                        By using our app, you&apos;re joining the coolest coordination club in town! These terms are like the house rules at a really awesome party - they keep everyone happy and safe.
                    </p>
                </section>

                <section className={section.green.container}>
                    <h2 className={section.green.title}>
                        ✅ What You Can Do (The Fun Stuff!)
                    </h2>
                    <p className={content.paragraph}>
                        We encourage you to:
                    </p>
                    <ul className={content.list}>
                        <li><span className={content.strong}>Use our app</span> - That&apos;s the whole point! 🎯</li>
                        <li><span className={content.strong}>Be awesome</span> - Spread positivity like confetti</li>
                        <li><span className={content.strong}>Share feedback</span> - Help us make things even better</li>
                        <li><span className={content.strong}>Have fun</span> - Life&apos;s too short for boring apps</li>
                        <li><span className={content.strong}>Respect others</span> - Treat everyone like you&apos;d want to be treated</li>
                    </ul>
                </section>

                <section className={section.yellow.container}>
                    <h2 className={section.yellow.title}>
                        ⚠️ What You Shouldn&apos;t Do (The Not-So-Fun Stuff)
                    </h2>
                    <p className={content.paragraph}>
                        Please don&apos;t be that person who ruins the party:
                    </p>
                    <ul className={content.list}>
                        <li>Don&apos;t try to hack our systems (we have digital guard dogs)</li>
                        <li>Don&apos;t spam other users (nobody likes spam, except maybe the canned kind)</li>
                        <li>Don&apos;t share inappropriate content (keep it PG, folks)</li>
                        <li>Don&apos;t pretend to be someone else (identity theft isn&apos;t a good look)</li>
                        <li>Don&apos;t use our app for illegal activities (we&apos;re not running a crime academy)</li>
                    </ul>
                </section>

                <section className={section.purple.container}>
                    <h2 className={section.purple.title}>
                        🛡️ Our Responsibilities (We&apos;ve Got Your Back!)
                    </h2>
                    <p className={content.paragraph}>
                        We promise to:
                    </p>
                    <ul className={content.list}>
                        <li><span className={content.strong}>Keep the app running</span> - Like a reliable friend who&apos;s always there</li>
                        <li><span className={content.strong}>Protect your data</span> - Guard it like it&apos;s the last cookie in the jar</li>
                        <li><span className={content.strong}>Listen to feedback</span> - We actually read your messages (seriously!)</li>
                        <li><span className={content.strong}>Fix bugs quickly</span> - No one likes glitchy apps</li>
                        <li><span className={content.strong}>Be transparent</span> - No hidden surprises or plot twists</li>
                    </ul>
                </section>

                <section className={section.red.container}>
                    <h2 className={section.red.title}>
                        ⚖️ The Legal Stuff (Boring but Important)
                    </h2>
                    <p className={content.paragraph}>
                        We have to include this part (lawyers made us do it):
                    </p>
                    <ul className={content.list}>
                        <li><span className={content.strong}>Service availability</span> - We try to be online 24/7, but sometimes we need coffee breaks</li>
                        <li><span className={content.strong}>Limitation of liability</span> - We&apos;re not responsible for world peace or perfect weather</li>
                        <li><span className={content.strong}>Changes to terms</span> - We might update these, but we will let you know (pinky promise!)</li>
                        <li><span className={content.strong}>Governing law</span> - These terms are governed by the laws of common sense</li>
                    </ul>
                </section>

                <section className={section.indigo.container}>
                    <h2 className={section.indigo.title}>
                        🚀 Termination (The Breakup Clause)
                    </h2>
                    <p className={content.paragraph}>
                        If things don&apos;t work out between us:
                    </p>
                    <ul className={content.list}>
                        <li>You can leave anytime (no hard feelings!)</li>
                        <li>We can end the relationship if you break the rules</li>
                        <li>We&apos;ll give you a heads up before we say goodbye</li>
                        <li>Your data will be handled with dignity and respect</li>
                    </ul>
                </section>

                <section className={section.teal.container}>
                    <h2 className={section.teal.title}>
                        📞 Need Help? (We&apos;re Here for You!)
                    </h2>
                    <p className={content.paragraph}>
                        Questions about these terms? We&apos;re just a message away:
                    </p>
                    <div className={contact.container}>
                        <p className={contact.text}>
                            📧 legal@coordinator.app<br/>
                            📱 +1 (555) COORDINATE<br/>
                            🏢 123 Legal Lane, Terms City, TC 12345
                        </p>
                    </div>
                </section>

                <div className={footer.container}>
                    <p className={footer.date}>
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className={footer.note}>
                        Thanks for reading! Now let&apos;s get back to having fun! 🎉✨
                    </p>
                </div>
            </div>
        </div>
    )
}