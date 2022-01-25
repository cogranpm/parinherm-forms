import * as shared from "shared";
import express from "express";
//import { setting } from "shared";

const app = express();
const PORT = 5000;

console.log(shared.hi() + "reload test");
//const settingInstance = new shared.setting.SettingsLoader();
//console.log(settingInstance.printSettings());

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})