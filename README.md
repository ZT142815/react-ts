# 项目搭建 
## 初始化项目
    创建package.json文件
    npm init
## 创建.gitignore文件
    方法一：
    touch .gitigonre
    这个文件就是忽略文件的变动，在git提交的时候只提交没有被忽略的文件
    方法二：
    下载vscode插件：gitignore
    command+shift+p召唤命令面板
    输入Add gitignore

    添加配置，我们在项目中一般配置为：
    可以根据自身需要来配置
    node_modules
    dist
    build
    .vscode
    .Ds_Store
## 创建.npmrc文件
    npm文件主要用来设置项目的npm源，不在需要每个开发本地设置
    一般配置为：
    registry=https://registry.npm.taobao.org/
## 配置EditorConfig：统一编辑器风格
    创建.eidtorconfig文件，安装EditorConfig for VS Code插件：快捷操作：command+shift+p召唤命令面板 输入：Generate .editorcofig
    配置及说明
    indent_style = space  缩进风格，可选配置有tab和space
    indent_size = 2    缩进大小，可选1-8
    charset = utf8    编码格式，通常是utf8
    trim_trailing_whitespace = true    去除多余的空格
    insert_final_newline = true    在尾部插入一行
    end_of_line = lf   换行符
## 配置prettier：统一代码风格
    1、安装依赖包
      yarn add prettier -D
    2、创建.prettierrc文件，添加配置
      {
        "trailingComma": "all",   对象的最后一个属性末尾加逗号
        "tabWidth": 2,    缩进大小
        "semi": false,    是否添加分号
        "singleQuote": true,    是否单引号
        "jsxSingleQuote" : true   jsx是否单引号
        "endOfLine": "lf",    这个配置和editorconfig保持一致
        "printWidth": 120,    单行代码最长字符长度
        "bracketSpacing": true,   在对象的括号中打印空格
        "arrowParens": "always"   箭头函数参数需要加括号
      }
    3、配置为项目单独使用不受系统影响
      安装Prettier - Code formatter
      在项目根目录下面新建一个.vscode文件夹，文件夹中新建settings.json 文件，配置如下
      { 
        // 指定哪些文件不参与搜索
        "search.exclude": {
          "**/node_modules": true,
          "dist": true,
          "yarn.lock": true
        },
        "editor.formatOnSave": true,
        "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[javascriptreact]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[typescriptreact]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[json]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[html]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[markdown]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[css]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[less]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[scss]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
        }
      }
## 配置eslint
### 1、安装eslint
  yarn add eslint -D
  npx eslint --init
  如何选择？
  How would you like to use ESLint？
    选择check syntax only
  What type of modules does your project use?
    选择JavaScript modules (import/export)
  Where does your code run?
    选择Browser Node
  安装完之后会出现Failed to load plugin '@typescript-eslint' declared in 'git-zt/react-ts/.eslintrc.js'这个报错
  在配置文件里面讲plugins下面的'@typescript-eslint'删掉
### 2、配置.eslintrc.js文件
  {
    //将eslint限制到一个特定的项目
    root: true,
    //检测es6代码
    parser: 'babel-esling',
    parserOptions: {
      //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
      sourceType: 'module',
    },
    env: {
      browser: true,
    },
    rules: {

    }
  }
  #### rule配置

    "off"或者0    //关闭规则关闭
    "warn"或者1    //在打开的规则作为警告（不影响退出代码）
    "error"或者2

    "no-alert": 0,//禁止使用alert confirm prompt
    "no-array-constructor": 2,//禁止使用数组构造器
    "no-bitwise": 0,//禁止使用按位运算符
    "no-caller": 1,//禁止使用arguments.caller或arguments.callee
    "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
    "no-class-assign": 2,//禁止给类赋值
    "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
    "no-console": 2,//禁止使用console
    "no-const-assign": 2,//禁止修改const声明的变量
    "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
    "no-continue": 0,//禁止使用continue
    "no-control-regex": 2,//禁止在正则表达式中使用控制字符
    "no-debugger": 2,//禁止使用debugger
    "no-delete-var": 2,//不能对var声明的变量使用delete操作符
    "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
    "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2,//函数参数不能重复
    "no-duplicate-case": 2,//switch中的case标签不能重复
    "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
    "no-empty": 2,//块语句中的内容不能为空
    "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
    "no-empty-label": 2,//禁止使用空label
    "no-eq-null": 2,//禁止对null使用==或!=运算符
    "no-eval": 1,//禁止使用eval
    "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
    "no-extend-native": 2,//禁止扩展native对象
    "no-extra-bind": 2,//禁止不必要的函数绑定
    "no-extra-boolean-cast": 2,//禁止不必要的bool转换
    "no-extra-parens": 2,//禁止非必要的括号
    "no-extra-semi": 2,//禁止多余的冒号
    "no-fallthrough": 1,//禁止switch穿透
    "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
    "no-func-assign": 2,//禁止重复的函数声明
    "no-implicit-coercion": 1,//禁止隐式转换
    "no-implied-eval": 2,//禁止使用隐式eval
    "no-inline-comments": 0,//禁止行内备注
    "no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
    "no-invalid-regexp": 2,//禁止无效的正则表达式
    "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
    "no-irregular-whitespace": 2,//不能有不规则的空格
    "no-iterator": 2,//禁止使用__iterator__ 属性
    "no-label-var": 2,//label名不能与var声明的变量名相同
    "no-labels": 2,//禁止标签声明
    "no-lone-blocks": 2,//禁止不必要的嵌套块
    "no-lonely-if": 2,//禁止else语句内只有if语句
    "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-mixed-requires": [0, false],//声明时不能混用声明类型
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    "linebreak-style": [0, "windows"],//换行风格
    "no-multi-spaces": 1,//不能用多余的空格
    "no-multi-str": 2,//字符串不能用\换行
    "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    "no-native-reassign": 2,//不能重写native对象
    "no-negated-in-lhs": 2,//in 操作符的左边不能有!
    "no-nested-ternary": 0,//禁止使用嵌套的三目运算
    "no-new": 1,//禁止在使用new构造一个实例后不赋值
    "no-new-func": 1,//禁止使用new Function
    "no-new-object": 2,//禁止使用new Object()
    "no-new-require": 2,//禁止使用new require
    "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
    "no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
    "no-octal": 2,//禁止使用八进制数字
    "no-octal-escape": 2,//禁止使用八进制转义序列
    "no-param-reassign": 2,//禁止给参数重新赋值
    "no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
    "no-plusplus": 0,//禁止使用++，--
    "no-process-env": 0,//禁止使用process.env
    "no-process-exit": 0,//禁止使用process.exit()
    "no-proto": 2,//禁止使用__proto__属性
    "no-redeclare": 2,//禁止重复声明变量
    "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
    "no-return-assign": 1,//return 语句中不能有赋值表达式
    "no-script-url": 0,//禁止使用javascript:void(0)
    "no-self-compare": 2,//不能比较自身
    "no-sequences": 0,//禁止使用逗号运算符
    "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
    "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
    "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
    "no-sync": 0,//nodejs 禁止同步方法
    "no-ternary": 0,//禁止使用三目运算符
    "no-trailing-spaces": 1,//一行结束后面不要有空格
    "no-this-before-super": 0,//在调用super()之前不能使用this或super
    "no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
    "no-undef": 1,//不能有未定义的变量
    "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
    "no-undefined": 2,//不能使用undefined
    "no-unexpected-multiline": 2,//避免多行表达式
    "no-underscore-dangle": 1,//标识符不能以_开头或结尾
    "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-unreachable": 2,//不能有无法执行的代码
    "no-unused-expressions": 2,//禁止无用的表达式
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "no-use-before-define": 2,//未定义前不能使用
    "no-useless-call": 2,//禁止不必要的call和apply
    "no-void": 2,//禁用void操作符
    "no-var": 0,//禁用var，用let和const代替
    "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
    "no-with": 2,//禁用with
    
    "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
    "arrow-parens": 0,//箭头函数用小括号括起来
    "arrow-spacing": 0,//=>的前/后括号
    "accessor-pairs": 0,//在对象中使用getter/setter
    "block-scoped-var": 0,//块语句中使用var
    "brace-style": [1, "1tbs"],//大括号风格
    "callback-return": 1,//避免多次调用回调什么的
    "camelcase": 2,//强制驼峰法命名
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "comma-spacing": 0,//逗号前后的空格
    "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
    "complexity": [0, 11],//循环复杂度
    "computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
    "consistent-return": 0,//return 后面是否允许省略
    "consistent-this": [2, "that"],//this别名
    "constructor-super": 0,//非派生类不能调用super，派生类必须调用super
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "default-case": 2,//switch语句最后必须有default
    "dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
    "dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
    "eol-last": 0,//文件以单一的换行符结束
    "eqeqeq": 2,//必须使用全等
    "func-names": 0,//函数表达式必须有名字
    "func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
    "generator-star-spacing": 0,//生成器函数*的前后空格
    "guard-for-in": 0,//for in循环要用if语句过滤
    "handle-callback-err": 0,//nodejs 处理错误
    "id-length": 0,//变量名长度
    "indent": [2, 4],//缩进风格
    "init-declarations": 0,//声明时必须赋初值
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "lines-around-comment": 0,//行前/行后备注
    "max-depth": [0, 4],//嵌套块深度
    "max-len": [0, 80, 4],//字符串最大长度
    "max-nested-callbacks": [0, 2],//回调嵌套深度
    "max-params": [0, 3],//函数最多只能有3个参数
    "max-statements": [0, 10],//函数内最多有几个声明
    "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-parens": 2,//new时必须加小括号
    "newline-after-var": 2,//变量声明后是否需要空一行
    "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
    "object-shorthand": 0,//强制对象字面量缩写语法
    "one-var": 1,//连续声明
    "operator-assignment": [0, "always"],//赋值运算符 += -=什么的
    "operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
    "padded-blocks": 0,//块语句内行首行尾是否要空行
    "prefer-const": 0,//首选const
    "prefer-spread": 0,//首选展开运算
    "prefer-reflect": 0,//首选Reflect的方法
    "quotes": [1, "single"],//引号类型 `` "" ''
    "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
    "radix": 2,//parseInt必须指定第二个参数
    "id-match": 0,//命名检测
    "require-yield": 0,//生成器函数必须有yield
    "semi": [2, "always"],//语句强制分号结尾
    "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
    "sort-vars": 0,//变量声明时排序
    "space-after-keywords": [0, "always"],//关键字后面是否要空一格
    "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "space-in-parens": [0, "never"],//小括号里面要不要有空格
    "space-infix-ops": 0,//中缀操作符周围要不要有空格
    "space-return-throw-case": 2,//return throw case后面要不要加空格
    "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    "spaced-comment": 0,//注释风格要不要有空格什么的
    "strict": 2,//使用严格模式
    "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
    "valid-jsdoc": 0,//jsdoc规则
    "valid-typeof": 2,//必须使用合法的typeof的值
    "vars-on-top": 2,//var必须放在作用域顶部
    "wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
    "wrap-regex": 0,//正则表达式字面量用小括号包起来
    "yoda": [2, "never"]//禁止尤达条件
## 配置StyleLint：统一项目的样式代码风格
### 安装依赖，添加配置
  yarn add stylelint stylelint-config-standard -D
### 添加配置
  新建一个.stylelintrc.js文件，添加下面的配置
  module.exports = {
    //扩展，使用stylelint定义好的规则
    extends: ['stylelint-config-standard'],
    //具体的规则
    rules: {
      'comment-empty-line-before': null,
      'declaration-empty-line-before': null,
      'function-name-case': 'lower',
      'no-descending-specificity': null,
      'no-invalid-double-slash-comments': null,
      'rule-empty-line-before': 'always',
    },
    ignoreFiles: ['node_modules/**/*', 'build/**/*'],
  }
### 安装插件：stylelint
  在setting.json中添加下面代码
  {
    // 使用 stylelint 自身的校验即可
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
    
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
  }

## webpack配置
### 安装webpack
  我们在使用webpack之前，需要安装webpack和webpack-cli两个包
  webpack:用于编译javascript模块
  webpack-cli:用来在命令行中运行webpack
    yarn add webpack webpack-cli
### 创建配置文件夹
  在跟目录下面创建script文件，在script文件夹下面创建config文件夹用来放置webpack配置文件
  创建webpack.common.js文件
  为了区分开发环境和生产环境，我们需要创建webpack.dev.js和webpack.prod.js配置文件;
  在开发配置和生产配置中我们需要引入common配置，这个时候我们需要用到webpack-merge包；
  yarn add webpack-merge -D

  然后在webpack.dev.js中这样写；

    const { merge } = require('webpack.merge')
    const common = require('./webpack.commin.js')
    module.exports = merge( common,{
      mode: 'development'
    })

  在webpack.prod.js中这么写
    const { merge } = require('webpack.merge')
    const common = require('./webpack.commin.js')
    module.exports = merge( common,{
      mode: 'development'
    })

  下面我们可以创建npm命令：
  `"build":"webpack --config ./script/config/webpack.prod.js"`
  `"start":"webpack-dev-server --config ./script/config/webpack.dev.js"`
  

  
### webpack配置
  ### input output配置
    在webpack.common.js中添加配置
    entry：定义入口文件路径
    output：定义打包后的文件名和输出目录
      const path = require('path')
      module.exports = {
        entry: {
          app: path.resolve(__dirname, '../../src/app.ts'),
        },
        output: {
          filename: 'js/[name].[hash:8].js',
          path: path.resolve(__dirname, '../../dist'),
        },
      }
    
  ### 配置公共变量：cross-env
    cross-env可以跨平台设置和使用环境变量
    安装
    yarn add cross-env -D
    修改npm命令
    "build":"cross-env NODE_ENV=development webpack --config ./script/config/webpack.dev.js"
    "start":"cross-env NODE_ENV=production webpack --config ./script/config/webpack.prod.js"
    在script目录下创建一个constants.js目录用来保存公共变量
  ### 配置本地开发服务器和实时查看页面
    webpack-dev-server:可以本地起一个服务，通过简单配置可以指定端口和开启热更新
    html-webpack-plugin:每一个页面都是需要html的，这个插件帮助我们将打包后的文件自动引入到html中
    配置webpack-dev-server：
        devServer: {
          host: localhost   不配置默认是localhost
          port: 8080    指定端口，默认8080
          stats: 'errors-only', // 终端仅打印 error
          clientLogLevel: 'silent', // 日志等级
          compress: true, // 是否启用 gzip 压缩
          open: true, // 打开默认浏览器
          hot: true, // 热更新
        }
    配置html-webpack-plugin:
        plugins: [
          new HtmlWebpackPlugin({
            titel: "development",
            template: resolve(__dirname,'./index.html'),
            filename: 'index.html',
            cache: fale, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
            //压缩html
            minify: {
              collapseWhitespace: true,  //压缩空格
              removeComments: true,  //去除注释
            }
          })
        ]
  ### 配置devtool
    devtool中的一些配置，可以帮助我们将编译后的代码映射回原来的代码，这个对我们开发调试特别重要，但是不同的配置会影响到我们的构建速度和重新构建速度；
    因此通常我们在开发环境中这么配置：
      devtool: 'eval-source-map'
    在生产环节中我们不需要定位源码这个功能：
      devtool: 'none'

  ### 每次打包前清空之前的打包文件
    webapck5在output中新加了clean属性我们在common配置文件中加入clean属性
    clean: {
      keep: /dll/, //打包前清空之前的打包
    },

  ### 处理项目中的各种文件
  #### 用法
    文件处理我们写在module模块下的rules中：
    test用来匹配文件，对符合符合规则的文件做处理；
    use：可以是字符串、可以是数组、可以是对象
  #### 处理less文件
    处理css文件我们需要用到style-loader、css-loader、less-loader、postcss-loader(用来处理浏览器兼容问题)
      yarn add style-loader css-loader less-loader
    在common中添加配置：
      module: {
        rules: [
          {
            test: /\.css$/,
            use: {
              'style-loader',
              'css-loader',
              'postcss-loader',
              'less-loader',
            }
          }
        ]
      }
  #### 处理图片和字体文件
    处理图片和字体文件我们需要用到：file-loader、url-loader
      yarn add file-loader url-loader -D
    在common中添加配置：
      module: {
        rules: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: {
              loader: 'url-loader',
              option: {
                limit: 10 * 1024,
                name: '[name].[contenthash:8].[ext]',
                outputPath: 'assets/images'
              }
            }
          },
          {
            test: /\.(ttf|woff|woff2|eot|otf)$/,
            use: [
                    {
                      loader: 'url-loader',
                      options: {
                      name: '[name].[contenthash:8].[ext]',
                      outputPath: 'assets/fonts',
                    },
                  },
                ],
              },
            ]
          }

## 项目引入react
### 安装react
  安装react、react-dom
  yarn add react react-dom

### 添加处理js、jsx的loader
  安装babel-loader、@babel/core、@babel/preset-react
  yarn add babel-loader @babel/core @babel/preset-react
  1、在项目中新建.babelrc文件，添加配置
    {
      "presets": ["@babel/preset-react"]
    }
  2、在webpack.common.js文件中添加处理js、tsx文件的loader
    {
      test: /\.(tsx?|js)$/,
      loader: babel-loader,
      options: {cacheDirectory:true},
      exclude: /node_modules/,
    }

## 项目中引入type-script
  ### 安装ts和对应的babel插件
    yarn add typescript
    yarn add @babel/preset-typescript -D
  ### 添加配置
    在.babelrc中添加配置
      {
        "presets": ["@babel/preset-react", "@babel/preset-typescript"]
      }
  ### 添加react的类型声明
    yarn add @types/react @types/react-dom -D

## 插入webpack配置resolve
  extensions可以在引入的时候省略后缀名
  resolve: {
    extensions: ['.tsx','.ts','.js','.json']
  }

## 配置tsconfig.json文件
  tsconfig.json文件作用：
    1、编译指定的文件
    2、定义编译选项
  生成tsconsig.json文件
    tsc --init
  tsconfig.json文件配置解释：
    compilerOptions:用来配置编译选项；
    exclude:指定了不需要编译的文件
    include:指定需要编译的文件
  compilerOptions配置解释
    isolatedModules:可以提供额外的一些语法检查
    esModuleInterop:允许我们导入符合es6模块规范的commonjs模块
    baseUrl：
    paths：
## babel的更多配置
  1、我们现在编译完的代码依旧是es6的语法，但是有的浏览器是不支持es6的，那么我们就需要@babel/preset-env来给我们的代码转到目标浏览器环境了
  2、但是遇到Promise或者.includes这种新特性是没有办法转到es5的，这个时候我们就需要@babel/plugin-transform-runtime这个插件来实现；
    yarn add @babel/perset-env -D
    yarn add @babel/plugin-transform-runtime
  3、修改.babelrc的配置
    {
      "presets": [
        [
          "@babel/preset-env",
          {
            // 防止babel将任何模块类型都转译成CommonJS类型，导致tree-shaking失效问题
            "modules": false
          }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      "plungins": [
        [
          "@babel/plugin-transform-runtime",
          {
            "corejs": {
              "version": 3,
              "proposals": true
            },
            "useESModules": true
          }
        ]
      ]
    }

## webpack公共环境优化
  ### 拷贝公共静态资源
    使用copy-webpack-plugin插件时间
      yarn add copy-webpack-plugin -D
    修改webpack.common.js文件
      plugins: [
        new CopyPlugin({
          patterns: [
            {
              context: resolve(__dirname,'./plulic'),
              from: '*',
              to: resolve(__dirname,'./dist'),
              toType: 'dir'
            }
          ]
        })
      ]
  ### 显示编译进度
    使用webapckbar插件
      yarn add webpackbar -D
    修改webpack.common.js文件
      plugins: [
        new WebpackBar({
          name: isDev ? '正在启动' : '正在打包',
          color: 'red'
        })
      ]

  ### 代码编译阶段添加typescript类型检查
    使用fork-ts-checker-webapck-plugin
      yarn add fork-ts-checker-webapck-plugin -D
    修改webapck.common.js文件
      plugins: [
        new ForkTsCheckerWebpackPlugin({
          configFile: path.resolve(__dirname,'tsconfig.json')
        })
      
  ### 提高二次编译速度
    使用webpack内置的cache属性
    修改webpack.common.js文件
      cache: {
        type: "filesystem"
      }

  ### 减小打包体积
    我们在开发或者生产的时候，都要经过webpack将react、react-dom代码打进生成的代码中，我们可以使用cdn链接形式
    修改webpack.common.js文件
      externals: {
        'react': 'React',
        'react-dom': ReactDom,
      }
  ### 抽离公共代码
    抽离公共代码这一块可以看下面的文章：
    https://juejin.cn/post/6844904001792655373
    
## webpack开发环境优化
  ### 优化热更新
    1、将devServer下的hot属性设为true
    2、新增webpack.HotModuleReplacementPlugin插件
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
    3、修改入口文件
      if (module && module.hot) {
        module.hot.accept()
      }
      需要安装@types/webpack-env
      yarn add @types/webpack-env -D
  ### 配置代理，处理跨域
    1、创建接口代理配置文件setProxy.js
      const proxySettings = {
        // 接口代理1
        '/api/': {
          target: 'http://198.168.111.111:3001',
          changeOrigin: true,
        },
        // 接口代理2
        '/api-2/': {
          target: 'http://198.168.111.111:3002',
          changeOrigin: true,
          pathRewrite: {
            '^/api-2': '',
          },
        },
        // .....
      }
      module.exports = proxySettings
    2、在devServer中添加proxy配置
      proxy: {...proxySettings}

## webpack生产环境优化
  ### 抽离css样式
    下载插件mini-css-extract-plugin
      yarn add mini-css-extract-plugin -D
    修改webpack.common.js文件
      plugins: [
        !isDev && new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
          ignoreOrder: false
        })
      ]
  ### 去除无用样式
    需要用到插件：prugecss-webpack-plugin 和路径查找利器：glob
      yarn add prugecss-webpack-plugin glob -D
    修改webpack.prod.js文件
      plugins: [
        new PurgeCssPlugin({
          paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
          whitelist: ['html','body']
        })
      ]
  ### js代码压缩
    插件：terser-webpack-plugin
      yarn add terser-webpack-plugin -D
    修改webpack.common.js配置
      optimization: {
        minimize: !isDev,
        minimizer: [
          !idDev && new TerserPlugin({
            extractComments: false,
            terserOptions: {
              compress: {pure_funcs: ['console.log']}
            }
          })
        ].filter(Boolean),
      }
    minize:false表示不压缩代码
    extractCommnet：false表示去掉所注释
    pure_funcs：可以设置我们想要去除的函数
  ### css代码压缩
    插件：optimize-css-assets-webpack-plugin
      yarn add optimize-css-assets-webpack-plugin
    修改config.common.js配置
      optimization: {
        minizer: [
          !isDev && new OptimizeCssAssetsPlugin()
        ]
      }

## 项目报错解决
  ### 引入react hooks报错
    yarn add core-js@2 -D
    

    



      
  






  














    








