module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/olicom_assignment/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/global.scss";
        `,
      },
    },
  },
};
