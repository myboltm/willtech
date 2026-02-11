import { motion } from 'framer-motion';
import Title from './Title';

export default function About() {
    return (
        <section id="about" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="About Us"
                    heading="Your Trusted Project Guardian"
                    description="Protecting Nigerian investments from diaspora with integrity and transparency"
                />

                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                    className="max-w-3xl mx-auto bg-orange-50/60 border border-orange-200/60 rounded-2xl p-8 md:p-10 shadow-sm"
                >
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        WillTech Engineering Ltd is a Nigeria-registered engineering and project support company dedicated to protecting the interests of Nigerians in the diaspora. We understand the unique challenges you face when investing in construction and infrastructure projects back home.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Too often, diaspora investors fall victim to fraud and mismanagement by untrustworthy contractors and project managers. Distance and trust issues make it difficult to ensure projects progress as promised.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        That's where we come in. With professional teams in both Nigeria and the UK, we provide independent oversight, verification, and monitoring of every aspect of your project. From initial surveys to final handover, we ensure complete transparency, guarantee progress, and protect you from being scammed.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
