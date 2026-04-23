const MODULE_ID = "anarchist-overlay-remake";

const renderTpl = (path, data) => foundry.applications.handlebars.renderTemplate(path, data);

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const parseOverlayOptions = options => ({
    positionX: options.positionX ?? "center",
    positionY: options.positionY ?? "center",
    fadeOnClose: options.fadeOnClose ?? true,
    closeTime: options.closeTime ?? 15,
    closeAllWindows: options.closeAllWindows ?? true,
    aboveUi: options.aboveUi ?? true,
    blockInteractions: options.blockInteractions ?? true,
});

const parseTextCrawlOptions = options => ({
    offsetX: options.offsetX ?? "0",
    offsetY: options.offsetY ?? "0",
    typingTime: options.typingTime ?? 2,
    delay: options.delay ?? 1,
    blackBars: options.blackBars ?? true,
    lines: options.lines.map(line => ({
        text: line.text,
        fontSize: line.fontSize ?? "32px",
    })),
    glitchEffect: options.glitchEffect ?? false,
});

const closeAllOverlays = () => {
    document.querySelectorAll(".header-button.close").forEach(btn => btn.click());
};

const closeAfterDelay = async (el, options) => {
    await wait(options.closeTime * 1000);
    if (options.fadeOnClose) {
        el.classList.add("fade-out");
        await wait(2000);
    }
    el.remove();
};

const onCreateOverlay = async (options, htmlContent) => {
    const parsed = parseOverlayOptions(options);
    const html = await renderTpl(`modules/${MODULE_ID}/templates/overlay.hbs`, parsed);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const el = wrapper.firstElementChild;
    el.innerHTML = htmlContent;
    document.body.append(el);
    if (parsed.closeAllWindows) closeAllOverlays();
    if (parsed.closeTime > 0) await closeAfterDelay(el, parsed);
    return el;
};

const createTextCrawlHtml = async options => {
    const parsed = parseTextCrawlOptions(options);
    return await renderTpl(`modules/${MODULE_ID}/templates/text-crawl.hbs`, {
        ...parsed,
        lines: parsed.lines.map((line, index) => ({
            ...line,
            typingTime: parsed.typingTime,
            textLength: line.text.length,
            cursorDelay: (parsed.typingTime + parsed.delay) * 2,
            startDelay: (parsed.delay + parsed.typingTime) * index,
            glitchEffect: parsed.glitchEffect,
        })),
    });
};

let initialized = false;

const init = () => {
    if (initialized) {
        console.log("Anarchist Overlay: Already initialized, skipping");
        return;
    }
    console.log("Anarchist Overlay: Initializing...");

    const mod = game.modules.get(MODULE_ID);
    if (!mod) {
        console.error("Anarchist Overlay: Module not found in game.modules");
        return;
    }

    const socket = socketlib.registerModule(MODULE_ID);
    socket.register("createOverlay", onCreateOverlay);

    mod.createOverlay = (options, htmlContent) => {
        if (!game.user?.isGM) throw new Error("Only GM can create overlays.");
        return socket.executeForEveryone("createOverlay", options, htmlContent);
    };
    mod.createTextCrawlHtml = createTextCrawlHtml;

    initialized = true;
    console.log("Anarchist Overlay: Module initialized successfully", {
        createOverlay: typeof mod.createOverlay,
        createTextCrawlHtml: typeof mod.createTextCrawlHtml,
    });
};

Hooks.once("socketlib.ready", init);
