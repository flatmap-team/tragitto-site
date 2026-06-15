/* global React */
// Tragitto — animated usage demo scenes (pt). Composes the design-system
// primitives + the app's visual language into parametric, animatable screens.
// Loaded after animations.jsx, icons.jsx and the DS bundle.

const { clamp, useTime, useSprite, Easing } = window;

const T = () => window.TragittoDesignSystem_b33cbc;
const TX = () => window.TG_I18N[window.__TG_LANG || "pt"];
const lerp = (a, b, t) => a + (b - a) * t;

function VSparkle({ size = 26 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <path fill="currentColor" d="M50 3C54.5 33 67 45.5 97 50C67 54.5 54.5 67 50 97C45.5 67 33 54.5 3 50C33 45.5 45.5 33 50 3Z"></path>
      <path fill="currentColor" d="M82 8C83.4 16.2 86.8 19.6 95 21C86.8 22.4 83.4 25.8 82 34C80.6 25.8 77.2 22.4 69 21C77.2 19.6 80.6 16.2 82 8Z"></path>
    </svg>
  );
}

/* ----------------------------------------------------------------- phone */

// Persistent device. Inner content area stacks time-gated screen layers.
function PhoneShell({ children }) {
  return (
    <div style={{
      width: 390, height: 844, background: "var(--surface-canvas)",
      borderRadius: 52, overflow: "hidden", position: "relative", flexShrink: 0,
      display: "flex", flexDirection: "column",
      boxShadow: "0 50px 110px -34px rgba(44,46,68,0.6), 0 0 0 12px #1b1c25, 0 0 0 14px #2c2e44",
    }}>
      <div style={{
        height: 46, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 26px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15,
        color: "var(--slate-800)", flexShrink: 0, position: "relative", zIndex: 30,
      }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          <window.VIcon name="wifi" size={16}></window.VIcon>
          <window.VSignal size={16}></window.VSignal>
          <window.VBattery size={26}></window.VBattery>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0, position: "relative", overflow: "hidden" }}>
        {children}
      </div>
      <div style={{ height: 30, display: "grid", placeItems: "center", flexShrink: 0, position: "relative", zIndex: 30 }}>
        <div style={{ width: 134, height: 5, borderRadius: 999, background: "var(--slate-400)" }}></div>
      </div>
    </div>
  );
}

// A full-bleed, opacity-faded screen layer gated to [start,end] of GLOBAL time.
function Layer({ start, end = Infinity, fade = 0.5, z = 1, children }) {
  const t = useTime();
  let o = 0;
  if (t >= start - fade && t <= (end === Infinity ? Infinity : end + fade)) {
    if (t < start) o = (t - (start - fade)) / fade;
    else if (end !== Infinity && t > end) o = 1 - (t - end) / fade;
    else o = 1;
  }
  o = clamp(o, 0, 1);
  if (o <= 0.002) return null;
  return (
    <div style={{ position: "absolute", inset: 0, opacity: o, zIndex: z, background: "var(--surface-canvas)" }}>
      {children}
    </div>
  );
}

/* --------------------------------------------------------- trips screen */

const TRIP_META = [
  { img: "assets/photos/paris.png", name: "Paris", pro: true },
  { img: "assets/photos/happyhour.png", name: "Toronto" },
  { img: "assets/photos/ubatuba.png", name: "Algarve" },
];

function TripsScreen({ liftIndex = -1 }) {
  const { Card, Badge, Avatar } = T();
  const tx = TX();
  return (
    <div style={{ height: "100%", background: "var(--surface-canvas)", padding: "16px 22px 0", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 22 }}>
        <h1 style={{ fontSize: 31, lineHeight: 1.04, whiteSpace: "nowrap" }}>{tx.tripsTitle}</h1>
        <Avatar initials="G" size={44} ring></Avatar>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {TRIP_META.map((t, i) => {
          const info = tx.trips[i];
          return (
          <Card key={t.name} padding="0" style={{ display: "flex", overflow: "hidden", minHeight: 112,
            transform: i === liftIndex ? "scale(1.03)" : "none",
            boxShadow: i === liftIndex ? "var(--shadow-brand)" : "var(--shadow-card)", transition: "none" }}>
            <div style={{ width: 112, flexShrink: 0, background: `var(--sage-200) center/cover url(${t.img})` }}></div>
            <div style={{ flex: 1, padding: "15px 18px", display: "flex", flexDirection: "column", gap: 5, position: "relative" }}>
              {t.pro && <div style={{ position: "absolute", top: 13, right: 15 }}><Badge pro></Badge></div>}
              <h3 style={{ fontSize: 23 }}>{t.name}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600 }}>{info.place} · {info.dates}</p>
              <div style={{ marginTop: 3 }}><Badge tone={info.tone}>{info.label}</Badge></div>
            </div>
          </Card>
          );
        })}
      </div>
      <button style={{ position: "absolute", right: 22, bottom: 22, width: 60, height: 60, borderRadius: "var(--radius-round)",
        border: "none", background: "var(--brand)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-brand)" }}>
        <window.VIcon name="plus" size={28}></window.VIcon>
      </button>
    </div>
  );
}

/* ------------------------------------------------------- timeline screen */

// Icons/tones are language-neutral; emoji/title/time/meta come from TG_I18N.
const DAY_ICONS = [
  { icon: "navigation", tone: "sand" },
  { icon: "navigation", tone: "sand" },
  { icon: "ticket", tone: "brand" },
  { icon: "bed-double", tone: "sage" },
  { icon: "ticket", tone: "brand" },
];

const NODE_C = {
  sand: { bg: "var(--sand-100)", fg: "var(--sand-700)" },
  brand: { bg: "var(--terracotta-100)", fg: "var(--terracotta-600)" },
  sage: { bg: "var(--sage-100)", fg: "var(--sage-700)" },
};

function TimelineNode({ item, solid }) {
  const c = NODE_C[item.tone] || NODE_C.brand;
  return (
    <div style={{ width: 42, height: 42, borderRadius: "50%", flexShrink: 0, display: "grid", placeItems: "center", zIndex: 2,
      background: solid ? "var(--brand)" : c.bg, color: solid ? "#fff" : c.fg }}>
      <window.VIcon name={item.icon} size={21}></window.VIcon>
    </div>
  );
}

// pct: ring value · visible: how many items shown · pop: index getting the drop-in pop · group: show avatars
function TimelineScreen({ pct = 24, visible = 5, pop = -1, group = false, headerDates = false }) {
  const { ProgressRing, Badge, Avatar } = T();
  const tx = TX();
  const items = DAY_ICONS.map((d, i) => ({ ...d, ...tx.items[i] })).slice(0, visible);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--surface-canvas)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 18px 12px", flexShrink: 0 }}>
        <window.VIcon name="chevron-left" size={26} style={{ color: "var(--slate-800)" }}></window.VIcon>
        <h2 style={{ fontSize: 28 }}>Paris</h2>
        <Badge pro></Badge>
        <div style={{ flex: 1 }}></div>
        {group ? (
          <div style={{ display: "flex" }}>
            {["G", "M", "L"].map((a, i) => (
              <div key={a} style={{ marginLeft: i ? -12 : 0, borderRadius: "50%", border: "2.5px solid var(--surface-canvas)" }}>
                <Avatar initials={a} size={34} ring></Avatar>
              </div>
            ))}
          </div>
        ) : <Avatar initials="G" size={34} ring></Avatar>}
      </div>

      <div style={{ flex: 1, overflow: "hidden", padding: "0 18px" }}>
        <div className="tg-card" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, padding: "16px 18px" }}>
          <ProgressRing value={Math.round(pct)} size={58}></ProgressRing>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 19, color: "var(--text-strong)" }}>{Math.round(pct)}% {tx.readySuffix}</div>
            <div style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.35, marginTop: 2 }}>
              {pct < 50 ? tx.noteLow : tx.noteHigh}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{ background: "var(--surface-raised)", boxShadow: "var(--shadow-sm)", borderRadius: "var(--radius-pill)", padding: "8px 18px", fontWeight: 700, fontSize: 14, color: "var(--text-strong)" }}>
            {tx.day}
          </span>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 20, top: 6, bottom: 10, width: 0, borderLeft: "2px dashed var(--border-default)" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {items.map((it, i) => {
              const popping = i === pop;
              return (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start",
                  transform: popping ? "scale(1.0)" : "none" }}>
                  <TimelineNode item={it} solid={popping}></TimelineNode>
                  <div className="tg-card" style={{ flex: 1, padding: "13px 16px",
                    border: popping ? "1.5px solid var(--border-brand)" : "1px solid transparent",
                    boxShadow: popping ? "var(--shadow-brand)" : "var(--shadow-card)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 16, color: "var(--text-strong)" }}>
                      <span>{it.emoji}</span>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.title}</span>
                      {popping && <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 800, color: "var(--sage-700)", background: "var(--sage-100)", borderRadius: 999, padding: "3px 9px", whiteSpace: "nowrap" }}>{tx.novo}</span>}
                    </div>
                    <div style={{ fontSize: 13.5, color: "var(--text-muted)", marginTop: 3 }}>{it.time} · {it.meta}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- chat screen */

function AgentHeader() {
  return (
    <div style={{ flexShrink: 0, background: "var(--gradient-header)", padding: "8px 18px 14px", display: "flex", alignItems: "center", gap: 12, color: "var(--text-on-dark)" }}>
      <window.VIcon name="chevron-left" size={24} style={{ color: "#fff" }}></window.VIcon>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.4)", display: "grid", placeItems: "center", color: "#fff" }}>
        <VSparkle size={24}></VSparkle>
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, lineHeight: 1.05, whiteSpace: "nowrap" }}>{TX().agentName}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, marginTop: 3, opacity: 0.95 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }}></span>{TX().online}
        </div>
      </div>
    </div>
  );
}

// stage: 0 user only · 1 typing · 2+ reply with (stage-2) lines revealed
function ChatScreen({ stage = 0, linesShown = 0, showReply = false, typing = false }) {
  const { ChatBubble } = T();
  const tx = TX();
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--surface-canvas)" }}>
      <AgentHeader></AgentHeader>
      <div style={{ flex: 1, overflow: "hidden", padding: "18px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        <ChatBubble from="user">{tx.chatUser}</ChatBubble>
        {typing && (
          <div style={{ alignSelf: "flex-start", background: "var(--surface-card)", borderRadius: "var(--radius-xl)", padding: "14px 18px", boxShadow: "var(--shadow-card)", display: "flex", gap: 6 }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--slate-400)" }}></span>)}
          </div>
        )}
        {showReply && (
          <ChatBubble from="agent">
            <div>
              <p style={{ marginBottom: 8 }}>{tx.chatLead}</p>
              <p style={{ fontWeight: 800, color: "var(--text-strong)", marginBottom: 6 }}>{tx.chatHead}</p>
              <p style={{ lineHeight: 1.7 }}>
                {tx.planLines.slice(0, linesShown).map(([t, d], i) => (
                  <React.Fragment key={i}><b>{t}</b> – {d}{i < linesShown - 1 ? <br></br> : null}</React.Fragment>
                ))}
              </p>
            </div>
          </ChatBubble>
        )}
      </div>
      <div style={{ flexShrink: 0, padding: "10px 16px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--surface-raised)", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-card)", padding: "8px 8px 8px 20px" }}>
          <span style={{ flex: 1, fontSize: 15, color: "var(--text-placeholder)", fontFamily: "var(--font-sans)" }}>{tx.composer}</span>
          <span style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--brand)", color: "#fff", display: "grid", placeItems: "center" }}>
            <window.VIcon name="send" size={19}></window.VIcon>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------- floating overlays ---- */

// Booking-confirmation email that flies in, then forwards into the app.
function EmailCard({ flyT = 0 }) {
  // flyT 0..1: 0 = resting at top, 1 = shrunk + dropped into phone
  const scale = lerp(1, 0.28, Easing.easeInCubic(flyT));
  const ty = lerp(0, 520, Easing.easeInCubic(flyT));
  const op = flyT > 0.7 ? lerp(1, 0, (flyT - 0.7) / 0.3) : 1;
  return (
    <div style={{ width: 360, background: "var(--surface-raised)", borderRadius: 22, boxShadow: "0 30px 70px -24px rgba(44,46,68,0.5)",
      overflow: "hidden", transform: `translateY(${ty}px) scale(${scale})`, opacity: op, transformOrigin: "center top" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "16px 18px", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--sand-100)", display: "grid", placeItems: "center", color: "var(--sand-700)" }}>
          <window.VIcon name="plane" size={22}></window.VIcon>
        </div>
        <div style={{ lineHeight: 1.2 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 16, color: "var(--text-strong)" }}>LATAM Airlines</div>
          <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{TX().email.sub}</div>
        </div>
      </div>
      <div style={{ padding: "14px 18px 16px" }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)" }}>{TX().email.when}</div>
        <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8, background: "var(--gradient-ai)", color: "#fff",
          borderRadius: 999, padding: "10px 16px", fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 14, width: "fit-content" }}>
          <window.VIcon name="forward" size={16}></window.VIcon> {TX().email.cta}
        </div>
      </div>
    </div>
  );
}

// Small in-app toast pill.
function Toast({ icon = "check", children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, background: "var(--slate-900)", color: "#fff",
      borderRadius: 999, padding: "12px 20px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16,
      boxShadow: "0 18px 40px -16px rgba(0,0,0,0.5)" }}>
      <window.VIcon name={icon} size={18} style={{ color: "var(--sage-300)" }}></window.VIcon>{children}
    </div>
  );
}

// Caption shown above the phone, per beat. Reads its own copy live from the
// dictionary (by index) so language changes propagate even when the parent
// caption band doesn't re-render.
function Caption({ idx }) {
  const { progress } = useSprite();
  const b = TX().beats[idx] || { eyebrow: "", title: "" };
  const o = clamp(progress < 0.12 ? progress / 0.12 : progress > 0.9 ? 1 - (progress - 0.9) / 0.1 : 1, 0, 1);
  const ty = (1 - clamp(progress / 0.12, 0, 1)) * 18;
  return (
    <div style={{ position: "absolute", left: 80, right: 80, top: 150, textAlign: "center", opacity: o, transform: `translateY(${ty}px)` }}>
      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, letterSpacing: "0.16em", color: "var(--terracotta-500)", marginBottom: 14 }}>{b.eyebrow}</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 68, lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--slate-800)", textWrap: "balance" }}>{b.title}</div>
    </div>
  );
}

Object.assign(window, {
  PhoneShell, Layer, TripsScreen, TimelineScreen, ChatScreen,
  EmailCard, Toast, Caption, DAY_ICONS, TX,
});
