webpackJsonp([2,211],{

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "三列栅格式的表单排列方式，常用于数据表格的高级搜索。"
	      ],
	      [
	        "p",
	        "有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Three columns layout is often used for advanced searching of data table."
	      ],
	      [
	        "p",
	        "Because the width of label is not fixed, you may need to adjust it by customizing its style."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "高级搜索",
	      "en-US": "Advanced search"
	    },
	    "filename": "components/form/demo/advanced-search.md",
	    "id": "components-form-demo-advanced-search"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass AdvancedSearchForm extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    expand<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  handleSearch <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleReset <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> { expand } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ expand<span class=\"token punctuation\">:</span> !expand }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> {\n      labelCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }<span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">19</span> }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">To</span> generate mock Form<span class=\"token punctuation\">.</span>Item\n    <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 10; i++) {</span>\n      children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>} key<span class=\"token operator\">=</span>{i}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout} label<span class=\"token operator\">=</span>{`Field ${i}`}<span class=\"token operator\">></span>\n            {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span>`field<span class=\"token operator\">-</span>${i}`<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"placeholder\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n\n    <span class=\"token keyword\">const</span> expand <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>expand<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> shownCount <span class=\"token operator\">=</span> expand <span class=\"token operator\">?</span> children<span class=\"token punctuation\">.</span>length <span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form\n        className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-advanced-search-form\"</span>\n        onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSearch}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Row gutter<span class=\"token operator\">=</span>{<span class=\"token number\">40</span>}<span class=\"token operator\">></span>\n          {children<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> shownCount<span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">24</span>} style<span class=\"token operator\">=</span>{{ textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span> }}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span><span class=\"token operator\">></span>Search<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Button style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }} onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleReset}<span class=\"token operator\">></span>\n              Clear\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>a style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }} onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggle}<span class=\"token operator\">></span>\n              Collapse <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span>{expand <span class=\"token operator\">?</span> <span class=\"token string\">'up'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'down'</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\n<span class=\"token keyword\">const</span> WrappedAdvancedSearchForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>AdvancedSearchForm<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>WrappedAdvancedSearchForm <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"search-result-list\"</span><span class=\"token operator\">></span>Search Result List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var FormItem = _antd.Form.Item;

	  var AdvancedSearchForm = function (_React$Component) {
	    _inherits(AdvancedSearchForm, _React$Component);

	    function AdvancedSearchForm() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, AdvancedSearchForm);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        expand: false
	      }, _this.handleSearch = function (e) {
	        e.preventDefault();

	        _this.props.form.validateFields(function (err, values) {
	          console.log('Received values of form: ', values);
	        });
	      }, _this.handleReset = function () {
	        _this.props.form.resetFields();
	      }, _this.toggle = function () {
	        var expand = _this.state.expand;

	        _this.setState({
	          expand: !expand
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    AdvancedSearchForm.prototype.render = function render() {
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      var formItemLayout = {
	        labelCol: {
	          span: 5
	        },
	        wrapperCol: {
	          span: 19
	        }
	      }; // To generate mock Form.Item

	      var children = [];

	      for (var i = 0; i < 10; i++) {
	        children.push(React.createElement(
	          _antd.Col,
	          {
	            span: 8,
	            key: i
	          },
	          React.createElement(
	            FormItem,
	            _extends({}, formItemLayout, {
	              label: "Field " + i
	            }),
	            getFieldDecorator("field-" + i)(React.createElement(_antd.Input, {
	              placeholder: "placeholder"
	            }))
	          )
	        ));
	      }

	      var expand = this.state.expand;
	      var shownCount = expand ? children.length : 6;
	      return React.createElement(
	        _antd.Form,
	        {
	          className: "ant-advanced-search-form",
	          onSubmit: this.handleSearch
	        },
	        React.createElement(
	          _antd.Row,
	          {
	            gutter: 40
	          },
	          children.slice(0, shownCount)
	        ),
	        React.createElement(
	          _antd.Row,
	          null,
	          React.createElement(
	            _antd.Col,
	            {
	              span: 24,
	              style: {
	                textAlign: 'right'
	              }
	            },
	            React.createElement(
	              _antd.Button,
	              {
	                type: "primary",
	                htmlType: "submit"
	              },
	              "Search"
	            ),
	            React.createElement(
	              _antd.Button,
	              {
	                style: {
	                  marginLeft: 8
	                },
	                onClick: this.handleReset
	              },
	              "Clear"
	            ),
	            React.createElement(
	              "a",
	              {
	                style: {
	                  marginLeft: 8,
	                  fontSize: 12
	                },
	                onClick: this.toggle
	              },
	              "Collapse ",
	              React.createElement(_antd.Icon, {
	                type: expand ? 'up' : 'down'
	              })
	            )
	          )
	        )
	      );
	    };

	    return AdvancedSearchForm;
	  }(React.Component);

	  var WrappedAdvancedSearchForm = _antd.Form.create()(AdvancedSearchForm);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(WrappedAdvancedSearchForm, null),
	    React.createElement(
	      "div",
	      {
	        className: "search-result-list"
	      },
	      "Search Result List"
	    )
	  );
	},
	  "style": "#components-form-demo-advanced-search .ant-advanced-search-form {\n  padding: 24px;\n  background: #fbfbfb;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n}\n#components-form-demo-advanced-search .ant-form {\n  max-width: none;\n}\n#components-form-demo-advanced-search .search-result-list {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 80px;\n}\n",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-advanced-search</span> <span class=\"token class\">.ant-advanced-search-form</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fbfbfb</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "setFieldsValue"
	        ],
	        " 来动态设置其他控件的值。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Use ",
	        [
	          "code",
	          "setFieldsValue"
	        ],
	        " to set other control's value programmaticly."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 12,
	    "title": {
	      "zh-CN": "表单联动",
	      "en-US": "Coordinated Controls"
	    },
	    "filename": "components/form/demo/coordinated.md",
	    "id": "components-form-demo-coordinated"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!err<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSelectChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span>{\n      note<span class=\"token punctuation\">:</span> `Hi<span class=\"token punctuation\">,</span> ${value <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'male'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'man'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'lady'</span>}!`<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Note\"</span>\n          labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }}\n          wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }}\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'note'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your note!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Gender\"</span>\n          labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }}\n          wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }}\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your gender!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            onChange<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>handleSelectChange<span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Select a option and change input text above\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"male\"</span><span class=\"token operator\">></span>male<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"female\"</span><span class=\"token operator\">></span>female<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span><span class=\"token operator\">></span>\n            Submit\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;
	  var Option = _antd.Select.Option;

	  var App = _antd.Form.create()(React.createClass({
	    displayName: "App",
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFields(function (err, values) {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
	    handleSelectChange: function handleSelectChange(value) {
	      console.log(value);
	      this.props.form.setFieldsValue({
	        note: "Hi, " + (value === 'male' ? 'man' : 'lady') + "!"
	      });
	    },
	    render: function render() {
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      return React.createElement(
	        _antd.Form,
	        {
	          onSubmit: this.handleSubmit
	        },
	        React.createElement(
	          FormItem,
	          {
	            label: "Note",
	            labelCol: {
	              span: 4
	            },
	            wrapperCol: {
	              span: 8
	            }
	          },
	          getFieldDecorator('note', {
	            rules: [{
	              required: true,
	              message: 'Please input your note!'
	            }]
	          })(React.createElement(_antd.Input, null))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            label: "Gender",
	            labelCol: {
	              span: 4
	            },
	            wrapperCol: {
	              span: 8
	            }
	          },
	          getFieldDecorator('gender', {
	            rules: [{
	              required: true,
	              message: 'Please select your gender!'
	            }],
	            onChange: this.handleSelectChange
	          })(React.createElement(
	            _antd.Select,
	            {
	              placeholder: "Select a option and change input text above"
	            },
	            React.createElement(
	              Option,
	              {
	                value: "male"
	              },
	              "male"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "female"
	              },
	              "female"
	            )
	          ))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            wrapperCol: {
	              span: 8,
	              offset: 4
	            }
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit"
	            },
	            "Submit"
	          )
	        )
	      );
	    }
	  }));

	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定："
	      ],
	      [
	        "blockquote",
	        [
	          "ul",
	          [
	            "li",
	            [
	              "p",
	              "提供受控属性 ",
	              [
	                "code",
	                "value"
	              ],
	              " 或其它与 ",
	              [
	                "a",
	                {
	                  "title": null,
	                  "href": "http://ant.design/components/form/#getFieldDecorator-参数"
	                },
	                [
	                  "code",
	                  "valuePropName"
	                ]
	              ],
	              " 的值同名的属性。"
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              "提供 ",
	              [
	                "code",
	                "onChange"
	              ],
	              " 事件或 ",
	              [
	                "a",
	                {
	                  "title": null,
	                  "href": "http://ant.design/components/form/#getFieldDecorator-参数"
	                },
	                [
	                  "code",
	                  "trigger"
	                ]
	              ],
	              " 的值同名的事件。"
	            ]
	          ]
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:"
	      ],
	      [
	        "blockquote",
	        [
	          "ul",
	          [
	            "li",
	            [
	              "p",
	              "It has a controlled property ",
	              [
	                "code",
	                "value"
	              ],
	              " or other name which is equal to the value of ",
	              [
	                "a",
	                {
	                  "title": null,
	                  "href": "http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters"
	                },
	                [
	                  "code",
	                  "valuePropName"
	                ]
	              ],
	              "."
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              "It has event ",
	              [
	                "code",
	                "onChange"
	              ],
	              " or an event which name is equal to the value of ",
	              [
	                "a",
	                {
	                  "title": null,
	                  "href": "http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters"
	                },
	                [
	                  "code",
	                  "trigger"
	                ]
	              ],
	              "."
	            ]
	          ]
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "自定义表单控件",
	      "en-US": "Customized Form Controls"
	    },
	    "filename": "components/form/demo/customized-form-controls.md",
	    "id": "components-form-demo-customized-form-controls"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> PriceInput <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value || {}<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return {\n      number<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span>number || <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n      currency<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span>currency || <span class=\"token string\">'rmb'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentWillReceiveProps</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">)</span> {\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Should be a controlled component<span class=\"token punctuation\">.</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> nextProps<span class=\"token punctuation\">)</span> {\n      <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> nextProps<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleNumberChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> number <span class=\"token operator\">=</span> <span class=\"token function\">parseInt</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value || <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>number<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n      return<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!<span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ number }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span>{ number }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCurrencyChange</span><span class=\"token punctuation\">(</span>currency<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!<span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ currency }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span>{ currency }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span>changedValue<span class=\"token punctuation\">)</span> {\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Should provide an event <span class=\"token keyword\">to</span> pass value <span class=\"token keyword\">to</span> Form<span class=\"token punctuation\">.</span>\n    <span class=\"token keyword\">const</span> onChange <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>onChange<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onChange<span class=\"token punctuation\">)</span> {\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">assign</span><span class=\"token punctuation\">(</span>{}<span class=\"token punctuation\">,</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">,</span> changedValue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { size } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Input\n          type<span class=\"token operator\">=</span><span class=\"token string\">\"text\"</span>\n          size<span class=\"token operator\">=</span>{size}\n          value<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>number}\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleNumberChange}\n          style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'65%'</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token string\">'3%'</span> }}\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span>\n          value<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>currency}\n          size<span class=\"token operator\">=</span>{size}\n          style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'32%'</span> }}\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCurrencyChange}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"rmb\"</span><span class=\"token operator\">></span>RMB<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"dollar\"</span><span class=\"token operator\">></span>Dollar<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!err<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkPrice</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span>number <span class=\"token operator\">></span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      return<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Price must greater than zero!'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form inline onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Price\"</span><span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'price'</span><span class=\"token punctuation\">,</span> {\n            initialValue<span class=\"token punctuation\">:</span> { number<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> currency<span class=\"token punctuation\">:</span> <span class=\"token string\">'rmb'</span> }<span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ validator<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>checkPrice }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>PriceInput <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span><span class=\"token operator\">></span>Submit<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;
	  var Option = _antd.Select.Option;
	  var PriceInput = React.createClass({
	    displayName: "PriceInput",
	    getInitialState: function getInitialState() {
	      var value = this.props.value || {};
	      return {
	        number: value.number || 0,
	        currency: value.currency || 'rmb'
	      };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	      // Should be a controlled component.
	      if ('value' in nextProps) {
	        var value = nextProps.value;
	        this.setState(value);
	      }
	    },
	    handleNumberChange: function handleNumberChange(e) {
	      var number = parseInt(e.target.value || 0, 10);

	      if (isNaN(number)) {
	        return;
	      }

	      if (!('value' in this.props)) {
	        this.setState({
	          number: number
	        });
	      }

	      this.triggerChange({
	        number: number
	      });
	    },
	    handleCurrencyChange: function handleCurrencyChange(currency) {
	      if (!('value' in this.props)) {
	        this.setState({
	          currency: currency
	        });
	      }

	      this.triggerChange({
	        currency: currency
	      });
	    },
	    triggerChange: function triggerChange(changedValue) {
	      // Should provide an event to pass value to Form.
	      var onChange = this.props.onChange;

	      if (onChange) {
	        onChange(Object.assign({}, this.state, changedValue));
	      }
	    },
	    render: function render() {
	      var size = this.props.size;
	      var state = this.state;
	      return React.createElement(
	        "span",
	        null,
	        React.createElement(_antd.Input, {
	          type: "text",
	          size: size,
	          value: state.number,
	          onChange: this.handleNumberChange,
	          style: {
	            width: '65%',
	            marginRight: '3%'
	          }
	        }),
	        React.createElement(
	          _antd.Select,
	          {
	            value: state.currency,
	            size: size,
	            style: {
	              width: '32%'
	            },
	            onChange: this.handleCurrencyChange
	          },
	          React.createElement(
	            Option,
	            {
	              value: "rmb"
	            },
	            "RMB"
	          ),
	          React.createElement(
	            Option,
	            {
	              value: "dollar"
	            },
	            "Dollar"
	          )
	        )
	      );
	    }
	  });

	  var Demo = _antd.Form.create()(React.createClass({
	    displayName: "Demo",
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFields(function (err, values) {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
	    checkPrice: function checkPrice(rule, value, callback) {
	      if (value.number > 0) {
	        callback();
	        return;
	      }

	      callback('Price must greater than zero!');
	    },
	    render: function render() {
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      return React.createElement(
	        _antd.Form,
	        {
	          inline: true,
	          onSubmit: this.handleSubmit
	        },
	        React.createElement(
	          FormItem,
	          {
	            label: "Price"
	          },
	          getFieldDecorator('price', {
	            initialValue: {
	              number: 0,
	              currency: 'rmb'
	            },
	            rules: [{
	              validator: this.checkPrice
	            }]
	          })(React.createElement(PriceInput, null))
	        ),
	        React.createElement(
	          FormItem,
	          null,
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit"
	            },
	            "Submit"
	          )
	        )
	      );
	    }
	  }));

	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "动态增加、减少表单项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Add or remove form items dynamically."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "动态增减表单项",
	      "en-US": "Dynamic Form Item"
	    },
	    "filename": "components/form/demo/dynamic-form-item.md",
	    "id": "components-form-demo-dynamic-form-item"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nlet uuid <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nclass DynamicFieldSet extends React<span class=\"token punctuation\">.</span>Component {\n  remove <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> { form } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> can use data<span class=\"token operator\">-</span>binding <span class=\"token keyword\">to</span> get\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> We need at least one passenger\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> {\n      return<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> can use data<span class=\"token operator\">-</span>binding <span class=\"token keyword\">to</span> set\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span>{\n      keys<span class=\"token punctuation\">:</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>key <span class=\"token operator\">=</span><span class=\"token operator\">></span> key !<span class=\"token operator\">==</span> k<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  add <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    uuid<span class=\"token operator\">+</span><span class=\"token operator\">+</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> { form } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> can use data<span class=\"token operator\">-</span>binding <span class=\"token keyword\">to</span> get\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> nextKeys <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>uuid<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> can use data<span class=\"token operator\">-</span>binding <span class=\"token keyword\">to</span> set\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> important! notify form <span class=\"token keyword\">to</span> detect changes\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span>{\n      keys<span class=\"token punctuation\">:</span> nextKeys<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!err<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator<span class=\"token punctuation\">,</span> getFieldValue } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> {\n      labelCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }<span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayoutWithOutLabel <span class=\"token operator\">=</span> {\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">,</span> { initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> <span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItems <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      return <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">(</span>index <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> formItemLayout <span class=\"token punctuation\">:</span> formItemLayoutWithOutLabel<span class=\"token punctuation\">)</span>}\n          label<span class=\"token operator\">=</span>{index <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> <span class=\"token string\">'Passengers'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span>}\n          required<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}\n          key<span class=\"token operator\">=</span>{k}\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span>`names<span class=\"token operator\">-</span>${k}`<span class=\"token punctuation\">,</span> {\n            validateTrigger<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'onChange'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'onBlur'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              whitespace<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              message<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Please input passenger's name or delete this field.\"</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"passenger name\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span>Icon\n            className<span class=\"token operator\">=</span><span class=\"token string\">\"dynamic-delete-button\"</span>\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"minus-circle-o\"</span>\n            disabled<span class=\"token operator\">=</span>{keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">1</span>}\n            onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>\n        {formItems}\n        <span class=\"token operator\">&lt;</span>FormItem {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayoutWithOutLabel}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>add} style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span> }}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"plus\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span> Add field\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayoutWithOutLabel}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>Submit<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\n<span class=\"token keyword\">const</span> WrappedDynamicFieldSet <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>DynamicFieldSet<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>WrappedDynamicFieldSet <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var FormItem = _antd.Form.Item;
	  var uuid = 0;

	  var DynamicFieldSet = function (_React$Component) {
	    _inherits(DynamicFieldSet, _React$Component);

	    function DynamicFieldSet() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, DynamicFieldSet);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.remove = function (k) {
	        var form = _this.props.form; // can use data-binding to get

	        var keys = form.getFieldValue('keys'); // We need at least one passenger

	        if (keys.length === 1) {
	          return;
	        } // can use data-binding to set


	        form.setFieldsValue({
	          keys: keys.filter(function (key) {
	            return key !== k;
	          })
	        });
	      }, _this.add = function () {
	        uuid++;
	        var form = _this.props.form; // can use data-binding to get

	        var keys = form.getFieldValue('keys');
	        var nextKeys = keys.concat(uuid); // can use data-binding to set
	        // important! notify form to detect changes

	        form.setFieldsValue({
	          keys: nextKeys
	        });
	      }, _this.handleSubmit = function (e) {
	        e.preventDefault();

	        _this.props.form.validateFields(function (err, values) {
	          if (!err) {
	            console.log('Received values of form: ', values);
	          }
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    DynamicFieldSet.prototype.render = function render() {
	      var _this2 = this;

	      var _props$form = this.props.form,
	          getFieldDecorator = _props$form.getFieldDecorator,
	          getFieldValue = _props$form.getFieldValue;
	      var formItemLayout = {
	        labelCol: {
	          span: 4
	        },
	        wrapperCol: {
	          span: 20
	        }
	      };
	      var formItemLayoutWithOutLabel = {
	        wrapperCol: {
	          span: 20,
	          offset: 4
	        }
	      };
	      getFieldDecorator('keys', {
	        initialValue: []
	      });
	      var keys = getFieldValue('keys');
	      var formItems = keys.map(function (k, index) {
	        return React.createElement(
	          FormItem,
	          _extends({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel, {
	            label: index === 0 ? 'Passengers' : '',
	            required: false,
	            key: k
	          }),
	          getFieldDecorator("names-" + k, {
	            validateTrigger: ['onChange', 'onBlur'],
	            rules: [{
	              required: true,
	              whitespace: true,
	              message: "Please input passenger's name or delete this field."
	            }]
	          })(React.createElement(_antd.Input, {
	            placeholder: "passenger name",
	            style: {
	              width: '60%',
	              marginRight: 8
	            }
	          })),
	          React.createElement(_antd.Icon, {
	            className: "dynamic-delete-button",
	            type: "minus-circle-o",
	            disabled: keys.length === 1,
	            onClick: function onClick() {
	              return _this2.remove(k);
	            }
	          })
	        );
	      });
	      return React.createElement(
	        _antd.Form,
	        {
	          onSubmit: this.handleSubmit
	        },
	        formItems,
	        React.createElement(
	          FormItem,
	          formItemLayoutWithOutLabel,
	          React.createElement(
	            _antd.Button,
	            {
	              type: "dashed",
	              onClick: this.add,
	              style: {
	                width: '60%'
	              }
	            },
	            React.createElement(_antd.Icon, {
	              type: "plus"
	            }),
	            " Add field"
	          )
	        ),
	        React.createElement(
	          FormItem,
	          formItemLayoutWithOutLabel,
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit",
	              size: "large"
	            },
	            "Submit"
	          )
	        )
	      );
	    };

	    return DynamicFieldSet;
	  }(React.Component);

	  var WrappedDynamicFieldSet = _antd.Form.create()(DynamicFieldSet);

	  return React.createElement(WrappedDynamicFieldSet, null);
	},
	  "style": ".dynamic-delete-button {\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n  font-size: 24px;\n  color: #999;\n  transition: all .3s;\n}\n.dynamic-delete-button:hover {\n  color: #777;\n}\n.dynamic-delete-button[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#777</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span><span class=\"token attribute\">[disabled]</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> not-allowed<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">opacity</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0.5</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "When user visit a page with a list of items, and want to create a new item. The page can popup a form in Modal, then let user fills in the form to create an item."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "弹出层中的新建表单",
	      "en-US": "Form in Modal to Create"
	    },
	    "filename": "components/form/demo/form-in-modal.md",
	    "id": "components-form-demo-form-in-modal"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> Modal<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> CollectionCreateForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n  <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> { visible<span class=\"token punctuation\">,</span> onCancel<span class=\"token punctuation\">,</span> onCreate<span class=\"token punctuation\">,</span> form } <span class=\"token operator\">=</span> props<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Modal\n        visible<span class=\"token operator\">=</span>{visible}\n        title<span class=\"token operator\">=</span><span class=\"token string\">\"Create a new collection\"</span>\n        okText<span class=\"token operator\">=</span><span class=\"token string\">\"Create\"</span>\n        onCancel<span class=\"token operator\">=</span>{onCancel}\n        onOk<span class=\"token operator\">=</span>{onCreate}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Form vertical<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span><span class=\"token operator\">></span>\n            {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'title'</span><span class=\"token punctuation\">,</span> {\n              rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input the title of collection!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token operator\">&lt;</span>Input <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Description\"</span><span class=\"token operator\">></span>\n            {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'description'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Input type<span class=\"token operator\">=</span><span class=\"token string\">\"textarea\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem className<span class=\"token operator\">=</span><span class=\"token string\">\"collection-create-form_last-form-item\"</span><span class=\"token operator\">></span>\n            {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'modifier'</span><span class=\"token punctuation\">,</span> {\n              initialValue<span class=\"token punctuation\">:</span> <span class=\"token string\">'public'</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span><span class=\"token string\">\"public\"</span><span class=\"token operator\">></span>Public<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span><span class=\"token string\">\"private\"</span><span class=\"token operator\">></span>Private<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n            <span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> CollectionsPage <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return { visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">showModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCreate</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> {\n        return<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">saveFormRef</span><span class=\"token punctuation\">(</span>form<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span>form <span class=\"token operator\">=</span> form<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>showModal}<span class=\"token operator\">></span>New Collection<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>CollectionCreateForm\n          ref<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>saveFormRef}\n          visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible}\n          onCancel<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCancel}\n          onCreate<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCreate}\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>CollectionsPage <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;

	  var CollectionCreateForm = _antd.Form.create()(function (props) {
	    var visible = props.visible,
	        onCancel = props.onCancel,
	        onCreate = props.onCreate,
	        form = props.form;
	    var getFieldDecorator = form.getFieldDecorator;
	    return React.createElement(
	      _antd.Modal,
	      {
	        visible: visible,
	        title: "Create a new collection",
	        okText: "Create",
	        onCancel: onCancel,
	        onOk: onCreate
	      },
	      React.createElement(
	        _antd.Form,
	        {
	          vertical: true
	        },
	        React.createElement(
	          FormItem,
	          {
	            label: "Title"
	          },
	          getFieldDecorator('title', {
	            rules: [{
	              required: true,
	              message: 'Please input the title of collection!'
	            }]
	          })(React.createElement(_antd.Input, null))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            label: "Description"
	          },
	          getFieldDecorator('description')(React.createElement(_antd.Input, {
	            type: "textarea"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            className: "collection-create-form_last-form-item"
	          },
	          getFieldDecorator('modifier', {
	            initialValue: 'public'
	          })(React.createElement(
	            _antd.Radio.Group,
	            null,
	            React.createElement(
	              _antd.Radio,
	              {
	                value: "public"
	              },
	              "Public"
	            ),
	            React.createElement(
	              _antd.Radio,
	              {
	                value: "private"
	              },
	              "Private"
	            )
	          ))
	        )
	      )
	    );
	  });

	  var CollectionsPage = React.createClass({
	    displayName: "CollectionsPage",
	    getInitialState: function getInitialState() {
	      return {
	        visible: false
	      };
	    },
	    showModal: function showModal() {
	      this.setState({
	        visible: true
	      });
	    },
	    handleCancel: function handleCancel() {
	      this.setState({
	        visible: false
	      });
	    },
	    handleCreate: function handleCreate() {
	      var _this = this;

	      var form = this.form;
	      form.validateFields(function (err, values) {
	        if (err) {
	          return;
	        }

	        console.log('Received values of form: ', values);
	        form.resetFields();

	        _this.setState({
	          visible: false
	        });
	      });
	    },
	    saveFormRef: function saveFormRef(form) {
	      this.form = form;
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            onClick: this.showModal
	          },
	          "New Collection"
	        ),
	        React.createElement(CollectionCreateForm, {
	          ref: this.saveFormRef,
	          visible: this.state.visible,
	          onCancel: this.handleCancel,
	          onCreate: this.handleCreate
	        })
	      );
	    }
	  });
	  return React.createElement(CollectionsPage, null);
	},
	  "style": ".collection-create-form_last-form-item {\n  margin-bottom: 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.collection-create-form_last-form-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过使用 ",
	        [
	          "code",
	          "onFieldsChange"
	        ],
	        " 与 ",
	        [
	          "code",
	          "mapPropsToFields"
	        ],
	        "，可以把表单的数据存储到上层组件或者 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/reactjs/redux"
	          },
	          "Redux"
	        ],
	        "、",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/dvajs/dva"
	          },
	          "dva"
	        ],
	        " 中。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "We can store form data into upper component or ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/reactjs/redux"
	          },
	          "Redux"
	        ],
	        " or ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/dvajs/dva"
	          },
	          "dva"
	        ],
	        " by using ",
	        [
	          "code",
	          "onFieldsChange"
	        ],
	        " and ",
	        [
	          "code",
	          "mapPropsToFields"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "表单数据存储于上层组件",
	      "en-US": "Store Form Data into Upper Component"
	    },
	    "filename": "components/form/demo/global-state.md",
	    "id": "components-form-demo-global-state"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> CustomizedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">onFieldsChange</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> changedFields<span class=\"token punctuation\">)</span> {\n    props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>changedFields<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">mapPropsToFields</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> {\n    return {\n      username<span class=\"token punctuation\">:</span> {\n        <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>username<span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> props<span class=\"token punctuation\">.</span>username<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onValuesChange</span><span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n  return <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>Form inline<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Username\"</span><span class=\"token operator\">></span>\n        {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'username'</span><span class=\"token punctuation\">,</span> {\n          rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Username is required!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Input <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      fields<span class=\"token punctuation\">:</span> {\n        username<span class=\"token punctuation\">:</span> {\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span>\n        }<span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleFormChange</span><span class=\"token punctuation\">(</span>changedFields<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      fields<span class=\"token punctuation\">:</span> { <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fields<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>changedFields }<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> fields <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fields<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>CustomizedForm {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>fields} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleFormChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>pre className<span class=\"token operator\">=</span><span class=\"token string\">\"language-bash\"</span><span class=\"token operator\">></span>\n          {JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>fields<span class=\"token punctuation\">,</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>pre<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;

	  var CustomizedForm = _antd.Form.create({
	    onFieldsChange: function onFieldsChange(props, changedFields) {
	      props.onChange(changedFields);
	    },
	    mapPropsToFields: function mapPropsToFields(props) {
	      return {
	        username: _extends({}, props.username, {
	          value: props.username.value.toUpperCase()
	        })
	      };
	    },
	    onValuesChange: function onValuesChange(_, values) {
	      console.log(values);
	    }
	  })(function (props) {
	    var getFieldDecorator = props.form.getFieldDecorator;
	    return React.createElement(
	      _antd.Form,
	      {
	        inline: true
	      },
	      React.createElement(
	        FormItem,
	        {
	          label: "Username"
	        },
	        getFieldDecorator('username', {
	          rules: [{
	            required: true,
	            message: 'Username is required!'
	          }]
	        })(React.createElement(_antd.Input, null))
	      )
	    );
	  });

	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        fields: {
	          username: {
	            value: 'benjycui'
	          }
	        }
	      };
	    },
	    handleFormChange: function handleFormChange(changedFields) {
	      this.setState({
	        fields: _extends({}, this.state.fields, changedFields)
	      });
	    },
	    render: function render() {
	      var fields = this.state.fields;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(CustomizedForm, _extends({}, fields, {
	          onChange: this.handleFormChange
	        })),
	        React.createElement(
	          "pre",
	          {
	            className: "language-bash"
	          },
	          JSON.stringify(fields, null, 2)
	        )
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	},
	  "style": "\n#components-form-demo-global-state .language-bash {\n  max-width: 400px;\n  border-radius: 6px;\n  margin-top: 24px;\n}\n"
	};

/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "水平登录栏，常用在顶部导航栏中。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Horizontal login form is often used in navigation bar."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "水平登录栏",
	      "en-US": "Horizontal Login Form"
	    },
	    "filename": "components/form/demo/horizontal-login.md",
	    "id": "components-form-demo-horizontal-login"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">hasErrors</span><span class=\"token punctuation\">(</span>fieldsError<span class=\"token punctuation\">)</span> {\n  return Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>fieldsError<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">some</span><span class=\"token punctuation\">(</span>field <span class=\"token operator\">=</span><span class=\"token operator\">></span> fieldsError<span class=\"token punctuation\">[</span>field<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> HorizontalLoginForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">To</span> disabled submit button at the beginning<span class=\"token punctuation\">.</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!err<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator<span class=\"token punctuation\">,</span> getFieldsError<span class=\"token punctuation\">,</span> getFieldError<span class=\"token punctuation\">,</span> isFieldTouched } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Only show error after a field is touched<span class=\"token punctuation\">.</span>\n    <span class=\"token keyword\">const</span> userNameError <span class=\"token operator\">=</span> <span class=\"token function\">isFieldTouched</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token function\">getFieldError</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> passwordError <span class=\"token operator\">=</span> <span class=\"token function\">isFieldTouched</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token function\">getFieldError</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form inline onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          validateStatus<span class=\"token operator\">=</span>{userNameError <span class=\"token operator\">?</span> <span class=\"token string\">'error'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span>}\n          help<span class=\"token operator\">=</span>{userNameError || <span class=\"token string\">''</span>}\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your username!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input addonBefore<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Username\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          validateStatus<span class=\"token operator\">=</span>{passwordError <span class=\"token operator\">?</span> <span class=\"token string\">'error'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span>}\n          help<span class=\"token operator\">=</span>{passwordError || <span class=\"token string\">''</span>}\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your Password!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input addonBefore<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"lock\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span>\n            htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span>\n            disabled<span class=\"token operator\">=</span>{<span class=\"token function\">hasErrors</span><span class=\"token punctuation\">(</span><span class=\"token function\">getFieldsError</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">></span>\n            Log <span class=\"token keyword\">in</span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>HorizontalLoginForm <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;

	  function hasErrors(fieldsError) {
	    return Object.keys(fieldsError).some(function (field) {
	      return fieldsError[field];
	    });
	  }

	  var HorizontalLoginForm = _antd.Form.create()(React.createClass({
	    displayName: "HorizontalLoginForm",
	    componentDidMount: function componentDidMount() {
	      // To disabled submit button at the beginning.
	      this.props.form.validateFields();
	    },
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFields(function (err, values) {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
	    render: function render() {
	      var _props$form = this.props.form,
	          getFieldDecorator = _props$form.getFieldDecorator,
	          getFieldsError = _props$form.getFieldsError,
	          getFieldError = _props$form.getFieldError,
	          isFieldTouched = _props$form.isFieldTouched; // Only show error after a field is touched.

	      var userNameError = isFieldTouched('userName') && getFieldError('userName');
	      var passwordError = isFieldTouched('password') && getFieldError('password');
	      return React.createElement(
	        _antd.Form,
	        {
	          inline: true,
	          onSubmit: this.handleSubmit
	        },
	        React.createElement(
	          FormItem,
	          {
	            validateStatus: userNameError ? 'error' : '',
	            help: userNameError || ''
	          },
	          getFieldDecorator('userName', {
	            rules: [{
	              required: true,
	              message: 'Please input your username!'
	            }]
	          })(React.createElement(_antd.Input, {
	            addonBefore: React.createElement(_antd.Icon, {
	              type: "user"
	            }),
	            placeholder: "Username"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            validateStatus: passwordError ? 'error' : '',
	            help: passwordError || ''
	          },
	          getFieldDecorator('password', {
	            rules: [{
	              required: true,
	              message: 'Please input your Password!'
	            }]
	          })(React.createElement(_antd.Input, {
	            addonBefore: React.createElement(_antd.Icon, {
	              type: "lock"
	            }),
	            type: "password",
	            placeholder: "Password"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          null,
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit",
	              disabled: hasErrors(getFieldsError())
	            },
	            "Log in"
	          )
	        )
	      );
	    }
	  }));

	  return React.createElement(HorizontalLoginForm, null);
	}
	};

/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "表单有三种布局。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are three layout for form: ",
	        [
	          "code",
	          "horizontal"
	        ],
	        ", ",
	        [
	          "code",
	          "vertical"
	        ],
	        ", ",
	        [
	          "code",
	          "inline"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 13,
	    "title": {
	      "zh-CN": "表单布局",
	      "en-US": "Form Layout"
	    },
	    "filename": "components/form/demo/layout.md",
	    "id": "components-form-demo-layout"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass FormLayoutDemo extends React<span class=\"token punctuation\">.</span>Component {\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">super</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> {\n      formLayout<span class=\"token punctuation\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  handleFormLayoutChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ formLayout<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { formLayout } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> formLayout <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'horizontal'</span> <span class=\"token operator\">?</span> {\n      labelCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }<span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> }<span class=\"token punctuation\">,</span>\n    } <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> buttonItemLayout <span class=\"token operator\">=</span> formLayout <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'horizontal'</span> <span class=\"token operator\">?</span> {\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }<span class=\"token punctuation\">,</span>\n    } <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> layoutProps <span class=\"token operator\">=</span> { <span class=\"token punctuation\">[</span>formLayout<span class=\"token punctuation\">]</span><span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Form {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>layoutProps}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem\n            label<span class=\"token operator\">=</span><span class=\"token string\">\"Form Layout\"</span>\n            {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          <span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Group defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span> onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleFormLayoutChange}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span><span class=\"token operator\">></span>Horizontal<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"vertical\"</span><span class=\"token operator\">></span>Vertical<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span><span class=\"token operator\">></span>Inline<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem\n            label<span class=\"token operator\">=</span><span class=\"token string\">\"Field A\"</span>\n            {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          <span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input placeholder\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem\n            label<span class=\"token operator\">=</span><span class=\"token string\">\"Field B\"</span>\n            {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          <span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input placeholder\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormItem {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>buttonItemLayout}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>Submit<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>FormLayoutDemo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var FormItem = _antd.Form.Item;

	  var FormLayoutDemo = function (_React$Component) {
	    _inherits(FormLayoutDemo, _React$Component);

	    function FormLayoutDemo() {
	      _classCallCheck(this, FormLayoutDemo);

	      var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	      _this.handleFormLayoutChange = function (e) {
	        _this.setState({
	          formLayout: e.target.value
	        });
	      };

	      _this.state = {
	        formLayout: 'horizontal'
	      };
	      return _this;
	    }

	    FormLayoutDemo.prototype.render = function render() {
	      var formLayout = this.state.formLayout;
	      var formItemLayout = formLayout === 'horizontal' ? {
	        labelCol: {
	          span: 4
	        },
	        wrapperCol: {
	          span: 14
	        }
	      } : null;
	      var buttonItemLayout = formLayout === 'horizontal' ? {
	        wrapperCol: {
	          span: 14,
	          offset: 4
	        }
	      } : null;

	      var layoutProps = _defineProperty({}, formLayout, true);

	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Form,
	          layoutProps,
	          React.createElement(
	            FormItem,
	            _extends({
	              label: "Form Layout"
	            }, formItemLayout),
	            React.createElement(
	              _antd.Radio.Group,
	              {
	                defaultValue: "horizontal",
	                onChange: this.handleFormLayoutChange
	              },
	              React.createElement(
	                _antd.Radio.Button,
	                {
	                  value: "horizontal"
	                },
	                "Horizontal"
	              ),
	              React.createElement(
	                _antd.Radio.Button,
	                {
	                  value: "vertical"
	                },
	                "Vertical"
	              ),
	              React.createElement(
	                _antd.Radio.Button,
	                {
	                  value: "inline"
	                },
	                "Inline"
	              )
	            )
	          ),
	          React.createElement(
	            FormItem,
	            _extends({
	              label: "Field A"
	            }, formItemLayout),
	            React.createElement(_antd.Input, {
	              placeholder: "input placeholder"
	            })
	          ),
	          React.createElement(
	            FormItem,
	            _extends({
	              label: "Field B"
	            }, formItemLayout),
	            React.createElement(_antd.Input, {
	              placeholder: "input placeholder"
	            })
	          ),
	          React.createElement(
	            FormItem,
	            buttonItemLayout,
	            React.createElement(
	              _antd.Button,
	              {
	                type: "primary",
	                size: "large"
	              },
	              "Submit"
	            )
	          )
	        )
	      );
	    };

	    return FormLayoutDemo;
	  }(React.Component);

	  return React.createElement(FormLayoutDemo, null);
	}
	};

/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "普通的登录框，可以容纳更多的元素。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Normal login form which can contain more elements."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "登录框",
	      "en-US": "Login Form"
	    },
	    "filename": "components/form/demo/normal-login.md",
	    "id": "components-form-demo-normal-login"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Checkbox } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> NormalLoginForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!err<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit} className<span class=\"token operator\">=</span><span class=\"token string\">\"login-form\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem<span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your username!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input addonBefore<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Username\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem<span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your Password!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input addonBefore<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"lock\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem<span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'remember'</span><span class=\"token punctuation\">,</span> {\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span><span class=\"token punctuation\">,</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Checkbox<span class=\"token operator\">></span>Remember me<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Checkbox<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span>a className<span class=\"token operator\">=</span><span class=\"token string\">\"login-form-forgot\"</span><span class=\"token operator\">></span>Forgot password<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"login-form-button\"</span><span class=\"token operator\">></span>\n            Log <span class=\"token keyword\">in</span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">Or</span> <span class=\"token operator\">&lt;</span>a<span class=\"token operator\">></span>register now!<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>NormalLoginForm <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;

	  var NormalLoginForm = _antd.Form.create()(React.createClass({
	    displayName: "NormalLoginForm",
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFields(function (err, values) {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
	    render: function render() {
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      return React.createElement(
	        _antd.Form,
	        {
	          onSubmit: this.handleSubmit,
	          className: "login-form"
	        },
	        React.createElement(
	          FormItem,
	          null,
	          getFieldDecorator('userName', {
	            rules: [{
	              required: true,
	              message: 'Please input your username!'
	            }]
	          })(React.createElement(_antd.Input, {
	            addonBefore: React.createElement(_antd.Icon, {
	              type: "user"
	            }),
	            placeholder: "Username"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          null,
	          getFieldDecorator('password', {
	            rules: [{
	              required: true,
	              message: 'Please input your Password!'
	            }]
	          })(React.createElement(_antd.Input, {
	            addonBefore: React.createElement(_antd.Icon, {
	              type: "lock"
	            }),
	            type: "password",
	            placeholder: "Password"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          null,
	          getFieldDecorator('remember', {
	            valuePropName: 'checked',
	            initialValue: true
	          })(React.createElement(
	            _antd.Checkbox,
	            null,
	            "Remember me"
	          )),
	          React.createElement(
	            "a",
	            {
	              className: "login-form-forgot"
	            },
	            "Forgot password"
	          ),
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit",
	              className: "login-form-button"
	            },
	            "Log in"
	          ),
	          "Or ",
	          React.createElement(
	            "a",
	            null,
	            "register now!"
	          )
	        )
	      );
	    }
	  }));

	  return React.createElement(NormalLoginForm, null);
	},
	  "style": "#components-form-demo-normal-login .login-form {\n  max-width: 300px;\n}\n#components-form-demo-normal-login .login-form-forgot {\n  float: right;\n}\n#components-form-demo-normal-login .login-form-button {\n  width: 100%;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">max-width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">300</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form-forgot</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form-button</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用户填写必须的信息以注册新用户。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Fill in this form to create a new account for you."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "注册新用户",
	      "en-US": "Registration"
	    },
	    "filename": "components/form/demo/register.md",
	    "id": "components-form-demo-register"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Cascader<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Checkbox<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> residences <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> RegistrationForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      passwordDirty<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFieldsAndScroll</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!err<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handlePasswordBlur</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ passwordDirty<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>passwordDirty || !!value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkPassword</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> value !<span class=\"token operator\">==</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Two passwords that you enter is inconsistent!'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    } <span class=\"token keyword\">else</span> {\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkConfirm</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>passwordDirty<span class=\"token punctuation\">)</span> {\n      form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> { force<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> {\n      labelCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }<span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> tailFormItemLayout <span class=\"token operator\">=</span> {\n      wrapperCol<span class=\"token punctuation\">:</span> {\n        span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span>\n        offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> prefixSelector <span class=\"token operator\">=</span> <span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'prefix'</span><span class=\"token punctuation\">,</span> {\n      initialValue<span class=\"token punctuation\">:</span> <span class=\"token string\">'86'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"icp-selector\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"86\"</span><span class=\"token operator\">></span><span class=\"token operator\">+</span><span class=\"token number\">86</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"E-mail\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n              type<span class=\"token punctuation\">:</span> <span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'The input is not valid E-mail!'</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">,</span> {\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your E-mail!'</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your password!'</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">,</span> {\n              validator<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>checkConfirm<span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> onBlur<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handlePasswordBlur} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Confirm Password\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please confirm your password!'</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">,</span> {\n              validator<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>checkPassword<span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n              Nickname<span class=\"token operator\">&amp;</span>nbsp<span class=\"token comment\" spellcheck=\"true\">;</span>\n              <span class=\"token operator\">&lt;</span>Tooltip title<span class=\"token operator\">=</span><span class=\"token string\">\"What do you want other to call you?\"</span><span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"question-circle-o\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n          hasFeedback\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'nickname'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your nickname!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Habitual Residence\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'residence'</span><span class=\"token punctuation\">,</span> {\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your habitual residence!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Cascader options<span class=\"token operator\">=</span>{residences} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Phone Number\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'phone'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your phone number!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Input addonBefore<span class=\"token operator\">=</span>{prefixSelector} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Captcha\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"We must make sure that your are a human.\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Row gutter<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>}<span class=\"token operator\">></span>\n              {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'captcha'</span><span class=\"token punctuation\">,</span> {\n                rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input the captcha you got!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n              }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n                <span class=\"token operator\">&lt;</span>Input size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token punctuation\">)</span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Button size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>Get captcha<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>tailFormItemLayout} style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }}<span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'agreement'</span><span class=\"token punctuation\">,</span> {\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Checkbox<span class=\"token operator\">></span>I had read the <span class=\"token operator\">&lt;</span>a<span class=\"token operator\">></span>agreement<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Checkbox<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>tailFormItemLayout}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>Register<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>RegistrationForm <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;
	  var Option = _antd.Select.Option;
	  var residences = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men'
	      }]
	    }]
	  }];

	  var RegistrationForm = _antd.Form.create()(React.createClass({
	    displayName: "RegistrationForm",
	    getInitialState: function getInitialState() {
	      return {
	        passwordDirty: false
	      };
	    },
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFieldsAndScroll(function (err, values) {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
	    handlePasswordBlur: function handlePasswordBlur(e) {
	      var value = e.target.value;
	      this.setState({
	        passwordDirty: this.state.passwordDirty || !!value
	      });
	    },
	    checkPassword: function checkPassword(rule, value, callback) {
	      var form = this.props.form;

	      if (value && value !== form.getFieldValue('password')) {
	        callback('Two passwords that you enter is inconsistent!');
	      } else {
	        callback();
	      }
	    },
	    checkConfirm: function checkConfirm(rule, value, callback) {
	      var form = this.props.form;

	      if (value && this.state.passwordDirty) {
	        form.validateFields(['confirm'], {
	          force: true
	        });
	      }

	      callback();
	    },
	    render: function render() {
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      var formItemLayout = {
	        labelCol: {
	          span: 6
	        },
	        wrapperCol: {
	          span: 14
	        }
	      };
	      var tailFormItemLayout = {
	        wrapperCol: {
	          span: 14,
	          offset: 6
	        }
	      };
	      var prefixSelector = getFieldDecorator('prefix', {
	        initialValue: '86'
	      })(React.createElement(
	        _antd.Select,
	        {
	          className: "icp-selector"
	        },
	        React.createElement(
	          Option,
	          {
	            value: "86"
	          },
	          "+86"
	        )
	      ));
	      return React.createElement(
	        _antd.Form,
	        {
	          onSubmit: this.handleSubmit
	        },
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "E-mail",
	            hasFeedback: true
	          }),
	          getFieldDecorator('email', {
	            rules: [{
	              type: 'email',
	              message: 'The input is not valid E-mail!'
	            }, {
	              required: true,
	              message: 'Please input your E-mail!'
	            }]
	          })(React.createElement(_antd.Input, null))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Password",
	            hasFeedback: true
	          }),
	          getFieldDecorator('password', {
	            rules: [{
	              required: true,
	              message: 'Please input your password!'
	            }, {
	              validator: this.checkConfirm
	            }]
	          })(React.createElement(_antd.Input, {
	            type: "password",
	            onBlur: this.handlePasswordBlur
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Confirm Password",
	            hasFeedback: true
	          }),
	          getFieldDecorator('confirm', {
	            rules: [{
	              required: true,
	              message: 'Please confirm your password!'
	            }, {
	              validator: this.checkPassword
	            }]
	          })(React.createElement(_antd.Input, {
	            type: "password"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: React.createElement(
	              "span",
	              null,
	              "Nickname ",
	              React.createElement(
	                _antd.Tooltip,
	                {
	                  title: "What do you want other to call you?"
	                },
	                React.createElement(_antd.Icon, {
	                  type: "question-circle-o"
	                })
	              )
	            ),
	            hasFeedback: true
	          }),
	          getFieldDecorator('nickname', {
	            rules: [{
	              required: true,
	              message: 'Please input your nickname!'
	            }]
	          })(React.createElement(_antd.Input, null))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Habitual Residence"
	          }),
	          getFieldDecorator('residence', {
	            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
	            rules: [{
	              type: 'array',
	              required: true,
	              message: 'Please select your habitual residence!'
	            }]
	          })(React.createElement(_antd.Cascader, {
	            options: residences
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Phone Number"
	          }),
	          getFieldDecorator('phone', {
	            rules: [{
	              required: true,
	              message: 'Please input your phone number!'
	            }]
	          })(React.createElement(_antd.Input, {
	            addonBefore: prefixSelector
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Captcha",
	            extra: "We must make sure that your are a human."
	          }),
	          React.createElement(
	            _antd.Row,
	            {
	              gutter: 8
	            },
	            React.createElement(
	              _antd.Col,
	              {
	                span: 12
	              },
	              getFieldDecorator('captcha', {
	                rules: [{
	                  required: true,
	                  message: 'Please input the captcha you got!'
	                }]
	              })(React.createElement(_antd.Input, {
	                size: "large"
	              }))
	            ),
	            React.createElement(
	              _antd.Col,
	              {
	                span: 12
	              },
	              React.createElement(
	                _antd.Button,
	                {
	                  size: "large"
	                },
	                "Get captcha"
	              )
	            )
	          )
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, tailFormItemLayout, {
	            style: {
	              marginBottom: 8
	            }
	          }),
	          getFieldDecorator('agreement', {
	            valuePropName: 'checked'
	          })(React.createElement(
	            _antd.Checkbox,
	            null,
	            "I had read the ",
	            React.createElement(
	              "a",
	              null,
	              "agreement"
	            )
	          ))
	        ),
	        React.createElement(
	          FormItem,
	          tailFormItemLayout,
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit",
	              size: "large"
	            },
	            "Register"
	          )
	        )
	      );
	    }
	  }));

	  return React.createElement(RegistrationForm, null);
	},
	  "style": "#components-form-demo-register .icp-selector {\n  width: 60px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-register</span> <span class=\"token class\">.icp-selector</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">60</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        [
	          "code",
	          "antd@2.0"
	        ],
	        " 之后，时间类组件的 ",
	        [
	          "code",
	          "value"
	        ],
	        " 改为 ",
	        [
	          "code",
	          "moment"
	        ],
	        " 类型，所以在提交前需要预处理。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "After ",
	        [
	          "code",
	          "antd@2.0"
	        ],
	        ", the ",
	        [
	          "code",
	          "value"
	        ],
	        " of time-related components had been changed to ",
	        [
	          "code",
	          "moment"
	        ],
	        ". So, we need to pre-process those values."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "时间类控件",
	      "en-US": "Time-related Controls"
	    },
	    "filename": "components/form/demo/time-related-controls.md",
	    "id": "components-form-demo-time-related-controls"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> TimePicker<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> MonthPicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>MonthPicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> TimeRelatedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> fieldsValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> {\n        return<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n\n      <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Should format date value before submit<span class=\"token punctuation\">.</span>\n      <span class=\"token keyword\">const</span> rangeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">const</span> rangeTimeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">const</span> values <span class=\"token operator\">=</span> {\n        <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>fieldsValue<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token comment\" spellcheck=\"true\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> {\n      labelCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }<span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> config <span class=\"token operator\">=</span> {\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ type<span class=\"token punctuation\">:</span> <span class=\"token string\">'object'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> rangeConfig <span class=\"token operator\">=</span> {\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{ type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>DatePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n        {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>DatePicker showTime format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"MonthPicker\"</span>\n        <span class=\"token operator\">></span>\n        {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>MonthPicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker\"</span>\n        <span class=\"token operator\">></span>\n        {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>RangePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n        {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>RangePicker showTime format<span class=\"token operator\">=</span><span class=\"token string\">\"YYYY-MM-DD HH:mm:ss\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"TimePicker\"</span>\n        <span class=\"token operator\">></span>\n        {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>TimePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>Submit<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>TimeRelatedForm <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;
	  var MonthPicker = _antd.DatePicker.MonthPicker;
	  var RangePicker = _antd.DatePicker.RangePicker;

	  var TimeRelatedForm = _antd.Form.create()(React.createClass({
	    displayName: "TimeRelatedForm",
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFields(function (err, fieldsValue) {
	        if (err) {
	          return;
	        } // Should format date value before submit.


	        var rangeValue = fieldsValue['range-picker'];
	        var rangeTimeValue = fieldsValue['range-time-picker'];

	        var values = _extends({}, fieldsValue, {
	          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
	          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
	          'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
	          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
	          'range-time-picker': [rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')],
	          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
	        });

	        console.log('Received values of form: ', values);
	      });
	    },
	    render: function render() {
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      var formItemLayout = {
	        labelCol: {
	          span: 8
	        },
	        wrapperCol: {
	          span: 16
	        }
	      };
	      var config = {
	        rules: [{
	          type: 'object',
	          required: true,
	          message: 'Please select time!'
	        }]
	      };
	      var rangeConfig = {
	        rules: [{
	          type: 'array',
	          required: true,
	          message: 'Please select time!'
	        }]
	      };
	      return React.createElement(
	        _antd.Form,
	        {
	          onSubmit: this.handleSubmit
	        },
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "DatePicker"
	          }),
	          getFieldDecorator('date-picker', config)(React.createElement(_antd.DatePicker, null))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "DatePicker[showTime]"
	          }),
	          getFieldDecorator('date-time-picker', config)(React.createElement(_antd.DatePicker, {
	            showTime: true,
	            format: "YYYY-MM-DD HH:mm:ss"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "MonthPicker"
	          }),
	          getFieldDecorator('month-picker', config)(React.createElement(MonthPicker, null))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "RangePicker"
	          }),
	          getFieldDecorator('range-picker', rangeConfig)(React.createElement(RangePicker, null))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "RangePicker[showTime]"
	          }),
	          getFieldDecorator('range-time-picker', rangeConfig)(React.createElement(RangePicker, {
	            showTime: true,
	            format: "YYYY-MM-DD HH:mm:ss"
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "TimePicker"
	          }),
	          getFieldDecorator('time-picker', config)(React.createElement(_antd.TimePicker, null))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            wrapperCol: {
	              span: 16,
	              offset: 8
	            }
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit",
	              size: "large"
	            },
	            "Submit"
	          )
	        )
	      );
	    }
	  }));

	  return React.createElement(TimeRelatedForm, null);
	}
	};

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "以上演示没有出现的表单控件对应的校验演示。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Demostration for validataion configuration for form controls which are not show in the above demos."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 11,
	    "title": {
	      "zh-CN": "校验其他组件",
	      "en-US": "Other Form Controls"
	    },
	    "filename": "components/form/demo/validate-other.md",
	    "id": "components-form-demo-validate-other"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import {\n  Form<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span><span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span>\n  Slider<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span>\n} from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioButton <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Button<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!err<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">normFile</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>Array<span class=\"token punctuation\">.</span><span class=\"token function\">isArray</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n      return e<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    return e <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> e<span class=\"token punctuation\">.</span>fileList<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> {\n      labelCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }<span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form onSubmit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Nation\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-form-text\"</span><span class=\"token operator\">></span>China<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              { required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your country!'</span> }<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select a country\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"china\"</span><span class=\"token operator\">></span>China<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"use\"</span><span class=\"token operator\">></span>U<span class=\"token punctuation\">.</span>S<span class=\"token punctuation\">.</span>A<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select[multiple]\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select-multiple'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              { required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your favourite colors!'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span> }<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> multiple placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select favourite colors\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"red\"</span><span class=\"token operator\">></span>Red<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"green\"</span><span class=\"token operator\">></span>Green<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"blue\"</span><span class=\"token operator\">></span>Blue<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"InputNumber\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'input-number'</span><span class=\"token punctuation\">,</span> { initialValue<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span> }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>InputNumber min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">10</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-form-text\"</span><span class=\"token operator\">></span> machines<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Switch\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'switch'</span><span class=\"token punctuation\">,</span> { valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span> }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Slider\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'slider'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Slider marks<span class=\"token operator\">=</span>{{ <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'A'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'B'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">40</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'D'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">80</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'E'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'F'</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Group\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-group'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>RadioGroup<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>item <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span><span class=\"token operator\">></span>item <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>item <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Button\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-button'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>RadioGroup<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>item <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span><span class=\"token operator\">></span>item <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>item <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Upload\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"longgggggggggggggggggggggggggggggggggg\"</span>\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload'</span><span class=\"token punctuation\">,</span> {\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'fileList'</span><span class=\"token punctuation\">,</span>\n            normalize<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>normFile<span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Upload name<span class=\"token operator\">=</span><span class=\"token string\">\"logo\"</span> action<span class=\"token operator\">=</span><span class=\"token string\">\"/upload.do\"</span> listType<span class=\"token operator\">=</span><span class=\"token string\">\"picture\"</span> onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleUpload}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"upload\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span> Click <span class=\"token keyword\">to</span> upload\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Upload<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> htmlType<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span><span class=\"token operator\">></span>Submit<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;
	  var Option = _antd.Select.Option;
	  var RadioButton = _antd.Radio.Button;
	  var RadioGroup = _antd.Radio.Group;

	  var Demo = _antd.Form.create()(React.createClass({
	    displayName: "Demo",
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFields(function (err, values) {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
	    normFile: function normFile(e) {
	      if (Array.isArray(e)) {
	        return e;
	      }

	      return e && e.fileList;
	    },
	    render: function render() {
	      var getFieldDecorator = this.props.form.getFieldDecorator;
	      var formItemLayout = {
	        labelCol: {
	          span: 6
	        },
	        wrapperCol: {
	          span: 14
	        }
	      };
	      return React.createElement(
	        _antd.Form,
	        {
	          onSubmit: this.handleSubmit
	        },
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Nation"
	          }),
	          React.createElement(
	            "span",
	            {
	              className: "ant-form-text"
	            },
	            "China"
	          )
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Select",
	            hasFeedback: true
	          }),
	          getFieldDecorator('select', {
	            rules: [{
	              required: true,
	              message: 'Please select your country!'
	            }]
	          })(React.createElement(
	            _antd.Select,
	            {
	              placeholder: "Please select a country"
	            },
	            React.createElement(
	              Option,
	              {
	                value: "china"
	              },
	              "China"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "use"
	              },
	              "U.S.A"
	            )
	          ))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Select[multiple]"
	          }),
	          getFieldDecorator('select-multiple', {
	            rules: [{
	              required: true,
	              message: 'Please select your favourite colors!',
	              type: 'array'
	            }]
	          })(React.createElement(
	            _antd.Select,
	            {
	              multiple: true,
	              placeholder: "Please select favourite colors"
	            },
	            React.createElement(
	              Option,
	              {
	                value: "red"
	              },
	              "Red"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "green"
	              },
	              "Green"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "blue"
	              },
	              "Blue"
	            )
	          ))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "InputNumber"
	          }),
	          getFieldDecorator('input-number', {
	            initialValue: 3
	          })(React.createElement(_antd.InputNumber, {
	            min: 1,
	            max: 10
	          })),
	          React.createElement(
	            "span",
	            {
	              className: "ant-form-text"
	            },
	            " machines"
	          )
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Switch"
	          }),
	          getFieldDecorator('switch', {
	            valuePropName: 'checked'
	          })(React.createElement(_antd.Switch, null))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Slider"
	          }),
	          getFieldDecorator('slider')(React.createElement(_antd.Slider, {
	            marks: {
	              0: 'A',
	              20: 'B',
	              40: 'C',
	              60: 'D',
	              80: 'E',
	              100: 'F'
	            }
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Radio.Group"
	          }),
	          getFieldDecorator('radio-group')(React.createElement(
	            RadioGroup,
	            null,
	            React.createElement(
	              _antd.Radio,
	              {
	                value: "a"
	              },
	              "item 1"
	            ),
	            React.createElement(
	              _antd.Radio,
	              {
	                value: "b"
	              },
	              "item 2"
	            ),
	            React.createElement(
	              _antd.Radio,
	              {
	                value: "c"
	              },
	              "item 3"
	            )
	          ))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Radio.Button"
	          }),
	          getFieldDecorator('radio-button')(React.createElement(
	            RadioGroup,
	            null,
	            React.createElement(
	              RadioButton,
	              {
	                value: "a"
	              },
	              "item 1"
	            ),
	            React.createElement(
	              RadioButton,
	              {
	                value: "b"
	              },
	              "item 2"
	            ),
	            React.createElement(
	              RadioButton,
	              {
	                value: "c"
	              },
	              "item 3"
	            )
	          ))
	        ),
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Upload",
	            extra: "longgggggggggggggggggggggggggggggggggg"
	          }),
	          getFieldDecorator('upload', {
	            valuePropName: 'fileList',
	            normalize: this.normFile
	          })(React.createElement(
	            _antd.Upload,
	            {
	              name: "logo",
	              action: "/upload.do",
	              listType: "picture",
	              onChange: this.handleUpload
	            },
	            React.createElement(
	              _antd.Button,
	              null,
	              React.createElement(_antd.Icon, {
	                type: "upload"
	              }),
	              " Click to upload"
	            )
	          ))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            wrapperCol: {
	              span: 12,
	              offset: 6
	            }
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              htmlType: "submit"
	            },
	            "Submit"
	          )
	        )
	      );
	    }
	  }));

	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "我们为表单控件定义了三种校验状态，为 ",
	        [
	          "code",
	          "<FormItem>"
	        ],
	        " 定义 ",
	        [
	          "code",
	          "validateStatus"
	        ],
	        " 属性即可。"
	      ],
	      [
	        "p",
	        "validateStatus: 'success', 'warning', 'error', 'validating'。"
	      ],
	      [
	        "p",
	        "另外为输入框添加反馈图标，设置 ",
	        [
	          "code",
	          "<FormItem>"
	        ],
	        " 的 ",
	        [
	          "code",
	          "hasFeedback"
	        ],
	        " 属性值为 ",
	        [
	          "code",
	          "true"
	        ],
	        " 即可。"
	      ],
	      [
	        "p",
	        [
	          "strong",
	          "注意"
	        ],
	        ": 反馈图标只对 ",
	        [
	          "code",
	          "<Input />"
	        ],
	        " 有效。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "We provide three kinds of validation status for form. You can use it just define ",
	        [
	          "code",
	          "validateStatus"
	        ],
	        " property on ",
	        [
	          "code",
	          "<FormItem>"
	        ],
	        "."
	      ],
	      [
	        "p",
	        "validateStatus: 'success', 'warning', 'error', 'validating'。"
	      ],
	      [
	        "p",
	        "To set ",
	        [
	          "code",
	          "hasFeedback"
	        ],
	        " property to ",
	        [
	          "code",
	          "true"
	        ],
	        " enable to display feed icon of input control."
	      ],
	      [
	        "p",
	        [
	          "strong",
	          "PS"
	        ],
	        ": Feed icon is just available for ",
	        [
	          "code",
	          "<Input />"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "zh-CN": "校验提示",
	      "en-US": "Validation message"
	    },
	    "filename": "components/form/demo/validate-static.md",
	    "id": "components-form-demo-validate-static"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Form<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>FormItem\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Fail\"</span>\n      labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n      wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }}\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n      help<span class=\"token operator\">=</span><span class=\"token string\">\"Should be combination of numbers &amp; alphabets\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"unavailable choice\"</span> id<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span>\n      labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n      wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }}\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span> id<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Validating\"</span>\n      labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n      wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }}\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"validating\"</span>\n      help<span class=\"token operator\">=</span><span class=\"token string\">\"The information is being validated...\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"I'm the content is being validated\"</span> id<span class=\"token operator\">=</span><span class=\"token string\">\"validating\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Success\"</span>\n      labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n      wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }}\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"I'm the content\"</span> id<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span>\n      labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n      wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }}\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span> id<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Fail\"</span>\n      labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n      wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }}\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n      help<span class=\"token operator\">=</span><span class=\"token string\">\"Should be combination of numbers &amp; alphabets\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"unavailable choice\"</span> id<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span>\n      labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n      help\n    <span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> help<span class=\"token operator\">=</span><span class=\"token string\">\"Please select the correct date\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>DatePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>p className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-form-split\"</span><span class=\"token operator\">></span><span class=\"token operator\">-</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>DatePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var FormItem = _antd.Form.Item;
	  return React.createElement(
	    _antd.Form,
	    null,
	    React.createElement(
	      FormItem,
	      {
	        label: "Fail",
	        labelCol: {
	          span: 5
	        },
	        wrapperCol: {
	          span: 12
	        },
	        validateStatus: "error",
	        help: "Should be combination of numbers & alphabets"
	      },
	      React.createElement(_antd.Input, {
	        placeholder: "unavailable choice",
	        id: "error"
	      })
	    ),
	    React.createElement(
	      FormItem,
	      {
	        label: "Warning",
	        labelCol: {
	          span: 5
	        },
	        wrapperCol: {
	          span: 12
	        },
	        validateStatus: "warning"
	      },
	      React.createElement(_antd.Input, {
	        placeholder: "Warning",
	        id: "warning"
	      })
	    ),
	    React.createElement(
	      FormItem,
	      {
	        label: "Validating",
	        labelCol: {
	          span: 5
	        },
	        wrapperCol: {
	          span: 12
	        },
	        hasFeedback: true,
	        validateStatus: "validating",
	        help: "The information is being validated..."
	      },
	      React.createElement(_antd.Input, {
	        placeholder: "I'm the content is being validated",
	        id: "validating"
	      })
	    ),
	    React.createElement(
	      FormItem,
	      {
	        label: "Success",
	        labelCol: {
	          span: 5
	        },
	        wrapperCol: {
	          span: 12
	        },
	        hasFeedback: true,
	        validateStatus: "success"
	      },
	      React.createElement(_antd.Input, {
	        placeholder: "I'm the content",
	        id: "success"
	      })
	    ),
	    React.createElement(
	      FormItem,
	      {
	        label: "Warning",
	        labelCol: {
	          span: 5
	        },
	        wrapperCol: {
	          span: 12
	        },
	        hasFeedback: true,
	        validateStatus: "warning"
	      },
	      React.createElement(_antd.Input, {
	        placeholder: "Warning",
	        id: "warning"
	      })
	    ),
	    React.createElement(
	      FormItem,
	      {
	        label: "Fail",
	        labelCol: {
	          span: 5
	        },
	        wrapperCol: {
	          span: 12
	        },
	        hasFeedback: true,
	        validateStatus: "error",
	        help: "Should be combination of numbers & alphabets"
	      },
	      React.createElement(_antd.Input, {
	        placeholder: "unavailable choice",
	        id: "error"
	      })
	    ),
	    React.createElement(
	      FormItem,
	      {
	        label: "inline",
	        labelCol: {
	          span: 5
	        },
	        help: true
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: "6"
	        },
	        React.createElement(
	          FormItem,
	          {
	            validateStatus: "error",
	            help: "Please select the correct date"
	          },
	          React.createElement(_antd.DatePicker, null)
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: "1"
	        },
	        React.createElement(
	          "p",
	          {
	            className: "ant-form-split"
	          },
	          "-"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: "6"
	        },
	        React.createElement(
	          FormItem,
	          null,
	          React.createElement(_antd.DatePicker, null)
	        )
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 840:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "Form.create"
	        ],
	        " 处理后的表单具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择不使用 ",
	        [
	          "code",
	          "Form.create"
	        ],
	        " 并自行处理数据。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "Form.create"
	        ],
	        " will collect and validate form data automatically. But if you don't need this feature or the default behaviour cannot satisfy your business, you can drop ",
	        [
	          "code",
	          "Form.create"
	        ],
	        " and handle form data manually."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "自行处理表单数据",
	      "en-US": "Handle Form Data Manually"
	    },
	    "filename": "components/form/demo/without-form-create.md",
	    "id": "components-form-demo-without-form-create"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Form<span class=\"token punctuation\">,</span> InputNumber } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>number<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>number <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">11</span><span class=\"token punctuation\">)</span> {\n    return {\n      validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span>\n      errorMsg<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return {\n    validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n    errorMsg<span class=\"token punctuation\">:</span> <span class=\"token string\">'The prime between 8 and 12 is 11!'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nclass RawForm extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    number<span class=\"token punctuation\">:</span> {\n      value<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  handleNumberChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      number<span class=\"token punctuation\">:</span> {\n        <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> {\n      labelCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">7</span> }<span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> { span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> number <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>number<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> tips <span class=\"token operator\">=</span> <span class=\"token string\">'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>formItemLayout}\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Prime between 8 &amp; 12\"</span>\n          validateStatus<span class=\"token operator\">=</span>{number<span class=\"token punctuation\">.</span>validateStatus}\n          help<span class=\"token operator\">=</span>{number<span class=\"token punctuation\">.</span>errorMsg || tips}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>InputNumber\n            min<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}\n            max<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>}\n            value<span class=\"token operator\">=</span>{number<span class=\"token punctuation\">.</span>value}\n            onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleNumberChange}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>RawForm <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var FormItem = _antd.Form.Item;

	  function validatePrimeNumber(number) {
	    if (number === 11) {
	      return {
	        validateStatus: 'success',
	        errorMsg: null
	      };
	    }

	    return {
	      validateStatus: 'error',
	      errorMsg: 'The prime between 8 and 12 is 11!'
	    };
	  }

	  var RawForm = function (_React$Component) {
	    _inherits(RawForm, _React$Component);

	    function RawForm() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, RawForm);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        number: {
	          value: 11
	        }
	      }, _this.handleNumberChange = function (value) {
	        _this.setState({
	          number: _extends({}, validatePrimeNumber(value), {
	            value: value
	          })
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    RawForm.prototype.render = function render() {
	      var formItemLayout = {
	        labelCol: {
	          span: 7
	        },
	        wrapperCol: {
	          span: 12
	        }
	      };
	      var number = this.state.number;
	      var tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
	      return React.createElement(
	        _antd.Form,
	        null,
	        React.createElement(
	          FormItem,
	          _extends({}, formItemLayout, {
	            label: "Prime between 8 & 12",
	            validateStatus: number.validateStatus,
	            help: number.errorMsg || tips
	          }),
	          React.createElement(_antd.InputNumber, {
	            min: 8,
	            max: 12,
	            value: number.value,
	            onChange: this.handleNumberChange
	          })
	        )
	      );
	    };

	    return RawForm;
	  }(React.Component);

	  return React.createElement(RawForm, null);
	}
	};

/***/ },

/***/ 1212:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'advanced-search': __webpack_require__(827),
	    'coordinated': __webpack_require__(828),
	    'customized-form-controls': __webpack_require__(829),
	    'dynamic-form-item': __webpack_require__(830),
	    'form-in-modal': __webpack_require__(831),
	    'global-state': __webpack_require__(832),
	    'horizontal-login': __webpack_require__(833),
	    'layout': __webpack_require__(834),
	    'normal-login': __webpack_require__(835),
	    'register': __webpack_require__(836),
	    'time-related-controls': __webpack_require__(837),
	    'validate-other': __webpack_require__(838),
	    'validate-static': __webpack_require__(839),
	    'without-form-create': __webpack_require__(840),
	}

/***/ }

});