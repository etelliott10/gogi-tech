'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, LineChart, ShieldCheck } from 'lucide-react';
import { Flex, Grid, Heading, Text } from '@radix-ui/themes';
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
    <section style={{ position: 'relative', zIndex: 0, display: 'flex', minHeight: '100vh', alignItems: 'center', overflow: 'hidden', paddingTop: '6rem' }}>
      <div className="mesh-bg" />
      <Grid
        className="section-container"
        columns={{ initial: '1', md: '5' }}
        gap="7"
        align="center"
        style={{ position: 'relative', paddingBottom: '4rem' }}
      >
        <Flex direction="column" style={{ gridColumn: 'span 3' }}>
          <motion.p custom={0} variants={heroVariants} initial="hidden" animate="visible" className="mono-label">
            {'// AI-FIRST TECHNOLOGY PARTNER'}
          </motion.p>

          <motion.div custom={1} variants={heroVariants} initial="hidden" animate="visible">
            <Heading
              as="h1"
              size="9"
              className="font-display"
              mt="4"
              style={{ lineHeight: 1.1, maxWidth: '48rem' }}
            >
              We Build the AI That{' '}
              <span className="text-gradient">Builds Your Business</span>
            </Heading>
          </motion.div>

          <motion.div custom={2} variants={heroVariants} initial="hidden" animate="visible">
            <Text as="p" size="4" mt="4" style={{ color: 'var(--color-text-muted)', maxWidth: '40rem' }}>
              From intelligent agents to full robotics integration, Gogi Tech implements
              cutting-edge automation so your team can focus on what matters.
            </Text>
          </motion.div>

          <motion.div custom={3} variants={heroVariants} initial="hidden" animate="visible">
            <Flex gap="4" mt="7" wrap="wrap">
              <Button href="/book" size="xl" icon={<ArrowRight size={20} />} className="animate-pulseGlow">
                Book Your Free Strategy Call
              </Button>
              <Button href="/case-studies" variant="outline" size="xl" icon={<ArrowRight size={20} />}>
                See Our Work
              </Button>
            </Flex>
          </motion.div>

          <motion.div custom={4} variants={heroVariants} initial="hidden" animate="visible">
            <Text as="p" size="2" mt="4" style={{ color: 'var(--color-text-muted)' }}>
              ✓ Free 30-min consultation &nbsp; ✓ No commitment &nbsp; ✓ Response within 24hrs
            </Text>
          </motion.div>
        </Flex>

        <motion.div
          custom={3}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          style={{ position: 'relative', gridColumn: 'span 2' }}
        >
          <div style={{
            position: 'relative',
            margin: '0 auto',
            aspectRatio: '1',
            maxWidth: '28rem',
            borderRadius: '2rem',
            border: '1px solid var(--color-border)',
            backgroundColor: 'rgba(19,19,22,0.6)',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)'
          }}>
            <div style={{
              position: 'absolute',
              inset: '1rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(192,21,42,0.2)',
              background: 'linear-gradient(135deg, rgba(192,21,42,0.2), transparent, transparent)'
            }} />
            <Flex align="center" justify="center" style={{ height: '100%', position: 'relative' }}>
              <div className="animate-spin" style={{ position: 'absolute', height: '10rem', width: '10rem', borderRadius: '50%', border: '1px solid rgba(192,21,42,0.35)', borderTopColor: 'var(--color-primary-light)', animationDuration: '18s' }} />
              <div className="animate-spin" style={{ position: 'absolute', height: '14rem', width: '14rem', borderRadius: '50%', border: '1px solid rgba(192,21,42,0.2)', borderBottomColor: 'var(--color-primary-light)', animationDuration: '25s', animationDirection: 'reverse' }} />
              <Bot size={56} style={{ color: 'var(--color-primary-light)' }} />
            </Flex>
          </div>

          <Grid columns={{ initial: '3', md: '1' }} gap="3" mt="4">
            {stats.map((stat) => (
              <Card key={stat.subtitle} variant="elevated" style={{ padding: '1rem' }}>
                <Text size="6" weight="bold" className="font-display" style={{ color: 'var(--color-primary-light)' }}>
                  {stat.title}
                </Text>
                <Text as="p" size="1" style={{ color: 'var(--color-text-muted)' }}>{stat.subtitle}</Text>
              </Card>
            ))}
          </Grid>

          <div style={{ position: 'absolute', left: '-1rem', top: '2rem', borderRadius: '0.75rem', border: '1px solid rgba(192,21,42,0.3)', backgroundColor: 'rgba(28,28,33,0.9)', padding: '0.75rem' }}>
            <LineChart size={16} style={{ color: 'var(--color-primary-light)' }} />
          </div>
          <div style={{ position: 'absolute', right: '-1rem', bottom: '4rem', borderRadius: '0.75rem', border: '1px solid rgba(192,21,42,0.3)', backgroundColor: 'rgba(28,28,33,0.9)', padding: '0.75rem' }}>
            <ShieldCheck size={16} style={{ color: 'var(--color-primary-light)' }} />
          </div>
        </motion.div>
      </Grid>
    </section>
  );
}
