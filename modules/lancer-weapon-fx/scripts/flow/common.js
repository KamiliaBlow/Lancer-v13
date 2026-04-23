import { MODULE_ID } from "../consts.js";

export class FlowInfo {
    constructor({ sourceToken, macroUuid, targetTokens = null, targetsMissed = new Set() }) {
        this.sourceToken = sourceToken;
        this.macroUuid = macroUuid;
        this.targetTokens = targetTokens;
        this.targetsMissed = targetsMissed;
    }
}

export function getTokenByIdOrActorId(id) {
    let token = canvas.tokens.get(id);
    if (!token) {
        token = canvas.tokens.ownedTokens.filter(t => t.actor.id === id)?.[0];
        if (!token) {
            console.log(`Lancer Weapon FX | No token with id '${id}' found.`);
            return null;
        }
    }
    return token;
}

export async function processFlowInfo(flowInfo) {
    const { macroUuid, sourceToken } = flowInfo;
    if (macroUuid == null) return;

    const macro = await fromUuid(macroUuid);
    if (!macro) {
        console.error(`Lancer Weapon FX | Could not load macro "${macroUuid}"!`);
        return;
    }

    const macroData = macro.toObject();
    (macroData.flags ??= {})[MODULE_ID] = { flowInfo };
    macroData.ownership ??= {};
    macroData.ownership.default = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;

    const temp_macro = new Macro(macroData);

    temp_macro.execute({ actor: sourceToken?.actor, token: sourceToken });
}
