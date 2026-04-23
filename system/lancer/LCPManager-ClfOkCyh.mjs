var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
import { a as assign_nodes, b as append, f as from_html, c as createEventDispatcher, p as prop, i as init, d as if_block, s as set_class, e as comment, l as legacy_rest_props, o as onMount, g as each, h as index } from "./legacy-BBc7NziO.mjs";
import { t as template_effect, a as active_effect, b as get_first_child, r as remove_effect_dom, d as create_element, N as NAMESPACE_SVG, e as NAMESPACE_MATHML, s as sibling, f as child, p as push, l as legacy_pre_effect, h as get, i as set, j as deep_read_state, k as legacy_pre_effect_reset, m as set_text, n as pop, o as mutable_source, u as untrack, q as first_child, v as event, w as parseContentPack, x as generateLcpSummary, y as generateMultiLcpSummary, z as mutate, L as LCPIndex, A as LANCER, B as getOfficialData, C as mergeOfficialDataAndLcpIndex, D as flushSync, E as clearCompendiumData, F as importCP } from "./lancer-CwV1UJ7j.mjs";
import { t as transition, f as fade, s as set_attribute, a as set_style, b as bind_files, c as bind_checked } from "./index-DZC0UgYO.mjs";
import { b as bind_prop } from "./props-CK9VzTEK.mjs";
function html(node, get_value, is_controlled = !1, svg = !1, mathml = !1, skip_warning = !1) {
  var anchor = node, value = "";
  if (is_controlled)
    var parent_node = (
      /** @type {Element} */
      node
    );
  template_effect(() => {
    var effect = (
      /** @type {Effect} */
      active_effect
    );
    if (value !== (value = get_value() ?? "")) {
      if (is_controlled) {
        effect.nodes = null, parent_node.innerHTML = /** @type {string} */
        value, value !== "" && assign_nodes(
          /** @type {TemplateNode} */
          get_first_child(parent_node),
          /** @type {TemplateNode} */
          parent_node.lastChild
        );
        return;
      }
      if (effect.nodes !== null && (remove_effect_dom(
        effect.nodes.start,
        /** @type {TemplateNode} */
        effect.nodes.end
      ), effect.nodes = null), value !== "") {
        var ns = svg ? NAMESPACE_SVG : mathml ? NAMESPACE_MATHML : void 0, wrapper = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          create_element(svg ? "svg" : mathml ? "math" : "template", ns)
        );
        wrapper.innerHTML = /** @type {any} */
        value;
        var node2 = svg || mathml ? wrapper : (
          /** @type {HTMLTemplateElement} */
          wrapper.content
        );
        if (assign_nodes(
          /** @type {TemplateNode} */
          get_first_child(node2),
          /** @type {TemplateNode} */
          node2.lastChild
        ), svg || mathml)
          for (; get_first_child(node2); )
            anchor.before(
              /** @type {TemplateNode} */
              get_first_child(node2)
            );
        else
          anchor.before(node2);
      }
    }
  });
}
__name(html, "html");
function slot(anchor, $$props, name, slot_props, fallback_fn) {
  var _a;
  var slot_fn = (_a = $$props.$$slots) == null ? void 0 : _a[name], is_interop = !1;
  slot_fn === !0 && (slot_fn = $$props.children, is_interop = !0), slot_fn === void 0 || slot_fn(anchor, is_interop ? () => slot_props : slot_props);
}
__name(slot, "slot");
var root$4 = from_html('<div class="spinner__container svelte-80lzm7"><div class="spinner__spinner svelte-80lzm7"></div> <!></div>');
function Spinner($$anchor, $$props) {
  var div = root$4(), node = sibling(child(div), 2);
  slot(node, $$props, "default", {}), append($$anchor, div);
}
__name(Spinner, "Spinner");
var root_2$2 = from_html('<a style="margin: 5px"> </a>'), root_3$2 = from_html('<div style="margin: 10px"> </div>'), root_4$2 = from_html("<img/>"), root_5$1 = from_html('<li><span class="lcp-manifest-badge"> </span> pilot skills</li>'), root_6$1 = from_html('<li><span class="lcp-manifest-badge"> </span> talents</li>'), root_7$1 = from_html('<li><span class="lcp-manifest-badge"> </span> bonds</li>'), root_8$1 = from_html('<li><span class="lcp-manifest-badge"> </span> reserves</li>'), root_9 = from_html('<li><span class="lcp-manifest-badge"> </span> pilot gear</li>'), root_10 = from_html('<li><span class="lcp-manifest-badge"> </span> frames</li>'), root_11 = from_html('<li><span class="lcp-manifest-badge"> </span> mech systems</li>'), root_12 = from_html('<li><span class="lcp-manifest-badge"> </span> mech weapons</li>'), root_13 = from_html('<li><span class="lcp-manifest-badge"> </span> weapon mods</li>'), root_14 = from_html('<li><span class="lcp-manifest-badge"> </span> NPC classes</li>'), root_15 = from_html('<li><span class="lcp-manifest-badge"> </span> NPC templates</li>'), root_16 = from_html('<li><span class="lcp-manifest-badge"> </span> NPC features</li>'), root_18 = from_html('<button type="button" class="lcp-import" title="Import LCP" tabindex="-1"><i class="cci cci-content-manager i--4"></i> Import LCP</button>'), root_1$2 = from_html('<div class="lcp-details__content svelte-tnc0x4"><!> <div class="lcp-description minor desc-text svelte-tnc0x4"><div><!> <span>Contents:</span> <ul class="svelte-tnc0x4"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></ul> <!></div></div> <!></div>'), root$3 = from_html('<div class="lcp-details card clipped svelte-tnc0x4"><div class="lancer-header lancer-primary major"><span> </span></div> <!></div>');
function LCPDetails($$anchor, $$props) {
  push($$props, !1);
  const title = mutable_source(), dispatch = createEventDispatcher();
  let contentSummary = prop($$props, "contentSummary", 8, null), showImportButton = prop($$props, "showImportButton", 8), disabled = prop($$props, "disabled", 8, !1), oldContentSummary = mutable_source(null), fadeDirection = mutable_source("fade-in");
  legacy_pre_effect(
    () => (deep_read_state(contentSummary()), get(oldContentSummary)),
    () => {
      contentSummary() !== get(oldContentSummary) && (set(fadeDirection, "fade-out"), setTimeout(
        () => {
          set(oldContentSummary, contentSummary()), set(fadeDirection, "fade-in");
        },
        100
      ));
    }
  ), legacy_pre_effect(() => get(oldContentSummary), () => {
    set(title, get(oldContentSummary) ? `${get(oldContentSummary).name}${get(oldContentSummary).version ? ` v${get(oldContentSummary).version}` : ""}` : "No LCP Selected");
  }), legacy_pre_effect_reset(), init();
  var div = root$3(), div_1 = child(div), span = child(div_1), text = child(span), node = sibling(div_1, 2);
  {
    var consequent_16 = /* @__PURE__ */ __name(($$anchor2) => {
      var div_2 = root_1$2(), node_1 = child(div_2);
      {
        var consequent = /* @__PURE__ */ __name(($$anchor3) => {
          var a = root_2$2(), text_1 = child(a);
          template_effect(() => {
            set_attribute(a, "href", (get(oldContentSummary), untrack(() => get(oldContentSummary).website))), set_class(a, 1, `medium transition ${get(fadeDirection)}`, "svelte-tnc0x4"), set_text(text_1, `by ${get(oldContentSummary), untrack(() => get(oldContentSummary).author) ?? ""}`);
          }), append($$anchor3, a);
        }, "consequent"), alternate = /* @__PURE__ */ __name(($$anchor3) => {
          var div_3 = root_3$2(), text_2 = child(div_3);
          template_effect(() => {
            set_class(div_3, 1, `medium transition ${get(fadeDirection)}`, "svelte-tnc0x4"), set_text(text_2, `by ${get(oldContentSummary), untrack(() => get(oldContentSummary).author) ?? ""}`);
          }), append($$anchor3, div_3);
        }, "alternate");
        if_block(node_1, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).website) ? $$render(consequent) : $$render(alternate, -1);
        });
      }
      var div_4 = sibling(node_1, 2), div_5 = child(div_4), node_2 = child(div_5);
      {
        var consequent_1 = /* @__PURE__ */ __name(($$anchor3) => {
          var img = root_4$2();
          template_effect(() => {
            set_class(img, 1, `manifest-image transition ${get(fadeDirection)}`, "svelte-tnc0x4"), set_attribute(img, "src", (get(oldContentSummary), untrack(() => get(oldContentSummary).image_url))), set_attribute(img, "title", (get(oldContentSummary), untrack(() => get(oldContentSummary).name))), set_attribute(img, "alt", (get(oldContentSummary), untrack(() => get(oldContentSummary).name)));
          }), append($$anchor3, img);
        }, "consequent_1");
        if_block(node_2, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).image_url) && $$render(consequent_1);
        });
      }
      var ul = sibling(node_2, 4), node_3 = child(ul);
      {
        var consequent_2 = /* @__PURE__ */ __name(($$anchor3) => {
          var li = root_5$1(), span_1 = child(li), text_3 = child(span_1);
          template_effect(() => set_text(text_3, (get(oldContentSummary), untrack(() => get(oldContentSummary).skills)))), append($$anchor3, li);
        }, "consequent_2");
        if_block(node_3, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).skills) && $$render(consequent_2);
        });
      }
      var node_4 = sibling(node_3, 2);
      {
        var consequent_3 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_1 = root_6$1(), span_2 = child(li_1), text_4 = child(span_2);
          template_effect(() => set_text(text_4, (get(oldContentSummary), untrack(() => get(oldContentSummary).talents)))), append($$anchor3, li_1);
        }, "consequent_3");
        if_block(node_4, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).talents) && $$render(consequent_3);
        });
      }
      var node_5 = sibling(node_4, 2);
      {
        var consequent_4 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_2 = root_7$1(), span_3 = child(li_2), text_5 = child(span_3);
          template_effect(() => set_text(text_5, (get(oldContentSummary), untrack(() => get(oldContentSummary).bonds)))), append($$anchor3, li_2);
        }, "consequent_4");
        if_block(node_5, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).bonds) && $$render(consequent_4);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_5 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_3 = root_8$1(), span_4 = child(li_3), text_6 = child(span_4);
          template_effect(() => set_text(text_6, (get(oldContentSummary), untrack(() => get(oldContentSummary).reserves)))), append($$anchor3, li_3);
        }, "consequent_5");
        if_block(node_6, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).reserves) && $$render(consequent_5);
        });
      }
      var node_7 = sibling(node_6, 2);
      {
        var consequent_6 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_4 = root_9(), span_5 = child(li_4), text_7 = child(span_5);
          template_effect(() => set_text(text_7, (get(oldContentSummary), untrack(() => get(oldContentSummary).gear)))), append($$anchor3, li_4);
        }, "consequent_6");
        if_block(node_7, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).gear) && $$render(consequent_6);
        });
      }
      var node_8 = sibling(node_7, 2);
      {
        var consequent_7 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_5 = root_10(), span_6 = child(li_5), text_8 = child(span_6);
          template_effect(() => set_text(text_8, (get(oldContentSummary), untrack(() => get(oldContentSummary).frames)))), append($$anchor3, li_5);
        }, "consequent_7");
        if_block(node_8, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).frames) && $$render(consequent_7);
        });
      }
      var node_9 = sibling(node_8, 2);
      {
        var consequent_8 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_6 = root_11(), span_7 = child(li_6), text_9 = child(span_7);
          template_effect(() => set_text(text_9, (get(oldContentSummary), untrack(() => get(oldContentSummary).systems)))), append($$anchor3, li_6);
        }, "consequent_8");
        if_block(node_9, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).systems) && $$render(consequent_8);
        });
      }
      var node_10 = sibling(node_9, 2);
      {
        var consequent_9 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_7 = root_12(), span_8 = child(li_7), text_10 = child(span_8);
          template_effect(() => set_text(text_10, (get(oldContentSummary), untrack(() => get(oldContentSummary).weapons)))), append($$anchor3, li_7);
        }, "consequent_9");
        if_block(node_10, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).weapons) && $$render(consequent_9);
        });
      }
      var node_11 = sibling(node_10, 2);
      {
        var consequent_10 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_8 = root_13(), span_9 = child(li_8), text_11 = child(span_9);
          template_effect(() => set_text(text_11, (get(oldContentSummary), untrack(() => get(oldContentSummary).mods)))), append($$anchor3, li_8);
        }, "consequent_10");
        if_block(node_11, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).mods) && $$render(consequent_10);
        });
      }
      var node_12 = sibling(node_11, 2);
      {
        var consequent_11 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_9 = root_14(), span_10 = child(li_9), text_12 = child(span_10);
          template_effect(() => set_text(text_12, (get(oldContentSummary), untrack(() => get(oldContentSummary).npc_classes)))), append($$anchor3, li_9);
        }, "consequent_11");
        if_block(node_12, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).npc_classes) && $$render(consequent_11);
        });
      }
      var node_13 = sibling(node_12, 2);
      {
        var consequent_12 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_10 = root_15(), span_11 = child(li_10), text_13 = child(span_11);
          template_effect(() => set_text(text_13, (get(oldContentSummary), untrack(() => get(oldContentSummary).npc_templates)))), append($$anchor3, li_10);
        }, "consequent_12");
        if_block(node_13, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).npc_templates) && $$render(consequent_12);
        });
      }
      var node_14 = sibling(node_13, 2);
      {
        var consequent_13 = /* @__PURE__ */ __name(($$anchor3) => {
          var li_11 = root_16(), span_12 = child(li_11), text_14 = child(span_12);
          template_effect(() => set_text(text_14, (get(oldContentSummary), untrack(() => get(oldContentSummary).npc_features)))), append($$anchor3, li_11);
        }, "consequent_13");
        if_block(node_14, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).npc_features) && $$render(consequent_13);
        });
      }
      var node_15 = sibling(ul, 2);
      {
        var consequent_14 = /* @__PURE__ */ __name(($$anchor3) => {
          var fragment = comment(), node_16 = first_child(fragment);
          html(node_16, () => (get(oldContentSummary), untrack(() => get(oldContentSummary).description))), append($$anchor3, fragment);
        }, "consequent_14");
        if_block(node_15, ($$render) => {
          get(oldContentSummary), untrack(() => get(oldContentSummary).description) && $$render(consequent_14);
        });
      }
      var node_17 = sibling(div_4, 2);
      {
        var consequent_15 = /* @__PURE__ */ __name(($$anchor3) => {
          var button = root_18();
          template_effect(() => button.disabled = disabled()), transition(7, button, () => fade), event("click", button, () => dispatch("importLcp")), append($$anchor3, button);
        }, "consequent_15");
        if_block(node_17, ($$render) => {
          deep_read_state(showImportButton()), get(oldContentSummary), untrack(() => !showImportButton() && !get(oldContentSummary).aggregate) && $$render(consequent_15);
        });
      }
      template_effect(() => set_class(div_5, 1, `transition ${get(fadeDirection)}`, "svelte-tnc0x4")), transition(7, div_2, () => fade), append($$anchor2, div_2);
    }, "consequent_16");
    if_block(node, ($$render) => {
      get(oldContentSummary) && $$render(consequent_16);
    });
  }
  template_effect(() => {
    set_class(span, 1, `transition ${get(fadeDirection)}`, "svelte-tnc0x4"), set_text(text, get(title));
  }), append($$anchor, div), pop();
}
__name(LCPDetails, "LCPDetails");
var root$2 = from_html('<div><div class="lancer-header lancer-primary major">Import From File</div> <div class="file-select-container svelte-1nrbihl"><label class="file svelte-1nrbihl"><input id="lcp-file" type="file" multiple="" aria-label="Select LCP file" name="lcp-up" class="lcp-up svelte-1nrbihl" accept=".lcp"/> <span class="file-custom svelte-1nrbihl"><div class="file-custom__button svelte-1nrbihl">Browse</div> <span class="file-custom__filenames svelte-1nrbihl"> </span></span></label> <button class="lancer-button deselect-file svelte-1nrbihl"><i class="fas fa-broom"></i> Unselect File</button></div></div>');
function LCPSelector($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]), $$restProps = legacy_rest_props($$sanitized_props, ["deselect", "disabled"]);
  push($$props, !1);
  const dispatch = createEventDispatcher();
  let disabled = prop($$props, "disabled", 8, !1);
  const deselect = /* @__PURE__ */ __name(() => {
    set(selectedFiles, null), set(filenames, null), console.log("Deselecting file"), dispatch("lcpLoaded", null);
  }, "deselect");
  let selectedFiles = mutable_source(null), filenames = mutable_source(null), filesData = [], contentSummary = null;
  function filesSelected(event2) {
    var _a;
    const files = (_a = event2.target) == null ? void 0 : _a.files;
    if (files) {
      set(filenames, ""), filesData = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`Selected file: ${file.name}`), set(filenames, get(filenames) + file.name), i < files.length - 1 && set(filenames, get(filenames) + ", "), filesData.push({ name: file.name, data: null, loaded: !1, cp: null });
        const reader = new FileReader();
        reader.addEventListener("loadend", (e) => {
          const data = reader.result, fd = filesData.find((fd2) => fd2.name === file.name);
          fd && (fd.loaded = !0, data && (fd.data = data));
        }), reader.readAsArrayBuffer(file);
      }
      waitAndDispatchLcpLoaded();
    }
  }
  __name(filesSelected, "filesSelected");
  async function waitAndDispatchLcpLoaded() {
    if (!filesData || !filesData.length) return;
    for (; filesData.some((fd) => !fd.loaded); )
      await new Promise((resolve) => setTimeout(resolve, 100));
    if (filesData.length === 1) {
      const fd = filesData[0];
      if (!fd.data) {
        ui.notifications.error(`Failed to load LCP ${fd.name}`);
        return;
      }
      fd.cp = await parseContentPack(fd.data), dispatch("lcpLoaded", {
        contentPacks: [fd.cp],
        contentSummary: generateLcpSummary(fd.cp)
      });
      return;
    }
    const aggregateManifest = {
      name: "Selected LCPs",
      author: "Various",
      item_prefix: "",
      version: "",
      description: ""
    };
    await Promise.all(filesData.map(async (fd) => {
      if (!fd.data) {
        ui.notifications.error(`Failed to load LCP ${fd.name}`);
        return;
      }
      fd.cp = await parseContentPack(fd.data);
      const author = fd.cp.manifest.website ? `<a href="${fd.cp.manifest.website}">${fd.cp.manifest.author}</a>` : `<em>${fd.cp.manifest.author}</em>`;
      aggregateManifest.description += `<b>${fd.cp.manifest.name}</b> v${fd.cp.manifest.version} by ${author}<br />`;
    }));
    const contentPacks = filesData.map((fd) => fd.cp).filter((cp) => !!cp);
    contentSummary = generateMultiLcpSummary(aggregateManifest, contentPacks), dispatch("lcpLoaded", { contentPacks, contentSummary });
  }
  __name(waitAndDispatchLcpLoaded, "waitAndDispatchLcpLoaded");
  var $$exports = { deselect };
  init();
  var div = root$2(), div_1 = sibling(child(div), 2), label = child(div_1), input = child(label), span = sibling(input, 2), span_1 = sibling(child(span), 2), text = child(span_1), button = sibling(label, 2);
  return template_effect(() => {
    set_style(div, (deep_read_state($$restProps), untrack(() => $$restProps.style))), input.disabled = disabled(), set_text(text, get(filenames) || "Choose file..."), button.disabled = disabled();
  }), bind_files(input, () => get(selectedFiles), ($$value) => set(selectedFiles, $$value)), event("change", input, filesSelected), event("click", button, deselect), append($$anchor, div), bind_prop($$props, "deselect", deselect), pop($$exports);
}
__name(LCPSelector, "LCPSelector");
var root_2$1 = from_html('<input class="content-checkbox svelte-1ggr976" type="checkbox"/>'), root_3$1 = from_html('<span class="content-checkbox svelte-1ggr976"></span>'), root_4$1 = from_html('<a target="_blank" rel="noopener noreferrer" class="svelte-1ggr976"><i class="fas fa-external-link-alt svelte-1ggr976"></i></a>'), root_6 = from_html('<i class="fas fa-check svelte-1ggr976"></i>'), root_7 = from_html('<i class="fas fa-arrow-right svelte-1ggr976"></i>'), root_8 = from_html('<i class="fas fa-lock svelte-1ggr976"></i>'), root_1$1 = from_html('<div><!> <span class="content-label svelte-1ggr976"> </span> <span class="content-label svelte-1ggr976"> </span> <span class="content-label svelte-1ggr976"><!></span> <span class="curr-version svelte-1ggr976"> </span> <span class="content-icon svelte-1ggr976"><!></span> <span class="avail-version svelte-1ggr976"> </span></div>'), root$1 = from_html('<div class="lcp-table flexcol svelte-1ggr976"><div class="lancer-header clipped-top lancer-primary major svelte-1ggr976">Available and Installed Content</div> <div id="lcp-table" class="svelte-1ggr976"><div class="lcp-table__rows svelte-1ggr976"><div class="row header svelte-1ggr976"><div class="svelte-1ggr976"><input class="content-checkbox svelte-1ggr976" name="select-all" type="checkbox"/></div> <span class="svelte-1ggr976">TITLE</span> <span class="svelte-1ggr976">AUTHOR</span> <span class="svelte-1ggr976"></span> <span class="svelte-1ggr976">CURRENT</span> <span class="svelte-1ggr976"></span> <span class="svelte-1ggr976">AVAILABLE</span></div> <!></div></div> <div class="lcp-table__buttons svelte-1ggr976"><button type="button" class="lancer-button lcp-bulk-import svelte-1ggr976" title="Import/Update Selected" tabindex="-1"><i class="cci cci-content-manager i--4 svelte-1ggr976"></i> Import/Update Selected</button> <button type="button" class="lancer-button lcp-clear-all svelte-1ggr976" title="Clear Compendium Data" tabindex="-1"><i class="fas fa-trash i--2 svelte-1ggr976"></i> Clear Compendium Data</button></div></div>');
function LCPTable($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]), $$restProps = legacy_rest_props($$sanitized_props, ["deselect", "lcpData", "disabled"]);
  push($$props, !1);
  const selectAllRows = mutable_source(), dispatch = createEventDispatcher();
  let lcpData = prop($$props, "lcpData", 8), disabled = prop($$props, "disabled", 8, !1);
  const deselect = /* @__PURE__ */ __name(() => {
    for (const pack of lcpData())
      mutate(rowSelectionTracker, get(rowSelectionTracker)[pack.id].checked = !1);
  }, "deselect");
  onMount(() => debounceAggregateSummary());
  let rowSelectionTracker = mutable_source({});
  function toggleSelectAllOfficial() {
    for (const pack of lcpData())
      get(rowSelectionTracker)[pack.id].selectable && mutate(rowSelectionTracker, get(rowSelectionTracker)[pack.id].checked = !get(selectAllRows));
  }
  __name(toggleSelectAllOfficial, "toggleSelectAllOfficial");
  function toggleRow(packId) {
    mutate(rowSelectionTracker, get(rowSelectionTracker)[packId].checked = !get(rowSelectionTracker)[packId].checked), debounceAggregateSummary();
  }
  __name(toggleRow, "toggleRow");
  const aggregateManifest = {
    author: "Massif Press",
    name: "Selected Official Sources",
    version: "1.0.0",
    item_prefix: "",
    description: "",
    website: "https://massif-press.itch.io/"
  };
  function generateAggregateSummary() {
    const selected = lcpData().filter((p) => get(rowSelectionTracker)[p.id].checked);
    if (!selected.length) return null;
    if (selected.length === 1) {
      const summary = generateLcpSummary(selected[0].cp);
      return summary.aggregate = !0, summary;
    }
    return generateMultiLcpSummary(aggregateManifest, selected.filter((p) => !!p.cp).map((p) => p.cp));
  }
  __name(generateAggregateSummary, "generateAggregateSummary");
  let aggregateSummaryTimeout = null;
  function debounceAggregateSummary() {
    aggregateSummaryTimeout && clearTimeout(aggregateSummaryTimeout), aggregateSummaryTimeout = setTimeout(
      () => {
        dispatch("aggregateSummary", generateAggregateSummary());
      },
      100
    );
  }
  __name(debounceAggregateSummary, "debounceAggregateSummary");
  let hoveredRow = null;
  function onMouseenterRow(id) {
    hoveredRow = id;
    const rowLcp = lcpData().find((p) => p.id === id);
    if (!rowLcp || !rowLcp.cp || !rowLcp.cp.data) {
      dispatch("lcpHovered", null);
      return;
    }
    const lcpSummary = generateLcpSummary(rowLcp.cp);
    dispatch("lcpHovered", lcpSummary);
  }
  __name(onMouseenterRow, "onMouseenterRow");
  function onMouseleaveRow(id) {
    setTimeout(
      () => {
        hoveredRow === id && (hoveredRow = null, dispatch("lcpHovered", null));
      },
      50
    );
  }
  __name(onMouseleaveRow, "onMouseleaveRow");
  function dispatchLcpsToInstall() {
    const selected = lcpData().filter((p) => get(rowSelectionTracker)[p.id].checked);
    dispatch("installManyLcps", selected.map((p) => p.cp));
  }
  __name(dispatchLcpsToInstall, "dispatchLcpsToInstall");
  function clearCompendiums() {
    dispatch("clearCompendiums");
  }
  __name(clearCompendiums, "clearCompendiums"), legacy_pre_effect(() => get(rowSelectionTracker), () => {
    set(selectAllRows, Object.values(get(rowSelectionTracker)).every((v) => !v.selectable || v.checked));
  }), legacy_pre_effect(() => (deep_read_state(lcpData()), get(rowSelectionTracker)), () => {
    if (typeof lcpData() < "u")
      for (const pack of lcpData())
        get(rowSelectionTracker)[pack.id] || mutate(rowSelectionTracker, get(rowSelectionTracker)[pack.id] = {
          checked: pack.availableVersion > pack.currentVersion,
          selectable: !!pack.availableVersion
        });
  }), legacy_pre_effect_reset();
  var $$exports = { deselect };
  init();
  var div = root$1(), div_1 = sibling(child(div), 2), div_2 = child(div_1), div_3 = child(div_2), div_4 = child(div_3), input = child(div_4), node = sibling(div_3, 2);
  each(node, 1, lcpData, index, ($$anchor2, pack) => {
    var div_5 = root_1$1(), node_1 = child(div_5);
    {
      var consequent = /* @__PURE__ */ __name(($$anchor3) => {
        var input_1 = root_2$1();
        template_effect(() => {
          set_attribute(input_1, "name", (get(pack), untrack(() => get(pack).id))), input_1.disabled = disabled();
        }), bind_checked(input_1, () => get(rowSelectionTracker)[get(pack).id].checked, ($$value) => mutate(rowSelectionTracker, get(rowSelectionTracker)[get(pack).id].checked = $$value)), event("change", input_1, () => debounceAggregateSummary()), append($$anchor3, input_1);
      }, "consequent"), alternate = /* @__PURE__ */ __name(($$anchor3) => {
        var span = root_3$1();
        append($$anchor3, span);
      }, "alternate");
      if_block(node_1, ($$render) => {
        get(rowSelectionTracker), get(pack), untrack(() => get(rowSelectionTracker)[get(pack).id].selectable) ? $$render(consequent) : $$render(alternate, -1);
      });
    }
    var span_1 = sibling(node_1, 2), text = child(span_1), span_2 = sibling(span_1, 2), text_1 = child(span_2), span_3 = sibling(span_2, 2), node_2 = child(span_3);
    {
      var consequent_1 = /* @__PURE__ */ __name(($$anchor3) => {
        var a = root_4$1();
        template_effect(() => set_attribute(a, "href", (get(pack), untrack(() => get(pack).url)))), event("click", a, (e) => e.stopPropagation()), append($$anchor3, a);
      }, "consequent_1");
      if_block(node_2, ($$render) => {
        get(pack), untrack(() => get(pack).url) && $$render(consequent_1);
      });
    }
    var span_4 = sibling(span_3, 2), text_2 = child(span_4), span_5 = sibling(span_4, 2), node_3 = child(span_5);
    {
      var consequent_4 = /* @__PURE__ */ __name(($$anchor3) => {
        var fragment = comment(), node_4 = first_child(fragment);
        {
          var consequent_2 = /* @__PURE__ */ __name(($$anchor4) => {
            var i = root_6();
            append($$anchor4, i);
          }, "consequent_2"), consequent_3 = /* @__PURE__ */ __name(($$anchor4) => {
            var i_1 = root_7();
            append($$anchor4, i_1);
          }, "consequent_3"), alternate_1 = /* @__PURE__ */ __name(($$anchor4) => {
            var i_2 = root_8();
            append($$anchor4, i_2);
          }, "alternate_1");
          if_block(node_4, ($$render) => {
            get(pack), untrack(() => get(pack).currentVersion === get(pack).availableVersion) ? $$render(consequent_2) : (get(rowSelectionTracker), get(pack), untrack(() => get(rowSelectionTracker)[get(pack).id]) ? $$render(consequent_3, 1) : $$render(alternate_1, -1));
          });
        }
        append($$anchor3, fragment);
      }, "consequent_4");
      if_block(node_3, ($$render) => {
        get(pack), untrack(() => get(pack).availableVersion) && $$render(consequent_4);
      });
    }
    var span_6 = sibling(span_5, 2), text_3 = child(span_6);
    template_effect(() => {
      set_class(
        div_5,
        1,
        (get(pack), untrack(() => `row${get(pack).availableVersion ? " has-data" : ""}`)),
        "svelte-1ggr976"
      ), set_text(text, (get(pack), untrack(() => get(pack).title))), set_text(text_1, (get(pack), untrack(() => get(pack).author))), set_text(text_2, (get(pack), untrack(() => get(pack).currentVersion))), set_text(text_3, (get(pack), untrack(() => get(pack).availableVersion)));
    }), event("mouseenter", div_5, () => onMouseenterRow(get(pack).id)), event("mouseleave", div_5, () => onMouseleaveRow(get(pack).id)), event("click", div_5, () => toggleRow(get(pack).id)), event("keypress", div_5, () => toggleRow(get(pack).id)), append($$anchor2, div_5);
  });
  var div_6 = sibling(div_1, 2), button = child(div_6), button_1 = sibling(button, 2);
  return template_effect(
    ($0, $1) => {
      set_style(div, (deep_read_state($$restProps), untrack(() => $$restProps.style))), input.disabled = disabled(), button.disabled = $0, button_1.disabled = $1;
    },
    [
      () => (deep_read_state(disabled()), deep_read_state(lcpData()), get(rowSelectionTracker), untrack(() => disabled() || !lcpData().some((p) => get(rowSelectionTracker)[p.id].checked))),
      () => (deep_read_state(disabled()), deep_read_state(lcpData()), untrack(() => disabled() || !lcpData().some((p) => p.currentVersion !== "--")))
    ]
  ), bind_checked(input, () => get(selectAllRows), ($$value) => set(selectAllRows, $$value)), event("click", input, toggleSelectAllOfficial), event("change", input, () => debounceAggregateSummary()), event("click", button, dispatchLcpsToInstall), event("click", button_1, clearCompendiums), append($$anchor, div), bind_prop($$props, "deselect", deselect), pop($$exports);
}
__name(LCPTable, "LCPTable");
var root_2 = from_html('<span class="monospace">Loading data, please wait…</span>'), root_1 = from_html('<div class="flexrow" style="margin: 5em"><!></div>'), root_4 = from_html('<span class="monospace svelte-8hb725"> </span> <div class="lcp-manager__progress-bar svelte-8hb725"></div>', 1), root_5 = from_html('<div class="lcp-manager__progress-bar svelte-8hb725"></div>'), root_3 = from_html('<div class="flexrow lcp-manager__main-content svelte-8hb725" style="flex: 1 1"><!> <div class="lcp-manager__detail-column svelte-8hb725"><!> <!></div></div> <div class="lcp-manager__progress-area svelte-8hb725"><div class="lcp-manager__progress svelte-8hb725"><!> <!></div></div>', 1), root = from_html('<div class="lcp-manager svelte-8hb725"><!></div>');
function LCPManager($$anchor, $$props) {
  push($$props, !1);
  const busy = mutable_source(), contentSummary = mutable_source(), showImportButton = mutable_source(), coreVersion = mutable_source(), lp = LANCER.log_prefix;
  let injectedContentSummary = prop($$props, "injectedContentSummary", 12, null), loading = prop($$props, "loading", 12, !0), lcpData = mutable_source([]), contentPacks = [], fileContentSummary = mutable_source(null), hoveredContentSummary = mutable_source(null), aggregateContentSummary = mutable_source(null), importingLcp = mutable_source(null), importing = mutable_source(!1), importingMany = mutable_source(!1), clearing = mutable_source(!1), barWidth = mutable_source(0), secondBarWidth = mutable_source(0), deselectTable = mutable_source(), deselectFiles = mutable_source();
  async function init$1() {
    loading(!0);
    const index2 = new LCPIndex(game.settings.get(game.system.id, LANCER.setting_lcps).index), officialData = await getOfficialData(index2);
    set(lcpData, mergeOfficialDataAndLcpIndex(officialData, index2)), loading(!1);
  }
  __name(init$1, "init$1"), init$1();
  function lcpLoaded(event2) {
    if (!event2.detail) {
      contentPacks = [], set(fileContentSummary, null);
      return;
    }
    set(fileContentSummary, event2.detail.contentSummary), contentPacks = event2.detail.contentPacks, get(deselectTable)();
  }
  __name(lcpLoaded, "lcpLoaded");
  function lcpHovered(event2) {
    set(hoveredContentSummary, event2.detail);
  }
  __name(lcpHovered, "lcpHovered");
  function updateAggregateSummary(event2) {
    set(aggregateContentSummary, event2.detail), contentPacks = [], set(fileContentSummary, null), get(deselectFiles)();
  }
  __name(updateAggregateSummary, "updateAggregateSummary");
  async function updateLcpIndex(manifest) {
    const lcpIndex = new LCPIndex(game.settings.get(game.system.id, LANCER.setting_lcps).index);
    lcpIndex.updateManifest(manifest), await game.settings.set(game.system.id, LANCER.setting_lcps, lcpIndex);
    const updatedLcp = get(lcpData).find((lcp) => lcp.title === manifest.name && lcp.author === manifest.author);
    updatedLcp ? updatedLcp.currentVersion = manifest.version : get(lcpData).push({
      title: manifest.name,
      author: manifest.author,
      currentVersion: manifest.version,
      availableVersion: "",
      url: manifest.website,
      id: manifest.item_prefix || manifest.name.replace(/\s/g, "-").toLowerCase()
    }), set(lcpData, [...get(lcpData)]);
  }
  __name(updateLcpIndex, "updateLcpIndex");
  function _canImportLcp() {
    var _a;
    return (_a = game.user) != null && _a.isGM ? get(coreVersion) ? !0 : (ui.notifications.warn("Please update the Core data before importing LCPs."), !1) : (ui.notifications.warn("Only GM can modify the Compendiums."), !1);
  }
  __name(_canImportLcp, "_canImportLcp");
  async function importLcp(cp = null) {
    if (!cp) {
      ui.notifications.error("You must select an LCP file before importing.");
      return;
    }
    if (!_canImportLcp()) return;
    const manifest = cp.manifest;
    !cp || !manifest || (`${cp.manifest.name}${cp.manifest.version}`, set(importing, !0), set(barWidth, 0), set(importingLcp, cp), updateProgressBar(0, 1), console.log(`${lp} Starting import of ${cp.manifest.name} v${cp.manifest.version}.`), console.log(`${lp} Parsed content pack:`, cp), await importCP(cp, (x, y) => updateProgressBar(x, y)), updateProgressBar(1, 1), console.log(`${lp} Import of ${cp.manifest.name} v${cp.manifest.version} complete.`), set(importing, !1), setTimeout(
      () => {
        !get(importing) && !get(importingMany) && set(importingLcp, null);
      },
      1e3
    ), cp.manifest.name === "Lancer Core Book Data" && cp.manifest.author === "Massif Press" && await game.settings.set(game.system.id, LANCER.setting_core_data, cp.manifest.version), updateLcpIndex(manifest));
  }
  __name(importLcp, "importLcp");
  async function importManyLcps(lcps = null) {
    if (lcps || (lcps = contentPacks), !!_canImportLcp()) {
      set(importingMany, !0), set(secondBarWidth, 0);
      for (const [index2, cp] of lcps.entries())
        cp && (set(secondBarWidth, Math.min(Math.ceil(index2 / lcps.length * 100), 100)), await importLcp(cp));
      set(importingMany, !1);
    }
  }
  __name(importManyLcps, "importManyLcps");
  function updateProgressBar(done, outOf) {
    const percent = Math.min(done / outOf, 1);
    set(barWidth, Math.floor(percent * 100));
  }
  __name(updateProgressBar, "updateProgressBar");
  async function clearCompendiums() {
    if (!await foundry.applications.api.DialogV2.confirm({
      window: {
        title: "Clear Compendiums",
        icon: "fas fa-triangle-exclamation"
      },
      content: `<p>Are you sure you want to delete all actors and items from the Lancer compendiums?</p>
        <p><i class="fas fa-triangle-exclamation i--4"></i> This action cannot be undone!</p>`
    })) return;
    set(clearing, !0), await clearCompendiumData();
    const officialData = await getOfficialData(), index2 = new LCPIndex(game.settings.get(game.system.id, LANCER.setting_lcps).index);
    set(lcpData, mergeOfficialDataAndLcpIndex(officialData, index2)), get(deselectFiles)(), set(clearing, !1);
  }
  __name(clearCompendiums, "clearCompendiums"), legacy_pre_effect(() => (get(importing), get(importingMany), get(clearing)), () => {
    set(busy, get(importing) || get(importingMany) || get(clearing));
  }), legacy_pre_effect(
    () => (deep_read_state(injectedContentSummary()), get(hoveredContentSummary), get(fileContentSummary), get(aggregateContentSummary)),
    () => {
      set(contentSummary, injectedContentSummary() ?? get(hoveredContentSummary) ?? get(fileContentSummary) ?? get(aggregateContentSummary));
    }
  ), legacy_pre_effect(() => (get(hoveredContentSummary), get(contentSummary)), () => {
    var _a;
    set(showImportButton, get(hoveredContentSummary) !== null && !((_a = get(contentSummary)) != null && _a.aggregate));
  }), legacy_pre_effect(() => get(lcpData), () => {
    var _a;
    set(coreVersion, (_a = get(lcpData).find((lcp) => lcp.id === "core")) == null ? void 0 : _a.currentVersion);
  }), legacy_pre_effect_reset();
  var $$exports = {
    get injectedContentSummary() {
      return injectedContentSummary();
    },
    set injectedContentSummary($$value) {
      injectedContentSummary($$value), flushSync();
    },
    get loading() {
      return loading();
    },
    set loading($$value) {
      loading($$value), flushSync();
    }
  };
  init();
  var div = root(), node = child(div);
  {
    var consequent = /* @__PURE__ */ __name(($$anchor2) => {
      var div_1 = root_1(), node_1 = child(div_1);
      Spinner(node_1, {
        children: /* @__PURE__ */ __name(($$anchor3, $$slotProps) => {
          var span = root_2();
          append($$anchor3, span);
        }, "children"),
        $$slots: { default: !0 }
      }), append($$anchor2, div_1);
    }, "consequent"), alternate = /* @__PURE__ */ __name(($$anchor2) => {
      var fragment = root_3(), div_2 = first_child(fragment), node_2 = child(div_2);
      LCPTable(node_2, {
        get lcpData() {
          return get(lcpData);
        },
        get disabled() {
          return get(busy);
        },
        set disabled($$value) {
          set(busy, $$value);
        },
        get deselect() {
          return get(deselectTable);
        },
        set deselect($$value) {
          set(deselectTable, $$value);
        },
        $$events: {
          lcpHovered,
          aggregateSummary: updateAggregateSummary,
          installManyLcps: /* @__PURE__ */ __name((event2) => importManyLcps(event2.detail), "installManyLcps"),
          clearCompendiums
        },
        $$legacy: !0
      });
      var div_3 = sibling(node_2, 2), node_3 = child(div_3);
      LCPSelector(node_3, {
        get disabled() {
          return get(busy);
        },
        set disabled($$value) {
          set(busy, $$value);
        },
        get deselect() {
          return get(deselectFiles);
        },
        set deselect($$value) {
          set(deselectFiles, $$value);
        },
        $$events: { lcpLoaded },
        $$legacy: !0
      });
      var node_4 = sibling(node_3, 2);
      LCPDetails(node_4, {
        get contentSummary() {
          return get(contentSummary);
        },
        get showImportButton() {
          return get(showImportButton);
        },
        get disabled() {
          return get(busy);
        },
        set disabled($$value) {
          set(busy, $$value);
        },
        $$events: { importLcp: /* @__PURE__ */ __name(() => importManyLcps(), "importLcp") },
        $$legacy: !0
      });
      var div_4 = sibling(div_2, 2), div_5 = child(div_4), node_5 = child(div_5);
      {
        var consequent_1 = /* @__PURE__ */ __name(($$anchor3) => {
          var fragment_1 = root_4(), span_1 = first_child(fragment_1), text = child(span_1), div_6 = sibling(span_1, 2);
          let styles;
          template_effect(() => {
            set_text(text, `${get(importingLcp), untrack(() => {
              var _a, _b;
              return `${(_a = get(importingLcp)) == null ? void 0 : _a.manifest.name} v${(_b = get(importingLcp)) == null ? void 0 : _b.manifest.version}`;
            }) ?? ""} ${get(barWidth) ?? ""}%`), styles = set_style(div_6, "", styles, { width: `${get(barWidth)}%` });
          }), transition(7, span_1, () => fade), transition(7, div_6, () => fade), append($$anchor3, fragment_1);
        }, "consequent_1");
        if_block(node_5, ($$render) => {
          (get(importing) || get(importingMany)) && $$render(consequent_1);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_2 = /* @__PURE__ */ __name(($$anchor3) => {
          var div_7 = root_5();
          let styles_1;
          template_effect(() => styles_1 = set_style(div_7, "", styles_1, { width: `${get(secondBarWidth)}%` })), transition(7, div_7, () => fade), append($$anchor3, div_7);
        }, "consequent_2");
        if_block(node_6, ($$render) => {
          get(importingMany) && $$render(consequent_2);
        });
      }
      append($$anchor2, fragment);
    }, "alternate");
    if_block(node, ($$render) => {
      loading() ? $$render(consequent) : $$render(alternate, -1);
    });
  }
  return append($$anchor, div), pop($$exports);
}
__name(LCPManager, "LCPManager");
export {
  LCPManager as default
};
//# sourceMappingURL=LCPManager-ClfOkCyh.mjs.map
