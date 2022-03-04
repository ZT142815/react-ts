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
## 配置EditorConfig
    创建.eidtorconfig文件，安装EditorConfig for VS Code插件：快捷操作：command+shift+p召唤命令面板 输入：Generate .editorcofig
    配置及说明
    indent_style = space  缩进风格，可选配置有tab和space
    indent_size = 2    缩进大小，可选1-8
    charset = utf8    编码格式，通常是utf8
    trim_trailing_whitespace = true    去除多余的空格
    insert_final_newline = true    在尾部插入一行
    end_of_line = lf   换行符
    







