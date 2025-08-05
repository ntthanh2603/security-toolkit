const args =
  "httpx -u savani.vn  -status-code -favicon -asn -title -web-server -irr -tech-detect -ip -cname -location -tls-grab -cdn -probe -json -follow-redirects -timeout 10 -threads 100 -silent";

const start = performance.now();
console.log(`⏳ Đang chạy tool: ${args}`);

const process = Bun.spawn(["sh", "-c", args], {
  stdout: "pipe",
  stderr: "pipe",
});

const output = await new Response(process.stdout).text();

const end = performance.now();
const duration = (end - start).toFixed(2);

// const lines = output
//   .trim()
//   .split("\n")
//   .filter((line) => line.trim() !== "");
// const lineCount = lines.length;

// 📁 Lưu output vào file
const filePath = "output.json"; // hoặc đổi thành .txt nếu muốn
await Bun.write(filePath, output.trim() + "\n");
console.log(`💾 Đã lưu kết quả vào file: ${filePath}`);

console.log("📤 Output:");
console.log(output.trim());

console.log(`⏱️ Thời gian thực thi: ${duration}ms`);
