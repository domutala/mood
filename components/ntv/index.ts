import install from "@mood/utils/install";

const componentFiles = import.meta.globEager("./**/*.vue");
export default { install: install(componentFiles) };
