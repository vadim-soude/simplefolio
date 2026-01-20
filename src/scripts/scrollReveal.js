export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    animation.duration = 350; // Override duration to 200ms for all animations
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}
