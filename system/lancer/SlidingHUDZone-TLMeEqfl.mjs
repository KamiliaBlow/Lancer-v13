var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { B as BranchManager, r as readable, j as derived, c as createEventDispatcher, p as prop, i as init, g as each, b as append, k as setup_stores, f as from_html, m as store_get, s as set_class, n as spread_props } from "./legacy-BcWV7VZG.mjs";
import { G as block, H as EFFECT_TRANSPARENT, l as legacy_pre_effect, k as legacy_pre_effect_reset, t as template_effect, n as pop, D as flushSync, h as get, z as mutate, o as mutable_source, p as push, i as set, f as child } from "./lancer-DFseNsgi.mjs";
import { d as animation, t as transition, e as slide, a as set_style } from "./index-Bvi01zmg.mjs";
import { b as bind_prop } from "./props-CxFCuGXg.mjs";
import { b as bind_this, f as flip } from "./MiniProfile-Dwkd9lo3.mjs";
import AccDiffHUD from "./AccDiffHUD-CebgZ9qG.mjs";
import DamageHUD from "./DamageHUD-D2xPJ-kJ.mjs";
import StructStressHUD from "./StructStressHUD-CddjGxJl.mjs";
function component(node, get_component, render_fn) {
  var branches = new BranchManager(node);
  block(() => {
    var component2 = get_component() ?? null;
    branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
  }, EFFECT_TRANSPARENT);
}
__name(component, "component");
const sidebarWidth = readable(0, (update) => {
  const sidebar = document.getElementById("sidebar");
  async function setWidth() {
    sidebar && (await new Promise((resolve) => setTimeout(resolve, 200)), update(sidebar.offsetWidth || 0));
  }
  __name(setWidth, "setWidth"), setWidth(), Hooks.on("collapseSidebar", setWidth);
}), dataTransfer = readable(null, (update) => {
  function updateData(e) {
    update(e.defaultPrevented ? null : e.dataTransfer ?? null);
  }
  __name(updateData, "updateData"), document.addEventListener(
    "dragstart",
    (e) => {
      setTimeout(() => updateData(e), 0);
    },
    {
      capture: !0,
      passive: !0
    }
  ), document.addEventListener(
    "dragend",
    (e) => {
      update(null);
    },
    {
      capture: !0,
      passive: !0
    }
  );
}), isDragging = derived(dataTransfer, (dt) => !!dt), userTargets = readable([], (update) => {
  function updateData() {
    update(Array.from(game.user.targets));
  }
  __name(updateData, "updateData"), Hooks.on("targetToken", (user, _token, _isNewTarget) => {
    user.isSelf && updateData();
  }), Hooks.on("createActiveEffect", updateData), Hooks.on("deleteActiveEffect", updateData), Hooks.on("updateToken", (token) => {
    var _a, _b;
    ((_b = CanvasAnimation.getAnimation((_a = token.object) == null ? void 0 : _a.animationName)) == null ? void 0 : _b.promise.then(() => updateData())) ?? updateData();
  });
});
var root_1 = from_html('<div class="component grid-enforcement svelte-imp4iy"><!></div>'), root = from_html('<div id="hudzone"></div>');
function SlidingHUDZone($$anchor, $$props) {
  push($$props, !1);
  const $userTargets = /* @__PURE__ */ __name(() => store_get(userTargets, "$userTargets", $$stores), "$userTargets"), $isDragging = /* @__PURE__ */ __name(() => store_get(isDragging, "$isDragging", $$stores), "$isDragging"), $sidebarWidth = /* @__PURE__ */ __name(() => store_get(sidebarWidth, "$sidebarWidth", $$stores), "$sidebarWidth"), [$$stores, $$cleanup] = setup_stores(), attackData = mutable_source(), damageData = mutable_source(), visibleHudsKeys = mutable_source();
  let dispatch = createEventDispatcher(), dialogs = {
    hase: AccDiffHUD,
    attack: AccDiffHUD,
    damage: DamageHUD,
    struct: StructStressHUD,
    stress: StructStressHUD
  }, huds = mutable_source({
    hase: { open: null },
    attack: { open: null },
    damage: { open: null },
    struct: { open: null },
    stress: { open: null }
  });
  function open(key, data2) {
    dispatch(`${key}.cancel`), mutate(huds, get(huds)[key].open = (/* @__PURE__ */ new Date()).getTime()), mutate(huds, get(huds)[key].data = data2);
  }
  __name(open, "open");
  function close(key) {
    dispatch(`${key}.cancel`), mutate(huds, get(huds)[key].open = null), mutate(huds, get(huds)[key].data = null);
  }
  __name(close, "close");
  function refresh(key, data2) {
    mutate(huds, get(huds)[key].data = data2);
  }
  __name(refresh, "refresh");
  function data(key) {
    if (get(huds)[key] && get(huds)[key].data)
      return get(huds)[key].data;
  }
  __name(data, "data");
  function isOpen(key) {
    return (get(huds)[key] && get(huds)[key].open) !== null;
  }
  __name(isOpen, "isOpen");
  let faded = prop($$props, "faded", 12, !1);
  function fade(dir) {
    faded(dir == "out");
  }
  __name(fade, "fade");
  let components = prop($$props, "components", 28, () => ({}));
  function forward(key, event, data2) {
    dispatch(`${key}.${event}`, data2 || void 0), mutate(huds, get(huds)[key].open = null), mutate(huds, get(huds)[key].data = null);
  }
  __name(forward, "forward"), legacy_pre_effect(() => get(huds), () => {
    set(attackData, get(huds).attack.data);
  }), legacy_pre_effect(() => (get(attackData), $userTargets()), () => {
    get(attackData) && (get(attackData).replaceTargets($userTargets()), set(attackData, get(attackData)));
  }), legacy_pre_effect(() => get(huds), () => {
    set(damageData, get(huds).damage.data);
  }), legacy_pre_effect(() => (get(damageData), $userTargets()), () => {
    get(damageData) && (get(damageData).replaceTargets($userTargets()), set(damageData, get(damageData)));
  }), legacy_pre_effect(() => get(huds), () => {
    set(visibleHudsKeys, Object.keys(get(huds)).filter((key) => get(huds)[key].open).sort((a, b) => get(huds)[b].open - get(huds)[a].open));
  }), legacy_pre_effect_reset();
  var $$exports = {
    open,
    close,
    refresh,
    data,
    isOpen,
    fade,
    get faded() {
      return faded();
    },
    set faded($$value) {
      faded($$value), flushSync();
    },
    get components() {
      return components();
    },
    set components($$value) {
      components($$value), flushSync();
    }
  };
  init();
  var div = root();
  let classes;
  each(div, 13, () => get(visibleHudsKeys), (key) => key + get(huds)[key].data.title, ($$anchor2, key) => {
    var div_1 = root_1(), node = child(div_1);
    component(node, () => dialogs[get(key)], ($$anchor3, $$component) => {
      bind_this(
        $$component($$anchor3, spread_props(
          {
            get kind() {
              return get(key);
            }
          },
          () => get(huds)[get(key)].data,
          {
            $$events: {
              submit: /* @__PURE__ */ __name(() => forward(get(key), "submit", get(huds)[get(key)].data), "submit"),
              cancel: /* @__PURE__ */ __name(() => forward(get(key), "cancel"), "cancel")
            },
            $$legacy: !0
          }
        )),
        ($$value, key2) => components(components()[key2] = $$value, !0),
        (key2) => {
          var _a;
          return (_a = components()) == null ? void 0 : _a[key2];
        },
        () => [get(key)]
      );
    }), animation(div_1, () => flip, null), transition(7, div_1, () => slide), append($$anchor2, div_1);
  }), template_effect(() => {
    classes = set_class(div, 1, "lancer-hud-zone svelte-imp4iy", null, classes, { faded: faded() || $isDragging() }), set_style(div, `bottom: 0; right: ${$sidebarWidth() ?? ""}px`);
  }), append($$anchor, div), bind_prop($$props, "open", open), bind_prop($$props, "close", close), bind_prop($$props, "refresh", refresh), bind_prop($$props, "data", data), bind_prop($$props, "isOpen", isOpen), bind_prop($$props, "fade", fade);
  var $$pop = pop($$exports);
  return $$cleanup(), $$pop;
}
__name(SlidingHUDZone, "SlidingHUDZone");
export {
  SlidingHUDZone as default
};
//# sourceMappingURL=SlidingHUDZone-TLMeEqfl.mjs.map
