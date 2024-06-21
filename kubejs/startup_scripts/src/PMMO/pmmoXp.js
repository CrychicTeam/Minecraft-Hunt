// priority: 100
const { $Player_ } = require("packages/net/minecraft/world/entity/player/$Player")
/**
 * @description A set of actions when players earn pmmo xp.
 */
global.pmmoXp = (event) => {
  /** @type {$Player_} */
  const player = event.getEntity()
  /** @type {string} */
  const skill = event.skill
  /** @type {boolean} */
  const levelup = event.isLevelUp()
  /** @type {number} */
  const xp = event.amountAwarded
  // event.setCanceled(boolean): whether to cancel the event.

  switch (skill) {
    case "agility":
      event.setCanceled(true)
      break;
    case "":
      break;
    default:
      event.setCanceled(true)
      break;
  }
}
/**
 * @description A set of actions when players earn pmmo xp.
 */
export const handlePmmoXp = (event) => {
  global.pmmoXp(event);
}