import { useEffect, useRef, useState } from 'react';

type HtmlElement = HTMLDivElement;

export function useIsHovered(): [boolean, React.RefObject<HtmlElement>|null] {
  const ref = useRef<HtmlElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const enter = () => {
      setIsHovered(true);
    };
    const leave = () => {
      setIsHovered(false);
    };

    ref.current?.addEventListener('mouseenter', enter);
    ref.current?.addEventListener('mouseleave', leave);

    return () => {
      ref.current?.removeEventListener('mouseenter', enter);
      ref.current?.removeEventListener('mouseleave', leave);
    };
  }, []);

  return [isHovered, ref];
}
