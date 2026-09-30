(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // assets/index-Byh2tMir.js
  var index_Byh2tMir_exports = {};
  __export(index_Byh2tMir_exports, {
    component: () => M
  });
  function A({ jackpot: s }) {
    return Z.jsxs("header", { className: "w-full", children: [Z.jsxs("div", { className: "bg-[#0b2a5e] text-white text-[11px] px-4 py-1.5 flex items-center justify-between", children: [Z.jsxs("div", { className: "flex items-center gap-3", children: [Z.jsx("span", { children: "\u{1F4DE} 0861 101 101" }), Z.jsx("span", { className: "hidden sm:inline", children: "\u2709 info@nationallottery.co.za" })] }), Z.jsx("span", { className: "text-[#f4b400] font-semibold hidden sm:inline", children: "Official Licensed National Lottery" })] }), Z.jsxs("div", { className: "px-4 py-3 flex items-center justify-between gap-3", style: { background: "linear-gradient(90deg,#0b3a82 0%,#1556b8 60%,#0e8a3a 100%)" }, children: [Z.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [Z.jsx("img", { src: S, alt: "National Lottery", className: "h-9 md:h-11 bg-white rounded-md p-1 shrink-0" }), Z.jsx("div", { className: "text-white font-bold text-sm md:text-lg leading-tight truncate", children: "South African National Lottery" })] }), s && Z.jsxs("div", { className: "bg-[#f4b400] text-[#0b1b2b] rounded-md px-3 py-1.5 shadow-md text-right shrink-0", children: [Z.jsx("div", { className: "text-[9px] uppercase font-semibold tracking-wide leading-none", children: "\u{1F3C6} Jackpot Prize" }), Z.jsx("div", { className: "text-sm md:text-base font-extrabold leading-tight mt-0.5", children: s })] })] }), Z.jsx("div", { className: "h-0.5 bg-gradient-to-r from-[#f4b400] via-[#1556b8] to-[#0e8a3a]" })] });
  }
  function R({ onConfirm: s }) {
    return Z.jsx("div", { className: "fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4", children: Z.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 text-center animate-in fade-in zoom-in duration-300", children: [Z.jsx("div", { className: "mx-auto w-20 h-20 rounded-full bg-[#e30613] text-white flex items-center justify-center text-2xl font-extrabold border-4 border-[#0b1b2b]", children: "18+" }), Z.jsx("h2", { className: "mt-4 text-lg font-extrabold text-[#0b1b2b]", children: "Age Verification" }), Z.jsxs("p", { className: "text-xs text-[#3a4756] mt-2", children: ["This site is restricted to adults. By continuing, you confirm that you are", Z.jsx("b", { children: " 18 years of age or older" }), " and legally allowed to participate in lottery activities in your country."] }), Z.jsx("p", { className: "text-[10px] text-[#6b7785] mt-2", children: "Play responsibly. National Responsible Gambling Programme \u2014 0800 006 008." }), Z.jsxs("div", { className: "mt-5 flex flex-col gap-2", children: [Z.jsx("button", { onClick: s, className: "w-full bg-[#0e8a3a] hover:bg-[#0a6e2c] text-white font-bold text-sm py-3 rounded-md transition", children: "\u2713 I am 18 or older \u2014 Enter" }), Z.jsx("a", { href: "https://www.google.com", className: "w-full bg-gray-200 hover:bg-gray-300 text-[#0b1b2b] font-semibold text-xs py-2.5 rounded-md transition", children: "I am under 18 \u2014 Exit" })] })] }) });
  }
  function M() {
    const [s, a] = et.useState("prizes"), [n, r] = et.useState(""), [i, t] = et.useState(""), [d, m] = et.useState(null), [c, b2] = et.useState(0), [o, p] = et.useState(""), [x, g] = et.useState(""), [j, N] = et.useState(""), [u, h] = et.useState(false);
    et.useEffect(() => {
      typeof window < "u" && localStorage.getItem("ageConfirmed18") === "1" && h(true);
    }, []);
    function w() {
      typeof window < "u" && localStorage.setItem("ageConfirmed18", "1"), h(true);
    }
    return Z.jsxs("div", { className: "min-h-screen bg-[#eef3fb] font-sans text-[14px]", children: [!u && Z.jsx(R, { onConfirm: w }), Z.jsx(A, { jackpot: "R 150,000,000" }), s === "prizes" && Z.jsx(T2, { name: n, phone: i, setName: r, setPhone: t, selected: d, setSelected: m, onNext: () => a("spin") }), s === "spin" && d && Z.jsx(P, { name: n, prize: d, onWin: () => a("bank") }), s === "bank" && Z.jsx(B, { prize: f, bank: o, setBank: p, accountNumber: x, setAccountNumber: g, accountHolder: j, setAccountHolder: N, defaultHolder: n, onSubmit: () => a("processing") }), s === "processing" && Z.jsx(z, { bank: o, onDone: () => a("approved") }), s === "approved" && Z.jsx(D, { bank: o, name: n, prize: f, onContinue: () => a("vsl") }), s === "vsl" && Z.jsx(O, { name: n, bank: o, prize: f }), Z.jsx(I, {})] });
  }
  function I() {
    return Z.jsx("footer", { className: "bg-[#0b2a5e] text-white mt-10 px-4 py-6", children: Z.jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs", children: [Z.jsxs("div", { children: [Z.jsx("p", { className: "font-bold text-sm mb-1", children: "Customer Support" }), Z.jsx("p", { children: "\u{1F4DE} 0861 101 101" })] }), Z.jsxs("div", { children: [Z.jsx("p", { className: "font-bold text-sm mb-1", children: "Security" }), Z.jsx("p", { children: "\u{1F6E1} Licensed Draws" })] }), Z.jsxs("div", { children: [Z.jsx("p", { className: "font-bold text-sm mb-1", children: "About Us" }), Z.jsx("p", { className: "text-white/80", children: "Official lottery platform in South Africa. Transparency and security guaranteed." })] })] }) });
  }
  function T2({ name: s, phone: a, setName: n, setPhone: r, selected: i, setSelected: t, onNext: d }) {
    const m = s.trim().length >= 2 && a.replace(/\D/g, "").length >= 9 && i;
    return Z.jsx("main", { className: "max-w-xl mx-auto px-4 py-5", children: Z.jsxs("div", { className: "bg-white rounded-lg shadow-md p-5", children: [Z.jsxs("div", { className: "text-center", children: [Z.jsx("span", { className: "inline-block text-[#1d4ea8] text-2xl", children: "\u{1F3C6}" }), Z.jsx("h2", { className: "text-base font-bold text-[#0b1b2b] mt-1", children: "YOU HAVE THE CHANCE TO WIN ONE OF THESE PRIZES" }), Z.jsx("p", { className: "text-xs text-[#3a4756] mt-1", children: "Enter your details and pick the prize you want to win." })] }), Z.jsxs("div", { className: "mt-4 grid grid-cols-1 gap-3", children: [Z.jsxs("div", { children: [Z.jsx("label", { className: "block text-xs font-semibold text-[#0b1b2b] mb-1", children: "Full name" }), Z.jsx("input", { value: s, onChange: (c) => n(c.target.value), placeholder: "e.g. Thabo Mokoena", className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:border-[#1d4ea8] focus:ring-1 focus:ring-[#1d4ea8] outline-none" })] }), Z.jsxs("div", { children: [Z.jsx("label", { className: "block text-xs font-semibold text-[#0b1b2b] mb-1", children: "Phone number" }), Z.jsx("input", { value: a, onChange: (c) => r(c.target.value), placeholder: "e.g. 071 234 5678", inputMode: "tel", className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:border-[#1d4ea8] focus:ring-1 focus:ring-[#1d4ea8] outline-none" })] })] }), Z.jsx("p", { className: "text-xs font-semibold text-[#0b1b2b] mt-5 mb-2", children: "Choose your desired prize:" }), Z.jsx("div", { className: "space-y-2", children: E.map((c) => {
      const b2 = i?.rank === c.rank;
      return Z.jsxs("button", { onClick: () => t(c), className: `w-full flex items-center justify-between px-3 py-2.5 rounded-md border text-sm transition ${b2 ? "bg-[#e8f0ff] border-[#1d4ea8] ring-2 ring-[#1d4ea8]/30" : "bg-[#f6fbff] border-[#d6e4f5] hover:border-[#1d4ea8]"}`, children: [Z.jsxs("span", { className: "flex items-center gap-2 text-[#0b1b2b]", children: [Z.jsx("span", { className: "text-lg", children: c.icon }), Z.jsx("span", { className: "font-medium", children: c.rank })] }), Z.jsx("span", { className: "font-bold text-[#0b1b2b]", children: c.label })] }, c.rank);
    }) }), Z.jsx("button", { disabled: !m, onClick: d, className: "mt-5 w-full bg-[#1d4ea8] disabled:bg-gray-300 hover:bg-[#163d82] text-white font-bold text-sm py-3 rounded-md transition flex items-center justify-center gap-2", children: "\u2B50 ENTER THE DRAW" }), Z.jsx("p", { className: "text-[10px] text-[#6b7785] text-center mt-2", children: "\u{1F512} Secure & confidential" })] }) });
  }
  function P({ name: s, prize: a, onWin: n }) {
    const [r, i] = et.useState(null), [t, d] = et.useState(false), [m, c] = et.useState([null, null, null, null, null]), [b2, o] = et.useState(false);
    function p(x) {
      if (t || r !== null) return;
      i(x), d(true);
      const N = [...[3, 7, 12, 19, 24, 31, 38, 42, 47, 9, 15, 22, 28, 36].filter((u) => u !== x).sort(() => 0.5 - Math.random()).slice(0, 4), x];
      N.forEach((u, h) => {
        setTimeout(() => {
          c((w) => {
            const k = [...w];
            return k[h] = u, k;
          }), h === N.length - 1 && setTimeout(() => {
            d(false), o(true);
          }, 600);
        }, 1e3 + h * 1100);
      });
    }
    return Z.jsx("main", { className: "max-w-xl mx-auto px-4 py-5", children: Z.jsxs("div", { className: "bg-white rounded-lg shadow-md p-4 text-center", children: [Z.jsxs("p", { className: "text-xs text-[#6b7785]", children: ["Hello, ", Z.jsx("b", { className: "text-[#0b1b2b]", children: s.split(" ")[0] })] }), Z.jsxs("h2", { className: "text-sm font-bold text-[#0b1b2b] mt-1", children: ["You are competing for ", Z.jsx("span", { className: "text-[#1d4ea8]", children: a.rank })] }), Z.jsx("p", { className: "text-base font-extrabold text-[#0e8a3a]", children: a.label }), Z.jsx("p", { className: "text-xs text-[#3a4756] mt-1", children: r === null ? "Pick your lucky number for the official draw:" : t ? "\u{1F3B2} Drawing the official lottery numbers..." : "Draw completed!" }), Z.jsxs("div", { className: "mt-4 bg-gradient-to-br from-[#0b3a82] to-[#1d4ea8] rounded-lg p-4 shadow-inner", children: [Z.jsxs("div", { className: "flex items-center justify-between text-white text-[10px] uppercase tracking-wide mb-2", children: [Z.jsx("span", { children: "\u{1F534} LIVE DRAW" }), Z.jsxs("span", { className: "font-mono", children: ["#", Math.floor(Math.random() * 9e3) + 1e3] })] }), Z.jsx("div", { className: "flex items-center justify-center gap-2", children: m.map((x, g) => {
      const j = b2 && x === r;
      return Z.jsx("div", { className: `w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-extrabold text-lg shadow-lg border-2 transition-all duration-500 ${x === null ? "bg-[#0b1b2b]/40 border-white/20 text-white/30 animate-pulse" : j ? "bg-[#f4b400] border-white text-[#0b1b2b] scale-110" : "bg-white border-white text-[#0b1b2b]"}`, children: x ?? "?" }, g);
    }) }), r !== null && Z.jsxs("p", { className: "text-white/90 text-[11px] mt-3", children: ["Your number: ", Z.jsx("b", { className: "text-[#f4b400]", children: r })] })] }), r === null && Z.jsxs("div", { className: "mt-5", children: [Z.jsx("p", { className: "text-xs font-semibold text-[#0b1b2b] mb-2", children: "Choose your lucky number:" }), Z.jsx("div", { className: "grid grid-cols-5 gap-1.5 max-w-xs mx-auto", children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => Z.jsx("button", { onClick: () => p(x), className: "aspect-square rounded-full font-bold text-sm shadow-sm bg-white hover:bg-[#1d4ea8] hover:text-white text-[#0b1b2b] border border-[#1d4ea8] transition", children: x }, x)) })] }), b2 && Z.jsx("div", { className: "mt-5 animate-in fade-in zoom-in duration-500", children: Z.jsxs("div", { className: "bg-[#e8f7ee] border border-[#0e8a3a] rounded-md p-4", children: [Z.jsx("p", { className: "text-2xl", children: "\u{1F389}" }), Z.jsx("h3", { className: "text-base font-extrabold text-[#0e8a3a] mt-1", children: "CONGRATULATIONS!" }), Z.jsxs("p", { className: "text-xs text-[#3a4756] mt-1", children: ["Your number ", Z.jsx("b", { className: "text-[#1d4ea8]", children: r }), " was drawn! You won the"] }), Z.jsx("p", { className: "text-sm font-bold text-[#0b1b2b] mt-1", children: f.rank }), Z.jsx("p", { className: "text-2xl font-extrabold text-[#e30613] my-1", children: f.label }), Z.jsx("button", { onClick: n, className: "mt-3 w-full bg-[#0e8a3a] hover:bg-[#0a6e2c] text-white font-bold text-sm py-3 rounded-md", children: "CLAIM MY PRIZE \u2192" })] }) })] }) });
  }
  function v({ b: s, size: a = "md" }) {
    const n = a === "sm" ? "w-7 h-7 text-[9px]" : "w-9 h-9 text-[10px]";
    return Z.jsx("span", { className: `${n} rounded-md flex items-center justify-center font-extrabold shrink-0 shadow-sm`, style: { background: s.color, color: s.textColor ?? "#fff" }, children: s.short });
  }
  function B({ prize: s, bank: a, setBank: n, accountNumber: r, setAccountNumber: i, accountHolder: t, setAccountHolder: d, defaultHolder: m, onSubmit: c }) {
    et.useEffect(() => {
      t || d(m);
    }, []);
    const b2 = a && r.replace(/\D/g, "").length >= 6 && t.trim().length >= 2;
    return Z.jsxs("main", { className: "max-w-xl mx-auto px-4 py-5", children: [Z.jsxs("div", { className: "bg-[#0e8a3a] text-white text-center py-2.5 px-4 rounded-t-lg text-sm font-bold", children: ["\u{1F4B0} PRIZE CONFIRMED: ", s.label] }), Z.jsxs("div", { className: "bg-white rounded-b-lg shadow-md p-5 border border-[#0e8a3a] border-t-0", children: [Z.jsx("h2", { className: "text-sm font-bold text-[#0b1b2b] text-center", children: "Where should we deposit your winnings?" }), Z.jsx("p", { className: "text-center text-xs text-[#3a4756] mt-1", children: "Select your South African bank and enter your account details." }), Z.jsx("p", { className: "text-xs font-semibold text-[#0b1b2b] mt-4 mb-2", children: "Select your bank:" }), Z.jsx("div", { className: "grid grid-cols-2 gap-2", children: y.map((o) => {
      const p = a === o.name;
      return Z.jsxs("button", { onClick: () => n(o.name), className: `flex items-center gap-2 px-2.5 py-2 rounded-md border text-xs transition ${p ? "bg-[#e8f0ff] border-[#1d4ea8] ring-2 ring-[#1d4ea8]/30" : "bg-white border-gray-300 hover:border-[#1d4ea8]"}`, children: [Z.jsx(v, { b: o, size: "sm" }), Z.jsx("span", { className: "font-semibold text-[#0b1b2b] truncate", children: o.name })] }, o.name);
    }) }), Z.jsxs("div", { className: "mt-4 space-y-3", children: [Z.jsxs("div", { children: [Z.jsx("label", { className: "block text-xs font-semibold text-[#0b1b2b] mb-1", children: "Account holder" }), Z.jsx("input", { value: t, onChange: (o) => d(o.target.value), className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:border-[#1d4ea8] focus:ring-1 focus:ring-[#1d4ea8] outline-none" })] }), Z.jsxs("div", { children: [Z.jsx("label", { className: "block text-xs font-semibold text-[#0b1b2b] mb-1", children: "Account number" }), Z.jsx("input", { value: r, onChange: (o) => i(o.target.value), inputMode: "numeric", placeholder: "e.g. 1234567890", className: "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:border-[#1d4ea8] focus:ring-1 focus:ring-[#1d4ea8] outline-none" })] }), Z.jsx("button", { disabled: !b2, onClick: c, className: "w-full bg-[#0e8a3a] disabled:bg-gray-300 hover:bg-[#0a6e2c] text-white font-bold text-sm py-3 rounded-md", children: "PROCESS MY DEPOSIT \u2192" }), Z.jsx("p", { className: "text-[10px] text-[#6b7785] text-center", children: "\u{1F512} Bank-level encryption \xB7 SSL secured" })] })] })] });
  }
  function z({ bank: s, onDone: a }) {
    const [n, r] = et.useState(0), i = [`Connecting to ${s}...`, "Verifying account details...", "Validating with SARB...", "Preparing transfer..."];
    return et.useEffect(() => {
      if (n < i.length - 1) {
        const t = setTimeout(() => r(n + 1), 1100);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(a, 1300);
        return () => clearTimeout(t);
      }
    }, [n]), Z.jsx("main", { className: "max-w-md mx-auto px-4 py-12 text-center", children: Z.jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [Z.jsx("div", { className: "w-12 h-12 border-4 border-[#1d4ea8] border-t-transparent rounded-full animate-spin mx-auto" }), Z.jsx("h2", { className: "text-sm font-bold text-[#0b1b2b] mt-4", children: "Processing your deposit..." }), Z.jsx("p", { className: "text-xs text-[#3a4756] mt-1", children: i[n] }), Z.jsx("div", { className: "mt-4 space-y-1.5 text-left text-xs", children: i.slice(0, n + 1).map((t, d) => Z.jsxs("div", { className: "flex items-center gap-1.5 text-[#0e8a3a]", children: [Z.jsx("span", { children: "\u2713" }), Z.jsx("span", { children: t })] }, d)) })] }) });
  }
  function D({ bank: s, name: a, prize: n, onContinue: r }) {
    const i = y.find((t) => t.name === s);
    return Z.jsx("main", { className: "max-w-xl mx-auto px-4 py-5 text-center", children: Z.jsxs("div", { className: "bg-white rounded-lg shadow-md p-5 border-t-4 border-[#0e8a3a]", children: [Z.jsx("p", { className: "text-3xl", children: "\u2705" }), Z.jsx("h2", { className: "text-base font-extrabold text-[#0e8a3a] mt-1", children: "BANK APPROVED!" }), Z.jsxs("div", { className: "mt-3 flex items-center justify-center gap-2 bg-[#f6fbff] border border-[#d6e4f5] rounded-md p-2 mx-auto max-w-xs", children: [i && Z.jsx(v, { b: i, size: "sm" }), Z.jsxs("div", { className: "text-left", children: [Z.jsx("p", { className: "text-[10px] text-[#6b7785] uppercase font-semibold", children: "Verified" }), Z.jsx("p", { className: "text-xs font-bold text-[#0b1b2b]", children: s })] })] }), Z.jsxs("p", { className: "text-xs text-[#3a4756] mt-3", children: ["Your account has been verified, ", Z.jsx("b", { children: a.split(" ")[0] }), "."] }), Z.jsxs("div", { className: "mt-4 bg-[#fffbe6] border border-[#f4b400] rounded-md p-3 text-left", children: [Z.jsxs("p", { className: "text-xs font-bold text-[#0b1b2b]", children: ["\u26A0\uFE0F ONE LAST STEP TO UNLOCK YOUR ", n.label] }), Z.jsxs("p", { className: "text-[11px] text-[#3a4756] mt-1.5", children: ["For security reasons, watch a quick ", Z.jsx("b", { children: "30-second video" }), " to learn how to receive your money ", Z.jsx("b", { children: "instantly" }), ". After watching, the transfer will be released to your account."] })] }), Z.jsx("button", { onClick: r, className: "mt-4 w-full bg-[#e30613] hover:bg-[#b80510] text-white font-bold text-sm py-3 rounded-md animate-pulse", children: "\u25B6 WATCH VIDEO TO RECEIVE" })] }) });
  }
  function O({ name: s, bank: a, prize: n }) {
    const r = et.useRef(null), i = y.find((t) => t.name === a);
    return et.useEffect(() => {
      if (document.getElementById("vturb-script-6ab934b7db61a531226be07e")) return;
      const t = document.createElement("script");
      t.id = "vturb-script-6ab934b7db61a531226be07e", t.src = "https://scripts.converteai.net/41807d23-9a38-4f49-a717-2c8210bf4152/players/6ab934b7db61a531226be07e/v4/player.js", t.async = true, document.head.appendChild(t);
    }, []), Z.jsxs("main", { className: "max-w-3xl mx-auto px-4 py-5", children: [Z.jsxs("div", { className: "bg-white rounded-md shadow-sm p-3 border-l-4 border-[#0e8a3a] mb-4 flex items-center gap-3", children: [i && Z.jsx(v, { b: i }), Z.jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs flex-1 min-w-0", children: [Z.jsxs("div", { className: "min-w-0", children: [Z.jsx("p", { className: "text-[#6b7785] text-[10px] uppercase", children: "Name" }), Z.jsx("p", { className: "font-bold text-[#0b1b2b] truncate", children: s })] }), Z.jsxs("div", { className: "min-w-0", children: [Z.jsx("p", { className: "text-[#6b7785] text-[10px] uppercase", children: "Bank" }), Z.jsx("p", { className: "font-bold text-[#0b1b2b] truncate", children: a })] }), Z.jsxs("div", { className: "min-w-0", children: [Z.jsx("p", { className: "text-[#6b7785] text-[10px] uppercase", children: "Amount" }), Z.jsx("p", { className: "font-extrabold text-[#0e8a3a]", children: n.label })] })] })] }), Z.jsxs("h2", { className: "text-center text-base md:text-xl font-extrabold text-[#0b1b2b] leading-tight", children: ["WATCH UNTIL THE END TO RELEASE YOUR", " ", Z.jsx("span", { className: "text-[#0e8a3a]", children: n.label })] }), Z.jsxs("p", { className: "text-center text-xs md:text-sm text-[#3a4756] mt-2 max-w-2xl mx-auto", children: [Z.jsx("b", { children: s.split(" ")[0] }), ", your deposit to ", Z.jsx("b", { children: a }), " will be released as soon as you finish watching this short video."] }), Z.jsxs("div", { className: "mt-4 rounded-md border border-[#1d4ea8] bg-white shadow-md overflow-hidden", children: [Z.jsxs("div", { className: "flex items-center justify-between px-3 py-1.5 bg-white border-b text-[11px]", children: [Z.jsxs("span", { className: "inline-flex items-center gap-1.5 bg-[#e30613] text-white font-bold px-2 py-0.5 rounded-full", children: [Z.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse" }), " LIVE NOW"] }), Z.jsx("span", { className: "text-[#3a4756] font-semibold", children: "\u{1F465} 3,542 watching" })] }), Z.jsx("div", { ref: r, className: "p-1.5 bg-black", children: Z.jsx("div", { dangerouslySetInnerHTML: { __html: '<vturb-smartplayer id="vid-6ab934b7db61a531226be07e" style="display:block;margin:0 auto;width:100%;"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:50% 0 0;z-index:0;background-color:black;"></div></vturb-smartplayer>' } }) })] }), Z.jsxs("section", { className: "mt-8", children: [Z.jsx("h3", { className: "text-base font-bold text-[#0b1b2b]", children: "Comments" }), Z.jsx("p", { className: "text-xs text-[#3a4756] mt-0.5 mb-4", children: "What South African winners are saying:" }), Z.jsx("div", { className: "space-y-3", children: C.map((t) => Z.jsxs("div", { className: "bg-white rounded-md p-3 shadow-sm border border-[#e6e6e6] flex gap-3", children: [Z.jsx("img", { src: t.img, alt: t.name, className: "w-10 h-10 rounded-full object-cover shrink-0" }), Z.jsxs("div", { className: "flex-1 min-w-0", children: [Z.jsx("p", { className: "font-bold text-xs text-[#0b1b2b]", children: t.name }), Z.jsx("p", { className: "text-[#3a4756] mt-0.5 text-xs", children: t.text }), Z.jsxs("div", { className: "flex items-center gap-3 mt-1.5 text-[10px] text-[#6b7785]", children: [Z.jsx("span", { children: t.time }), Z.jsx("button", { className: "inline-flex items-center gap-1 hover:text-[#1d4ea8]", children: "\u{1F44D} Like" }), Z.jsx("span", { className: "font-semibold", children: t.likes })] })] })] }, t.name)) })] })] });
  }
  var S, E, f, y, C;
  var init_index_Byh2tMir = __esm({
    "assets/index-Byh2tMir.js"() {
      init_index_D_60NFQg();
      S = "./assets/lottery-logo-BJrl1m1_.png";
      E = [{ rank: "First Prize", label: "R 150,000,000", amount: 15e7, icon: "\u{1F947}" }, { rank: "Second Prize", label: "R 60,000,000", amount: 6e7, icon: "\u{1F948}" }, { rank: "Third Prize", label: "R 30,000,000", amount: 3e7, icon: "\u{1F949}" }, { rank: "Fourth Prize", label: "R 15,000,000", amount: 15e6, icon: "\u{1F3C6}" }, { rank: "Fifth Prize", label: "R 6,000,000", amount: 6e6, icon: "\u{1F3AF}" }];
      f = { rank: "Prize Won", label: "R 15,000.00", amount: 15e3, icon: "\u{1F3C6}" };
      y = [{ name: "ABSA", color: "#e30613", short: "A" }, { name: "Standard Bank", color: "#003c71", short: "SB" }, { name: "FNB", color: "#00966b", short: "FNB" }, { name: "Nedbank", color: "#006341", short: "N" }, { name: "Capitec", color: "#003c71", short: "C" }, { name: "Investec", color: "#1a1a1a", short: "I" }, { name: "African Bank", color: "#003b7a", short: "AB" }, { name: "TymeBank", color: "#ffc20e", short: "T", textColor: "#0b1b2b" }, { name: "Discovery Bank", color: "#003c71", short: "D" }, { name: "Bidvest Bank", color: "#c8102e", short: "B" }];
      C = [{ name: "Thandi Ngwenya", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", text: "I couldn't believe it was real! Just received R45,000 from the National Lottery!", time: "2h ago", likes: 127 }, { name: "Sipho Mkhize", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", text: "I was scared it might be a scam, but I followed the steps and it worked! Received R32,500!", time: "5h ago", likes: 89 }, { name: "Zanele Dlamini", img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", text: "Guys, this is real! I had R58,000 sitting unclaimed for months. Claimed in 3 days!", time: "7h ago", likes: 203 }, { name: "Mandla Nkosi", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", text: "My wife didn't believe me, but I showed her the proof of R73,500 I received!", time: "10h ago", likes: 312 }, { name: "Nomsa Khumalo", img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", text: "What a blessing! I claimed R28,750 that I had forgotten about.", time: "14h ago", likes: 156 }, { name: "Bongani Sithole", img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", text: "Just left the bank! R51,200 in my account! This saved my life!", time: "1d ago", likes: 445 }];
    }
  });

  // assets/index-D_60NFQg.js
  function L0(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  function U0() {
    if (Vm) return wi;
    Vm = 1;
    var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
    function s(u, c, f2) {
      var h = null;
      if (f2 !== void 0 && (h = "" + f2), c.key !== void 0 && (h = "" + c.key), "key" in c) {
        f2 = {};
        for (var m in c) m !== "key" && (f2[m] = c[m]);
      } else f2 = c;
      return c = f2.ref, { $$typeof: n, type: u, key: h, ref: c !== void 0 ? c : null, props: f2 };
    }
    return wi.Fragment = i, wi.jsx = s, wi.jsxs = s, wi;
  }
  function N0() {
    return Xm || (Xm = 1, $o.exports = U0()), $o.exports;
  }
  function j0() {
    if (Km) return ut;
    Km = 1;
    var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f2 = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), y2 = /* @__PURE__ */ Symbol.for("react.memo"), S2 = /* @__PURE__ */ Symbol.for("react.lazy"), v2 = /* @__PURE__ */ Symbol.for("react.activity"), _ = Symbol.iterator;
    function E2(w) {
      return w === null || typeof w != "object" ? null : (w = _ && w[_] || w["@@iterator"], typeof w == "function" ? w : null);
    }
    var A2 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C2 = Object.assign, R2 = {};
    function M2(w, G, J) {
      this.props = w, this.context = G, this.refs = R2, this.updater = J || A2;
    }
    M2.prototype.isReactComponent = {}, M2.prototype.setState = function(w, G) {
      if (typeof w != "object" && typeof w != "function" && w != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, w, G, "setState");
    }, M2.prototype.forceUpdate = function(w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    };
    function q() {
    }
    q.prototype = M2.prototype;
    function Q(w, G, J) {
      this.props = w, this.context = G, this.refs = R2, this.updater = J || A2;
    }
    var H = Q.prototype = new q();
    H.constructor = Q, C2(H, M2.prototype), H.isPureReactComponent = true;
    var F = Array.isArray;
    function k() {
    }
    var X = { H: null, A: null, T: null, S: null }, K = Object.prototype.hasOwnProperty;
    function I2(w, G, J) {
      var W = J.ref;
      return { $$typeof: n, type: w, key: G, ref: W !== void 0 ? W : null, props: J };
    }
    function st(w, G) {
      return I2(w.type, G, w.props);
    }
    function nt(w) {
      return typeof w == "object" && w !== null && w.$$typeof === n;
    }
    function mt(w) {
      var G = { "=": "=0", ":": "=2" };
      return "$" + w.replace(/[=:]/g, function(J) {
        return G[J];
      });
    }
    var xt = /\/+/g;
    function Gt(w, G) {
      return typeof w == "object" && w !== null && w.key != null ? mt("" + w.key) : G.toString(36);
    }
    function Nt(w) {
      switch (w.status) {
        case "fulfilled":
          return w.value;
        case "rejected":
          throw w.reason;
        default:
          switch (typeof w.status == "string" ? w.then(k, k) : (w.status = "pending", w.then(function(G) {
            w.status === "pending" && (w.status = "fulfilled", w.value = G);
          }, function(G) {
            w.status === "pending" && (w.status = "rejected", w.reason = G);
          })), w.status) {
            case "fulfilled":
              return w.value;
            case "rejected":
              throw w.reason;
          }
      }
      throw w;
    }
    function j(w, G, J, W, at) {
      var ft = typeof w;
      (ft === "undefined" || ft === "boolean") && (w = null);
      var gt = false;
      if (w === null) gt = true;
      else switch (ft) {
        case "bigint":
        case "string":
        case "number":
          gt = true;
          break;
        case "object":
          switch (w.$$typeof) {
            case n:
            case i:
              gt = true;
              break;
            case S2:
              return gt = w._init, j(gt(w._payload), G, J, W, at);
          }
      }
      if (gt) return at = at(w), gt = W === "" ? "." + Gt(w, 0) : W, F(at) ? (J = "", gt != null && (J = gt.replace(xt, "$&/") + "/"), j(at, G, J, "", function(nn) {
        return nn;
      })) : at != null && (nt(at) && (at = st(at, J + (at.key == null || w && w.key === at.key ? "" : ("" + at.key).replace(xt, "$&/") + "/") + gt)), G.push(at)), 1;
      gt = 0;
      var Vt = W === "" ? "." : W + ":";
      if (F(w)) for (var zt = 0; zt < w.length; zt++) W = w[zt], ft = Vt + Gt(W, zt), gt += j(W, G, J, ft, at);
      else if (zt = E2(w), typeof zt == "function") for (w = zt.call(w), zt = 0; !(W = w.next()).done; ) W = W.value, ft = Vt + Gt(W, zt++), gt += j(W, G, J, ft, at);
      else if (ft === "object") {
        if (typeof w.then == "function") return j(Nt(w), G, J, W, at);
        throw G = String(w), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
      }
      return gt;
    }
    function P2(w, G, J) {
      if (w == null) return w;
      var W = [], at = 0;
      return j(w, W, "", "", function(ft) {
        return G.call(J, ft, at++);
      }), W;
    }
    function it(w) {
      if (w._status === -1) {
        var G = w._result;
        G = G(), G.then(function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = J);
        }, function(J) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = J);
        }), w._status === -1 && (w._status = 0, w._result = G);
      }
      if (w._status === 1) return w._result.default;
      throw w._result;
    }
    var Et = typeof reportError == "function" ? reportError : function(w) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var G = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w), error: w });
        if (!window.dispatchEvent(G)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", w);
        return;
      }
      console.error(w);
    }, Tt = { map: P2, forEach: function(w, G, J) {
      P2(w, function() {
        G.apply(this, arguments);
      }, J);
    }, count: function(w) {
      var G = 0;
      return P2(w, function() {
        G++;
      }), G;
    }, toArray: function(w) {
      return P2(w, function(G) {
        return G;
      }) || [];
    }, only: function(w) {
      if (!nt(w)) throw Error("React.Children.only expected to receive a single React element child.");
      return w;
    } };
    return ut.Activity = v2, ut.Children = Tt, ut.Component = M2, ut.Fragment = s, ut.Profiler = c, ut.PureComponent = Q, ut.StrictMode = u, ut.Suspense = p, ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, ut.__COMPILER_RUNTIME = { __proto__: null, c: function(w) {
      return X.H.useMemoCache(w);
    } }, ut.cache = function(w) {
      return function() {
        return w.apply(null, arguments);
      };
    }, ut.cacheSignal = function() {
      return null;
    }, ut.cloneElement = function(w, G, J) {
      if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
      var W = C2({}, w.props), at = w.key;
      if (G != null) for (ft in G.key !== void 0 && (at = "" + G.key), G) !K.call(G, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && G.ref === void 0 || (W[ft] = G[ft]);
      var ft = arguments.length - 2;
      if (ft === 1) W.children = J;
      else if (1 < ft) {
        for (var gt = Array(ft), Vt = 0; Vt < ft; Vt++) gt[Vt] = arguments[Vt + 2];
        W.children = gt;
      }
      return I2(w.type, at, W);
    }, ut.createContext = function(w) {
      return w = { $$typeof: h, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null }, w.Provider = w, w.Consumer = { $$typeof: f2, _context: w }, w;
    }, ut.createElement = function(w, G, J) {
      var W, at = {}, ft = null;
      if (G != null) for (W in G.key !== void 0 && (ft = "" + G.key), G) K.call(G, W) && W !== "key" && W !== "__self" && W !== "__source" && (at[W] = G[W]);
      var gt = arguments.length - 2;
      if (gt === 1) at.children = J;
      else if (1 < gt) {
        for (var Vt = Array(gt), zt = 0; zt < gt; zt++) Vt[zt] = arguments[zt + 2];
        at.children = Vt;
      }
      if (w && w.defaultProps) for (W in gt = w.defaultProps, gt) at[W] === void 0 && (at[W] = gt[W]);
      return I2(w, ft, at);
    }, ut.createRef = function() {
      return { current: null };
    }, ut.forwardRef = function(w) {
      return { $$typeof: m, render: w };
    }, ut.isValidElement = nt, ut.lazy = function(w) {
      return { $$typeof: S2, _payload: { _status: -1, _result: w }, _init: it };
    }, ut.memo = function(w, G) {
      return { $$typeof: y2, type: w, compare: G === void 0 ? null : G };
    }, ut.startTransition = function(w) {
      var G = X.T, J = {};
      X.T = J;
      try {
        var W = w(), at = X.S;
        at !== null && at(J, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(k, Et);
      } catch (ft) {
        Et(ft);
      } finally {
        G !== null && J.types !== null && (G.types = J.types), X.T = G;
      }
    }, ut.unstable_useCacheRefresh = function() {
      return X.H.useCacheRefresh();
    }, ut.use = function(w) {
      return X.H.use(w);
    }, ut.useActionState = function(w, G, J) {
      return X.H.useActionState(w, G, J);
    }, ut.useCallback = function(w, G) {
      return X.H.useCallback(w, G);
    }, ut.useContext = function(w) {
      return X.H.useContext(w);
    }, ut.useDebugValue = function() {
    }, ut.useDeferredValue = function(w, G) {
      return X.H.useDeferredValue(w, G);
    }, ut.useEffect = function(w, G) {
      return X.H.useEffect(w, G);
    }, ut.useEffectEvent = function(w) {
      return X.H.useEffectEvent(w);
    }, ut.useId = function() {
      return X.H.useId();
    }, ut.useImperativeHandle = function(w, G, J) {
      return X.H.useImperativeHandle(w, G, J);
    }, ut.useInsertionEffect = function(w, G) {
      return X.H.useInsertionEffect(w, G);
    }, ut.useLayoutEffect = function(w, G) {
      return X.H.useLayoutEffect(w, G);
    }, ut.useMemo = function(w, G) {
      return X.H.useMemo(w, G);
    }, ut.useOptimistic = function(w, G) {
      return X.H.useOptimistic(w, G);
    }, ut.useReducer = function(w, G, J) {
      return X.H.useReducer(w, G, J);
    }, ut.useRef = function(w) {
      return X.H.useRef(w);
    }, ut.useState = function(w) {
      return X.H.useState(w);
    }, ut.useSyncExternalStore = function(w, G, J) {
      return X.H.useSyncExternalStore(w, G, J);
    }, ut.useTransition = function() {
      return X.H.useTransition();
    }, ut.version = "19.2.5", ut;
  }
  function Ki() {
    return Zm || (Zm = 1, tc.exports = j0()), tc.exports;
  }
  function B0() {
    return Pm || (Pm = 1, (function(n) {
      function i(j, P2) {
        var it = j.length;
        j.push(P2);
        t: for (; 0 < it; ) {
          var Et = it - 1 >>> 1, Tt = j[Et];
          if (0 < c(Tt, P2)) j[Et] = P2, j[it] = Tt, it = Et;
          else break t;
        }
      }
      function s(j) {
        return j.length === 0 ? null : j[0];
      }
      function u(j) {
        if (j.length === 0) return null;
        var P2 = j[0], it = j.pop();
        if (it !== P2) {
          j[0] = it;
          t: for (var Et = 0, Tt = j.length, w = Tt >>> 1; Et < w; ) {
            var G = 2 * (Et + 1) - 1, J = j[G], W = G + 1, at = j[W];
            if (0 > c(J, it)) W < Tt && 0 > c(at, J) ? (j[Et] = at, j[W] = it, Et = W) : (j[Et] = J, j[G] = it, Et = G);
            else if (W < Tt && 0 > c(at, it)) j[Et] = at, j[W] = it, Et = W;
            else break t;
          }
        }
        return P2;
      }
      function c(j, P2) {
        var it = j.sortIndex - P2.sortIndex;
        return it !== 0 ? it : j.id - P2.id;
      }
      if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var f2 = performance;
        n.unstable_now = function() {
          return f2.now();
        };
      } else {
        var h = Date, m = h.now();
        n.unstable_now = function() {
          return h.now() - m;
        };
      }
      var p = [], y2 = [], S2 = 1, v2 = null, _ = 3, E2 = false, A2 = false, C2 = false, R2 = false, M2 = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
      function H(j) {
        for (var P2 = s(y2); P2 !== null; ) {
          if (P2.callback === null) u(y2);
          else if (P2.startTime <= j) u(y2), P2.sortIndex = P2.expirationTime, i(p, P2);
          else break;
          P2 = s(y2);
        }
      }
      function F(j) {
        if (C2 = false, H(j), !A2) if (s(p) !== null) A2 = true, k || (k = true, mt());
        else {
          var P2 = s(y2);
          P2 !== null && Nt(F, P2.startTime - j);
        }
      }
      var k = false, X = -1, K = 5, I2 = -1;
      function st() {
        return R2 ? true : !(n.unstable_now() - I2 < K);
      }
      function nt() {
        if (R2 = false, k) {
          var j = n.unstable_now();
          I2 = j;
          var P2 = true;
          try {
            t: {
              A2 = false, C2 && (C2 = false, q(X), X = -1), E2 = true;
              var it = _;
              try {
                e: {
                  for (H(j), v2 = s(p); v2 !== null && !(v2.expirationTime > j && st()); ) {
                    var Et = v2.callback;
                    if (typeof Et == "function") {
                      v2.callback = null, _ = v2.priorityLevel;
                      var Tt = Et(v2.expirationTime <= j);
                      if (j = n.unstable_now(), typeof Tt == "function") {
                        v2.callback = Tt, H(j), P2 = true;
                        break e;
                      }
                      v2 === s(p) && u(p), H(j);
                    } else u(p);
                    v2 = s(p);
                  }
                  if (v2 !== null) P2 = true;
                  else {
                    var w = s(y2);
                    w !== null && Nt(F, w.startTime - j), P2 = false;
                  }
                }
                break t;
              } finally {
                v2 = null, _ = it, E2 = false;
              }
              P2 = void 0;
            }
          } finally {
            P2 ? mt() : k = false;
          }
        }
      }
      var mt;
      if (typeof Q == "function") mt = function() {
        Q(nt);
      };
      else if (typeof MessageChannel < "u") {
        var xt = new MessageChannel(), Gt = xt.port2;
        xt.port1.onmessage = nt, mt = function() {
          Gt.postMessage(null);
        };
      } else mt = function() {
        M2(nt, 0);
      };
      function Nt(j, P2) {
        X = M2(function() {
          j(n.unstable_now());
        }, P2);
      }
      n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(j) {
        j.callback = null;
      }, n.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < j ? Math.floor(1e3 / j) : 5;
      }, n.unstable_getCurrentPriorityLevel = function() {
        return _;
      }, n.unstable_next = function(j) {
        switch (_) {
          case 1:
          case 2:
          case 3:
            var P2 = 3;
            break;
          default:
            P2 = _;
        }
        var it = _;
        _ = P2;
        try {
          return j();
        } finally {
          _ = it;
        }
      }, n.unstable_requestPaint = function() {
        R2 = true;
      }, n.unstable_runWithPriority = function(j, P2) {
        switch (j) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            j = 3;
        }
        var it = _;
        _ = j;
        try {
          return P2();
        } finally {
          _ = it;
        }
      }, n.unstable_scheduleCallback = function(j, P2, it) {
        var Et = n.unstable_now();
        switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? Et + it : Et) : it = Et, j) {
          case 1:
            var Tt = -1;
            break;
          case 2:
            Tt = 250;
            break;
          case 5:
            Tt = 1073741823;
            break;
          case 4:
            Tt = 1e4;
            break;
          default:
            Tt = 5e3;
        }
        return Tt = it + Tt, j = { id: S2++, callback: P2, priorityLevel: j, startTime: it, expirationTime: Tt, sortIndex: -1 }, it > Et ? (j.sortIndex = it, i(y2, j), s(p) === null && j === s(y2) && (C2 ? (q(X), X = -1) : C2 = true, Nt(F, it - Et))) : (j.sortIndex = Tt, i(p, j), A2 || E2 || (A2 = true, k || (k = true, mt()))), j;
      }, n.unstable_shouldYield = st, n.unstable_wrapCallback = function(j) {
        var P2 = _;
        return function() {
          var it = _;
          _ = P2;
          try {
            return j.apply(this, arguments);
          } finally {
            _ = it;
          }
        };
      };
    })(ac)), ac;
  }
  function H0() {
    return Jm || (Jm = 1, nc.exports = B0()), nc.exports;
  }
  function q0() {
    if (km) return fe;
    km = 1;
    var n = Ki();
    function i(p) {
      var y2 = "https://react.dev/errors/" + p;
      if (1 < arguments.length) {
        y2 += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var S2 = 2; S2 < arguments.length; S2++) y2 += "&args[]=" + encodeURIComponent(arguments[S2]);
      }
      return "Minified React error #" + p + "; visit " + y2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function s() {
    }
    var u = { d: { f: s, r: function() {
      throw Error(i(522));
    }, D: s, C: s, L: s, m: s, X: s, S: s, M: s }, p: 0, findDOMNode: null }, c = /* @__PURE__ */ Symbol.for("react.portal");
    function f2(p, y2, S2) {
      var v2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: c, key: v2 == null ? null : "" + v2, children: p, containerInfo: y2, implementation: S2 };
    }
    var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(p, y2) {
      if (p === "font") return "";
      if (typeof y2 == "string") return y2 === "use-credentials" ? y2 : "";
    }
    return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, fe.createPortal = function(p, y2) {
      var S2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y2 || y2.nodeType !== 1 && y2.nodeType !== 9 && y2.nodeType !== 11) throw Error(i(299));
      return f2(p, y2, null, S2);
    }, fe.flushSync = function(p) {
      var y2 = h.T, S2 = u.p;
      try {
        if (h.T = null, u.p = 2, p) return p();
      } finally {
        h.T = y2, u.p = S2, u.d.f();
      }
    }, fe.preconnect = function(p, y2) {
      typeof p == "string" && (y2 ? (y2 = y2.crossOrigin, y2 = typeof y2 == "string" ? y2 === "use-credentials" ? y2 : "" : void 0) : y2 = null, u.d.C(p, y2));
    }, fe.prefetchDNS = function(p) {
      typeof p == "string" && u.d.D(p);
    }, fe.preinit = function(p, y2) {
      if (typeof p == "string" && y2 && typeof y2.as == "string") {
        var S2 = y2.as, v2 = m(S2, y2.crossOrigin), _ = typeof y2.integrity == "string" ? y2.integrity : void 0, E2 = typeof y2.fetchPriority == "string" ? y2.fetchPriority : void 0;
        S2 === "style" ? u.d.S(p, typeof y2.precedence == "string" ? y2.precedence : void 0, { crossOrigin: v2, integrity: _, fetchPriority: E2 }) : S2 === "script" && u.d.X(p, { crossOrigin: v2, integrity: _, fetchPriority: E2, nonce: typeof y2.nonce == "string" ? y2.nonce : void 0 });
      }
    }, fe.preinitModule = function(p, y2) {
      if (typeof p == "string") if (typeof y2 == "object" && y2 !== null) {
        if (y2.as == null || y2.as === "script") {
          var S2 = m(y2.as, y2.crossOrigin);
          u.d.M(p, { crossOrigin: S2, integrity: typeof y2.integrity == "string" ? y2.integrity : void 0, nonce: typeof y2.nonce == "string" ? y2.nonce : void 0 });
        }
      } else y2 == null && u.d.M(p);
    }, fe.preload = function(p, y2) {
      if (typeof p == "string" && typeof y2 == "object" && y2 !== null && typeof y2.as == "string") {
        var S2 = y2.as, v2 = m(S2, y2.crossOrigin);
        u.d.L(p, S2, { crossOrigin: v2, integrity: typeof y2.integrity == "string" ? y2.integrity : void 0, nonce: typeof y2.nonce == "string" ? y2.nonce : void 0, type: typeof y2.type == "string" ? y2.type : void 0, fetchPriority: typeof y2.fetchPriority == "string" ? y2.fetchPriority : void 0, referrerPolicy: typeof y2.referrerPolicy == "string" ? y2.referrerPolicy : void 0, imageSrcSet: typeof y2.imageSrcSet == "string" ? y2.imageSrcSet : void 0, imageSizes: typeof y2.imageSizes == "string" ? y2.imageSizes : void 0, media: typeof y2.media == "string" ? y2.media : void 0 });
      }
    }, fe.preloadModule = function(p, y2) {
      if (typeof p == "string") if (y2) {
        var S2 = m(y2.as, y2.crossOrigin);
        u.d.m(p, { as: typeof y2.as == "string" && y2.as !== "script" ? y2.as : void 0, crossOrigin: S2, integrity: typeof y2.integrity == "string" ? y2.integrity : void 0 });
      } else u.d.m(p);
    }, fe.requestFormReset = function(p) {
      u.d.r(p);
    }, fe.unstable_batchedUpdates = function(p, y2) {
      return p(y2);
    }, fe.useFormState = function(p, y2, S2) {
      return h.H.useFormState(p, y2, S2);
    }, fe.useFormStatus = function() {
      return h.H.useHostTransitionStatus();
    }, fe.version = "19.2.5", fe;
  }
  function Fy() {
    if (Fm) return lc.exports;
    Fm = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
    }
    return n(), lc.exports = q0(), lc.exports;
  }
  function Y0() {
    if (Im) return Mi;
    Im = 1;
    var n = H0(), i = Ki(), s = Fy();
    function u(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++) e += "&args[]=" + encodeURIComponent(arguments[a]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function c(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function f2(t) {
      var e = t, a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function h(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function m(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function p(t) {
      if (f2(t) !== t) throw Error(u(188));
    }
    function y2(t) {
      var e = t.alternate;
      if (!e) {
        if (e = f2(t), e === null) throw Error(u(188));
        return e !== t ? null : t;
      }
      for (var a = t, l = e; ; ) {
        var r = a.return;
        if (r === null) break;
        var o = r.alternate;
        if (o === null) {
          if (l = r.return, l !== null) {
            a = l;
            continue;
          }
          break;
        }
        if (r.child === o.child) {
          for (o = r.child; o; ) {
            if (o === a) return p(r), t;
            if (o === l) return p(r), e;
            o = o.sibling;
          }
          throw Error(u(188));
        }
        if (a.return !== l.return) a = r, l = o;
        else {
          for (var d = false, g = r.child; g; ) {
            if (g === a) {
              d = true, a = r, l = o;
              break;
            }
            if (g === l) {
              d = true, l = r, a = o;
              break;
            }
            g = g.sibling;
          }
          if (!d) {
            for (g = o.child; g; ) {
              if (g === a) {
                d = true, a = o, l = r;
                break;
              }
              if (g === l) {
                d = true, l = o, a = r;
                break;
              }
              g = g.sibling;
            }
            if (!d) throw Error(u(189));
          }
        }
        if (a.alternate !== l) throw Error(u(190));
      }
      if (a.tag !== 3) throw Error(u(188));
      return a.stateNode.current === a ? t : e;
    }
    function S2(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = S2(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var v2 = Object.assign, _ = /* @__PURE__ */ Symbol.for("react.element"), E2 = /* @__PURE__ */ Symbol.for("react.transitional.element"), A2 = /* @__PURE__ */ Symbol.for("react.portal"), C2 = /* @__PURE__ */ Symbol.for("react.fragment"), R2 = /* @__PURE__ */ Symbol.for("react.strict_mode"), M2 = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), Q = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), K = /* @__PURE__ */ Symbol.for("react.lazy"), I2 = /* @__PURE__ */ Symbol.for("react.activity"), st = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), nt = Symbol.iterator;
    function mt(t) {
      return t === null || typeof t != "object" ? null : (t = nt && t[nt] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var xt = /* @__PURE__ */ Symbol.for("react.client.reference");
    function Gt(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === xt ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case C2:
          return "Fragment";
        case M2:
          return "Profiler";
        case R2:
          return "StrictMode";
        case F:
          return "Suspense";
        case k:
          return "SuspenseList";
        case I2:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case A2:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case H:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case X:
          return e = t.displayName || null, e !== null ? e : Gt(t.type) || "Memo";
        case K:
          e = t._payload, t = t._init;
          try {
            return Gt(t(e));
          } catch {
          }
      }
      return null;
    }
    var Nt = Array.isArray, j = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P2 = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, it = { pending: false, data: null, method: null, action: null }, Et = [], Tt = -1;
    function w(t) {
      return { current: t };
    }
    function G(t) {
      0 > Tt || (t.current = Et[Tt], Et[Tt] = null, Tt--);
    }
    function J(t, e) {
      Tt++, Et[Tt] = t.current, t.current = e;
    }
    var W = w(null), at = w(null), ft = w(null), gt = w(null);
    function Vt(t, e) {
      switch (J(ft, e), J(at, t), J(W, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? dm(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = dm(e), t = hm(e, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      G(W), J(W, t);
    }
    function zt() {
      G(W), G(at), G(ft);
    }
    function nn(t) {
      t.memoizedState !== null && J(gt, t);
      var e = W.current, a = hm(e, t.type);
      e !== a && (J(at, t), J(W, a));
    }
    function an(t) {
      at.current === t && (G(W), G(at)), gt.current === t && (G(gt), Ti._currentValue = it);
    }
    var wn, Ll;
    function Je(t) {
      if (wn === void 0) try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        wn = e && e[1] || "", Ll = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + wn + t + Ll;
    }
    var Ul = false;
    function qa(t, e) {
      if (!t || Ul) return "";
      Ul = true;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var l = { DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var V = function() {
                throw Error();
              };
              if (Object.defineProperty(V.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(V, []);
                } catch (N) {
                  var U = N;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (N) {
                  U = N;
                }
                t.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                U = N;
              }
              (V = t()) && typeof V.catch == "function" && V.catch(function() {
              });
            }
          } catch (N) {
            if (N && U && typeof N.stack == "string") return [N.stack, U.stack];
          }
          return [null, null];
        } };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var r = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
        r && r.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var o = l.DetermineComponentFrameRoot(), d = o[0], g = o[1];
        if (d && g) {
          var x = d.split(`
`), L = g.split(`
`);
          for (r = l = 0; l < x.length && !x[l].includes("DetermineComponentFrameRoot"); ) l++;
          for (; r < L.length && !L[r].includes("DetermineComponentFrameRoot"); ) r++;
          if (l === x.length || r === L.length) for (l = x.length - 1, r = L.length - 1; 1 <= l && 0 <= r && x[l] !== L[r]; ) r--;
          for (; 1 <= l && 0 <= r; l--, r--) if (x[l] !== L[r]) {
            if (l !== 1 || r !== 1) do
              if (l--, r--, 0 > r || x[l] !== L[r]) {
                var B2 = `
` + x[l].replace(" at new ", " at ");
                return t.displayName && B2.includes("<anonymous>") && (B2 = B2.replace("<anonymous>", t.displayName)), B2;
              }
            while (1 <= l && 0 <= r);
            break;
          }
        }
      } finally {
        Ul = false, Error.prepareStackTrace = a;
      }
      return (a = t ? t.displayName || t.name : "") ? Je(a) : "";
    }
    function Pi(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Je(t.type);
        case 16:
          return Je("Lazy");
        case 13:
          return t.child !== e && e !== null ? Je("Suspense Fallback") : Je("Suspense");
        case 19:
          return Je("SuspenseList");
        case 0:
        case 15:
          return qa(t.type, false);
        case 11:
          return qa(t.type.render, false);
        case 1:
          return qa(t.type, true);
        case 31:
          return Je("Activity");
        default:
          return "";
      }
    }
    function ln(t) {
      try {
        var e = "", a = null;
        do
          e += Pi(t, a), a = t, t = t.return;
        while (t);
        return e;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    var fa = Object.prototype.hasOwnProperty, Ve = n.unstable_scheduleCallback, Nl = n.unstable_cancelCallback, Ji = n.unstable_shouldYield, qr = n.unstable_requestPaint, ce = n.unstable_now, Ut = n.unstable_getCurrentPriorityLevel, ae = n.unstable_ImmediatePriority, ke = n.unstable_UserBlockingPriority, Ya = n.unstable_NormalPriority, mv = n.unstable_LowPriority, Kc = n.unstable_IdlePriority, yv = n.log, pv = n.unstable_setDisableYieldValue, jl = null, Te = null;
    function Mn(t) {
      if (typeof yv == "function" && pv(t), Te && typeof Te.setStrictMode == "function") try {
        Te.setStrictMode(jl, t);
      } catch {
      }
    }
    var xe = Math.clz32 ? Math.clz32 : Sv, vv = Math.log, gv = Math.LN2;
    function Sv(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (vv(t) / gv | 0) | 0;
    }
    var ki = 256, Fi = 262144, Ii = 4194304;
    function da(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return t;
      }
    }
    function Wi(t, e, a) {
      var l = t.pendingLanes;
      if (l === 0) return 0;
      var r = 0, o = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var g = l & 134217727;
      return g !== 0 ? (l = g & ~o, l !== 0 ? r = da(l) : (d &= g, d !== 0 ? r = da(d) : a || (a = g & ~t, a !== 0 && (r = da(a))))) : (g = l & ~o, g !== 0 ? r = da(g) : d !== 0 ? r = da(d) : a || (a = l & ~t, a !== 0 && (r = da(a)))), r === 0 ? 0 : e !== 0 && e !== r && (e & o) === 0 && (o = r & -r, a = e & -e, o >= a || o === 32 && (a & 4194048) !== 0) ? e : r;
    }
    function Bl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function bv(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Zc() {
      var t = Ii;
      return Ii <<= 1, (Ii & 62914560) === 0 && (Ii = 4194304), t;
    }
    function Yr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function Hl(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function _v(t, e, a, l, r, o) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var g = t.entanglements, x = t.expirationTimes, L = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var B2 = 31 - xe(a), V = 1 << B2;
        g[B2] = 0, x[B2] = -1;
        var U = L[B2];
        if (U !== null) for (L[B2] = null, B2 = 0; B2 < U.length; B2++) {
          var N = U[B2];
          N !== null && (N.lane &= -536870913);
        }
        a &= ~V;
      }
      l !== 0 && Pc(t, l, 0), o !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(d & ~e));
    }
    function Pc(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var l = 31 - xe(e);
      t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
    }
    function Jc(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var l = 31 - xe(a), r = 1 << l;
        r & e | t[l] & e && (t[l] |= e), a &= ~r;
      }
    }
    function kc(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : Qr(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function Qr(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function Gr(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Fc() {
      var t = P2.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : jm(t.type));
    }
    function Ic(t, e) {
      var a = P2.p;
      try {
        return P2.p = t, e();
      } finally {
        P2.p = a;
      }
    }
    var Cn = Math.random().toString(36).slice(2), le = "__reactFiber$" + Cn, me = "__reactProps$" + Cn, Qa = "__reactContainer$" + Cn, Vr = "__reactEvents$" + Cn, Ev = "__reactListeners$" + Cn, Rv = "__reactHandles$" + Cn, Wc = "__reactResources$" + Cn, ql = "__reactMarker$" + Cn;
    function Xr(t) {
      delete t[le], delete t[me], delete t[Vr], delete t[Ev], delete t[Rv];
    }
    function Ga(t) {
      var e = t[le];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[Qa] || a[le]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null) for (t = bm(t); t !== null; ) {
            if (a = t[le]) return a;
            t = bm(t);
          }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function Va(t) {
      if (t = t[le] || t[Qa]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function Yl(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(u(33));
    }
    function Xa(t) {
      var e = t[Wc];
      return e || (e = t[Wc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function te(t) {
      t[ql] = true;
    }
    var $c = /* @__PURE__ */ new Set(), tf = {};
    function ha(t, e) {
      Ka(t, e), Ka(t + "Capture", e);
    }
    function Ka(t, e) {
      for (tf[t] = e, t = 0; t < e.length; t++) $c.add(e[t]);
    }
    var Tv = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ef = {}, nf = {};
    function xv(t) {
      return fa.call(nf, t) ? true : fa.call(ef, t) ? false : Tv.test(t) ? nf[t] = true : (ef[t] = true, false);
    }
    function $i(t, e, a) {
      if (xv(e)) if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
    }
    function ts(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + a);
      }
    }
    function sn(t, e, a, l) {
      if (l === null) t.removeAttribute(a);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        t.setAttributeNS(e, a, "" + l);
      }
    }
    function Le(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function af(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Av(t, e, a) {
      var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
        var r = l.get, o = l.set;
        return Object.defineProperty(t, e, { configurable: true, get: function() {
          return r.call(this);
        }, set: function(d) {
          a = "" + d, o.call(this, d);
        } }), Object.defineProperty(t, e, { enumerable: l.enumerable }), { getValue: function() {
          return a;
        }, setValue: function(d) {
          a = "" + d;
        }, stopTracking: function() {
          t._valueTracker = null, delete t[e];
        } };
      }
    }
    function Kr(t) {
      if (!t._valueTracker) {
        var e = af(t) ? "checked" : "value";
        t._valueTracker = Av(t, e, "" + t[e]);
      }
    }
    function lf(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var a = e.getValue(), l = "";
      return t && (l = af(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), true) : false;
    }
    function es(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var Ov = /[\n"\\]/g;
    function Ue(t) {
      return t.replace(Ov, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Zr(t, e, a, l, r, o, d, g) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Le(e)) : t.value !== "" + Le(e) && (t.value = "" + Le(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? Pr(t, d, Le(e)) : a != null ? Pr(t, d, Le(a)) : l != null && t.removeAttribute("value"), r == null && o != null && (t.defaultChecked = !!o), r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + Le(g) : t.removeAttribute("name");
    }
    function sf(t, e, a, l, r, o, d, g) {
      if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || a != null) {
        if (!(o !== "submit" && o !== "reset" || e != null)) {
          Kr(t);
          return;
        }
        a = a != null ? "" + Le(a) : "", e = e != null ? "" + Le(e) : a, g || e === t.value || (t.value = e), t.defaultValue = e;
      }
      l = l ?? r, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = g ? t.checked : !!l, t.defaultChecked = !!l, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d), Kr(t);
    }
    function Pr(t, e, a) {
      e === "number" && es(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function Za(t, e, a, l) {
      if (t = t.options, e) {
        e = {};
        for (var r = 0; r < a.length; r++) e["$" + a[r]] = true;
        for (a = 0; a < t.length; a++) r = e.hasOwnProperty("$" + t[a].value), t[a].selected !== r && (t[a].selected = r), r && l && (t[a].defaultSelected = true);
      } else {
        for (a = "" + Le(a), e = null, r = 0; r < t.length; r++) {
          if (t[r].value === a) {
            t[r].selected = true, l && (t[r].defaultSelected = true);
            return;
          }
          e !== null || t[r].disabled || (e = t[r]);
        }
        e !== null && (e.selected = true);
      }
    }
    function rf(t, e, a) {
      if (e != null && (e = "" + Le(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + Le(a) : "";
    }
    function uf(t, e, a, l) {
      if (e == null) {
        if (l != null) {
          if (a != null) throw Error(u(92));
          if (Nt(l)) {
            if (1 < l.length) throw Error(u(93));
            l = l[0];
          }
          a = l;
        }
        a == null && (a = ""), e = a;
      }
      a = Le(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), Kr(t);
    }
    function Pa(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var wv = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function of(t, e, a) {
      var l = e.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || wv.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
    }
    function cf(t, e, a) {
      if (e != null && typeof e != "object") throw Error(u(62));
      if (t = t.style, a != null) {
        for (var l in a) !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
        for (var r in e) l = e[r], e.hasOwnProperty(r) && a[r] !== l && of(t, r, l);
      } else for (var o in e) e.hasOwnProperty(o) && of(t, o, e[o]);
    }
    function Jr(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Mv = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Cv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ns(t) {
      return Cv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function rn() {
    }
    var kr = null;
    function Fr(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var Ja = null, ka = null;
    function ff(t) {
      var e = Va(t);
      if (e && (t = e.stateNode)) {
        var a = t[me] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Zr(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), e = a.name, a.type === "radio" && e != null) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (a = a.querySelectorAll('input[name="' + Ue("" + e) + '"][type="radio"]'), e = 0; e < a.length; e++) {
                var l = a[e];
                if (l !== t && l.form === t.form) {
                  var r = l[me] || null;
                  if (!r) throw Error(u(90));
                  Zr(l, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name);
                }
              }
              for (e = 0; e < a.length; e++) l = a[e], l.form === t.form && lf(l);
            }
            break t;
          case "textarea":
            rf(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && Za(t, !!a.multiple, e, false);
        }
      }
    }
    var Ir = false;
    function df(t, e, a) {
      if (Ir) return t(e, a);
      Ir = true;
      try {
        var l = t(e);
        return l;
      } finally {
        if (Ir = false, (Ja !== null || ka !== null) && (Vs(), Ja && (e = Ja, t = ka, ka = Ja = null, ff(e), t))) for (e = 0; e < t.length; e++) ff(t[e]);
      }
    }
    function Ql(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var l = a[me] || null;
      if (l === null) return null;
      a = l[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (a && typeof a != "function") throw Error(u(231, e, typeof a));
      return a;
    }
    var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wr = false;
    if (un) try {
      var Gl = {};
      Object.defineProperty(Gl, "passive", { get: function() {
        Wr = true;
      } }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl);
    } catch {
      Wr = false;
    }
    var zn = null, $r = null, as = null;
    function hf() {
      if (as) return as;
      var t, e = $r, a = e.length, l, r = "value" in zn ? zn.value : zn.textContent, o = r.length;
      for (t = 0; t < a && e[t] === r[t]; t++) ;
      var d = a - t;
      for (l = 1; l <= d && e[a - l] === r[o - l]; l++) ;
      return as = r.slice(t, 1 < l ? 1 - l : void 0);
    }
    function ls(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function is() {
      return true;
    }
    function mf() {
      return false;
    }
    function ye(t) {
      function e(a, l, r, o, d) {
        this._reactName = a, this._targetInst = r, this.type = l, this.nativeEvent = o, this.target = d, this.currentTarget = null;
        for (var g in t) t.hasOwnProperty(g) && (a = t[g], this[g] = a ? a(o) : o[g]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? is : mf, this.isPropagationStopped = mf, this;
      }
      return v2(e.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = is);
      }, stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = is);
      }, persist: function() {
      }, isPersistent: is }), e;
    }
    var ma = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
      return t.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, ss = ye(ma), Vl = v2({}, ma, { view: 0, detail: 0 }), zv = ye(Vl), tu, eu, Xl, rs = v2({}, Vl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: au, button: 0, buttons: 0, relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    }, movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Xl && (Xl && t.type === "mousemove" ? (tu = t.screenX - Xl.screenX, eu = t.screenY - Xl.screenY) : eu = tu = 0, Xl = t), tu);
    }, movementY: function(t) {
      return "movementY" in t ? t.movementY : eu;
    } }), yf = ye(rs), Dv = v2({}, rs, { dataTransfer: 0 }), Lv = ye(Dv), Uv = v2({}, Vl, { relatedTarget: 0 }), nu = ye(Uv), Nv = v2({}, ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jv = ye(Nv), Bv = v2({}, ma, { clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    } }), Hv = ye(Bv), qv = v2({}, ma, { data: 0 }), pf = ye(qv), Yv = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Qv = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Gv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Vv(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = Gv[t]) ? !!e[t] : false;
    }
    function au() {
      return Vv;
    }
    var Xv = v2({}, Vl, { key: function(t) {
      if (t.key) {
        var e = Yv[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = ls(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Qv[t.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: au, charCode: function(t) {
      return t.type === "keypress" ? ls(t) : 0;
    }, keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }, which: function(t) {
      return t.type === "keypress" ? ls(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    } }), Kv = ye(Xv), Zv = v2({}, rs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vf = ye(Zv), Pv = v2({}, Vl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: au }), Jv = ye(Pv), kv = v2({}, ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Fv = ye(kv), Iv = v2({}, rs, { deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    }, deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), Wv = ye(Iv), $v = v2({}, ma, { newState: 0, oldState: 0 }), tg = ye($v), eg = [9, 13, 27, 32], lu = un && "CompositionEvent" in window, Kl = null;
    un && "documentMode" in document && (Kl = document.documentMode);
    var ng = un && "TextEvent" in window && !Kl, gf = un && (!lu || Kl && 8 < Kl && 11 >= Kl), Sf = " ", bf = false;
    function _f(t, e) {
      switch (t) {
        case "keyup":
          return eg.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Ef(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var Fa = false;
    function ag(t, e) {
      switch (t) {
        case "compositionend":
          return Ef(e);
        case "keypress":
          return e.which !== 32 ? null : (bf = true, Sf);
        case "textInput":
          return t = e.data, t === Sf && bf ? null : t;
        default:
          return null;
      }
    }
    function lg(t, e) {
      if (Fa) return t === "compositionend" || !lu && _f(t, e) ? (t = hf(), as = $r = zn = null, Fa = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return gf && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var ig = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function Rf(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!ig[t.type] : e === "textarea";
    }
    function Tf(t, e, a, l) {
      Ja ? ka ? ka.push(l) : ka = [l] : Ja = l, e = Fs(e, "onChange"), 0 < e.length && (a = new ss("onChange", "change", null, a, l), t.push({ event: a, listeners: e }));
    }
    var Zl = null, Pl = null;
    function sg(t) {
      sm(t, 0);
    }
    function us(t) {
      var e = Yl(t);
      if (lf(e)) return t;
    }
    function xf(t, e) {
      if (t === "change") return e;
    }
    var Af = false;
    if (un) {
      var iu;
      if (un) {
        var su = "oninput" in document;
        if (!su) {
          var Of = document.createElement("div");
          Of.setAttribute("oninput", "return;"), su = typeof Of.oninput == "function";
        }
        iu = su;
      } else iu = false;
      Af = iu && (!document.documentMode || 9 < document.documentMode);
    }
    function wf() {
      Zl && (Zl.detachEvent("onpropertychange", Mf), Pl = Zl = null);
    }
    function Mf(t) {
      if (t.propertyName === "value" && us(Pl)) {
        var e = [];
        Tf(e, Pl, t, Fr(t)), df(sg, e);
      }
    }
    function rg(t, e, a) {
      t === "focusin" ? (wf(), Zl = e, Pl = a, Zl.attachEvent("onpropertychange", Mf)) : t === "focusout" && wf();
    }
    function ug(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return us(Pl);
    }
    function og(t, e) {
      if (t === "click") return us(e);
    }
    function cg(t, e) {
      if (t === "input" || t === "change") return us(e);
    }
    function fg(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var Ae = typeof Object.is == "function" ? Object.is : fg;
    function Jl(t, e) {
      if (Ae(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var a = Object.keys(t), l = Object.keys(e);
      if (a.length !== l.length) return false;
      for (l = 0; l < a.length; l++) {
        var r = a[l];
        if (!fa.call(e, r) || !Ae(t[r], e[r])) return false;
      }
      return true;
    }
    function Cf(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function zf(t, e) {
      var a = Cf(t);
      t = 0;
      for (var l; a; ) {
        if (a.nodeType === 3) {
          if (l = t + a.textContent.length, t <= e && l >= e) return { node: a, offset: e - t };
          t = l;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Cf(a);
      }
    }
    function Df(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Df(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Lf(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = es(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = false;
        }
        if (a) t = e.contentWindow;
        else break;
        e = es(t.document);
      }
      return e;
    }
    function ru(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var dg = un && "documentMode" in document && 11 >= document.documentMode, Ia = null, uu = null, kl = null, ou = false;
    function Uf(t, e, a) {
      var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      ou || Ia == null || Ia !== es(l) || (l = Ia, "selectionStart" in l && ru(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), kl && Jl(kl, l) || (kl = l, l = Fs(uu, "onSelect"), 0 < l.length && (e = new ss("onSelect", "select", null, e, a), t.push({ event: e, listeners: l }), e.target = Ia)));
    }
    function ya(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    var Wa = { animationend: ya("Animation", "AnimationEnd"), animationiteration: ya("Animation", "AnimationIteration"), animationstart: ya("Animation", "AnimationStart"), transitionrun: ya("Transition", "TransitionRun"), transitionstart: ya("Transition", "TransitionStart"), transitioncancel: ya("Transition", "TransitionCancel"), transitionend: ya("Transition", "TransitionEnd") }, cu = {}, Nf = {};
    un && (Nf = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
    function pa(t) {
      if (cu[t]) return cu[t];
      if (!Wa[t]) return t;
      var e = Wa[t], a;
      for (a in e) if (e.hasOwnProperty(a) && a in Nf) return cu[t] = e[a];
      return t;
    }
    var jf = pa("animationend"), Bf = pa("animationiteration"), Hf = pa("animationstart"), hg = pa("transitionrun"), mg = pa("transitionstart"), yg = pa("transitioncancel"), qf = pa("transitionend"), Yf = /* @__PURE__ */ new Map(), fu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    fu.push("scrollEnd");
    function Xe(t, e) {
      Yf.set(t, e), ha(e, [t]);
    }
    var os = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, Ne = [], $a = 0, du = 0;
    function cs() {
      for (var t = $a, e = du = $a = 0; e < t; ) {
        var a = Ne[e];
        Ne[e++] = null;
        var l = Ne[e];
        Ne[e++] = null;
        var r = Ne[e];
        Ne[e++] = null;
        var o = Ne[e];
        if (Ne[e++] = null, l !== null && r !== null) {
          var d = l.pending;
          d === null ? r.next = r : (r.next = d.next, d.next = r), l.pending = r;
        }
        o !== 0 && Qf(a, r, o);
      }
    }
    function fs(t, e, a, l) {
      Ne[$a++] = t, Ne[$a++] = e, Ne[$a++] = a, Ne[$a++] = l, du |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
    }
    function hu(t, e, a, l) {
      return fs(t, e, a, l), ds(t);
    }
    function va(t, e) {
      return fs(t, null, null, e), ds(t);
    }
    function Qf(t, e, a) {
      t.lanes |= a;
      var l = t.alternate;
      l !== null && (l.lanes |= a);
      for (var r = false, o = t.return; o !== null; ) o.childLanes |= a, l = o.alternate, l !== null && (l.childLanes |= a), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (r = true)), t = o, o = o.return;
      return t.tag === 3 ? (o = t.stateNode, r && e !== null && (r = 31 - xe(a), t = o.hiddenUpdates, l = t[r], l === null ? t[r] = [e] : l.push(e), e.lane = a | 536870912), o) : null;
    }
    function ds(t) {
      if (50 < vi) throw vi = 0, Ro = null, Error(u(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var tl = {};
    function pg(t, e, a, l) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Oe(t, e, a, l) {
      return new pg(t, e, a, l);
    }
    function mu(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function on(t, e) {
      var a = t.alternate;
      return a === null ? (a = Oe(t.tag, e, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
    }
    function Gf(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
    }
    function hs(t, e, a, l, r, o) {
      var d = 0;
      if (l = t, typeof t == "function") mu(t) && (d = 1);
      else if (typeof t == "string") d = _0(t, a, W.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case I2:
          return t = Oe(31, a, e, r), t.elementType = I2, t.lanes = o, t;
        case C2:
          return ga(a.children, r, o, e);
        case R2:
          d = 8, r |= 24;
          break;
        case M2:
          return t = Oe(12, a, e, r | 2), t.elementType = M2, t.lanes = o, t;
        case F:
          return t = Oe(13, a, e, r), t.elementType = F, t.lanes = o, t;
        case k:
          return t = Oe(19, a, e, r), t.elementType = k, t.lanes = o, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case Q:
              d = 10;
              break t;
            case q:
              d = 9;
              break t;
            case H:
              d = 11;
              break t;
            case X:
              d = 14;
              break t;
            case K:
              d = 16, l = null;
              break t;
          }
          d = 29, a = Error(u(130, t === null ? "null" : typeof t, "")), l = null;
      }
      return e = Oe(d, a, e, r), e.elementType = t, e.type = l, e.lanes = o, e;
    }
    function ga(t, e, a, l) {
      return t = Oe(7, t, l, e), t.lanes = a, t;
    }
    function yu(t, e, a) {
      return t = Oe(6, t, null, e), t.lanes = a, t;
    }
    function Vf(t) {
      var e = Oe(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function pu(t, e, a) {
      return e = Oe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = a, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
    }
    var Xf = /* @__PURE__ */ new WeakMap();
    function je(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = Xf.get(t);
        return a !== void 0 ? a : (e = { value: t, source: e, stack: ln(e) }, Xf.set(t, e), e);
      }
      return { value: t, source: e, stack: ln(e) };
    }
    var el = [], nl = 0, ms = null, Fl = 0, Be = [], He = 0, Dn = null, Fe = 1, Ie = "";
    function cn(t, e) {
      el[nl++] = Fl, el[nl++] = ms, ms = t, Fl = e;
    }
    function Kf(t, e, a) {
      Be[He++] = Fe, Be[He++] = Ie, Be[He++] = Dn, Dn = t;
      var l = Fe;
      t = Ie;
      var r = 32 - xe(l) - 1;
      l &= ~(1 << r), a += 1;
      var o = 32 - xe(e) + r;
      if (30 < o) {
        var d = r - r % 5;
        o = (l & (1 << d) - 1).toString(32), l >>= d, r -= d, Fe = 1 << 32 - xe(e) + r | a << r | l, Ie = o + t;
      } else Fe = 1 << o | a << r | l, Ie = t;
    }
    function vu(t) {
      t.return !== null && (cn(t, 1), Kf(t, 1, 0));
    }
    function gu(t) {
      for (; t === ms; ) ms = el[--nl], el[nl] = null, Fl = el[--nl], el[nl] = null;
      for (; t === Dn; ) Dn = Be[--He], Be[He] = null, Ie = Be[--He], Be[He] = null, Fe = Be[--He], Be[He] = null;
    }
    function Zf(t, e) {
      Be[He++] = Fe, Be[He++] = Ie, Be[He++] = Dn, Fe = e.id, Ie = e.overflow, Dn = t;
    }
    var ie = null, jt = null, vt = false, Ln = null, qe = false, Su = Error(u(519));
    function Un(t) {
      var e = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Il(je(e, t)), Su;
    }
    function Pf(t) {
      var e = t.stateNode, a = t.type, l = t.memoizedProps;
      switch (e[le] = t, e[me] = l, a) {
        case "dialog":
          ht("cancel", e), ht("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ht("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Si.length; a++) ht(Si[a], e);
          break;
        case "source":
          ht("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ht("error", e), ht("load", e);
          break;
        case "details":
          ht("toggle", e);
          break;
        case "input":
          ht("invalid", e), sf(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true);
          break;
        case "select":
          ht("invalid", e);
          break;
        case "textarea":
          ht("invalid", e), uf(e, l.value, l.defaultValue, l.children);
      }
      a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === true || cm(e.textContent, a) ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)), l.onScroll != null && ht("scroll", e), l.onScrollEnd != null && ht("scrollend", e), l.onClick != null && (e.onclick = rn), e = true) : e = false, e || Un(t, true);
    }
    function Jf(t) {
      for (ie = t.return; ie; ) switch (ie.tag) {
        case 5:
        case 31:
        case 13:
          qe = false;
          return;
        case 27:
        case 3:
          qe = true;
          return;
        default:
          ie = ie.return;
      }
    }
    function al(t) {
      if (t !== ie) return false;
      if (!vt) return Jf(t), vt = true, false;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Ho(t.type, t.memoizedProps)), a = !a), a && jt && Un(t), Jf(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
        jt = Sm(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
        jt = Sm(t);
      } else e === 27 ? (e = jt, Jn(t.type) ? (t = Vo, Vo = null, jt = t) : jt = e) : jt = ie ? Qe(t.stateNode.nextSibling) : null;
      return true;
    }
    function Sa() {
      jt = ie = null, vt = false;
    }
    function bu() {
      var t = Ln;
      return t !== null && (Se === null ? Se = t : Se.push.apply(Se, t), Ln = null), t;
    }
    function Il(t) {
      Ln === null ? Ln = [t] : Ln.push(t);
    }
    var _u = w(null), ba = null, fn = null;
    function Nn(t, e, a) {
      J(_u, e._currentValue), e._currentValue = a;
    }
    function dn(t) {
      t._currentValue = _u.current, G(_u);
    }
    function Eu(t, e, a) {
      for (; t !== null; ) {
        var l = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
        t = t.return;
      }
    }
    function Ru(t, e, a, l) {
      var r = t.child;
      for (r !== null && (r.return = t); r !== null; ) {
        var o = r.dependencies;
        if (o !== null) {
          var d = r.child;
          o = o.firstContext;
          t: for (; o !== null; ) {
            var g = o;
            o = r;
            for (var x = 0; x < e.length; x++) if (g.context === e[x]) {
              o.lanes |= a, g = o.alternate, g !== null && (g.lanes |= a), Eu(o.return, a, t), l || (d = null);
              break t;
            }
            o = g.next;
          }
        } else if (r.tag === 18) {
          if (d = r.return, d === null) throw Error(u(341));
          d.lanes |= a, o = d.alternate, o !== null && (o.lanes |= a), Eu(d, a, t), d = null;
        } else d = r.child;
        if (d !== null) d.return = r;
        else for (d = r; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (r = d.sibling, r !== null) {
            r.return = d.return, d = r;
            break;
          }
          d = d.return;
        }
        r = d;
      }
    }
    function ll(t, e, a, l) {
      t = null;
      for (var r = e, o = false; r !== null; ) {
        if (!o) {
          if ((r.flags & 524288) !== 0) o = true;
          else if ((r.flags & 262144) !== 0) break;
        }
        if (r.tag === 10) {
          var d = r.alternate;
          if (d === null) throw Error(u(387));
          if (d = d.memoizedProps, d !== null) {
            var g = r.type;
            Ae(r.pendingProps.value, d.value) || (t !== null ? t.push(g) : t = [g]);
          }
        } else if (r === gt.current) {
          if (d = r.alternate, d === null) throw Error(u(387));
          d.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(Ti) : t = [Ti]);
        }
        r = r.return;
      }
      t !== null && Ru(e, t, a, l), e.flags |= 262144;
    }
    function ys(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Ae(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function _a(t) {
      ba = t, fn = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function se(t) {
      return kf(ba, t);
    }
    function ps(t, e) {
      return ba === null && _a(t), kf(t, e);
    }
    function kf(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, fn === null) {
        if (t === null) throw Error(u(308));
        fn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
      } else fn = fn.next = e;
      return a;
    }
    var vg = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = { aborted: false, addEventListener: function(a, l) {
        t.push(l);
      } };
      this.abort = function() {
        e.aborted = true, t.forEach(function(a) {
          return a();
        });
      };
    }, gg = n.unstable_scheduleCallback, Sg = n.unstable_NormalPriority, Zt = { $$typeof: Q, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Tu() {
      return { controller: new vg(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function Wl(t) {
      t.refCount--, t.refCount === 0 && gg(Sg, function() {
        t.controller.abort();
      });
    }
    var $l = null, xu = 0, il = 0, sl = null;
    function bg(t, e) {
      if ($l === null) {
        var a = $l = [];
        xu = 0, il = Mo(), sl = { status: "pending", value: void 0, then: function(l) {
          a.push(l);
        } };
      }
      return xu++, e.then(Ff, Ff), e;
    }
    function Ff() {
      if (--xu === 0 && $l !== null) {
        sl !== null && (sl.status = "fulfilled");
        var t = $l;
        $l = null, il = 0, sl = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function _g(t, e) {
      var a = [], l = { status: "pending", value: null, reason: null, then: function(r) {
        a.push(r);
      } };
      return t.then(function() {
        l.status = "fulfilled", l.value = e;
        for (var r = 0; r < a.length; r++) (0, a[r])(e);
      }, function(r) {
        for (l.status = "rejected", l.reason = r, r = 0; r < a.length; r++) (0, a[r])(void 0);
      }), l;
    }
    var If = j.S;
    j.S = function(t, e) {
      Uh = ce(), typeof e == "object" && e !== null && typeof e.then == "function" && bg(t, e), If !== null && If(t, e);
    };
    var Ea = w(null);
    function Au() {
      var t = Ea.current;
      return t !== null ? t : Dt.pooledCache;
    }
    function vs(t, e) {
      e === null ? J(Ea, Ea.current) : J(Ea, e.pool);
    }
    function Wf() {
      var t = Au();
      return t === null ? null : { parent: Zt._currentValue, pool: t };
    }
    var rl = Error(u(460)), Ou = Error(u(474)), gs = Error(u(542)), Ss = { then: function() {
    } };
    function $f(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function td(t, e, a) {
      switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(rn, rn), e = a), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, nd(t), t;
        default:
          if (typeof e.status == "string") e.then(rn, rn);
          else {
            if (t = Dt, t !== null && 100 < t.shellSuspendCounter) throw Error(u(482));
            t = e, t.status = "pending", t.then(function(l) {
              if (e.status === "pending") {
                var r = e;
                r.status = "fulfilled", r.value = l;
              }
            }, function(l) {
              if (e.status === "pending") {
                var r = e;
                r.status = "rejected", r.reason = l;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, nd(t), t;
          }
          throw Ta = e, rl;
      }
    }
    function Ra(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (a) {
        throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ta = a, rl) : a;
      }
    }
    var Ta = null;
    function ed() {
      if (Ta === null) throw Error(u(459));
      var t = Ta;
      return Ta = null, t;
    }
    function nd(t) {
      if (t === rl || t === gs) throw Error(u(483));
    }
    var ul = null, ti = 0;
    function bs(t) {
      var e = ti;
      return ti += 1, ul === null && (ul = []), td(ul, t, e);
    }
    function ei(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function _s(t, e) {
      throw e.$$typeof === _ ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(u(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function ad(t) {
      function e(z2, O2) {
        if (t) {
          var D2 = z2.deletions;
          D2 === null ? (z2.deletions = [O2], z2.flags |= 16) : D2.push(O2);
        }
      }
      function a(z2, O2) {
        if (!t) return null;
        for (; O2 !== null; ) e(z2, O2), O2 = O2.sibling;
        return null;
      }
      function l(z2) {
        for (var O2 = /* @__PURE__ */ new Map(); z2 !== null; ) z2.key !== null ? O2.set(z2.key, z2) : O2.set(z2.index, z2), z2 = z2.sibling;
        return O2;
      }
      function r(z2, O2) {
        return z2 = on(z2, O2), z2.index = 0, z2.sibling = null, z2;
      }
      function o(z2, O2, D2) {
        return z2.index = D2, t ? (D2 = z2.alternate, D2 !== null ? (D2 = D2.index, D2 < O2 ? (z2.flags |= 67108866, O2) : D2) : (z2.flags |= 67108866, O2)) : (z2.flags |= 1048576, O2);
      }
      function d(z2) {
        return t && z2.alternate === null && (z2.flags |= 67108866), z2;
      }
      function g(z2, O2, D2, Y) {
        return O2 === null || O2.tag !== 6 ? (O2 = yu(D2, z2.mode, Y), O2.return = z2, O2) : (O2 = r(O2, D2), O2.return = z2, O2);
      }
      function x(z2, O2, D2, Y) {
        var lt = D2.type;
        return lt === C2 ? B2(z2, O2, D2.props.children, Y, D2.key) : O2 !== null && (O2.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === K && Ra(lt) === O2.type) ? (O2 = r(O2, D2.props), ei(O2, D2), O2.return = z2, O2) : (O2 = hs(D2.type, D2.key, D2.props, null, z2.mode, Y), ei(O2, D2), O2.return = z2, O2);
      }
      function L(z2, O2, D2, Y) {
        return O2 === null || O2.tag !== 4 || O2.stateNode.containerInfo !== D2.containerInfo || O2.stateNode.implementation !== D2.implementation ? (O2 = pu(D2, z2.mode, Y), O2.return = z2, O2) : (O2 = r(O2, D2.children || []), O2.return = z2, O2);
      }
      function B2(z2, O2, D2, Y, lt) {
        return O2 === null || O2.tag !== 7 ? (O2 = ga(D2, z2.mode, Y, lt), O2.return = z2, O2) : (O2 = r(O2, D2), O2.return = z2, O2);
      }
      function V(z2, O2, D2) {
        if (typeof O2 == "string" && O2 !== "" || typeof O2 == "number" || typeof O2 == "bigint") return O2 = yu("" + O2, z2.mode, D2), O2.return = z2, O2;
        if (typeof O2 == "object" && O2 !== null) {
          switch (O2.$$typeof) {
            case E2:
              return D2 = hs(O2.type, O2.key, O2.props, null, z2.mode, D2), ei(D2, O2), D2.return = z2, D2;
            case A2:
              return O2 = pu(O2, z2.mode, D2), O2.return = z2, O2;
            case K:
              return O2 = Ra(O2), V(z2, O2, D2);
          }
          if (Nt(O2) || mt(O2)) return O2 = ga(O2, z2.mode, D2, null), O2.return = z2, O2;
          if (typeof O2.then == "function") return V(z2, bs(O2), D2);
          if (O2.$$typeof === Q) return V(z2, ps(z2, O2), D2);
          _s(z2, O2);
        }
        return null;
      }
      function U(z2, O2, D2, Y) {
        var lt = O2 !== null ? O2.key : null;
        if (typeof D2 == "string" && D2 !== "" || typeof D2 == "number" || typeof D2 == "bigint") return lt !== null ? null : g(z2, O2, "" + D2, Y);
        if (typeof D2 == "object" && D2 !== null) {
          switch (D2.$$typeof) {
            case E2:
              return D2.key === lt ? x(z2, O2, D2, Y) : null;
            case A2:
              return D2.key === lt ? L(z2, O2, D2, Y) : null;
            case K:
              return D2 = Ra(D2), U(z2, O2, D2, Y);
          }
          if (Nt(D2) || mt(D2)) return lt !== null ? null : B2(z2, O2, D2, Y, null);
          if (typeof D2.then == "function") return U(z2, O2, bs(D2), Y);
          if (D2.$$typeof === Q) return U(z2, O2, ps(z2, D2), Y);
          _s(z2, D2);
        }
        return null;
      }
      function N(z2, O2, D2, Y, lt) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint") return z2 = z2.get(D2) || null, g(O2, z2, "" + Y, lt);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case E2:
              return z2 = z2.get(Y.key === null ? D2 : Y.key) || null, x(O2, z2, Y, lt);
            case A2:
              return z2 = z2.get(Y.key === null ? D2 : Y.key) || null, L(O2, z2, Y, lt);
            case K:
              return Y = Ra(Y), N(z2, O2, D2, Y, lt);
          }
          if (Nt(Y) || mt(Y)) return z2 = z2.get(D2) || null, B2(O2, z2, Y, lt, null);
          if (typeof Y.then == "function") return N(z2, O2, D2, bs(Y), lt);
          if (Y.$$typeof === Q) return N(z2, O2, D2, ps(O2, Y), lt);
          _s(O2, Y);
        }
        return null;
      }
      function $(z2, O2, D2, Y) {
        for (var lt = null, St = null, tt = O2, ct = O2 = 0, pt = null; tt !== null && ct < D2.length; ct++) {
          tt.index > ct ? (pt = tt, tt = null) : pt = tt.sibling;
          var bt = U(z2, tt, D2[ct], Y);
          if (bt === null) {
            tt === null && (tt = pt);
            break;
          }
          t && tt && bt.alternate === null && e(z2, tt), O2 = o(bt, O2, ct), St === null ? lt = bt : St.sibling = bt, St = bt, tt = pt;
        }
        if (ct === D2.length) return a(z2, tt), vt && cn(z2, ct), lt;
        if (tt === null) {
          for (; ct < D2.length; ct++) tt = V(z2, D2[ct], Y), tt !== null && (O2 = o(tt, O2, ct), St === null ? lt = tt : St.sibling = tt, St = tt);
          return vt && cn(z2, ct), lt;
        }
        for (tt = l(tt); ct < D2.length; ct++) pt = N(tt, z2, ct, D2[ct], Y), pt !== null && (t && pt.alternate !== null && tt.delete(pt.key === null ? ct : pt.key), O2 = o(pt, O2, ct), St === null ? lt = pt : St.sibling = pt, St = pt);
        return t && tt.forEach(function($n) {
          return e(z2, $n);
        }), vt && cn(z2, ct), lt;
      }
      function rt(z2, O2, D2, Y) {
        if (D2 == null) throw Error(u(151));
        for (var lt = null, St = null, tt = O2, ct = O2 = 0, pt = null, bt = D2.next(); tt !== null && !bt.done; ct++, bt = D2.next()) {
          tt.index > ct ? (pt = tt, tt = null) : pt = tt.sibling;
          var $n = U(z2, tt, bt.value, Y);
          if ($n === null) {
            tt === null && (tt = pt);
            break;
          }
          t && tt && $n.alternate === null && e(z2, tt), O2 = o($n, O2, ct), St === null ? lt = $n : St.sibling = $n, St = $n, tt = pt;
        }
        if (bt.done) return a(z2, tt), vt && cn(z2, ct), lt;
        if (tt === null) {
          for (; !bt.done; ct++, bt = D2.next()) bt = V(z2, bt.value, Y), bt !== null && (O2 = o(bt, O2, ct), St === null ? lt = bt : St.sibling = bt, St = bt);
          return vt && cn(z2, ct), lt;
        }
        for (tt = l(tt); !bt.done; ct++, bt = D2.next()) bt = N(tt, z2, ct, bt.value, Y), bt !== null && (t && bt.alternate !== null && tt.delete(bt.key === null ? ct : bt.key), O2 = o(bt, O2, ct), St === null ? lt = bt : St.sibling = bt, St = bt);
        return t && tt.forEach(function(D0) {
          return e(z2, D0);
        }), vt && cn(z2, ct), lt;
      }
      function Ct(z2, O2, D2, Y) {
        if (typeof D2 == "object" && D2 !== null && D2.type === C2 && D2.key === null && (D2 = D2.props.children), typeof D2 == "object" && D2 !== null) {
          switch (D2.$$typeof) {
            case E2:
              t: {
                for (var lt = D2.key; O2 !== null; ) {
                  if (O2.key === lt) {
                    if (lt = D2.type, lt === C2) {
                      if (O2.tag === 7) {
                        a(z2, O2.sibling), Y = r(O2, D2.props.children), Y.return = z2, z2 = Y;
                        break t;
                      }
                    } else if (O2.elementType === lt || typeof lt == "object" && lt !== null && lt.$$typeof === K && Ra(lt) === O2.type) {
                      a(z2, O2.sibling), Y = r(O2, D2.props), ei(Y, D2), Y.return = z2, z2 = Y;
                      break t;
                    }
                    a(z2, O2);
                    break;
                  } else e(z2, O2);
                  O2 = O2.sibling;
                }
                D2.type === C2 ? (Y = ga(D2.props.children, z2.mode, Y, D2.key), Y.return = z2, z2 = Y) : (Y = hs(D2.type, D2.key, D2.props, null, z2.mode, Y), ei(Y, D2), Y.return = z2, z2 = Y);
              }
              return d(z2);
            case A2:
              t: {
                for (lt = D2.key; O2 !== null; ) {
                  if (O2.key === lt) if (O2.tag === 4 && O2.stateNode.containerInfo === D2.containerInfo && O2.stateNode.implementation === D2.implementation) {
                    a(z2, O2.sibling), Y = r(O2, D2.children || []), Y.return = z2, z2 = Y;
                    break t;
                  } else {
                    a(z2, O2);
                    break;
                  }
                  else e(z2, O2);
                  O2 = O2.sibling;
                }
                Y = pu(D2, z2.mode, Y), Y.return = z2, z2 = Y;
              }
              return d(z2);
            case K:
              return D2 = Ra(D2), Ct(z2, O2, D2, Y);
          }
          if (Nt(D2)) return $(z2, O2, D2, Y);
          if (mt(D2)) {
            if (lt = mt(D2), typeof lt != "function") throw Error(u(150));
            return D2 = lt.call(D2), rt(z2, O2, D2, Y);
          }
          if (typeof D2.then == "function") return Ct(z2, O2, bs(D2), Y);
          if (D2.$$typeof === Q) return Ct(z2, O2, ps(z2, D2), Y);
          _s(z2, D2);
        }
        return typeof D2 == "string" && D2 !== "" || typeof D2 == "number" || typeof D2 == "bigint" ? (D2 = "" + D2, O2 !== null && O2.tag === 6 ? (a(z2, O2.sibling), Y = r(O2, D2), Y.return = z2, z2 = Y) : (a(z2, O2), Y = yu(D2, z2.mode, Y), Y.return = z2, z2 = Y), d(z2)) : a(z2, O2);
      }
      return function(z2, O2, D2, Y) {
        try {
          ti = 0;
          var lt = Ct(z2, O2, D2, Y);
          return ul = null, lt;
        } catch (tt) {
          if (tt === rl || tt === gs) throw tt;
          var St = Oe(29, tt, null, z2.mode);
          return St.lanes = Y, St.return = z2, St;
        }
      };
    }
    var xa = ad(true), ld = ad(false), jn = false;
    function wu(t) {
      t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function Mu(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
    }
    function Bn(t) {
      return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function Hn(t, e, a) {
      var l = t.updateQueue;
      if (l === null) return null;
      if (l = l.shared, (Rt & 2) !== 0) {
        var r = l.pending;
        return r === null ? e.next = e : (e.next = r.next, r.next = e), l.pending = e, e = ds(t), Qf(t, null, a), e;
      }
      return fs(t, l, e, a), ds(t);
    }
    function ni(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var l = e.lanes;
        l &= t.pendingLanes, a |= l, e.lanes = a, Jc(t, a);
      }
    }
    function Cu(t, e) {
      var a = t.updateQueue, l = t.alternate;
      if (l !== null && (l = l.updateQueue, a === l)) {
        var r = null, o = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
            o === null ? r = o = d : o = o.next = d, a = a.next;
          } while (a !== null);
          o === null ? r = o = e : o = o.next = e;
        } else r = o = e;
        a = { baseState: l.baseState, firstBaseUpdate: r, lastBaseUpdate: o, shared: l.shared, callbacks: l.callbacks }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    var zu = false;
    function ai() {
      if (zu) {
        var t = sl;
        if (t !== null) throw t;
      }
    }
    function li(t, e, a, l) {
      zu = false;
      var r = t.updateQueue;
      jn = false;
      var o = r.firstBaseUpdate, d = r.lastBaseUpdate, g = r.shared.pending;
      if (g !== null) {
        r.shared.pending = null;
        var x = g, L = x.next;
        x.next = null, d === null ? o = L : d.next = L, d = x;
        var B2 = t.alternate;
        B2 !== null && (B2 = B2.updateQueue, g = B2.lastBaseUpdate, g !== d && (g === null ? B2.firstBaseUpdate = L : g.next = L, B2.lastBaseUpdate = x));
      }
      if (o !== null) {
        var V = r.baseState;
        d = 0, B2 = L = x = null, g = o;
        do {
          var U = g.lane & -536870913, N = U !== g.lane;
          if (N ? (yt & U) === U : (l & U) === U) {
            U !== 0 && U === il && (zu = true), B2 !== null && (B2 = B2.next = { lane: 0, tag: g.tag, payload: g.payload, callback: null, next: null });
            t: {
              var $ = t, rt = g;
              U = e;
              var Ct = a;
              switch (rt.tag) {
                case 1:
                  if ($ = rt.payload, typeof $ == "function") {
                    V = $.call(Ct, V, U);
                    break t;
                  }
                  V = $;
                  break t;
                case 3:
                  $.flags = $.flags & -65537 | 128;
                case 0:
                  if ($ = rt.payload, U = typeof $ == "function" ? $.call(Ct, V, U) : $, U == null) break t;
                  V = v2({}, V, U);
                  break t;
                case 2:
                  jn = true;
              }
            }
            U = g.callback, U !== null && (t.flags |= 64, N && (t.flags |= 8192), N = r.callbacks, N === null ? r.callbacks = [U] : N.push(U));
          } else N = { lane: U, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, B2 === null ? (L = B2 = N, x = V) : B2 = B2.next = N, d |= U;
          if (g = g.next, g === null) {
            if (g = r.shared.pending, g === null) break;
            N = g, g = N.next, N.next = null, r.lastBaseUpdate = N, r.shared.pending = null;
          }
        } while (true);
        B2 === null && (x = V), r.baseState = x, r.firstBaseUpdate = L, r.lastBaseUpdate = B2, o === null && (r.shared.lanes = 0), Vn |= d, t.lanes = d, t.memoizedState = V;
      }
    }
    function id(t, e) {
      if (typeof t != "function") throw Error(u(191, t));
      t.call(e);
    }
    function sd(t, e) {
      var a = t.callbacks;
      if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) id(a[t], e);
    }
    var ol = w(null), Es = w(0);
    function rd(t, e) {
      t = _n, J(Es, t), J(ol, e), _n = t | e.baseLanes;
    }
    function Du() {
      J(Es, _n), J(ol, ol.current);
    }
    function Lu() {
      _n = Es.current, G(ol), G(Es);
    }
    var we = w(null), Ye = null;
    function qn(t) {
      var e = t.alternate;
      J(Xt, Xt.current & 1), J(we, t), Ye === null && (e === null || ol.current !== null || e.memoizedState !== null) && (Ye = t);
    }
    function Uu(t) {
      J(Xt, Xt.current), J(we, t), Ye === null && (Ye = t);
    }
    function ud(t) {
      t.tag === 22 ? (J(Xt, Xt.current), J(we, t), Ye === null && (Ye = t)) : Yn();
    }
    function Yn() {
      J(Xt, Xt.current), J(we, we.current);
    }
    function Me(t) {
      G(we), Ye === t && (Ye = null), G(Xt);
    }
    var Xt = w(0);
    function Rs(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || Qo(a) || Go(a))) return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var hn = 0, ot = null, wt = null, Pt = null, Ts = false, cl = false, Aa = false, xs = 0, ii = 0, fl = null, Eg = 0;
    function Yt() {
      throw Error(u(321));
    }
    function Nu(t, e) {
      if (e === null) return false;
      for (var a = 0; a < e.length && a < t.length; a++) if (!Ae(t[a], e[a])) return false;
      return true;
    }
    function ju(t, e, a, l, r, o) {
      return hn = o, ot = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, j.H = t === null || t.memoizedState === null ? Kd : Iu, Aa = false, o = a(l, r), Aa = false, cl && (o = cd(e, a, l, r)), od(t), o;
    }
    function od(t) {
      j.H = ui;
      var e = wt !== null && wt.next !== null;
      if (hn = 0, Pt = wt = ot = null, Ts = false, ii = 0, fl = null, e) throw Error(u(300));
      t === null || Jt || (t = t.dependencies, t !== null && ys(t) && (Jt = true));
    }
    function cd(t, e, a, l) {
      ot = t;
      var r = 0;
      do {
        if (cl && (fl = null), ii = 0, cl = false, 25 <= r) throw Error(u(301));
        if (r += 1, Pt = wt = null, t.updateQueue != null) {
          var o = t.updateQueue;
          o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
        }
        j.H = Zd, o = e(a, l);
      } while (cl);
      return o;
    }
    function Rg() {
      var t = j.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? si(e) : e, t = t.useState()[0], (wt !== null ? wt.memoizedState : null) !== t && (ot.flags |= 1024), e;
    }
    function Bu() {
      var t = xs !== 0;
      return xs = 0, t;
    }
    function Hu(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
    }
    function qu(t) {
      if (Ts) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        Ts = false;
      }
      hn = 0, Pt = wt = ot = null, cl = false, ii = xs = 0, fl = null;
    }
    function de() {
      var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Pt === null ? ot.memoizedState = Pt = t : Pt = Pt.next = t, Pt;
    }
    function Kt() {
      if (wt === null) {
        var t = ot.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = wt.next;
      var e = Pt === null ? ot.memoizedState : Pt.next;
      if (e !== null) Pt = e, wt = t;
      else {
        if (t === null) throw ot.alternate === null ? Error(u(467)) : Error(u(310));
        wt = t, t = { memoizedState: wt.memoizedState, baseState: wt.baseState, baseQueue: wt.baseQueue, queue: wt.queue, next: null }, Pt === null ? ot.memoizedState = Pt = t : Pt = Pt.next = t;
      }
      return Pt;
    }
    function As() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function si(t) {
      var e = ii;
      return ii += 1, fl === null && (fl = []), t = td(fl, t, e), e = ot, (Pt === null ? e.memoizedState : Pt.next) === null && (e = e.alternate, j.H = e === null || e.memoizedState === null ? Kd : Iu), t;
    }
    function Os(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return si(t);
        if (t.$$typeof === Q) return se(t);
      }
      throw Error(u(438, String(t)));
    }
    function Yu(t) {
      var e = null, a = ot.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var l = ot.alternate;
        l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = { data: l.data.map(function(r) {
          return r.slice();
        }), index: 0 })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = As(), ot.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0) for (a = e.data[e.index] = Array(t), l = 0; l < t; l++) a[l] = st;
      return e.index++, a;
    }
    function mn(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function ws(t) {
      var e = Kt();
      return Qu(e, wt, t);
    }
    function Qu(t, e, a) {
      var l = t.queue;
      if (l === null) throw Error(u(311));
      l.lastRenderedReducer = a;
      var r = t.baseQueue, o = l.pending;
      if (o !== null) {
        if (r !== null) {
          var d = r.next;
          r.next = o.next, o.next = d;
        }
        e.baseQueue = r = o, l.pending = null;
      }
      if (o = t.baseState, r === null) t.memoizedState = o;
      else {
        e = r.next;
        var g = d = null, x = null, L = e, B2 = false;
        do {
          var V = L.lane & -536870913;
          if (V !== L.lane ? (yt & V) === V : (hn & V) === V) {
            var U = L.revertLane;
            if (U === 0) x !== null && (x = x.next = { lane: 0, revertLane: 0, gesture: null, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), V === il && (B2 = true);
            else if ((hn & U) === U) {
              L = L.next, U === il && (B2 = true);
              continue;
            } else V = { lane: 0, revertLane: L.revertLane, gesture: null, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }, x === null ? (g = x = V, d = o) : x = x.next = V, ot.lanes |= U, Vn |= U;
            V = L.action, Aa && a(o, V), o = L.hasEagerState ? L.eagerState : a(o, V);
          } else U = { lane: V, revertLane: L.revertLane, gesture: L.gesture, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }, x === null ? (g = x = U, d = o) : x = x.next = U, ot.lanes |= V, Vn |= V;
          L = L.next;
        } while (L !== null && L !== e);
        if (x === null ? d = o : x.next = g, !Ae(o, t.memoizedState) && (Jt = true, B2 && (a = sl, a !== null))) throw a;
        t.memoizedState = o, t.baseState = d, t.baseQueue = x, l.lastRenderedState = o;
      }
      return r === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
    }
    function Gu(t) {
      var e = Kt(), a = e.queue;
      if (a === null) throw Error(u(311));
      a.lastRenderedReducer = t;
      var l = a.dispatch, r = a.pending, o = e.memoizedState;
      if (r !== null) {
        a.pending = null;
        var d = r = r.next;
        do
          o = t(o, d.action), d = d.next;
        while (d !== r);
        Ae(o, e.memoizedState) || (Jt = true), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), a.lastRenderedState = o;
      }
      return [o, l];
    }
    function fd(t, e, a) {
      var l = ot, r = Kt(), o = vt;
      if (o) {
        if (a === void 0) throw Error(u(407));
        a = a();
      } else a = e();
      var d = !Ae((wt || r).memoizedState, a);
      if (d && (r.memoizedState = a, Jt = true), r = r.queue, Ku(md.bind(null, l, r, t), [t]), r.getSnapshot !== e || d || Pt !== null && Pt.memoizedState.tag & 1) {
        if (l.flags |= 2048, dl(9, { destroy: void 0 }, hd.bind(null, l, r, a, e), null), Dt === null) throw Error(u(349));
        o || (hn & 127) !== 0 || dd(l, e, a);
      }
      return a;
    }
    function dd(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = ot.updateQueue, e === null ? (e = As(), ot.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function hd(t, e, a, l) {
      e.value = a, e.getSnapshot = l, yd(e) && pd(t);
    }
    function md(t, e, a) {
      return a(function() {
        yd(e) && pd(t);
      });
    }
    function yd(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !Ae(t, a);
      } catch {
        return true;
      }
    }
    function pd(t) {
      var e = va(t, 2);
      e !== null && be(e, t, 2);
    }
    function Vu(t) {
      var e = de();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Aa) {
          Mn(true);
          try {
            a();
          } finally {
            Mn(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: mn, lastRenderedState: t }, e;
    }
    function vd(t, e, a, l) {
      return t.baseState = a, Qu(t, wt, typeof l == "function" ? l : mn);
    }
    function Tg(t, e, a, l, r) {
      if (zs(t)) throw Error(u(485));
      if (t = e.action, t !== null) {
        var o = { payload: r, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(d) {
          o.listeners.push(d);
        } };
        j.T !== null ? a(true) : o.isTransition = false, l(o), a = e.pending, a === null ? (o.next = e.pending = o, gd(e, o)) : (o.next = a.next, e.pending = a.next = o);
      }
    }
    function gd(t, e) {
      var a = e.action, l = e.payload, r = t.state;
      if (e.isTransition) {
        var o = j.T, d = {};
        j.T = d;
        try {
          var g = a(r, l), x = j.S;
          x !== null && x(d, g), Sd(t, e, g);
        } catch (L) {
          Xu(t, e, L);
        } finally {
          o !== null && d.types !== null && (o.types = d.types), j.T = o;
        }
      } else try {
        o = a(r, l), Sd(t, e, o);
      } catch (L) {
        Xu(t, e, L);
      }
    }
    function Sd(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
        bd(t, e, l);
      }, function(l) {
        return Xu(t, e, l);
      }) : bd(t, e, a);
    }
    function bd(t, e, a) {
      e.status = "fulfilled", e.value = a, _d(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, gd(t, a)));
    }
    function Xu(t, e, a) {
      var l = t.pending;
      if (t.pending = null, l !== null) {
        l = l.next;
        do
          e.status = "rejected", e.reason = a, _d(e), e = e.next;
        while (e !== l);
      }
      t.action = null;
    }
    function _d(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Ed(t, e) {
      return e;
    }
    function Rd(t, e) {
      if (vt) {
        var a = Dt.formState;
        if (a !== null) {
          t: {
            var l = ot;
            if (vt) {
              if (jt) {
                e: {
                  for (var r = jt, o = qe; r.nodeType !== 8; ) {
                    if (!o) {
                      r = null;
                      break e;
                    }
                    if (r = Qe(r.nextSibling), r === null) {
                      r = null;
                      break e;
                    }
                  }
                  o = r.data, r = o === "F!" || o === "F" ? r : null;
                }
                if (r) {
                  jt = Qe(r.nextSibling), l = r.data === "F!";
                  break t;
                }
              }
              Un(l);
            }
            l = false;
          }
          l && (e = a[0]);
        }
      }
      return a = de(), a.memoizedState = a.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ed, lastRenderedState: e }, a.queue = l, a = Gd.bind(null, ot, l), l.dispatch = a, l = Vu(false), o = Fu.bind(null, ot, false, l.queue), l = de(), r = { state: e, dispatch: null, action: t, pending: null }, l.queue = r, a = Tg.bind(null, ot, r, o, a), r.dispatch = a, l.memoizedState = t, [e, a, false];
    }
    function Td(t) {
      var e = Kt();
      return xd(e, wt, t);
    }
    function xd(t, e, a) {
      if (e = Qu(t, e, Ed)[0], t = ws(mn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var l = si(e);
      } catch (d) {
        throw d === rl ? gs : d;
      }
      else l = e;
      e = Kt();
      var r = e.queue, o = r.dispatch;
      return a !== e.memoizedState && (ot.flags |= 2048, dl(9, { destroy: void 0 }, xg.bind(null, r, a), null)), [l, o, t];
    }
    function xg(t, e) {
      t.action = e;
    }
    function Ad(t) {
      var e = Kt(), a = wt;
      if (a !== null) return xd(e, a, t);
      Kt(), e = e.memoizedState, a = Kt();
      var l = a.queue.dispatch;
      return a.memoizedState = t, [e, l, false];
    }
    function dl(t, e, a, l) {
      return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = ot.updateQueue, e === null && (e = As(), ot.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
    }
    function Od() {
      return Kt().memoizedState;
    }
    function Ms(t, e, a, l) {
      var r = de();
      ot.flags |= t, r.memoizedState = dl(1 | e, { destroy: void 0 }, a, l === void 0 ? null : l);
    }
    function Cs(t, e, a, l) {
      var r = Kt();
      l = l === void 0 ? null : l;
      var o = r.memoizedState.inst;
      wt !== null && l !== null && Nu(l, wt.memoizedState.deps) ? r.memoizedState = dl(e, o, a, l) : (ot.flags |= t, r.memoizedState = dl(1 | e, o, a, l));
    }
    function wd(t, e) {
      Ms(8390656, 8, t, e);
    }
    function Ku(t, e) {
      Cs(2048, 8, t, e);
    }
    function Ag(t) {
      ot.flags |= 4;
      var e = ot.updateQueue;
      if (e === null) e = As(), ot.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function Md(t) {
      var e = Kt().memoizedState;
      return Ag({ ref: e, nextImpl: t }), function() {
        if ((Rt & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function Cd(t, e) {
      return Cs(4, 2, t, e);
    }
    function zd(t, e) {
      return Cs(4, 4, t, e);
    }
    function Dd(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function() {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null) return t = t(), e.current = t, function() {
        e.current = null;
      };
    }
    function Ld(t, e, a) {
      a = a != null ? a.concat([t]) : null, Cs(4, 4, Dd.bind(null, e, t), a);
    }
    function Zu() {
    }
    function Ud(t, e) {
      var a = Kt();
      e = e === void 0 ? null : e;
      var l = a.memoizedState;
      return e !== null && Nu(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
    }
    function Nd(t, e) {
      var a = Kt();
      e = e === void 0 ? null : e;
      var l = a.memoizedState;
      if (e !== null && Nu(e, l[1])) return l[0];
      if (l = t(), Aa) {
        Mn(true);
        try {
          t();
        } finally {
          Mn(false);
        }
      }
      return a.memoizedState = [l, e], l;
    }
    function Pu(t, e, a) {
      return a === void 0 || (hn & 1073741824) !== 0 && (yt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = jh(), ot.lanes |= t, Vn |= t, a);
    }
    function jd(t, e, a, l) {
      return Ae(a, e) ? a : ol.current !== null ? (t = Pu(t, a, l), Ae(t, e) || (Jt = true), t) : (hn & 42) === 0 || (hn & 1073741824) !== 0 && (yt & 261930) === 0 ? (Jt = true, t.memoizedState = a) : (t = jh(), ot.lanes |= t, Vn |= t, e);
    }
    function Bd(t, e, a, l, r) {
      var o = P2.p;
      P2.p = o !== 0 && 8 > o ? o : 8;
      var d = j.T, g = {};
      j.T = g, Fu(t, false, e, a);
      try {
        var x = r(), L = j.S;
        if (L !== null && L(g, x), x !== null && typeof x == "object" && typeof x.then == "function") {
          var B2 = _g(x, l);
          ri(t, e, B2, De(t));
        } else ri(t, e, l, De(t));
      } catch (V) {
        ri(t, e, { then: function() {
        }, status: "rejected", reason: V }, De());
      } finally {
        P2.p = o, d !== null && g.types !== null && (d.types = g.types), j.T = d;
      }
    }
    function Og() {
    }
    function Ju(t, e, a, l) {
      if (t.tag !== 5) throw Error(u(476));
      var r = Hd(t).queue;
      Bd(t, r, e, it, a === null ? Og : function() {
        return qd(t), a(l);
      });
    }
    function Hd(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = { memoizedState: it, baseState: it, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: mn, lastRenderedState: it }, next: null };
      var a = {};
      return e.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: mn, lastRenderedState: a }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function qd(t) {
      var e = Hd(t);
      e.next === null && (e = t.alternate.memoizedState), ri(t, e.next.queue, {}, De());
    }
    function ku() {
      return se(Ti);
    }
    function Yd() {
      return Kt().memoizedState;
    }
    function Qd() {
      return Kt().memoizedState;
    }
    function wg(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var a = De();
            t = Bn(a);
            var l = Hn(e, t, a);
            l !== null && (be(l, e, a), ni(l, e, a)), e = { cache: Tu() }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function Mg(t, e, a) {
      var l = De();
      a = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, zs(t) ? Vd(e, a) : (a = hu(t, e, a, l), a !== null && (be(a, t, l), Xd(a, e, l)));
    }
    function Gd(t, e, a) {
      var l = De();
      ri(t, e, a, l);
    }
    function ri(t, e, a, l) {
      var r = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null };
      if (zs(t)) Vd(e, r);
      else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
          var d = e.lastRenderedState, g = o(d, a);
          if (r.hasEagerState = true, r.eagerState = g, Ae(g, d)) return fs(t, e, r, 0), Dt === null && cs(), false;
        } catch {
        }
        if (a = hu(t, e, r, l), a !== null) return be(a, t, l), Xd(a, e, l), true;
      }
      return false;
    }
    function Fu(t, e, a, l) {
      if (l = { lane: 2, revertLane: Mo(), gesture: null, action: l, hasEagerState: false, eagerState: null, next: null }, zs(t)) {
        if (e) throw Error(u(479));
      } else e = hu(t, a, l, 2), e !== null && be(e, t, 2);
    }
    function zs(t) {
      var e = t.alternate;
      return t === ot || e !== null && e === ot;
    }
    function Vd(t, e) {
      cl = Ts = true;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Xd(t, e, a) {
      if ((a & 4194048) !== 0) {
        var l = e.lanes;
        l &= t.pendingLanes, a |= l, e.lanes = a, Jc(t, a);
      }
    }
    var ui = { readContext: se, use: Os, useCallback: Yt, useContext: Yt, useEffect: Yt, useImperativeHandle: Yt, useLayoutEffect: Yt, useInsertionEffect: Yt, useMemo: Yt, useReducer: Yt, useRef: Yt, useState: Yt, useDebugValue: Yt, useDeferredValue: Yt, useTransition: Yt, useSyncExternalStore: Yt, useId: Yt, useHostTransitionStatus: Yt, useFormState: Yt, useActionState: Yt, useOptimistic: Yt, useMemoCache: Yt, useCacheRefresh: Yt };
    ui.useEffectEvent = Yt;
    var Kd = { readContext: se, use: Os, useCallback: function(t, e) {
      return de().memoizedState = [t, e === void 0 ? null : e], t;
    }, useContext: se, useEffect: wd, useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, Ms(4194308, 4, Dd.bind(null, e, t), a);
    }, useLayoutEffect: function(t, e) {
      return Ms(4194308, 4, t, e);
    }, useInsertionEffect: function(t, e) {
      Ms(4, 2, t, e);
    }, useMemo: function(t, e) {
      var a = de();
      e = e === void 0 ? null : e;
      var l = t();
      if (Aa) {
        Mn(true);
        try {
          t();
        } finally {
          Mn(false);
        }
      }
      return a.memoizedState = [l, e], l;
    }, useReducer: function(t, e, a) {
      var l = de();
      if (a !== void 0) {
        var r = a(e);
        if (Aa) {
          Mn(true);
          try {
            a(e);
          } finally {
            Mn(false);
          }
        }
      } else r = e;
      return l.memoizedState = l.baseState = r, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }, l.queue = t, t = t.dispatch = Mg.bind(null, ot, t), [l.memoizedState, t];
    }, useRef: function(t) {
      var e = de();
      return t = { current: t }, e.memoizedState = t;
    }, useState: function(t) {
      t = Vu(t);
      var e = t.queue, a = Gd.bind(null, ot, e);
      return e.dispatch = a, [t.memoizedState, a];
    }, useDebugValue: Zu, useDeferredValue: function(t, e) {
      var a = de();
      return Pu(a, t, e);
    }, useTransition: function() {
      var t = Vu(false);
      return t = Bd.bind(null, ot, t.queue, true, false), de().memoizedState = t, [false, t];
    }, useSyncExternalStore: function(t, e, a) {
      var l = ot, r = de();
      if (vt) {
        if (a === void 0) throw Error(u(407));
        a = a();
      } else {
        if (a = e(), Dt === null) throw Error(u(349));
        (yt & 127) !== 0 || dd(l, e, a);
      }
      r.memoizedState = a;
      var o = { value: a, getSnapshot: e };
      return r.queue = o, wd(md.bind(null, l, o, t), [t]), l.flags |= 2048, dl(9, { destroy: void 0 }, hd.bind(null, l, o, a, e), null), a;
    }, useId: function() {
      var t = de(), e = Dt.identifierPrefix;
      if (vt) {
        var a = Ie, l = Fe;
        a = (l & ~(1 << 32 - xe(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = xs++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else a = Eg++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }, useHostTransitionStatus: ku, useFormState: Rd, useActionState: Rd, useOptimistic: function(t) {
      var e = de();
      e.memoizedState = e.baseState = t;
      var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return e.queue = a, e = Fu.bind(null, ot, true, a), a.dispatch = e, [t, e];
    }, useMemoCache: Yu, useCacheRefresh: function() {
      return de().memoizedState = wg.bind(null, ot);
    }, useEffectEvent: function(t) {
      var e = de(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Rt & 2) !== 0) throw Error(u(440));
        return a.impl.apply(void 0, arguments);
      };
    } }, Iu = { readContext: se, use: Os, useCallback: Ud, useContext: se, useEffect: Ku, useImperativeHandle: Ld, useInsertionEffect: Cd, useLayoutEffect: zd, useMemo: Nd, useReducer: ws, useRef: Od, useState: function() {
      return ws(mn);
    }, useDebugValue: Zu, useDeferredValue: function(t, e) {
      var a = Kt();
      return jd(a, wt.memoizedState, t, e);
    }, useTransition: function() {
      var t = ws(mn)[0], e = Kt().memoizedState;
      return [typeof t == "boolean" ? t : si(t), e];
    }, useSyncExternalStore: fd, useId: Yd, useHostTransitionStatus: ku, useFormState: Td, useActionState: Td, useOptimistic: function(t, e) {
      var a = Kt();
      return vd(a, wt, t, e);
    }, useMemoCache: Yu, useCacheRefresh: Qd };
    Iu.useEffectEvent = Md;
    var Zd = { readContext: se, use: Os, useCallback: Ud, useContext: se, useEffect: Ku, useImperativeHandle: Ld, useInsertionEffect: Cd, useLayoutEffect: zd, useMemo: Nd, useReducer: Gu, useRef: Od, useState: function() {
      return Gu(mn);
    }, useDebugValue: Zu, useDeferredValue: function(t, e) {
      var a = Kt();
      return wt === null ? Pu(a, t, e) : jd(a, wt.memoizedState, t, e);
    }, useTransition: function() {
      var t = Gu(mn)[0], e = Kt().memoizedState;
      return [typeof t == "boolean" ? t : si(t), e];
    }, useSyncExternalStore: fd, useId: Yd, useHostTransitionStatus: ku, useFormState: Ad, useActionState: Ad, useOptimistic: function(t, e) {
      var a = Kt();
      return wt !== null ? vd(a, wt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }, useMemoCache: Yu, useCacheRefresh: Qd };
    Zd.useEffectEvent = Md;
    function Wu(t, e, a, l) {
      e = t.memoizedState, a = a(l, e), a = a == null ? e : v2({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
    }
    var $u = { enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = De(), r = Bn(l);
      r.payload = e, a != null && (r.callback = a), e = Hn(t, r, l), e !== null && (be(e, t, l), ni(e, t, l));
    }, enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = De(), r = Bn(l);
      r.tag = 1, r.payload = e, a != null && (r.callback = a), e = Hn(t, r, l), e !== null && (be(e, t, l), ni(e, t, l));
    }, enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = De(), l = Bn(a);
      l.tag = 2, e != null && (l.callback = e), e = Hn(t, l, a), e !== null && (be(e, t, a), ni(e, t, a));
    } };
    function Pd(t, e, a, l, r, o, d) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, o, d) : e.prototype && e.prototype.isPureReactComponent ? !Jl(a, l) || !Jl(r, o) : true;
    }
    function Jd(t, e, a, l) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && $u.enqueueReplaceState(e, e.state, null);
    }
    function Oa(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var l in e) l !== "ref" && (a[l] = e[l]);
      }
      if (t = t.defaultProps) {
        a === e && (a = v2({}, a));
        for (var r in t) a[r] === void 0 && (a[r] = t[r]);
      }
      return a;
    }
    function kd(t) {
      os(t);
    }
    function Fd(t) {
      console.error(t);
    }
    function Id(t) {
      os(t);
    }
    function Ds(t, e) {
      try {
        var a = t.onUncaughtError;
        a(e.value, { componentStack: e.stack });
      } catch (l) {
        setTimeout(function() {
          throw l;
        });
      }
    }
    function Wd(t, e, a) {
      try {
        var l = t.onCaughtError;
        l(a.value, { componentStack: a.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
      } catch (r) {
        setTimeout(function() {
          throw r;
        });
      }
    }
    function to(t, e, a) {
      return a = Bn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
        Ds(t, e);
      }, a;
    }
    function $d(t) {
      return t = Bn(t), t.tag = 3, t;
    }
    function th(t, e, a, l) {
      var r = a.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var o = l.value;
        t.payload = function() {
          return r(o);
        }, t.callback = function() {
          Wd(e, a, l);
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        Wd(e, a, l), typeof r != "function" && (Xn === null ? Xn = /* @__PURE__ */ new Set([this]) : Xn.add(this));
        var g = l.stack;
        this.componentDidCatch(l.value, { componentStack: g !== null ? g : "" });
      });
    }
    function Cg(t, e, a, l, r) {
      if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
        if (e = a.alternate, e !== null && ll(e, a, r, true), a = we.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ye === null ? Xs() : a.alternate === null && Qt === 0 && (Qt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = r, l === Ss ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), Ao(t, l, r)), false;
            case 22:
              return a.flags |= 65536, l === Ss ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Ao(t, l, r)), false;
          }
          throw Error(u(435, a.tag));
        }
        return Ao(t, l, r), Xs(), false;
      }
      if (vt) return e = we.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = r, l !== Su && (t = Error(u(422), { cause: l }), Il(je(t, a)))) : (l !== Su && (e = Error(u(423), { cause: l }), Il(je(e, a))), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, l = je(l, a), r = to(t.stateNode, l, r), Cu(t, r), Qt !== 4 && (Qt = 2)), false;
      var o = Error(u(520), { cause: l });
      if (o = je(o, a), pi === null ? pi = [o] : pi.push(o), Qt !== 4 && (Qt = 2), e === null) return true;
      l = je(l, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = r & -r, a.lanes |= t, t = to(a.stateNode, l, t), Cu(a, t), false;
          case 1:
            if (e = a.type, o = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Xn === null || !Xn.has(o)))) return a.flags |= 65536, r &= -r, a.lanes |= r, r = $d(r), th(r, t, a, l), Cu(a, r), false;
        }
        a = a.return;
      } while (a !== null);
      return false;
    }
    var eo = Error(u(461)), Jt = false;
    function re(t, e, a, l) {
      e.child = t === null ? ld(e, null, a, l) : xa(e, t.child, a, l);
    }
    function eh(t, e, a, l, r) {
      a = a.render;
      var o = e.ref;
      if ("ref" in l) {
        var d = {};
        for (var g in l) g !== "ref" && (d[g] = l[g]);
      } else d = l;
      return _a(e), l = ju(t, e, a, d, o, r), g = Bu(), t !== null && !Jt ? (Hu(t, e, r), yn(t, e, r)) : (vt && g && vu(e), e.flags |= 1, re(t, e, l, r), e.child);
    }
    function nh(t, e, a, l, r) {
      if (t === null) {
        var o = a.type;
        return typeof o == "function" && !mu(o) && o.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = o, ah(t, e, o, l, r)) : (t = hs(a.type, null, l, e, e.mode, r), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (o = t.child, !oo(t, r)) {
        var d = o.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Jl, a(d, l) && t.ref === e.ref) return yn(t, e, r);
      }
      return e.flags |= 1, t = on(o, l), t.ref = e.ref, t.return = e, e.child = t;
    }
    function ah(t, e, a, l, r) {
      if (t !== null) {
        var o = t.memoizedProps;
        if (Jl(o, l) && t.ref === e.ref) if (Jt = false, e.pendingProps = l = o, oo(t, r)) (t.flags & 131072) !== 0 && (Jt = true);
        else return e.lanes = t.lanes, yn(t, e, r);
      }
      return no(t, e, a, l, r);
    }
    function lh(t, e, a, l) {
      var r = l.children, o = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (o = o !== null ? o.baseLanes | a : a, t !== null) {
            for (l = e.child = t.child, r = 0; l !== null; ) r = r | l.lanes | l.childLanes, l = l.sibling;
            l = r & ~o;
          } else l = 0, e.child = null;
          return ih(t, e, o, a, l);
        }
        if ((a & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && vs(e, o !== null ? o.cachePool : null), o !== null ? rd(e, o) : Du(), ud(e);
        else return l = e.lanes = 536870912, ih(t, e, o !== null ? o.baseLanes | a : a, a, l);
      } else o !== null ? (vs(e, o.cachePool), rd(e, o), Yn(), e.memoizedState = null) : (t !== null && vs(e, null), Du(), Yn());
      return re(t, e, r, a), e.child;
    }
    function oi(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.sibling;
    }
    function ih(t, e, a, l, r) {
      var o = Au();
      return o = o === null ? null : { parent: Zt._currentValue, pool: o }, e.memoizedState = { baseLanes: a, cachePool: o }, t !== null && vs(e, null), Du(), ud(e), t !== null && ll(t, e, l, true), e.childLanes = r, null;
    }
    function Ls(t, e) {
      return e = Ns({ mode: e.mode, children: e.children }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function sh(t, e, a) {
      return xa(e, t.child, null, a), t = Ls(e, e.pendingProps), t.flags |= 2, Me(e), e.memoizedState = null, t;
    }
    function zg(t, e, a) {
      var l = e.pendingProps, r = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (vt) {
          if (l.mode === "hidden") return t = Ls(e, l), e.lanes = 536870912, oi(null, t);
          if (Uu(e), (t = jt) ? (t = gm(t, qe), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: Dn !== null ? { id: Fe, overflow: Ie } : null, retryLane: 536870912, hydrationErrors: null }, a = Vf(t), a.return = e, e.child = a, ie = e, jt = null)) : t = null, t === null) throw Un(e);
          return e.lanes = 536870912, null;
        }
        return Ls(e, l);
      }
      var o = t.memoizedState;
      if (o !== null) {
        var d = o.dehydrated;
        if (Uu(e), r) if (e.flags & 256) e.flags &= -257, e = sh(t, e, a);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(u(558));
        else if (Jt || ll(t, e, a, false), r = (a & t.childLanes) !== 0, Jt || r) {
          if (l = Dt, l !== null && (d = kc(l, a), d !== 0 && d !== o.retryLane)) throw o.retryLane = d, va(t, d), be(l, t, d), eo;
          Xs(), e = sh(t, e, a);
        } else t = o.treeContext, jt = Qe(d.nextSibling), ie = e, vt = true, Ln = null, qe = false, t !== null && Zf(e, t), e = Ls(e, l), e.flags |= 4096;
        return e;
      }
      return t = on(t.child, { mode: l.mode, children: l.children }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Us(t, e) {
      var a = e.ref;
      if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object") throw Error(u(284));
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function no(t, e, a, l, r) {
      return _a(e), a = ju(t, e, a, l, void 0, r), l = Bu(), t !== null && !Jt ? (Hu(t, e, r), yn(t, e, r)) : (vt && l && vu(e), e.flags |= 1, re(t, e, a, r), e.child);
    }
    function rh(t, e, a, l, r, o) {
      return _a(e), e.updateQueue = null, a = cd(e, l, a, r), od(t), l = Bu(), t !== null && !Jt ? (Hu(t, e, o), yn(t, e, o)) : (vt && l && vu(e), e.flags |= 1, re(t, e, a, o), e.child);
    }
    function uh(t, e, a, l, r) {
      if (_a(e), e.stateNode === null) {
        var o = tl, d = a.contextType;
        typeof d == "object" && d !== null && (o = se(d)), o = new a(l, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = $u, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = l, o.state = e.memoizedState, o.refs = {}, wu(e), d = a.contextType, o.context = typeof d == "object" && d !== null ? se(d) : tl, o.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Wu(e, a, d, l), o.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (d = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), d !== o.state && $u.enqueueReplaceState(o, o.state, null), li(e, l, o, r), ai(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), l = true;
      } else if (t === null) {
        o = e.stateNode;
        var g = e.memoizedProps, x = Oa(a, g);
        o.props = x;
        var L = o.context, B2 = a.contextType;
        d = tl, typeof B2 == "object" && B2 !== null && (d = se(B2));
        var V = a.getDerivedStateFromProps;
        B2 = typeof V == "function" || typeof o.getSnapshotBeforeUpdate == "function", g = e.pendingProps !== g, B2 || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (g || L !== d) && Jd(e, o, l, d), jn = false;
        var U = e.memoizedState;
        o.state = U, li(e, l, o, r), ai(), L = e.memoizedState, g || U !== L || jn ? (typeof V == "function" && (Wu(e, a, V, l), L = e.memoizedState), (x = jn || Pd(e, a, x, l, U, L, d)) ? (B2 || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = L), o.props = l, o.state = L, o.context = d, l = x) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), l = false);
      } else {
        o = e.stateNode, Mu(t, e), d = e.memoizedProps, B2 = Oa(a, d), o.props = B2, V = e.pendingProps, U = o.context, L = a.contextType, x = tl, typeof L == "object" && L !== null && (x = se(L)), g = a.getDerivedStateFromProps, (L = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (d !== V || U !== x) && Jd(e, o, l, x), jn = false, U = e.memoizedState, o.state = U, li(e, l, o, r), ai();
        var N = e.memoizedState;
        d !== V || U !== N || jn || t !== null && t.dependencies !== null && ys(t.dependencies) ? (typeof g == "function" && (Wu(e, a, g, l), N = e.memoizedState), (B2 = jn || Pd(e, a, B2, l, U, N, x) || t !== null && t.dependencies !== null && ys(t.dependencies)) ? (L || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, N, x), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(l, N, x)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || d === t.memoizedProps && U === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = N), o.props = l, o.state = N, o.context = x, l = B2) : (typeof o.componentDidUpdate != "function" || d === t.memoizedProps && U === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024), l = false);
      }
      return o = l, Us(t, e), l = (e.flags & 128) !== 0, o || l ? (o = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && l ? (e.child = xa(e, t.child, null, r), e.child = xa(e, null, a, r)) : re(t, e, a, r), e.memoizedState = o.state, t = e.child) : t = yn(t, e, r), t;
    }
    function oh(t, e, a, l) {
      return Sa(), e.flags |= 256, re(t, e, a, l), e.child;
    }
    var ao = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function lo(t) {
      return { baseLanes: t, cachePool: Wf() };
    }
    function io(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= ze), t;
    }
    function ch(t, e, a) {
      var l = e.pendingProps, r = false, o = (e.flags & 128) !== 0, d;
      if ((d = o) || (d = t !== null && t.memoizedState === null ? false : (Xt.current & 2) !== 0), d && (r = true, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (vt) {
          if (r ? qn(e) : Yn(), (t = jt) ? (t = gm(t, qe), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: Dn !== null ? { id: Fe, overflow: Ie } : null, retryLane: 536870912, hydrationErrors: null }, a = Vf(t), a.return = e, e.child = a, ie = e, jt = null)) : t = null, t === null) throw Un(e);
          return Go(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var g = l.children;
        return l = l.fallback, r ? (Yn(), r = e.mode, g = Ns({ mode: "hidden", children: g }, r), l = ga(l, r, a, null), g.return = e, l.return = e, g.sibling = l, e.child = g, l = e.child, l.memoizedState = lo(a), l.childLanes = io(t, d, a), e.memoizedState = ao, oi(null, l)) : (qn(e), so(e, g));
      }
      var x = t.memoizedState;
      if (x !== null && (g = x.dehydrated, g !== null)) {
        if (o) e.flags & 256 ? (qn(e), e.flags &= -257, e = ro(t, e, a)) : e.memoizedState !== null ? (Yn(), e.child = t.child, e.flags |= 128, e = null) : (Yn(), g = l.fallback, r = e.mode, l = Ns({ mode: "visible", children: l.children }, r), g = ga(g, r, a, null), g.flags |= 2, l.return = e, g.return = e, l.sibling = g, e.child = l, xa(e, t.child, null, a), l = e.child, l.memoizedState = lo(a), l.childLanes = io(t, d, a), e.memoizedState = ao, e = oi(null, l));
        else if (qn(e), Go(g)) {
          if (d = g.nextSibling && g.nextSibling.dataset, d) var L = d.dgst;
          d = L, l = Error(u(419)), l.stack = "", l.digest = d, Il({ value: l, source: null, stack: null }), e = ro(t, e, a);
        } else if (Jt || ll(t, e, a, false), d = (a & t.childLanes) !== 0, Jt || d) {
          if (d = Dt, d !== null && (l = kc(d, a), l !== 0 && l !== x.retryLane)) throw x.retryLane = l, va(t, l), be(d, t, l), eo;
          Qo(g) || Xs(), e = ro(t, e, a);
        } else Qo(g) ? (e.flags |= 192, e.child = t.child, e = null) : (t = x.treeContext, jt = Qe(g.nextSibling), ie = e, vt = true, Ln = null, qe = false, t !== null && Zf(e, t), e = so(e, l.children), e.flags |= 4096);
        return e;
      }
      return r ? (Yn(), g = l.fallback, r = e.mode, x = t.child, L = x.sibling, l = on(x, { mode: "hidden", children: l.children }), l.subtreeFlags = x.subtreeFlags & 65011712, L !== null ? g = on(L, g) : (g = ga(g, r, a, null), g.flags |= 2), g.return = e, l.return = e, l.sibling = g, e.child = l, oi(null, l), l = e.child, g = t.child.memoizedState, g === null ? g = lo(a) : (r = g.cachePool, r !== null ? (x = Zt._currentValue, r = r.parent !== x ? { parent: x, pool: x } : r) : r = Wf(), g = { baseLanes: g.baseLanes | a, cachePool: r }), l.memoizedState = g, l.childLanes = io(t, d, a), e.memoizedState = ao, oi(t.child, l)) : (qn(e), a = t.child, t = a.sibling, a = on(a, { mode: "visible", children: l.children }), a.return = e, a.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function so(t, e) {
      return e = Ns({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
    }
    function Ns(t, e) {
      return t = Oe(22, t, null, e), t.lanes = 0, t;
    }
    function ro(t, e, a) {
      return xa(e, t.child, null, a), t = so(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function fh(t, e, a) {
      t.lanes |= e;
      var l = t.alternate;
      l !== null && (l.lanes |= e), Eu(t.return, e, a);
    }
    function uo(t, e, a, l, r, o) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: l, tail: a, tailMode: r, treeForkCount: o } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = l, d.tail = a, d.tailMode = r, d.treeForkCount = o);
    }
    function dh(t, e, a) {
      var l = e.pendingProps, r = l.revealOrder, o = l.tail;
      l = l.children;
      var d = Xt.current, g = (d & 2) !== 0;
      if (g ? (d = d & 1 | 2, e.flags |= 128) : d &= 1, J(Xt, d), re(t, e, l, a), l = vt ? Fl : 0, !g && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && fh(t, a, e);
        else if (t.tag === 19) fh(t, a, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (r) {
        case "forwards":
          for (a = e.child, r = null; a !== null; ) t = a.alternate, t !== null && Rs(t) === null && (r = a), a = a.sibling;
          a = r, a === null ? (r = e.child, e.child = null) : (r = a.sibling, a.sibling = null), uo(e, false, r, a, o, l);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, r = e.child, e.child = null; r !== null; ) {
            if (t = r.alternate, t !== null && Rs(t) === null) {
              e.child = r;
              break;
            }
            t = r.sibling, r.sibling = a, a = r, r = t;
          }
          uo(e, true, a, null, o, l);
          break;
        case "together":
          uo(e, false, null, null, void 0, l);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function yn(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), Vn |= e.lanes, (a & e.childLanes) === 0) if (t !== null) {
        if (ll(t, e, a, false), (a & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(u(153));
      if (e.child !== null) {
        for (t = e.child, a = on(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; ) t = t.sibling, a = a.sibling = on(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function oo(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && ys(t)));
    }
    function Dg(t, e, a) {
      switch (e.tag) {
        case 3:
          Vt(e, e.stateNode.containerInfo), Nn(e, Zt, t.memoizedState.cache), Sa();
          break;
        case 27:
        case 5:
          nn(e);
          break;
        case 4:
          Vt(e, e.stateNode.containerInfo);
          break;
        case 10:
          Nn(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, Uu(e), null;
          break;
        case 13:
          var l = e.memoizedState;
          if (l !== null) return l.dehydrated !== null ? (qn(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? ch(t, e, a) : (qn(e), t = yn(t, e, a), t !== null ? t.sibling : null);
          qn(e);
          break;
        case 19:
          var r = (t.flags & 128) !== 0;
          if (l = (a & e.childLanes) !== 0, l || (ll(t, e, a, false), l = (a & e.childLanes) !== 0), r) {
            if (l) return dh(t, e, a);
            e.flags |= 128;
          }
          if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), J(Xt, Xt.current), l) break;
          return null;
        case 22:
          return e.lanes = 0, lh(t, e, a, e.pendingProps);
        case 24:
          Nn(e, Zt, t.memoizedState.cache);
      }
      return yn(t, e, a);
    }
    function hh(t, e, a) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Jt = true;
      else {
        if (!oo(t, a) && (e.flags & 128) === 0) return Jt = false, Dg(t, e, a);
        Jt = (t.flags & 131072) !== 0;
      }
      else Jt = false, vt && (e.flags & 1048576) !== 0 && Kf(e, Fl, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var l = e.pendingProps;
            if (t = Ra(e.elementType), e.type = t, typeof t == "function") mu(t) ? (l = Oa(t, l), e.tag = 1, e = uh(null, e, t, l, a)) : (e.tag = 0, e = no(null, e, t, l, a));
            else {
              if (t != null) {
                var r = t.$$typeof;
                if (r === H) {
                  e.tag = 11, e = eh(null, e, t, l, a);
                  break t;
                } else if (r === X) {
                  e.tag = 14, e = nh(null, e, t, l, a);
                  break t;
                }
              }
              throw e = Gt(t) || t, Error(u(306, e, ""));
            }
          }
          return e;
        case 0:
          return no(t, e, e.type, e.pendingProps, a);
        case 1:
          return l = e.type, r = Oa(l, e.pendingProps), uh(t, e, l, r, a);
        case 3:
          t: {
            if (Vt(e, e.stateNode.containerInfo), t === null) throw Error(u(387));
            l = e.pendingProps;
            var o = e.memoizedState;
            r = o.element, Mu(t, e), li(e, l, null, a);
            var d = e.memoizedState;
            if (l = d.cache, Nn(e, Zt, l), l !== o.cache && Ru(e, [Zt], a, true), ai(), l = d.element, o.isDehydrated) if (o = { element: l, isDehydrated: false, cache: d.cache }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
              e = oh(t, e, l, a);
              break t;
            } else if (l !== r) {
              r = je(Error(u(424)), e), Il(r), e = oh(t, e, l, a);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, jt = Qe(t.firstChild), ie = e, vt = true, Ln = null, qe = true, a = ld(e, null, l, a), e.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Sa(), l === r) {
                e = yn(t, e, a);
                break t;
              }
              re(t, e, l, a);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Us(t, e), t === null ? (a = Tm(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : vt || (a = e.type, t = e.pendingProps, l = Is(ft.current).createElement(a), l[le] = e, l[me] = t, ue(l, a, t), te(l), e.stateNode = l) : e.memoizedState = Tm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return nn(e), t === null && vt && (l = e.stateNode = _m(e.type, e.pendingProps, ft.current), ie = e, qe = true, r = jt, Jn(e.type) ? (Vo = r, jt = Qe(l.firstChild)) : jt = r), re(t, e, e.pendingProps.children, a), Us(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && vt && ((r = l = jt) && (l = u0(l, e.type, e.pendingProps, qe), l !== null ? (e.stateNode = l, ie = e, jt = Qe(l.firstChild), qe = false, r = true) : r = false), r || Un(e)), nn(e), r = e.type, o = e.pendingProps, d = t !== null ? t.memoizedProps : null, l = o.children, Ho(r, o) ? l = null : d !== null && Ho(r, d) && (e.flags |= 32), e.memoizedState !== null && (r = ju(t, e, Rg, null, null, a), Ti._currentValue = r), Us(t, e), re(t, e, l, a), e.child;
        case 6:
          return t === null && vt && ((t = a = jt) && (a = o0(a, e.pendingProps, qe), a !== null ? (e.stateNode = a, ie = e, jt = null, t = true) : t = false), t || Un(e)), null;
        case 13:
          return ch(t, e, a);
        case 4:
          return Vt(e, e.stateNode.containerInfo), l = e.pendingProps, t === null ? e.child = xa(e, null, l, a) : re(t, e, l, a), e.child;
        case 11:
          return eh(t, e, e.type, e.pendingProps, a);
        case 7:
          return re(t, e, e.pendingProps, a), e.child;
        case 8:
          return re(t, e, e.pendingProps.children, a), e.child;
        case 12:
          return re(t, e, e.pendingProps.children, a), e.child;
        case 10:
          return l = e.pendingProps, Nn(e, e.type, l.value), re(t, e, l.children, a), e.child;
        case 9:
          return r = e.type._context, l = e.pendingProps.children, _a(e), r = se(r), l = l(r), e.flags |= 1, re(t, e, l, a), e.child;
        case 14:
          return nh(t, e, e.type, e.pendingProps, a);
        case 15:
          return ah(t, e, e.type, e.pendingProps, a);
        case 19:
          return dh(t, e, a);
        case 31:
          return zg(t, e, a);
        case 22:
          return lh(t, e, a, e.pendingProps);
        case 24:
          return _a(e), l = se(Zt), t === null ? (r = Au(), r === null && (r = Dt, o = Tu(), r.pooledCache = o, o.refCount++, o !== null && (r.pooledCacheLanes |= a), r = o), e.memoizedState = { parent: l, cache: r }, wu(e), Nn(e, Zt, r)) : ((t.lanes & a) !== 0 && (Mu(t, e), li(e, null, null, a), ai()), r = t.memoizedState, o = e.memoizedState, r.parent !== l ? (r = { parent: l, cache: l }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), Nn(e, Zt, l)) : (l = o.cache, Nn(e, Zt, l), l !== r.cache && Ru(e, [Zt], a, true))), re(t, e, e.pendingProps.children, a), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(u(156, e.tag));
    }
    function pn(t) {
      t.flags |= 4;
    }
    function co(t, e, a, l, r) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (r & 335544128) === r) if (t.stateNode.complete) t.flags |= 8192;
        else if (Yh()) t.flags |= 8192;
        else throw Ta = Ss, Ou;
      } else t.flags &= -16777217;
    }
    function mh(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Mm(e)) if (Yh()) t.flags |= 8192;
      else throw Ta = Ss, Ou;
    }
    function js(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Zc() : 536870912, t.lanes |= e, pl |= e);
    }
    function ci(t, e) {
      if (!vt) switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; ) a.alternate !== null && (l = a), a = a.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
    }
    function Bt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
      if (e) for (var r = t.child; r !== null; ) a |= r.lanes | r.childLanes, l |= r.subtreeFlags & 65011712, l |= r.flags & 65011712, r.return = t, r = r.sibling;
      else for (r = t.child; r !== null; ) a |= r.lanes | r.childLanes, l |= r.subtreeFlags, l |= r.flags, r.return = t, r = r.sibling;
      return t.subtreeFlags |= l, t.childLanes = a, e;
    }
    function Lg(t, e, a) {
      var l = e.pendingProps;
      switch (gu(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Bt(e), null;
        case 1:
          return Bt(e), null;
        case 3:
          return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), dn(Zt), zt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (al(e) ? pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, bu())), Bt(e), null;
        case 26:
          var r = e.type, o = e.memoizedState;
          return t === null ? (pn(e), o !== null ? (Bt(e), mh(e, o)) : (Bt(e), co(e, r, null, l, a))) : o ? o !== t.memoizedState ? (pn(e), Bt(e), mh(e, o)) : (Bt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && pn(e), Bt(e), co(e, r, t, l, a)), null;
        case 27:
          if (an(e), a = ft.current, r = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && pn(e);
          else {
            if (!l) {
              if (e.stateNode === null) throw Error(u(166));
              return Bt(e), null;
            }
            t = W.current, al(e) ? Pf(e) : (t = _m(r, l, a), e.stateNode = t, pn(e));
          }
          return Bt(e), null;
        case 5:
          if (an(e), r = e.type, t !== null && e.stateNode != null) t.memoizedProps !== l && pn(e);
          else {
            if (!l) {
              if (e.stateNode === null) throw Error(u(166));
              return Bt(e), null;
            }
            if (o = W.current, al(e)) Pf(e);
            else {
              var d = Is(ft.current);
              switch (o) {
                case 1:
                  o = d.createElementNS("http://www.w3.org/2000/svg", r);
                  break;
                case 2:
                  o = d.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                  break;
                default:
                  switch (r) {
                    case "svg":
                      o = d.createElementNS("http://www.w3.org/2000/svg", r);
                      break;
                    case "math":
                      o = d.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                      break;
                    case "script":
                      o = d.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
                      break;
                    case "select":
                      o = typeof l.is == "string" ? d.createElement("select", { is: l.is }) : d.createElement("select"), l.multiple ? o.multiple = true : l.size && (o.size = l.size);
                      break;
                    default:
                      o = typeof l.is == "string" ? d.createElement(r, { is: l.is }) : d.createElement(r);
                  }
              }
              o[le] = e, o[me] = l;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e) break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = o;
              t: switch (ue(o, r, l), r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break t;
                case "img":
                  l = true;
                  break t;
                default:
                  l = false;
              }
              l && pn(e);
            }
          }
          return Bt(e), co(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== l && pn(e);
          else {
            if (typeof l != "string" && e.stateNode === null) throw Error(u(166));
            if (t = ft.current, al(e)) {
              if (t = e.stateNode, a = e.memoizedProps, l = null, r = ie, r !== null) switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
              t[le] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === true || cm(t.nodeValue, a)), t || Un(e, true);
            } else t = Is(t).createTextNode(l), t[le] = e, e.stateNode = t;
          }
          return Bt(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (l = al(e), a !== null) {
              if (t === null) {
                if (!l) throw Error(u(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
                t[le] = e;
              } else Sa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Bt(e), t = false;
            } else a = bu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = true;
            if (!t) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
            if ((e.flags & 128) !== 0) throw Error(u(558));
          }
          return Bt(e), null;
        case 13:
          if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (r = al(e), l !== null && l.dehydrated !== null) {
              if (t === null) {
                if (!r) throw Error(u(318));
                if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(u(317));
                r[le] = e;
              } else Sa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Bt(e), r = false;
            } else r = bu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), r = true;
            if (!r) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
          }
          return Me(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, r = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (r = l.alternate.memoizedState.cachePool.pool), o = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool), o !== r && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), js(e, e.updateQueue), Bt(e), null);
        case 4:
          return zt(), t === null && Lo(e.stateNode.containerInfo), Bt(e), null;
        case 10:
          return dn(e.type), Bt(e), null;
        case 19:
          if (G(Xt), l = e.memoizedState, l === null) return Bt(e), null;
          if (r = (e.flags & 128) !== 0, o = l.rendering, o === null) if (r) ci(l, false);
          else {
            if (Qt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (o = Rs(t), o !== null) {
                for (e.flags |= 128, ci(l, false), t = o.updateQueue, e.updateQueue = t, js(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; ) Gf(a, t), a = a.sibling;
                return J(Xt, Xt.current & 1 | 2), vt && cn(e, l.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            l.tail !== null && ce() > Qs && (e.flags |= 128, r = true, ci(l, false), e.lanes = 4194304);
          }
          else {
            if (!r) if (t = Rs(o), t !== null) {
              if (e.flags |= 128, r = true, t = t.updateQueue, e.updateQueue = t, js(e, t), ci(l, true), l.tail === null && l.tailMode === "hidden" && !o.alternate && !vt) return Bt(e), null;
            } else 2 * ce() - l.renderingStartTime > Qs && a !== 536870912 && (e.flags |= 128, r = true, ci(l, false), e.lanes = 4194304);
            l.isBackwards ? (o.sibling = e.child, e.child = o) : (t = l.last, t !== null ? t.sibling = o : e.child = o, l.last = o);
          }
          return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ce(), t.sibling = null, a = Xt.current, J(Xt, r ? a & 1 | 2 : a & 1), vt && cn(e, l.treeForkCount), t) : (Bt(e), null);
        case 22:
        case 23:
          return Me(e), Lu(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Bt(e), a = e.updateQueue, a !== null && js(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && G(Ea), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), dn(Zt), Bt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(u(156, e.tag));
    }
    function Ug(t, e) {
      switch (gu(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return dn(Zt), zt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return an(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (Me(e), e.alternate === null) throw Error(u(340));
            Sa();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (Me(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(u(340));
            Sa();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return G(Xt), null;
        case 4:
          return zt(), null;
        case 10:
          return dn(e.type), null;
        case 22:
        case 23:
          return Me(e), Lu(), t !== null && G(Ea), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return dn(Zt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function yh(t, e) {
      switch (gu(e), e.tag) {
        case 3:
          dn(Zt), zt();
          break;
        case 26:
        case 27:
        case 5:
          an(e);
          break;
        case 4:
          zt();
          break;
        case 31:
          e.memoizedState !== null && Me(e);
          break;
        case 13:
          Me(e);
          break;
        case 19:
          G(Xt);
          break;
        case 10:
          dn(e.type);
          break;
        case 22:
        case 23:
          Me(e), Lu(), t !== null && G(Ea);
          break;
        case 24:
          dn(Zt);
      }
    }
    function fi(t, e) {
      try {
        var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
        if (l !== null) {
          var r = l.next;
          a = r;
          do {
            if ((a.tag & t) === t) {
              l = void 0;
              var o = a.create, d = a.inst;
              l = o(), d.destroy = l;
            }
            a = a.next;
          } while (a !== r);
        }
      } catch (g) {
        Ot(e, e.return, g);
      }
    }
    function Qn(t, e, a) {
      try {
        var l = e.updateQueue, r = l !== null ? l.lastEffect : null;
        if (r !== null) {
          var o = r.next;
          l = o;
          do {
            if ((l.tag & t) === t) {
              var d = l.inst, g = d.destroy;
              if (g !== void 0) {
                d.destroy = void 0, r = e;
                var x = a, L = g;
                try {
                  L();
                } catch (B2) {
                  Ot(r, x, B2);
                }
              }
            }
            l = l.next;
          } while (l !== o);
        }
      } catch (B2) {
        Ot(e, e.return, B2);
      }
    }
    function ph(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        try {
          sd(e, a);
        } catch (l) {
          Ot(t, t.return, l);
        }
      }
    }
    function vh(t, e, a) {
      a.props = Oa(t.type, t.memoizedProps), a.state = t.memoizedState;
      try {
        a.componentWillUnmount();
      } catch (l) {
        Ot(t, e, l);
      }
    }
    function di(t, e) {
      try {
        var a = t.ref;
        if (a !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var l = t.stateNode;
              break;
            case 30:
              l = t.stateNode;
              break;
            default:
              l = t.stateNode;
          }
          typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
        }
      } catch (r) {
        Ot(t, e, r);
      }
    }
    function We(t, e) {
      var a = t.ref, l = t.refCleanup;
      if (a !== null) if (typeof l == "function") try {
        l();
      } catch (r) {
        Ot(t, e, r);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof a == "function") try {
        a(null);
      } catch (r) {
        Ot(t, e, r);
      }
      else a.current = null;
    }
    function gh(t) {
      var e = t.type, a = t.memoizedProps, l = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            a.autoFocus && l.focus();
            break t;
          case "img":
            a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
        }
      } catch (r) {
        Ot(t, t.return, r);
      }
    }
    function fo(t, e, a) {
      try {
        var l = t.stateNode;
        n0(l, t.type, a, e), l[me] = e;
      } catch (r) {
        Ot(t, t.return, r);
      }
    }
    function Sh(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Jn(t.type) || t.tag === 4;
    }
    function ho(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Sh(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Jn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function mo(t, e, a) {
      var l = t.tag;
      if (l === 5 || l === 6) t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = rn));
      else if (l !== 4 && (l === 27 && Jn(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null)) for (mo(t, e, a), t = t.sibling; t !== null; ) mo(t, e, a), t = t.sibling;
    }
    function Bs(t, e, a) {
      var l = t.tag;
      if (l === 5 || l === 6) t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (l !== 4 && (l === 27 && Jn(t.type) && (a = t.stateNode), t = t.child, t !== null)) for (Bs(t, e, a), t = t.sibling; t !== null; ) Bs(t, e, a), t = t.sibling;
    }
    function bh(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        for (var l = t.type, r = e.attributes; r.length; ) e.removeAttributeNode(r[0]);
        ue(e, l, a), e[le] = t, e[me] = a;
      } catch (o) {
        Ot(t, t.return, o);
      }
    }
    var vn = false, kt = false, yo = false, _h = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
    function Ng(t, e) {
      if (t = t.containerInfo, jo = lr, t = Lf(t), ru(t)) {
        if ("selectionStart" in t) var a = { start: t.selectionStart, end: t.selectionEnd };
        else t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var r = l.anchorOffset, o = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, o.nodeType;
            } catch {
              a = null;
              break t;
            }
            var d = 0, g = -1, x = -1, L = 0, B2 = 0, V = t, U = null;
            e: for (; ; ) {
              for (var N; V !== a || r !== 0 && V.nodeType !== 3 || (g = d + r), V !== o || l !== 0 && V.nodeType !== 3 || (x = d + l), V.nodeType === 3 && (d += V.nodeValue.length), (N = V.firstChild) !== null; ) U = V, V = N;
              for (; ; ) {
                if (V === t) break e;
                if (U === a && ++L === r && (g = d), U === o && ++B2 === l && (x = d), (N = V.nextSibling) !== null) break;
                V = U, U = V.parentNode;
              }
              V = N;
            }
            a = g === -1 || x === -1 ? null : { start: g, end: x };
          } else a = null;
        }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (Bo = { focusedElem: t, selectionRange: a }, lr = false, ee = e; ee !== null; ) if (e = ee, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ee = t;
      else for (; ee !== null; ) {
        switch (e = ee, o = e.alternate, t = e.flags, e.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (a = 0; a < t.length; a++) r = t[a], r.ref.impl = r.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && o !== null) {
              t = void 0, a = e, r = o.memoizedProps, o = o.memoizedState, l = a.stateNode;
              try {
                var $ = Oa(a.type, r);
                t = l.getSnapshotBeforeUpdate($, o), l.__reactInternalSnapshotBeforeUpdate = t;
              } catch (rt) {
                Ot(a, a.return, rt);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9) Yo(t);
              else if (a === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Yo(t);
                  break;
                default:
                  t.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((t & 1024) !== 0) throw Error(u(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, ee = t;
          break;
        }
        ee = e.return;
      }
    }
    function Eh(t, e, a) {
      var l = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Sn(t, a), l & 4 && fi(5, a);
          break;
        case 1:
          if (Sn(t, a), l & 4) if (t = a.stateNode, e === null) try {
            t.componentDidMount();
          } catch (d) {
            Ot(a, a.return, d);
          }
          else {
            var r = Oa(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Ot(a, a.return, d);
            }
          }
          l & 64 && ph(a), l & 512 && di(a, a.return);
          break;
        case 3:
          if (Sn(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
            if (e = null, a.child !== null) switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
            try {
              sd(t, e);
            } catch (d) {
              Ot(a, a.return, d);
            }
          }
          break;
        case 27:
          e === null && l & 4 && bh(a);
        case 26:
        case 5:
          Sn(t, a), e === null && l & 4 && gh(a), l & 512 && di(a, a.return);
          break;
        case 12:
          Sn(t, a);
          break;
        case 31:
          Sn(t, a), l & 4 && xh(t, a);
          break;
        case 13:
          Sn(t, a), l & 4 && Ah(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = Xg.bind(null, a), c0(t, a))));
          break;
        case 22:
          if (l = a.memoizedState !== null || vn, !l) {
            e = e !== null && e.memoizedState !== null || kt, r = vn;
            var o = kt;
            vn = l, (kt = e) && !o ? bn(t, a, (a.subtreeFlags & 8772) !== 0) : Sn(t, a), vn = r, kt = o;
          }
          break;
        case 30:
          break;
        default:
          Sn(t, a);
      }
    }
    function Rh(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Rh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Xr(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Ht = null, pe = false;
    function gn(t, e, a) {
      for (a = a.child; a !== null; ) Th(t, e, a), a = a.sibling;
    }
    function Th(t, e, a) {
      if (Te && typeof Te.onCommitFiberUnmount == "function") try {
        Te.onCommitFiberUnmount(jl, a);
      } catch {
      }
      switch (a.tag) {
        case 26:
          kt || We(a, e), gn(t, e, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          kt || We(a, e);
          var l = Ht, r = pe;
          Jn(a.type) && (Ht = a.stateNode, pe = false), gn(t, e, a), _i(a.stateNode), Ht = l, pe = r;
          break;
        case 5:
          kt || We(a, e);
        case 6:
          if (l = Ht, r = pe, Ht = null, gn(t, e, a), Ht = l, pe = r, Ht !== null) if (pe) try {
            (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(a.stateNode);
          } catch (o) {
            Ot(a, e, o);
          }
          else try {
            Ht.removeChild(a.stateNode);
          } catch (o) {
            Ot(a, e, o);
          }
          break;
        case 18:
          Ht !== null && (pe ? (t = Ht, pm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), Tl(t)) : pm(Ht, a.stateNode));
          break;
        case 4:
          l = Ht, r = pe, Ht = a.stateNode.containerInfo, pe = true, gn(t, e, a), Ht = l, pe = r;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Qn(2, a, e), kt || Qn(4, a, e), gn(t, e, a);
          break;
        case 1:
          kt || (We(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && vh(a, e, l)), gn(t, e, a);
          break;
        case 21:
          gn(t, e, a);
          break;
        case 22:
          kt = (l = kt) || a.memoizedState !== null, gn(t, e, a), kt = l;
          break;
        default:
          gn(t, e, a);
      }
    }
    function xh(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Tl(t);
        } catch (a) {
          Ot(e, e.return, a);
        }
      }
    }
    function Ah(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Tl(t);
      } catch (a) {
        Ot(e, e.return, a);
      }
    }
    function jg(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new _h()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new _h()), e;
        default:
          throw Error(u(435, t.tag));
      }
    }
    function Hs(t, e) {
      var a = jg(t);
      e.forEach(function(l) {
        if (!a.has(l)) {
          a.add(l);
          var r = Kg.bind(null, t, l);
          l.then(r, r);
        }
      });
    }
    function ve(t, e) {
      var a = e.deletions;
      if (a !== null) for (var l = 0; l < a.length; l++) {
        var r = a[l], o = t, d = e, g = d;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Jn(g.type)) {
                Ht = g.stateNode, pe = false;
                break t;
              }
              break;
            case 5:
              Ht = g.stateNode, pe = false;
              break t;
            case 3:
            case 4:
              Ht = g.stateNode.containerInfo, pe = true;
              break t;
          }
          g = g.return;
        }
        if (Ht === null) throw Error(u(160));
        Th(o, d, r), Ht = null, pe = false, o = r.alternate, o !== null && (o.return = null), r.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Oh(e, t), e = e.sibling;
    }
    var Ke = null;
    function Oh(t, e) {
      var a = t.alternate, l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ve(e, t), ge(t), l & 4 && (Qn(3, t, t.return), fi(3, t), Qn(5, t, t.return));
          break;
        case 1:
          ve(e, t), ge(t), l & 512 && (kt || a === null || We(a, a.return)), l & 64 && vn && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
          break;
        case 26:
          var r = Ke;
          if (ve(e, t), ge(t), l & 512 && (kt || a === null || We(a, a.return)), l & 4) {
            var o = a !== null ? a.memoizedState : null;
            if (l = t.memoizedState, a === null) if (l === null) if (t.stateNode === null) {
              t: {
                l = t.type, a = t.memoizedProps, r = r.ownerDocument || r;
                e: switch (l) {
                  case "title":
                    o = r.getElementsByTagName("title")[0], (!o || o[ql] || o[le] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = r.createElement(l), r.head.insertBefore(o, r.querySelector("head > title"))), ue(o, l, a), o[le] = t, te(o), l = o;
                    break t;
                  case "link":
                    var d = Om("link", "href", r).get(l + (a.href || ""));
                    if (d) {
                      for (var g = 0; g < d.length; g++) if (o = d[g], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                        d.splice(g, 1);
                        break e;
                      }
                    }
                    o = r.createElement(l), ue(o, l, a), r.head.appendChild(o);
                    break;
                  case "meta":
                    if (d = Om("meta", "content", r).get(l + (a.content || ""))) {
                      for (g = 0; g < d.length; g++) if (o = d[g], o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                        d.splice(g, 1);
                        break e;
                      }
                    }
                    o = r.createElement(l), ue(o, l, a), r.head.appendChild(o);
                    break;
                  default:
                    throw Error(u(468, l));
                }
                o[le] = t, te(o), l = o;
              }
              t.stateNode = l;
            } else wm(r, t.type, t.stateNode);
            else t.stateNode = Am(r, l, t.memoizedProps);
            else o !== l ? (o === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : o.count--, l === null ? wm(r, t.type, t.stateNode) : Am(r, l, t.memoizedProps)) : l === null && t.stateNode !== null && fo(t, t.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          ve(e, t), ge(t), l & 512 && (kt || a === null || We(a, a.return)), a !== null && l & 4 && fo(t, t.memoizedProps, a.memoizedProps);
          break;
        case 5:
          if (ve(e, t), ge(t), l & 512 && (kt || a === null || We(a, a.return)), t.flags & 32) {
            r = t.stateNode;
            try {
              Pa(r, "");
            } catch ($) {
              Ot(t, t.return, $);
            }
          }
          l & 4 && t.stateNode != null && (r = t.memoizedProps, fo(t, r, a !== null ? a.memoizedProps : r)), l & 1024 && (yo = true);
          break;
        case 6:
          if (ve(e, t), ge(t), l & 4) {
            if (t.stateNode === null) throw Error(u(162));
            l = t.memoizedProps, a = t.stateNode;
            try {
              a.nodeValue = l;
            } catch ($) {
              Ot(t, t.return, $);
            }
          }
          break;
        case 3:
          if (tr = null, r = Ke, Ke = Ws(e.containerInfo), ve(e, t), Ke = r, ge(t), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
            Tl(e.containerInfo);
          } catch ($) {
            Ot(t, t.return, $);
          }
          yo && (yo = false, wh(t));
          break;
        case 4:
          l = Ke, Ke = Ws(t.stateNode.containerInfo), ve(e, t), ge(t), Ke = l;
          break;
        case 12:
          ve(e, t), ge(t);
          break;
        case 31:
          ve(e, t), ge(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Hs(t, l)));
          break;
        case 13:
          ve(e, t), ge(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ys = ce()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Hs(t, l)));
          break;
        case 22:
          r = t.memoizedState !== null;
          var x = a !== null && a.memoizedState !== null, L = vn, B2 = kt;
          if (vn = L || r, kt = B2 || x, ve(e, t), kt = B2, vn = L, ge(t), l & 8192) t: for (e = t.stateNode, e._visibility = r ? e._visibility & -2 : e._visibility | 1, r && (a === null || x || vn || kt || wa(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                x = a = e;
                try {
                  if (o = x.stateNode, r) d = o.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    g = x.stateNode;
                    var V = x.memoizedProps.style, U = V != null && V.hasOwnProperty("display") ? V.display : null;
                    g.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch ($) {
                  Ot(x, x.return, $);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = r ? "" : x.memoizedProps;
                } catch ($) {
                  Ot(x, x.return, $);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                x = e;
                try {
                  var N = x.stateNode;
                  r ? vm(N, true) : vm(x.stateNode, false);
                } catch ($) {
                  Ot(x, x.return, $);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), e = e.return;
            }
            a === e && (a = null), e.sibling.return = e.return, e = e.sibling;
          }
          l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Hs(t, a))));
          break;
        case 19:
          ve(e, t), ge(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Hs(t, l)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ve(e, t), ge(t);
      }
    }
    function ge(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var a, l = t.return; l !== null; ) {
            if (Sh(l)) {
              a = l;
              break;
            }
            l = l.return;
          }
          if (a == null) throw Error(u(160));
          switch (a.tag) {
            case 27:
              var r = a.stateNode, o = ho(t);
              Bs(t, o, r);
              break;
            case 5:
              var d = a.stateNode;
              a.flags & 32 && (Pa(d, ""), a.flags &= -33);
              var g = ho(t);
              Bs(t, g, d);
              break;
            case 3:
            case 4:
              var x = a.stateNode.containerInfo, L = ho(t);
              mo(t, L, x);
              break;
            default:
              throw Error(u(161));
          }
        } catch (B2) {
          Ot(t, t.return, B2);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function wh(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        wh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function Sn(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Eh(t, e.alternate, e), e = e.sibling;
    }
    function wa(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Qn(4, e, e.return), wa(e);
            break;
          case 1:
            We(e, e.return);
            var a = e.stateNode;
            typeof a.componentWillUnmount == "function" && vh(e, e.return, a), wa(e);
            break;
          case 27:
            _i(e.stateNode);
          case 26:
          case 5:
            We(e, e.return), wa(e);
            break;
          case 22:
            e.memoizedState === null && wa(e);
            break;
          case 30:
            wa(e);
            break;
          default:
            wa(e);
        }
        t = t.sibling;
      }
    }
    function bn(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var l = e.alternate, r = t, o = e, d = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            bn(r, o, a), fi(4, o);
            break;
          case 1:
            if (bn(r, o, a), l = o, r = l.stateNode, typeof r.componentDidMount == "function") try {
              r.componentDidMount();
            } catch (L) {
              Ot(l, l.return, L);
            }
            if (l = o, r = l.updateQueue, r !== null) {
              var g = l.stateNode;
              try {
                var x = r.shared.hiddenCallbacks;
                if (x !== null) for (r.shared.hiddenCallbacks = null, r = 0; r < x.length; r++) id(x[r], g);
              } catch (L) {
                Ot(l, l.return, L);
              }
            }
            a && d & 64 && ph(o), di(o, o.return);
            break;
          case 27:
            bh(o);
          case 26:
          case 5:
            bn(r, o, a), a && l === null && d & 4 && gh(o), di(o, o.return);
            break;
          case 12:
            bn(r, o, a);
            break;
          case 31:
            bn(r, o, a), a && d & 4 && xh(r, o);
            break;
          case 13:
            bn(r, o, a), a && d & 4 && Ah(r, o);
            break;
          case 22:
            o.memoizedState === null && bn(r, o, a), di(o, o.return);
            break;
          case 30:
            break;
          default:
            bn(r, o, a);
        }
        e = e.sibling;
      }
    }
    function po(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Wl(a));
    }
    function vo(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Wl(t));
    }
    function Ze(t, e, a, l) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Mh(t, e, a, l), e = e.sibling;
    }
    function Mh(t, e, a, l) {
      var r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ze(t, e, a, l), r & 2048 && fi(9, e);
          break;
        case 1:
          Ze(t, e, a, l);
          break;
        case 3:
          Ze(t, e, a, l), r & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Wl(t)));
          break;
        case 12:
          if (r & 2048) {
            Ze(t, e, a, l), t = e.stateNode;
            try {
              var o = e.memoizedProps, d = o.id, g = o.onPostCommit;
              typeof g == "function" && g(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (x) {
              Ot(e, e.return, x);
            }
          } else Ze(t, e, a, l);
          break;
        case 31:
          Ze(t, e, a, l);
          break;
        case 13:
          Ze(t, e, a, l);
          break;
        case 23:
          break;
        case 22:
          o = e.stateNode, d = e.alternate, e.memoizedState !== null ? o._visibility & 2 ? Ze(t, e, a, l) : hi(t, e) : o._visibility & 2 ? Ze(t, e, a, l) : (o._visibility |= 2, hl(t, e, a, l, (e.subtreeFlags & 10256) !== 0 || false)), r & 2048 && po(d, e);
          break;
        case 24:
          Ze(t, e, a, l), r & 2048 && vo(e.alternate, e);
          break;
        default:
          Ze(t, e, a, l);
      }
    }
    function hl(t, e, a, l, r) {
      for (r = r && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var o = t, d = e, g = a, x = l, L = d.flags;
        switch (d.tag) {
          case 0:
          case 11:
          case 15:
            hl(o, d, g, x, r), fi(8, d);
            break;
          case 23:
            break;
          case 22:
            var B2 = d.stateNode;
            d.memoizedState !== null ? B2._visibility & 2 ? hl(o, d, g, x, r) : hi(o, d) : (B2._visibility |= 2, hl(o, d, g, x, r)), r && L & 2048 && po(d.alternate, d);
            break;
          case 24:
            hl(o, d, g, x, r), r && L & 2048 && vo(d.alternate, d);
            break;
          default:
            hl(o, d, g, x, r);
        }
        e = e.sibling;
      }
    }
    function hi(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var a = t, l = e, r = l.flags;
        switch (l.tag) {
          case 22:
            hi(a, l), r & 2048 && po(l.alternate, l);
            break;
          case 24:
            hi(a, l), r & 2048 && vo(l.alternate, l);
            break;
          default:
            hi(a, l);
        }
        e = e.sibling;
      }
    }
    var mi = 8192;
    function ml(t, e, a) {
      if (t.subtreeFlags & mi) for (t = t.child; t !== null; ) Ch(t, e, a), t = t.sibling;
    }
    function Ch(t, e, a) {
      switch (t.tag) {
        case 26:
          ml(t, e, a), t.flags & mi && t.memoizedState !== null && E0(a, Ke, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          ml(t, e, a);
          break;
        case 3:
        case 4:
          var l = Ke;
          Ke = Ws(t.stateNode.containerInfo), ml(t, e, a), Ke = l;
          break;
        case 22:
          t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = mi, mi = 16777216, ml(t, e, a), mi = l) : ml(t, e, a));
          break;
        default:
          ml(t, e, a);
      }
    }
    function zh(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function yi(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ee = l, Lh(l, t);
        }
        zh(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Dh(t), t = t.sibling;
    }
    function Dh(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          yi(t), t.flags & 2048 && Qn(9, t, t.return);
          break;
        case 3:
          yi(t);
          break;
        case 12:
          yi(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, qs(t)) : yi(t);
          break;
        default:
          yi(t);
      }
    }
    function qs(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var a = 0; a < e.length; a++) {
          var l = e[a];
          ee = l, Lh(l, t);
        }
        zh(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            Qn(8, e, e.return), qs(e);
            break;
          case 22:
            a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, qs(e));
            break;
          default:
            qs(e);
        }
        t = t.sibling;
      }
    }
    function Lh(t, e) {
      for (; ee !== null; ) {
        var a = ee;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Qn(8, a, e);
            break;
          case 23:
          case 22:
            if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
              var l = a.memoizedState.cachePool.pool;
              l != null && l.refCount++;
            }
            break;
          case 24:
            Wl(a.memoizedState.cache);
        }
        if (l = a.child, l !== null) l.return = a, ee = l;
        else t: for (a = t; ee !== null; ) {
          l = ee;
          var r = l.sibling, o = l.return;
          if (Rh(l), l === a) {
            ee = null;
            break t;
          }
          if (r !== null) {
            r.return = o, ee = r;
            break t;
          }
          ee = o;
        }
      }
    }
    var Bg = { getCacheForType: function(t) {
      var e = se(Zt), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    }, cacheSignal: function() {
      return se(Zt).controller.signal;
    } }, Hg = typeof WeakMap == "function" ? WeakMap : Map, Rt = 0, Dt = null, dt = null, yt = 0, At = 0, Ce = null, Gn = false, yl = false, go = false, _n = 0, Qt = 0, Vn = 0, Ma = 0, So = 0, ze = 0, pl = 0, pi = null, Se = null, bo = false, Ys = 0, Uh = 0, Qs = 1 / 0, Gs = null, Xn = null, It = 0, Kn = null, vl = null, En = 0, _o = 0, Eo = null, Nh = null, vi = 0, Ro = null;
    function De() {
      return (Rt & 2) !== 0 && yt !== 0 ? yt & -yt : j.T !== null ? Mo() : Fc();
    }
    function jh() {
      if (ze === 0) if ((yt & 536870912) === 0 || vt) {
        var t = Fi;
        Fi <<= 1, (Fi & 3932160) === 0 && (Fi = 262144), ze = t;
      } else ze = 536870912;
      return t = we.current, t !== null && (t.flags |= 32), ze;
    }
    function be(t, e, a) {
      (t === Dt && (At === 2 || At === 9) || t.cancelPendingCommit !== null) && (gl(t, 0), Zn(t, yt, ze, false)), Hl(t, a), ((Rt & 2) === 0 || t !== Dt) && (t === Dt && ((Rt & 2) === 0 && (Ma |= a), Qt === 4 && Zn(t, yt, ze, false)), $e(t));
    }
    function Bh(t, e, a) {
      if ((Rt & 6) !== 0) throw Error(u(327));
      var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Bl(t, e), r = l ? Qg(t, e) : xo(t, e, true), o = l;
      do {
        if (r === 0) {
          yl && !l && Zn(t, e, 0, false);
          break;
        } else {
          if (a = t.current.alternate, o && !qg(a)) {
            r = xo(t, e, false), o = false;
            continue;
          }
          if (r === 2) {
            if (o = e, t.errorRecoveryDisabledLanes & o) var d = 0;
            else d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              e = d;
              t: {
                var g = t;
                r = pi;
                var x = g.current.memoizedState.isDehydrated;
                if (x && (gl(g, d).flags |= 256), d = xo(g, d, false), d !== 2) {
                  if (go && !x) {
                    g.errorRecoveryDisabledLanes |= o, Ma |= o, r = 4;
                    break t;
                  }
                  o = Se, Se = r, o !== null && (Se === null ? Se = o : Se.push.apply(Se, o));
                }
                r = d;
              }
              if (o = false, r !== 2) continue;
            }
          }
          if (r === 1) {
            gl(t, 0), Zn(t, e, 0, true);
            break;
          }
          t: {
            switch (l = t, o = r, o) {
              case 0:
              case 1:
                throw Error(u(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                Zn(l, e, ze, !Gn);
                break t;
              case 2:
                Se = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(u(329));
            }
            if ((e & 62914560) === e && (r = Ys + 300 - ce(), 10 < r)) {
              if (Zn(l, e, ze, !Gn), Wi(l, 0, true) !== 0) break t;
              En = e, l.timeoutHandle = mm(Hh.bind(null, l, a, Se, Gs, bo, e, ze, Ma, pl, Gn, o, "Throttled", -0, 0), r);
              break t;
            }
            Hh(l, a, Se, Gs, bo, e, ze, Ma, pl, Gn, o, null, -0, 0);
          }
        }
        break;
      } while (true);
      $e(t);
    }
    function Hh(t, e, a, l, r, o, d, g, x, L, B2, V, U, N) {
      if (t.timeoutHandle = -1, V = e.subtreeFlags, V & 8192 || (V & 16785408) === 16785408) {
        V = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: rn }, Ch(e, o, V);
        var $ = (o & 62914560) === o ? Ys - ce() : (o & 4194048) === o ? Uh - ce() : 0;
        if ($ = R0(V, $), $ !== null) {
          En = o, t.cancelPendingCommit = $(Zh.bind(null, t, e, o, a, l, r, d, g, x, B2, V, null, U, N)), Zn(t, o, d, !L);
          return;
        }
      }
      Zh(t, e, o, a, l, r, d, g, x);
    }
    function qg(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
          var r = a[l], o = r.getSnapshot;
          r = r.value;
          try {
            if (!Ae(o(), r)) return false;
          } catch {
            return false;
          }
        }
        if (a = e.child, e.subtreeFlags & 16384 && a !== null) a.return = e, e = a;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function Zn(t, e, a, l) {
      e &= ~So, e &= ~Ma, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
      for (var r = e; 0 < r; ) {
        var o = 31 - xe(r), d = 1 << o;
        l[o] = -1, r &= ~d;
      }
      a !== 0 && Pc(t, a, e);
    }
    function Vs() {
      return (Rt & 6) === 0 ? (gi(0), false) : true;
    }
    function To() {
      if (dt !== null) {
        if (At === 0) var t = dt.return;
        else t = dt, fn = ba = null, qu(t), ul = null, ti = 0, t = dt;
        for (; t !== null; ) yh(t.alternate, t), t = t.return;
        dt = null;
      }
    }
    function gl(t, e) {
      var a = t.timeoutHandle;
      a !== -1 && (t.timeoutHandle = -1, i0(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), En = 0, To(), Dt = t, dt = a = on(t.current, null), yt = e, At = 0, Ce = null, Gn = false, yl = Bl(t, e), go = false, pl = ze = So = Ma = Vn = Qt = 0, Se = pi = null, bo = false, (e & 8) !== 0 && (e |= e & 32);
      var l = t.entangledLanes;
      if (l !== 0) for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - xe(l), o = 1 << r;
        e |= t[r], l &= ~o;
      }
      return _n = e, cs(), a;
    }
    function qh(t, e) {
      ot = null, j.H = ui, e === rl || e === gs ? (e = ed(), At = 3) : e === Ou ? (e = ed(), At = 4) : At = e === eo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ce = e, dt === null && (Qt = 1, Ds(t, je(e, t.current)));
    }
    function Yh() {
      var t = we.current;
      return t === null ? true : (yt & 4194048) === yt ? Ye === null : (yt & 62914560) === yt || (yt & 536870912) !== 0 ? t === Ye : false;
    }
    function Qh() {
      var t = j.H;
      return j.H = ui, t === null ? ui : t;
    }
    function Gh() {
      var t = j.A;
      return j.A = Bg, t;
    }
    function Xs() {
      Qt = 4, Gn || (yt & 4194048) !== yt && we.current !== null || (yl = true), (Vn & 134217727) === 0 && (Ma & 134217727) === 0 || Dt === null || Zn(Dt, yt, ze, false);
    }
    function xo(t, e, a) {
      var l = Rt;
      Rt |= 2;
      var r = Qh(), o = Gh();
      (Dt !== t || yt !== e) && (Gs = null, gl(t, e)), e = false;
      var d = Qt;
      t: do
        try {
          if (At !== 0 && dt !== null) {
            var g = dt, x = Ce;
            switch (At) {
              case 8:
                To(), d = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                we.current === null && (e = true);
                var L = At;
                if (At = 0, Ce = null, Sl(t, g, x, L), a && yl) {
                  d = 0;
                  break t;
                }
                break;
              default:
                L = At, At = 0, Ce = null, Sl(t, g, x, L);
            }
          }
          Yg(), d = Qt;
          break;
        } catch (B2) {
          qh(t, B2);
        }
      while (true);
      return e && t.shellSuspendCounter++, fn = ba = null, Rt = l, j.H = r, j.A = o, dt === null && (Dt = null, yt = 0, cs()), d;
    }
    function Yg() {
      for (; dt !== null; ) Vh(dt);
    }
    function Qg(t, e) {
      var a = Rt;
      Rt |= 2;
      var l = Qh(), r = Gh();
      Dt !== t || yt !== e ? (Gs = null, Qs = ce() + 500, gl(t, e)) : yl = Bl(t, e);
      t: do
        try {
          if (At !== 0 && dt !== null) {
            e = dt;
            var o = Ce;
            e: switch (At) {
              case 1:
                At = 0, Ce = null, Sl(t, e, o, 1);
                break;
              case 2:
              case 9:
                if ($f(o)) {
                  At = 0, Ce = null, Xh(e);
                  break;
                }
                e = function() {
                  At !== 2 && At !== 9 || Dt !== t || (At = 7), $e(t);
                }, o.then(e, e);
                break t;
              case 3:
                At = 7;
                break t;
              case 4:
                At = 5;
                break t;
              case 7:
                $f(o) ? (At = 0, Ce = null, Xh(e)) : (At = 0, Ce = null, Sl(t, e, o, 7));
                break;
              case 5:
                var d = null;
                switch (dt.tag) {
                  case 26:
                    d = dt.memoizedState;
                  case 5:
                  case 27:
                    var g = dt;
                    if (d ? Mm(d) : g.stateNode.complete) {
                      At = 0, Ce = null;
                      var x = g.sibling;
                      if (x !== null) dt = x;
                      else {
                        var L = g.return;
                        L !== null ? (dt = L, Ks(L)) : dt = null;
                      }
                      break e;
                    }
                }
                At = 0, Ce = null, Sl(t, e, o, 5);
                break;
              case 6:
                At = 0, Ce = null, Sl(t, e, o, 6);
                break;
              case 8:
                To(), Qt = 6;
                break t;
              default:
                throw Error(u(462));
            }
          }
          Gg();
          break;
        } catch (B2) {
          qh(t, B2);
        }
      while (true);
      return fn = ba = null, j.H = l, j.A = r, Rt = a, dt !== null ? 0 : (Dt = null, yt = 0, cs(), Qt);
    }
    function Gg() {
      for (; dt !== null && !Ji(); ) Vh(dt);
    }
    function Vh(t) {
      var e = hh(t.alternate, t, _n);
      t.memoizedProps = t.pendingProps, e === null ? Ks(t) : dt = e;
    }
    function Xh(t) {
      var e = t, a = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = rh(a, e, e.pendingProps, e.type, void 0, yt);
          break;
        case 11:
          e = rh(a, e, e.pendingProps, e.type.render, e.ref, yt);
          break;
        case 5:
          qu(e);
        default:
          yh(a, e), e = dt = Gf(e, _n), e = hh(a, e, _n);
      }
      t.memoizedProps = t.pendingProps, e === null ? Ks(t) : dt = e;
    }
    function Sl(t, e, a, l) {
      fn = ba = null, qu(e), ul = null, ti = 0;
      var r = e.return;
      try {
        if (Cg(t, r, e, a, yt)) {
          Qt = 1, Ds(t, je(a, t.current)), dt = null;
          return;
        }
      } catch (o) {
        if (r !== null) throw dt = r, o;
        Qt = 1, Ds(t, je(a, t.current)), dt = null;
        return;
      }
      e.flags & 32768 ? (vt || l === 1 ? t = true : yl || (yt & 536870912) !== 0 ? t = false : (Gn = t = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = we.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Kh(e, t)) : Ks(e);
    }
    function Ks(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Kh(e, Gn);
          return;
        }
        t = e.return;
        var a = Lg(e.alternate, e, _n);
        if (a !== null) {
          dt = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          dt = e;
          return;
        }
        dt = e = t;
      } while (e !== null);
      Qt === 0 && (Qt = 5);
    }
    function Kh(t, e) {
      do {
        var a = Ug(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, dt = a;
          return;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          dt = t;
          return;
        }
        dt = t = a;
      } while (t !== null);
      Qt = 6, dt = null;
    }
    function Zh(t, e, a, l, r, o, d, g, x) {
      t.cancelPendingCommit = null;
      do
        Zs();
      while (It !== 0);
      if ((Rt & 6) !== 0) throw Error(u(327));
      if (e !== null) {
        if (e === t.current) throw Error(u(177));
        if (o = e.lanes | e.childLanes, o |= du, _v(t, a, o, d, g, x), t === Dt && (dt = Dt = null, yt = 0), vl = e, Kn = t, En = a, _o = o, Eo = r, Nh = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Zg(Ya, function() {
          return Ih(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
          l = j.T, j.T = null, r = P2.p, P2.p = 2, d = Rt, Rt |= 4;
          try {
            Ng(t, e, a);
          } finally {
            Rt = d, P2.p = r, j.T = l;
          }
        }
        It = 1, Ph(), Jh(), kh();
      }
    }
    function Ph() {
      if (It === 1) {
        It = 0;
        var t = Kn, e = vl, a = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || a) {
          a = j.T, j.T = null;
          var l = P2.p;
          P2.p = 2;
          var r = Rt;
          Rt |= 4;
          try {
            Oh(e, t);
            var o = Bo, d = Lf(t.containerInfo), g = o.focusedElem, x = o.selectionRange;
            if (d !== g && g && g.ownerDocument && Df(g.ownerDocument.documentElement, g)) {
              if (x !== null && ru(g)) {
                var L = x.start, B2 = x.end;
                if (B2 === void 0 && (B2 = L), "selectionStart" in g) g.selectionStart = L, g.selectionEnd = Math.min(B2, g.value.length);
                else {
                  var V = g.ownerDocument || document, U = V && V.defaultView || window;
                  if (U.getSelection) {
                    var N = U.getSelection(), $ = g.textContent.length, rt = Math.min(x.start, $), Ct = x.end === void 0 ? rt : Math.min(x.end, $);
                    !N.extend && rt > Ct && (d = Ct, Ct = rt, rt = d);
                    var z2 = zf(g, rt), O2 = zf(g, Ct);
                    if (z2 && O2 && (N.rangeCount !== 1 || N.anchorNode !== z2.node || N.anchorOffset !== z2.offset || N.focusNode !== O2.node || N.focusOffset !== O2.offset)) {
                      var D2 = V.createRange();
                      D2.setStart(z2.node, z2.offset), N.removeAllRanges(), rt > Ct ? (N.addRange(D2), N.extend(O2.node, O2.offset)) : (D2.setEnd(O2.node, O2.offset), N.addRange(D2));
                    }
                  }
                }
              }
              for (V = [], N = g; N = N.parentNode; ) N.nodeType === 1 && V.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
              for (typeof g.focus == "function" && g.focus(), g = 0; g < V.length; g++) {
                var Y = V[g];
                Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
              }
            }
            lr = !!jo, Bo = jo = null;
          } finally {
            Rt = r, P2.p = l, j.T = a;
          }
        }
        t.current = e, It = 2;
      }
    }
    function Jh() {
      if (It === 2) {
        It = 0;
        var t = Kn, e = vl, a = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || a) {
          a = j.T, j.T = null;
          var l = P2.p;
          P2.p = 2;
          var r = Rt;
          Rt |= 4;
          try {
            Eh(t, e.alternate, e);
          } finally {
            Rt = r, P2.p = l, j.T = a;
          }
        }
        It = 3;
      }
    }
    function kh() {
      if (It === 4 || It === 3) {
        It = 0, qr();
        var t = Kn, e = vl, a = En, l = Nh;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? It = 5 : (It = 0, vl = Kn = null, Fh(t, t.pendingLanes));
        var r = t.pendingLanes;
        if (r === 0 && (Xn = null), Gr(a), e = e.stateNode, Te && typeof Te.onCommitFiberRoot == "function") try {
          Te.onCommitFiberRoot(jl, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (l !== null) {
          e = j.T, r = P2.p, P2.p = 2, j.T = null;
          try {
            for (var o = t.onRecoverableError, d = 0; d < l.length; d++) {
              var g = l[d];
              o(g.value, { componentStack: g.stack });
            }
          } finally {
            j.T = e, P2.p = r;
          }
        }
        (En & 3) !== 0 && Zs(), $e(t), r = t.pendingLanes, (a & 261930) !== 0 && (r & 42) !== 0 ? t === Ro ? vi++ : (vi = 0, Ro = t) : vi = 0, gi(0);
      }
    }
    function Fh(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Wl(e)));
    }
    function Zs() {
      return Ph(), Jh(), kh(), Ih();
    }
    function Ih() {
      if (It !== 5) return false;
      var t = Kn, e = _o;
      _o = 0;
      var a = Gr(En), l = j.T, r = P2.p;
      try {
        P2.p = 32 > a ? 32 : a, j.T = null, a = Eo, Eo = null;
        var o = Kn, d = En;
        if (It = 0, vl = Kn = null, En = 0, (Rt & 6) !== 0) throw Error(u(331));
        var g = Rt;
        if (Rt |= 4, Dh(o.current), Mh(o, o.current, d, a), Rt = g, gi(0, false), Te && typeof Te.onPostCommitFiberRoot == "function") try {
          Te.onPostCommitFiberRoot(jl, o);
        } catch {
        }
        return true;
      } finally {
        P2.p = r, j.T = l, Fh(t, e);
      }
    }
    function Wh(t, e, a) {
      e = je(a, e), e = to(t.stateNode, e, 2), t = Hn(t, e, 2), t !== null && (Hl(t, 2), $e(t));
    }
    function Ot(t, e, a) {
      if (t.tag === 3) Wh(t, t, a);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          Wh(e, t, a);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Xn === null || !Xn.has(l))) {
            t = je(a, t), a = $d(2), l = Hn(e, a, 2), l !== null && (th(a, l, e, t), Hl(l, 2), $e(l));
            break;
          }
        }
        e = e.return;
      }
    }
    function Ao(t, e, a) {
      var l = t.pingCache;
      if (l === null) {
        l = t.pingCache = new Hg();
        var r = /* @__PURE__ */ new Set();
        l.set(e, r);
      } else r = l.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), l.set(e, r));
      r.has(a) || (go = true, r.add(a), t = Vg.bind(null, t, e, a), e.then(t, t));
    }
    function Vg(t, e, a) {
      var l = t.pingCache;
      l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Dt === t && (yt & a) === a && (Qt === 4 || Qt === 3 && (yt & 62914560) === yt && 300 > ce() - Ys ? (Rt & 2) === 0 && gl(t, 0) : So |= a, pl === yt && (pl = 0)), $e(t);
    }
    function $h(t, e) {
      e === 0 && (e = Zc()), t = va(t, e), t !== null && (Hl(t, e), $e(t));
    }
    function Xg(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), $h(t, a);
    }
    function Kg(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var l = t.stateNode, r = t.memoizedState;
          r !== null && (a = r.retryLane);
          break;
        case 19:
          l = t.stateNode;
          break;
        case 22:
          l = t.stateNode._retryCache;
          break;
        default:
          throw Error(u(314));
      }
      l !== null && l.delete(e), $h(t, a);
    }
    function Zg(t, e) {
      return Ve(t, e);
    }
    var Ps = null, bl = null, Oo = false, Js = false, wo = false, Pn = 0;
    function $e(t) {
      t !== bl && t.next === null && (bl === null ? Ps = bl = t : bl = bl.next = t), Js = true, Oo || (Oo = true, Jg());
    }
    function gi(t, e) {
      if (!wo && Js) {
        wo = true;
        do
          for (var a = false, l = Ps; l !== null; ) {
            if (t !== 0) {
              var r = l.pendingLanes;
              if (r === 0) var o = 0;
              else {
                var d = l.suspendedLanes, g = l.pingedLanes;
                o = (1 << 31 - xe(42 | t) + 1) - 1, o &= r & ~(d & ~g), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
              }
              o !== 0 && (a = true, am(l, o));
            } else o = yt, o = Wi(l, l === Dt ? o : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (o & 3) === 0 || Bl(l, o) || (a = true, am(l, o));
            l = l.next;
          }
        while (a);
        wo = false;
      }
    }
    function Pg() {
      tm();
    }
    function tm() {
      Js = Oo = false;
      var t = 0;
      Pn !== 0 && l0() && (t = Pn);
      for (var e = ce(), a = null, l = Ps; l !== null; ) {
        var r = l.next, o = em(l, e);
        o === 0 ? (l.next = null, a === null ? Ps = r : a.next = r, r === null && (bl = a)) : (a = l, (t !== 0 || (o & 3) !== 0) && (Js = true)), l = r;
      }
      It !== 0 && It !== 5 || gi(t), Pn !== 0 && (Pn = 0);
    }
    function em(t, e) {
      for (var a = t.suspendedLanes, l = t.pingedLanes, r = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
        var d = 31 - xe(o), g = 1 << d, x = r[d];
        x === -1 ? ((g & a) === 0 || (g & l) !== 0) && (r[d] = bv(g, e)) : x <= e && (t.expiredLanes |= g), o &= ~g;
      }
      if (e = Dt, a = yt, a = Wi(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l = t.callbackNode, a === 0 || t === e && (At === 2 || At === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && Nl(l), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || Bl(t, a)) {
        if (e = a & -a, e === t.callbackPriority) return e;
        switch (l !== null && Nl(l), Gr(a)) {
          case 2:
          case 8:
            a = ke;
            break;
          case 32:
            a = Ya;
            break;
          case 268435456:
            a = Kc;
            break;
          default:
            a = Ya;
        }
        return l = nm.bind(null, t), a = Ve(a, l), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return l !== null && l !== null && Nl(l), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function nm(t, e) {
      if (It !== 0 && It !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (Zs() && t.callbackNode !== a) return null;
      var l = yt;
      return l = Wi(t, t === Dt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), l === 0 ? null : (Bh(t, l, e), em(t, ce()), t.callbackNode != null && t.callbackNode === a ? nm.bind(null, t) : null);
    }
    function am(t, e) {
      if (Zs()) return null;
      Bh(t, e, true);
    }
    function Jg() {
      s0(function() {
        (Rt & 6) !== 0 ? Ve(ae, Pg) : tm();
      });
    }
    function Mo() {
      if (Pn === 0) {
        var t = il;
        t === 0 && (t = ki, ki <<= 1, (ki & 261888) === 0 && (ki = 256)), Pn = t;
      }
      return Pn;
    }
    function lm(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ns("" + t);
    }
    function im(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function kg(t, e, a, l, r) {
      if (e === "submit" && a && a.stateNode === r) {
        var o = lm((r[me] || null).action), d = l.submitter;
        d && (e = (e = d[me] || null) ? lm(e.formAction) : d.getAttribute("formAction"), e !== null && (o = e, d = null));
        var g = new ss("action", "action", null, l, r);
        t.push({ event: g, listeners: [{ instance: null, listener: function() {
          if (l.defaultPrevented) {
            if (Pn !== 0) {
              var x = d ? im(r, d) : new FormData(r);
              Ju(a, { pending: true, data: x, method: r.method, action: o }, null, x);
            }
          } else typeof o == "function" && (g.preventDefault(), x = d ? im(r, d) : new FormData(r), Ju(a, { pending: true, data: x, method: r.method, action: o }, o, x));
        }, currentTarget: r }] });
      }
    }
    for (var Co = 0; Co < fu.length; Co++) {
      var zo = fu[Co], Fg = zo.toLowerCase(), Ig = zo[0].toUpperCase() + zo.slice(1);
      Xe(Fg, "on" + Ig);
    }
    Xe(jf, "onAnimationEnd"), Xe(Bf, "onAnimationIteration"), Xe(Hf, "onAnimationStart"), Xe("dblclick", "onDoubleClick"), Xe("focusin", "onFocus"), Xe("focusout", "onBlur"), Xe(hg, "onTransitionRun"), Xe(mg, "onTransitionStart"), Xe(yg, "onTransitionCancel"), Xe(qf, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), ha("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ha("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ha("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ha("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ha("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ha("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Si));
    function sm(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var l = t[a], r = l.event;
        l = l.listeners;
        t: {
          var o = void 0;
          if (e) for (var d = l.length - 1; 0 <= d; d--) {
            var g = l[d], x = g.instance, L = g.currentTarget;
            if (g = g.listener, x !== o && r.isPropagationStopped()) break t;
            o = g, r.currentTarget = L;
            try {
              o(r);
            } catch (B2) {
              os(B2);
            }
            r.currentTarget = null, o = x;
          }
          else for (d = 0; d < l.length; d++) {
            if (g = l[d], x = g.instance, L = g.currentTarget, g = g.listener, x !== o && r.isPropagationStopped()) break t;
            o = g, r.currentTarget = L;
            try {
              o(r);
            } catch (B2) {
              os(B2);
            }
            r.currentTarget = null, o = x;
          }
        }
      }
    }
    function ht(t, e) {
      var a = e[Vr];
      a === void 0 && (a = e[Vr] = /* @__PURE__ */ new Set());
      var l = t + "__bubble";
      a.has(l) || (rm(e, t, 2, false), a.add(l));
    }
    function Do(t, e, a) {
      var l = 0;
      e && (l |= 4), rm(a, t, l, e);
    }
    var ks = "_reactListening" + Math.random().toString(36).slice(2);
    function Lo(t) {
      if (!t[ks]) {
        t[ks] = true, $c.forEach(function(a) {
          a !== "selectionchange" && (Wg.has(a) || Do(a, false, t), Do(a, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[ks] || (e[ks] = true, Do("selectionchange", false, e));
      }
    }
    function rm(t, e, a, l) {
      switch (jm(e)) {
        case 2:
          var r = A0;
          break;
        case 8:
          r = O0;
          break;
        default:
          r = Jo;
      }
      a = r.bind(null, e, a, t), r = void 0, !Wr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = true), l ? r !== void 0 ? t.addEventListener(e, a, { capture: true, passive: r }) : t.addEventListener(e, a, true) : r !== void 0 ? t.addEventListener(e, a, { passive: r }) : t.addEventListener(e, a, false);
    }
    function Uo(t, e, a, l, r) {
      var o = l;
      if ((e & 1) === 0 && (e & 2) === 0 && l !== null) t: for (; ; ) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var g = l.stateNode.containerInfo;
          if (g === r) break;
          if (d === 4) for (d = l.return; d !== null; ) {
            var x = d.tag;
            if ((x === 3 || x === 4) && d.stateNode.containerInfo === r) return;
            d = d.return;
          }
          for (; g !== null; ) {
            if (d = Ga(g), d === null) return;
            if (x = d.tag, x === 5 || x === 6 || x === 26 || x === 27) {
              l = o = d;
              continue t;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
      df(function() {
        var L = o, B2 = Fr(a), V = [];
        t: {
          var U = Yf.get(t);
          if (U !== void 0) {
            var N = ss, $ = t;
            switch (t) {
              case "keypress":
                if (ls(a) === 0) break t;
              case "keydown":
              case "keyup":
                N = Kv;
                break;
              case "focusin":
                $ = "focus", N = nu;
                break;
              case "focusout":
                $ = "blur", N = nu;
                break;
              case "beforeblur":
              case "afterblur":
                N = nu;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                N = yf;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                N = Lv;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                N = Jv;
                break;
              case jf:
              case Bf:
              case Hf:
                N = jv;
                break;
              case qf:
                N = Fv;
                break;
              case "scroll":
              case "scrollend":
                N = zv;
                break;
              case "wheel":
                N = Wv;
                break;
              case "copy":
              case "cut":
              case "paste":
                N = Hv;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                N = vf;
                break;
              case "toggle":
              case "beforetoggle":
                N = tg;
            }
            var rt = (e & 4) !== 0, Ct = !rt && (t === "scroll" || t === "scrollend"), z2 = rt ? U !== null ? U + "Capture" : null : U;
            rt = [];
            for (var O2 = L, D2; O2 !== null; ) {
              var Y = O2;
              if (D2 = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || D2 === null || z2 === null || (Y = Ql(O2, z2), Y != null && rt.push(bi(O2, Y, D2))), Ct) break;
              O2 = O2.return;
            }
            0 < rt.length && (U = new N(U, $, null, a, B2), V.push({ event: U, listeners: rt }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (U = t === "mouseover" || t === "pointerover", N = t === "mouseout" || t === "pointerout", U && a !== kr && ($ = a.relatedTarget || a.fromElement) && (Ga($) || $[Qa])) break t;
            if ((N || U) && (U = B2.window === B2 ? B2 : (U = B2.ownerDocument) ? U.defaultView || U.parentWindow : window, N ? ($ = a.relatedTarget || a.toElement, N = L, $ = $ ? Ga($) : null, $ !== null && (Ct = f2($), rt = $.tag, $ !== Ct || rt !== 5 && rt !== 27 && rt !== 6) && ($ = null)) : (N = null, $ = L), N !== $)) {
              if (rt = yf, Y = "onMouseLeave", z2 = "onMouseEnter", O2 = "mouse", (t === "pointerout" || t === "pointerover") && (rt = vf, Y = "onPointerLeave", z2 = "onPointerEnter", O2 = "pointer"), Ct = N == null ? U : Yl(N), D2 = $ == null ? U : Yl($), U = new rt(Y, O2 + "leave", N, a, B2), U.target = Ct, U.relatedTarget = D2, Y = null, Ga(B2) === L && (rt = new rt(z2, O2 + "enter", $, a, B2), rt.target = D2, rt.relatedTarget = Ct, Y = rt), Ct = Y, N && $) e: {
                for (rt = $g, z2 = N, O2 = $, D2 = 0, Y = z2; Y; Y = rt(Y)) D2++;
                Y = 0;
                for (var lt = O2; lt; lt = rt(lt)) Y++;
                for (; 0 < D2 - Y; ) z2 = rt(z2), D2--;
                for (; 0 < Y - D2; ) O2 = rt(O2), Y--;
                for (; D2--; ) {
                  if (z2 === O2 || O2 !== null && z2 === O2.alternate) {
                    rt = z2;
                    break e;
                  }
                  z2 = rt(z2), O2 = rt(O2);
                }
                rt = null;
              }
              else rt = null;
              N !== null && um(V, U, N, rt, false), $ !== null && Ct !== null && um(V, Ct, $, rt, true);
            }
          }
          t: {
            if (U = L ? Yl(L) : window, N = U.nodeName && U.nodeName.toLowerCase(), N === "select" || N === "input" && U.type === "file") var St = xf;
            else if (Rf(U)) if (Af) St = cg;
            else {
              St = ug;
              var tt = rg;
            }
            else N = U.nodeName, !N || N.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? L && Jr(L.elementType) && (St = xf) : St = og;
            if (St && (St = St(t, L))) {
              Tf(V, St, a, B2);
              break t;
            }
            tt && tt(t, U, L), t === "focusout" && L && U.type === "number" && L.memoizedProps.value != null && Pr(U, "number", U.value);
          }
          switch (tt = L ? Yl(L) : window, t) {
            case "focusin":
              (Rf(tt) || tt.contentEditable === "true") && (Ia = tt, uu = L, kl = null);
              break;
            case "focusout":
              kl = uu = Ia = null;
              break;
            case "mousedown":
              ou = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ou = false, Uf(V, a, B2);
              break;
            case "selectionchange":
              if (dg) break;
            case "keydown":
            case "keyup":
              Uf(V, a, B2);
          }
          var ct;
          if (lu) t: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
          else Fa ? _f(t, a) && (pt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (pt = "onCompositionStart");
          pt && (gf && a.locale !== "ko" && (Fa || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && Fa && (ct = hf()) : (zn = B2, $r = "value" in zn ? zn.value : zn.textContent, Fa = true)), tt = Fs(L, pt), 0 < tt.length && (pt = new pf(pt, t, null, a, B2), V.push({ event: pt, listeners: tt }), ct ? pt.data = ct : (ct = Ef(a), ct !== null && (pt.data = ct)))), (ct = ng ? ag(t, a) : lg(t, a)) && (pt = Fs(L, "onBeforeInput"), 0 < pt.length && (tt = new pf("onBeforeInput", "beforeinput", null, a, B2), V.push({ event: tt, listeners: pt }), tt.data = ct)), kg(V, t, L, a, B2);
        }
        sm(V, e);
      });
    }
    function bi(t, e, a) {
      return { instance: t, listener: e, currentTarget: a };
    }
    function Fs(t, e) {
      for (var a = e + "Capture", l = []; t !== null; ) {
        var r = t, o = r.stateNode;
        if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || o === null || (r = Ql(t, a), r != null && l.unshift(bi(t, r, o)), r = Ql(t, e), r != null && l.push(bi(t, r, o))), t.tag === 3) return l;
        t = t.return;
      }
      return [];
    }
    function $g(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function um(t, e, a, l, r) {
      for (var o = e._reactName, d = []; a !== null && a !== l; ) {
        var g = a, x = g.alternate, L = g.stateNode;
        if (g = g.tag, x !== null && x === l) break;
        g !== 5 && g !== 26 && g !== 27 || L === null || (x = L, r ? (L = Ql(a, o), L != null && d.unshift(bi(a, L, x))) : r || (L = Ql(a, o), L != null && d.push(bi(a, L, x)))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    var t0 = /\r\n?/g, e0 = /\u0000|\uFFFD/g;
    function om(t) {
      return (typeof t == "string" ? t : "" + t).replace(t0, `
`).replace(e0, "");
    }
    function cm(t, e) {
      return e = om(e), om(t) === e;
    }
    function Mt(t, e, a, l, r, o) {
      switch (a) {
        case "children":
          typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Pa(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Pa(t, "" + l);
          break;
        case "className":
          ts(t, "class", l);
          break;
        case "tabIndex":
          ts(t, "tabindex", l);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ts(t, a, l);
          break;
        case "style":
          cf(t, l, o);
          break;
        case "data":
          if (e !== "object") {
            ts(t, "data", l);
            break;
          }
        case "src":
        case "href":
          if (l === "" && (e !== "a" || a !== "href")) {
            t.removeAttribute(a);
            break;
          }
          if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
            t.removeAttribute(a);
            break;
          }
          l = ns("" + l), t.setAttribute(a, l);
          break;
        case "action":
        case "formAction":
          if (typeof l == "function") {
            t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof o == "function" && (a === "formAction" ? (e !== "input" && Mt(t, e, "name", r.name, r, null), Mt(t, e, "formEncType", r.formEncType, r, null), Mt(t, e, "formMethod", r.formMethod, r, null), Mt(t, e, "formTarget", r.formTarget, r, null)) : (Mt(t, e, "encType", r.encType, r, null), Mt(t, e, "method", r.method, r, null), Mt(t, e, "target", r.target, r, null)));
          if (l == null || typeof l == "symbol" || typeof l == "boolean") {
            t.removeAttribute(a);
            break;
          }
          l = ns("" + l), t.setAttribute(a, l);
          break;
        case "onClick":
          l != null && (t.onclick = rn);
          break;
        case "onScroll":
          l != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          l != null && ht("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
            if (a = l.__html, a != null) {
              if (r.children != null) throw Error(u(60));
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "muted":
          t.muted = l && typeof l != "function" && typeof l != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          a = ns("" + l), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          l === true ? t.setAttribute(a, "") : l !== false && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
          break;
        case "popover":
          ht("beforetoggle", t), ht("toggle", t), $i(t, "popover", l);
          break;
        case "xlinkActuate":
          sn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
          break;
        case "xlinkArcrole":
          sn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
          break;
        case "xlinkRole":
          sn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
          break;
        case "xlinkShow":
          sn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
          break;
        case "xlinkTitle":
          sn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
          break;
        case "xlinkType":
          sn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
          break;
        case "xmlBase":
          sn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
          break;
        case "xmlLang":
          sn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
          break;
        case "xmlSpace":
          sn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
          break;
        case "is":
          $i(t, "is", l);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Mv.get(a) || a, $i(t, a, l));
      }
    }
    function No(t, e, a, l, r, o) {
      switch (a) {
        case "style":
          cf(t, l, o);
          break;
        case "dangerouslySetInnerHTML":
          if (l != null) {
            if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
            if (a = l.__html, a != null) {
              if (r.children != null) throw Error(u(60));
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof l == "string" ? Pa(t, l) : (typeof l == "number" || typeof l == "bigint") && Pa(t, "" + l);
          break;
        case "onScroll":
          l != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          l != null && ht("scrollend", t);
          break;
        case "onClick":
          l != null && (t.onclick = rn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!tf.hasOwnProperty(a)) t: {
            if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"), e = a.slice(2, r ? a.length - 7 : void 0), o = t[me] || null, o = o != null ? o[a] : null, typeof o == "function" && t.removeEventListener(e, o, r), typeof l == "function")) {
              typeof o != "function" && o !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, r);
              break t;
            }
            a in t ? t[a] = l : l === true ? t.setAttribute(a, "") : $i(t, a, l);
          }
      }
    }
    function ue(t, e, a) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ht("error", t), ht("load", t);
          var l = false, r = false, o;
          for (o in a) if (a.hasOwnProperty(o)) {
            var d = a[o];
            if (d != null) switch (o) {
              case "src":
                l = true;
                break;
              case "srcSet":
                r = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Mt(t, e, o, d, a, null);
            }
          }
          r && Mt(t, e, "srcSet", a.srcSet, a, null), l && Mt(t, e, "src", a.src, a, null);
          return;
        case "input":
          ht("invalid", t);
          var g = o = d = r = null, x = null, L = null;
          for (l in a) if (a.hasOwnProperty(l)) {
            var B2 = a[l];
            if (B2 != null) switch (l) {
              case "name":
                r = B2;
                break;
              case "type":
                d = B2;
                break;
              case "checked":
                x = B2;
                break;
              case "defaultChecked":
                L = B2;
                break;
              case "value":
                o = B2;
                break;
              case "defaultValue":
                g = B2;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B2 != null) throw Error(u(137, e));
                break;
              default:
                Mt(t, e, l, B2, a, null);
            }
          }
          sf(t, o, g, x, L, d, r, false);
          return;
        case "select":
          ht("invalid", t), l = d = o = null;
          for (r in a) if (a.hasOwnProperty(r) && (g = a[r], g != null)) switch (r) {
            case "value":
              o = g;
              break;
            case "defaultValue":
              d = g;
              break;
            case "multiple":
              l = g;
            default:
              Mt(t, e, r, g, a, null);
          }
          e = o, a = d, t.multiple = !!l, e != null ? Za(t, !!l, e, false) : a != null && Za(t, !!l, a, true);
          return;
        case "textarea":
          ht("invalid", t), o = r = l = null;
          for (d in a) if (a.hasOwnProperty(d) && (g = a[d], g != null)) switch (d) {
            case "value":
              l = g;
              break;
            case "defaultValue":
              r = g;
              break;
            case "children":
              o = g;
              break;
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(u(91));
              break;
            default:
              Mt(t, e, d, g, a, null);
          }
          uf(t, l, r, o);
          return;
        case "option":
          for (x in a) a.hasOwnProperty(x) && (l = a[x], l != null) && (x === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Mt(t, e, x, l, a, null));
          return;
        case "dialog":
          ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
          break;
        case "iframe":
        case "object":
          ht("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Si.length; l++) ht(Si[l], t);
          break;
        case "image":
          ht("error", t), ht("load", t);
          break;
        case "details":
          ht("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          ht("error", t), ht("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (L in a) if (a.hasOwnProperty(L) && (l = a[L], l != null)) switch (L) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, e));
            default:
              Mt(t, e, L, l, a, null);
          }
          return;
        default:
          if (Jr(e)) {
            for (B2 in a) a.hasOwnProperty(B2) && (l = a[B2], l !== void 0 && No(t, e, B2, l, a, void 0));
            return;
          }
      }
      for (g in a) a.hasOwnProperty(g) && (l = a[g], l != null && Mt(t, e, g, l, a, null));
    }
    function n0(t, e, a, l) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var r = null, o = null, d = null, g = null, x = null, L = null, B2 = null;
          for (N in a) {
            var V = a[N];
            if (a.hasOwnProperty(N) && V != null) switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = V;
              default:
                l.hasOwnProperty(N) || Mt(t, e, N, null, l, V);
            }
          }
          for (var U in l) {
            var N = l[U];
            if (V = a[U], l.hasOwnProperty(U) && (N != null || V != null)) switch (U) {
              case "type":
                o = N;
                break;
              case "name":
                r = N;
                break;
              case "checked":
                L = N;
                break;
              case "defaultChecked":
                B2 = N;
                break;
              case "value":
                d = N;
                break;
              case "defaultValue":
                g = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(u(137, e));
                break;
              default:
                N !== V && Mt(t, e, U, N, l, V);
            }
          }
          Zr(t, d, g, x, L, B2, o, r);
          return;
        case "select":
          N = d = g = U = null;
          for (o in a) if (x = a[o], a.hasOwnProperty(o) && x != null) switch (o) {
            case "value":
              break;
            case "multiple":
              N = x;
            default:
              l.hasOwnProperty(o) || Mt(t, e, o, null, l, x);
          }
          for (r in l) if (o = l[r], x = a[r], l.hasOwnProperty(r) && (o != null || x != null)) switch (r) {
            case "value":
              U = o;
              break;
            case "defaultValue":
              g = o;
              break;
            case "multiple":
              d = o;
            default:
              o !== x && Mt(t, e, r, o, l, x);
          }
          e = g, a = d, l = N, U != null ? Za(t, !!a, U, false) : !!l != !!a && (e != null ? Za(t, !!a, e, true) : Za(t, !!a, a ? [] : "", false));
          return;
        case "textarea":
          N = U = null;
          for (g in a) if (r = a[g], a.hasOwnProperty(g) && r != null && !l.hasOwnProperty(g)) switch (g) {
            case "value":
              break;
            case "children":
              break;
            default:
              Mt(t, e, g, null, l, r);
          }
          for (d in l) if (r = l[d], o = a[d], l.hasOwnProperty(d) && (r != null || o != null)) switch (d) {
            case "value":
              U = r;
              break;
            case "defaultValue":
              N = r;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(u(91));
              break;
            default:
              r !== o && Mt(t, e, d, r, l, o);
          }
          rf(t, U, N);
          return;
        case "option":
          for (var $ in a) U = a[$], a.hasOwnProperty($) && U != null && !l.hasOwnProperty($) && ($ === "selected" ? t.selected = false : Mt(t, e, $, null, l, U));
          for (x in l) U = l[x], N = a[x], l.hasOwnProperty(x) && U !== N && (U != null || N != null) && (x === "selected" ? t.selected = U && typeof U != "function" && typeof U != "symbol" : Mt(t, e, x, U, l, N));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var rt in a) U = a[rt], a.hasOwnProperty(rt) && U != null && !l.hasOwnProperty(rt) && Mt(t, e, rt, null, l, U);
          for (L in l) if (U = l[L], N = a[L], l.hasOwnProperty(L) && U !== N && (U != null || N != null)) switch (L) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (U != null) throw Error(u(137, e));
              break;
            default:
              Mt(t, e, L, U, l, N);
          }
          return;
        default:
          if (Jr(e)) {
            for (var Ct in a) U = a[Ct], a.hasOwnProperty(Ct) && U !== void 0 && !l.hasOwnProperty(Ct) && No(t, e, Ct, void 0, l, U);
            for (B2 in l) U = l[B2], N = a[B2], !l.hasOwnProperty(B2) || U === N || U === void 0 && N === void 0 || No(t, e, B2, U, l, N);
            return;
          }
      }
      for (var z2 in a) U = a[z2], a.hasOwnProperty(z2) && U != null && !l.hasOwnProperty(z2) && Mt(t, e, z2, null, l, U);
      for (V in l) U = l[V], N = a[V], !l.hasOwnProperty(V) || U === N || U == null && N == null || Mt(t, e, V, U, l, N);
    }
    function fm(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function a0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
          var r = a[l], o = r.transferSize, d = r.initiatorType, g = r.duration;
          if (o && g && fm(d)) {
            for (d = 0, g = r.responseEnd, l += 1; l < a.length; l++) {
              var x = a[l], L = x.startTime;
              if (L > g) break;
              var B2 = x.transferSize, V = x.initiatorType;
              B2 && fm(V) && (x = x.responseEnd, d += B2 * (x < g ? 1 : (g - L) / (x - L)));
            }
            if (--l, e += 8 * (o + d) / (r.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var jo = null, Bo = null;
    function Is(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function dm(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function hm(t, e) {
      if (t === 0) switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Ho(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var qo = null;
    function l0() {
      var t = window.event;
      return t && t.type === "popstate" ? t === qo ? false : (qo = t, true) : (qo = null, false);
    }
    var mm = typeof setTimeout == "function" ? setTimeout : void 0, i0 = typeof clearTimeout == "function" ? clearTimeout : void 0, ym = typeof Promise == "function" ? Promise : void 0, s0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ym < "u" ? function(t) {
      return ym.resolve(null).then(t).catch(r0);
    } : mm;
    function r0(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Jn(t) {
      return t === "head";
    }
    function pm(t, e) {
      var a = e, l = 0;
      do {
        var r = a.nextSibling;
        if (t.removeChild(a), r && r.nodeType === 8) if (a = r.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(r), Tl(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
        else if (a === "html") _i(t.ownerDocument.documentElement);
        else if (a === "head") {
          a = t.ownerDocument.head, _i(a);
          for (var o = a.firstChild; o; ) {
            var d = o.nextSibling, g = o.nodeName;
            o[ql] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && o.rel.toLowerCase() === "stylesheet" || a.removeChild(o), o = d;
          }
        } else a === "body" && _i(t.ownerDocument.body);
        a = r;
      } while (a);
      Tl(e);
    }
    function vm(t, e) {
      var a = t;
      t = 0;
      do {
        var l = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8) if (a = l.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
        a = l;
      } while (a);
    }
    function Yo(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Yo(a), Xr(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function u0(t, e, a, l) {
      for (; t.nodeType === 1; ) {
        var r = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (l) {
          if (!t[ql]) switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (o !== r.rel || t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || t.getAttribute("title") !== (r.title == null ? null : r.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (o = t.getAttribute("src"), (o !== (r.src == null ? null : r.src) || t.getAttribute("type") !== (r.type == null ? null : r.type) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (e === "input" && t.type === "hidden") {
          var o = r.name == null ? null : "" + r.name;
          if (r.type === "hidden" && t.getAttribute("name") === o) return t;
        } else return t;
        if (t = Qe(t.nextSibling), t === null) break;
      }
      return null;
    }
    function o0(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Qe(t.nextSibling), t === null)) return null;
      return t;
    }
    function gm(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Qe(t.nextSibling), t === null)) return null;
      return t;
    }
    function Qo(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function Go(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function c0(t, e) {
      var a = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || a.readyState !== "loading") e();
      else {
        var l = function() {
          e(), a.removeEventListener("DOMContentLoaded", l);
        };
        a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
      }
    }
    function Qe(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var Vo = null;
    function Sm(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === "/$" || a === "/&") {
            if (e === 0) return Qe(t.nextSibling);
            e--;
          } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function bm(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
            if (e === 0) return t;
            e--;
          } else a !== "/$" && a !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function _m(t, e, a) {
      switch (e = Is(a), t) {
        case "html":
          if (t = e.documentElement, !t) throw Error(u(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(u(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(u(454));
          return t;
        default:
          throw Error(u(451));
      }
    }
    function _i(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      Xr(t);
    }
    var Ge = /* @__PURE__ */ new Map(), Em = /* @__PURE__ */ new Set();
    function Ws(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var Rn = P2.d;
    P2.d = { f: f0, r: d0, D: h0, C: m0, L: y0, m: p0, X: g0, S: v0, M: S0 };
    function f0() {
      var t = Rn.f(), e = Vs();
      return t || e;
    }
    function d0(t) {
      var e = Va(t);
      e !== null && e.tag === 5 && e.type === "form" ? qd(e) : Rn.r(t);
    }
    var _l = typeof document > "u" ? null : document;
    function Rm(t, e, a) {
      var l = _l;
      if (l && typeof e == "string" && e) {
        var r = Ue(e);
        r = 'link[rel="' + t + '"][href="' + r + '"]', typeof a == "string" && (r += '[crossorigin="' + a + '"]'), Em.has(r) || (Em.add(r), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(r) === null && (e = l.createElement("link"), ue(e, "link", t), te(e), l.head.appendChild(e)));
      }
    }
    function h0(t) {
      Rn.D(t), Rm("dns-prefetch", t, null);
    }
    function m0(t, e) {
      Rn.C(t, e), Rm("preconnect", t, e);
    }
    function y0(t, e, a) {
      Rn.L(t, e, a);
      var l = _l;
      if (l && t && e) {
        var r = 'link[rel="preload"][as="' + Ue(e) + '"]';
        e === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + Ue(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (r += '[imagesizes="' + Ue(a.imageSizes) + '"]')) : r += '[href="' + Ue(t) + '"]';
        var o = r;
        switch (e) {
          case "style":
            o = El(t);
            break;
          case "script":
            o = Rl(t);
        }
        Ge.has(o) || (t = v2({ rel: "preload", href: e === "image" && a && a.imageSrcSet ? void 0 : t, as: e }, a), Ge.set(o, t), l.querySelector(r) !== null || e === "style" && l.querySelector(Ei(o)) || e === "script" && l.querySelector(Ri(o)) || (e = l.createElement("link"), ue(e, "link", t), te(e), l.head.appendChild(e)));
      }
    }
    function p0(t, e) {
      Rn.m(t, e);
      var a = _l;
      if (a && t) {
        var l = e && typeof e.as == "string" ? e.as : "script", r = 'link[rel="modulepreload"][as="' + Ue(l) + '"][href="' + Ue(t) + '"]', o = r;
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            o = Rl(t);
        }
        if (!Ge.has(o) && (t = v2({ rel: "modulepreload", href: t }, e), Ge.set(o, t), a.querySelector(r) === null)) {
          switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (a.querySelector(Ri(o))) return;
          }
          l = a.createElement("link"), ue(l, "link", t), te(l), a.head.appendChild(l);
        }
      }
    }
    function v0(t, e, a) {
      Rn.S(t, e, a);
      var l = _l;
      if (l && t) {
        var r = Xa(l).hoistableStyles, o = El(t);
        e = e || "default";
        var d = r.get(o);
        if (!d) {
          var g = { loading: 0, preload: null };
          if (d = l.querySelector(Ei(o))) g.loading = 5;
          else {
            t = v2({ rel: "stylesheet", href: t, "data-precedence": e }, a), (a = Ge.get(o)) && Xo(t, a);
            var x = d = l.createElement("link");
            te(x), ue(x, "link", t), x._p = new Promise(function(L, B2) {
              x.onload = L, x.onerror = B2;
            }), x.addEventListener("load", function() {
              g.loading |= 1;
            }), x.addEventListener("error", function() {
              g.loading |= 2;
            }), g.loading |= 4, $s(d, e, l);
          }
          d = { type: "stylesheet", instance: d, count: 1, state: g }, r.set(o, d);
        }
      }
    }
    function g0(t, e) {
      Rn.X(t, e);
      var a = _l;
      if (a && t) {
        var l = Xa(a).hoistableScripts, r = Rl(t), o = l.get(r);
        o || (o = a.querySelector(Ri(r)), o || (t = v2({ src: t, async: true }, e), (e = Ge.get(r)) && Ko(t, e), o = a.createElement("script"), te(o), ue(o, "link", t), a.head.appendChild(o)), o = { type: "script", instance: o, count: 1, state: null }, l.set(r, o));
      }
    }
    function S0(t, e) {
      Rn.M(t, e);
      var a = _l;
      if (a && t) {
        var l = Xa(a).hoistableScripts, r = Rl(t), o = l.get(r);
        o || (o = a.querySelector(Ri(r)), o || (t = v2({ src: t, async: true, type: "module" }, e), (e = Ge.get(r)) && Ko(t, e), o = a.createElement("script"), te(o), ue(o, "link", t), a.head.appendChild(o)), o = { type: "script", instance: o, count: 1, state: null }, l.set(r, o));
      }
    }
    function Tm(t, e, a, l) {
      var r = (r = ft.current) ? Ws(r) : null;
      if (!r) throw Error(u(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (e = El(a.href), a = Xa(r).hoistableStyles, l = a.get(e), l || (l = { type: "style", instance: null, count: 0, state: null }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = El(a.href);
            var o = Xa(r).hoistableStyles, d = o.get(t);
            if (d || (r = r.ownerDocument || r, d = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, o.set(t, d), (o = r.querySelector(Ei(t))) && !o._p && (d.instance = o, d.state.loading = 5), Ge.has(t) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, Ge.set(t, a), o || b0(r, t, a, d.state))), e && l === null) throw Error(u(528, ""));
            return d;
          }
          if (e && l !== null) throw Error(u(529, ""));
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Rl(a), a = Xa(r).hoistableScripts, l = a.get(e), l || (l = { type: "script", instance: null, count: 0, state: null }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(u(444, t));
      }
    }
    function El(t) {
      return 'href="' + Ue(t) + '"';
    }
    function Ei(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function xm(t) {
      return v2({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function b0(t, e, a, l) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
        return l.loading |= 1;
      }), e.addEventListener("error", function() {
        return l.loading |= 2;
      }), ue(e, "link", a), te(e), t.head.appendChild(e));
    }
    function Rl(t) {
      return '[src="' + Ue(t) + '"]';
    }
    function Ri(t) {
      return "script[async]" + t;
    }
    function Am(t, e, a) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Ue(a.href) + '"]');
          if (l) return e.instance = l, te(l), l;
          var r = v2({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
          return l = (t.ownerDocument || t).createElement("style"), te(l), ue(l, "style", r), $s(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          r = El(a.href);
          var o = t.querySelector(Ei(r));
          if (o) return e.state.loading |= 4, e.instance = o, te(o), o;
          l = xm(a), (r = Ge.get(r)) && Xo(l, r), o = (t.ownerDocument || t).createElement("link"), te(o);
          var d = o;
          return d._p = new Promise(function(g, x) {
            d.onload = g, d.onerror = x;
          }), ue(o, "link", l), e.state.loading |= 4, $s(o, a.precedence, t), e.instance = o;
        case "script":
          return o = Rl(a.src), (r = t.querySelector(Ri(o))) ? (e.instance = r, te(r), r) : (l = a, (r = Ge.get(o)) && (l = v2({}, a), Ko(l, r)), t = t.ownerDocument || t, r = t.createElement("script"), te(r), ue(r, "link", l), t.head.appendChild(r), e.instance = r);
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, $s(l, a.precedence, t));
      return e.instance;
    }
    function $s(t, e, a) {
      for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = l.length ? l[l.length - 1] : null, o = r, d = 0; d < l.length; d++) {
        var g = l[d];
        if (g.dataset.precedence === e) o = g;
        else if (o !== r) break;
      }
      o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function Xo(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function Ko(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var tr = null;
    function Om(t, e, a) {
      if (tr === null) {
        var l = /* @__PURE__ */ new Map(), r = tr = /* @__PURE__ */ new Map();
        r.set(a, l);
      } else r = tr, l = r.get(a), l || (l = /* @__PURE__ */ new Map(), r.set(a, l));
      if (l.has(t)) return l;
      for (l.set(t, null), a = a.getElementsByTagName(t), r = 0; r < a.length; r++) {
        var o = a[r];
        if (!(o[ql] || o[le] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
          var d = o.getAttribute(e) || "";
          d = t + d;
          var g = l.get(d);
          g ? g.push(o) : l.set(d, [o]);
        }
      }
      return l;
    }
    function wm(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null);
    }
    function _0(t, e, a) {
      if (a === 1 || e.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
          return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : true;
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function Mm(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function E0(t, e, a, l) {
      if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && (a.state.loading & 4) === 0) {
        if (a.instance === null) {
          var r = El(l.href), o = e.querySelector(Ei(r));
          if (o) {
            e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = er.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = o, te(o);
            return;
          }
          o = e.ownerDocument || e, l = xm(l), (r = Ge.get(r)) && Xo(l, r), o = o.createElement("link"), te(o);
          var d = o;
          d._p = new Promise(function(g, x) {
            d.onload = g, d.onerror = x;
          }), ue(o, "link", l), a.instance = o;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = er.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    var Zo = 0;
    function R0(t, e) {
      return t.stylesheets && t.count === 0 && ar(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var l = setTimeout(function() {
          if (t.stylesheets && ar(t, t.stylesheets), t.unsuspend) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        }, 6e4 + e);
        0 < t.imgBytes && Zo === 0 && (Zo = 62500 * a0());
        var r = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && ar(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        }, (t.imgBytes > Zo ? 50 : 800) + e);
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(l), clearTimeout(r);
        };
      } : null;
    }
    function er() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) ar(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var nr = null;
    function ar(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, nr = /* @__PURE__ */ new Map(), e.forEach(T0, t), nr = null, er.call(t));
    }
    function T0(t, e) {
      if (!(e.state.loading & 4)) {
        var a = nr.get(t);
        if (a) var l = a.get(null);
        else {
          a = /* @__PURE__ */ new Map(), nr.set(t, a);
          for (var r = t.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < r.length; o++) {
            var d = r[o];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), l = d);
          }
          l && a.set(null, l);
        }
        r = e.instance, d = r.getAttribute("data-precedence"), o = a.get(d) || l, o === l && a.set(null, r), a.set(d, r), this.count++, l = er.bind(this), r.addEventListener("load", l), r.addEventListener("error", l), o ? o.parentNode.insertBefore(r, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(r, t.firstChild)), e.state.loading |= 4;
      }
    }
    var Ti = { $$typeof: Q, Provider: null, Consumer: null, _currentValue: it, _currentValue2: it, _threadCount: 0 };
    function x0(t, e, a, l, r, o, d, g, x) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = l, this.onUncaughtError = r, this.onCaughtError = o, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Cm(t, e, a, l, r, o, d, g, x, L, B2, V) {
      return t = new x0(t, e, a, d, x, L, B2, V, g), e = 1, o === true && (e |= 24), o = Oe(3, null, null, e), t.current = o, o.stateNode = t, e = Tu(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = { element: l, isDehydrated: a, cache: e }, wu(o), t;
    }
    function zm(t) {
      return t ? (t = tl, t) : tl;
    }
    function Dm(t, e, a, l, r, o) {
      r = zm(r), l.context === null ? l.context = r : l.pendingContext = r, l = Bn(e), l.payload = { element: a }, o = o === void 0 ? null : o, o !== null && (l.callback = o), a = Hn(t, l, e), a !== null && (be(a, t, e), ni(a, t, e));
    }
    function Lm(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Po(t, e) {
      Lm(t, e), (t = t.alternate) && Lm(t, e);
    }
    function Um(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = va(t, 67108864);
        e !== null && be(e, t, 67108864), Po(t, 67108864);
      }
    }
    function Nm(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = De();
        e = Qr(e);
        var a = va(t, e);
        a !== null && be(a, t, e), Po(t, e);
      }
    }
    var lr = true;
    function A0(t, e, a, l) {
      var r = j.T;
      j.T = null;
      var o = P2.p;
      try {
        P2.p = 2, Jo(t, e, a, l);
      } finally {
        P2.p = o, j.T = r;
      }
    }
    function O0(t, e, a, l) {
      var r = j.T;
      j.T = null;
      var o = P2.p;
      try {
        P2.p = 8, Jo(t, e, a, l);
      } finally {
        P2.p = o, j.T = r;
      }
    }
    function Jo(t, e, a, l) {
      if (lr) {
        var r = ko(l);
        if (r === null) Uo(t, e, l, ir, a), Bm(t, l);
        else if (M0(r, t, e, a, l)) l.stopPropagation();
        else if (Bm(t, l), e & 4 && -1 < w0.indexOf(t)) {
          for (; r !== null; ) {
            var o = Va(r);
            if (o !== null) switch (o.tag) {
              case 3:
                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                  var d = da(o.pendingLanes);
                  if (d !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var x = 1 << 31 - xe(d);
                      g.entanglements[1] |= x, d &= ~x;
                    }
                    $e(o), (Rt & 6) === 0 && (Qs = ce() + 500, gi(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = va(o, 2), g !== null && be(g, o, 2), Vs(), Po(o, 2);
            }
            if (o = ko(l), o === null && Uo(t, e, l, ir, a), o === r) break;
            r = o;
          }
          r !== null && l.stopPropagation();
        } else Uo(t, e, l, null, a);
      }
    }
    function ko(t) {
      return t = Fr(t), Fo(t);
    }
    var ir = null;
    function Fo(t) {
      if (ir = null, t = Ga(t), t !== null) {
        var e = f2(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = h(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = m(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return ir = t, null;
    }
    function jm(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (Ut()) {
            case ae:
              return 2;
            case ke:
              return 8;
            case Ya:
            case mv:
              return 32;
            case Kc:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Io = false, kn = null, Fn = null, In = null, xi = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), Wn = [], w0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Bm(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          kn = null;
          break;
        case "dragenter":
        case "dragleave":
          Fn = null;
          break;
        case "mouseover":
        case "mouseout":
          In = null;
          break;
        case "pointerover":
        case "pointerout":
          xi.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Ai.delete(e.pointerId);
      }
    }
    function Oi(t, e, a, l, r, o) {
      return t === null || t.nativeEvent !== o ? (t = { blockedOn: e, domEventName: a, eventSystemFlags: l, nativeEvent: o, targetContainers: [r] }, e !== null && (e = Va(e), e !== null && Um(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t);
    }
    function M0(t, e, a, l, r) {
      switch (e) {
        case "focusin":
          return kn = Oi(kn, t, e, a, l, r), true;
        case "dragenter":
          return Fn = Oi(Fn, t, e, a, l, r), true;
        case "mouseover":
          return In = Oi(In, t, e, a, l, r), true;
        case "pointerover":
          var o = r.pointerId;
          return xi.set(o, Oi(xi.get(o) || null, t, e, a, l, r)), true;
        case "gotpointercapture":
          return o = r.pointerId, Ai.set(o, Oi(Ai.get(o) || null, t, e, a, l, r)), true;
      }
      return false;
    }
    function Hm(t) {
      var e = Ga(t.target);
      if (e !== null) {
        var a = f2(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = h(a), e !== null) {
              t.blockedOn = e, Ic(t.priority, function() {
                Nm(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = m(a), e !== null) {
              t.blockedOn = e, Ic(t.priority, function() {
                Nm(a);
              });
              return;
            }
          } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function sr(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = ko(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var l = new a.constructor(a.type, a);
          kr = l, a.target.dispatchEvent(l), kr = null;
        } else return e = Va(a), e !== null && Um(e), t.blockedOn = a, false;
        e.shift();
      }
      return true;
    }
    function qm(t, e, a) {
      sr(t) && a.delete(e);
    }
    function C0() {
      Io = false, kn !== null && sr(kn) && (kn = null), Fn !== null && sr(Fn) && (Fn = null), In !== null && sr(In) && (In = null), xi.forEach(qm), Ai.forEach(qm);
    }
    function rr(t, e) {
      t.blockedOn === e && (t.blockedOn = null, Io || (Io = true, n.unstable_scheduleCallback(n.unstable_NormalPriority, C0)));
    }
    var ur = null;
    function Ym(t) {
      ur !== t && (ur = t, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
        ur === t && (ur = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], r = t[e + 2];
          if (typeof l != "function") {
            if (Fo(l || a) === null) continue;
            break;
          }
          var o = Va(a);
          o !== null && (t.splice(e, 3), e -= 3, Ju(o, { pending: true, data: r, method: a.method, action: l }, l, r));
        }
      }));
    }
    function Tl(t) {
      function e(x) {
        return rr(x, t);
      }
      kn !== null && rr(kn, t), Fn !== null && rr(Fn, t), In !== null && rr(In, t), xi.forEach(e), Ai.forEach(e);
      for (var a = 0; a < Wn.length; a++) {
        var l = Wn[a];
        l.blockedOn === t && (l.blockedOn = null);
      }
      for (; 0 < Wn.length && (a = Wn[0], a.blockedOn === null); ) Hm(a), a.blockedOn === null && Wn.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) {
        var r = a[l], o = a[l + 1], d = r[me] || null;
        if (typeof o == "function") d || Ym(a);
        else if (d) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (r = o, d = o[me] || null) g = d.formAction;
            else if (Fo(r) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? a[l + 1] = g : (a.splice(l, 3), l -= 3), Ym(a);
        }
      }
    }
    function Qm() {
      function t(o) {
        o.canIntercept && o.info === "react-transition" && o.intercept({ handler: function() {
          return new Promise(function(d) {
            return r = d;
          });
        }, focusReset: "manual", scroll: "manual" });
      }
      function e() {
        r !== null && (r(), r = null), l || setTimeout(a, 20);
      }
      function a() {
        if (!l && !navigation.transition) {
          var o = navigation.currentEntry;
          o && o.url != null && navigation.navigate(o.url, { state: o.getState(), info: "react-transition", history: "replace" });
        }
      }
      if (typeof navigation == "object") {
        var l = false, r = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          l = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), r !== null && (r(), r = null);
        };
      }
    }
    function Wo(t) {
      this._internalRoot = t;
    }
    or.prototype.render = Wo.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var a = e.current, l = De();
      Dm(a, l, t, e, null, null);
    }, or.prototype.unmount = Wo.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Dm(t.current, 2, null, t, null, null), Vs(), e[Qa] = null;
      }
    };
    function or(t) {
      this._internalRoot = t;
    }
    or.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Fc();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < Wn.length && e !== 0 && e < Wn[a].priority; a++) ;
        Wn.splice(a, 0, t), a === 0 && Hm(t);
      }
    };
    var Gm = i.version;
    if (Gm !== "19.2.5") throw Error(u(527, Gm, "19.2.5"));
    P2.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
      return t = y2(e), t = t !== null ? S2(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var z0 = { bundleType: 0, version: "19.2.5", rendererPackageName: "react-dom", currentDispatcherRef: j, reconcilerVersion: "19.2.5" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!cr.isDisabled && cr.supportsFiber) try {
        jl = cr.inject(z0), Te = cr;
      } catch {
      }
    }
    return Mi.createRoot = function(t, e) {
      if (!c(t)) throw Error(u(299));
      var a = false, l = "", r = kd, o = Fd, d = Id;
      return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (r = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = Cm(t, 1, false, null, null, a, l, null, r, o, d, Qm), t[Qa] = e.current, Lo(t), new Wo(e);
    }, Mi.hydrateRoot = function(t, e, a) {
      if (!c(t)) throw Error(u(299));
      var l = false, r = "", o = kd, d = Fd, g = Id, x = null;
      return a != null && (a.unstable_strictMode === true && (l = true), a.identifierPrefix !== void 0 && (r = a.identifierPrefix), a.onUncaughtError !== void 0 && (o = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (g = a.onRecoverableError), a.formState !== void 0 && (x = a.formState)), e = Cm(t, 1, true, e, a ?? null, l, r, x, o, d, g, Qm), e.context = zm(null), a = e.current, l = De(), l = Qr(l), r = Bn(l), r.callback = null, Hn(a, r, l), a = l, e.current.lanes = a, Hl(e, a), $e(e), t[Qa] = e.current, Lo(t), new or(e);
    }, Mi.version = "19.2.5", Mi;
  }
  function Q0() {
    if (Wm) return ec.exports;
    Wm = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
    }
    return n(), ec.exports = Y0(), ec.exports;
  }
  function J0(n) {
    return typeof n == "function";
  }
  function na(n, i) {
    return J0(n) ? n(i) : n;
  }
  function za(n, i, s = () => ({}), u = 0) {
    if (n === i) return n;
    if (u > 500) return i;
    const c = i, f2 = ny(n) && ny(c);
    if (!f2 && !(Dl(n) && Dl(c))) return c;
    const h = f2 ? n : ty(n);
    if (!h) return c;
    const m = f2 ? c : ty(c);
    if (!m) return c;
    const p = h.length, y2 = m.length, S2 = f2 ? new Array(y2) : s();
    let v2 = 0;
    for (let _ = 0; _ < y2; _++) {
      const E2 = f2 ? _ : m[_], A2 = n[E2], C2 = c[E2];
      if (A2 === C2) {
        S2[E2] = A2, (f2 ? _ < p : k0.call(n, E2)) && v2++;
        continue;
      }
      if (A2 === null || C2 === null || typeof A2 != "object" || typeof C2 != "object") {
        S2[E2] = C2;
        continue;
      }
      const R2 = za(A2, C2, s, u + 1);
      S2[E2] = R2, R2 === A2 && v2++;
    }
    return p === y2 && v2 === p ? n : S2;
  }
  function ty(n) {
    const i = Object.getOwnPropertyNames(n);
    for (const c of i) if (!$m.call(n, c)) return false;
    const s = Object.getOwnPropertySymbols(n);
    if (s.length === 0) return i;
    const u = i;
    for (const c of s) {
      if (!$m.call(n, c)) return false;
      u.push(c);
    }
    return u;
  }
  function Dl(n) {
    if (!ey(n)) return false;
    const i = n.constructor;
    if (typeof i > "u") return true;
    const s = i.prototype;
    return !(!ey(s) || !s.hasOwnProperty("isPrototypeOf"));
  }
  function ey(n) {
    return Object.prototype.toString.call(n) === "[object Object]";
  }
  function ny(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length;
  }
  function _e(n, i, s) {
    if (n === i) return true;
    if (typeof n != typeof i) return false;
    if (Array.isArray(n) && Array.isArray(i)) {
      if (n.length !== i.length) return false;
      for (let u = 0, c = n.length; u < c; u++) if (!_e(n[u], i[u], s)) return false;
      return true;
    }
    if (Dl(n) && Dl(i)) {
      const u = s?.ignoreUndefined ?? true;
      if (s?.partial) {
        for (const h in i) if ((!u || i[h] !== void 0) && !_e(n[h], i[h], s)) return false;
        return true;
      }
      let c = 0;
      if (!u) c = Object.keys(n).length;
      else for (const h in n) n[h] !== void 0 && c++;
      let f2 = 0;
      for (const h in i) if ((!u || i[h] !== void 0) && (f2++, f2 > c || !_e(n[h], i[h], s))) return false;
      return c === f2;
    }
    return false;
  }
  function ja(n) {
    let i, s;
    const u = new Promise((c, f2) => {
      i = c, s = f2;
    });
    return u.status = "pending", u.resolve = (c) => {
      u.status = "resolved", u.value = c, i(c), n?.(c);
    }, u.reject = (c) => {
      u.status = "rejected", s(c);
    }, u;
  }
  function I0(n) {
    return typeof n?.message != "string" ? false : n.message.startsWith("Failed to fetch dynamically imported module") || n.message.startsWith("error loading dynamically imported module") || n.message.startsWith("Importing a module script failed");
  }
  function Er(n, i) {
    if (!n) return false;
    try {
      const s = new URL(n);
      return !i.has(s.protocol);
    } catch {
      return false;
    }
  }
  function nS(n) {
    return n.replace(eS, (i) => tS[i]);
  }
  function Re() {
    throw new Error("Invariant failed");
  }
  function vr(n) {
    return Lc(n.filter((i) => i !== void 0).join("/"));
  }
  function Lc(n) {
    return n.replace(/\/{2,}/g, "/");
  }
  function ep(n) {
    return n === "/" ? n : n.replace(/^\/{1,}/, "");
  }
  function ia(n) {
    const i = n.length;
    return i > 1 && n[i - 1] === "/" ? n.replace(/\/{1,}$/, "") : n;
  }
  function Rr(n, i) {
    return n?.endsWith("/") && n !== "/" && n !== `${i}/` ? n.slice(0, -1) : n;
  }
  function pS(n, i, s) {
    return Rr(n, s) === Rr(i, s);
  }
  function ne(n) {
    return n?.isNotFound === true;
  }
  function SS() {
    try {
      return typeof window < "u" && typeof window.sessionStorage == "object" ? window.sessionStorage : void 0;
    } catch {
      return;
    }
  }
  function _S() {
    const n = SS();
    if (!n) return null;
    let i = {};
    try {
      const u = JSON.parse(n.getItem("tsr-scroll-restoration-v1_3") || "{}");
      Dl(u) && (i = u);
    } catch {
    }
    return { get state() {
      return i;
    }, set: (u) => {
      i = na(u, i) || i;
    }, persist: () => {
      try {
        n.setItem(bS, JSON.stringify(i));
      } catch {
      }
    } };
  }
  function ap(n, i = String) {
    const s = new URLSearchParams();
    for (const u in n) {
      const c = n[u];
      c !== void 0 && s.set(u, i(c));
    }
    return s.toString();
  }
  function uc(n) {
    return n ? n === "false" ? false : n === "true" ? true : +n * 0 === 0 && +n + "" === n ? +n : n : "";
  }
  function xS(n) {
    const i = new URLSearchParams(n), s = /* @__PURE__ */ Object.create(null);
    for (const [u, c] of i.entries()) {
      const f2 = s[u];
      f2 == null ? s[u] = uc(c) : Array.isArray(f2) ? f2.push(uc(c)) : s[u] = [f2, uc(c)];
    }
    return s;
  }
  function wS(n) {
    return (i) => {
      i[0] === "?" && (i = i.substring(1));
      const s = xS(i);
      for (const u in s) {
        const c = s[u];
        if (typeof c == "string") try {
          s[u] = n(c);
        } catch {
        }
      }
      return s;
    };
  }
  function MS(n, i) {
    const s = typeof i == "function";
    function u(c) {
      if (typeof c == "object" && c !== null) try {
        return n(c);
      } catch {
      }
      else if (s && typeof c == "string") try {
        return i(c), n(c);
      } catch {
      }
      return c;
    }
    return (c) => {
      const f2 = ap(c, u);
      return f2 ? `?${f2}` : "";
    };
  }
  function lp(n) {
    if (n.statusCode = n.statusCode || n.code || 307, !n._builtLocation && !n.reloadDocument && typeof n.href == "string") try {
      new URL(n.href), n.reloadDocument = true;
    } catch {
    }
    const i = new Headers(n.headers);
    n.href && i.get("Location") === null && i.set("Location", n.href);
    const s = new Response(null, { status: n.statusCode, headers: i });
    if (s.options = n, n.throw) throw s;
    return s;
  }
  function Ee(n) {
    return n instanceof Response && !!n.options;
  }
  function Ml(n, i) {
    const s = i, u = n;
    return { fromLocation: s, toLocation: u, pathChanged: s?.pathname !== u.pathname, hrefChanged: s?.href !== u.href, hashChanged: s?.hash !== u.hash };
  }
  function gy(n, i) {
    if (n) return typeof n == "string" ? n : n[i];
  }
  function $S(n) {
    return typeof n == "string" ? { href: n, crossOrigin: void 0 } : n;
  }
  function tb(n) {
    if (n.tag !== "link") return;
    const i = n.attrs?.rel, s = n.attrs?.href;
    if (typeof s == "string" && (typeof i == "string" ? i.split(/\s+/) : []).includes("stylesheet")) return s;
  }
  function eb(n, i) {
    const s = tb(i);
    return !!s && n?.inlineCss?.styles[s] !== void 0;
  }
  function _t(n, i, s, u, c, f2, h, m, p, y2, S2, v2) {
    return { t: n, i, s, c: u, m: c, p: f2, e: h, a: m, f: p, b: y2, o: S2, l: v2 };
  }
  function ra(n) {
    return _t(2, b, n, b, b, b, b, b, b, b, b, b);
  }
  function aE(n, i, s = {}, u = {}) {
    et.useEffect(() => {
      if (!n.current || u.disabled || typeof IntersectionObserver != "function") return;
      const c = new IntersectionObserver(([f2]) => {
        i(f2);
      }, s);
      return c.observe(n.current), () => {
        c.disconnect();
      };
    }, [i, s, u.disabled, n]);
  }
  function lE(n) {
    const i = et.useRef(null);
    return et.useImperativeHandle(n, () => i.current, []), i;
  }
  function Hc(n) {
    const i = n.errorComponent ?? qc;
    return Z.jsx(uE, { getResetKey: n.getResetKey, onCatch: n.onCatch, children: ({ error: s, reset: u }) => s ? et.createElement(i, { error: s, reset: u }) : n.children });
  }
  function qc({ error: n }) {
    const [i, s] = et.useState(false);
    return Z.jsxs("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [Z.jsxs("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [Z.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }), Z.jsx("button", { style: { appearance: "none", fontSize: ".6em", border: "1px solid currentColor", padding: ".1rem .2rem", fontWeight: "bold", borderRadius: ".25rem" }, onClick: () => s((u) => !u), children: i ? "Hide Error" : "Show Error" })] }), Z.jsx("div", { style: { height: ".25rem" } }), i ? Z.jsx("div", { children: Z.jsx("pre", { style: { fontSize: ".7em", border: "1px solid red", borderRadius: ".25rem", padding: ".3rem", color: "red", overflow: "auto" }, children: n.message ? Z.jsx("code", { children: n.message }) : null }) }) : null] });
  }
  function oE({ children: n, fallback: i = null }) {
    return Yc() ? Z.jsx(Bi.Fragment, { children: n }) : Z.jsx(Bi.Fragment, { children: i });
  }
  function Yc() {
    return Bi.useSyncExternalStore(cE, () => true, () => false);
  }
  function cE() {
    return () => {
    };
  }
  function oe(n) {
    return et.useContext(Zp);
  }
  function dE({ update: n, notify: i, unwatched: s }) {
    return { link: u, unlink: c, propagate: f2, checkDirty: h, shallowPropagate: m };
    function u(y2, S2, v2) {
      const _ = S2.depsTail;
      if (_ !== void 0 && _.dep === y2) return;
      const E2 = _ !== void 0 ? _.nextDep : S2.deps;
      if (E2 !== void 0 && E2.dep === y2) {
        E2.version = v2, S2.depsTail = E2;
        return;
      }
      const A2 = y2.subsTail;
      if (A2 !== void 0 && A2.version === v2 && A2.sub === S2) return;
      const C2 = S2.depsTail = y2.subsTail = { version: v2, dep: y2, sub: S2, prevDep: _, nextDep: E2, prevSub: A2, nextSub: void 0 };
      E2 !== void 0 && (E2.prevDep = C2), _ !== void 0 ? _.nextDep = C2 : S2.deps = C2, A2 !== void 0 ? A2.nextSub = C2 : y2.subs = C2;
    }
    function c(y2, S2 = y2.sub) {
      const v2 = y2.dep, _ = y2.prevDep, E2 = y2.nextDep, A2 = y2.nextSub, C2 = y2.prevSub;
      return E2 !== void 0 ? E2.prevDep = _ : S2.depsTail = _, _ !== void 0 ? _.nextDep = E2 : S2.deps = E2, A2 !== void 0 ? A2.prevSub = C2 : v2.subsTail = C2, C2 !== void 0 ? C2.nextSub = A2 : (v2.subs = A2) === void 0 && s(v2), E2;
    }
    function f2(y2) {
      let S2 = y2.nextSub, v2;
      t: do {
        const _ = y2.sub;
        let E2 = _.flags;
        if (E2 & 60 ? E2 & 12 ? E2 & 4 ? !(E2 & 48) && p(y2, _) ? (_.flags = E2 | 40, E2 &= 1) : E2 = 0 : _.flags = E2 & -9 | 32 : E2 = 0 : _.flags = E2 | 32, E2 & 2 && i(_), E2 & 1) {
          const A2 = _.subs;
          if (A2 !== void 0) {
            const C2 = (y2 = A2).nextSub;
            C2 !== void 0 && (v2 = { value: S2, prev: v2 }, S2 = C2);
            continue;
          }
        }
        if ((y2 = S2) !== void 0) {
          S2 = y2.nextSub;
          continue;
        }
        for (; v2 !== void 0; ) if (y2 = v2.value, v2 = v2.prev, y2 !== void 0) {
          S2 = y2.nextSub;
          continue t;
        }
        break;
      } while (true);
    }
    function h(y2, S2) {
      let v2, _ = 0, E2 = false;
      t: do {
        const A2 = y2.dep, C2 = A2.flags;
        if (S2.flags & 16) E2 = true;
        else if ((C2 & 17) === 17) {
          if (n(A2)) {
            const R2 = A2.subs;
            R2.nextSub !== void 0 && m(R2), E2 = true;
          }
        } else if ((C2 & 33) === 33) {
          (y2.nextSub !== void 0 || y2.prevSub !== void 0) && (v2 = { value: y2, prev: v2 }), y2 = A2.deps, S2 = A2, ++_;
          continue;
        }
        if (!E2) {
          const R2 = y2.nextDep;
          if (R2 !== void 0) {
            y2 = R2;
            continue;
          }
        }
        for (; _--; ) {
          const R2 = S2.subs, M2 = R2.nextSub !== void 0;
          if (M2 ? (y2 = v2.value, v2 = v2.prev) : y2 = R2, E2) {
            if (n(S2)) {
              M2 && m(R2), S2 = y2.sub;
              continue;
            }
            E2 = false;
          } else S2.flags &= -33;
          S2 = y2.sub;
          const q = y2.nextDep;
          if (q !== void 0) {
            y2 = q;
            continue t;
          }
        }
        return E2;
      } while (true);
    }
    function m(y2) {
      do {
        const S2 = y2.sub, v2 = S2.flags;
        (v2 & 48) === 32 && (S2.flags = v2 | 16, (v2 & 6) === 2 && i(S2));
      } while ((y2 = y2.nextSub) !== void 0);
    }
    function p(y2, S2) {
      let v2 = S2.depsTail;
      for (; v2 !== void 0; ) {
        if (v2 === y2) return true;
        v2 = v2.prevDep;
      }
      return false;
    }
  }
  function wr(n) {
    const i = n.depsTail;
    let s = i !== void 0 ? i.nextDep : n.deps;
    for (; s !== void 0; ) s = mE(s, n);
  }
  function vE() {
    if (Ny) return pc;
    Ny = 1;
    var n = Ki();
    function i(v2, _) {
      return v2 === _ && (v2 !== 0 || 1 / v2 === 1 / _) || v2 !== v2 && _ !== _;
    }
    var s = typeof Object.is == "function" ? Object.is : i, u = n.useState, c = n.useEffect, f2 = n.useLayoutEffect, h = n.useDebugValue;
    function m(v2, _) {
      var E2 = _(), A2 = u({ inst: { value: E2, getSnapshot: _ } }), C2 = A2[0].inst, R2 = A2[1];
      return f2(function() {
        C2.value = E2, C2.getSnapshot = _, p(C2) && R2({ inst: C2 });
      }, [v2, E2, _]), c(function() {
        return p(C2) && R2({ inst: C2 }), v2(function() {
          p(C2) && R2({ inst: C2 });
        });
      }, [v2]), h(E2), E2;
    }
    function p(v2) {
      var _ = v2.getSnapshot;
      v2 = v2.value;
      try {
        var E2 = _();
        return !s(v2, E2);
      } catch {
        return true;
      }
    }
    function y2(v2, _) {
      return _();
    }
    var S2 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? y2 : m;
    return pc.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : S2, pc;
  }
  function gE() {
    return jy || (jy = 1, yc.exports = vE()), yc.exports;
  }
  function SE() {
    if (By) return mc;
    By = 1;
    var n = Ki(), i = gE();
    function s(y2, S2) {
      return y2 === S2 && (y2 !== 0 || 1 / y2 === 1 / S2) || y2 !== y2 && S2 !== S2;
    }
    var u = typeof Object.is == "function" ? Object.is : s, c = i.useSyncExternalStore, f2 = n.useRef, h = n.useEffect, m = n.useMemo, p = n.useDebugValue;
    return mc.useSyncExternalStoreWithSelector = function(y2, S2, v2, _, E2) {
      var A2 = f2(null);
      if (A2.current === null) {
        var C2 = { hasValue: false, value: null };
        A2.current = C2;
      } else C2 = A2.current;
      A2 = m(function() {
        function M2(k) {
          if (!q) {
            if (q = true, Q = k, k = _(k), E2 !== void 0 && C2.hasValue) {
              var X = C2.value;
              if (E2(X, k)) return H = X;
            }
            return H = k;
          }
          if (X = H, u(Q, k)) return X;
          var K = _(k);
          return E2 !== void 0 && E2(X, K) ? (Q = k, X) : (Q = k, H = K);
        }
        var q = false, Q, H, F = v2 === void 0 ? null : v2;
        return [function() {
          return M2(S2());
        }, F === null ? void 0 : function() {
          return M2(F());
        }];
      }, [S2, v2, _, E2]);
      var R2 = c(y2, A2[0], A2[1]);
      return h(function() {
        C2.hasValue = true, C2.value = R2;
      }, [R2]), p(R2), R2;
    }, mc;
  }
  function bE() {
    return Hy || (Hy = 1, hc.exports = SE()), hc.exports;
  }
  function EE(n, i) {
    return n === i;
  }
  function Ft(n, i, s = EE) {
    const u = et.useCallback((h) => {
      if (!n) return () => {
      };
      const { unsubscribe: m } = n.subscribe(h);
      return m;
    }, [n]), c = et.useCallback(() => n?.get(), [n]);
    return _E.useSyncExternalStoreWithSelector(u, c, c, i, s);
  }
  function Ha(n) {
    const i = oe(), s = et.useContext(n.from ? fE : Br), u = n.from ?? s, c = u ? n.from ? i.stores.getRouteMatchStore(u) : i.stores.matchStores.get(u) : void 0, f2 = et.useRef(void 0);
    return Ft(c ?? RE, (h) => {
      if ((n.shouldThrow ?? true) && !h && Re(), h === void 0) return;
      const m = n.select ? n.select(h) : h;
      if (n.structuralSharing ?? i.options.defaultStructuralSharing) {
        const p = za(f2.current, m);
        return f2.current = p, p;
      }
      return m;
    });
  }
  function Fp(n) {
    return Ha({ from: n.from, strict: n.strict, structuralSharing: n.structuralSharing, select: (i) => n.select ? n.select(i.loaderData) : i.loaderData });
  }
  function Ip(n) {
    const { select: i, ...s } = n;
    return Ha({ ...s, select: (u) => i ? i(u.loaderDeps) : u.loaderDeps });
  }
  function Wp(n) {
    return Ha({ from: n.from, shouldThrow: n.shouldThrow, structuralSharing: n.structuralSharing, strict: n.strict, select: (i) => {
      const s = n.strict === false ? i.params : i._strictParams;
      return n.select ? n.select(s) : s;
    } });
  }
  function $p(n) {
    return Ha({ from: n.from, strict: n.strict, shouldThrow: n.shouldThrow, structuralSharing: n.structuralSharing, select: (i) => n.select ? n.select(i.search) : i.search });
  }
  function tv(n) {
    const i = oe();
    return et.useCallback((s) => i.navigate({ ...s, from: s.from ?? n?.from }), [n?.from, i]);
  }
  function ev(n) {
    return Ha({ ...n, select: (i) => n.select ? n.select(i.context) : i.context });
  }
  function xE(n, i) {
    const s = oe(), u = lE(i), { activeProps: c, inactiveProps: f2, activeOptions: h, to: m, preload: p, preloadDelay: y2, preloadIntentProximity: S2, hashScrollIntoView: v2, replace: _, startTransition: E2, resetScroll: A2, viewTransition: C2, children: R2, target: M2, disabled: q, style: Q, className: H, onClick: F, onBlur: k, onFocus: X, onMouseEnter: K, onMouseLeave: I2, onTouchStart: st, ignoreBlocker: nt, params: mt, search: xt, hash: Gt, state: Nt, mask: j, reloadDocument: P2, unsafeRelative: it, from: Et, _fromLocation: Tt, ...w } = n, G = Yc(), J = et.useMemo(() => n, [s, n.from, n._fromLocation, n.hash, n.to, n.search, n.params, n.state, n.mask, n.unsafeRelative]), W = Ft(s.stores.location, (Ut) => Ut, (Ut, ae) => Ut.href === ae.href), at = et.useMemo(() => {
      const Ut = { _fromLocation: W, ...J };
      return s.buildLocation(Ut);
    }, [s, W, J]), ft = at.maskedLocation ? at.maskedLocation.publicHref : at.publicHref, gt = at.maskedLocation ? at.maskedLocation.external : at.external, Vt = et.useMemo(() => zE(ft, gt, s.history, q), [q, gt, ft, s.history]), zt = et.useMemo(() => {
      if (Vt?.external) return Er(Vt.href, s.protocolAllowlist) ? void 0 : Vt.href;
      if (!DE(m) && !(typeof m != "string" || m.indexOf(":") === -1)) try {
        return new URL(m), Er(m, s.protocolAllowlist) ? void 0 : m;
      } catch {
      }
    }, [m, Vt, s.protocolAllowlist]), nn = et.useMemo(() => {
      if (zt) return false;
      if (h?.exact) {
        if (!pS(W.pathname, at.pathname, s.basepath)) return false;
      } else {
        const Ut = Rr(W.pathname, s.basepath), ae = Rr(at.pathname, s.basepath);
        if (!(Ut.startsWith(ae) && (Ut.length === ae.length || Ut[ae.length] === "/"))) return false;
      }
      return (h?.includeSearch ?? true) && !_e(W.search, at.search, { partial: !h?.exact, ignoreUndefined: !h?.explicitUndefined }) ? false : h?.includeHash ? G && W.hash === at.hash : true;
    }, [h?.exact, h?.explicitUndefined, h?.includeHash, h?.includeSearch, W, zt, G, at.hash, at.pathname, at.search, s.basepath]), an = nn ? na(c, {}) ?? AE : vc, wn = nn ? vc : na(f2, {}) ?? vc, Ll = [H, an.className, wn.className].filter(Boolean).join(" "), Je = (Q || an.style || wn.style) && { ...Q, ...an.style, ...wn.style }, [Ul, qa] = et.useState(false), Pi = et.useRef(false), ln = n.reloadDocument || zt ? false : p ?? s.options.defaultPreload, fa = y2 ?? s.options.defaultPreloadDelay ?? 0, Ve = et.useCallback(() => {
      s.preloadRoute({ ...J, _builtLocation: at }).catch((Ut) => {
        console.warn(Ut), console.warn(WS);
      });
    }, [s, J, at]);
    aE(u, et.useCallback((Ut) => {
      Ut?.isIntersecting && Ve();
    }, [Ve]), CE, { disabled: !!q || ln !== "viewport" }), et.useEffect(() => {
      Pi.current || !q && ln === "render" && (Ve(), Pi.current = true);
    }, [q, Ve, ln]);
    const Nl = (Ut) => {
      const ae = Ut.currentTarget.getAttribute("target"), ke = M2 !== void 0 ? M2 : ae;
      if (!q && !LE(Ut) && !Ut.defaultPrevented && (!ke || ke === "_self") && Ut.button === 0) {
        Ut.preventDefault(), TE.flushSync(() => {
          qa(true);
        });
        const Ya = s.subscribe("onResolved", () => {
          Ya(), qa(false);
        });
        s.navigate({ ...J, replace: _, resetScroll: A2, hashScrollIntoView: v2, startTransition: E2, viewTransition: C2, ignoreBlocker: nt });
      }
    };
    if (zt) return { ...w, ref: u, href: zt, ...R2 && { children: R2 }, ...M2 && { target: M2 }, ...q && { disabled: q }, ...Q && { style: Q }, ...H && { className: H }, ...F && { onClick: F }, ...k && { onBlur: k }, ...X && { onFocus: X }, ...K && { onMouseEnter: K }, ...I2 && { onMouseLeave: I2 }, ...st && { onTouchStart: st } };
    const Ji = (Ut) => {
      if (q || ln !== "intent") return;
      if (!fa) {
        Ve();
        return;
      }
      const ae = Ut.currentTarget;
      if (Ni.has(ae)) return;
      const ke = setTimeout(() => {
        Ni.delete(ae), Ve();
      }, fa);
      Ni.set(ae, ke);
    }, qr = (Ut) => {
      q || ln !== "intent" || Ve();
    }, ce = (Ut) => {
      if (q || !ln || !fa) return;
      const ae = Ut.currentTarget, ke = Ni.get(ae);
      ke && (clearTimeout(ke), Ni.delete(ae));
    };
    return { ...w, ...an, ...wn, href: Vt?.href, ref: u, onClick: xl([F, Nl]), onBlur: xl([k, ce]), onFocus: xl([X, Ji]), onMouseEnter: xl([K, Ji]), onMouseLeave: xl([I2, ce]), onTouchStart: xl([st, qr]), disabled: !!q, target: M2, ...Je && { style: Je }, ...Ll && { className: Ll }, ...q && OE, ...nn && wE, ...G && Ul && ME };
  }
  function zE(n, i, s, u) {
    if (!u) return i ? { href: n, external: true } : { href: s.createHref(n) || "/", external: false };
  }
  function DE(n) {
    if (typeof n != "string") return false;
    const i = n.charCodeAt(0);
    return i === 47 ? n.charCodeAt(1) !== 47 : i === 46;
  }
  function LE(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
  }
  function NE(n) {
    return new UE(n);
  }
  function jE() {
    return (n) => HE(n);
  }
  function HE(n) {
    return new BE(n);
  }
  function qE(n) {
    return new YE(n, { silent: true }).createRoute;
  }
  function QE(n, i) {
    let s, u, c, f2;
    const h = () => (s || (s = n().then((p) => {
      s = void 0, u = p[i];
    }).catch((p) => {
      if (c = p, I0(c) && c instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
        const y2 = `tanstack_router_reload:${c.message}`;
        sessionStorage.getItem(y2) || (sessionStorage.setItem(y2, "1"), f2 = true);
      }
    })), s), m = function(y2) {
      if (f2) throw window.location.reload(), new Promise(() => {
      });
      if (c) throw c;
      if (!u) if (Or) Or(h());
      else throw h();
      return et.createElement(u, y2);
    };
    return m.preload = h, m;
  }
  function GE(n) {
    const i = oe(), s = `not-found-${Ft(i.stores.location, (u) => u.pathname)}-${Ft(i.stores.status, (u) => u)}`;
    return Z.jsx(Hc, { getResetKey: () => s, onCatch: (u, c) => {
      if (ne(u)) n.onCatch?.(u, c);
      else throw u;
    }, errorComponent: ({ error: u }) => {
      if (ne(u)) return n.fallback?.(u);
      throw u;
    }, children: n.children });
  }
  function VE() {
    return Z.jsx("p", { children: "Not Found" });
  }
  function Al(n) {
    return Z.jsx(Z.Fragment, { children: n.children });
  }
  function nv(n, i, s) {
    return i.options.notFoundComponent ? Z.jsx(i.options.notFoundComponent, { ...s }) : n.options.defaultNotFoundComponent ? Z.jsx(n.options.defaultNotFoundComponent, { ...s }) : Z.jsx(VE, {});
  }
  function XE(n) {
    return null;
  }
  function KE() {
    return XE(oe()), null;
  }
  function ZE({ router: n, matchId: i, resetKey: s, matchState: u }) {
    const c = n.routesById[u.routeId], f2 = c.options.pendingComponent ?? n.options.defaultPendingComponent, h = f2 ? Z.jsx(f2, {}) : null, m = c.options.errorComponent ?? n.options.defaultErrorComponent, p = c.options.onCatch ?? n.options.defaultOnCatch, y2 = c.isRoot ? c.options.notFoundComponent ?? n.options.notFoundRoute?.options.component : c.options.notFoundComponent, S2 = u.ssr === false || u.ssr === "data-only", v2 = (!c.isRoot || c.options.wrapInSuspense || S2) && (c.options.wrapInSuspense ?? f2 ?? (c.options.errorComponent?.preload || S2)) ? et.Suspense : Al, _ = m ? Hc : Al, E2 = y2 ? GE : Al;
    return Z.jsxs(c.isRoot ? c.options.shellComponent ?? Al : Al, { children: [Z.jsx(Br.Provider, { value: i, children: Z.jsx(v2, { fallback: h, children: Z.jsx(_, { getResetKey: () => s, errorComponent: m || qc, onCatch: (A2, C2) => {
      if (ne(A2)) throw A2.routeId ??= u.routeId, A2;
      p?.(A2, C2);
    }, children: Z.jsx(E2, { fallback: (A2) => {
      if (A2.routeId ??= u.routeId, !y2 || A2.routeId && A2.routeId !== u.routeId || !A2.routeId && !c.isRoot) throw A2;
      return et.createElement(y2, A2);
    }, children: S2 || u._displayPending ? Z.jsx(oE, { fallback: h, children: Z.jsx(qy, { matchId: i }) }) : Z.jsx(qy, { matchId: i }) }) }) }) }), u.parentRouteId === Ua ? Z.jsxs(Z.Fragment, { children: [Z.jsx(PE, { resetKey: s }), n.options.scrollRestoration && Wy ? Z.jsx(KE, {}) : null] }) : null] });
  }
  function PE({ resetKey: n }) {
    const i = oe(), s = et.useRef(void 0);
    return ji(() => {
      const u = i.latestLocation.href;
      (s.current === void 0 || s.current !== u) && (i.emit({ type: "onRendered", ...Ml(i.stores.location.get(), i.stores.resolvedLocation.get()) }), s.current = u);
    }, [i.latestLocation.state.__TSR_key, n, i]), null;
  }
  function iv(n) {
    const { attrs: i, children: s, nonce: u } = n;
    switch (n.tag) {
      case "title":
        return Z.jsx("title", { ...i, suppressHydrationWarning: true, children: s });
      case "meta":
        return Z.jsx("meta", { ...i, suppressHydrationWarning: true });
      case "link":
        return Z.jsx("link", { ...i, precedence: i?.precedence ?? (i?.rel === "stylesheet" ? "default" : void 0), nonce: u, suppressHydrationWarning: true });
      case "style":
        return n.inlineCss, Z.jsx("style", { ...i, dangerouslySetInnerHTML: { __html: s }, nonce: u });
      case "script":
        return Z.jsx(nR, { attrs: i, children: s });
      default:
        return null;
    }
  }
  function nR({ attrs: n, children: i }) {
    oe();
    const s = Yc(), u = typeof n?.type == "string" && n.type !== "" && n.type !== "text/javascript" && n.type !== "module";
    if (et.useEffect(() => {
      if (!u) {
        if (n?.src) {
          const c = (() => {
            try {
              const h = document.baseURI || window.location.href;
              return new URL(n.src, h).href;
            } catch {
              return n.src;
            }
          })();
          if (Array.from(document.querySelectorAll("script[src]")).find((h) => h.src === c)) return;
          const f2 = document.createElement("script");
          for (const [h, m] of Object.entries(n)) h !== "suppressHydrationWarning" && m !== void 0 && m !== false && f2.setAttribute(h, typeof m == "boolean" ? "" : String(m));
          return document.head.appendChild(f2), () => {
            f2.parentNode && f2.parentNode.removeChild(f2);
          };
        }
        if (typeof i == "string") {
          const c = typeof n?.type == "string" ? n.type : "text/javascript", f2 = typeof n?.nonce == "string" ? n.nonce : void 0;
          if (Array.from(document.querySelectorAll("script:not([src])")).find((m) => {
            if (!(m instanceof HTMLScriptElement)) return false;
            const p = m.getAttribute("type") ?? "text/javascript", y2 = m.getAttribute("nonce") ?? void 0;
            return m.textContent === i && p === c && y2 === f2;
          })) return;
          const h = document.createElement("script");
          if (h.textContent = i, n) for (const [m, p] of Object.entries(n)) m !== "suppressHydrationWarning" && p !== void 0 && p !== false && h.setAttribute(m, typeof p == "boolean" ? "" : String(p));
          return document.head.appendChild(h), () => {
            h.parentNode && h.parentNode.removeChild(h);
          };
        }
      }
    }, [n, i, u]), u && typeof i == "string") return Z.jsx("script", { ...n, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: i } });
    if (!s) {
      if (n?.src) return Z.jsx("script", { ...n, suppressHydrationWarning: true });
      if (typeof i == "string") return Z.jsx("script", { ...n, dangerouslySetInnerHTML: { __html: i }, suppressHydrationWarning: true });
    }
    return null;
  }
  function lR(n, i) {
    const s = /* @__PURE__ */ new Set();
    return n.filter((u) => {
      const c = i(u);
      return s.has(c) ? false : (s.add(c), true);
    });
  }
  function iR(n) {
    const i = aR(n.assetCrossOrigin), s = oe().options.ssr?.nonce;
    return Z.jsx(Z.Fragment, { children: i.map((u) => et.createElement(iv, { ...u, key: `tsr-meta-${JSON.stringify(u)}`, nonce: s })) });
  }
  function rR(n, i, s) {
    let u;
    n.serverSsr && (u = n.serverSsr.takeBufferedScripts());
    const c = [...i, ...s];
    return u && c.unshift(u), Z.jsx(Z.Fragment, { children: c.map((f2, h) => et.createElement(iv, { ...f2, key: `tsr-scripts-${f2.tag}-${h}` })) });
  }
  function sv(n, i) {
    for (let s = 0, u = i.length; s < u; s++) {
      const c = i[s];
      n.has(c) || (n.add(c), c.extends && sv(n, c.extends));
    }
  }
  function hR(n) {
    setTimeout(n, 0);
  }
  function OR() {
    let n = [], i = 0, s = (m) => {
      m();
    }, u = (m) => {
      m();
    }, c = AR;
    const f2 = (m) => {
      i ? n.push(m) : c(() => {
        s(m);
      });
    }, h = () => {
      const m = n;
      n = [], m.length && c(() => {
        u(() => {
          m.forEach((p) => {
            s(p);
          });
        });
      });
    };
    return { batch: (m) => {
      let p;
      i++;
      try {
        p = m();
      } finally {
        i--, i || h();
      }
      return p;
    }, batchCalls: (m) => (...p) => {
      f2(() => {
        m(...p);
      });
    }, schedule: f2, setNotifyFunction: (m) => {
      s = m;
    }, setBatchNotifyFunction: (m) => {
      u = m;
    }, setScheduler: (m) => {
      c = m;
    } };
  }
  function QR() {
    return Z.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: Z.jsxs("div", { className: "max-w-md text-center", children: [Z.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }), Z.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }), Z.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }), Z.jsx("div", { className: "mt-6", children: Z.jsx(Qc, { to: "/", className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90", children: "Go home" }) })] }) });
  }
  function GR({ error: n, reset: i }) {
    console.error(n);
    const s = oe();
    return Z.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: Z.jsxs("div", { className: "max-w-md text-center", children: [Z.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }), Z.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }), Z.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [Z.jsx("button", { onClick: () => {
      s.invalidate(), i();
    }, className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90", children: "Try again" }), Z.jsx("a", { href: "/", className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent", children: "Go home" })] })] }) });
  }
  function VR({ children: n }) {
    return Z.jsxs("html", { lang: "en", children: [Z.jsx("head", { children: Z.jsx(iR, {}) }), Z.jsxs("body", { children: [n, Z.jsx(sR, {})] })] });
  }
  function XR() {
    const { queryClient: n } = Xc.useRouteContext();
    return Z.jsx(qR, { client: n, children: Z.jsx(lv, {}) });
  }
  function mountApp() {
    const r = document.getElementById("root");
    if (!r) return;
    Promise.resolve().then(() => (init_index_Byh2tMir(), index_Byh2tMir_exports)).then((m) => {
      const root = G0.createRoot(r);
      root.render(Z.jsx(et.StrictMode, { children: Z.jsx(m.component, {}) }));
    }).catch((e) => console.error("Mount error:", e));
  }
  var $o, wi, Vm, Xm, Z, tc, ut, Km, Zm, et, Bi, ec, Mi, nc, ac, Pm, Jm, lc, fe, km, Fm, Im, Wm, G0, Wy, k0, $m, tS, eS, bS, ry, AS, OS, Ua, WS, cp, nb, lb, xn, fp, Cl, An, dp, hp, mp, yp, pp, vp, gp, zl, Sp, bp, b, sb, _p, Ep, ob, cb, fb, db, hb, mb, mr, Ol, Lr, t1, e1, a1, l1, Cp, r1, h1, Q1, M_, Ar, qp, U_, Ay, Z_, Oy, wy, Or, ji, uE, Zp, Br, fE, qt, Tc, Dy, mE, yE, Pp, Ly, xc, hc, mc, yc, pc, Ny, jy, By, Hy, _E, RE, TE, vc, AE, OE, wE, ME, Ni, CE, xl, Qc, UE, BE, YE, av, qy, lv, aR, sR, wl, uR, oR, Yy, Hr, cR, rv, fR, dR, Oc, mR, AR, he, wR, Mr, HR, qR, YR, Xc, KR, ZR, ky, PR, JR, kR, FR, IR, WR;
  var init_index_D_60NFQg = __esm({
    "assets/index-D_60NFQg.js"() {
      $o = { exports: {} };
      wi = {};
      Z = N0();
      tc = { exports: {} };
      ut = {};
      et = Ki();
      Bi = L0(et);
      ec = { exports: {} };
      Mi = {};
      nc = { exports: {} };
      ac = {};
      lc = { exports: {} };
      fe = {};
      G0 = Q0();
      Wy = false;
      k0 = Object.prototype.hasOwnProperty;
      $m = Object.prototype.propertyIsEnumerable;
      tS = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
      eS = /[&><\u2028\u2029]/g;
      bS = "tsr-scroll-restoration-v1_3";
      ry = _S();
      AS = wS(JSON.parse);
      OS = MS(JSON.stringify, JSON.parse);
      Ua = "__root__";
      WS = "Error preloading route! \u261D\uFE0F";
      cp = class {
        get to() {
          return this._to;
        }
        get id() {
          return this._id;
        }
        get path() {
          return this._path;
        }
        get fullPath() {
          return this._fullPath;
        }
        constructor(n) {
          if (this.init = (i) => {
            this.originalIndex = i.originalIndex;
            const s = this.options, u = !s?.path && !s?.id;
            this.parentRoute = this.options.getParentRoute?.(), u ? this._path = Ua : this.parentRoute || Re();
            let c = u ? Ua : s?.path;
            c && c !== "/" && (c = ep(c));
            const f2 = s?.id || c;
            let h = u ? Ua : vr([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f2]);
            c === "__root__" && (c = "/"), h !== "__root__" && (h = vr(["/", h]));
            const m = h === "__root__" ? "/" : vr([this.parentRoute.fullPath, c]);
            this._path = c, this._id = h, this._fullPath = m, this._to = ia(m);
          }, this.addChildren = (i) => this._addFileChildren(i), this._addFileChildren = (i) => (Array.isArray(i) && (this.children = i), typeof i == "object" && i !== null && (this.children = Object.values(i)), this), this._addFileTypes = () => this, this.updateLoader = (i) => (Object.assign(this.options, i), this), this.update = (i) => (Object.assign(this.options, i), this), this.lazy = (i) => (this.lazyFn = i, this), this.redirect = (i) => lp({ from: this.fullPath, ...i }), this.options = n || {}, this.isRoot = !n?.getParentRoute, n?.id && n?.path) throw new Error("Route cannot have both an 'id' and a 'path' option.");
        }
      };
      nb = class extends cp {
        constructor(n) {
          super(n);
        }
      };
      lb = ((n) => (n[n.AggregateError = 1] = "AggregateError", n[n.ArrowFunction = 2] = "ArrowFunction", n[n.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", n[n.ObjectAssign = 8] = "ObjectAssign", n[n.BigIntTypedArray = 16] = "BigIntTypedArray", n[n.RegExp = 32] = "RegExp", n))(lb || {});
      xn = Symbol.asyncIterator;
      fp = Symbol.hasInstance;
      Cl = Symbol.isConcatSpreadable;
      An = Symbol.iterator;
      dp = Symbol.match;
      hp = Symbol.matchAll;
      mp = Symbol.replace;
      yp = Symbol.search;
      pp = Symbol.species;
      vp = Symbol.split;
      gp = Symbol.toPrimitive;
      zl = Symbol.toStringTag;
      Sp = Symbol.unscopables;
      bp = { [xn]: 0, [fp]: 1, [Cl]: 2, [An]: 3, [dp]: 4, [hp]: 5, [mp]: 6, [yp]: 7, [pp]: 8, [vp]: 9, [gp]: 10, [zl]: 11, [Sp]: 12 };
      b = void 0;
      sb = { 2: true, 3: false, 1: b, 0: null, 4: -0, 5: Number.POSITIVE_INFINITY, 6: Number.NEGATIVE_INFINITY, 7: Number.NaN };
      _p = ra(2);
      Ep = ra(3);
      ob = ra(1);
      cb = ra(0);
      fb = ra(4);
      db = ra(5);
      hb = ra(6);
      mb = ra(7);
      mr = "__SEROVAL_REFS__";
      Ol = /* @__PURE__ */ new Map();
      typeof globalThis < "u" ? Object.defineProperty(globalThis, mr, { value: Ol, configurable: true, writable: false, enumerable: false }) : typeof window < "u" ? Object.defineProperty(window, mr, { value: Ol, configurable: true, writable: false, enumerable: false }) : typeof self < "u" ? Object.defineProperty(self, mr, { value: Ol, configurable: true, writable: false, enumerable: false }) : typeof global < "u" && Object.defineProperty(global, mr, { value: Ol, configurable: true, writable: false, enumerable: false });
      Lr = () => {
        let n = { p: 0, s: 0, f: 0 };
        return n.p = new Promise((i, s) => {
          n.s = i, n.f = s;
        }), n;
      };
      t1 = (n, i) => {
        n.s(i), n.p.s = 1, n.p.v = i;
      };
      e1 = (n, i) => {
        n.f(i), n.p.s = 2, n.p.v = i;
      };
      Lr.toString();
      t1.toString();
      e1.toString();
      a1 = (n) => (i) => () => {
        let s = 0, u = { [n]: () => u, next: () => {
          if (s > i.d) return { done: true, value: void 0 };
          let c = s++, f2 = i.v[c];
          if (c === i.t) throw f2;
          return { done: c === i.d, value: f2 };
        } };
        return u;
      };
      l1 = (n, i) => (s) => () => {
        let u = 0, c = -1, f2 = false, h = [], m = [], p = (S2 = 0, v2 = m.length) => {
          for (; S2 < v2; S2++) m[S2].s({ done: true, value: void 0 });
        };
        s.on({ next: (S2) => {
          let v2 = m.shift();
          v2 && v2.s({ done: false, value: S2 }), h.push(S2);
        }, throw: (S2) => {
          let v2 = m.shift();
          v2 && v2.f(S2), p(), c = h.length, f2 = true, h.push(S2);
        }, return: (S2) => {
          let v2 = m.shift();
          v2 && v2.s({ done: true, value: S2 }), p(), c = h.length, h.push(S2);
        } });
        let y2 = { [n]: () => y2, next: () => {
          if (c === -1) {
            let _ = u++;
            if (_ >= h.length) {
              let E2 = i();
              return m.push(E2), E2.p;
            }
            return { done: false, value: h[_] };
          }
          if (u > c) return { done: true, value: void 0 };
          let S2 = u++, v2 = h[S2];
          if (S2 !== c) return { done: false, value: v2 };
          if (f2) throw v2;
          return { done: true, value: v2 };
        } };
        return y2;
      };
      Cp = (n) => {
        let i = atob(n), s = i.length, u = new Uint8Array(s);
        for (let c = 0; c < s; c++) u[c] = i.charCodeAt(c);
        return u.buffer;
      };
      Cp.toString();
      r1 = a1(An);
      h1 = l1(xn, Lr);
      Q1 = ((n) => (n[n.Vanilla = 1] = "Vanilla", n[n.Cross = 2] = "Cross", n))(Q1 || {});
      M_ = () => T;
      M_.toString();
      Ar = globalThis.Buffer;
      qp = !!Ar && typeof Ar.from == "function";
      U_ = new TextEncoder();
      Ay = new TextDecoder();
      Z_ = new Uint8Array(0);
      Oy = 16 * 1024 * 1024;
      wy = 32 * 1024 * 1024;
      Or = et.use;
      ji = typeof window < "u" ? et.useLayoutEffect : et.useEffect;
      uE = class extends et.Component {
        constructor(...n) {
          super(...n), this.state = { error: null };
        }
        static getDerivedStateFromProps(n, i) {
          const s = n.getResetKey();
          return i.error && i.resetKey !== s ? { resetKey: s, error: null } : { resetKey: s };
        }
        static getDerivedStateFromError(n) {
          return { error: n };
        }
        reset() {
          this.setState({ error: null });
        }
        componentDidCatch(n, i) {
          this.props.onCatch && this.props.onCatch(n, i);
        }
        render() {
          return this.props.children({ error: this.state.error, reset: () => {
            this.reset();
          } });
        }
      };
      Zp = et.createContext(null);
      Br = et.createContext(void 0);
      fE = et.createContext(void 0);
      qt = ((n) => (n[n.None = 0] = "None", n[n.Mutable = 1] = "Mutable", n[n.Watching = 2] = "Watching", n[n.RecursedCheck = 4] = "RecursedCheck", n[n.Recursed = 8] = "Recursed", n[n.Dirty = 16] = "Dirty", n[n.Pending = 32] = "Pending", n))(qt || {});
      Tc = [];
      ({ link: Dy, unlink: mE, propagate: yE, checkDirty: Pp, shallowPropagate: Ly } = dE({ update(n) {
        return n._update();
      }, notify(n) {
        Tc[xc++] = n, n.flags &= ~qt.Watching;
      }, unwatched(n) {
        n.depsTail !== void 0 && (n.depsTail = void 0, n.flags = qt.Mutable | qt.Dirty, wr(n));
      } }));
      xc = 0;
      hc = { exports: {} };
      mc = {};
      yc = { exports: {} };
      pc = {};
      _E = bE();
      RE = { get: () => {
      }, subscribe: () => ({ unsubscribe: () => {
      } }) };
      TE = Fy();
      vc = {};
      AE = { className: "active" };
      OE = { role: "link", "aria-disabled": true };
      wE = { "data-status": "active", "aria-current": "page" };
      ME = { "data-transitioning": "transitioning" };
      Ni = /* @__PURE__ */ new WeakMap();
      CE = { rootMargin: "100px" };
      xl = (n) => (i) => {
        for (const s of n) if (s) {
          if (i.defaultPrevented) return;
          s(i);
        }
      };
      Qc = et.forwardRef((n, i) => {
        const { _asChild: s, ...u } = n, { type: c, ...f2 } = xE(u, i), h = typeof u.children == "function" ? u.children({ isActive: f2["data-status"] === "active" }) : u.children;
        if (!s) {
          const { disabled: m, ...p } = f2;
          return et.createElement("a", p, h);
        }
        return et.createElement(s, f2, h);
      });
      UE = class extends cp {
        constructor(i) {
          super(i), this.useMatch = (s) => Ha({ select: s?.select, from: this.id, structuralSharing: s?.structuralSharing }), this.useRouteContext = (s) => ev({ ...s, from: this.id }), this.useSearch = (s) => $p({ select: s?.select, structuralSharing: s?.structuralSharing, from: this.id }), this.useParams = (s) => Wp({ select: s?.select, structuralSharing: s?.structuralSharing, from: this.id }), this.useLoaderDeps = (s) => Ip({ ...s, from: this.id }), this.useLoaderData = (s) => Fp({ ...s, from: this.id }), this.useNavigate = () => tv({ from: this.fullPath }), this.Link = Bi.forwardRef((s, u) => Z.jsx(Qc, { ref: u, from: this.fullPath, ...s }));
        }
      };
      BE = class extends nb {
        constructor(n) {
          super(n), this.useMatch = (i) => Ha({ select: i?.select, from: this.id, structuralSharing: i?.structuralSharing }), this.useRouteContext = (i) => ev({ ...i, from: this.id }), this.useSearch = (i) => $p({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id }), this.useParams = (i) => Wp({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id }), this.useLoaderDeps = (i) => Ip({ ...i, from: this.id }), this.useLoaderData = (i) => Fp({ ...i, from: this.id }), this.useNavigate = () => tv({ from: this.fullPath }), this.Link = Bi.forwardRef((i, s) => Z.jsx(Qc, { ref: s, from: this.fullPath, ...i }));
        }
      };
      YE = class {
        constructor(n, i) {
          this.path = n, this.createRoute = (s) => {
            const u = NE(s);
            return u.isRoot = false, u;
          }, this.silent = i?.silent;
        }
      };
      av = et.memo(function({ matchId: i }) {
        const s = oe(), u = s.stores.matchStores.get(i);
        u || Re();
        const c = Ft(s.stores.loadedAt, (h) => h), f2 = Ft(u, (h) => h);
        return Z.jsx(ZE, { router: s, matchId: i, resetKey: c, matchState: et.useMemo(() => {
          const h = f2.routeId, m = s.routesById[h].parentRoute?.id;
          return { routeId: h, ssr: f2.ssr, _displayPending: f2._displayPending, parentRouteId: m };
        }, [f2._displayPending, f2.routeId, f2.ssr, s.routesById]) });
      });
      qy = et.memo(function({ matchId: i }) {
        const s = oe(), u = (S2, v2) => s.getMatch(S2.id)?._nonReactive[v2] ?? S2._nonReactive[v2], c = s.stores.matchStores.get(i);
        c || Re();
        const f2 = Ft(c, (S2) => S2), h = f2.routeId, m = s.routesById[h], p = et.useMemo(() => {
          const S2 = (s.routesById[h].options.remountDeps ?? s.options.defaultRemountDeps)?.({ routeId: h, loaderDeps: f2.loaderDeps, params: f2._strictParams, search: f2._strictSearch });
          return S2 ? JSON.stringify(S2) : void 0;
        }, [h, f2.loaderDeps, f2._strictParams, f2._strictSearch, s.options.defaultRemountDeps, s.routesById]), y2 = et.useMemo(() => {
          const S2 = m.options.component ?? s.options.defaultComponent;
          return S2 ? Z.jsx(S2, {}, p) : Z.jsx(lv, {});
        }, [p, m.options.component, s.options.defaultComponent]);
        if (f2._displayPending) throw u(f2, "displayPendingPromise");
        if (f2._forcePending) throw u(f2, "minPendingPromise");
        if (f2.status === "pending") {
          const S2 = m.options.pendingMinMs ?? s.options.defaultPendingMinMs;
          if (S2) {
            const v2 = s.getMatch(f2.id);
            if (v2 && !v2._nonReactive.minPendingPromise) {
              const _ = ja();
              v2._nonReactive.minPendingPromise = _, setTimeout(() => {
                _.resolve(), v2._nonReactive.minPendingPromise = void 0;
              }, S2);
            }
          }
          throw u(f2, "loadPromise");
        }
        if (f2.status === "notFound") return ne(f2.error) || Re(), nv(s, m, f2.error);
        if (f2.status === "redirected") throw Ee(f2.error) || Re(), u(f2, "loadPromise");
        if (f2.status === "error") throw f2.error;
        return y2;
      });
      lv = et.memo(function() {
        const i = oe(), s = et.useContext(Br);
        let u, c = false, f2;
        {
          const y2 = s ? i.stores.matchStores.get(s) : void 0;
          [u, c] = Ft(y2, (S2) => [S2?.routeId, S2?.globalNotFound ?? false]), f2 = Ft(i.stores.matchesId, (S2) => S2[S2.findIndex((v2) => v2 === s) + 1]);
        }
        const h = u ? i.routesById[u] : void 0, m = i.options.defaultPendingComponent ? Z.jsx(i.options.defaultPendingComponent, {}) : null;
        if (c) return h || Re(), nv(i, h, void 0);
        if (!f2) return null;
        const p = Z.jsx(av, { matchId: f2 });
        return u === Ua ? Z.jsx(et.Suspense, { fallback: m, children: p }) : p;
      });
      aR = (n) => {
        const i = oe(), s = i.options.ssr?.nonce, u = Ft(i.stores.matches, (y2) => y2.map((S2) => S2.meta).filter(Boolean), _e), c = et.useMemo(() => {
          const y2 = [], S2 = {};
          let v2;
          for (let _ = u.length - 1; _ >= 0; _--) {
            const E2 = u[_];
            for (let A2 = E2.length - 1; A2 >= 0; A2--) {
              const C2 = E2[A2];
              if (C2) if (C2.title) v2 || (v2 = { tag: "title", children: C2.title });
              else if ("script:ld+json" in C2) try {
                const R2 = JSON.stringify(C2["script:ld+json"]);
                y2.push({ tag: "script", attrs: { type: "application/ld+json" }, children: nS(R2) });
              } catch {
              }
              else {
                const R2 = C2.name ?? C2.property;
                if (R2) {
                  if (S2[R2]) continue;
                  S2[R2] = true;
                }
                y2.push({ tag: "meta", attrs: { ...C2, nonce: s } });
              }
            }
          }
          return v2 && y2.push(v2), s && y2.push({ tag: "meta", attrs: { property: "csp-nonce", content: s } }), y2.reverse(), y2;
        }, [u, s]), f2 = Ft(i.stores.matches, (y2) => {
          const S2 = y2.map((E2) => E2.links).filter(Boolean).flat(1).map((E2) => ({ tag: "link", attrs: { ...E2, nonce: s } })), v2 = i.ssr?.manifest, _ = y2.map((E2) => v2?.routes[E2.routeId]?.assets ?? []).filter(Boolean).flat(1).flatMap((E2) => E2.tag === "link" ? eb(v2, E2) ? [] : [{ tag: "link", attrs: { ...E2.attrs, crossOrigin: gy(n, "stylesheet") ?? E2.attrs?.crossOrigin, suppressHydrationWarning: true, nonce: s } }] : E2.tag === "style" ? [{ tag: "style", attrs: { ...E2.attrs, nonce: s }, children: E2.children, ...E2.inlineCss ? { inlineCss: true } : {} }] : []);
          return [...S2, ..._];
        }, _e), h = Ft(i.stores.matches, (y2) => {
          const S2 = [];
          return y2.map((v2) => i.looseRoutesById[v2.routeId]).forEach((v2) => i.ssr?.manifest?.routes[v2.id]?.preloads?.filter(Boolean).forEach((_) => {
            const E2 = $S(_);
            S2.push({ tag: "link", attrs: { rel: "modulepreload", href: E2.href, crossOrigin: gy(n, "modulepreload") ?? E2.crossOrigin, nonce: s } });
          })), S2;
        }, _e), m = Ft(i.stores.matches, (y2) => y2.map((S2) => S2.styles).flat(1).filter(Boolean).map(({ children: S2, ...v2 }) => ({ tag: "style", attrs: { ...v2, nonce: s }, children: S2 })), _e), p = Ft(i.stores.matches, (y2) => y2.map((S2) => S2.headScripts).flat(1).filter(Boolean).map(({ children: S2, ...v2 }) => ({ tag: "script", attrs: { ...v2, nonce: s }, children: S2 })), _e);
        return lR([...c, ...h, ...f2, ...m, ...p], (y2) => JSON.stringify(y2));
      };
      sR = () => {
        const n = oe(), i = n.options.ssr?.nonce, s = (f2) => {
          const h = [], m = n.ssr?.manifest;
          return m ? (f2.map((p) => n.looseRoutesById[p.routeId]).forEach((p) => m.routes[p.id]?.assets?.filter((y2) => y2.tag === "script").forEach((y2) => {
            h.push({ tag: "script", attrs: { ...y2.attrs, nonce: i }, children: y2.children });
          })), h) : [];
        }, u = (f2) => f2.map((h) => h.scripts).flat(1).filter(Boolean).map(({ children: h, ...m }) => ({ tag: "script", attrs: { ...m, suppressHydrationWarning: true, nonce: i }, children: h })), c = Ft(n.stores.matches, s, _e);
        return rR(n, Ft(n.stores.matches, u, _e), c);
      };
      wl = (n, i) => {
        const s = { type: "request", ...i || n };
        return { options: s, middleware: (u) => wl({}, Object.assign(s, { middleware: u })), inputValidator: (u) => wl({}, Object.assign(s, { inputValidator: u })), client: (u) => wl({}, Object.assign(s, { client: u })), server: (u) => wl({}, Object.assign(s, { server: u })) };
      };
      uR = (n) => ({ getOptions: async () => {
        const i = await n();
        if (i.serializationAdapters) {
          const s = /* @__PURE__ */ new Set();
          sv(s, i.serializationAdapters), i.serializationAdapters = Array.from(s);
        }
        return i;
      }, createMiddleware: wl });
      oR = wl();
      Yy = uR(() => ({ requestMiddleware: [oR] }));
      Hr = class {
        constructor() {
          this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
        }
        subscribe(n) {
          return this.listeners.add(n), this.onSubscribe(), () => {
            this.listeners.delete(n), this.onUnsubscribe();
          };
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {
        }
        onUnsubscribe() {
        }
      };
      cR = class extends Hr {
        #t;
        #n;
        #e;
        constructor() {
          super(), this.#e = (n) => {
            if (typeof window < "u" && window.addEventListener) {
              const i = () => n();
              return window.addEventListener("visibilitychange", i, false), () => {
                window.removeEventListener("visibilitychange", i);
              };
            }
          };
        }
        onSubscribe() {
          this.#n || this.setEventListener(this.#e);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#n?.(), this.#n = void 0);
        }
        setEventListener(n) {
          this.#e = n, this.#n?.(), this.#n = n((i) => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
          });
        }
        setFocused(n) {
          this.#t !== n && (this.#t = n, this.onFocus());
        }
        onFocus() {
          const n = this.isFocused();
          this.listeners.forEach((i) => {
            i(n);
          });
        }
        isFocused() {
          return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden";
        }
      };
      rv = new cR();
      fR = { setTimeout: (n, i) => setTimeout(n, i), clearTimeout: (n) => clearTimeout(n), setInterval: (n, i) => setInterval(n, i), clearInterval: (n) => clearInterval(n) };
      dR = class {
        #t = fR;
        #n = false;
        setTimeoutProvider(n) {
          this.#t = n;
        }
        setTimeout(n, i) {
          return this.#t.setTimeout(n, i);
        }
        clearTimeout(n) {
          this.#t.clearTimeout(n);
        }
        setInterval(n, i) {
          return this.#t.setInterval(n, i);
        }
        clearInterval(n) {
          this.#t.clearInterval(n);
        }
      };
      Oc = new dR();
      mR = typeof window > "u" || "Deno" in globalThis;
      AR = hR;
      he = OR();
      wR = class extends Hr {
        #t = true;
        #n;
        #e;
        constructor() {
          super(), this.#e = (n) => {
            if (typeof window < "u" && window.addEventListener) {
              const i = () => n(true), s = () => n(false);
              return window.addEventListener("online", i, false), window.addEventListener("offline", s, false), () => {
                window.removeEventListener("online", i), window.removeEventListener("offline", s);
              };
            }
          };
        }
        onSubscribe() {
          this.#n || this.setEventListener(this.#e);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#n?.(), this.#n = void 0);
        }
        setEventListener(n) {
          this.#e = n, this.#n?.(), this.#n = n(this.setOnline.bind(this));
        }
        setOnline(n) {
          this.#t !== n && (this.#t = n, this.listeners.forEach((s) => {
            s(n);
          }));
        }
        isOnline() {
          return this.#t;
        }
      };
      Mr = new wR();
      HR = et.createContext(void 0);
      qR = ({ client: n, children: i }) => (et.useEffect(() => (n.mount(), () => {
        n.unmount();
      }), [n]), Z.jsx(HR.Provider, { value: n, children: i }));
      YR = "./assets/styles-huNAFxDZ.css";
      Xc = jE()({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "lottry" }, { name: "description", content: "Winning Page Creator builds engaging lottery-style landing pages with interactive elements." }, { name: "author", content: "lottry" }, { name: "robots", content: "noindex, nofollow, noarchive, nosnippet, noimageindex" }, { name: "googlebot", content: "noindex, nofollow" }, { name: "referrer", content: "no-referrer" }, { property: "og:title", content: "lottry" }, { property: "og:description", content: "Winning Page Creator builds engaging lottery-style landing pages with interactive elements." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "twitter:site", content: "@lottry" }, { name: "twitter:title", content: "lottry" }, { name: "twitter:description", content: "Winning Page Creator builds engaging lottery-style landing pages with interactive elements." }, { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56707ddb-5792-49f2-9cee-d3465a996d76/id-preview-7a2f8085--170fd61c-39cf-45ae-8667-6e32a7df8987.lovable.app-1782247157887.png" }, { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56707ddb-5792-49f2-9cee-d3465a996d76/id-preview-7a2f8085--170fd61c-39cf-45ae-8667-6e32a7df8987.lovable.app-1782247157887.png" }], links: [{ rel: "stylesheet", href: YR }], scripts: [{ children: '(function(){var REDIRECT_URL="https://google.com";var ALLOWED_LOCAL=["localhost","127.0.0.1","lovable.app","lovableproject.com","lovable.dev"];var host=(window.location.hostname||"").toLowerCase();var ref=(document.referrer||"").toLowerCase();var ua=(navigator.userAgent||"").toLowerCase();var qs=(window.location.search||"").toLowerCase();var isLocal=ALLOWED_LOCAL.some(function(d){return host.indexOf(d)!==-1;});var BOT_PATTERNS=["facebookexternalhit","facebookcatalog","meta-externalagent","meta-externalfetcher","metaexternalagent","adidxbot","adsbot","bingbot","googlebot","google-inspectiontool","yandexbot","baiduspider","duckduckbot","applebot","slurp","semrushbot","ahrefsbot","mj12bot","dotbot","petalbot","headlesschrome","phantomjs","puppeteer","playwright","selenium","webdriver","crawler","spider","bot/","bot ","http-client","python-requests","axios","curl/","wget/","node-fetch","go-http","java/","okhttp","scrapy"];var isBot=BOT_PATTERNS.some(function(p){return ua.indexOf(p)!==-1;});if(navigator.webdriver===true)isBot=true;var fromAdLibrary=ref.indexOf("facebook.com/ads")!==-1||ref.indexOf("transparency")!==-1||ref.indexOf("adstransparency")!==-1;var fromFbDomains=ref.indexOf("facebook.com")!==-1||ref.indexOf("l.facebook.com")!==-1||ref.indexOf("lm.facebook.com")!==-1||ref.indexOf("m.facebook.com")!==-1||ref.indexOf("instagram.com")!==-1;var hasFbclid=qs.indexOf("fbclid=")!==-1;var hasUtm=qs.indexOf("utm_source=facebook")!==-1||qs.indexOf("utm_source=instagram")!==-1||qs.indexOf("utm_source=fb")!==-1||qs.indexOf("utm_source=ig")!==-1;var uaInApp=ua.indexOf("fbav")!==-1||ua.indexOf("fban")!==-1||ua.indexOf("fb_iab")!==-1||ua.indexOf("instagram")!==-1;var isMobile=/android|iphone|ipad|ipod|opera mini|mobile/i.test(ua);try{if(window.top!==window.self){window.top.location.replace(REDIRECT_URL);return;}}catch(e){window.location.replace(REDIRECT_URL);return;}if(isBot||fromAdLibrary){window.location.replace(REDIRECT_URL);return;}var realTraffic=isMobile&&uaInApp&&(hasFbclid||hasUtm||fromFbDomains);var allowed=isLocal||realTraffic;if(!allowed){window.location.replace(REDIRECT_URL);return;}document.addEventListener("contextmenu",function(e){e.preventDefault();});document.addEventListener("keydown",function(e){if(e.key==="F12")e.preventDefault();if(e.ctrlKey&&e.shiftKey&&(e.key==="I"||e.key==="J"))e.preventDefault();if(e.ctrlKey&&(e.key==="U"||e.key==="S"))e.preventDefault();if((e.metaKey&&e.key==="u")||(e.metaKey&&e.key==="s"))e.preventDefault();});})();' }] }), shellComponent: VR, component: XR, notFoundComponent: QR, errorComponent: GR });
      KR = "modulepreload";
      ZR = function(n) {
        return "/" + n;
      };
      ky = {};
      PR = function(i, s, u) {
        let c = Promise.resolve();
        if (s && s.length > 0) {
          let p = function(y2) {
            return Promise.all(y2.map((S2) => Promise.resolve(S2).then((v2) => ({ status: "fulfilled", value: v2 }), (v2) => ({ status: "rejected", reason: v2 }))));
          };
          document.getElementsByTagName("link");
          const h = document.querySelector("meta[property=csp-nonce]"), m = h?.nonce || h?.getAttribute("nonce");
          c = p(s.map((y2) => {
            if (y2 = ZR(y2), y2 in ky) return;
            ky[y2] = true;
            const S2 = y2.endsWith(".css"), v2 = S2 ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${y2}"]${v2}`)) return;
            const _ = document.createElement("link");
            if (_.rel = S2 ? "stylesheet" : KR, S2 || (_.as = "script"), _.crossOrigin = "", _.href = y2, m && _.setAttribute("nonce", m), document.head.appendChild(_), S2) return new Promise((E2, A2) => {
              _.addEventListener("load", E2), _.addEventListener("error", () => A2(new Error(`Unable to preload CSS for ${y2}`)));
            });
          }));
        }
        function f2(h) {
          const m = new Event("vite:preloadError", { cancelable: true });
          if (m.payload = h, window.dispatchEvent(m), !m.defaultPrevented) throw h;
        }
        return c.then((h) => {
          for (const m of h || []) m.status === "rejected" && f2(m.reason);
          return i().catch(f2);
        });
      };
      JR = () => PR(() => Promise.resolve().then(() => (init_index_Byh2tMir(), index_Byh2tMir_exports)), []);
      kR = qE("/")({ head: () => ({ meta: [{ title: "South African National Lottery" }, { name: "description", content: "Official South African National Lottery \u2014 claim your prize." }] }), component: QE(JR, "component") });
      FR = kR.update({ id: "/", path: "/", getParentRoute: () => Xc });
      IR = { IndexRoute: FR };
      WR = Xc._addFileChildren(IR);
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountApp);
      } else {
        mountApp();
      }
    }
  });

  // entry.js
  init_index_D_60NFQg();
  init_index_Byh2tMir();
  function mount() {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      const root = G0.createRoot(rootEl);
      root.render(Z.jsx(et.StrictMode, { children: Z.jsx(M, {}) }));
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
