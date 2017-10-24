const request = require("request");

const join = (p) => {
    let res = "";
    for(let i = 0; i < p.length; i++) {
        const it = p[i];
        res += "/" + it;
    }
    return res;
}

module.exports = (args, callback) => {
    let a = join(args.split(" "));
    if(args === "") a = "";

    request("http://ergast.com/api/f1" + a + ".json", (err, res, body) => {
        if(!err && res.statusCode === 200) {
            callback(require("parse-json")(body));
        } else {
            console.log("error " + res.statusCode);
        }
    });
}
