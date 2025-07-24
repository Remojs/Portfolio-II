import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fadeIn, .fadeInLeft, .fadeInRight, .zoomIn');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Element is considered visible when its top part is in the lower 80% of the viewport
        if (elementTop < windowHeight - elementHeight * 0.2) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on initial load
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollAnimation;
