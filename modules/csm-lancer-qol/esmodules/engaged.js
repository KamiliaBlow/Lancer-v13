/* global CanvasAnimation, Ray, CONFIG, game */

import { log } from "./log.js";

function tokenGridDistance(t1, t2) {
    log(`Compare ${t1.document.name} to ${t2.document.name}.`);
    const gridSize = canvas.grid.size;
    const t1x = t1.document.x + (t1.document.width * gridSize) / 2;
    const t1y = t1.document.y + (t1.document.height * gridSize) / 2;
    const t2x = t2.document.x + (t2.document.width * gridSize) / 2;
    const t2y = t2.document.y + (t2.document.height * gridSize) / 2;
    const dx = Math.abs(t1x - t2x);
    const dy = Math.abs(t1y - t2y);
    const halfW = ((t1.document.width + t2.document.width) * gridSize) / 2;
    const halfH = ((t1.document.height + t2.document.height) * gridSize) / 2;
    const edgeDx = Math.max(0, dx - halfW);
    const edgeDy = Math.max(0, dy - halfH);
    const pixelDist = Math.sqrt(edgeDx * edgeDx + edgeDy * edgeDy);
    const gridDist = pixelDist / gridSize * canvas.grid.distance;
    log(`Center dx=${dx} dy=${dy}, edge dx=${edgeDx} dy=${edgeDy}, gridDist=${gridDist}`);
    return gridDist;
}

function isEngaged(token) {
    log('--isEngaged--');
    let engaged = false;
    const gridDistance = canvas.grid.distance;
    for (const tik of game.canvas.tokens.placeables) {
        if (!tik.actor) continue;
        if (token.document.id === tik.document.id) continue;
        if (token.document.hidden || tik.document.hidden) continue;
        if (token.actor.type === 'deployable' || tik.actor.type === 'deployable') continue;
        if (token.document.disposition === tik.document.disposition) continue;
        if (token.actor.type === 'mech' && tik.actor.type === 'pilot') continue;
        if (token.actor.type === 'npc' && tik.actor.type === 'pilot') continue;
        if (token.actor.system.structure?.value === 0 || tik.actor.system.structure?.value === 0) continue;

        let dist = tokenGridDistance(token, tik);
        log(`${tik.name}: edgeDist=${dist}, threshold=${gridDistance * 0.5}`);
        if (dist <= gridDistance * 0.5) {
            log(`ENGAGED with ${tik.name}!`);
            engaged = true;
            break;
        }
    }
    return engaged;
}

async function engageToken(token) {
    if (!token.actor) return;
    const hasEffect = token.actor.effects.some(e => e.statuses.has('engaged'));
    const shouldBeEngaged = isEngaged(token);
    log(`${token.name}: hasEffect=${hasEffect}, shouldBe=${shouldBeEngaged}`);
    if (shouldBeEngaged && !hasEffect) {
        await token.actor.toggleStatusEffect('engaged', { active: true });
    } else if (!shouldBeEngaged && hasEffect) {
        await token.actor.toggleStatusEffect('engaged', { active: false });
    }
}

export async function engageHook(document, change, options, userId) {
    if (!game.settings.get('csm-lancer-qol', 'enableEngageAutomation') || !game.users.activeGM?.isSelf) return;
    if (!change.x && !change.y) return;

    await new Promise(resolve => setTimeout(resolve, 300));

    for (const t of game.canvas.tokens.placeables) {
        await engageToken(t);
    }
}
