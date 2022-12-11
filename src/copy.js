/* eslint-disable no-undef */
import * as fs from "fs-extra";
import * as path from "path";

const source = path.resolve(process.cwd(), "src/styles");
const destination = path.resolve(process.cwd(), "dist/styles");

fs.copy(source, destination);
