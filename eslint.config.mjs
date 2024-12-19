// export default tseslint.config({
//   rules: {
//     // Note: you must disable the base rule as it can report incorrect errors
//     "no-unused-vars": "off",
//     "@typescript-eslint/no-unused-vars": "error"
//   }
// });
// import dotenv from 'dotenv';
// dotenv.config();

// const isProduction = process.env.ESLINT_NO_DEV_ERRORS === 'true';

// export default {
//   rules: {
//     "no-unused-vars": isProduction ? "off" : "warn",
//     "@typescript-eslint/no-unused-vars": isProduction ? "off" : "error",
//   },
// };
const isProduction = process.env.NODE_ENV === 'production';

export default {
  rules: {
    "@typescript-eslint/no-unused-vars": isProduction ? "off" : "error",
  },
};

