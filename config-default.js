module.exports = {
 requireConfig: false,
 onboarding: false,
 extends: [
   // WARNING : this file will be taken from the DEFAULT branch
   "local>"+process.env.CI_PROJECT_PATH+"//config-presets/default",
 ]
};
