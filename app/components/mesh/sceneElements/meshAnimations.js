import { gsap } from 'gsap';

export const runAnimationsIntro = () => {
 
const tl = gsap.timeline({ defaults: { duration: 2, delay: 2 } });
tl.fromTo('.introText', { x: '-540%' }, { x: '0%' });

const tl2 = gsap.timeline({ defaults: { duration: 2, delay: 2.1 } });
tl2.fromTo('.about', { x: '-540%' }, { x: '0%' });

const tl3 = gsap.timeline({ defaults: { duration: 2.2, delay: 2.1 } });
tl3.fromTo('.education', { x: '-540%' }, { x: '0%' });

const tl4 = gsap.timeline({ defaults: { duration: 2.4, delay: 2.1} });
tl4.fromTo('.experience', { x: '-540%' }, { x: '0%' });

const tl5 = gsap.timeline({ defaults: { duration: 2.6, delay: 2.1 } });
tl5.fromTo('.projects', { x: '-540%' }, { x: '0%' });

const tl6 = gsap.timeline({ defaults: { duration: 3.8, delay: 2.1 } });
tl6.fromTo('.li', { x: '-540%' }, { x: '0%' });

const tl7 = gsap.timeline({ defaults: { duration: 4, delay: 2.1 } });
tl7.fromTo('.gh', { x: '-540%' }, { x: '0%' });

const tl8 = gsap.timeline({ defaults: { duration: 4.1, delay: 2.1 } });
tl8.fromTo('.em', { x: '-540%' }, { x: '0%' });

const tl9 = gsap.timeline({ defaults: { duration: 4.2, delay: 2.1 } });
tl9.fromTo('.wa', { x: '-540%' }, { x: '0%' });
};


