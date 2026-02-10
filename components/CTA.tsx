import { ArrowRightIcon } from 'lucide-react';
import { GhostButton } from './Buttons';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="py-20 2xl:pb-32 px-4">
            <div className="container mx-auto max-w-3xl">
                <div className="rounded-3xl bg-linear-to-b from-orange-100/40 to-orange-50/30 border border-orange-200/60 p-12 md:p-16 text-center relative overflow-hidden shadow-sm">
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
                    <div className="relative z-10">
                        <motion.h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-gray-900"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                        >
                            Ready to discuss your project?
                        </motion.h2>
                        <motion.p className="max-sm:text-sm text-gray-700 mb-10 max-w-xl mx-auto"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                        >
                            Contact WillTech Engineering to explore how we can support your infrastructure, construction, or programme delivery with professional engineering and quantity surveying expertise.
                        </motion.p>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                        >
                            <GhostButton className="px-8 py-3 gap-2">
                                Get in touch <ArrowRightIcon size={20} />
                            </GhostButton>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};