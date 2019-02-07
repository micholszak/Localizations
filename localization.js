'use strict';
var Localize = require("localize-with-spreadsheet-2");
var transformer = Localize.fromGoogleSpreadsheet("1a-6RIaL9wfwG9LuDBDVEr3oy2kfT24w4TqNqh-qDF2k", '*');
transformer.setKeyCol('Android');

transformer.save("strings_pl.xml", { valueCol: "pl", format: "android" });
transformer.save("strings_en.xml", { valueCol: "eng", format: "android"});

transformer.setKeyCol('iOS');
transformer.save("Localizable_pl.strings", { valueCol: "pl", format: "ios"});
transformer.save("Localizable_en.strings", { valueCol: "eng", format: "ios"});