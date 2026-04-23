var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { p as prop, c as createEventDispatcher, i as init, d as if_block, b as append, f as from_html, s as set_class, g as each, h as index } from "./legacy-yDyYmMLP.mjs";
import { l as legacy_pre_effect, k as legacy_pre_effect_reset, t as template_effect, v as event, n as pop, p as push, j as deep_read_state, s as sibling, D as flushSync, f as child, h as get, m as set_text, o as mutable_source, i as set, u as untrack, M as user_derived } from "./lancer-DH1Zw1BP.mjs";
import { a as action, p as preventDefault } from "./event-modifiers-D_bgxz9v.mjs";
var root_2 = from_html("<i></i>"), root_3 = from_html('<i class="mdi mdi-hexagon-outline i--4 damage-pip damaged svelte-1gz7luo"></i>'), root_1 = from_html('<div class="lancer-hud-body svelte-1gz7luo"><h4 class="svelte-1gz7luo"> </h4> <div class="damage-preview svelte-1gz7luo"><!> <!></div> <p class="message"> </p></div>'), root = from_html('<form id="structstress" class="lancer-hud structstress window-content"><div class="lancer-header lancer-primary medium"><i></i> <span> </span></div> <!> <div class="lancer-hud-buttons flexrow"><button class="dialog-button submit default" data-button="submit" type="submit"><i class="fas fa-check"></i> Roll</button> <button class="dialog-button cancel" data-button="cancel" type="button"><i class="fas fa-times"></i> Cancel</button></div></form>');
function StructStressHUD($$anchor, $$props) {
  var _a;
  push($$props, !1);
  const icon = mutable_source(), current = mutable_source(), damage = mutable_source();
  let title = prop($$props, "title", 12), stat = prop($$props, "stat", 12), lancerActor = prop($$props, "lancerActor", 12), rollerName = lancerActor() ? ` -- ${((_a = lancerActor().token) == null ? void 0 : _a.name) || lancerActor().name}` : "";
  const dispatch = createEventDispatcher();
  function focus(el) {
    el.focus();
  }
  __name(focus, "focus");
  function getCurrent(a) {
    return !a || !a.is_mech() && !a.is_npc() ? 0 : Math.max(a.system[stat()].value - 1, 0);
  }
  __name(getCurrent, "getCurrent");
  function getDamage(a) {
    return !a || !a.is_mech() && !a.is_npc() ? 0 : a.system[stat()].max - getCurrent(a);
  }
  __name(getDamage, "getDamage"), legacy_pre_effect(() => deep_read_state(stat()), () => {
    set(icon, stat() === "stress" ? "reactor" : stat());
  }), legacy_pre_effect(() => deep_read_state(lancerActor()), () => {
    set(current, getCurrent(lancerActor()));
  }), legacy_pre_effect(() => deep_read_state(lancerActor()), () => {
    set(damage, getDamage(lancerActor()));
  }), legacy_pre_effect_reset();
  var $$exports = {
    get title() {
      return title();
    },
    set title($$value) {
      title($$value), flushSync();
    },
    get stat() {
      return stat();
    },
    set stat($$value) {
      stat($$value), flushSync();
    },
    get lancerActor() {
      return lancerActor();
    },
    set lancerActor($$value) {
      lancerActor($$value), flushSync();
    }
  };
  init();
  var form = root(), div = child(form), i = child(div), span = sibling(i, 2), text = child(span), node = sibling(div, 2);
  {
    var consequent = /* @__PURE__ */ __name(($$anchor2) => {
      var div_1 = root_1(), h4 = child(div_1), text_1 = child(h4), div_2 = sibling(h4, 2), node_1 = child(div_2);
      each(node_1, 1, () => ({ length: get(current) }), index, ($$anchor3, _) => {
        var i_1 = root_2();
        template_effect(() => set_class(i_1, 1, `cci cci-${get(icon) ?? ""} i--4 damage-pip`, "svelte-1gz7luo")), append($$anchor3, i_1);
      });
      var node_2 = sibling(node_1, 2);
      each(node_2, 1, () => ({ length: get(damage) }), index, ($$anchor3, _) => {
        var i_2 = root_3();
        append($$anchor3, i_2);
      });
      var p = sibling(div_2, 2), text_2 = child(p);
      template_effect(() => {
        set_text(text_1, `${deep_read_state(lancerActor()), untrack(() => {
          var _a2;
          return ((_a2 = lancerActor()) == null ? void 0 : _a2.name) ?? "UNKNOWN MECH";
        }) ?? ""} has taken ${get(icon) ?? ""} damage!`), set_text(text_2, `Roll ${get(damage) ?? ""}d6 to determine what happens.`);
      }), append($$anchor2, div_1);
    }, "consequent"), d = user_derived(() => (deep_read_state(lancerActor()), untrack(() => lancerActor() && (lancerActor().is_mech() || lancerActor().is_npc()))));
    if_block(node, ($$render) => {
      get(d) && $$render(consequent);
    });
  }
  var div_3 = sibling(node, 2), button = child(div_3);
  action(button, ($$node) => focus == null ? void 0 : focus($$node));
  var button_1 = sibling(button, 2);
  return template_effect(() => {
    set_class(i, 1, `cci cci-${get(icon) ?? ""} i--4 i--light`, "svelte-1gz7luo"), set_text(text, `${title() ?? ""}${rollerName}`);
  }), event("click", button_1, () => dispatch("cancel")), event("submit", form, preventDefault(() => {
    dispatch("submit");
  })), append($$anchor, form), pop($$exports);
}
__name(StructStressHUD, "StructStressHUD");
export {
  StructStressHUD as default
};
//# sourceMappingURL=StructStressHUD-B--0W-Vh.mjs.map
