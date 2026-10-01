/**
 * 根据 countries.js 生成 countries/ 目录下各地区、各国家的 README.md
 * 用法：npm run readme
 * 修改国家资料时只改 countries.js，然后重新运行本脚本，网页和文档保持一致。
 */
import fs from "fs";
import vm from "vm";

const root = new URL("../", import.meta.url);
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(new URL("countries.js", root), "utf8"), ctx);
const { COUNTRIES: C, RESTRICTED, RATES: R } = ctx.window;

/* ---------- 与网页相同的人民币换算 ---------- */
function yuan(n) {
  if (n >= 10000) { const w = n / 10000; return "¥" + (w >= 100 ? Math.round(w) : Math.round(w * 10) / 10) + " 万"; }
  const r = n >= 1000 ? 100 : n >= 100 ? 10 : 1; return "¥" + (Math.round(n / r) * r).toLocaleString("en-US");
}
const NUM = "\\d[\\d,]*(?:\\.\\d+)?";
const PRE = { "€": "EUR", "$": "USD", RM: "MYR", ALL: "ALL", AED: "AED", MXN: "MXN", ZAR: "ZAR", "₩": "KRW" };
const SUF = { "泰铢": "THB", "欧元": "EUR", "欧": "EUR", "美元": "USD" };
const RE_PRE = new RegExp("(?:约\\s?)?(€|\\$|RM|ALL|AED|MXN|ZAR|₩)\\s?(" + NUM + ")(\\s?[万亿])?(?:\\s?[–-]\\s?(?:€|\\$)?(" + NUM + ")(\\s?[万亿])?)?", "g");
const RE_SUF = new RegExp("(?:约\\s?)?(" + NUM + ")(\\s?[万亿])?(?:\\s?[–-]\\s?(" + NUM + ")(\\s?[万亿])?)?\\s?(泰铢|欧元|欧|美元)", "g");
const mul = u => !u ? 1 : u.trim() === "万" ? 1e4 : 1e8;
const num = a => +a.replace(/,/g, "");
function conv(cur, a, ua, b, ub) {
  const r = R[cur], x = num(a) * mul(ua) * r;
  if (b) { const y = num(b) * mul(ub || ua) * r, xs = yuan(x), ys = yuan(y).slice(1);
    return "约 " + (xs.endsWith(" 万") && ys.endsWith(" 万") ? xs.slice(0, -2) + "–" + ys : xs + "–" + ys); }
  return "约 " + yuan(x);
}
const rmb = s => !s ? s : s.replace(RE_PRE, (m, c, a, ua, b, ub) => conv(PRE[c], a, ua, b, ub))
  .replace(RE_SUF, (m, a, ua, b, ub, c) => conv(SUF[c], a, ua, b, ub)).replace(/约 约 /g, "约 ");
/** 同时给出人民币约数和原文，例如：约 ¥2.2 万 / 月（原文：€2,849 / 月） */
const both = s => { const r = rmb(s); return r === s ? s : `${r}（原文：${s}）`; };

const toCny = a => a ? a[0] * R[a[1]] : null;
const monthly = c => c.inc ? toCny(c.inc) : toCny(c.sav) / 12;
const tier = c => { const m = monthly(c); return m <= 15000 ? "入门门槛" : m <= 30000 ? "中等门槛" : "高门槛"; };
const REGION = {
  europe: { dir: "europe", name: "欧洲", desc: "申根区为主，居留卡可在 29 个申根国家往来；部分国家可累计年限转永居。" },
  asia: { dir: "asia-middle-east", name: "亚洲 · 中东", desc: "离中国近、文化门槛低，多数对中国护照免签入境，可以先去考察。" },
  americas: { dir: "americas", name: "美洲", desc: "与北美时区接近，适合服务欧美客户；中国护照多数需要先办入境签证。" },
  africa: { dir: "africa-indian-ocean", name: "非洲 · 印度洋", desc: "费用低、审批快，毛里求斯对中国护照免签且免申请费。" }
};
const slug = c => c.id;
const flagImg = (c, w = 40) => `<img src="https://flagcdn.com/w${w}/${c.iso2}.png" width="${w}" alt="${c.en} flag">`;
const DATE = "2026-10-01";
const RATE_LINE = Object.entries(R).filter(([k]) => k !== "CNY").map(([k, v]) => `${k} ${v}`).join(" · ");

function countryMd(c) {
  const reg = REGION[c.region];
  const L = [];
  L.push(`[← 返回${reg.name}](../README.md) · [返回总目录](../../../README.md)`, "");
  L.push(`# ${flagImg(c, 80)} ${c.name} ${c.en} · ${c.abbr}`, "");
  L.push(`> ${c.visa}　|　${c.continent}　|　${tier(c)}　|　数据核对 ${DATE}`, "");
  L.push("## 一览", "", "| 项目 | 内容 |", "|---|---|");
  L.push(`| 签证名称 | ${c.visa.includes(c.abbr) ? c.visa : c.visa + "（" + c.abbr + "）"} |`);
  L.push(`| 所在洲 | ${c.continent} |`);
  L.push(`| 资金门槛 | ${both(c.incomeText)} |`);
  if (c.savingsText) L.push(`| 存款替代 | ${both(c.savingsText)} |`);
  if (c.familyText) L.push(`| 家属 | ${both(c.familyText)} |`);
  L.push(`| 有效期 | ${c.duration} |`);
  L.push(`| 审批时间 | 约 ${c.speedWeeks} 周 |`);
  L.push(`| 政府费用 | ${c.fee && c.fee[0] ? "约 " + yuan(toCny(c.fee)) : "免费"} |`);
  L.push(`| 标签 | ${c.tags.map(t => ({ schengen: "畅行申根", pr: "通向永居", tax: "税务友好", cheap: "生活成本低", fast: "审批快", family: "携带家属" })[t]).join("、")} |`, "");
  L.push("## 国家简介", "", rmb(c.intro), "");
  L.push("## 签证优势", "", ...c.pros.map(x => `- ${rmb(x)}`), "");
  L.push("## 需要注意", "", ...c.cons.map(x => `- ${rmb(x)}`), "");
  L.push("## 达成条件", "", ...c.reqs.map(x => `- ${both(x)}`), "");
  L.push("## 中国护照申请人", "", rmb(c.china), "");
  L.push("## 申请方法", "", ...c.steps.map((s, i) => `${i + 1}. **${s.t}**${s.d ? "：" + rmb(s.d) : ""}`), "");
  L.push("## 申请费用", "", "| 项目 | 约合人民币 | 原文 |", "|---|---|---|");
  c.fees.forEach(([k, v]) => L.push(`| ${k} | ${rmb(v)} | ${v} |`));
  L.push("", "> 另建议预留：文件公证、认证、翻译 ¥1,000–3,000，医疗保险 ¥1,500–6,000/年，首月住宿押金与机票。", "");
  L.push("## 官方入口", "", ...c.links.map(([n, u]) => `- [${n}](${u})`), "");
  if (c.sources) L.push("## 资料来源", "", ...c.sources.map(u => `- <${u}>`), "");
  L.push("---", "", `人民币金额按 2026 年 9 月 30 日银行间中间价折算（${RATE_LINE}，单位：人民币/1 外币），仅供比较。签证政策经常调整，递交前请以官方入口为准。本文不构成法律或税务意见。`, "");
  return L.join("\n");
}

function regionMd(key) {
  const reg = REGION[key];
  const list = C.filter(c => c.region === key).sort((a, b) => monthly(a) - monthly(b));
  const L = [`[← 返回总目录](../../README.md)`, "", `# ${reg.name}：${list.length} 个数字游民签证`, "", reg.desc, "",
    "| 国旗 | 国家 | 签证 | 月收入门槛（约） | 有效期 | 门槛等级 |", "|---|---|---|---|---|---|"];
  list.forEach(c => L.push(`| ${flagImg(c, 40)} | [${c.name} ${c.en}](${slug(c)}/README.md) | ${c.abbr} | ${c.inc && c.inc[0] === 0 ? "无门槛" : c.inc ? yuan(toCny(c.inc)) : "存款 " + yuan(toCny(c.sav))} | ${c.duration} | ${tier(c)} |`));
  L.push("");
  return L.join("\n");
}

const out = new URL("countries/", root);
fs.rmSync(out, { recursive: true, force: true });
for (const key of Object.keys(REGION)) {
  const dir = new URL(REGION[key].dir + "/", out);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(new URL("README.md", dir), regionMd(key));
  for (const c of C.filter(c => c.region === key)) {
    const cd = new URL(slug(c) + "/", dir);
    fs.mkdirSync(cd, { recursive: true });
    fs.writeFileSync(new URL("README.md", cd), countryMd(c));
  }
}
/* 总表片段，供根目录 README 使用 */
const idx = ["| 地区 | 国旗 | 国家 | 签证 | 月收入门槛（约） | 有效期 | 门槛等级 |", "|---|---|---|---|---|---|---|"];
for (const key of Object.keys(REGION)) {
  C.filter(c => c.region === key).sort((a, b) => monthly(a) - monthly(b)).forEach(c =>
    idx.push(`| [${REGION[key].name}](countries/${REGION[key].dir}/README.md) | ${flagImg(c, 40)} | [${c.name} ${c.en}](countries/${REGION[key].dir}/${slug(c)}/README.md) | ${c.abbr} | ${c.inc && c.inc[0] === 0 ? "无门槛" : c.inc ? yuan(toCny(c.inc)) : "存款 " + yuan(toCny(c.sav))} | ${c.duration} | ${tier(c)} |`));
}
const blocked = RESTRICTED.map(b => `| ${b.name} | ${b.note} |`);
const readme = new URL("README.md", root);
if (fs.existsSync(readme)) {
  let r = fs.readFileSync(readme, "utf8");
  r = r.replace(/<!-- INDEX:START -->[\s\S]*<!-- INDEX:END -->/, `<!-- INDEX:START -->\n${idx.join("\n")}\n<!-- INDEX:END -->`);
  r = r.replace(/<!-- BLOCKED:START -->[\s\S]*<!-- BLOCKED:END -->/, `<!-- BLOCKED:START -->\n| 国家 | 原因 |\n|---|---|\n${blocked.join("\n")}\n<!-- BLOCKED:END -->`);
  fs.writeFileSync(readme, r);
}
console.log(`已生成 ${C.length} 个国家、${Object.keys(REGION).length} 个地区的 README`);
