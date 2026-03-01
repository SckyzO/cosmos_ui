import { useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ALPHABET =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const FONT_SIZE = 16;

/**
 * Full-screen canvas rain shown when darkTheme='matrix'.
 * Rendered outside cosmos-root so z-index stacking works correctly.
 */
export const MatrixBackground = () => {
  const { mode, darkTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const active = mode === 'dark' && darkTheme === 'matrix';

  const startRain = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas)
      return () => {
        /* noop */
      };
    const ctx = canvas.getContext('2d');
    if (!ctx)
      return () => {
        /* noop */
      };

    const drops: number[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = 0;
      drops.push(...Array(Math.floor(canvas.width / FONT_SIZE)).fill(1));
    };
    resize();
    window.addEventListener('resize', resize);

    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(15, 255, 0, 0.5)';
      ctx.font = `${FONT_SIZE}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE);
        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    return startRain();
  }, [active, startRain]);

  return (
    <>
      <canvas id="matrix-bg-canvas" ref={canvasRef} aria-hidden="true" />
      <div id="matrix-dimmer" aria-hidden="true" />
    </>
  );
};
