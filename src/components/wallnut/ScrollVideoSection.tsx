'use client';

import { useEffect, useRef } from 'react';

export default function ScrollVideoSection() {
  const outerRef  = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef  = useRef<HTMLVideoElement>(null);
  const text1Ref  = useRef<HTMLDivElement>(null);
  const text2Ref  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let killed = false;
    const triggers: any[] = [];

    const boot = async () => {
      const { gsap }         = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (killed) return;

      const outer  = outerRef.current;
      const container = videoContainerRef.current;
      const text1  = text1Ref.current;
      const text2  = text2Ref.current;
      if (!outer || !container || !text1 || !text2) return;

      // Check if mobile
      const isMobile = window.innerWidth < 1024;

      if (!isMobile) {
        // Desktop: Initially small and centered with curved edges
        gsap.set(container, { scale: 0.5, borderRadius: '24px' });
        gsap.set(text1, { autoAlpha: 0, y: 36, scale: 0.93 });
        gsap.set(text2, { autoAlpha: 0, y: 36, scale: 0.93 });

        // Expand video container from small to fullscreen
        const expandTween = gsap.to(container, {
          scale: 1,
          borderRadius: '0px',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: outer,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
        });
        triggers.push(expandTween.scrollTrigger);

        // Text animations
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: outer,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
        });
        tl1.to(text1, { autoAlpha: 1, y: 0, scale: 1, ease: 'power3.out' });
        triggers.push(tl1.scrollTrigger);

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: outer,
            start: 'center center',
            end: 'bottom top',
            scrub: 1,
          },
        });
        tl2
          .to(text1, { autoAlpha: 0, y: -28, scale: 1.05, ease: 'power3.in' }, 0)
          .to(text2, { autoAlpha: 1, y: 0, scale: 1, ease: 'power3.out' }, 0.3);
        triggers.push(tl2.scrollTrigger);
      } else {
        // Mobile: No animations, just static display
        gsap.set(text1, { autoAlpha: 1 });
        gsap.set(text2, { autoAlpha: 0 });
      }

      ScrollTrigger.refresh();
    };

    boot();

    return () => {
      killed = true;
      triggers.forEach(t => t?.kill());
    };
  }, []);

  return (
    <div
      ref={outerRef}
      className="video-section-outer"
      style={{ 
        position: 'relative',
        width: '100%',
        background: '#ffffff',
      }}
    >
      <div
        ref={videoContainerRef}
        className="video-container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#ffffff',
        }}
      >
        {/* ── video (autoplay loop) ─────────────────────────────────────────────── */}
        <video
          ref={videoRef}
          src="/assets/images/output_house002_tc.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position      : 'absolute',
            inset         : 0,
            width         : '100%',
            height        : '100%',
            objectFit     : 'cover',
            objectPosition: 'center',
          }}
        />

        {/* ── cinematic gradient overlay ─────────────────────────── */}
        <div style={{
          position  : 'absolute',
          inset     : 0,
          background: [
            'linear-gradient(to bottom,',
            '  rgba(5,5,5,0.62) 0%,',
            '  rgba(5,5,5,0.18) 40%,',
            '  rgba(5,5,5,0.18) 60%,',
            '  rgba(5,5,5,0.72) 100%)',
          ].join(''),
          zIndex: 1,
        }} />

        {/* ── subtle vignette ───────────────────────────────────── */}
        <div style={{
          position  : 'absolute',
          inset     : 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
          zIndex    : 2,
        }} />

        {/* ── FROM CONCEPT ──────────────────────────────────────── */}
        <div
          ref={text1Ref}
          style={{
            position      : 'absolute',
            inset         : 0,
            zIndex        : 3,
            display       : 'flex',
            flexDirection : 'column',
            alignItems    : 'center',
            justifyContent: 'center',
            textAlign     : 'center',
            padding       : '0 2rem',
            pointerEvents : 'none',
            willChange    : 'transform, opacity',
          }}
        >
          {/* eyebrow */}
          <span style={{
            display      : 'block',
            color        : 'rgba(253,196,31,0.85)',
            fontSize     : 'clamp(0.5rem, 0.75vw, 0.65rem)',
            fontWeight   : 300,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            marginBottom : '1.8rem',
            fontFamily   : '"Inter", sans-serif',
          }}>
            SAI AAKANKSHYA ASSOCIATES
          </span>

          {/* main heading */}
          <h2 style={{
            color        : '#ffffff',
            fontSize     : 'clamp(2.6rem, 8vw, 8.5rem)',
            fontWeight   : 100,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            lineHeight   : 1,
            fontFamily   : '"Inter", sans-serif',
            margin       : 0,
          }}>
            FROM CONCEPT
          </h2>

          {/* gold rule */}
          <div style={{
            width     : '2.5rem',
            height    : '1px',
            background: 'rgba(253,196,31,0.8)',
            marginTop : '2.2rem',
          }} />
        </div>

        {/* ── TO COMPLETION ─────────────────────────────────────── */}
        <div
          ref={text2Ref}
          style={{
            position      : 'absolute',
            inset         : 0,
            zIndex        : 3,
            display       : 'flex',
            flexDirection : 'column',
            alignItems    : 'center',
            justifyContent: 'center',
            textAlign     : 'center',
            padding       : '0 2rem',
            pointerEvents : 'none',
            willChange    : 'transform, opacity',
          }}
        >
          {/* eyebrow */}
          <span style={{
            display      : 'block',
            color        : 'rgba(253,196,31,0.85)',
            fontSize     : 'clamp(0.5rem, 0.75vw, 0.65rem)',
            fontWeight   : 300,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            marginBottom : '1.8rem',
            fontFamily   : '"Inter", sans-serif',
          }}>
            PREMIUM INFRASTRUCTURE EXECUTION
          </span>

          {/* main heading */}
          <h2 style={{
            color        : '#ffffff',
            fontSize     : 'clamp(2.6rem, 8vw, 8.5rem)',
            fontWeight   : 100,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            lineHeight   : 1,
            fontFamily   : '"Inter", sans-serif',
            margin       : 0,
          }}>
            TO COMPLETION
          </h2>

          {/* gold rule */}
          <div style={{
            width     : '2.5rem',
            height    : '1px',
            background: 'rgba(253,196,31,0.8)',
            marginTop : '2.2rem',
          }} />
        </div>
      </div>

      {/* ── Styles ──────────────────────────────────────────────── */}
      <style>{`
        /* Desktop: Expandable fullscreen video */
        @media (min-width: 1024px) {
          .video-section-outer {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
          }
          .video-container {
            width: 100%;
            height: 100vh;
          }
        }

        /* Mobile: Fixed 16:9 aspect ratio with padding */
        @media (max-width: 1023px) {
          .video-section-outer {
            padding: 2rem 1.5rem;
          }
          .video-container {
            width: 100%;
            aspect-ratio: 16 / 9;
            border-radius: 16px;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
