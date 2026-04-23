var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { a as active_effect, H as EFFECT_TRANSPARENT, a6 as BLOCK_EFFECT, a7 as REACTION_RAN, S as effect, a8 as TRANSITION_GLOBAL, a9 as is_function, aa as queue_micro_task, ab as noop, ac as without_reactive_context, ad as should_intro, u as untrack, ae as TRANSITION_IN, af as TRANSITION_OUT, ag as LOADING_ATTR_SYMBOL, ah as NAMESPACE_HTML, ai as get_prototype_of, aj as get_descriptors, X as listen_to_event_and_reset_event, a3 as render_effect, Y as current_batch, ak as tick, $ as is, I as teardown } from "./lancer-DS-z_c-g.mjs";
import { u as to_style } from "./legacy-DXiyOstn.mjs";
const now = /* @__PURE__ */ __name(() => performance.now(), "now"), raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    /* @__PURE__ */ __name((_) => requestAnimationFrame(_), "tick")
  ),
  now: /* @__PURE__ */ __name(() => now(), "now"),
  tasks: /* @__PURE__ */ new Set()
};
function run_tasks() {
  const now2 = raf.now();
  raf.tasks.forEach((task) => {
    task.c(now2) || (raf.tasks.delete(task), task.f());
  }), raf.tasks.size !== 0 && raf.tick(run_tasks);
}
__name(run_tasks, "run_tasks");
function loop(callback) {
  let task;
  return raf.tasks.size === 0 && raf.tick(run_tasks), {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
__name(loop, "loop");
function dispatch_event(element, type) {
  without_reactive_context(() => {
    element.dispatchEvent(new CustomEvent(type));
  });
}
__name(dispatch_event, "dispatch_event");
function css_property_to_camelcase(style) {
  if (style === "float") return "cssFloat";
  if (style === "offset") return "cssOffset";
  if (style.startsWith("--")) return style;
  const parts = style.split("-");
  return parts.length === 1 ? parts[0] : parts[0] + parts.slice(1).map(
    /** @param {any} word */
    (word) => word[0].toUpperCase() + word.slice(1)
  ).join("");
}
__name(css_property_to_camelcase, "css_property_to_camelcase");
function css_to_keyframe(css) {
  const keyframe = {}, parts = css.split(";");
  for (const part of parts) {
    const [property, value] = part.split(":");
    if (!property || value === void 0) break;
    const formatted_property = css_property_to_camelcase(property.trim());
    keyframe[formatted_property] = value.trim();
  }
  return keyframe;
}
__name(css_to_keyframe, "css_to_keyframe");
const linear$1 = /* @__PURE__ */ __name((t) => t, "linear$1");
function animation(element, get_fn, get_params) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  ), nodes = (
    /** @type {EffectNodes} */
    effect2.nodes
  ), from, to, animation2, original_styles = null;
  nodes.a ?? (nodes.a = {
    element,
    measure() {
      from = this.element.getBoundingClientRect();
    },
    apply() {
      if (animation2 == null || animation2.abort(), to = this.element.getBoundingClientRect(), from.left !== to.left || from.right !== to.right || from.top !== to.top || from.bottom !== to.bottom) {
        const options = get_fn()(this.element, { from, to }, get_params == null ? void 0 : get_params());
        animation2 = animate(this.element, options, void 0, 1, () => {
          animation2 == null || animation2.abort(), animation2 = void 0;
        });
      }
    },
    fix() {
      if (!element.getAnimations().length) {
        var { position, width, height } = getComputedStyle(element);
        if (position !== "absolute" && position !== "fixed") {
          var style = (
            /** @type {HTMLElement | SVGElement} */
            element.style
          );
          original_styles = {
            position: style.position,
            width: style.width,
            height: style.height,
            transform: style.transform
          }, style.position = "absolute", style.width = width, style.height = height;
          var to2 = element.getBoundingClientRect();
          if (from.left !== to2.left || from.top !== to2.top) {
            var transform = `translate(${from.left - to2.left}px, ${from.top - to2.top}px)`;
            style.transform = style.transform ? `${style.transform} ${transform}` : transform;
          }
        }
      }
    },
    unfix() {
      if (original_styles) {
        var style = (
          /** @type {HTMLElement | SVGElement} */
          element.style
        );
        style.position = original_styles.position, style.width = original_styles.width, style.height = original_styles.height, style.transform = original_styles.transform;
      }
    }
  }), nodes.a.element = element;
}
__name(animation, "animation");
function transition(flags, element, get_fn, get_params) {
  var _a;
  var is_intro = (flags & TRANSITION_IN) !== 0, is_outro = (flags & TRANSITION_OUT) !== 0, is_both = is_intro && is_outro, is_global = (flags & TRANSITION_GLOBAL) !== 0, direction = is_both ? "both" : is_intro ? "in" : "out", current_options, inert = element.inert, overflow = element.style.overflow, intro, outro;
  function get_options() {
    return without_reactive_context(() => current_options ?? (current_options = get_fn()(element, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
    {}, {
      direction
    })));
  }
  __name(get_options, "get_options");
  var transition2 = {
    is_global,
    in() {
      var _a2;
      if (element.inert = inert, !is_intro) {
        outro == null || outro.abort(), (_a2 = outro == null ? void 0 : outro.reset) == null || _a2.call(outro);
        return;
      }
      is_outro || intro == null || intro.abort(), intro = animate(element, get_options(), outro, 1, () => {
        dispatch_event(element, "introend"), intro == null || intro.abort(), intro = current_options = void 0, element.style.overflow = overflow;
      });
    },
    out(fn) {
      if (!is_outro) {
        fn == null || fn(), current_options = void 0;
        return;
      }
      element.inert = !0, outro = animate(element, get_options(), intro, 0, () => {
        dispatch_event(element, "outroend"), fn == null || fn();
      });
    },
    stop: /* @__PURE__ */ __name(() => {
      intro == null || intro.abort(), outro == null || outro.abort();
    }, "stop")
  }, e = (
    /** @type {Effect & { nodes: EffectNodes }} */
    active_effect
  );
  if (((_a = e.nodes).t ?? (_a.t = [])).push(transition2), is_intro && should_intro) {
    var run = is_global;
    if (!run) {
      for (var block = (
        /** @type {Effect | null} */
        e.parent
      ); block && (block.f & EFFECT_TRANSPARENT) !== 0; )
        for (; (block = block.parent) && (block.f & BLOCK_EFFECT) === 0; )
          ;
      run = !block || (block.f & REACTION_RAN) !== 0;
    }
    run && effect(() => {
      untrack(() => transition2.in());
    });
  }
}
__name(transition, "transition");
function animate(element, options, counterpart, t2, on_finish) {
  var is_intro = t2 === 1;
  if (is_function(options)) {
    var a, aborted = !1;
    return queue_micro_task(() => {
      if (!aborted) {
        var o = options({ direction: is_intro ? "in" : "out" });
        a = animate(element, o, counterpart, t2, on_finish);
      }
    }), {
      abort: /* @__PURE__ */ __name(() => {
        aborted = !0, a == null || a.abort();
      }, "abort"),
      deactivate: /* @__PURE__ */ __name(() => a.deactivate(), "deactivate"),
      reset: /* @__PURE__ */ __name(() => a.reset(), "reset"),
      t: /* @__PURE__ */ __name(() => a.t(), "t")
    };
  }
  if (counterpart == null || counterpart.deactivate(), !(options != null && options.duration) && !(options != null && options.delay))
    return dispatch_event(element, is_intro ? "introstart" : "outrostart"), on_finish(), {
      abort: noop,
      deactivate: noop,
      reset: noop,
      t: /* @__PURE__ */ __name(() => t2, "t")
    };
  const { delay = 0, css, tick: tick2, easing = linear$1 } = options;
  var keyframes = [];
  if (is_intro && counterpart === void 0 && (tick2 && tick2(0, 1), css)) {
    var styles = css_to_keyframe(css(0, 1));
    keyframes.push(styles, styles);
  }
  var get_t = /* @__PURE__ */ __name(() => 1 - t2, "get_t"), animation2 = element.animate(keyframes, { duration: delay, fill: "forwards" });
  return animation2.onfinish = () => {
    animation2.cancel(), dispatch_event(element, is_intro ? "introstart" : "outrostart");
    var t1 = (counterpart == null ? void 0 : counterpart.t()) ?? 1 - t2;
    counterpart == null || counterpart.abort();
    var delta = t2 - t1, duration = (
      /** @type {number} */
      options.duration * Math.abs(delta)
    ), keyframes2 = [];
    if (duration > 0) {
      var needs_overflow_hidden = !1;
      if (css)
        for (var n = Math.ceil(duration / 16.666666666666668), i = 0; i <= n; i += 1) {
          var t = t1 + delta * easing(i / n), styles2 = css_to_keyframe(css(t, 1 - t));
          keyframes2.push(styles2), needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
        }
      needs_overflow_hidden && (element.style.overflow = "hidden"), get_t = /* @__PURE__ */ __name(() => {
        var time = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          animation2.currentTime
        );
        return t1 + delta * easing(time / duration);
      }, "get_t"), tick2 && loop(() => {
        if (animation2.playState !== "running") return !1;
        var t3 = get_t();
        return tick2(t3, 1 - t3), !0;
      });
    }
    animation2 = element.animate(keyframes2, { duration, fill: "forwards" }), animation2.onfinish = () => {
      get_t = /* @__PURE__ */ __name(() => t2, "get_t"), tick2 == null || tick2(t2, 1 - t2), on_finish();
    };
  }, {
    abort: /* @__PURE__ */ __name(() => {
      animation2 && (animation2.cancel(), animation2.effect = null, animation2.onfinish = noop);
    }, "abort"),
    deactivate: /* @__PURE__ */ __name(() => {
      on_finish = noop;
    }, "deactivate"),
    reset: /* @__PURE__ */ __name(() => {
      t2 === 0 && (tick2 == null || tick2(1, 0));
    }, "reset"),
    t: /* @__PURE__ */ __name(() => get_t(), "t")
  };
}
__name(animate, "animate");
function update_styles(dom, prev = {}, next, priority) {
  for (var key in next) {
    var value = next[key];
    prev[key] !== value && (next[key] == null ? dom.style.removeProperty(key) : dom.style.setProperty(key, value, priority));
  }
}
__name(update_styles, "update_styles");
function set_style(dom, value, prev_styles, next_styles) {
  var prev = dom.__style;
  if (prev !== value) {
    var next_style_attr = to_style(value, next_styles);
    next_style_attr == null ? dom.removeAttribute("style") : dom.style.cssText = next_style_attr, dom.__style = value;
  } else next_styles && (Array.isArray(next_styles) ? (update_styles(dom, prev_styles == null ? void 0 : prev_styles[0], next_styles[0]), update_styles(dom, prev_styles == null ? void 0 : prev_styles[1], next_styles[1], "important")) : update_styles(dom, prev_styles, next_styles));
  return next_styles;
}
__name(set_style, "set_style");
const IS_CUSTOM_ELEMENT = Symbol("is custom element"), IS_HTML = Symbol("is html");
function set_selected(element, selected) {
  selected ? element.hasAttribute("selected") || element.setAttribute("selected", "") : element.removeAttribute("selected");
}
__name(set_selected, "set_selected");
function set_attribute(element, attribute, value, skip_warning) {
  var attributes = get_attributes(element);
  attributes[attribute] !== (attributes[attribute] = value) && (attribute === "loading" && (element[LOADING_ATTR_SYMBOL] = value), value == null ? element.removeAttribute(attribute) : typeof value != "string" && get_setters(element).includes(attribute) ? element[attribute] = value : element.setAttribute(attribute, value));
}
__name(set_attribute, "set_attribute");
function get_attributes(element) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    element.__attributes ?? (element.__attributes = {
      [IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
      [IS_HTML]: element.namespaceURI === NAMESPACE_HTML
    })
  );
}
__name(get_attributes, "get_attributes");
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element) {
  var cache_key = element.getAttribute("is") || element.nodeName, setters = setters_cache.get(cache_key);
  if (setters) return setters;
  setters_cache.set(cache_key, setters = []);
  for (var descriptors, proto = element, element_proto = Element.prototype; element_proto !== proto; ) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors)
      descriptors[key].set && setters.push(key);
    proto = get_prototype_of(proto);
  }
  return setters;
}
__name(get_setters, "get_setters");
function bind_value(input, get, set = get) {
  var batches = /* @__PURE__ */ new WeakSet();
  listen_to_event_and_reset_event(input, "input", async (is_reset) => {
    var value = is_reset ? input.defaultValue : input.value;
    if (value = is_numberlike_input(input) ? to_number(value) : value, set(value), current_batch !== null && batches.add(current_batch), await tick(), value !== (value = get())) {
      var start = input.selectionStart, end = input.selectionEnd, length = input.value.length;
      if (input.value = value ?? "", end !== null) {
        var new_length = input.value.length;
        start === end && end === length && new_length > length ? (input.selectionStart = new_length, input.selectionEnd = new_length) : (input.selectionStart = start, input.selectionEnd = Math.min(end, new_length));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  untrack(get) == null && input.value && (set(is_numberlike_input(input) ? to_number(input.value) : input.value), current_batch !== null && batches.add(current_batch)), render_effect(() => {
    var value = get();
    if (input === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      if (batches.has(batch))
        return;
    }
    is_numberlike_input(input) && value === to_number(input.value) || input.type === "date" && !value && !input.value || value !== input.value && (input.value = value ?? "");
  });
}
__name(bind_value, "bind_value");
const pending = /* @__PURE__ */ new Set();
function bind_group(inputs, group_index, input, get, set = get) {
  var is_checkbox = input.getAttribute("type") === "checkbox", binding_group = inputs;
  if (group_index !== null)
    for (var index of group_index)
      binding_group = binding_group[index] ?? (binding_group[index] = []);
  binding_group.push(input), listen_to_event_and_reset_event(
    input,
    "change",
    () => {
      var value = input.__value;
      is_checkbox && (value = get_binding_group_value(binding_group, value, input.checked)), set(value);
    },
    // TODO better default value handling
    () => set(is_checkbox ? [] : null)
  ), render_effect(() => {
    var value = get();
    is_checkbox ? (value = value || [], input.checked = value.includes(input.__value)) : input.checked = is(input.__value, value);
  }), teardown(() => {
    var index2 = binding_group.indexOf(input);
    index2 !== -1 && binding_group.splice(index2, 1);
  }), pending.has(binding_group) || (pending.add(binding_group), queue_micro_task(() => {
    binding_group.sort((a, b) => a.compareDocumentPosition(b) === 4 ? -1 : 1), pending.delete(binding_group);
  })), queue_micro_task(() => {
  });
}
__name(bind_group, "bind_group");
function bind_checked(input, get, set = get) {
  listen_to_event_and_reset_event(input, "change", (is_reset) => {
    var value = is_reset ? input.defaultChecked : input.checked;
    set(value);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  untrack(get) == null && set(input.checked), render_effect(() => {
    var value = get();
    input.checked = !!value;
  });
}
__name(bind_checked, "bind_checked");
function get_binding_group_value(group, __value, checked) {
  for (var value = /* @__PURE__ */ new Set(), i = 0; i < group.length; i += 1)
    group[i].checked && value.add(group[i].__value);
  return checked || value.delete(__value), Array.from(value);
}
__name(get_binding_group_value, "get_binding_group_value");
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
__name(is_numberlike_input, "is_numberlike_input");
function to_number(value) {
  return value === "" ? null : +value;
}
__name(to_number, "to_number");
function bind_files(input, get, set = get) {
  listen_to_event_and_reset_event(input, "change", () => {
    set(input.files);
  }), render_effect(() => {
    input.files = get();
  });
}
__name(bind_files, "bind_files");
const linear = /* @__PURE__ */ __name((x) => x, "linear");
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
__name(cubic_out, "cubic_out");
function cubic_in_out(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
__name(cubic_in_out, "cubic_in_out");
function split_css_unit(value) {
  const split = typeof value == "string" && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return split ? [parseFloat(split[1]), split[2] || "px"] : [
    /** @type {number} */
    value,
    "px"
  ];
}
__name(split_css_unit, "split_css_unit");
function blur(node, { delay = 0, duration = 400, easing = cubic_in_out, amount = 5, opacity = 0 } = {}) {
  const style = getComputedStyle(node), target_opacity = +style.opacity, f = style.filter === "none" ? "" : style.filter, od = target_opacity * (1 - opacity), [value, unit] = split_css_unit(amount);
  return {
    delay,
    duration,
    easing,
    css: /* @__PURE__ */ __name((_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * value}${unit});`, "css")
  };
}
__name(blur, "blur");
function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: /* @__PURE__ */ __name((t) => `opacity: ${t * o}`, "css")
  };
}
__name(fade, "fade");
function fly(node, { delay = 0, duration = 400, easing = cubic_out, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node), target_opacity = +style.opacity, transform = style.transform === "none" ? "" : style.transform, od = target_opacity * (1 - opacity), [x_value, x_unit] = split_css_unit(x), [y_value, y_unit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: /* @__PURE__ */ __name((t, u) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});
			opacity: ${target_opacity - od * u}`, "css")
  };
}
__name(fly, "fly");
function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
  const style = getComputedStyle(node), opacity = +style.opacity, primary_property = axis === "y" ? "height" : "width", primary_property_value = parseFloat(style[primary_property]), secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"], capitalized_secondary_properties = secondary_properties.map(
    (e) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${e[0].toUpperCase()}${e.slice(1)}`
    )
  ), padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]), padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]), margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]), margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]), border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  ), border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: /* @__PURE__ */ __name((t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`, "css")
  };
}
__name(slide, "slide");
function assign(tar, src) {
  for (const k in src) tar[k] = src[k];
  return (
    /** @type {T & S} */
    tar
  );
}
__name(assign, "assign");
function crossfade({ fallback, ...defaults }) {
  const to_receive = /* @__PURE__ */ new Map(), to_send = /* @__PURE__ */ new Map();
  function crossfade2(from_node, node, params) {
    const {
      delay = 0,
      duration = (
        /** @param {number} d */
        /* @__PURE__ */ __name((d2) => Math.sqrt(d2) * 30, "duration")
      ),
      easing = cubic_out
    } = assign(assign({}, defaults), params), from = from_node.getBoundingClientRect(), to = node.getBoundingClientRect(), dx = from.left - to.left, dy = from.top - to.top, dw = from.width / to.width, dh = from.height / to.height, d = Math.sqrt(dx * dx + dy * dy), style = getComputedStyle(node), transform = style.transform === "none" ? "" : style.transform, opacity = +style.opacity;
    return {
      delay,
      duration: typeof duration == "function" ? duration(d) : duration,
      easing,
      css: /* @__PURE__ */ __name((t, u) => `
			   opacity: ${t * opacity};
			   transform-origin: top left;
			   transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
		   `, "css")
    };
  }
  __name(crossfade2, "crossfade");
  function transition2(items, counterparts, intro) {
    return (node, params) => (items.set(params.key, node), () => {
      if (counterparts.has(params.key)) {
        const other_node = counterparts.get(params.key);
        return counterparts.delete(params.key), crossfade2(
          /** @type {Element} */
          other_node,
          node,
          params
        );
      }
      return items.delete(params.key), fallback && fallback(node, params, intro);
    });
  }
  return __name(transition2, "transition"), [transition2(to_send, to_receive, !1), transition2(to_receive, to_send, !0)];
}
__name(crossfade, "crossfade");
export {
  set_style as a,
  bind_files as b,
  bind_checked as c,
  animation as d,
  slide as e,
  fade as f,
  bind_group as g,
  crossfade as h,
  fly as i,
  blur as j,
  bind_value as k,
  set_selected as l,
  set_attribute as s,
  transition as t
};
//# sourceMappingURL=index-Dj6lREXD.mjs.map
