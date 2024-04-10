"use client"

import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px 100px 0px', // Ajuste conforme necessário
      }
    );

    const target = document.getElementById(`image-${src}`);
    if (target) 
    
    {
      observer.observe(target);
    }

    return () => {
      if (target) 
      {
        observer.unobserve(target);
      }
    };
  }, [src]);

  useEffect(() => {
    if (isVisible) {
      setImageSrc(src);
    }
  }, [isVisible, src]);

  return (
    <img
      id={`image-${src}`}
      src={imageSrc || 'null'} // Coloque aqui um placeholder
      alt={alt}
    />
  );
};

const LazyLoadingExample: React.FC = () => {
  return (
    <div>
      <h1>Lazy Loading de Imagens</h1>
      <p>
        Scroll down para ver o Lazy Loading em ação. As imagens só serão carregadas quando estiverem próximas ao viewport.
      </p>
      <div style={{ height: '2000px' }}>
        {/* Espaço em branco para fazer a página rolar */}
      </div>

     
      <LazyImage src="/images/imagem1.png" alt="Imagem 1" />
      <LazyImage src="/images/imagem2.png" alt="Imagem 2" />
      <LazyImage src="/images/imagem3.png" alt="Imagem 3" />
      <LazyImage src="/images/imagem4.png" alt="Imagem 4" />
    </div>
  );
};

export default LazyLoadingExample;
