/* global React */
// Tragitto usage demo — master composition. Persistent phone, time-gated
// screen layers, per-beat captions, and floating overlays.

const { clamp, interpolate, animate, Easing, useTime, Sprite } = window;
const E = Easing;

const BEATS = [
  { t0: 0.0,  t1: 6.0 },
  { t0: 6.0,  t1: 12.2 },
  { t0: 12.2, t1: 17.6 },
  { t0: 17.6, t1: 22.6 },
];
const END0 = 22.6, DURATION = 26;

/* ----- beat-driven inner content ---------------------------------------- */

function ChatBeat({ t0 }) {
  const t = useTime() - t0;                 // local seconds within the beat
  const typing = t > 1.0 && t < 2.4;
  const showReply = t >= 2.4;
  const linesShown = clamp(Math.floor((t - 2.7) / 0.42) + 1, 0, window.TX().planLines.length);
  return <window.ChatScreen typing={typing} showReply={showReply} linesShown={linesShown}></window.ChatScreen>;
}

function TimelineBeat({ t0 }) {
  const t = useTime() - t0;
  const N = window.DAY_ICONS.length;
  const visible = clamp(Math.floor(t / 0.7) + 1, 1, N);
  const pop = visible - 1 < N && (t - (visible - 1) * 0.7) < 0.6 ? visible - 1 : -1;
  const pct = interpolate([0.3, 3.8], [24, 86], E.easeOutCubic)(t);
  return <window.TimelineScreen visible={visible} pop={pop} pct={pct}></window.TimelineScreen>;
}

/* ----- floating overlays (live in phone coordinate space) --------------- */

function EmailOverlay({ t0 }) {
  const t = useTime();
  if (t < t0 - 0.4 || t > t0 + 4.6) return null;
  const appear = clamp((t - t0) / 0.5, 0, 1);          // slide+fade in
  const fly = animate({ from: 0, to: 1, start: t0 + 2.4, end: t0 + 3.7, ease: E.easeInCubic })(t);
  const topY = lerpV(-26, 150, E.easeOutBack(appear));
  return (
    <div style={{ position: "absolute", left: 15, right: 15, top: topY, display: "flex", justifyContent: "center",
      opacity: appear, zIndex: 40, pointerEvents: "none" }}>
      <window.EmailCard flyT={fly}></window.EmailCard>
    </div>
  );
}

function ToastOverlay({ at, until, icon }) {
  const t = useTime();
  if (t < at - 0.3 || t > until + 0.4) return null;
  const inn = clamp((t - at) / 0.35, 0, 1);
  const out = t > until ? clamp((t - until) / 0.4, 0, 1) : 0;
  const o = Math.min(inn, 1 - out);
  const ty = lerpV(26, 0, E.easeOutBack(inn)) + out * 18;
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 70, display: "flex", justifyContent: "center",
      opacity: o, transform: `translateY(${ty}px)`, zIndex: 45 }}>
      <window.Toast icon={icon}>{window.TX().toast}</window.Toast>
    </div>
  );
}

function FollowerOverlay({ t0, until = Infinity }) {
  const t = useTime();
  if (t < t0 - 0.3 || t > until + 0.5) return null;
  const inn = clamp((t - t0) / 0.5, 0, 1);
  const out = until !== Infinity && t > until ? clamp((t - until) / 0.5, 0, 1) : 0;
  const ty = lerpV(140, 0, E.easeOutBack(inn)) + out * 60;
  return (
    <div style={{ position: "absolute", left: 14, right: 14, bottom: 22, opacity: clamp(inn * 1.4, 0, 1) * (1 - out),
      transform: `translateY(${ty}px)`, zIndex: 45 }}>
      <div style={{ background: "var(--surface-raised)", borderRadius: 22, boxShadow: "0 26px 60px -22px rgba(44,46,68,0.5)",
        padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "var(--sage-200)", color: "var(--sage-700)", display: "grid", placeItems: "center", fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 19, border: "2.5px solid var(--sage-400)" }}>M</div>
          <span style={{ position: "absolute", right: -2, bottom: -2, width: 16, height: 16, borderRadius: "50%", background: "var(--sage-500)", border: "2.5px solid var(--surface-raised)" }}></span>
        </div>
        <div style={{ flex: 1, lineHeight: 1.25 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 16.5, color: "var(--text-strong)" }}>{window.TX().follower.name}</div>
          <div style={{ fontSize: 13.5, color: "var(--text-muted)" }}>{window.TX().follower.sub}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--sage-100)", color: "var(--sage-700)",
          borderRadius: 999, padding: "8px 13px", fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 13 }}>
          <window.VIcon name="shield-check" size={16}></window.VIcon>{window.TX().follower.safe}
        </div>
      </div>
    </div>
  );
}

const lerpV = (a, b, t) => a + (b - a) * t;

// Dev/QA seek hook — lets tooling jump the playhead deterministically.
function Probe() {
  const tl = window.useTimeline();
  React.useEffect(() => {
    window.__seek = (t) => { tl.setPlaying(false); tl.setTime(t); };
    window.__play = () => tl.setPlaying(true);
  });
  return null;
}

/* ----- caption band ------------------------------------------------------ */

function Captions() {
  return (
    <React.Fragment>
      {BEATS.map((b, i) => (
        <Sprite key={i} start={b.t0} end={b.t1}>
          <window.Caption idx={i}></window.Caption>
        </Sprite>
      ))}
    </React.Fragment>
  );
}

/* ----- end card ---------------------------------------------------------- */

function EndCard() {
  const t = useTime();
  if (t < END0 - 0.4) return null;
  const p = clamp((t - END0) / 0.6, 0, 1);
  const tail = clamp((DURATION - t) / 0.6, 0, 1);   // fade out before the loop
  const rise = lerpV(40, 0, E.easeOutCubic(p));
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 60, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      background: "linear-gradient(158deg, var(--terracotta-600) 0%, var(--terracotta-700) 100%)",
      opacity: Math.min(p, tail) }}>
      <div style={{ transform: `translateY(${rise}px)`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg viewBox="0 0 100 102" width="118" height="118" fill="none" aria-hidden="true">
          <line x1="21" y1="19" x2="79" y2="19" stroke="#fff" strokeWidth="16" strokeLinecap="round"></line>
          <circle cx="50" cy="42" r="6.5" fill="#fff"></circle>
          <circle cx="50" cy="60" r="6.5" fill="#fff"></circle>
          <circle cx="50" cy="83" r="8.5" stroke="#f2cc8f" strokeWidth="6"></circle>
        </svg>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 132, lineHeight: 1, letterSpacing: "-0.03em", color: "#fff", marginTop: 28 }}>Tragitto</div>
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 42, color: "#fff", opacity: 0.96, marginTop: 24 }}>{window.TX().endTagline}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 13, marginTop: 54, color: "rgba(255,255,255,0.95)" }}>
          <window.VIcon name="apple" size={34}></window.VIcon>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 32 }}>{window.TX().stores}</span>
          <window.VIcon name="play" size={30}></window.VIcon>
        </div>
      </div>
    </div>
  );
}

/* ----- progress dots ----------------------------------------------------- */

function BeatDots() {
  const t = useTime();
  if (t >= END0) return null;
  const active = BEATS.findIndex((b) => t < b.t1);
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 64, display: "flex", justifyContent: "center", gap: 12, zIndex: 50 }}>
      {BEATS.map((b, i) => (
        <span key={i} style={{ height: 6, borderRadius: 999, transition: "none",
          width: i === active ? 44 : 6,
          background: i === active ? "var(--terracotta-500)" : "var(--slate-300)" }}></span>
      ))}
    </div>
  );
}

/* ----- the scene --------------------------------------------------------- */

function Scene() {
  const B = BEATS;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden",
      background: "radial-gradient(120% 80% at 50% 0%, var(--cream) 0%, var(--cream-deep) 70%)" }}>
      <Captions></Captions>

      <div style={{ position: "absolute", top: 372, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 10 }}>
        <div style={{ width: 390, height: 844, transform: "scale(1.46)", transformOrigin: "top center", position: "relative" }}>
          <window.PhoneShell>
            <window.Layer start={B[0].t0} end={B[0].t1} z={1}><window.TripsScreen liftIndex={-1}></window.TripsScreen></window.Layer>
            <window.Layer start={B[1].t0} end={B[1].t1} z={2}><ChatBeat t0={B[1].t0}></ChatBeat></window.Layer>
            <window.Layer start={B[2].t0} end={B[2].t1} z={3}><TimelineBeat t0={B[2].t0}></TimelineBeat></window.Layer>
            <window.Layer start={B[3].t0} end={B[3].t1 + 0.3} z={4}><window.TimelineScreen visible={5} pct={86} group></window.TimelineScreen></window.Layer>
          </window.PhoneShell>

          <EmailOverlay t0={B[0].t0 + 0.8}></EmailOverlay>
          <ToastOverlay at={B[0].t0 + 4.4} until={B[0].t1 - 0.3} icon="check"></ToastOverlay>
          <FollowerOverlay t0={B[3].t0 + 1.4}></FollowerOverlay>
        </div>
      </div>

      <BeatDots></BeatDots>
      <EndCard></EndCard>
      <Probe></Probe>
    </div>
  );
}

/* ----- hero scene (landing-page loop) ------------------------------------
   Phone content only — no captions, no end card, no beat dots. The phone is
   enlarged and centered, and the last beat crossfades back to the first screen
   so the time-reset loop is seamless. */

const HERO_DURATION = 24.6;          // beats run 0→22.6, then ~2s loop-return

function HeroReturn() {
  // Re-shows the Trips screen on top as the final beat ends, landing fully
  // opaque at the wrap so t=HERO_DURATION matches t=0.
  const t = useTime();
  const inn = clamp((t - 22.7) / 1.1, 0, 1);          // fade in 22.7 → 23.8
  if (inn <= 0.001) return null;
  return (
    <div style={{ position: "absolute", inset: 0, opacity: inn, zIndex: 6, background: "var(--surface-canvas)" }}>
      <window.TripsScreen liftIndex={-1}></window.TripsScreen>
    </div>
  );
}

function HeroScene() {
  const B = BEATS;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
      background: "transparent" }}>
      <div style={{ width: 390, height: 844, transform: "scale(2.12)", transformOrigin: "center", position: "relative", flexShrink: 0 }}>
        <window.PhoneShell>
          <window.Layer start={B[0].t0} end={B[0].t1} z={1}><window.TripsScreen liftIndex={-1}></window.TripsScreen></window.Layer>
          <window.Layer start={B[1].t0} end={B[1].t1} z={2}><ChatBeat t0={B[1].t0}></ChatBeat></window.Layer>
          <window.Layer start={B[2].t0} end={B[2].t1} z={3}><TimelineBeat t0={B[2].t0}></TimelineBeat></window.Layer>
          <window.Layer start={B[3].t0} end={B[3].t1 + 0.3} z={4}><window.TimelineScreen visible={5} pct={86} group></window.TimelineScreen></window.Layer>
          <HeroReturn></HeroReturn>
        </window.PhoneShell>

        <EmailOverlay t0={B[0].t0 + 0.8}></EmailOverlay>
        <ToastOverlay at={B[0].t0 + 4.4} until={B[0].t1 - 0.3} icon="check"></ToastOverlay>
        <FollowerOverlay t0={B[3].t0 + 1.4} until={22.5}></FollowerOverlay>
      </div>
      <Probe></Probe>
    </div>
  );
}

window.TragittoVideo = { Scene, DURATION, HeroScene, HERO_DURATION };
