const isProduction = process.env.NODE_ENV === 'production';

export default {
  rules: {
    "@typescript-eslint/no-unused-vars": isProduction ? "off" : "error",
  },
};

