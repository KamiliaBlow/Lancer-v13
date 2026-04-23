var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { a2 as component_context, S as effect, a3 as render_effect, u as untrack, a as active_effect, a4 as DESTROYING, a5 as STATE_SYMBOL, t as template_effect, v as event, n as pop, p as push, f as child, s as sibling, m as set_text, j as deep_read_state, h as get, q as first_child } from "./lancer-DDaaz8Sk.mjs";
import { c as createEventDispatcher, p as prop, i as init, d as if_block, b as append, f as from_html, s as set_class, q as clsx, g as each, h as index } from "./legacy-D4KALqs2.mjs";
import { c as bind_checked, t as transition, e as slide, a as set_style, s as set_attribute } from "./index-DDVArxkF.mjs";
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
}
__name(is_bound_this, "is_bound_this");
function bind_this(element_or_component = {}, update, get_value, get_parts) {
  var component_effect = (
    /** @type {ComponentContext} */
    component_context.r
  ), parent = (
    /** @type {Effect} */
    active_effect
  );
  return effect(() => {
    var old_parts, parts;
    return render_effect(() => {
      old_parts = parts, parts = (get_parts == null ? void 0 : get_parts()) || [], untrack(() => {
        element_or_component !== get_value(...parts) && (update(element_or_component, ...parts), old_parts && is_bound_this(get_value(...old_parts), element_or_component) && update(null, ...old_parts));
      });
    }), () => {
      let p = parent;
      for (; p !== component_effect && p.parent !== null && p.parent.f & DESTROYING; )
        p = p.parent;
      const teardown = /* @__PURE__ */ __name(() => {
        parts && is_bound_this(get_value(...parts), element_or_component) && update(null, ...parts);
      }, "teardown"), original_teardown = p.teardown;
      p.teardown = () => {
        teardown(), original_teardown == null || original_teardown();
      };
    };
  }), element_or_component;
}
__name(bind_this, "bind_this");
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
__name(cubicOut, "cubicOut");
function flip(node, { from, to }, params = {}) {
  var { delay = 0, duration = /* @__PURE__ */ __name((d) => Math.sqrt(d) * 120, "duration"), easing = cubicOut } = params, style = getComputedStyle(node), transform = style.transform === "none" ? "" : style.transform, [ox, oy] = style.transformOrigin.split(" ").map(parseFloat);
  ox /= node.clientWidth, oy /= node.clientHeight;
  var zoom = get_zoom(node), sx = node.clientWidth / to.width / zoom, sy = node.clientHeight / to.height / zoom, fx = from.left + from.width * ox, fy = from.top + from.height * oy, tx = to.left + to.width * ox, ty = to.top + to.height * oy, dx = (fx - tx) * sx, dy = (fy - ty) * sy, dsx = from.width / to.width, dsy = from.height / to.height;
  return {
    delay,
    duration: typeof duration == "function" ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
    easing,
    css: /* @__PURE__ */ __name((t, u) => {
      var x = u * dx, y = u * dy, sx2 = t + u * dsx, sy2 = t + u * dsy;
      return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx2}, ${sy2});`;
    }, "css")
  };
}
__name(flip, "flip");
function get_zoom(element) {
  if ("currentCSSZoom" in element)
    return (
      /** @type {number} */
      element.currentCSSZoom
    );
  for (var current = element, zoom = 1; current !== null; )
    zoom *= +getComputedStyle(current).zoom, current = /** @type {Element | null} */
    current.parentElement;
  return zoom;
}
__name(get_zoom, "get_zoom");
var root_1$1 = from_html("<i></i>"), root$1 = from_html('<label><input type="checkbox"/> <!> <span style="text-wrap: nowrap" class="svelte-14gn6zy"> </span></label>');
function HudCheckbox($$anchor, $$props) {
  push($$props, !1);
  const dispatch = createEventDispatcher();
  let style = prop($$props, "style", 8, ""), label = prop($$props, "label", 8, ""), icon = prop($$props, "icon", 8, ""), tooltip = prop($$props, "tooltip", 8, null), checked = prop($$props, "checked", 8, null), value = prop($$props, "value", 12, !1), partial = prop($$props, "partial", 8, !1), disabled = prop($$props, "disabled", 8, !1), visible = prop($$props, "visible", 8, !0);
  checked() !== null && value(checked()), init();
  var label_1 = root$1();
  let classes;
  var input = child(label_1), node = sibling(input, 2);
  {
    var consequent = /* @__PURE__ */ __name(($$anchor2) => {
      var i = root_1$1();
      template_effect(() => set_class(i, 1, `${icon() ?? ""} i--2`, "svelte-14gn6zy")), append($$anchor2, i);
    }, "consequent");
    if_block(node, ($$render) => {
      icon() && $$render(consequent);
    });
  }
  var span = sibling(node, 2), text = child(span);
  template_effect(() => {
    classes = set_class(label_1, 1, "container svelte-14gn6zy", null, classes, { invisible: !visible() }), set_style(label_1, style()), set_attribute(label_1, "data-tooltip", tooltip()), input.disabled = disabled(), set_class(input, 1, clsx(partial() ? "partial" : ""), "svelte-14gn6zy"), set_text(text, label());
  }), bind_checked(input, value), event("change", input, () => dispatch("change", value())), transition(3, label_1, () => slide), append($$anchor, label_1), pop();
}
__name(HudCheckbox, "HudCheckbox");
var root_2 = from_html('<span data-tooltip="Attack bonus"><i class="cci cci-reticule"></i> </span>'), root_3 = from_html("<span><i></i> </span>"), root_1 = from_html('<div class="mini-weapon-profile-accuracy flexrow"><!> <!></div> <span class="mini-weapon-profile-separator">//</span>', 1), root_4 = from_html("<span><i></i> </span>"), root_6 = from_html("<span><i></i> </span>"), root_5 = from_html('<span class="mini-weapon-profile-separator">//</span> <div class="mini-weapon-profile-damage flexrow"></div>', 1), root = from_html('<div class="mini-weapon-profile flexrow"><!> <div class="mini-weapon-profile-range flexrow"></div> <!></div>');
function MiniProfile($$anchor, $$props) {
  push($$props, !1);
  let profile = prop($$props, "profile", 8);
  init();
  var div = root(), node = child(div);
  {
    var consequent_2 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment = root_1(), div_1 = first_child(fragment), node_1 = child(div_1);
      {
        var consequent = /* @__PURE__ */ __name(($$anchor3) => {
          var span = root_2(), text = sibling(child(span));
          template_effect(() => set_text(text, `${deep_read_state(profile()), untrack(() => profile().attack < 0 ? "-" : "+") ?? ""}${deep_read_state(profile()), untrack(() => profile().attack) ?? ""}`)), append($$anchor3, span);
        }, "consequent");
        if_block(node_1, ($$render) => {
          deep_read_state(profile()), untrack(() => profile().attack) && $$render(consequent);
        });
      }
      var node_2 = sibling(node_1, 2);
      {
        var consequent_1 = /* @__PURE__ */ __name(($$anchor3) => {
          var span_1 = root_3(), i = child(span_1), text_1 = sibling(i, 1, !0);
          template_effect(
            ($0) => {
              set_attribute(span_1, "data-tooltip", (deep_read_state(profile()), untrack(() => (profile().accuracy ?? 0) > 0 ? "Accuracy" : "Difficulty"))), set_class(i, 1, `cci cci-${deep_read_state(profile()), untrack(() => (profile().accuracy ?? 0) > 0 ? "accuracy" : "difficulty") ?? ""}`), set_text(text_1, $0);
            },
            [
              () => (deep_read_state(profile()), untrack(() => Math.abs(profile().accuracy)))
            ]
          ), append($$anchor3, span_1);
        }, "consequent_1");
        if_block(node_2, ($$render) => {
          deep_read_state(profile()), untrack(() => profile().accuracy) && $$render(consequent_1);
        });
      }
      append($$anchor2, fragment);
    }, "consequent_2");
    if_block(node, ($$render) => {
      deep_read_state(profile()), untrack(() => profile().attack || profile().accuracy) && $$render(consequent_2);
    });
  }
  var div_2 = sibling(node, 2);
  each(
    div_2,
    5,
    () => (deep_read_state(profile()), untrack(() => profile().range)),
    index,
    ($$anchor2, range) => {
      var span_2 = root_4(), i_1 = child(span_2), text_2 = sibling(i_1, 1, !0);
      template_effect(
        ($0) => {
          set_attribute(span_2, "data-tooltip", (get(range), untrack(() => get(range).type))), set_class(i_1, 1, `cci cci-${$0 ?? ""}`), set_text(text_2, (get(range), untrack(() => get(range).val)));
        },
        [
          () => (get(range), untrack(() => get(range).type.toLowerCase()))
        ]
      ), append($$anchor2, span_2);
    }
  );
  var node_3 = sibling(div_2, 2);
  {
    var consequent_3 = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment_1 = root_5(), div_3 = sibling(first_child(fragment_1), 2);
      each(
        div_3,
        5,
        () => (deep_read_state(profile()), untrack(() => profile().damage)),
        index,
        ($$anchor3, damage) => {
          var span_3 = root_6(), i_2 = child(span_3), text_3 = sibling(i_2, 1, !0);
          template_effect(
            ($0, $1) => {
              set_attribute(span_3, "data-tooltip", (get(damage), untrack(() => get(damage).type))), set_class(i_2, 1, `cci cci-${$0 ?? ""} damage--${$1 ?? ""}`), set_text(text_3, (get(damage), untrack(() => get(damage).val)));
            },
            [
              () => (get(damage), untrack(() => get(damage).type.toLowerCase())),
              () => (get(damage), untrack(() => get(damage).type.toLowerCase()))
            ]
          ), append($$anchor3, span_3);
        }
      ), append($$anchor2, fragment_1);
    }, "consequent_3");
    if_block(node_3, ($$render) => {
      deep_read_state(profile()), untrack(() => profile().damage) && $$render(consequent_3);
    });
  }
  append($$anchor, div), pop();
}
__name(MiniProfile, "MiniProfile");
export {
  HudCheckbox as H,
  MiniProfile as M,
  bind_this as b,
  flip as f
};
//# sourceMappingURL=MiniProfile-CtXJ3ng8.mjs.map
