import { gsap } from 'gsap';

export const runAnimationsIntro = () => {
 
const tl = gsap.timeline({ defaults: { duration: 2, delay: 3 } });
tl.fromTo('.introText', { x: '-540%' }, { x: '0%' });

const tl2 = gsap.timeline({ defaults: { duration: 2.4, delay: 2.5 } });
tl2.fromTo('.about', { x: '-540%' }, { x: '0%' });

const tl3 = gsap.timeline({ defaults: { duration: 2.8, delay: 2.5 } });
tl3.fromTo('.education', { x: '-540%' }, { x: '0%' });

const tl4 = gsap.timeline({ defaults: { duration: 3.2, delay: 2.5} });
tl4.fromTo('.experience', { x: '-540%' }, { x: '0%' });

const tl5 = gsap.timeline({ defaults: { duration: 3.6, delay: 2.5 } });
tl5.fromTo('.projects', { x: '-540%' }, { x: '0%' });
};


