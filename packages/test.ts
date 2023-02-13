import fs from "fs";
// fs.readFile(
//   "E:/前端目录/javascript面试demo/node/a.txt",
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       console.log("err: ", err);
//       return;
//     }
//     console.log("data: ", data);
//   }
// );
try {
  const data = fs.readFileSync("./package.json", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
