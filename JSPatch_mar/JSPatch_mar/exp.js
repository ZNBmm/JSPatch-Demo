

// 在调用object-c之前需要调用require('className')
require('UIView')
var view = UIView.alloc().init()

// 可以使用, 分割,一次性导入多个类
require ('UIView, UIcolor')
var view = UIView.alloc().init()
var red = UIColor.redColor()

// 或者直接调用使用
require('UIView').alloc().init()

//2.调用OC方法

// 调用类方法
var redColor = UIColor.redColor();

// 调用实例方法
var view = UIView.alloc().init();
view.setNeedsLayout();

// 参数传递
// 跟在oc中传递参数一样
var view = UIView.alloc().init();
var superView = UIView.alloc().init()
superView.addSubview(view)

//Property
//获取/修改 Property 等于调用这个 Property 的 getter / setter 方法，获取时记得加 ():

view.setBackgroundColor(redColor);
var bgColor = view.backgroundColor();

// 方法名转化
// 多参数方法名使用 _ 分割;
var indexPath = require('NSIndexPath').indexPathForRow_inSection(0,1)

// 若OC原方法里包含_ , 在js中使用双下划线 __ 代替;
JPObject.__privateMethod

3.defineClass
API

defineClass(classDeclaration,[properties,] instanceMethods, classMethods)
//@param classDeclaration: 字符串，类名/父类名和Protocol
//@param properties: 新增property，字符串数组，可省略
//@param instanceMethods: 要添加或覆盖的实例方法
//@param classMethods: 要添加或覆盖的类方法

//覆盖方法
//1.defineClass 里定义 OC已经存在的方法即可覆盖,方法名规则与调用规则一样,使用 _ 分割

// OC
@implementation JPTestObject

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *) {

}

// JS
defineClass("JPTableViewController",{
            tableView_didSelectRowAtIndexPath:function(tableView,indexPath) {
            },
            })

//2.使用双下划线 __ 代表原OC方法名里的下划线 _ :

// OC
@implementation JPTableViewController
- (NSArray *) _dataSource {
}
@end

defineClass("JPTableViewController",{
            __dataSource:function() {
            },
            })

//3.在方法名前加ORIG 即可调用未覆盖前的OC原方法:
// OC
@implementation JPTableViewController
- (void)viewDidLoad {
}
@end

// JS

defineClass("JPTableViewController",{
            viewDidLoad:function() {
            self.ORIGviewDidLoad();
            }
})

// 覆盖类方法
//defineClass()  第三个参数就是要添加或覆盖的类方法，规则与上述覆盖实例方法一致：
// OC
@implementation JPTestObject
+ (void)shareInstance
{
}
@end

//JS
defineClass("JPTestObject",{实例方法
            
        },{
            shareInstance:function() {
            },
})

//覆盖 Category 方法
//
//覆盖 Category 方法与覆盖普通方法一样：

@implementation UIView (custom)
- (void)methodA {
}
+ (void)clsMethodB {
}
@end

defineClass("UIView",{
            methodA:function(){
            }
        },  {
            clsMethodB:function() {
            
            }
    })

//Super
//
//使用 self.super() 接口代表 super 关键字，调用 super 方法:

// JS
defineClass("JPTableViewController", {
            viewDidLoad: function() {
            self.super().viewDidLoad();
            }
            })



//Property
获取/修改 OC 定义的Property
用调用getter/setter方法 的方式获取/修改已在OC定义的Property:
// OC
@interface JPTableViewController
@property (nonatomic) NSArray *data;
@property (nonatomic) NSString *shareURL;
@property (nonatomic) NSString *shareTitle;
@end
@implementation JPTableViewController
@end












