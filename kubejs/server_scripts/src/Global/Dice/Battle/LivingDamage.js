// priority: 50
import { Components } from "packages/moe/wolfgirl/probejs/generated/registry/mna/Components"
import { $LivingDamageEvent } from "packages/net/minecraftforge/event/entity/living/$LivingDamageEvent"
import { playerDamage } from "../../../Dice/Battle/PlayerDamage/PlayerDamage"
const { $Player } = require("packages/net/minecraft/world/entity/player/$Player")

/**
 * handle living damage event
 * @param {$LivingDamageEvent} event 
 */
global.livingDamage = (event) => {
    const {
        entity : target, // entity that take damage
        amount, // damage amount
        source, // damage source
        source : { actual : entity } // enitty that deal damage
    } = event
    playerDamage(entity, target, amount , source)
}