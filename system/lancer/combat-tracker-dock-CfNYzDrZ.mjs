var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
function generateDescription(actor) {
  var _a, _b, _c, _d, _e;
  if (actor.is_deployable()) {
    const deployer = ((_b = (_a = actor.system.owner) == null ? void 0 : _a.value) == null ? void 0 : _b.name) ?? null;
    if (deployer !== null) return `Deployer: ${deployer}`;
  }
  if (actor.is_npc())
    return (((_d = (_c = actor.system.class) == null ? void 0 : _c.system.role) == null ? void 0 : _d.toUpperCase()) ?? "UNKNOWN") + ": " + [(_e = actor.system.class) == null ? void 0 : _e.name, ...actor.itemTypes.npc_template.map((t) => {
      var _a2;
      return (_a2 = t.name) == null ? void 0 : _a2.toUpperCase();
    })].join(" // ");
}
__name(generateDescription, "generateDescription");
function getInitiativeDisplay(combatant) {
  return { value: combatant == null ? void 0 : combatant.activations.max, icon: "cci cci-activate", rollIcon: "fas fa-triangle-exclamation" };
}
__name(getInitiativeDisplay, "getInitiativeDisplay");
function getColorByDispo(d) {
  const app = game.settings.get(game.system.id, "combat-tracker-appearance");
  return d === 2 ? app.player_color : d === 1 ? app.friendly_color : d === 0 ? app.neutral_color : d === -1 ? app.enemy_color : null;
}
__name(getColorByDispo, "getColorByDispo");
function getSystemIcons(combatant) {
  var _a;
  const icons = [];
  for (let i = 0; i < (combatant.activations.value ?? 0); ++i)
    icons.push({
      icon: "cci cci-activate",
      color: getColorByDispo(combatant.disposition),
      fontSize: "1.5rem",
      visible: !0,
      enabled: !0,
      callback: /* @__PURE__ */ __name((_e, combatant2) => {
        var _a2;
        return (_a2 = combatant2.parent) == null ? void 0 : _a2.activateCombatant(combatant2.id);
      }, "callback")
    });
  return ((_a = combatant.parent) == null ? void 0 : _a.current.combatantId) === combatant.id && icons.push({
    icon: "cci cci-deactivate",
    fontSize: "1.5rem",
    visible: !0,
    enabled: combatant == null ? void 0 : combatant.isOwner,
    callback: /* @__PURE__ */ __name((_e, combatant2) => {
      var _a2;
      return (_a2 = combatant2.parent) == null ? void 0 : _a2.deactivateCombatant(combatant2.id);
    }, "callback")
  }), icons;
}
__name(getSystemIcons, "getSystemIcons");
export {
  generateDescription,
  getInitiativeDisplay,
  getSystemIcons
};
//# sourceMappingURL=combat-tracker-dock-CfNYzDrZ.mjs.map
