var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { I as teardown, J as get_descriptor } from "./lancer-Ce9E8FmH.mjs";
function bind_prop(props, prop, value) {
  var desc = get_descriptor(props, prop);
  desc && desc.set && (props[prop] = value, teardown(() => {
    props[prop] = null;
  }));
}
__name(bind_prop, "bind_prop");
export {
  bind_prop as b
};
//# sourceMappingURL=props-BA0icsh7.mjs.map
