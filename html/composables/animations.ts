import { gsap } from 'gsap';

export function animateTextSpan(
  thisEl: HTMLElement,
  elementClass: string,
  delay: number = 0,
  fontHexColor: string = '#000000',
  maskHexColor: string = '#0a369d'
): void {
  const element = thisEl.querySelector<HTMLElement>(elementClass);

  if (!element) {
    console.error(`Element with class "${elementClass}" not found.`);
    return;
  }

  element.style.position = 'relative';
  element.style.color = 'transparent';

  const mask = document.createElement('div');
  mask.style.position = 'absolute';
  mask.style.top = '0';
  mask.style.left = '-5%';
  mask.style.width = '0';
  mask.style.height = '100%';
  mask.style.transform = 'skewX(35deg)';
  mask.style.backgroundColor = maskHexColor;

  element.appendChild(mask);

  gsap.to(mask, {
    duration: 1,
    delay: delay,
    width: 'calc(100% + 3rem)',
    ease: 'power2.ease-in-out',
    onComplete: () => {
      element.style.color = fontHexColor;
      gsap.to(mask, {
        duration: 0.5,
        width: '0%',
        opacity: 0,
        ease: 'power2.inOut',
      });
    },
  });
}

export function showTextSpanEl(
  element: HTMLElement,
  delay: number = 0,
  fontHexColor: string = '#000000',
  maskHexColor: string = '#0a369d'
): void {
  if (!element) return;

  element.style.position = 'relative';
  element.style.color = 'transparent';

  const mask = document.createElement('div');
  mask.style.position = 'absolute';
  mask.style.top = '0';
  mask.style.left = '-5%';
  mask.style.width = '0';
  mask.style.height = '100%';
  mask.style.transform = 'skewX(35deg)';
  mask.style.backgroundColor = maskHexColor;

  element.appendChild(mask);

  gsap.to(mask, {
    duration: 1,
    delay: delay,
    width: 'calc(100% + 3rem)',
    ease: 'power2.ease-in-out',
    onComplete: () => {
      element.style.color = fontHexColor;
      gsap.to(mask, {
        duration: 0.5,
        width: '0%',
        opacity: 0,
        ease: 'power2.inOut',
      });
    },
  });
}

export function hideTextSpanEl(el: HTMLElement): void {
  gsap.to(el, {
    duration: 0.5,
    color: "transparent",
  });
};

export function showCardEl(el: HTMLElement): void {
  gsap.to(el, {
    duration: 0.5,
    opacity: 1,
    scale: 1,
    translateY: "0%",
    ease: 'power2.inOut',
  });
}

export function hideCardEl(el: HTMLElement): void {
  gsap.to(el, {
    duration: 0.5,
    opacity: 0,
    scale: 1.05,
    translateY: "25%",
    ease: 'power2.inOut',
  });
}

export function showBlurText(el: HTMLElement,
  delay: number = 0,
) {
  gsap.to(el, {
    filter: 'blur(0px)',
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut',
    delay: delay,
  })
}

export function hideBlurText(el: HTMLElement,
  delay: number = 0,) {
  gsap.to(el, {
    filter: 'blur(15px)',
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    delay: delay,
  })
}
