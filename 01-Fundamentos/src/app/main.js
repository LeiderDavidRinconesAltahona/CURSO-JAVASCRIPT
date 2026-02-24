//utilidades

function error(msg) {
  console.error("❌ Error:", msg);
  process.exit(1);
}
function isFiniteNumber(value) {
  const n = Number(value);
  return Number.isFinite(n);
}

function round2(n) {
  return n.toFixed(2);
}