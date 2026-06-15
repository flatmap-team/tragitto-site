/* @ds-bundle: {"format":3,"namespace":"TragittoDesignSystem_b33cbc","components":[{"name":"ChatBubble","sourcePath":"components/chat/ChatBubble.jsx"},{"name":"SuggestionChip","sourcePath":"components/chat/SuggestionChip.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"ProgressRing","sourcePath":"components/core/ProgressRing.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"}],"sourceHashes":{"components/chat/ChatBubble.jsx":"1691a524d1a8","components/chat/SuggestionChip.jsx":"cdeeb852c9a8","components/core/Avatar.jsx":"fdbdab4e113c","components/core/Badge.jsx":"dbd4e89d04b5","components/core/Button.jsx":"e2a160df016d","components/core/Card.jsx":"8f4a18bddaec","components/core/IconTile.jsx":"8975baa9aec0","components/core/ProgressRing.jsx":"a2e410537161","components/forms/Input.jsx":"d525038d16a1","components/navigation/ListRow.jsx":"062313da5d50","ui_kits/tragitto-app/AgentChat.jsx":"3a207a080ebd","ui_kits/tragitto-app/NewTripSheet.jsx":"d6c3af087c46","ui_kits/tragitto-app/PhoneChrome.jsx":"febac4b112bc","ui_kits/tragitto-app/Profile.jsx":"0b9989232e6c","ui_kits/tragitto-app/TripTimeline.jsx":"bedb2f7ab91f","ui_kits/tragitto-app/TripsList.jsx":"0343cc4e0493"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TragittoDesignSystem_b33cbc = window.TragittoDesignSystem_b33cbc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/chat/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto ChatBubble — message in the agent conversation.
 * "user" is a right-aligned terracotta-tinted bubble; "agent" is a left
 * plain block led by the AI sparkle puck.
 */
function ChatBubble({
  children,
  from = "agent",
  style,
  ...rest
}) {
  if (from === "user") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        justifyContent: "flex-end",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "82%",
        padding: "14px 18px",
        background: "var(--terracotta-100)",
        color: "var(--slate-800)",
        borderRadius: "var(--radius-lg)",
        borderBottomRightRadius: "var(--radius-xs)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        lineHeight: "var(--leading-normal)"
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flexShrink: 0,
      marginTop: 2,
      borderRadius: "var(--radius-round)",
      background: "var(--gradient-ai)",
      display: "grid",
      placeItems: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "16",
    height: "16",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 2,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/chat/SuggestionChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto SuggestionChip — the white pill prompt-starters under the agent
 * intro ("Planejar meu dia"), each prefixed with a small sage sparkle.
 */
function SuggestionChip({
  children,
  onClick,
  sparkle = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      padding: "13px 20px",
      background: "var(--surface-raised)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-sm)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      cursor: "pointer",
      transition: "transform var(--dur-fast) var(--ease-spring), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), sparkle && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    style: {
      color: "var(--sage-500)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"
  })), children);
}
Object.assign(__ds_scope, { SuggestionChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chat/SuggestionChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto Avatar — circular user image with an optional terracotta ring,
 * or the signature AI sparkle puck (gradient + white sparkle).
 */
function Avatar({
  src,
  alt = "",
  size = 44,
  ring = false,
  ai = false,
  initials,
  style,
  ...rest
}) {
  const base = {
    width: size,
    height: size,
    borderRadius: "var(--radius-round)",
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
    boxShadow: ring ? "var(--shadow-sm)" : "none",
    border: ring ? "2.5px solid var(--white)" : "none",
    outline: ring ? "2px solid var(--terracotta-300)" : "none",
    ...style
  };
  if (ai) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        background: "var(--gradient-ai)",
        color: "#fff"
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 100",
      width: size * 0.5,
      height: size * 0.5,
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"
    })));
  }
  if (!src) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...base,
        background: "var(--sage-200)",
        color: "var(--sage-700)",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        fontSize: size * 0.4
      }
    }, rest), initials || "?");
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto Badge — small rounded-pill status label.
 * Tones map to the brand status system; "pro" is the sparkle-prefixed PRO chip.
 */
function Badge({
  children,
  tone = "neutral",
  icon = null,
  pro = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--surface-sunk)",
      fg: "var(--text-muted)"
    },
    brand: {
      bg: "var(--terracotta-100)",
      fg: "var(--terracotta-700)"
    },
    success: {
      bg: "var(--success-soft)",
      fg: "var(--success)"
    },
    warning: {
      bg: "var(--warning-soft)",
      fg: "var(--warning)"
    },
    danger: {
      bg: "var(--danger-soft)",
      fg: "var(--danger)"
    },
    sage: {
      bg: "var(--sage-100)",
      fg: "var(--sage-700)"
    }
  };
  const t = pro ? tones.brand : tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--text-xs)",
      letterSpacing: pro ? "0.06em" : "0.01em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), pro && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "12",
    height: "12",
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"
  })), icon && !pro && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 13,
      height: 13
    }
  }), pro ? "PRO" : children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto Button — the fully-rounded pill action used across the app
 * ("Criar viagem", "Continuar"). Primary is solid terracotta; secondary is a
 * tinted/outline pill; ghost is text-only. Icons are Lucide names (host loads
 * lucide + calls lucide.createIcons()).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  icon = null,
  iconRight = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 16px",
      font: "var(--text-sm)",
      gap: "6px",
      icon: 16
    },
    md: {
      padding: "14px 22px",
      font: "var(--text-base)",
      gap: "8px",
      icon: 18
    },
    lg: {
      padding: "18px 28px",
      font: "var(--text-md)",
      gap: "10px",
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: disabled ? "var(--terracotta-200)" : "var(--brand)",
      color: "var(--text-on-brand)",
      boxShadow: disabled ? "none" : "var(--shadow-brand)",
      border: "none"
    },
    secondary: {
      background: "var(--brand-soft)",
      color: "var(--brand-soft-text)",
      boxShadow: "none",
      border: "none"
    },
    outline: {
      background: "transparent",
      color: "var(--brand-soft-text)",
      boxShadow: "none",
      border: "1.5px solid var(--border-brand)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      boxShadow: "none",
      border: "none"
    },
    sage: {
      background: "var(--secondary)",
      color: "#fff",
      boxShadow: "var(--shadow-sm)",
      border: "none"
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: "tg-btn",
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: s.font,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.75 : 1,
      transition: "transform var(--dur-fast) var(--ease-spring), filter var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(var(--press-scale))";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: s.icon,
      height: s.icon
    }
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    "data-lucide": iconRight,
    style: {
      width: s.icon,
      height: s.icon
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto Card — the soft, rounded cream surface used for trips, list items,
 * sheets and info blocks. `interactive` adds hover-lift + press feedback.
 */
function Card({
  children,
  interactive = false,
  elevation = "card",
  padding = "var(--pad-card)",
  surface = "card",
  style,
  onClick,
  ...rest
}) {
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    card: "var(--shadow-card)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  const surfaces = {
    card: "var(--surface-card)",
    raised: "var(--surface-raised)",
    sunk: "var(--surface-sunk)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    className: "tg-card-c",
    style: {
      background: surfaces[surface] || surfaces.card,
      borderRadius: "var(--radius-lg)",
      boxShadow: shadows[elevation] ?? shadows.card,
      padding,
      cursor: interactive ? "pointer" : "default",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = "translateY(var(--hover-lift))";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = shadows[elevation] ?? shadows.card;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto IconTile — rounded-square tinted icon container used in option rows
 * (Atividade / Hospedagem / Transporte) and timeline nodes.
 */
function IconTile({
  icon,
  tone = "brand",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    brand: {
      bg: "var(--terracotta-100)",
      fg: "var(--terracotta-600)"
    },
    sage: {
      bg: "var(--sage-100)",
      fg: "var(--sage-700)"
    },
    sand: {
      bg: "var(--sand-100)",
      fg: "var(--sand-700)"
    },
    slate: {
      bg: "var(--surface-sunk)",
      fg: "var(--slate-700)"
    }
  };
  const sizes = {
    sm: {
      box: 38,
      icon: 18,
      radius: "var(--radius-sm)"
    },
    md: {
      box: 52,
      icon: 24,
      radius: "var(--radius-md)"
    },
    lg: {
      box: 64,
      icon: 30,
      radius: "var(--radius-md)"
    }
  };
  const t = tones[tone] || tones.brand;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "grid",
      placeItems: "center",
      width: s.box,
      height: s.box,
      flexShrink: 0,
      borderRadius: s.radius,
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: s.icon,
      height: s.icon
    }
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressRing.jsx
try { (() => {
/**
 * Tragitto ProgressRing — circular trip-readiness indicator ("24% pronto").
 * Terracotta arc on a soft track with the percentage centered.
 */
function ProgressRing({
  value = 0,
  size = 64,
  stroke = 6,
  tone = "brand",
  label,
  style
}) {
  const tones = {
    brand: "var(--terracotta-500)",
    sage: "var(--sage-500)",
    sand: "var(--sand-600)"
  };
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const offset = c * (1 - pct / 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--terracotta-100)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: tones[tone] || tones.brand,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: offset,
    style: {
      transition: "stroke-dashoffset var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: size * 0.3,
      color: tones[tone] || tones.brand,
      fontVariantNumeric: "tabular-nums"
    }
  }, label != null ? label : pct));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto Input — soft sand-filled field with optional leading Lucide icon.
 * Borderless at rest; a terracotta ring appears on focus.
 */
function Input({
  icon = null,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  block = true,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: block ? "flex" : "inline-flex",
      alignItems: "center",
      gap: "10px",
      width: block ? "100%" : "auto",
      padding: "15px 18px",
      background: "var(--surface-sunk)",
      borderRadius: "var(--radius-md)",
      boxShadow: focused ? "0 0 0 3px var(--focus-ring)" : "inset 0 0 0 1px var(--border-subtle)",
      transition: "box-shadow var(--dur-base) var(--ease-standard)",
      cursor: disabled ? "not-allowed" : "text",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 20,
      height: 20,
      color: "var(--text-muted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-strong)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tragitto ListRow — a settings / menu row inside a Card: leading Lucide icon,
 * label, optional trailing value text, and a chevron or external-link affordance.
 */
function ListRow({
  icon,
  label,
  value,
  trailing = "chevron",
  tone = "default",
  onClick,
  style,
  ...rest
}) {
  const danger = tone === "danger";
  const color = danger ? "var(--danger)" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      width: "100%",
      padding: "16px 18px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22,
      color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: "var(--text-md)",
      fontWeight: "var(--fw-semibold)",
      color
    }
  }, label), value && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)"
    }
  }, value), trailing === "chevron" && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 20,
      height: 20,
      color: "var(--text-muted)",
      flexShrink: 0
    }
  }), trailing === "external" && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "external-link",
    style: {
      width: 19,
      height: 19,
      color: "var(--text-muted)",
      flexShrink: 0
    }
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tragitto-app/AgentChat.jsx
try { (() => {
/* global React */
// "Agente de Viagens" — AI chat. Intro state -> conversation on send.

const SUGGESTIONS = ["Planejar meu dia", "Achar um bom lugar pra jantar", "Adicionar algo ao meu roteiro"];
const AGENT_REPLY = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  style: {
    marginBottom: 10
  }
}, "Pronto Gabriel! Sua sexta-feira (12 de junho) est\xE1 completamente planejada \uD83C\uDFD6\uFE0F"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontWeight: 800,
    color: "var(--text-strong)",
    marginBottom: 8
  }
}, "\u2705 SEXTA-FEIRA PROGRAMADA"), /*#__PURE__*/React.createElement("p", {
  style: {
    lineHeight: 1.55
  }
}, /*#__PURE__*/React.createElement("b", null, "08:00"), " \u2013 Caf\xE9 da manh\xE3 no Caf\xE9 com Leide", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "09:00"), " \u2013 Uber at\xE9 a Praia da Fortaleza", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "10:00"), " \u2013 Trilha das 7 Praias (3h30 de aventura!)", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "15:00"), " \u2013 Almo\xE7o no Espa\xE7o Jundu Gastrobar", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "20:00"), " \u2013 Jantar no Braseiro Cai\xE7ara"));
function AgentHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      background: "var(--gradient-header)",
      padding: "8px 18px 16px",
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#fff",
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.18)",
      border: "1.5px solid rgba(255,255,255,0.4)",
      display: "grid",
      placeItems: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "26",
    height: "26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1.05,
      whiteSpace: "nowrap"
    }
  }, "Agente de Viagens"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      marginTop: 4,
      opacity: 0.95,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#fff"
    }
  }), "Seu concierge de viagem com IA")));
}
function Composer({
  value,
  onChange,
  onSend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: "12px 18px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-card)",
      padding: "8px 8px 8px 22px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") onSend();
    },
    placeholder: "Message Travel Agent\u2026",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onSend,
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      background: "var(--brand)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "send",
    style: {
      width: 20,
      height: 20
    }
  }))));
}
function AgentChat() {
  const {
    ChatBubble,
    SuggestionChip
  } = window.TragittoDesignSystem_b33cbc;
  const [msgs, setMsgs] = React.useState([]);
  const [draft, setDraft] = React.useState("");
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  function send(text) {
    const t = (text || draft).trim();
    if (!t) return;
    setDraft("");
    setMsgs(m => [...m, {
      from: "user",
      body: t
    }]);
    setTimeout(() => setMsgs(m => [...m, {
      from: "agent",
      body: AGENT_REPLY
    }]), 450);
  }
  const started = msgs.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-canvas)"
    }
  }, /*#__PURE__*/React.createElement(AgentHeader, null), !started ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 26px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: "50%",
      background: "var(--gradient-ai)",
      display: "grid",
      placeItems: "center",
      color: "#fff",
      boxShadow: "var(--shadow-md)",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "52",
    height: "52",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      lineHeight: 1.1,
      maxWidth: 300
    }
  }, "Como posso ajudar na sua viagem?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-muted)",
      marginTop: 12,
      maxWidth: 300
    }
  }, "Pe\xE7a para planejar, encontrar ou alterar qualquer coisa da sua viagem."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 30,
      alignItems: "center"
    }
  }, SUGGESTIONS.map(s => /*#__PURE__*/React.createElement(SuggestionChip, {
    key: s,
    onClick: () => send(s)
  }, s)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: m.from
  }, m.body))), /*#__PURE__*/React.createElement(Composer, {
    value: draft,
    onChange: setDraft,
    onSend: () => send()
  }));
}
Object.assign(window, {
  AgentChat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tragitto-app/AgentChat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tragitto-app/NewTripSheet.jsx
try { (() => {
/* global React */
// "Nova viagem" bottom sheet.

function NewTripSheet({
  onClose,
  onCreate
}) {
  const {
    Input,
    Button
  } = window.TragittoDesignSystem_b33cbc;
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--surface-overlay)",
      backdropFilter: "blur(2px)",
      animation: "tgFade var(--dur-base) var(--ease-standard)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-card)",
      borderTopLeftRadius: "var(--radius-2xl)",
      borderTopRightRadius: "var(--radius-2xl)",
      padding: "14px 24px 28px",
      boxShadow: "var(--shadow-sheet)",
      animation: "tgSheet var(--dur-sheet) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 5,
      borderRadius: 999,
      background: "var(--slate-300)",
      margin: "0 auto 22px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      marginBottom: 22
    }
  }, "Nova viagem"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Nome da viagem",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    icon: "map-pin",
    placeholder: "Destino (ex: Lisboa, Portugal)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "calendar",
    placeholder: "Data de in\xEDcio"
  }), /*#__PURE__*/React.createElement(Input, {
    icon: "calendar",
    placeholder: "Data de fim"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    size: "lg",
    style: {
      marginTop: 8
    },
    onClick: () => onCreate(name || "Lisboa")
  }, "Criar viagem"))));
}
Object.assign(window, {
  NewTripSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tragitto-app/NewTripSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tragitto-app/PhoneChrome.jsx
try { (() => {
/* global React */
// Phone chrome: status bar + home indicator. Android-style status content to
// match the source screenshots, but neutral enough for iOS too.

function StatusBar({
  dark = false
}) {
  const color = dark ? "var(--text-on-dark)" : "var(--slate-800)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--safe-top)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px 0 26px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 15,
      color,
      flexShrink: 0,
      position: "relative",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: "-0.01em"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "signal",
    style: {
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "battery-full",
    style: {
      width: 20,
      height: 20
    }
  })));
}
function HomeIndicator({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--safe-bottom)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 134,
      height: 5,
      borderRadius: 999,
      background: dark ? "rgba(255,255,255,0.55)" : "var(--slate-400)"
    }
  }));
}
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: "trips",
    icon: "luggage",
    label: "Viagens"
  }, {
    id: "agent",
    icon: "sparkles",
    label: "Agente"
  }, {
    id: "profile",
    icon: "user",
    label: "Perfil"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: "flex",
      padding: "10px 18px 4px",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      boxShadow: "0 -6px 20px -10px rgba(61,64,91,0.12)"
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "6px 0",
        color: on ? "var(--brand)" : "var(--text-muted)",
        fontFamily: "var(--font-sans)",
        fontWeight: on ? 700 : 600,
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": t.icon,
      style: {
        width: 23,
        height: 23
      }
    }), t.label);
  }));
}
Object.assign(window, {
  StatusBar,
  HomeIndicator,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tragitto-app/PhoneChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tragitto-app/Profile.jsx
try { (() => {
/* global React */
// "Perfil" — profile & settings screen.

function Profile() {
  const {
    Card,
    ListRow,
    Avatar,
    Badge
  } = window.TragittoDesignSystem_b33cbc;
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const divider = /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: "0 18px"
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--gradient-warm-fade)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "10px 18px 6px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      position: "absolute",
      left: 18,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--slate-800)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 26,
      height: 26
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22
    }
  }, "Perfil")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 22px 0"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70&auto=format&fit=crop&crop=faces",
    size: 116,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34
    }
  }, "Gabriel"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--surface-sunk)",
      display: "grid",
      placeItems: "center",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pencil",
    style: {
      width: 15,
      height: 15
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 16,
      marginTop: 4
    }
  }, "gabriel.ozeas1@gmail.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      margintop: 16,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      background: "var(--surface-raised)",
      boxShadow: "var(--shadow-card)",
      borderRadius: "var(--radius-md)",
      padding: "12px 22px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "luggage",
    style: {
      width: 22,
      height: 22,
      color: "var(--brand)"
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 20,
      color: "var(--text-strong)"
    }
  }, "6"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: 16
    }
  }, "Viagens")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "30px 22px 40px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "globe",
    label: "Idioma",
    value: "Auto"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "log-out",
    label: "Sair"
  }), divider, /*#__PURE__*/React.createElement(ListRow, {
    icon: "trash-2",
    label: "Excluir conta",
    tone: "danger"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "file-text",
    label: "Termos de uso",
    trailing: "external"
  }), divider, /*#__PURE__*/React.createElement(ListRow, {
    icon: "shield",
    label: "Pol\xEDtica de privacidade",
    trailing: "external"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "var(--text-placeholder)",
      fontSize: 14,
      marginTop: 4
    }
  }, "Tragitto v0.6.0")));
}
Object.assign(window, {
  Profile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tragitto-app/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tragitto-app/TripTimeline.jsx
try { (() => {
/* global React */
// Trip detail timeline — the "Ubatuba" roteiro view.

const DAY_LABEL = "Dia 1 — qua., 10 de jun.";
const ITEMS = [{
  node: "car",
  tone: "sand",
  emoji: "🚗",
  title: "Carro até Praia das Toninhas",
  time: "6:00 AM – 4:00 PM",
  meta: "Carro · 600 min",
  metaTone: "sand"
}, {
  node: "home",
  tone: "brand",
  solid: true,
  emoji: "🏠",
  title: "Airbnb",
  time: "Check-in 6:00 PM",
  meta: "Praia das Toninhas",
  metaTone: "muted",
  now: true
}, {
  node: "car",
  tone: "sand",
  ghost: true,
  emoji: "🚕",
  title: "Táxi até Jantar no Quintal",
  time: "9:00 PM – 9:20 PM",
  meta: "App de transporte · 20 min",
  metaTone: "sand"
}];
function TimelineNode({
  item
}) {
  const map = {
    sand: {
      bg: "var(--sand-100)",
      fg: "var(--sand-700)",
      ring: "var(--sand-300)"
    },
    brand: {
      bg: "var(--terracotta-100)",
      fg: "var(--terracotta-600)",
      ring: "var(--terracotta-300)"
    }
  };
  const c = map[item.tone] || map.brand;
  const icon = {
    car: "car",
    home: "home",
    taxi: "car"
  }[item.node] || "circle";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-round)",
      flexShrink: 0,
      display: "grid",
      placeItems: "center",
      zIndex: 2,
      background: item.solid ? "var(--brand)" : c.bg,
      color: item.solid ? "#fff" : c.fg,
      border: item.ghost ? `2px dashed ${c.ring}` : "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 22,
      height: 22
    }
  }));
}
function TripTimeline({
  trip,
  onBack,
  onAddStop
}) {
  const {
    ProgressRing,
    Badge,
    Avatar
  } = window.TragittoDesignSystem_b33cbc;
  const name = trip && trip.name || "Ubatuba";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "6px 18px 14px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--slate-800)",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 28,
      height: 28
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      flex: "0 0 auto"
    }
  }, name), /*#__PURE__*/React.createElement(Badge, {
    pro: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--sage-500)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70&auto=format&fit=crop&crop=faces",
    size: 36,
    ring: true
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "more-horizontal",
    style: {
      width: 24,
      height: 24,
      color: "var(--slate-700)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 18px 110px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tg-card",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 24,
    size: 62
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 20,
      color: "var(--text-strong)"
    }
  }, "24% pronto"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      lineHeight: 1.35,
      marginTop: 2
    }
  }, "A viagem come\xE7a hoje \xB7 ainda precisa de onde ficar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--brand)",
      fontWeight: 700,
      marginTop: 8,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, "3 pontos para revisar ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 16,
      height: 16
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--surface-raised)",
      boxShadow: "var(--shadow-sm)",
      borderRadius: "var(--radius-pill)",
      padding: "9px 20px",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, DAY_LABEL)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21,
      top: 8,
      bottom: 30,
      width: 0,
      borderLeft: "2px dashed var(--border-default)",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 52,
      borderRadius: 14,
      background: "var(--terracotta-50)",
      border: "1.5px solid var(--terracotta-200)",
      display: "grid",
      placeItems: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 700,
      color: "var(--terracotta-500)",
      fontFamily: "var(--font-display)",
      fontStyle: "italic"
    }
  }, "qua"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: "var(--terracotta-600)"
    }
  }, "10"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      color: "var(--terracotta-600)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, "junho \xB7 hoje"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20
    }
  }, "~ hoje \xB7 dia 1 de 8 ~"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, ITEMS.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, it.now && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      display: "grid",
      placeItems: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "var(--brand)",
      boxShadow: "0 0 0 5px var(--terracotta-100)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: 18,
      color: "var(--terracotta-600)"
    }
  }, "agora \xB7 9:33")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(TimelineNode, {
    item: it
  }), /*#__PURE__*/React.createElement("div", {
    className: "tg-card",
    style: {
      flex: 1,
      padding: "16px 18px",
      opacity: it.ghost ? 0.7 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 700,
      fontSize: 17,
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", null, it.emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, it.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, it.time), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginTop: 2,
      color: it.metaTone === "sand" ? "var(--sand-700)" : "var(--text-muted)"
    }
  }, it.meta)))))))), /*#__PURE__*/React.createElement("button", {
    onClick: onAddStop,
    style: {
      position: "absolute",
      right: 22,
      bottom: 96,
      width: 58,
      height: 58,
      borderRadius: "var(--radius-round)",
      border: "none",
      cursor: "pointer",
      background: "var(--gradient-ai)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "28",
    height: "28",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"
  }))));
}
Object.assign(window, {
  TripTimeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tragitto-app/TripTimeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/tragitto-app/TripsList.jsx
try { (() => {
/* global React */
// "Nossas Viagens" — trip list home screen.

const TRIPS = [{
  id: "paris",
  name: "Paris",
  dates: "11 de jun. – 15 de jun., 2026",
  status: {
    tone: "success",
    label: "Amanhã"
  },
  img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=70&auto=format&fit=crop"
}, {
  id: "ubatuba",
  name: "Ubatuba",
  dates: "10 de jun. – 17 de jun., 2026",
  status: {
    tone: "brand",
    label: "Em andamento — Dia 1"
  },
  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=70&auto=format&fit=crop"
}, {
  id: "polonia",
  name: "Polônia",
  dates: "3 de jun. – 5 de jun., 2026",
  status: {
    tone: "neutral",
    label: "Concluída"
  },
  img: "https://picsum.photos/seed/krakow-poland/300/400"
}, {
  id: "happy",
  name: "Happy Hour",
  dates: "1 de jun. – 3 de jun., 2026",
  status: {
    tone: "neutral",
    label: "Concluída"
  },
  img: "https://picsum.photos/seed/citylights/300/400"
}];
function TripsList({
  onOpenTrip,
  onNewTrip
}) {
  const {
    Card,
    Badge,
    Avatar
  } = window.TragittoDesignSystem_b33cbc;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      overflowY: "auto",
      background: "var(--surface-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 22px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      lineHeight: 1.04
    }
  }, "Nossas Viagens"), /*#__PURE__*/React.createElement(Avatar, {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70&auto=format&fit=crop&crop=faces",
    size: 44,
    ring: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, TRIPS.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.id,
    interactive: true,
    padding: "0",
    onClick: () => onOpenTrip(t),
    style: {
      display: "flex",
      overflow: "hidden",
      minHeight: 116
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 116,
      flexShrink: 0,
      background: `var(--sage-200) center/cover url(${t.img})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    pro: true
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginTop: 2
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, t.dates), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: t.status.tone
  }, t.status.label))))))), /*#__PURE__*/React.createElement("button", {
    onClick: onNewTrip,
    style: {
      position: "absolute",
      right: 22,
      bottom: 24,
      width: 62,
      height: 62,
      borderRadius: "var(--radius-round)",
      border: "none",
      cursor: "pointer",
      background: "var(--brand)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      boxShadow: "var(--shadow-brand)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus",
    style: {
      width: 28,
      height: 28
    }
  })));
}
Object.assign(window, {
  TripsList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/tragitto-app/TripsList.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.SuggestionChip = __ds_scope.SuggestionChip;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ListRow = __ds_scope.ListRow;

})();
