import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';

export const fadeAnimation = animation([
  style({
    opacity: '{{ startOpacity }}'
  }),
  animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '100ms'} });

// todo анимация при переходе по роутам
export const routFadeStateTrigger = (params) => trigger('routFadeState', [
  transition(':enter', [
    useAnimation(fadeAnimation, {params: params}),
  ]),
  transition(':leave', [
    animate('.5s ease-in', style({
      opacity: 0
    }))
  ]),
]);

export const routSlideStateTrigger = trigger('routSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0,
    }),
    animate(500)
  ]),
  transition(':leave', animate(500,
    style({
      transform: 'translateY(100%)',
      opacity: 0,
    }))),
]);



