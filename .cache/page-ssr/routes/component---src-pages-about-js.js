"use strict";
exports.id = "component---src-pages-about-js";
exports.ids = ["component---src-pages-about-js"];
exports.modules = {

/***/ "./src/components/Seo.js":
/*!*******************************!*\
  !*** ./src/components/Seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3159585216.json */ "./public/page-data/sq/d/3159585216.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Seo({
  title
}) {
  const data = _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, title, " | ", data.site.siteMetadata.title);
}

/***/ }),

/***/ "./src/pages/about.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/about.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Seo */ "./src/components/Seo.js");



const AboutStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "about__AboutStyled"
})(["color:hsla(0,0,54%,1);grid-column:1/2;justify-self:start;width:100%;height:90vh;overflow-y:scroll;scrollbar-width:thin;border-top:1px solid hsl(37.7,100%,91.6%);h1{max-width:600px;margin-right:auto;margin-left:1rem;}h2{max-width:600px;margin-right:auto;margin-left:1rem;}h3{writing-mode:vertical-rl;text-orientation:upright;font-size:1rem!important;}a{display:inline-block;letter-spacing:0.04rem;text-decoration:underline;}p{max-width:1000px;margin-top:2rem;margin-bottom:2rem;margin-right:auto;margin-left:2rem;color:hsl(37.7,100%,91.6%);}.container{display:flex;margin-bottom:3rem;}.container2{display:flex;flex-direction:column;align-self:center;width:fit-content;height:fit-content;p{margin:1rem;}}.skills{display:inline-block;color:hsl(37.7,100%,91.6%);font-size:clamp(0.9rem,0.7500rem + 0.6667vw,1.1rem);list-style-type:square;margin-right:2rem;padding-left:0;margin-left:3rem;h5{text-decoration:1px dashed underline;margin-bottom:0.6rem;margin-left:-14px;}}@media (max-width:1190px){grid-column:1/2;grid-row:2/3;width:100%;}@media (max-width:700px){p{margin:0 4% 0 4%;}}"]);
const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AboutStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Ciao, il mio nome \xE8 Ivan :-)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Sono un designer interdisciplinare con focus su Web design, Web Development e Graphic design. Pensi di avere un lavoro per me? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "mailto:ivancernuto@gmail.com"
  }, "contattami!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "skills"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Design Skills: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Illustrator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Indesign"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Photoshop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Figma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Premiere"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "After Effect")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "skills"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Development Skills: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Github"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "HTML & CSS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Javascript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "P5.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "React.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Gatsby.js")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "skills"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Currently Learning:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Next.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Astro.js"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "\u66F8\u3044\u3066\u898B\u305F\u308A\u3051\u3057\u305F\u308A\u679C\u306F\u3051\u3057\u306E\u82B1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "I write, erase, rewrite "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Erase again, and then "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A poppy blooms."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Seo__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: "About me"
});

/***/ }),

/***/ "./public/page-data/sq/d/3159585216.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3159585216.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"bisabi - Graphic & Web designer"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map