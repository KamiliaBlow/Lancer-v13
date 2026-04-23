var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value), __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
import { ab as noop, u as untrack, al as safe_not_equal, am as run_all, I as teardown, an as define_property, o as mutable_source, h as get$1, i as set, d as create_element, b as get_first_child, ao as is_firefox, ap as TEMPLATE_FRAGMENT, aq as TEMPLATE_USE_IMPORT_NODE, a as active_effect, ar as create_text, as as resume_effect, at as destroy_effect, au as pause_effect, av as branch, Y as current_batch, aw as move_effect, ax as should_defer_append, G as block, H as EFFECT_TRANSPARENT, ay as EACH_IS_CONTROLLED, az as internal_set, aA as EFFECT_OFFSCREEN, aB as each_key_duplicate, O as derived_safe_equal, Z as is_array, aC as array_from, aD as EACH_ITEM_REACTIVE, aE as EACH_ITEM_IMMUTABLE, aF as source, aG as EACH_INDEX_REACTIVE, aH as DESTROYED, aI as INERT, aa as queue_micro_task, aJ as BRANCH_EFFECT, aK as EACH_IS_ANIMATED, aL as clear_text_content, aM as get_next_sibling, a2 as component_context, aN as user_pre_effect, aO as user_effect, aP as run, j as deep_read_state, aQ as derived$1, J as get_descriptor, aR as props_invalid_value, aS as PROPS_IS_UPDATED, aT as proxy, aU as PROPS_IS_BINDABLE, aV as PROPS_IS_IMMUTABLE, aW as PROPS_IS_LAZY_INITIAL, aX as is_destroying_effect, aY as legacy_mode_flag, aZ as PROPS_IS_RUNES, a5 as STATE_SYMBOL, a_ as LEGACY_PROPS, a9 as is_function, a$ as update, b0 as set_active_effect, b1 as enable_legacy_mode_flag } from "./lancer-DFseNsgi.mjs";
function lifecycle_outside_component(name) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
__name(lifecycle_outside_component, "lifecycle_outside_component");
function subscribe_to_store(store, run2, invalidate) {
  if (store == null)
    return run2(void 0), invalidate && invalidate(void 0), noop;
  const unsub = untrack(
    () => store.subscribe(
      run2,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
__name(subscribe_to_store, "subscribe_to_store");
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
__name(readable, "readable");
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value) && (value = new_value, stop)) {
      const run_queue = !subscriber_queue.length;
      for (const subscriber of subscribers)
        subscriber[1](), subscriber_queue.push(subscriber, value);
      if (run_queue) {
        for (let i = 0; i < subscriber_queue.length; i += 2)
          subscriber_queue[i][0](subscriber_queue[i + 1]);
        subscriber_queue.length = 0;
      }
    }
  }
  __name(set2, "set");
  function update2(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  __name(update2, "update");
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    return subscribers.add(subscriber), subscribers.size === 1 && (stop = start(set2, update2) || noop), run2(
      /** @type {T} */
      value
    ), () => {
      subscribers.delete(subscriber), subscribers.size === 0 && stop && (stop(), stop = null);
    };
  }
  return __name(subscribe, "subscribe"), { set: set2, update: update2, subscribe };
}
__name(writable, "writable");
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores), stores_array = single ? [stores] : stores;
  if (!stores_array.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const auto = fn.length < 2;
  return readable(initial_value, (set2, update2) => {
    let started = !1;
    const values = [];
    let pending = 0, cleanup = noop;
    const sync = /* @__PURE__ */ __name(() => {
      if (pending)
        return;
      cleanup();
      const result = fn(single ? values[0] : values, set2, update2);
      auto ? set2(result) : cleanup = typeof result == "function" ? result : noop;
    }, "sync"), unsubscribers = stores_array.map(
      (store, i) => subscribe_to_store(
        store,
        (value) => {
          values[i] = value, pending &= ~(1 << i), started && sync();
        },
        () => {
          pending |= 1 << i;
        }
      )
    );
    return started = !0, sync(), /* @__PURE__ */ __name(function() {
      run_all(unsubscribers), cleanup(), started = !1;
    }, "stop");
  });
}
__name(derived, "derived");
function get(store) {
  let value;
  return subscribe_to_store(store, (_) => value = _)(), value;
}
__name(get, "get");
let is_store_binding = !1, IS_UNMOUNTED = Symbol();
function store_get(store, store_name, stores) {
  const entry = stores[store_name] ?? (stores[store_name] = {
    store: null,
    source: mutable_source(void 0),
    unsubscribe: noop
  });
  if (entry.store !== store && !(IS_UNMOUNTED in stores))
    if (entry.unsubscribe(), entry.store = store ?? null, store == null)
      entry.source.v = void 0, entry.unsubscribe = noop;
    else {
      var is_synchronous_callback = !0;
      entry.unsubscribe = subscribe_to_store(store, (v) => {
        is_synchronous_callback ? entry.source.v = v : set(entry.source, v);
      }), is_synchronous_callback = !1;
    }
  return store && IS_UNMOUNTED in stores ? get(store) : get$1(entry.source);
}
__name(store_get, "store_get");
function setup_stores() {
  const stores = {};
  function cleanup() {
    teardown(() => {
      for (var store_name in stores)
        stores[store_name].unsubscribe();
      define_property(stores, IS_UNMOUNTED, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return __name(cleanup, "cleanup"), [stores, cleanup];
}
__name(setup_stores, "setup_stores");
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    return is_store_binding = !1, [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}
__name(capture_store_binding, "capture_store_binding");
var _a;
const policy = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((_a = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : _a.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: /* @__PURE__ */ __name((html) => html, "createHTML")
  })
);
function create_trusted_html(html) {
  return (
    /** @type {string} */
    (policy == null ? void 0 : policy.createHTML(html)) ?? html
  );
}
__name(create_trusted_html, "create_trusted_html");
function create_fragment_from_html(html) {
  var elem = create_element("template");
  return elem.innerHTML = create_trusted_html(html.replaceAll("<!>", "<!---->")), elem.content;
}
__name(create_fragment_from_html, "create_fragment_from_html");
function assign_nodes(start, end) {
  var effect = (
    /** @type {Effect} */
    active_effect
  );
  effect.nodes === null && (effect.nodes = { start, end, a: null, t: null });
}
__name(assign_nodes, "assign_nodes");
// @__NO_SIDE_EFFECTS__
function from_html(content, flags) {
  var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0, use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0, node, has_start = !content.startsWith("<!>");
  return () => {
    node === void 0 && (node = create_fragment_from_html(has_start ? content : "<!>" + content), is_fragment || (node = /** @type {TemplateNode} */
    get_first_child(node)));
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, !0) : node.cloneNode(!0)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      ), end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else
      assign_nodes(clone, clone);
    return clone;
  };
}
__name(from_html, "from_html");
function text(value = "") {
  {
    var t = create_text(value + "");
    return assign_nodes(t, t), t;
  }
}
__name(text, "text");
function comment() {
  var frag = document.createDocumentFragment(), start = document.createComment(""), anchor = create_text();
  return frag.append(start, anchor), assign_nodes(start, anchor), frag;
}
__name(comment, "comment");
function append(anchor, dom) {
  anchor !== null && anchor.before(
    /** @type {Node} */
    dom
  );
}
__name(append, "append");
var _batches, _onscreen, _offscreen, _outroing, _transition, _commit, _discard;
const _BranchManager = class _BranchManager {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(anchor, transition = !0) {
    /** @type {TemplateNode} */
    __publicField(this, "anchor");
    /** @type {Map<Batch, Key>} */
    __privateAdd(this, _batches, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    __privateAdd(this, _onscreen, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    __privateAdd(this, _offscreen, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    __privateAdd(this, _outroing, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    __privateAdd(this, _transition, !0);
    /**
     * @param {Batch} batch
     */
    __privateAdd(this, _commit, /* @__PURE__ */ __name((batch) => {
      if (__privateGet(this, _batches).has(batch)) {
        var key = (
          /** @type {Key} */
          __privateGet(this, _batches).get(batch)
        ), onscreen = __privateGet(this, _onscreen).get(key);
        if (onscreen)
          resume_effect(onscreen), __privateGet(this, _outroing).delete(key);
        else {
          var offscreen = __privateGet(this, _offscreen).get(key);
          offscreen && (__privateGet(this, _onscreen).set(key, offscreen.effect), __privateGet(this, _offscreen).delete(key), offscreen.fragment.lastChild.remove(), this.anchor.before(offscreen.fragment), onscreen = offscreen.effect);
        }
        for (const [b, k] of __privateGet(this, _batches)) {
          if (__privateGet(this, _batches).delete(b), b === batch)
            break;
          const offscreen2 = __privateGet(this, _offscreen).get(k);
          offscreen2 && (destroy_effect(offscreen2.effect), __privateGet(this, _offscreen).delete(k));
        }
        for (const [k, effect] of __privateGet(this, _onscreen)) {
          if (k === key || __privateGet(this, _outroing).has(k)) continue;
          const on_destroy = /* @__PURE__ */ __name(() => {
            if (Array.from(__privateGet(this, _batches).values()).includes(k)) {
              var fragment = document.createDocumentFragment();
              move_effect(effect, fragment), fragment.append(create_text()), __privateGet(this, _offscreen).set(k, { effect, fragment });
            } else
              destroy_effect(effect);
            __privateGet(this, _outroing).delete(k), __privateGet(this, _onscreen).delete(k);
          }, "on_destroy");
          __privateGet(this, _transition) || !onscreen ? (__privateGet(this, _outroing).add(k), pause_effect(effect, on_destroy, !1)) : on_destroy();
        }
      }
    }, "#commit"));
    /**
     * @param {Batch} batch
     */
    __privateAdd(this, _discard, /* @__PURE__ */ __name((batch) => {
      __privateGet(this, _batches).delete(batch);
      const keys = Array.from(__privateGet(this, _batches).values());
      for (const [k, branch2] of __privateGet(this, _offscreen))
        keys.includes(k) || (destroy_effect(branch2.effect), __privateGet(this, _offscreen).delete(k));
    }, "#discard"));
    this.anchor = anchor, __privateSet(this, _transition, transition);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(key, fn) {
    var batch = (
      /** @type {Batch} */
      current_batch
    ), defer = should_defer_append();
    if (fn && !__privateGet(this, _onscreen).has(key) && !__privateGet(this, _offscreen).has(key))
      if (defer) {
        var fragment = document.createDocumentFragment(), target = create_text();
        fragment.append(target), __privateGet(this, _offscreen).set(key, {
          effect: branch(() => fn(target)),
          fragment
        });
      } else
        __privateGet(this, _onscreen).set(
          key,
          branch(() => fn(this.anchor))
        );
    if (__privateGet(this, _batches).set(batch, key), defer) {
      for (const [k, effect] of __privateGet(this, _onscreen))
        k === key ? batch.unskip_effect(effect) : batch.skip_effect(effect);
      for (const [k, branch2] of __privateGet(this, _offscreen))
        k === key ? batch.unskip_effect(branch2.effect) : batch.skip_effect(branch2.effect);
      batch.oncommit(__privateGet(this, _commit)), batch.ondiscard(__privateGet(this, _discard));
    } else
      __privateGet(this, _commit).call(this, batch);
  }
};
_batches = new WeakMap(), _onscreen = new WeakMap(), _offscreen = new WeakMap(), _outroing = new WeakMap(), _transition = new WeakMap(), _commit = new WeakMap(), _discard = new WeakMap(), __name(_BranchManager, "BranchManager");
let BranchManager = _BranchManager;
function if_block(node, fn, elseif = !1) {
  var branches = new BranchManager(node), flags = elseif ? EFFECT_TRANSPARENT : 0;
  function update_branch(key, fn2) {
    branches.ensure(key, fn2);
  }
  __name(update_branch, "update_branch"), block(() => {
    var has_branch = !1;
    fn((fn2, key = 0) => {
      has_branch = !0, update_branch(key, fn2);
    }), has_branch || update_branch(-1, null);
  }, flags);
}
__name(if_block, "if_block");
function index(_, i) {
  return i;
}
__name(index, "index");
function pause_effects(state, to_destroy, controlled_anchor) {
  for (var transitions = [], length = to_destroy.length, group, remaining = to_destroy.length, i = 0; i < length; i++) {
    let effect = to_destroy[i];
    pause_effect(
      effect,
      () => {
        if (group) {
          if (group.pending.delete(effect), group.done.add(effect), group.pending.size === 0) {
            var groups = (
              /** @type {Set<EachOutroGroup>} */
              state.outrogroups
            );
            destroy_effects(state, array_from(group.done)), groups.delete(group), groups.size === 0 && (state.outrogroups = null);
          }
        } else
          remaining -= 1;
      },
      !1
    );
  }
  if (remaining === 0) {
    var fast_path = transitions.length === 0 && controlled_anchor !== null;
    if (fast_path) {
      var anchor = (
        /** @type {Element} */
        controlled_anchor
      ), parent_node = (
        /** @type {Element} */
        anchor.parentNode
      );
      clear_text_content(parent_node), parent_node.append(anchor), state.items.clear();
    }
    destroy_effects(state, to_destroy, !fast_path);
  } else
    group = {
      pending: new Set(to_destroy),
      done: /* @__PURE__ */ new Set()
    }, (state.outrogroups ?? (state.outrogroups = /* @__PURE__ */ new Set())).add(group);
}
__name(pause_effects, "pause_effects");
function destroy_effects(state, to_destroy, remove_dom = !0) {
  var preserved_effects;
  if (state.pending.size > 0) {
    preserved_effects = /* @__PURE__ */ new Set();
    for (const keys of state.pending.values())
      for (const key of keys)
        preserved_effects.add(
          /** @type {EachItem} */
          state.items.get(key).e
        );
  }
  for (var i = 0; i < to_destroy.length; i++) {
    var e = to_destroy[i];
    if (preserved_effects != null && preserved_effects.has(e)) {
      e.f |= EFFECT_OFFSCREEN;
      const fragment = document.createDocumentFragment();
      move_effect(e, fragment);
    } else
      destroy_effect(to_destroy[i], remove_dom);
  }
}
__name(destroy_effects, "destroy_effects");
var offscreen_anchor;
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node, items = /* @__PURE__ */ new Map(), is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = parent_node.appendChild(create_text());
  }
  var fallback = null, each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  }), array, pending = /* @__PURE__ */ new Map(), first_run = !0;
  function commit(batch) {
    (state.effect.f & DESTROYED) === 0 && (state.pending.delete(batch), state.fallback = fallback, reconcile(state, array, anchor, flags, get_key), fallback !== null && (array.length === 0 ? (fallback.f & EFFECT_OFFSCREEN) === 0 ? resume_effect(fallback) : (fallback.f ^= EFFECT_OFFSCREEN, move(fallback, null, anchor)) : pause_effect(fallback, () => {
      fallback = null;
    })));
  }
  __name(commit, "commit");
  function discard(batch) {
    state.pending.delete(batch);
  }
  __name(discard, "discard");
  var effect = block(() => {
    array = /** @type {V[]} */
    get$1(each_array);
    for (var length = array.length, keys = /* @__PURE__ */ new Set(), batch = (
      /** @type {Batch} */
      current_batch
    ), defer = should_defer_append(), index2 = 0; index2 < length; index2 += 1) {
      var value = array[index2], key = get_key(value, index2), item = first_run ? null : items.get(key);
      item ? (item.v && internal_set(item.v, value), item.i && internal_set(item.i, index2), defer && batch.unskip_effect(item.e)) : (item = create_item(
        items,
        first_run ? anchor : offscreen_anchor ?? (offscreen_anchor = create_text()),
        value,
        key,
        index2,
        render_fn,
        flags,
        get_collection
      ), first_run || (item.e.f |= EFFECT_OFFSCREEN), items.set(key, item)), keys.add(key);
    }
    if (length === 0 && fallback_fn && !fallback && (first_run ? fallback = branch(() => fallback_fn(anchor)) : (fallback = branch(() => fallback_fn(offscreen_anchor ?? (offscreen_anchor = create_text()))), fallback.f |= EFFECT_OFFSCREEN)), length > keys.size && each_key_duplicate(), !first_run)
      if (pending.set(batch, keys), defer) {
        for (const [key2, item2] of items)
          keys.has(key2) || batch.skip_effect(item2.e);
        batch.oncommit(commit), batch.ondiscard(discard);
      } else
        commit(batch);
    get$1(each_array);
  }), state = { effect, items, pending, outrogroups: null, fallback };
  first_run = !1;
}
__name(each, "each");
function skip_to_branch(effect) {
  for (; effect !== null && (effect.f & BRANCH_EFFECT) === 0; )
    effect = effect.next;
  return effect;
}
__name(skip_to_branch, "skip_to_branch");
function reconcile(state, array, anchor, flags, get_key) {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i;
  var is_animated = (flags & EACH_IS_ANIMATED) !== 0, length = array.length, items = state.items, current = skip_to_branch(state.effect.first), seen, prev = null, to_animate, matched = [], stashed = [], value, key, effect, i;
  if (is_animated)
    for (i = 0; i < length; i += 1)
      value = array[i], key = get_key(value, i), effect = /** @type {EachItem} */
      items.get(key).e, (effect.f & EFFECT_OFFSCREEN) === 0 && ((_b = (_a3 = effect.nodes) == null ? void 0 : _a3.a) == null || _b.measure(), (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(effect));
  for (i = 0; i < length; i += 1) {
    if (value = array[i], key = get_key(value, i), effect = /** @type {EachItem} */
    items.get(key).e, state.outrogroups !== null)
      for (const group of state.outrogroups)
        group.pending.delete(effect), group.done.delete(effect);
    if ((effect.f & INERT) !== 0 && (resume_effect(effect), is_animated && ((_d = (_c = effect.nodes) == null ? void 0 : _c.a) == null || _d.unfix(), (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(effect))), (effect.f & EFFECT_OFFSCREEN) !== 0)
      if (effect.f ^= EFFECT_OFFSCREEN, effect === current)
        move(effect, null, anchor);
      else {
        var next = prev ? prev.next : current;
        effect === state.effect.last && (state.effect.last = effect.prev), effect.prev && (effect.prev.next = effect.next), effect.next && (effect.next.prev = effect.prev), link(state, prev, effect), link(state, effect, next), move(effect, next, anchor), prev = effect, matched = [], stashed = [], current = skip_to_branch(prev.next);
        continue;
      }
    if (effect !== current) {
      if (seen !== void 0 && seen.has(effect)) {
        if (matched.length < stashed.length) {
          var start = stashed[0], j;
          prev = start.prev;
          var a = matched[0], b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1)
            move(matched[j], start, anchor);
          for (j = 0; j < stashed.length; j += 1)
            seen.delete(stashed[j]);
          link(state, a.prev, b.next), link(state, prev, a), link(state, b, start), current = start, prev = b, i -= 1, matched = [], stashed = [];
        } else
          seen.delete(effect), move(effect, current, anchor), link(state, effect.prev, effect.next), link(state, effect, prev === null ? state.effect.first : prev.next), link(state, prev, effect), prev = effect;
        continue;
      }
      for (matched = [], stashed = []; current !== null && current !== effect; )
        (seen ?? (seen = /* @__PURE__ */ new Set())).add(current), stashed.push(current), current = skip_to_branch(current.next);
      if (current === null)
        continue;
    }
    (effect.f & EFFECT_OFFSCREEN) === 0 && matched.push(effect), prev = effect, current = skip_to_branch(effect.next);
  }
  if (state.outrogroups !== null) {
    for (const group of state.outrogroups)
      group.pending.size === 0 && (destroy_effects(state, array_from(group.done)), (_e = state.outrogroups) == null || _e.delete(group));
    state.outrogroups.size === 0 && (state.outrogroups = null);
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = [];
    if (seen !== void 0)
      for (effect of seen)
        (effect.f & INERT) === 0 && to_destroy.push(effect);
    for (; current !== null; )
      (current.f & INERT) === 0 && current !== state.fallback && to_destroy.push(current), current = skip_to_branch(current.next);
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1)
          (_g = (_f = to_destroy[i].nodes) == null ? void 0 : _f.a) == null || _g.measure();
        for (i = 0; i < destroy_length; i += 1)
          (_i = (_h = to_destroy[i].nodes) == null ? void 0 : _h.a) == null || _i.fix();
      }
      pause_effects(state, to_destroy, controlled_anchor);
    }
  }
  is_animated && queue_micro_task(() => {
    var _a4, _b2;
    if (to_animate !== void 0)
      for (effect of to_animate)
        (_b2 = (_a4 = effect.nodes) == null ? void 0 : _a4.a) == null || _b2.apply();
  });
}
__name(reconcile, "reconcile");
function create_item(items, anchor, value, key, index2, render_fn, flags, get_collection) {
  var v = (flags & EACH_ITEM_REACTIVE) !== 0 ? (flags & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, !1, !1) : source(value) : null, i = (flags & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
  return {
    v,
    i,
    e: branch(() => (render_fn(anchor, v ?? value, i ?? index2, get_collection), () => {
      items.delete(key);
    }))
  };
}
__name(create_item, "create_item");
function move(effect, next, anchor) {
  if (effect.nodes)
    for (var node = effect.nodes.start, end = effect.nodes.end, dest = next && (next.f & EFFECT_OFFSCREEN) === 0 ? (
      /** @type {EffectNodes} */
      next.nodes.start
    ) : anchor; node !== null; ) {
      var next_node = (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      if (dest.before(node), node === end)
        return;
      node = next_node;
    }
}
__name(move, "move");
function link(state, prev, next) {
  prev === null ? state.effect.first = next : prev.next = next, next === null ? state.effect.last = prev : next.prev = prev;
}
__name(link, "link");
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
__name(r, "r");
function clsx$1() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
__name(clsx$1, "clsx$1");
function clsx(value) {
  return typeof value == "object" ? clsx$1(value) : value ?? "";
}
__name(clsx, "clsx");
const whitespace = [...` 	
\r\f \v\uFEFF`];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash && (classname = classname ? classname + " " + hash : hash), directives) {
    for (var key of Object.keys(directives))
      if (directives[key])
        classname = classname ? classname + " " + key : key;
      else if (classname.length)
        for (var len = key.length, a = 0; (a = classname.indexOf(key, a)) >= 0; ) {
          var b = a + len;
          (a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b])) ? classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1) : a = b;
        }
  }
  return classname === "" ? null : classname;
}
__name(to_class, "to_class");
function append_styles(styles, important = !1) {
  var separator = important ? " !important;" : ";", css = "";
  for (var key of Object.keys(styles)) {
    var value = styles[key];
    value != null && value !== "" && (css += " " + key + ": " + value + separator);
  }
  return css;
}
__name(append_styles, "append_styles");
function to_css_name(name) {
  return name[0] !== "-" || name[1] !== "-" ? name.toLowerCase() : name;
}
__name(to_css_name, "to_css_name");
function to_style(value, styles) {
  if (styles) {
    var new_style = "", normal_styles, important_styles;
    if (Array.isArray(styles) ? (normal_styles = styles[0], important_styles = styles[1]) : normal_styles = styles, value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = !1, in_apo = 0, in_comment = !1, reserved_names = [];
      normal_styles && reserved_names.push(...Object.keys(normal_styles).map(to_css_name)), important_styles && reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      var start_index = 0, name_index = -1;
      const len = value.length;
      for (var i = 0; i < len; i++) {
        var c = value[i];
        if (in_comment ? c === "/" && value[i - 1] === "*" && (in_comment = !1) : in_str ? in_str === c && (in_str = !1) : c === "/" && value[i + 1] === "*" ? in_comment = !0 : c === '"' || c === "'" ? in_str = c : c === "(" ? in_apo++ : c === ")" && in_apo--, !in_comment && in_str === !1 && in_apo === 0) {
          if (c === ":" && name_index === -1)
            name_index = i;
          else if (c === ";" || i === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                c !== ";" && i++;
                var property = value.substring(start_index, i).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i + 1, name_index = -1;
          }
        }
      }
    }
    return normal_styles && (new_style += append_styles(normal_styles)), important_styles && (new_style += append_styles(important_styles, !0)), new_style = new_style.trim(), new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}
__name(to_style, "to_style");
function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
  var prev = dom.__className;
  if (prev !== value || prev === void 0) {
    var next_class_name = to_class(value, hash, next_classes);
    next_class_name == null ? dom.removeAttribute("class") : dom.className = next_class_name, dom.__className = value;
  } else if (next_classes && prev_classes !== next_classes)
    for (var key in next_classes) {
      var is_present = !!next_classes[key];
      (prev_classes == null || is_present !== !!prev_classes[key]) && dom.classList.toggle(key, is_present);
    }
  return next_classes;
}
__name(set_class, "set_class");
function init(immutable = !1) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  ), callbacks = context.l.u;
  if (!callbacks) return;
  let props = /* @__PURE__ */ __name(() => deep_read_state(context.s), "props");
  if (immutable) {
    let version = 0, prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = derived$1(() => {
      let changed = !1;
      const props2 = context.s;
      for (const key in props2)
        props2[key] !== prev[key] && (prev[key] = props2[key], changed = !0);
      return changed && version++, version;
    });
    props = /* @__PURE__ */ __name(() => get$1(d), "props");
  }
  callbacks.b.length && user_pre_effect(() => {
    observe_all(context, props), run_all(callbacks.b);
  }), user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns)
        typeof fn == "function" && fn();
    };
  }), callbacks.a.length && user_effect(() => {
    observe_all(context, props), run_all(callbacks.a);
  });
}
__name(init, "init");
function observe_all(context, props) {
  if (context.l.s)
    for (const signal of context.l.s) get$1(signal);
  props();
}
__name(observe_all, "observe_all");
const legacy_rest_props_handler = {
  get(target, key) {
    if (!target.exclude.includes(key))
      return get$1(target.version), key in target.special ? target.special[key]() : target.props[key];
  },
  set(target, key, value) {
    if (!(key in target.special)) {
      var previous_effect = active_effect;
      try {
        set_active_effect(target.parent_effect), target.special[key] = prop(
          {
            get [key]() {
              return target.props[key];
            }
          },
          /** @type {string} */
          key,
          PROPS_IS_UPDATED
        );
      } finally {
        set_active_effect(previous_effect);
      }
    }
    return target.special[key](value), update(target.version), !0;
  },
  getOwnPropertyDescriptor(target, key) {
    if (!target.exclude.includes(key) && key in target.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: target.props[key]
      };
  },
  deleteProperty(target, key) {
    return target.exclude.includes(key) || (target.exclude.push(key), update(target.version)), !0;
  },
  has(target, key) {
    return target.exclude.includes(key) ? !1 : key in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key) => !target.exclude.includes(key));
  }
};
function legacy_rest_props(props, exclude) {
  return new Proxy(
    {
      props,
      exclude,
      special: {},
      version: source(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        active_effect
      )
    },
    legacy_rest_props_handler
  );
}
__name(legacy_rest_props, "legacy_rest_props");
const spread_props_handler = {
  get(target, key) {
    let i = target.props.length;
    for (; i--; ) {
      let p = target.props[i];
      if (is_function(p) && (p = p()), typeof p == "object" && p !== null && key in p) return p[key];
    }
  },
  set(target, key, value) {
    let i = target.props.length;
    for (; i--; ) {
      let p = target.props[i];
      is_function(p) && (p = p());
      const desc = get_descriptor(p, key);
      if (desc && desc.set)
        return desc.set(value), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(target, key) {
    let i = target.props.length;
    for (; i--; ) {
      let p = target.props[i];
      if (is_function(p) && (p = p()), typeof p == "object" && p !== null && key in p) {
        const descriptor = get_descriptor(p, key);
        return descriptor && !descriptor.configurable && (descriptor.configurable = !0), descriptor;
      }
    }
  },
  has(target, key) {
    if (key === STATE_SYMBOL || key === LEGACY_PROPS) return !1;
    for (let p of target.props)
      if (is_function(p) && (p = p()), p != null && key in p) return !0;
    return !1;
  },
  ownKeys(target) {
    const keys = [];
    for (let p of target.props)
      if (is_function(p) && (p = p()), !!p) {
        for (const key in p)
          keys.includes(key) || keys.push(key);
        for (const key of Object.getOwnPropertySymbols(p))
          keys.includes(key) || keys.push(key);
      }
    return keys;
  }
};
function spread_props(...props) {
  return new Proxy({ props }, spread_props_handler);
}
__name(spread_props, "spread_props");
function prop(props, key, flags, fallback) {
  var _a3;
  var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0, bindable = (flags & PROPS_IS_BINDABLE) !== 0, lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0, fallback_value = (
    /** @type {V} */
    fallback
  ), fallback_dirty = !0, get_fallback = /* @__PURE__ */ __name(() => (fallback_dirty && (fallback_dirty = !1, fallback_value = lazy ? untrack(
    /** @type {() => V} */
    fallback
  ) : (
    /** @type {V} */
    fallback
  )), fallback_value), "get_fallback");
  let setter;
  if (bindable) {
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    setter = ((_a3 = get_descriptor(props, key)) == null ? void 0 : _a3.set) ?? (is_entry_props && key in props ? (v) => props[key] = v : void 0);
  }
  var initial_value, is_store_sub = !1;
  bindable ? [initial_value, is_store_sub] = capture_store_binding(() => (
    /** @type {V} */
    props[key]
  )) : initial_value = /** @type {V} */
  props[key], initial_value === void 0 && fallback !== void 0 && (initial_value = get_fallback(), setter && (runes && props_invalid_value(), setter(initial_value)));
  var getter;
  if (runes ? getter = /* @__PURE__ */ __name(() => {
    var value = (
      /** @type {V} */
      props[key]
    );
    return value === void 0 ? get_fallback() : (fallback_dirty = !0, value);
  }, "getter") : getter = /* @__PURE__ */ __name(() => {
    var value = (
      /** @type {V} */
      props[key]
    );
    return value !== void 0 && (fallback_value = /** @type {V} */
    void 0), value === void 0 ? fallback_value : value;
  }, "getter"), runes && (flags & PROPS_IS_UPDATED) === 0)
    return getter;
  if (setter) {
    var legacy_parent = props.$$legacy;
    return (
      /** @type {() => V} */
      (function(value, mutation) {
        return arguments.length > 0 ? ((!runes || !mutation || legacy_parent || is_store_sub) && setter(mutation ? getter() : value), value) : getter();
      })
    );
  }
  var overridden = !1, d = ((flags & PROPS_IS_IMMUTABLE) !== 0 ? derived$1 : derived_safe_equal)(() => (overridden = !1, getter()));
  bindable && get$1(d);
  var parent_effect = (
    /** @type {Effect} */
    active_effect
  );
  return (
    /** @type {() => V} */
    (function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get$1(d) : runes && bindable ? proxy(value) : value;
        return set(d, new_value), overridden = !0, fallback_value !== void 0 && (fallback_value = new_value), value;
      }
      return is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0 ? d.v : get$1(d);
    })
  );
}
__name(prop, "prop");
function onMount(fn) {
  component_context === null && lifecycle_outside_component(), legacy_mode_flag && component_context.l !== null ? init_update_callbacks(component_context).m.push(fn) : user_effect(() => {
    const cleanup = untrack(fn);
    if (typeof cleanup == "function") return (
      /** @type {() => void} */
      cleanup
    );
  });
}
__name(onMount, "onMount");
function create_custom_event(type, detail, { bubbles = !1, cancelable = !1 } = {}) {
  return new CustomEvent(type, { detail, bubbles, cancelable });
}
__name(create_custom_event, "create_custom_event");
function createEventDispatcher() {
  const active_component_context = component_context;
  return active_component_context === null && lifecycle_outside_component(), (type, detail, options) => {
    var _a3;
    const events = (
      /** @type {Record<string, Function | Function[]>} */
      (_a3 = active_component_context.s.$$events) == null ? void 0 : _a3[
        /** @type {string} */
        type
      ]
    );
    if (events) {
      const callbacks = is_array(events) ? events.slice() : [events], event = create_custom_event(
        /** @type {string} */
        type,
        detail,
        options
      );
      for (const fn of callbacks)
        fn.call(active_component_context.x, event);
      return !event.defaultPrevented;
    }
    return !0;
  };
}
__name(createEventDispatcher, "createEventDispatcher");
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ?? (l.u = { a: [], b: [], m: [] });
}
__name(init_update_callbacks, "init_update_callbacks");
const PUBLIC_VERSION = "5";
var _a2;
typeof window < "u" && ((_a2 = window.__svelte ?? (window.__svelte = {})).v ?? (_a2.v = /* @__PURE__ */ new Set())).add(PUBLIC_VERSION);
enable_legacy_mode_flag();
export {
  BranchManager as B,
  assign_nodes as a,
  append as b,
  createEventDispatcher as c,
  if_block as d,
  comment as e,
  from_html as f,
  each as g,
  index as h,
  init as i,
  derived as j,
  setup_stores as k,
  legacy_rest_props as l,
  store_get as m,
  spread_props as n,
  onMount as o,
  prop as p,
  clsx as q,
  readable as r,
  set_class as s,
  text as t,
  to_style as u
};
//# sourceMappingURL=legacy-BcWV7VZG.mjs.map
