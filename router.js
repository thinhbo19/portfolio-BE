const { notFound, errHandle } = require("./middleware/errHandler");
const commentRouter = require("./collection/comment/router");

const initRouter = (app) => {
  app.use("/api/comment", commentRouter);

  app.use(notFound);
  app.use(errHandle);
};

module.exports = initRouter;
