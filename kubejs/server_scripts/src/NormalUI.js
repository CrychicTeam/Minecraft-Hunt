// PlayerEvents.tick(event=>{
//     const player = event.player
//     global.initDice(player)
//     const attackdice = player.data.attackdice
//     const defenddice = player.data.defencedice
//     const ultildice = player.data.ultildice
//     player.paint({
//         battleDiceDisplay: {
//           type: 'text',
//           x: -20,
//           y: -45,
//           scale: 2.0,
//           text: `${attackdice}`,
//           color: '#cf0f0f',
//           alignX: 'right',
//           alignY: 'bottom'
//         }
//     });
//     player.paint({
//       equipmentdiceDisplay: {
//         type: 'text',
//         x: -58,
//         y: -37,
//         scale: 1.5,
//         text: `${defenddice}`,
//         color: '#d0923f',
//         alignX: 'right',
//         alignY: 'bottom'
//       }
//     });
//     player.paint({
//       cultildiceDisplay: {
//         type: 'text',
//         x: -90,
//         y: -39,
//         scale: 1.0,
//         text: `${ultildice}`,
//         color: '#a8c6ee',
//         alignX: 'right',
//         alignY: 'bottom'
//       }
//     });
// })