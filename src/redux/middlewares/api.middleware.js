const apiMiddleware = state => next => action => {
  next(action);
};

export default apiMiddleware;
