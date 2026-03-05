"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#0f172a", "#1e293b", "#0f172a"]} amplitude={1} blend={0.5} speed={0.5} />
            </div>

            <div className="relative z-10">
                <GlassmorphismNav />

                <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
                        <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">Last Updated: March 2026</p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                            <p>Welcome to Xovix AI. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
                            <p>We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, or when you participate in activities on the Website.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
                            <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                        </section>

                        <section className="space-y-4 pt-12 border-t border-white/10 text-center">
                            <p className="text-xs text-slate-500 italic">This platform and all associated legal documentation were developed and integrated by Alfred.</p>
                            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">dev by Alfred</p>
                            </div>
                        </section>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    )
}
