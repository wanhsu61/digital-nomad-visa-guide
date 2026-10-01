/**
 * 生成 worldmap.js（世界底图，预投影为 SVG path）
 * 数据：world-atlas 的 Natural Earth 1:110m 国界；投影：d3-geo NaturalEarth1，画布 1000×500。
 * 用法：npm install && npm run map
 * 新增国家时，把它的 ISO 数字代码加进下面的 want 对象，键名与 countries.js 里的 id 一致，重新运行即可。
 */
import fs from 'fs';
import {geoNaturalEarth1, geoPath} from 'd3-geo';
import {feature} from 'topojson-client';
const topo = JSON.parse(fs.readFileSync(new URL('../node_modules/world-atlas/countries-110m.json', import.meta.url)));
const fc = feature(topo, topo.objects.countries);
fc.features = fc.features.filter(f => f.id !== '010');
const W=1000,H=500;
const proj = geoNaturalEarth1().fitExtent([[5,5],[W-5,H-5]], fc);
const path = geoPath(proj).digits(1);
const want = {724:'spain',620:'portugal',380:'italy',300:'greece',191:'croatia',470:'malta',233:'estonia',348:'hungary','008':'albania',764:'thailand',458:'malaysia',360:'indonesia',144:'srilanka',410:'korea',784:'uae',484:'mexico',188:'costarica','076':'brazil',858:'uruguay','052':'barbados',480:'mauritius',710:'southafrica',392:'x-japan',203:'x-czechia','032':'x-argentina',170:'x-colombia',352:'x-iceland',156:'china'};
let base='', named={};
for (const f of fc.features){
  const d = path(f); if(!d) continue;
  const k = want[String(f.id).padStart(3,'0')];
  if (k) named[k]=d; else base+=d;
}
// 下面的 pts 只用于调试打印；网页里图钉坐标由 countries.js 的 pin 经纬度实时投影
const pts = {spain:[-3.7,40.4],portugal:[-9.14,38.72],italy:[12.5,41.9],greece:[23.7,37.98],croatia:[15.98,45.81],malta:[14.51,35.9],estonia:[24.75,59.44],hungary:[19.04,47.5],albania:[19.82,41.33],thailand:[100.5,13.75],malaysia:[101.69,3.14],indonesia:[115.2,-8.65],srilanka:[79.86,6.93],korea:[126.98,37.57],uae:[55.27,25.2],mexico:[-99.13,19.43],costarica:[-84.09,9.93],brazil:[-43.2,-22.9],uruguay:[-56.16,-34.9],barbados:[-59.6,13.1],mauritius:[57.5,-20.16],southafrica:[18.42,-33.92],china:[116.4,39.9]};
const P={}; for (const [k,v] of Object.entries(pts)){const p=proj(v);P[k]=[+p[0].toFixed(1),+p[1].toFixed(1)];}
const grat = path({type:'Sphere'});
const out = {base, named, sphere: grat, k: +proj.scale().toFixed(4), t: proj.translate().map(v=>+v.toFixed(3))};
fs.writeFileSync(new URL('../worldmap.js', import.meta.url), '/* 世界底图：Natural Earth 1:110m，d3-geo NaturalEarth1 预投影 (1000×500)。一般无需修改。 */\nwindow.WORLDMAP = ' + JSON.stringify(out) + ';\n');
console.log('worldmap.js 已生成', out.k, out.t);
