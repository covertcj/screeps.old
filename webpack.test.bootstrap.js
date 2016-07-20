var context = require.context("./specs", true, /Spec\.js$/);
context.keys().forEach(context);