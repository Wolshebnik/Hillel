const http = require("http");
const url = require("url");

const port = 3000;

const phones = [
  {
    name: "iphone7",
    price: 14000,
    color: "black"
  },
  {
    name: "iphone8",
    price: 18000,
    color: "white"
  },
  {
    name: "iphone10",
    price: 24000,
    color: "pink"
  },
  {
    name: "iphone11",
    price: 28000,
    color: "black"
  },
  {
    name: "samsung",
    price: 14000,
    color: "black"
  },
  {
    name: "xiaomi",
    price: 10000,
    color: "black"
  },
  {
    name: "meizu",
    price: 8000,
    color: "green"
  },
  {
    name: "huawei",
    price: 11000,
    color: "black"
  }
];

http
  .createServer((req, res) => {
    let urlParse = url.parse(req.url, true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.url === "/obj") {
      let body = "";
      req
        .on("data", chunk => {
          body = String(chunk);
          let { data } = JSON.parse(body);
          body = JSON.stringify(data);
        })
        .on("end", () => {
          res.end(body);
        });
    }

    if (urlParse.pathname === "/phones") {
      let { priceS, priceF, color } = urlParse.query;
      let phone = phones.filter(curr => {
        return (
          curr.price >= priceS && curr.price <= priceF && curr.color === color
        );
      });
      res.end(JSON.stringify(phone));
    }
  })
  .listen(port, () => console.log("Server was started on port " + port));
