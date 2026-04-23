var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { c as createEventDispatcher, p as prop, i as init, g as each, h as index, b as append, d as if_block, s as set_class, f as from_html, e as comment } from "./legacy-CzoHntUw.mjs";
import { X as listen_to_event_and_reset_event, Y as current_batch, S as effect, Z as is_array, _ as select_multiple_invalid_value, $ as is, I as teardown, p as push, a0 as DamageType, s as sibling, t as template_effect, h as get, u as untrack, m as set_text, j as deep_read_state, T as invalidate_inner_signals, n as pop, f as child, v as event, q as first_child, l as legacy_pre_effect, i as set, a1 as HitQuality, k as legacy_pre_effect_reset, o as mutable_source, D as flushSync } from "./lancer-C2Mu_wVq.mjs";
import { l as set_selected, s as set_attribute, k as bind_value, t as transition, e as slide, g as bind_group, h as crossfade, f as fade, d as animation } from "./index-_WEKiM3G.mjs";
import { a as action, p as preventDefault } from "./event-modifiers-CSOPMvOa.mjs";
import { b as bind_this, H as HudCheckbox, M as MiniProfile, f as flip } from "./MiniProfile-DIRiBxsQ.mjs";
function select_option(select, value, mounting = !1) {
  if (select.multiple) {
    if (value == null)
      return;
    if (!is_array(value))
      return select_multiple_invalid_value();
    for (var option of select.options)
      option.selected = value.includes(get_option_value(option));
    return;
  }
  for (option of select.options) {
    var option_value = get_option_value(option);
    if (is(option_value, value)) {
      option.selected = !0;
      return;
    }
  }
  (!mounting || value !== void 0) && (select.selectedIndex = -1);
}
__name(select_option, "select_option");
function init_select(select) {
  var observer = new MutationObserver(() => {
    select_option(select, select.__value);
  });
  observer.observe(select, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), teardown(() => {
    observer.disconnect();
  });
}
__name(init_select, "init_select");
function bind_select_value(select, get2, set2 = get2) {
  var batches = /* @__PURE__ */ new WeakSet(), mounting = !0;
  listen_to_event_and_reset_event(select, "change", (is_reset) => {
    var query = is_reset ? "[selected]" : ":checked", value;
    if (select.multiple)
      value = [].map.call(select.querySelectorAll(query), get_option_value);
    else {
      var selected_option = select.querySelector(query) ?? // will fall back to first non-disabled option if no option is selected
      select.querySelector("option:not([disabled])");
      value = selected_option && get_option_value(selected_option);
    }
    set2(value), select.__value = value, current_batch !== null && batches.add(current_batch);
  }), effect(() => {
    var value = get2();
    if (select === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      if (batches.has(batch))
        return;
    }
    if (select_option(select, value, mounting), mounting && value === void 0) {
      var selected_option = select.querySelector(":checked");
      selected_option !== null && (value = get_option_value(selected_option), set2(value));
    }
    select.__value = value, mounting = !1;
  }), init_select(select);
}
__name(bind_select_value, "bind_select_value");
function get_option_value(option) {
  return "__value" in option ? option.__value : option.value;
}
__name(get_option_value, "get_option_value");
var root_1$3 = from_html('<option class="svelte-1u0z4l8"> </option>'), root_2$2 = from_html('<button class="lancer-button damage-delete svelte-1u0z4l8" type="button" data-tooltip="Remove this damage type"><i class="fas fa-trash svelte-1u0z4l8"></i></button>'), root$3 = from_html('<div class="damage-input-container svelte-1u0z4l8"><i></i> <select class="damage-input-type svelte-1u0z4l8"></select> <input class="lancer-input damage-input-val svelte-1u0z4l8" type="text" data-dtype="string" placeholder="0"/> <!></div>');
function DamageInput($$anchor, $$props) {
  push($$props, !1);
  const dispatch = createEventDispatcher(), damageSelectOptions = Object.entries(DamageType);
  let damage = prop($$props, "damage", 12), deletable = prop($$props, "deletable", 8, !0);
  function selected(type) {
    return damage().type === type;
  }
  __name(selected, "selected");
  function dispatchDelete() {
    dispatch("delete");
  }
  __name(dispatchDelete, "dispatchDelete"), init();
  var div = root$3(), i = child(div), select = sibling(i, 2);
  each(select, 5, () => damageSelectOptions, index, ($$anchor2, damageOption) => {
    var option = root_1$3(), text = child(option), option_value = {};
    template_effect(
      ($0) => {
        set_selected(option, $0), set_text(text, (get(damageOption), untrack(() => get(damageOption)[0]))), option_value !== (option_value = (get(damageOption), untrack(() => get(damageOption)[1]))) && (option.value = (option.__value = (get(damageOption), untrack(() => get(damageOption)[1]))) ?? "");
      },
      [
        () => (get(damageOption), untrack(() => selected(get(damageOption)[1])))
      ]
    ), append($$anchor2, option);
  });
  var input = sibling(select, 2), node = sibling(input, 2);
  {
    var consequent = /* @__PURE__ */ __name(($$anchor2) => {
      var button = root_2$2();
      event("click", button, dispatchDelete), append($$anchor2, button);
    }, "consequent");
    if_block(node, ($$render) => {
      deletable() && $$render(consequent);
    });
  }
  template_effect(
    ($0, $1) => {
      set_class(i, 1, `i--3 cci cci-${$0 ?? ""} damage--${$1 ?? ""}`, "svelte-1u0z4l8"), set_attribute(i, "data-tooltip", (deep_read_state(damage()), untrack(() => damage().type)));
    },
    [
      () => (deep_read_state(damage()), untrack(() => damage().type.toLowerCase())),
      () => (deep_read_state(damage()), untrack(() => damage().type.toLowerCase()))
    ]
  ), bind_select_value(select, () => damage().type, ($$value) => (damage(damage().type = $$value, !0), invalidate_inner_signals(() => {
  }))), bind_value(input, () => damage().val, ($$value) => (damage(damage().val = $$value, !0), invalidate_inner_signals(() => {
  }))), transition(5, div, () => slide, () => ({ delay: 100, duration: 300 })), transition(6, div, () => slide, () => ({ duration: 100 })), append($$anchor, div), pop();
}
__name(DamageInput, "DamageInput");
let counter = 0;
var root_2$1 = from_html('<div class="hit-quality-arrow svelte-x2k5tj"></div>'), root_1$2 = from_html('<input type="radio"/> <label><i></i><span class="no-grow"> </span> <!></label>', 1), root$2 = from_html("<div></div>");
function HitRadio($$anchor, $$props) {
  push($$props, !1);
  const binding_group = [];
  let quality = prop($$props, "quality", 12), disabled = prop($$props, "disabled", 8, !1), labelClass = prop($$props, "labelClass", 8, ""), klass = prop($$props, "class", 8, ""), id = `damage-quality-input-${counter++}`, inputs = [
    {
      slug: "crit",
      human: "Crit",
      value: 2,
      icon: "fas fa-explosion"
    },
    {
      slug: "hit",
      human: "Hit",
      value: 1,
      icon: "fas fa-crosshairs"
    },
    {
      slug: "miss",
      human: "Miss",
      value: 0,
      icon: "mdi mdi-call-missed"
    }
  ], [send, recv] = crossfade({});
  init();
  var div = root$2();
  let classes;
  each(div, 5, () => inputs, index, ($$anchor2, input) => {
    var fragment = root_1$2(), input_1 = first_child(fragment), input_1_value, label = sibling(input_1, 2), i = child(label), span = sibling(i), text = child(span), node = sibling(span, 2);
    {
      var consequent = /* @__PURE__ */ __name(($$anchor3) => {
        var div_1 = root_2$1();
        transition(1, div_1, () => send, () => ({ key: id })), transition(2, div_1, () => recv, () => ({ key: id })), append($$anchor3, div_1);
      }, "consequent");
      if_block(node, ($$render) => {
        get(input), deep_read_state(quality()), untrack(() => get(input).value == quality()) && $$render(consequent);
      });
    }
    template_effect(() => {
      set_attribute(input_1, "id", `${id}-${get(input), untrack(() => get(input).slug) ?? ""}`), set_class(input_1, 1, `no-grow ${get(input), untrack(() => get(input).slug) ?? ""}-cover`, "svelte-x2k5tj"), input_1.disabled = disabled(), input_1_value !== (input_1_value = (get(input), untrack(() => get(input).value))) && (input_1.value = (input_1.__value = (get(input), untrack(() => get(input).value))) ?? ""), set_attribute(label, "for", `${id}-${get(input), untrack(() => get(input).slug) ?? ""}`), set_class(label, 1, `lancer-hit-quality-radio-label ${labelClass() ?? ""}`, "svelte-x2k5tj"), set_attribute(label, "data-tooltip", (get(input), untrack(() => get(input).human))), set_class(i, 1, `${get(input), untrack(() => get(input).icon) ?? ""} i--2`, "svelte-x2k5tj"), set_text(text, (get(input), untrack(() => get(input).human)));
    }), bind_group(
      binding_group,
      [],
      input_1,
      () => (get(input), untrack(() => get(input).value), quality()),
      quality
    ), append($$anchor2, fragment);
  }), template_effect(() => classes = set_class(div, 1, `lancer-hit-quality-radio ${klass() ?? ""}`, "svelte-x2k5tj", classes, { disabled: disabled() })), append($$anchor, div), pop();
}
__name(HitRadio, "HitRadio");
var root_1$1 = from_html('<button class="lancer-button add-damage-type small svelte-5uy3s3" type="button" data-tooltip="Add a bonus damage type for only this target"><i class="mdi mdi-plus-thick svelte-5uy3s3"></i></button>'), root_2 = from_html('<div class="target-bonus-damage-wrapper"><!></div>'), root_3$1 = from_html('<button class="lancer-button add-damage-type svelte-5uy3s3" type="button" data-tooltip="Add a bonus damage type for only this target"><i class="mdi mdi-plus-thick svelte-5uy3s3"></i></button>'), root$1 = from_html('<div><span class="target-name flexrow lancer-mini-header svelte-5uy3s3">🞂<b> </b>🞀</span> <div class="flexrow"><img class="lancer-hit-thumb accdiff-target-has-dropdown svelte-5uy3s3"/> <div class="card clipped target-bonus-damage svelte-5uy3s3"><span class="flexrow" style="width: 100%"><b class="target-bonus-damage-title svelte-5uy3s3">Bonus</b> <!></span> <!> <!></div></div>  <div class="hit-quality svelte-5uy3s3"><!></div> <div class="flexrow damage-target-config svelte-5uy3s3"><!> <!> <!></div></div>');
function DamageTarget($$anchor, $$props) {
  push($$props, !1);
  const hitQualityClass = mutable_source(), dispatch = createEventDispatcher();
  let target = prop($$props, "target", 12), imgElement = mutable_source();
  function addBonusDamage() {
    target(
      target().bonusDamage = [
        ...target().bonusDamage,
        { type: DamageType.Kinetic, val: "1d6" }
      ],
      !0
    );
  }
  __name(addBonusDamage, "addBonusDamage");
  function removeBonusDamage(idx) {
    target(target().bonusDamage = target().bonusDamage.filter((_, i) => i !== idx), !0);
  }
  __name(removeBonusDamage, "removeBonusDamage");
  function toggleAP(event2) {
    dispatch("ap", event2.detail);
  }
  __name(toggleAP, "toggleAP");
  function toggleParacausal(event2) {
    dispatch("paracausal", event2.detail), event2.detail && target(target().ap = !0, !0);
  }
  __name(toggleParacausal, "toggleParacausal");
  function toggleHalfDamage(event2) {
    dispatch("halfDmg", event2.detail);
  }
  __name(toggleHalfDamage, "toggleHalfDamage"), legacy_pre_effect(() => (deep_read_state(target()), HitQuality), () => {
    set(hitQualityClass, target().quality === HitQuality.Hit ? "target-hit" : target().quality === HitQuality.Crit ? "target-crit" : "target-miss");
  }), legacy_pre_effect_reset(), init();
  var div = root$1(), span = child(div), b = sibling(child(span)), text = child(b), div_1 = sibling(span, 2), img = child(div_1);
  bind_this(img, ($$value) => set(imgElement, $$value), () => get(imgElement));
  var div_2 = sibling(img, 2), span_1 = child(div_2), node = sibling(child(span_1), 2);
  {
    var consequent = /* @__PURE__ */ __name(($$anchor2) => {
      var button = root_1$1();
      event("click", button, addBonusDamage), append($$anchor2, button);
    }, "consequent");
    if_block(node, ($$render) => {
      deep_read_state(target()), untrack(() => target().bonusDamage.length) && $$render(consequent);
    });
  }
  var node_1 = sibling(span_1, 2);
  each(
    node_1,
    1,
    () => (deep_read_state(target()), untrack(() => target().bonusDamage)),
    index,
    ($$anchor2, damage, i) => {
      var div_3 = root_2(), node_2 = child(div_3);
      DamageInput(node_2, {
        get damage() {
          return (deep_read_state(target()), untrack(() => target().bonusDamage))[i];
        },
        set damage($$value) {
          (deep_read_state(target()), untrack(() => target().bonusDamage))[i] = $$value, invalidate_inner_signals(() => target());
        },
        $$events: { delete: /* @__PURE__ */ __name(() => removeBonusDamage(i), "delete") },
        $$legacy: !0
      }), append($$anchor2, div_3);
    }
  );
  var node_3 = sibling(node_1, 2);
  {
    var consequent_1 = /* @__PURE__ */ __name(($$anchor2) => {
      var button_1 = root_3$1();
      event("click", button_1, addBonusDamage), append($$anchor2, button_1);
    }, "consequent_1");
    if_block(node_3, ($$render) => {
      deep_read_state(target()), untrack(() => !target().bonusDamage.length) && $$render(consequent_1);
    });
  }
  var div_4 = sibling(div_1, 2), node_4 = child(div_4);
  HitRadio(node_4, {
    class: "damage-target-quality flexrow",
    get quality() {
      return target().quality;
    },
    set quality($$value) {
      target(target().quality = $$value, !0);
    },
    $$legacy: !0
  });
  var div_5 = sibling(div_4, 2), node_5 = child(div_5);
  HudCheckbox(node_5, {
    icon: "mdi mdi-shield-off-outline",
    tooltip: "Armor Piercing (AP)",
    get disabled() {
      return deep_read_state(target()), untrack(() => target().paracausal);
    },
    get value() {
      return target().ap;
    },
    set value($$value) {
      target(target().ap = $$value, !0);
    },
    $$events: { change: toggleAP },
    $$legacy: !0
  });
  var node_6 = sibling(node_5, 2);
  HudCheckbox(node_6, {
    icon: "cci cci-large-beam",
    tooltip: "For 'cannot be reduced' effects like the Paracausal mod",
    style: "margin: 0 0.3em",
    get value() {
      return target().paracausal;
    },
    set value($$value) {
      target(target().paracausal = $$value, !0);
    },
    $$events: { change: toggleParacausal },
    $$legacy: !0
  });
  var node_7 = sibling(node_6, 2);
  HudCheckbox(node_7, {
    icon: "mdi mdi-fraction-one-half",
    tooltip: "For effects which cause the attacker to deal half damage in addition to resistance, like Heavy Gunner",
    get value() {
      return target().halfDamage;
    },
    set value($$value) {
      target(target().halfDamage = $$value, !0);
    },
    $$events: { change: toggleHalfDamage },
    $$legacy: !0
  }), template_effect(() => {
    set_class(div, 1, `damage-hud-target-card card ${get(hitQualityClass)}`, "svelte-5uy3s3"), set_text(text, (deep_read_state(target()), untrack(() => target().target.name))), set_attribute(img, "alt", (deep_read_state(target()), untrack(() => target().target.name ?? void 0))), set_attribute(img, "src", (deep_read_state(target()), untrack(() => {
      var _a;
      return (_a = target().target.actor) == null ? void 0 : _a.img;
    })));
  }), transition(5, div, () => slide, () => ({ delay: 100, duration: 300 })), transition(6, div, () => slide, () => ({ duration: 100 })), append($$anchor, div), pop();
}
__name(DamageTarget, "DamageTarget");
var root_1 = from_html('<div class="lancer-header lancer-weapon medium"><i class="cci cci-large-beam i--4 i--light"></i> <span> </span></div>'), root_3 = from_html("<div><!></div>"), root_4 = from_html("<div><!></div>"), root_5 = from_html("<div><!></div>"), root_6 = from_html("<div><!></div>"), root_7 = from_html('<i></i> <input class="lancer-input reliable-value svelte-1nxk1l1" type="text" data-dtype="string"/>', 1), root_8 = from_html('<div><span class="target-name flexrow lancer-mini-header svelte-1nxk1l1">🞂<b class="svelte-1nxk1l1"> </b>🞀</span> <div class="target-body flexrow svelte-1nxk1l1"><img class="lancer-hit-thumb accdiff-target-has-dropdown svelte-1nxk1l1"/> <!></div></div>'), root_10 = from_html("<div><!></div>"), root = from_html('<form id="damage-hud" class="lancer lancer-hud damage-hud window-content svelte-1nxk1l1"><!> <!> <div class="lancer-hud-body"><div class="damage-grid svelte-1nxk1l1"><div class="base-damage lancer-border-primary svelte-1nxk1l1"><h4 class="damage-hud-section lancer-border-primary flexrow svelte-1nxk1l1">Base Damage <button class="add-damage-type svelte-1nxk1l1" type="button"><i class="mdi mdi-plus-thick svelte-1nxk1l1" data-tooltip="Add a base damage type"></i></button></h4> <!> <!></div> <div class="bonus-damage svelte-1nxk1l1"><h4 class="damage-hud-section lancer-border-primary flexrow svelte-1nxk1l1">Bonus Damage <button class="add-damage-type svelte-1nxk1l1" type="button"><i class="mdi mdi-plus-thick svelte-1nxk1l1" data-tooltip="Add a bonus damage type"></i></button></h4> <!> <!></div></div> <div class="damage-hud-options-grid svelte-1nxk1l1"><h4 class="damage-hud-section lancer-border-primary svelte-1nxk1l1" style="justify-content: center; grid-area: title">Configuration</h4> <!> <!> <!> <!> <div class="flexrow" style="grid-area: reliable; align-items: center"><!> <!></div></div> <div class="damage-hud-targets svelte-1nxk1l1"><!></div></div> <div class="lancer-hud-buttons flexrow"><button class="dialog-button submit default" data-button="submit" type="submit"><i class="fas fa-check"></i> Roll</button> <button class="dialog-button cancel" data-button="cancel" type="button"><i class="fas fa-times"></i> Cancel</button></div></form>');
function DamageHUD($$anchor, $$props) {
  var _a;
  push($$props, !1);
  const baseDamage = mutable_source(), baseBonusDamage = mutable_source(), weaponDamage = mutable_source(), weaponBonusDamage = mutable_source(), profile = mutable_source(), targetHitQualityClass = mutable_source();
  let title = prop($$props, "title", 12), kind = prop($$props, "kind", 12), hitResults = prop($$props, "hitResults", 12), weapon = prop($$props, "weapon", 12), base = prop($$props, "base", 12), targets = prop($$props, "targets", 12), lancerActor = prop($$props, "lancerActor", 12), lancerItem = prop($$props, "lancerItem", 12), rollerName = lancerActor() ? ` -- ${((_a = lancerActor().token) == null ? void 0 : _a.name) || lancerActor().name}` : "", partialAP = mutable_source(!1), partialParacausal = mutable_source(!1), partialHalfDamage = mutable_source(!1);
  const dispatch = createEventDispatcher();
  function focus(el) {
    el.focus();
  }
  __name(focus, "focus");
  function escToCancel(_el) {
    function escHandler(ev) {
      ev.key === "Escape" && (ev.preventDefault(), dispatch("cancel"));
    }
    return __name(escHandler, "escHandler"), window.addEventListener("keydown", escHandler), {
      destroy() {
        window.removeEventListener("keydown", escHandler);
      }
    };
  }
  __name(escToCancel, "escToCancel");
  function findProfile() {
    var _a2;
    return ((_a2 = lancerItem()) == null ? void 0 : _a2.currentProfile()) ?? { range: [], damage: [] };
  }
  __name(findProfile, "findProfile");
  function reliableType() {
    const allowedTypes = [DamageType.Kinetic, DamageType.Energy, DamageType.Explosive], preferred = weapon().damage.find((d) => allowedTypes.includes(d.type));
    return preferred ? preferred.type : weapon().damage.length ? weapon().damage[0].type : DamageType.Kinetic;
  }
  __name(reliableType, "reliableType");
  function addBaseDamage() {
    base(base().damage = [...base().damage, { type: DamageType.Kinetic, val: "1d6" }], !0);
  }
  __name(addBaseDamage, "addBaseDamage");
  function addBonusDamage() {
    base(
      base().bonusDamage = [
        ...base().bonusDamage,
        { type: DamageType.Kinetic, val: "1d6" }
      ],
      !0
    );
  }
  __name(addBonusDamage, "addBonusDamage");
  function removeBaseDamage(idx, isBase = !0) {
    isBase ? base(base().damage = base().damage.filter((_, i) => i !== idx), !0) : weapon(weapon().damage = weapon().damage.filter((_, i) => i !== idx), !0);
  }
  __name(removeBaseDamage, "removeBaseDamage");
  function removeBonusDamage(idx, isBase = !0) {
    isBase ? base(base().bonusDamage = base().bonusDamage.filter((_, i) => i !== idx), !0) : weapon(weapon().bonusDamage = weapon().bonusDamage.filter((_, i) => i !== idx), !0);
  }
  __name(removeBonusDamage, "removeBonusDamage");
  function toggleAP(event2) {
    for (const [idx, t] of targets().entries())
      t.ap = event2.detail, targets(targets()[idx] = t, !0);
  }
  __name(toggleAP, "toggleAP");
  function toggleParacausal(event2) {
    for (const [idx, t] of targets().entries())
      t.paracausal = event2.detail, targets(targets()[idx] = t, !0);
    event2.detail && (base(base().ap = !0, !0), toggleAP(event2));
  }
  __name(toggleParacausal, "toggleParacausal");
  function toggleHalfDamage(event2) {
    for (const [idx, t] of targets().entries())
      t.halfDamage = event2.detail, targets(targets()[idx] = t, !0);
  }
  __name(toggleHalfDamage, "toggleHalfDamage");
  function updateTargets() {
    targets(targets()), targets().every((t) => t.ap) ? (base(base().ap = !0, !0), set(partialAP, !1)) : targets().some((t) => t.ap) ? (base(base().ap = !1, !0), set(partialAP, !0)) : (base(base().ap = !1, !0), set(partialAP, !1)), targets().every((t) => t.paracausal) ? (base(base().paracausal = !0, !0), set(partialParacausal, !1)) : targets().some((t) => t.paracausal) ? (base(base().paracausal = !1, !0), set(partialParacausal, !0)) : (base(base().paracausal = !1, !0), set(partialParacausal, !1)), targets().every((t) => t.halfDamage) ? (base(base().halfDamage = !0, !0), set(partialHalfDamage, !1)) : targets().some((t) => t.halfDamage) ? (base(base().halfDamage = !1, !0), set(partialHalfDamage, !0)) : (base(base().halfDamage = !1, !0), set(partialHalfDamage, !1)), base(base());
  }
  __name(updateTargets, "updateTargets");
  function targetHoverIn(event2, target) {
    target._onHoverIn(event2);
  }
  __name(targetHoverIn, "targetHoverIn");
  function targetHoverOut(event2, target) {
    target._onHoverOut(event2);
  }
  __name(targetHoverOut, "targetHoverOut"), legacy_pre_effect(() => deep_read_state(base()), () => {
    set(baseDamage, base().damage);
  }), legacy_pre_effect(() => deep_read_state(base()), () => {
    set(baseBonusDamage, base().bonusDamage);
  }), legacy_pre_effect(() => deep_read_state(weapon()), () => {
    set(weaponDamage, weapon().damage);
  }), legacy_pre_effect(() => deep_read_state(weapon()), () => {
    set(weaponBonusDamage, weapon().bonusDamage);
  }), legacy_pre_effect(() => deep_read_state(lancerItem()), () => {
    set(profile, lancerItem() ? findProfile() : null);
  }), legacy_pre_effect(() => (deep_read_state(targets()), HitQuality), () => {
    var _a2, _b;
    set(targetHitQualityClass, !targets().length || ((_a2 = targets()[0]) == null ? void 0 : _a2.quality) === HitQuality.Hit ? "target-hit" : ((_b = targets()[0]) == null ? void 0 : _b.quality) === HitQuality.Crit ? "target-crit" : "target-miss");
  }), legacy_pre_effect_reset();
  var $$exports = {
    get title() {
      return title();
    },
    set title($$value) {
      title($$value), flushSync();
    },
    get kind() {
      return kind();
    },
    set kind($$value) {
      kind($$value), flushSync();
    },
    get hitResults() {
      return hitResults();
    },
    set hitResults($$value) {
      hitResults($$value), flushSync();
    },
    get weapon() {
      return weapon();
    },
    set weapon($$value) {
      weapon($$value), flushSync();
    },
    get base() {
      return base();
    },
    set base($$value) {
      base($$value), flushSync();
    },
    get targets() {
      return targets();
    },
    set targets($$value) {
      targets($$value), flushSync();
    },
    get lancerActor() {
      return lancerActor();
    },
    set lancerActor($$value) {
      lancerActor($$value), flushSync();
    },
    get lancerItem() {
      return lancerItem();
    },
    set lancerItem($$value) {
      lancerItem($$value), flushSync();
    }
  };
  init();
  var form = root(), node = child(form);
  {
    var consequent = /* @__PURE__ */ __name(($$anchor2) => {
      var div = root_1(), span = sibling(child(div), 2), text = child(span);
      template_effect(() => set_text(text, `${title() ?? ""}${rollerName}`)), append($$anchor2, div);
    }, "consequent");
    if_block(node, ($$render) => {
      title() != "" && $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = /* @__PURE__ */ __name(($$anchor2) => {
      MiniProfile($$anchor2, {
        get profile() {
          return get(profile);
        }
      });
    }, "consequent_1");
    if_block(node_1, ($$render) => {
      get(profile) && $$render(consequent_1);
    });
  }
  var div_1 = sibling(node_1, 2), div_2 = child(div_1), div_3 = child(div_2), h4 = child(div_3), button = sibling(child(h4)), node_2 = sibling(h4, 2);
  each(node_2, 1, () => get(weaponDamage), index, ($$anchor2, damage, i) => {
    var div_4 = root_3(), node_3 = child(div_4);
    DamageInput(node_3, {
      get damage() {
        return get(weaponDamage)[i];
      },
      set damage($$value) {
        get(weaponDamage)[i] = $$value, invalidate_inner_signals(() => (get(weaponDamage), weapon()));
      },
      $$events: { delete: /* @__PURE__ */ __name(() => removeBaseDamage(i, !1), "delete") },
      $$legacy: !0
    }), append($$anchor2, div_4);
  });
  var node_4 = sibling(node_2, 2);
  each(node_4, 1, () => get(baseDamage), index, ($$anchor2, damage, i) => {
    var div_5 = root_4(), node_5 = child(div_5);
    DamageInput(node_5, {
      get damage() {
        return get(baseDamage)[i];
      },
      set damage($$value) {
        get(baseDamage)[i] = $$value, invalidate_inner_signals(() => (get(baseDamage), base()));
      },
      $$events: { delete: /* @__PURE__ */ __name(() => removeBaseDamage(i), "delete") },
      $$legacy: !0
    }), append($$anchor2, div_5);
  });
  var div_6 = sibling(div_3, 2), h4_1 = child(div_6), button_1 = sibling(child(h4_1)), node_6 = sibling(h4_1, 2);
  each(node_6, 1, () => get(weaponBonusDamage), index, ($$anchor2, damage, i) => {
    var div_7 = root_5(), node_7 = child(div_7);
    DamageInput(node_7, {
      get damage() {
        return get(weaponBonusDamage)[i];
      },
      set damage($$value) {
        get(weaponBonusDamage)[i] = $$value, invalidate_inner_signals(() => (get(weaponBonusDamage), weapon()));
      },
      $$events: { delete: /* @__PURE__ */ __name(() => removeBonusDamage(i, !1), "delete") },
      $$legacy: !0
    }), append($$anchor2, div_7);
  });
  var node_8 = sibling(node_6, 2);
  each(node_8, 1, () => get(baseBonusDamage), index, ($$anchor2, damage, i) => {
    var div_8 = root_6(), node_9 = child(div_8);
    DamageInput(node_9, {
      get damage() {
        return get(baseBonusDamage)[i];
      },
      set damage($$value) {
        get(baseBonusDamage)[i] = $$value, invalidate_inner_signals(() => (get(baseBonusDamage), base()));
      },
      $$events: { delete: /* @__PURE__ */ __name(() => removeBonusDamage(i), "delete") },
      $$legacy: !0
    }), append($$anchor2, div_8);
  });
  var div_9 = sibling(div_2, 2), node_10 = sibling(child(div_9), 2);
  HudCheckbox(node_10, {
    icon: "mdi mdi-shield-off-outline",
    label: "Armor Piercing (AP)",
    get disabled() {
      return deep_read_state(base()), untrack(() => base().paracausal);
    },
    style: "grid-area: ap",
    get value() {
      return base().ap;
    },
    set value($$value) {
      base(base().ap = $$value, !0);
    },
    get partial() {
      return get(partialAP);
    },
    set partial($$value) {
      set(partialAP, $$value);
    },
    $$events: { change: toggleAP },
    $$legacy: !0
  });
  var node_11 = sibling(node_10, 2);
  HudCheckbox(node_11, {
    label: "Overkill",
    style: "grid-area: overkill",
    get value() {
      return weapon().overkill;
    },
    set value($$value) {
      weapon(weapon().overkill = $$value, !0);
    },
    $$legacy: !0
  });
  var node_12 = sibling(node_11, 2);
  HudCheckbox(node_12, {
    icon: "cci cci-large-beam",
    label: "Cannot be Reduced",
    tooltip: "For 'cannot be reduced' effects like the Paracausal mod",
    style: "grid-area: paracausal",
    get value() {
      return base().paracausal;
    },
    set value($$value) {
      base(base().paracausal = $$value, !0);
    },
    get partial() {
      return get(partialParacausal);
    },
    set partial($$value) {
      set(partialParacausal, $$value);
    },
    $$events: { change: toggleParacausal },
    $$legacy: !0
  });
  var node_13 = sibling(node_12, 2);
  HudCheckbox(node_13, {
    icon: "mdi mdi-fraction-one-half",
    label: "Half Damage",
    tooltip: "For effects which cause the attacker to deal half damage in addition to resistance, like Heavy Gunner",
    style: "grid-area: halfdamage",
    get value() {
      return base().halfDamage;
    },
    set value($$value) {
      base(base().halfDamage = $$value, !0);
    },
    get partial() {
      return get(partialHalfDamage);
    },
    set partial($$value) {
      set(partialHalfDamage, $$value);
    },
    $$events: { change: toggleHalfDamage },
    $$legacy: !0
  });
  var div_10 = sibling(node_13, 2), node_14 = child(div_10);
  HudCheckbox(node_14, {
    label: "Reliable",
    style: "grid-area: reliable; max-width: fit-content; padding-right: 0.5em",
    get value() {
      return weapon().reliable;
    },
    set value($$value) {
      weapon(weapon().reliable = $$value, !0);
    },
    $$legacy: !0
  });
  var node_15 = sibling(node_14, 2);
  {
    var consequent_2 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_1 = root_7(), i_1 = first_child(fragment_1), input = sibling(i_1, 2);
      template_effect(
        ($0, $1, $2) => {
          set_class(i_1, 1, `cci i--2 cci-${$0 ?? ""} damage--${$1 ?? ""}`, "svelte-1nxk1l1"), set_attribute(i_1, "data-tooltip", $2);
        },
        [
          () => untrack(() => reliableType().toLowerCase()),
          () => untrack(() => reliableType().toLowerCase()),
          () => untrack(reliableType)
        ]
      ), transition(7, i_1, () => fade), bind_value(input, () => weapon().reliableValue, ($$value) => weapon(weapon().reliableValue = $$value, !0)), transition(7, input, () => fade), append($$anchor2, fragment_1);
    }, "consequent_2");
    if_block(node_15, ($$render) => {
      deep_read_state(weapon()), untrack(() => weapon().reliable) && $$render(consequent_2);
    });
  }
  var div_11 = sibling(div_9, 2), node_16 = child(div_11);
  {
    var consequent_3 = /* @__PURE__ */ __name(($$anchor2) => {
      var div_12 = root_8(), span_1 = child(div_12), b = sibling(child(span_1)), text_1 = child(b), div_13 = sibling(span_1, 2), img = child(div_13), node_17 = sibling(img, 2);
      HitRadio(node_17, {
        class: "damage-target-quality flexcol",
        get quality() {
          return targets()[0].quality;
        },
        set quality($$value) {
          targets(targets()[0].quality = $$value, !0);
        },
        $$legacy: !0
      }), template_effect(() => {
        set_class(div_12, 1, `single-target-container ${get(targetHitQualityClass)}`, "svelte-1nxk1l1"), set_text(text_1, (deep_read_state(targets()), untrack(() => targets()[0].target.name))), set_attribute(img, "alt", (deep_read_state(targets()), untrack(() => targets()[0].target.name ?? void 0))), set_attribute(img, "src", (deep_read_state(targets()), untrack(() => {
          var _a2;
          return (_a2 = targets()[0].target.actor) == null ? void 0 : _a2.img;
        })));
      }), event("mouseenter", div_12, (ev) => targetHoverIn(ev, targets()[0].target)), event("mouseleave", div_12, (ev) => targetHoverOut(ev, targets()[0].target)), append($$anchor2, div_12);
    }, "consequent_3"), consequent_4 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_2 = comment(), node_18 = first_child(fragment_2);
      each(node_18, 9, targets, (target) => target.target.id, ($$anchor3, target) => {
        var div_14 = root_10(), node_19 = child(div_14);
        DamageTarget(node_19, {
          get target() {
            return get(target);
          },
          $$events: {
            ap: updateTargets,
            paracausal: updateTargets,
            halfDmg: updateTargets
          }
        }), template_effect(() => set_class(
          div_14,
          1,
          `target-container ${deep_read_state(targets()), untrack(() => targets().length <= 1 ? "solo" : "") ?? ""}`,
          "svelte-1nxk1l1"
        )), animation(div_14, () => flip, () => ({ duration: 200 })), event("mouseenter", div_14, (ev) => targetHoverIn(ev, get(target).target)), event("mouseleave", div_14, (ev) => targetHoverOut(ev, get(target).target)), append($$anchor3, div_14);
      }), append($$anchor2, fragment_2);
    }, "consequent_4");
    if_block(node_16, ($$render) => {
      deep_read_state(targets()), untrack(() => targets().length === 1) ? $$render(consequent_3) : (deep_read_state(targets()), untrack(() => targets().length > 1) && $$render(consequent_4, 1));
    });
  }
  var div_15 = sibling(div_1, 2), button_2 = child(div_15);
  action(button_2, ($$node) => focus == null ? void 0 : focus($$node));
  var button_3 = sibling(button_2, 2);
  return action(form, ($$node) => escToCancel == null ? void 0 : escToCancel()), effect(() => event("submit", form, preventDefault(() => dispatch("submit")))), event("click", button, addBaseDamage), event("click", button_1, addBonusDamage), event("click", button_3, () => dispatch("cancel")), append($$anchor, form), pop($$exports);
}
__name(DamageHUD, "DamageHUD");
export {
  DamageHUD as default
};
//# sourceMappingURL=DamageHUD-B5GEDrlg.mjs.map
