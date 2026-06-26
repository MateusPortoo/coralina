"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Foto de produto com fallback: se o arquivo não existir, retorna null
 * para que o placeholder de gradiente atrás apareça.
 */
export function ProductImage({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />
  );
}
