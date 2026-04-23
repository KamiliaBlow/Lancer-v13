var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { B as BranchManager, p as prop, i as init, e as comment, d as if_block, b as append, g as each, h as index, s as set_class, f as from_html, o as onMount, c as createEventDispatcher, t as text } from "./legacy-DXiyOstn.mjs";
import { K as is_runes, G as block, p as push, q as first_child, j as deep_read_state, u as untrack, n as pop, s as sibling, h as get, t as template_effect, m as set_text, f as child, v as event, M as user_derived, O as derived_safe_equal, P as tippy, i as set, o as mutable_source, Q as NpcFeatureType, R as RangeType, l as legacy_pre_effect, k as legacy_pre_effect_reset, S as effect, D as flushSync, T as invalidate_inner_signals, W as WeaponRangeTemplate, U as fade, V as targetsFromTemplate } from "./lancer-DS-z_c-g.mjs";
import { s as set_attribute, g as bind_group, t as transition, h as crossfade, i as fly, j as blur, k as bind_value, e as slide, d as animation } from "./index-Dj6lREXD.mjs";
import { a as action, p as preventDefault } from "./event-modifiers-Db5JTUa3.mjs";
import { H as HudCheckbox, b as bind_this, M as MiniProfile, f as flip } from "./MiniProfile-Sk5IOFHK.mjs";
const NAN = Symbol("NaN");
function key(node, get_key, render_fn) {
  var branches = new BranchManager(node), legacy = !is_runes();
  block(() => {
    var key2 = get_key();
    key2 !== key2 && (key2 = /** @type {any} */
    NAN), legacy && key2 !== null && typeof key2 == "object" && (key2 = /** @type {V} */
    {}), branches.ensure(key2, render_fn);
  });
}
__name(key, "key");
function Plugin($$anchor, $$props) {
  push($$props, !1);
  let data = prop($$props, "data", 12);
  init();
  var fragment = comment(), node = first_child(fragment);
  {
    var consequent = /* @__PURE__ */ __name(($$anchor2) => {
      HudCheckbox($$anchor2, {
        get label() {
          return deep_read_state(data()), untrack(() => data().humanLabel);
        },
        get disabled() {
          return deep_read_state(data()), untrack(() => data().disabled);
        },
        get value() {
          return data().uiState;
        },
        set value($$value) {
          data(data().uiState = $$value, !0);
        },
        $$legacy: !0
      });
    }, "consequent");
    if_block(node, ($$render) => {
      deep_read_state(data()), untrack(() => data().uiElement == "checkbox" && data().visible) && $$render(consequent);
    });
  }
  append($$anchor, fragment), pop();
}
__name(Plugin, "Plugin");
let counter$1 = 0;
var root_2$1 = from_html('<div class="cover-arrow svelte-1r8lxxw"></div>'), root_1$2 = from_html('<input type="radio"/> <label><i></i> <span class="no-grow"> </span> <!></label>', 1), root$3 = from_html("<div></div>");
function Cover($$anchor, $$props) {
  push($$props, !1);
  const binding_group = [];
  let cover = prop($$props, "cover", 12), disabled = prop($$props, "disabled", 8, !1), labelClass = prop($$props, "labelClass", 8, ""), klass = prop($$props, "class", 8, ""), id = `accdiff-cover-input-${counter$1++}`, inputs = [
    {
      slug: "no",
      human: "No Cover",
      value: 0,
      icon: "shield-outline"
    },
    {
      slug: "soft",
      human: "Soft Cover (-1)",
      value: 1,
      icon: "shield-half-full"
    },
    {
      slug: "hard",
      human: "Hard Cover (-2)",
      value: 2,
      icon: "shield"
    }
  ], [send2, recv2] = crossfade({});
  init();
  var div = root$3();
  let classes;
  each(div, 5, () => inputs, index, ($$anchor2, input) => {
    var fragment = root_1$2(), input_1 = first_child(fragment), input_1_value, label = sibling(input_1, 2), i = child(label), span = sibling(i, 2), text2 = child(span), node = sibling(span, 2);
    {
      var consequent = /* @__PURE__ */ __name(($$anchor3) => {
        var div_1 = root_2$1();
        transition(1, div_1, () => send2, () => ({ key: id })), transition(2, div_1, () => recv2, () => ({ key: id })), append($$anchor3, div_1);
      }, "consequent");
      if_block(node, ($$render) => {
        get(input), deep_read_state(cover()), untrack(() => get(input).value == cover()) && $$render(consequent);
      });
    }
    template_effect(() => {
      set_attribute(input_1, "id", `${id}-${get(input), untrack(() => get(input).slug) ?? ""}`), set_class(input_1, 1, `no-grow ${get(input), untrack(() => get(input).slug) ?? ""}-cover`, "svelte-1r8lxxw"), input_1.disabled = disabled(), input_1_value !== (input_1_value = (get(input), untrack(() => get(input).value))) && (input_1.value = (input_1.__value = (get(input), untrack(() => get(input).value))) ?? ""), set_attribute(label, "for", `${id}-${get(input), untrack(() => get(input).slug) ?? ""}`), set_class(label, 1, `lancer-cover-radio-label ${labelClass() ?? ""}`, "svelte-1r8lxxw"), set_class(i, 1, `mdi mdi-${get(input), untrack(() => get(input).icon) ?? ""} i--2`, "svelte-1r8lxxw"), set_attribute(i, "title", (get(input), untrack(() => get(input).human))), set_text(text2, (get(input), untrack(() => get(input).human)));
    }), bind_group(
      binding_group,
      [],
      input_1,
      () => (get(input), untrack(() => get(input).value), cover()),
      cover
    ), append($$anchor2, fragment);
  }), template_effect(() => classes = set_class(div, 1, `lancer-cover-radio ${klass() ?? ""}`, "svelte-1r8lxxw", classes, { disabled: disabled() })), append($$anchor, div), pop();
}
__name(Cover, "Cover");
let lockonCounter = 0, stunnedCounter = 0, counter = 0, [send, recv] = crossfade({ fallback: blur });
var root_2 = from_html('<label class="stunned-label svelte-16bpf9g" title="Stunned"><i class="cci cci-condition-stunned i--3 svelte-16bpf9g"></i></label>'), root_3$1 = from_html('<div class="accdiff-target-dropdown svelte-16bpf9g"></div>'), root_1$1 = from_html('<div><img/> <!> <label title="Consume Lock On (+1)"><i></i> <!></label></div> <!>', 1), root_5$1 = from_html('<div class="card clipped total svelte-16bpf9g"><span class="svelte-16bpf9g"> </span> <i></i></div>'), root$2 = from_html('<!> <div class="accdiff-grid accdiff-weight svelte-16bpf9g"><div></div></div>', 1);
function TotalAccuracy($$anchor, $$props) {
  push($$props, !1);
  let target = prop($$props, "target", 12), onlyTarget = prop($$props, "onlyTarget", 8, !1);
  function isTarget(v) {
    return v == null ? void 0 : v.target;
  }
  __name(isTarget, "isTarget");
  let id = prop($$props, "id", 24, () => `accdiff-total-display-${counter++}`), lockonId = isTarget(target()) ? `accdiff-total-display-consume-lockon-${lockonCounter++}` : "", stunnedId = isTarget(target()) ? `accdiff-total-display-stunned-${stunnedCounter++}` : "";
  function toggleLockOn() {
    isTarget(target()) && target().lockOnAvailable && target(target().consumeLockOn = !target().consumeLockOn, !0);
  }
  __name(toggleLockOn, "toggleLockOn");
  let pluginClasses = Object.values(target().plugins).filter((plugin) => plugin.uiElement == "checkbox" && plugin.uiState).map((plugin) => `accdiff-total-${plugin.slug}`).join(" "), imgElement = mutable_source(), dropdownElement = mutable_source();
  onMount(() => {
    get(imgElement) && get(dropdownElement) && tippy(get(imgElement), {
      content: get(dropdownElement),
      interactive: !0,
      allowHTML: !0,
      trigger: "click mouseenter",
      placement: "right"
    });
  }), init();
  var fragment = root$2(), node = first_child(fragment);
  {
    var consequent_2 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_1 = root_1$1(), div = first_child(fragment_1), img = child(div);
      let classes;
      bind_this(img, ($$value) => set(imgElement, $$value), () => get(imgElement));
      var node_1 = sibling(img, 2);
      {
        var consequent = /* @__PURE__ */ __name(($$anchor3) => {
          var label = root_2();
          template_effect(() => set_attribute(label, "for", stunnedId)), transition(7, label, () => blur), append($$anchor3, label);
        }, "consequent");
        if_block(node_1, ($$render) => {
          deep_read_state(target()), untrack(() => target().stunned) && $$render(consequent);
        });
      }
      var label_1 = sibling(node_1, 2);
      let classes_1;
      var i = child(label_1);
      let classes_2;
      var node_2 = sibling(i, 2);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(target()), untrack(() => !!target().usingLockOn))), $1 = derived_safe_equal(() => (deep_read_state(target()), untrack(() => !target().lockOnAvailable)));
        HudCheckbox(node_2, {
          label: "Consume Lock On (+1)",
          get checked() {
            return get($0);
          },
          get disabled() {
            return get($1);
          },
          visible: !1,
          get value() {
            return target().consumeLockOn;
          },
          set value($$value) {
            target(target().consumeLockOn = $$value, !0);
          },
          $$legacy: !0
        });
      }
      var node_3 = sibling(div, 2);
      {
        var consequent_1 = /* @__PURE__ */ __name(($$anchor3) => {
          var div_1 = root_3$1();
          each(
            div_1,
            5,
            () => (deep_read_state(target()), untrack(() => Object.keys(target().plugins))),
            index,
            ($$anchor4, key2) => {
              Plugin($$anchor4, {
                get data() {
                  return target().plugins[get(key2)];
                },
                set data($$value) {
                  target(target().plugins[get(key2)] = $$value, !0);
                },
                $$legacy: !0
              });
            }
          ), bind_this(div_1, ($$value) => set(dropdownElement, $$value), () => get(dropdownElement)), append($$anchor3, div_1);
        }, "consequent_1");
        if_block(node_3, ($$render) => {
          onlyTarget() || $$render(consequent_1);
        });
      }
      template_effect(() => {
        set_class(div, 1, `accdiff-grid lancer-hit-thumb accdiff-target-has-dropdown ${pluginClasses ?? ""}`, "svelte-16bpf9g"), set_attribute(img, "alt", (deep_read_state(target()), untrack(() => target().token.name ?? void 0))), set_attribute(img, "src", (deep_read_state(target()), untrack(() => {
          var _a;
          return (_a = target().token.actor) == null ? void 0 : _a.img;
        }))), classes = set_class(img, 1, "svelte-16bpf9g", null, classes, { "accdiff-target-prone": target().prone }), set_attribute(label_1, "for", lockonId), classes_1 = set_class(label_1, 1, "lockon-label svelte-16bpf9g", null, classes_1, {
          checked: target().usingLockOn,
          disabled: !target().lockOnAvailable
        }), classes_2 = set_class(i, 1, "cci cci-condition-lock-on svelte-16bpf9g", null, classes_2, {
          "i--click": target().lockOnAvailable,
          "i--3": !target().usingLockOn,
          "i--5": target().usingLockOn
        });
      }), event("click", i, toggleLockOn), event("keypress", i, toggleLockOn), transition(5, div, () => send, () => ({ key: `${id()}-img`, delay: 100, duration: 200 })), transition(6, div, () => recv, () => ({ key: `${id()}-img`, duration: 200 })), append($$anchor2, fragment_1);
    }, "consequent_2"), d = user_derived(() => (deep_read_state(target()), untrack(() => isTarget(target()))));
    if_block(node, ($$render) => {
      get(d) && $$render(consequent_2);
    });
  }
  var div_2 = sibling(node, 2), div_3 = child(div_2);
  let classes_3;
  each(
    div_3,
    5,
    () => (deep_read_state(target()), untrack(() => [target().total])),
    (total) => target().total,
    ($$anchor2, total) => {
      var div_4 = root_5$1(), span = child(div_4), text2 = child(span), i_1 = sibling(span, 2);
      let classes_4;
      template_effect(
        ($0) => {
          set_attribute(div_4, "id", id()), set_text(text2, $0), classes_4 = set_class(i_1, 1, "cci i--4 i--dark white--text middle svelte-16bpf9g", null, classes_4, {
            "cci-accuracy": get(total) >= 0,
            "cci-difficulty": get(total) < 0
          });
        },
        [
          () => (get(total), untrack(() => Math.abs(get(total))))
        ]
      ), transition(1, span, () => fly, () => ({ y: -50, duration: 400 })), transition(2, span, () => fly, () => ({ y: 50, duration: 200 })), transition(1, i_1, () => fly, () => ({ y: -50, duration: 200 })), transition(2, i_1, () => fly, () => ({ y: 50, duration: 200 })), transition(7, div_4, () => blur), append($$anchor2, div_4);
    }
  ), template_effect(() => classes_3 = set_class(div_3, 1, `grid-enforcement total-container ${pluginClasses ?? ""}`, "svelte-16bpf9g", classes_3, { accurate: target().total > 0, inaccurate: target().total < 0 })), transition(5, div_2, () => send, () => ({ key: id() })), transition(6, div_2, () => recv, () => ({ key: id() })), append($$anchor, fragment), pop();
}
__name(TotalAccuracy, "TotalAccuracy");
var root$1 = from_html('<button class="lancer-button dec-set svelte-1fyd22x" type="button" data-tooltip="Add global accuracy"><i class="cci cci-accuracy i--3"></i></button> <label class="flexcol svelte-1fyd22x" data-tooltip="Global Accuracy/Difficulty Adjustment"><strong style="text-wrap: nowrap">Manual Adjust</strong> <strong class="accdiff-value svelte-1fyd22x"><span> </span> <i></i></strong></label> <input class="difficulty lancer-invisible-input dec-set" style="display: none" type="number"/> <button class="lancer-button dec-set svelte-1fyd22x" type="button" data-tooltip="Add global difficulty"><i class="cci cci-difficulty i--3"></i></button>', 1);
function AccDiffInput($$anchor, $$props) {
  let value = prop($$props, "value", 12, 0), id = prop($$props, "id", 8);
  var fragment = root$1(), button = first_child(fragment), label = sibling(button, 2), strong = sibling(child(label), 2), span = child(strong), text2 = child(span), i = sibling(span, 2);
  let classes;
  var input = sibling(label, 2), button_1 = sibling(input, 2);
  template_effect(
    ($0) => {
      set_attribute(label, "for", id()), set_text(text2, $0), classes = set_class(i, 1, "i--3 cci", null, classes, { "cci-accuracy": value() >= 0, "cci-difficulty": value() < 0 }), set_attribute(input, "id", id());
    },
    [
      () => (deep_read_state(value()), untrack(() => Math.abs(value())))
    ]
  ), event("click", button, () => value(value() + 1)), bind_value(input, value), event("click", button_1, () => value(value() - 1)), append($$anchor, fragment);
}
__name(AccDiffInput, "AccDiffInput");
var root_3 = from_html('<i class="cci cci-tech-quick i--4 i--light"></i>'), root_4 = from_html('<i class="cci cci-weapon i--4 i--light"></i>'), root_5 = from_html('<i class="fas fa-dice-d20 i--4 i--light"></i>'), root_1 = from_html('<div><!> <span class="svelte-13q4b2q"> </span></div>'), root_7 = from_html('<label class="flexrow accdiff-weight lancer-border-primary" for="accdiff-flat-bonus">Flat Modifier</label> <div class="accdiff-grid accdiff-flat-bonus svelte-13q4b2q"><div class="accdiff-other-grid svelte-13q4b2q"><span><b> </b> </span></div> <div class="accdiff-other-grid accdiff-flat-mod svelte-13q4b2q" style="position: relative"><input class="accdiff-flat-mod__input svelte-13q4b2q" type="number"/> <button class="accdiff-flat-mod__plus svelte-13q4b2q" type="button"><i class="fas fa-plus svelte-13q4b2q"></i></button> <button class="accdiff-flat-mod__minus svelte-13q4b2q" type="button"><i class="fas fa-minus svelte-13q4b2q"></i></button></div> <div class="accdiff-other-grid svelte-13q4b2q"><span><b>Total:</b> </span></div></div>', 1), root_8 = from_html("<!> <!>", 1), root_10 = from_html("<!> <!>", 1), root_13 = from_html("<!> <!> <!> <!>", 1), root_17 = from_html("<div><!></div>"), root_18 = from_html("<div><!></div>"), root_16 = from_html('<div class="grid-enforcement"><!></div>'), root_12 = from_html('<div class="accdiff-grid accdiff-grid__section svelte-13q4b2q" style="width: 100%"><div class="accdiff-grid__column svelte-13q4b2q"><!></div> <div class="accdiff-grid__column svelte-13q4b2q"><!> <!></div></div>'), root_20 = from_html('<button class="range-button svelte-13q4b2q" type="button"><i></i> </button>'), root_19 = from_html('<div class="accdiff-grid__section svelte-13q4b2q"><span class="accdiff-weight flex-center flexrow">Targeting</span> <div class="accdiff-ranges flexrow svelte-13q4b2q"></div></div>'), root_22 = from_html('<div class="flexrow flex-center"><label class="accdiff-weight total-label lancer-mini-header svelte-13q4b2q" for="total-display-0">🞂 <span class="svelte-13q4b2q">Total <!></span> 🞀</label></div>'), root_24 = from_html('<div class="flexrow flex-center accdiff-total svelte-13q4b2q"><!></div>'), root_25 = from_html('<div class="flexrow flex-center accdiff-total svelte-13q4b2q"><!></div>'), root_29 = from_html("<div></div>"), root_27 = from_html('<div class="flexcol card accdiff-target svelte-13q4b2q"><label class="target-name flexrow lancer-mini-header svelte-13q4b2q">🞂<span> </span>🞀</label> <div class="accdiff-target-body svelte-13q4b2q"><div class="flexrow accdiff-total svelte-13q4b2q"><!></div> <div class="flexrow"><button class="i--4 no-grow accdiff-button svelte-13q4b2q" type="button"><i class="cci cci-accuracy i--4 svelte-13q4b2q" style="border: none"></i></button> <input style="display: none" type="number" min="0"/> <!> <input style="display: none" type="number" min="0"/> <button class="i--4 no-grow accdiff-button svelte-13q4b2q" type="button"><i class="cci cci-difficulty i--4 svelte-13q4b2q" style="border: none"></i></button></div></div></div>'), root_26 = from_html('<div class="accdiff-weight accdiff-target-row svelte-13q4b2q"></div>'), root = from_html('<form id="accdiff" class="lancer lancer-hud accdiff window-content svelte-13q4b2q"><!> <!> <div class="lancer-hud-body svelte-13q4b2q"><!> <div class="accdiff-grid accdiff-grid__section svelte-13q4b2q"><div class="accdiff-grid__column svelte-13q4b2q"><h4 class="lancer-border-primary svelte-13q4b2q"><i class="cci cci-accuracy i--4" style="vertical-align: middle; border: none"></i> <span>Accuracy</span></h4></div> <div class="accdiff-grid__column svelte-13q4b2q"><h4 class="lancer-border-primary svelte-13q4b2q"><i class="cci cci-difficulty i--4" style="vertical-align: middle; border: none"></i> <span>Difficulty</span></h4></div></div> <div class="accdiff-grid accdiff-grid__section svelte-13q4b2q"><div class="accdiff-grid__column svelte-13q4b2q"><!> <!></div> <div class="accdiff-grid__column svelte-13q4b2q"><!> <!> <!></div></div> <!> <div class="flexcol accdiff-grid svelte-13q4b2q"><div class="flexrow accdiff-grid__section svelte-13q4b2q" style="justify-content: space-evenly"><!></div> <!></div> <div class="flexcol accdiff-footer lancer-border-primary svelte-13q4b2q"><div class="accdiff-total svelte-13q4b2q"><!> <div class="grid-enforcement"><!></div></div></div></div> <div class="lancer-hud-buttons flexrow"><button class="lancer-button lancer-secondary dialog-button submit default svelte-13q4b2q" data-button="submit" type="submit"><i class="fas fa-check"></i> Roll</button> <button class="dialog-button cancel svelte-13q4b2q" data-button="cancel" type="button"><i class="fas fa-times"></i> Cancel</button></div></form>');
function AccDiffHUD($$anchor, $$props) {
  var _a, _b;
  push($$props, !1);
  const profile = mutable_source(), ranges = mutable_source(), flatTotal = mutable_source(), accWeaponPlugins = mutable_source(), diffWeaponPlugins = mutable_source(), accTargetPlugins = mutable_source(), diffTargetPlugins = mutable_source();
  let weapon = prop($$props, "weapon", 12), base = prop($$props, "base", 12), targets = prop($$props, "targets", 12), title = prop($$props, "title", 12), lancerItem = prop($$props, "lancerItem", 12), lancerActor = prop($$props, "lancerActor", 12), kind = prop($$props, "kind", 12);
  const dispatch = createEventDispatcher();
  let submitted = mutable_source(!1), rollerName = lancerActor() ? ` -- ${((_a = lancerActor().token) == null ? void 0 : _a.name) || lancerActor().name}` : "";
  if (kind() === "attack" && lancerItem() && !isTech()) {
    let ranges2 = [];
    lancerItem().is_pilot_weapon() || lancerItem().is_npc_feature() && lancerItem().system.type === NpcFeatureType.Weapon ? ranges2 = lancerItem().system.range.map((r) => r.type) : lancerItem().is_mech_weapon() && (ranges2 = (((_b = lancerItem().system.active_profile) == null ? void 0 : _b.range) || []).map((r) => r.type)), ranges2.some((r) => ![RangeType.Threat, RangeType.Thrown].includes(r)) && weapon(weapon().engaged = !!weapon().engagedStatus, !0);
  }
  function focus(el) {
    el.focus();
  }
  __name(focus, "focus");
  function targetHoverIn(event2, target) {
    if (get(submitted)) return;
    const thtModule = game.modules.get("terrain-height-tools");
    !(thtModule != null && thtModule.active) || foundry.utils.isNewerVersion("0.3.3", thtModule.version) ? target._onHoverIn(event2) : drawLos(target);
  }
  __name(targetHoverIn, "targetHoverIn");
  function targetHoverOut(event2, target) {
    const thtModule = game.modules.get("terrain-height-tools");
    !(thtModule != null && thtModule.active) || foundry.utils.isNewerVersion("0.3.3", thtModule.version) ? target._onHoverOut(event2) : clearLos();
  }
  __name(targetHoverOut, "targetHoverOut");
  function drawLos(target) {
    var _a2, _b2, _c, _d;
    const thtModule = game.modules.get("terrain-height-tools");
    if (!(thtModule != null && thtModule.active) || foundry.utils.isNewerVersion("0.3.3", thtModule.version)) return;
    const tokens = ((_a2 = lancerActor()) == null ? void 0 : _a2.getActiveTokens(!0)) ?? ((_c = (_b2 = lancerItem()) == null ? void 0 : _b2.actor) == null ? void 0 : _c.getActiveTokens(!0)), attacker = tokens == null ? void 0 : tokens.shift();
    !attacker || attacker === target || (_d = globalThis.terrainHeightTools) == null || _d.drawLineOfSightRaysBetweenTokens(attacker, target);
  }
  __name(drawLos, "drawLos");
  function clearLos() {
    var _a2;
    const thtModule = game.modules.get("terrain-height-tools");
    !(thtModule != null && thtModule.active) || foundry.utils.isNewerVersion("0.3.3", thtModule.version) || (_a2 = globalThis.terrainHeightTools) == null || _a2.clearLineOfSightRays();
  }
  __name(clearLos, "clearLos");
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
  function isAttack() {
    return kind() === "attack";
  }
  __name(isAttack, "isAttack");
  function isTech() {
    return lancerItem() ? !(lancerItem().is_mech_weapon() || lancerItem().is_pilot_weapon() || lancerItem().is_npc_feature() && lancerItem().system.type === NpcFeatureType.Weapon) : title().toLowerCase() === "tech attack";
  }
  __name(isTech, "isTech");
  function gritLabel() {
    var _a2;
    if (isTech())
      return (_a2 = lancerItem()) != null && _a2.is_npc_feature() && lancerItem().system.type === NpcFeatureType.Tech ? "Tech Item Base" : "Tech Attack";
    if (lancerItem()) {
      if (lancerItem().is_mech_weapon() || lancerItem().is_pilot_weapon())
        return "Grit";
      if (lancerItem().is_npc_feature() && lancerItem().system.type === NpcFeatureType.Weapon)
        return "Weapon Base";
    }
    if (lancerActor()) {
      if (lancerActor().is_npc())
        return "Tier";
      if (lancerActor().is_mech() || lancerActor().is_pilot() || lancerActor().is_deployable())
        return "Grit";
    }
    return "Grit";
  }
  __name(gritLabel, "gritLabel");
  function flatSign(val) {
    return val > 0 ? "+" : "";
  }
  __name(flatSign, "flatSign");
  function findProfile() {
    var _a2;
    return ((_a2 = lancerItem()) == null ? void 0 : _a2.currentProfile()) ?? { range: [], damage: [] };
  }
  __name(findProfile, "findProfile");
  function findRanges() {
    var _a2;
    return ((_a2 = lancerItem()) == null ? void 0 : _a2.rangesFor([
      RangeType.Blast,
      RangeType.Burst,
      RangeType.Cone,
      RangeType.Line
    ])) ?? [];
  }
  __name(findRanges, "findRanges");
  function deployTemplate(range) {
    var _a2, _b2;
    const creator = (_a2 = lancerItem()) == null ? void 0 : _a2.parent, token = ((_b2 = creator == null ? void 0 : creator.token) == null ? void 0 : _b2.object) ?? (creator == null ? void 0 : creator.getActiveTokens().shift()) ?? void 0, t = WeaponRangeTemplate.fromRange(range, token);
    t && (fade("out"), t.document.updateSource({ [`flags.${game.system.id}.isAttack`]: !0 }), t.placeTemplate().catch((e) => {
      console.warn(e);
    }).then((t2) => {
      t2 && targetsFromTemplate(t2.id), fade("in");
    }));
  }
  __name(deployTemplate, "deployTemplate"), legacy_pre_effect(() => (deep_read_state(base()), deep_read_state(weapon())), () => {
    base((weapon(), base()));
  }), legacy_pre_effect(
    () => (deep_read_state(targets()), deep_read_state(weapon()), deep_read_state(base())),
    () => {
      targets((weapon(), base(), targets()));
    }
  ), legacy_pre_effect(() => deep_read_state(lancerItem()), () => {
    set(profile, lancerItem() ? findProfile() : null);
  }), legacy_pre_effect(() => deep_read_state(lancerItem()), () => {
    set(ranges, lancerItem() ? findRanges() : null);
  }), legacy_pre_effect(() => (deep_read_state(kind()), deep_read_state(base())), () => {
    set(flatTotal, kind() === "attack" ? base().grit + base().flatBonus : 0);
  }), legacy_pre_effect(() => deep_read_state(weapon()), () => {
    set(accWeaponPlugins, Object.values(weapon().plugins).filter((plugin) => plugin.category === "acc"));
  }), legacy_pre_effect(() => deep_read_state(weapon()), () => {
    set(diffWeaponPlugins, Object.values(weapon().plugins).filter((plugin) => plugin.category === "diff"));
  }), legacy_pre_effect(() => deep_read_state(targets()), () => {
    set(accTargetPlugins, targets().length === 1 ? Object.values(targets()[0].plugins).filter((plugin) => plugin.category === "acc") : []);
  }), legacy_pre_effect(() => deep_read_state(targets()), () => {
    set(diffTargetPlugins, targets().length === 1 ? Object.values(targets()[0].plugins).filter((plugin) => plugin.category === "diff") : []);
  }), legacy_pre_effect_reset();
  var $$exports = {
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
    get title() {
      return title();
    },
    set title($$value) {
      title($$value), flushSync();
    },
    get lancerItem() {
      return lancerItem();
    },
    set lancerItem($$value) {
      lancerItem($$value), flushSync();
    },
    get lancerActor() {
      return lancerActor();
    },
    set lancerActor($$value) {
      lancerActor($$value), flushSync();
    },
    get kind() {
      return kind();
    },
    set kind($$value) {
      kind($$value), flushSync();
    }
  };
  init();
  var form = root(), node = child(form);
  {
    var consequent_3 = /* @__PURE__ */ __name(($$anchor2) => {
      var div = root_1(), node_1 = child(div);
      {
        var consequent_1 = /* @__PURE__ */ __name(($$anchor3) => {
          var fragment = comment(), node_2 = first_child(fragment);
          {
            var consequent = /* @__PURE__ */ __name(($$anchor4) => {
              var i_1 = root_3();
              append($$anchor4, i_1);
            }, "consequent"), d = user_derived(() => untrack(isTech)), alternate = /* @__PURE__ */ __name(($$anchor4) => {
              var i_2 = root_4();
              append($$anchor4, i_2);
            }, "alternate");
            if_block(node_2, ($$render) => {
              get(d) ? $$render(consequent) : $$render(alternate, -1);
            });
          }
          append($$anchor3, fragment);
        }, "consequent_1"), consequent_2 = /* @__PURE__ */ __name(($$anchor3) => {
          var i_3 = root_5();
          append($$anchor3, i_3);
        }, "consequent_2");
        if_block(node_1, ($$render) => {
          kind() == "attack" ? $$render(consequent_1) : kind() == "hase" && $$render(consequent_2, 1);
        });
      }
      var span = sibling(node_1, 2), text2 = child(span);
      template_effect(
        ($0) => {
          set_class(div, 1, `lancer-header ${$0 ?? ""} medium`, "svelte-13q4b2q"), set_text(text2, `${title() ?? ""}${rollerName}`);
        },
        [
          () => untrack(() => isTech() ? "lancer-tech" : "lancer-weapon")
        ]
      ), append($$anchor2, div);
    }, "consequent_3");
    if_block(node, ($$render) => {
      title() != "" && $$render(consequent_3);
    });
  }
  var node_3 = sibling(node, 2);
  {
    var consequent_4 = /* @__PURE__ */ __name(($$anchor2) => {
      MiniProfile($$anchor2, {
        get profile() {
          return get(profile);
        }
      });
    }, "consequent_4");
    if_block(node_3, ($$render) => {
      get(profile) && $$render(consequent_4);
    });
  }
  var div_1 = sibling(node_3, 2), node_4 = child(div_1);
  {
    var consequent_5 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_2 = root_7(), div_2 = sibling(first_child(fragment_2), 2), div_3 = child(div_2), span_1 = child(div_3), b = child(span_1), text_1 = child(b), text_2 = sibling(b), div_4 = sibling(div_3, 2), input = child(div_4), button = sibling(input, 2), button_1 = sibling(button, 2), div_5 = sibling(div_4, 2), span_2 = child(div_5), text_3 = sibling(child(span_2));
      template_effect(
        ($0, $1, $2) => {
          set_text(text_1, `${$0 ?? ""}:`), set_text(text_2, ` ${$1 ?? ""}${deep_read_state(base()), untrack(() => base().grit) ?? ""}`), set_text(text_3, ` ${$2 ?? ""}${get(flatTotal) ?? ""}`);
        },
        [
          () => untrack(gritLabel),
          () => (deep_read_state(base()), untrack(() => flatSign(base().grit))),
          () => (get(flatTotal), untrack(() => flatSign(get(flatTotal))))
        ]
      ), bind_value(input, () => base().flatBonus, ($$value) => base(base().flatBonus = $$value, !0)), event("click", button, () => base(base().flatBonus = base().flatBonus + 1, !0)), event("click", button_1, () => base(base().flatBonus = base().flatBonus - 1, !0)), append($$anchor2, fragment_2);
    }, "consequent_5"), d_1 = user_derived(() => untrack(isAttack));
    if_block(node_4, ($$render) => {
      get(d_1) && $$render(consequent_5);
    });
  }
  var div_6 = sibling(node_4, 4), div_7 = child(div_6), node_5 = child(div_7);
  HudCheckbox(node_5, {
    label: "Accurate (+1)",
    get value() {
      return weapon().accurate;
    },
    set value($$value) {
      weapon(weapon().accurate = $$value, !0);
    },
    $$legacy: !0
  });
  var node_6 = sibling(node_5, 2);
  {
    var consequent_6 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_3 = root_8(), node_7 = first_child(fragment_3);
      HudCheckbox(node_7, {
        label: "Seeking (*)",
        get value() {
          return weapon().seeking;
        },
        set value($$value) {
          weapon(weapon().seeking = $$value, !0);
        },
        $$legacy: !0
      });
      var node_8 = sibling(node_7, 2);
      each(node_8, 1, () => get(accWeaponPlugins), index, ($$anchor3, plugin) => {
        Plugin($$anchor3, {
          get data() {
            return get(plugin);
          }
        });
      }), append($$anchor2, fragment_3);
    }, "consequent_6");
    if_block(node_6, ($$render) => {
      kind() == "attack" && $$render(consequent_6);
    });
  }
  var div_8 = sibling(div_7, 2), node_9 = child(div_8);
  HudCheckbox(node_9, {
    label: "Inaccurate (-1)",
    get value() {
      return weapon().inaccurate;
    },
    set value($$value) {
      weapon(weapon().inaccurate = $$value, !0);
    },
    $$legacy: !0
  });
  var node_10 = sibling(node_9, 2);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(weapon()), untrack(() => !!weapon().impaired)));
    HudCheckbox(node_10, {
      label: "Impaired (-1)",
      get value() {
        return get($0);
      },
      disabled: !0
    });
  }
  var node_11 = sibling(node_10, 2);
  {
    var consequent_7 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_5 = root_10(), node_12 = first_child(fragment_5);
      HudCheckbox(node_12, {
        label: "Engaged (-1)",
        get value() {
          return weapon().engaged;
        },
        set value($$value) {
          weapon(weapon().engaged = $$value, !0);
        },
        $$legacy: !0
      });
      var node_13 = sibling(node_12, 2);
      each(node_13, 1, () => get(diffWeaponPlugins), index, ($$anchor3, plugin) => {
        Plugin($$anchor3, {
          get data() {
            return get(plugin);
          }
        });
      }), append($$anchor2, fragment_5);
    }, "consequent_7"), d_2 = user_derived(() => (deep_read_state(kind()), untrack(() => kind() == "attack" && !isTech())));
    if_block(node_11, ($$render) => {
      get(d_2) && $$render(consequent_7);
    });
  }
  var node_14 = sibling(div_6, 2);
  {
    var consequent_12 = /* @__PURE__ */ __name(($$anchor2) => {
      var div_9 = root_12(), div_10 = child(div_9), node_15 = child(div_10);
      {
        var consequent_8 = /* @__PURE__ */ __name(($$anchor3) => {
          var fragment_7 = root_13(), node_16 = first_child(fragment_7);
          HudCheckbox(node_16, {
            style: "grid-area: prone",
            label: "Prone (+1)",
            disabled: !0,
            get value() {
              return targets()[0].prone;
            },
            set value($$value) {
              targets(targets()[0].prone = $$value, !0);
            },
            $$legacy: !0
          });
          var node_17 = sibling(node_16, 2);
          HudCheckbox(node_17, {
            label: "Stunned (EVA=5)",
            disabled: !0,
            get value() {
              return targets()[0].stunned;
            },
            set value($$value) {
              targets(targets()[0].stunned = $$value, !0);
            },
            $$legacy: !0
          });
          var node_18 = sibling(node_17, 2);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(targets()), untrack(() => !!targets()[0].usingLockOn))), $1 = derived_safe_equal(() => (deep_read_state(targets()), untrack(() => !targets()[0].lockOnAvailable)));
            HudCheckbox(node_18, {
              style: "grid-area: lock-on",
              label: "Lock On (+1)",
              get checked() {
                return get($0);
              },
              get disabled() {
                return get($1);
              },
              get value() {
                return targets()[0].consumeLockOn;
              },
              set value($$value) {
                targets(targets()[0].consumeLockOn = $$value, !0);
              },
              $$legacy: !0
            });
          }
          var node_19 = sibling(node_18, 2);
          each(node_19, 1, () => get(accTargetPlugins), index, ($$anchor4, plugin) => {
            Plugin($$anchor4, {
              get data() {
                return get(plugin);
              }
            });
          }), append($$anchor3, fragment_7);
        }, "consequent_8");
        if_block(node_15, ($$render) => {
          deep_read_state(targets()), untrack(() => targets().length == 1) && $$render(consequent_8);
        });
      }
      var div_11 = sibling(div_10, 2), node_20 = child(div_11);
      each(node_20, 1, () => get(diffTargetPlugins), index, ($$anchor3, plugin) => {
        Plugin($$anchor3, {
          get data() {
            return get(plugin);
          }
        });
      });
      var node_21 = sibling(node_20, 2);
      {
        var consequent_11 = /* @__PURE__ */ __name(($$anchor3) => {
          var div_12 = root_16(), node_22 = child(div_12);
          {
            var consequent_9 = /* @__PURE__ */ __name(($$anchor4) => {
              var div_13 = root_17(), node_23 = child(div_13);
              Cover(node_23, {
                class: "accdiff-base-cover flexcol",
                get disabled() {
                  return deep_read_state(weapon()), untrack(() => weapon().seeking);
                },
                get cover() {
                  return base().cover;
                },
                set cover($$value) {
                  base(base().cover = $$value, !0);
                },
                $$legacy: !0
              }), transition(3, div_13, () => slide), append($$anchor4, div_13);
            }, "consequent_9"), consequent_10 = /* @__PURE__ */ __name(($$anchor4) => {
              var div_14 = root_18(), node_24 = child(div_14);
              Cover(node_24, {
                class: "accdiff-base-cover flexcol",
                get disabled() {
                  return deep_read_state(weapon()), untrack(() => weapon().seeking);
                },
                get cover() {
                  return targets()[0].cover;
                },
                set cover($$value) {
                  targets(targets()[0].cover = $$value, !0);
                },
                $$legacy: !0
              }), transition(3, div_14, () => slide), event("mouseenter", div_14, (ev) => targetHoverIn(ev, targets()[0].token)), event("mouseleave", div_14, (ev) => targetHoverOut(ev, targets()[0].token)), append($$anchor4, div_14);
            }, "consequent_10");
            if_block(node_22, ($$render) => {
              deep_read_state(targets()), untrack(() => targets().length == 0) ? $$render(consequent_9) : (deep_read_state(targets()), untrack(() => targets().length == 1) && $$render(consequent_10, 1));
            });
          }
          append($$anchor3, div_12);
        }, "consequent_11"), d_3 = user_derived(() => untrack(() => !isTech()));
        if_block(node_21, ($$render) => {
          get(d_3) && $$render(consequent_11);
        });
      }
      transition(7, div_9, () => slide), append($$anchor2, div_9);
    }, "consequent_12"), d_4 = user_derived(() => (deep_read_state(kind()), deep_read_state(weapon()), deep_read_state(targets()), untrack(() => kind() == "attack" && (Object.values(weapon().plugins).length > 0 || targets().length == 1))));
    if_block(node_14, ($$render) => {
      get(d_4) && $$render(consequent_12);
    });
  }
  var div_15 = sibling(node_14, 2), div_16 = child(div_15), node_25 = child(div_16);
  AccDiffInput(node_25, {
    id: "accdiff-manual-adjust",
    get value() {
      return base().accuracy;
    },
    set value($$value) {
      base(base().accuracy = $$value, !0);
    },
    $$legacy: !0
  });
  var node_26 = sibling(div_16, 2);
  {
    var consequent_13 = /* @__PURE__ */ __name(($$anchor2) => {
      var div_17 = root_19(), div_18 = sibling(child(div_17), 2);
      each(div_18, 5, () => get(ranges), index, ($$anchor3, range) => {
        var button_2 = root_20(), i_4 = child(button_2), text_4 = sibling(i_4);
        template_effect(
          ($0, $1) => {
            set_class(i_4, 1, `cci cci-${$0 ?? ""} i--4 i--light`, "svelte-13q4b2q"), set_text(text_4, ` ${$1 ?? ""}
                ${get(range), untrack(() => get(range).val) ?? ""}`);
          },
          [
            () => (get(range), untrack(() => get(range).type.toLowerCase())),
            () => (get(ranges), get(range), untrack(() => get(ranges).length && get(ranges).length < 3 ? get(range).type.toUpperCase() : ""))
          ]
        ), event("click", button_2, () => deployTemplate(get(range))), append($$anchor3, button_2);
      }), append($$anchor2, div_17);
    }, "consequent_13");
    if_block(node_26, ($$render) => {
      get(ranges), untrack(() => get(ranges) && get(ranges).length > 0) && $$render(consequent_13);
    });
  }
  var div_19 = sibling(div_15, 2), div_20 = child(div_19), node_27 = child(div_20);
  {
    var consequent_15 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_10 = comment(), node_28 = first_child(fragment_10);
      key(
        node_28,
        () => (deep_read_state(targets()), untrack(() => targets().length)),
        ($$anchor3) => {
          var div_21 = root_22(), label = child(div_21), span_3 = sibling(child(label)), node_29 = sibling(child(span_3));
          {
            var consequent_14 = /* @__PURE__ */ __name(($$anchor4) => {
              var text_5 = text();
              template_effect(() => set_text(text_5, `vs ${deep_read_state(targets()), untrack(() => targets()[0].token.name) ?? ""}`)), append($$anchor4, text_5);
            }, "consequent_14");
            if_block(node_29, ($$render) => {
              deep_read_state(targets()), untrack(() => targets().length > 0) && $$render(consequent_14);
            });
          }
          transition(7, label, () => slide), append($$anchor3, div_21);
        }
      ), append($$anchor2, fragment_10);
    }, "consequent_15");
    if_block(node_27, ($$render) => {
      deep_read_state(targets()), untrack(() => targets().length < 2) && $$render(consequent_15);
    });
  }
  var div_22 = sibling(node_27, 2), node_30 = child(div_22);
  {
    var consequent_16 = /* @__PURE__ */ __name(($$anchor2) => {
      var div_23 = root_24(), node_31 = child(div_23);
      TotalAccuracy(node_31, {
        get target() {
          return base();
        },
        id: "total-display-0"
      }), append($$anchor2, div_23);
    }, "consequent_16"), consequent_17 = /* @__PURE__ */ __name(($$anchor2) => {
      var div_24 = root_25(), node_32 = child(div_24);
      TotalAccuracy(node_32, {
        id: "total-display-0",
        onlyTarget: !0,
        get target() {
          return targets()[0];
        },
        set target($$value) {
          targets(targets()[0] = $$value, !0);
        },
        $$legacy: !0
      }), event("mouseenter", div_24, (ev) => targetHoverIn(ev, targets()[0].token)), event("mouseleave", div_24, (ev) => targetHoverOut(ev, targets()[0].token)), append($$anchor2, div_24);
    }, "consequent_17"), alternate_2 = /* @__PURE__ */ __name(($$anchor2) => {
      var div_25 = root_26();
      each(div_25, 15, targets, (data) => data.token.id, ($$anchor3, data, i) => {
        var div_26 = root_27(), label_1 = child(div_26), span_4 = sibling(child(label_1)), text_6 = child(span_4), div_27 = sibling(label_1, 2), div_28 = child(div_27), node_33 = child(div_28);
        {
          let $0 = derived_safe_equal(() => `total-display-${get(i)}`);
          TotalAccuracy(node_33, {
            get id() {
              return get($0);
            },
            get target() {
              return targets()[get(i)];
            },
            set target($$value) {
              targets()[get(i)] = $$value, invalidate_inner_signals(() => targets());
            },
            $$legacy: !0
          });
        }
        var div_29 = sibling(div_28, 2), button_3 = child(div_29), input_1 = sibling(button_3, 2), node_34 = sibling(input_1, 2);
        {
          var consequent_18 = /* @__PURE__ */ __name(($$anchor4) => {
            Cover($$anchor4, {
              get disabled() {
                return deep_read_state(weapon()), untrack(() => weapon().seeking);
              },
              class: "accdiff-targeted-cover flexrow flex-center",
              labelClass: "i--2",
              get cover() {
                return targets()[get(i)].cover;
              },
              set cover($$value) {
                targets()[get(i)].cover = $$value, invalidate_inner_signals(() => targets());
              },
              $$legacy: !0
            });
          }, "consequent_18"), d_5 = user_derived(() => untrack(() => !isTech())), alternate_1 = /* @__PURE__ */ __name(($$anchor4) => {
            var div_30 = root_29();
            append($$anchor4, div_30);
          }, "alternate_1");
          if_block(node_34, ($$render) => {
            get(d_5) ? $$render(consequent_18) : $$render(alternate_1, -1);
          });
        }
        var input_2 = sibling(node_34, 2), button_4 = sibling(input_2, 2);
        template_effect(() => {
          set_attribute(label_1, "for", (targets()[get(i)], untrack(() => targets()[get(i)].token.id))), set_text(text_6, (targets()[get(i)], untrack(() => targets()[get(i)].token.document.name)));
        }), event("click", button_3, () => (targets()[get(i)].accuracy = targets()[get(i)].accuracy + 1, invalidate_inner_signals(() => targets()))), bind_value(input_1, () => targets()[get(i)].accuracy, ($$value) => (targets()[get(i)].accuracy = $$value, invalidate_inner_signals(() => targets()))), bind_value(input_2, () => targets()[get(i)].difficulty, ($$value) => (targets()[get(i)].difficulty = $$value, invalidate_inner_signals(() => targets()))), event("click", button_4, () => (targets()[get(i)].difficulty = targets()[get(i)].difficulty + 1, invalidate_inner_signals(() => targets()))), transition(5, div_26, () => slide, () => ({ delay: 100, duration: 300 })), transition(6, div_26, () => slide, () => ({ duration: 100 })), animation(div_26, () => flip, () => ({ duration: 200 })), event("mouseenter", div_26, (ev) => targetHoverIn(ev, targets()[get(i)].token)), event("mouseleave", div_26, (ev) => targetHoverOut(ev, targets()[get(i)].token)), append($$anchor3, div_26);
      }), append($$anchor2, div_25);
    }, "alternate_2");
    if_block(node_30, ($$render) => {
      deep_read_state(targets()), untrack(() => targets().length == 0) ? $$render(consequent_16) : (deep_read_state(targets()), untrack(() => targets().length == 1) ? $$render(consequent_17, 1) : $$render(alternate_2, -1));
    });
  }
  var div_31 = sibling(div_1, 2), button_5 = child(div_31);
  action(button_5, ($$node) => focus == null ? void 0 : focus($$node));
  var button_6 = sibling(button_5, 2);
  return action(form, ($$node) => escToCancel == null ? void 0 : escToCancel()), effect(() => event("submit", form, preventDefault(() => {
    set(submitted, !0), dispatch("submit");
  }))), template_effect(() => set_attribute(div_1, "id", `${kind() ?? ""}-accdiff-dialog`)), event("click", button_6, () => {
    set(submitted, !0), dispatch("cancel");
  }), append($$anchor, form), pop($$exports);
}
__name(AccDiffHUD, "AccDiffHUD");
export {
  AccDiffHUD as default
};
//# sourceMappingURL=AccDiffHUD-NJvhxuRK.mjs.map
