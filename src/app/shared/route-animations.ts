import { animate, style, transition, trigger } from '@angular/animations';

// todo анимация при переходе по роутам
export const routFadeStateTrigger = trigger('routFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('.5s ease-out')
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
