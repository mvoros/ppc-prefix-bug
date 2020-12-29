const cds = require("@sap/cds");

module.exports = class say {
  async hello(req) {
    //Let's simulate loading of a config table
    const db = await cds.connect.to("db");
    const tx = db.transaction(req);

    let result = null;
    //Good namespace does not have any issues as prefix does not collide with localisation
    result = await tx.read("company.NonlocExamples");
    result = await tx.read("company.LocExamples");
    result = await tx.read("say.GoodNonlocalExamples");
    result = await tx.read("say.GoodLocalExamples");

    //Bad namespace that starts with prefix that collides with localisation
    //This still works as namespace comes from the service
    result = await tx.read("say.BadNonlocalExamples");
    result = await tx.read("say.BadLocalExamples");
    //Non localised entities still work
    result = await tx.read("de.company.BadNonlocExamples");

    //This one throws as de is stripped from the table name
    result = await tx.read("de.company.BadLocExamples");

    return `Hello ${req.data.to}!`;
  }
};
