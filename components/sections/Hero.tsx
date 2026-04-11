'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, LineChart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

const stats = [
  { title: '50+', subtitle: 'AI Agents Deployed' },
  { title: '3x', subtitle: 'Avg. Efficiency Gain' },
  { title: '100%', subtitle: 'Client Retention' }
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="mesh-bg" />
      <div className="section-container relative grid items-center gap-10 pb-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <motion.p custom={0} variants={heroVariants} initial="hidden" animate="visible" className="mono-label">
            {'// AI-FIRST TECHNOLOGY PARTNER'}
          </motion.p>

          <motion.h1
            custom={1}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            We Build the AI That <span className="text-gradient">Builds Your Business</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-2xl text-base text-text-muted sm:text-lg"
          >
            From intelligent agents to full robotics integration, Gogi Tech implements cutting-edge automation so your
            team can focus on what matters.
          </motion.p>

          <motion.div custom={3} variants={heroVariants} initial="hidden" animate="visible" className="mt-8 flex flex-wrap gap-4">
            <Button href="/book" size="xl" icon={<ArrowRight className="h-5 w-5" />} className="animate-pulseGlow">
              Book Your Free Strategy Call
            </Button>
            <Button href="/case-studies" variant="outline" size="xl" icon={<ArrowRight className="h-5 w-5" />}>
              See Our Work
            </Button>
          </motion.div>

          <motion.p custom={4} variants={heroVariants} initial="hidden" animate="visible" className="mt-5 text-sm text-text-muted">
            ✓ Free 30-min consultation &nbsp; ✓ No commitment &nbsp; ✓ Response within 24hrs
          </motion.p>
        </div>

        <motion.div
          custom={3}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative lg:col-span-2"
        >
          <div className="relative mx-auto aspect-square max-w-md rounded-[2rem] border border-border bg-bg-card/60 p-6 backdrop-blur">
            <div className="absolute inset-4 rounded-[1.5rem] border border-primary/20 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="relative flex h-full items-center justify-center">
              <div className="absolute h-40 w-40 animate-spin rounded-full border border-primary/35 border-t-primary-light" style={{ animationDuration: '18s' }} />
              <div className="absolute h-56 w-56 animate-spin rounded-full border border-primary/20 border-b-primary-light" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <Bot className="h-14 w-14 text-primary-light" />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <Card key={stat.subtitle} variant="elevated" className="p-4">
                <p className="font-display text-2xl font-bold text-primary-light">{stat.title}</p>
                <p className="text-xs text-text-muted">{stat.subtitle}</p>
              </Card>
            ))}
          </div>

          <div className="pointer-events-none absolute -left-4 top-8 hidden rounded-xl border border-primary/30 bg-bg-elevated/90 p-3 lg:block">
            <LineChart className="h-4 w-4 text-primary-light" />
          </div>
          <div className="pointer-events-none absolute -right-4 bottom-16 hidden rounded-xl border border-primary/30 bg-bg-elevated/90 p-3 lg:block">
            <ShieldCheck className="h-4 w-4 text-primary-light" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
