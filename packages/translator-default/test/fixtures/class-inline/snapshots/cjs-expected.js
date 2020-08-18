"use strict";

exports.__esModule = true;
exports.default = void 0;

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/class-inline/template.marko",
      _marko_component = {
  onCreate() {
    this.x = 1
    this.y = 2
    this.stuff();
  }

};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w("<div></div>");
}, {
  t: _marko_componentType
}, _marko_component);