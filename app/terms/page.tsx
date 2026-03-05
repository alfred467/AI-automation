"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#0f172a", "#1b2735", "#0f172a"]} amplitude={1.2} blend={0.6} speed={0.4} />
            </div>

            <div className="relative z-10">
                <GlassmorphismNav />

                <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        Terms of Service
                    </h1>

                    <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300">
                        <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">Effective Date: March 2026</p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
                            <p>By accessing or using Xovix AI, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white">2. User Accounts</h2>
                            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
                            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Xovix Labs and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Xovix Labs.</p>
                        </section>

                        <section className="space-y-4 pt-12 border-t border-white/10 text-center">
                            <p className="text-xs text-slate-500 italic">This platform architecture and legal framework were designed and implemented by Alfred.</p>
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
