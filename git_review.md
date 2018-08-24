- 话说好久没在github上面上传过代码，昨晚想上传来着，发现不会，吓得赶紧补了一下廖雪峰的[git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137396287703354d8c6c01c904c7d9ff056ae23da865a000)，顺带把vim的基本方法写一下咯，好懒还是用别人的好点[vim](https://www.cnblogs.com/yc8930143/p/5410734.html)
- 既然不会，那就从头开始再复习一遍咯
- 安装git，[下载](https://git-scm.com/)安装就OK；
```
安装好后设置你的github注册的邮箱和名字（这个好像不需要是github注册的邮箱）
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
```
$ mkdir learngit  //创建一个目录 仓库
$ cd learngit 
$ pwd
/Users/michael/learngit

$ git init  //通过git init命令把这个目录变成Git可以管理的仓库：

$ touch readme.txt    //创建一个.txt文件 (Linux中创建文件方法)

vi readme.txt    // 进入vim编辑页面  (按ESC退出编辑模式，a 进入编辑模式，具体百度vim，ZZ(大写)退出Vim编辑页面)

$ git add readme.txt   //用命令git add告诉Git，把文件添加到仓库：

$ git commit -m " 这里写描述"   // 用命令git commit告诉Git，把文件提交到仓库

我们把文件往Git版本库里添加的时候，是分两步执行的：
第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；
第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。

$ git status   //运行git status命令看看结果

$ git diff readme.txt // 查看修改的内容

$ git log // git log命令显示从最近到最远的提交日志

$git log --pretty=oneline // 简化显示提交日志

$git reset --hard HEAD^  // 回退到上一个版本

$ cat readme.txt  //查看内容

$ git reset --hard id  //id=版本号 指定回到未来的某个版本

$ git reflog //用git reflog查看命令历史

$ git checkout -- readme.txt 
命令git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：
一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
总之，就是让这个文件回到最近一次git commit或git add时的状态

$ git reset HEAD readme.txt  //git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本

$ rm test.txt   //用rm命令删除文件

$ git rm test.txt // 告诉git删除文件

上传GitHub
第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key： 
$ ssh-keygen -t rsa -C "youremail@example.com"

第二步：关联github上面的仓库，当然关联之前需要在GitHub上面创建一个仓库(最好和本地仓库一个名字)
$ git remote add origin git@github.com:michaelliao/learngit.git

第三步：push代码
$ git push -u origin master  // 用git push命令，实际上是把当前分支master推送到远程。
```
![git push](https://upload-images.jianshu.io/upload_images/3827288-2fd0e0c16906a3f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
$ git clone git@github.com:michaelliao/gitskills.git / / 用命令git clone克隆一个本地库

$ ls // 查看文件(没写git的都是Linux命令，下篇复习一下，用的不多)
```
![git clone](https://upload-images.jianshu.io/upload_images/3827288-62533bad87829982.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>  // 合并之前分支需要提交

删除分支：git branch -d <name>
```
##### git 删除文件
```
git rm filename //缓存和本地文件一起删除

git rm --cache filename //只删除缓存文件

删除带空格的文件
 git rm --cache file" "filename //空格用""英文双引号括起来

然后提交仓库 git commit  -m "delete  file"
```
