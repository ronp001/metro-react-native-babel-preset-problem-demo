var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DemoOfProblem = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var DemoOfProblem = function DemoOfProblem() {
  var argument_with_default = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "this default value should be moved by @babel/plugin-transform-parameters into the body of the method";
  (0, _classCallCheck2.default)(this, DemoOfProblem);
  this.argument_with_default = argument_with_default;
};

exports.DemoOfProblem = DemoOfProblem;
