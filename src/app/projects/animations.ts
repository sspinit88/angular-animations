import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px',
      transform: 'scale(1)'
    }),
    animate('300ms ease-out', style({
      transform: 'scale(1.03)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('200ms ease-out')
  ]),
  // transition('marked => default', animate('300ms ease-out')),
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)',
    }),
    animate('1.5s ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)',
        offset: .6,
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1,
      }),
    ])),
  ]),
  transition(':leave', [
    animate('500ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 0,
      }),
      style({
        opacity: 1,
        transform: 'translateX(-15%)',
        offset: .4,
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)',
        offset: 1,
      }),
    ]))
  ]),
]);
