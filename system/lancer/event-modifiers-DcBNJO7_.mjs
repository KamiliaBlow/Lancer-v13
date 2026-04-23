var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { S as effect, u as untrack } from "./lancer-DPU4U_ri.mjs";
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value == null ? void 0 : get_value()) || {});
    if (payload != null && payload.destroy)
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
  });
}
__name(action, "action");
function preventDefault(fn) {
  return function(...args) {
    var event = (
      /** @type {Event} */
      args[0]
    );
    return event.preventDefault(), fn == null ? void 0 : fn.apply(this, args);
  };
}
__name(preventDefault, "preventDefault");
export {
  action as a,
  preventDefault as p
};
//# sourceMappingURL=event-modifiers-DcBNJO7_.mjs.map
