



/** 首页按钮点击方法替换 修改按钮背景颜色*/
defineClass('ViewController', {
            
            viewDidLoad:function() {
            self.ORIGviewDidLoad();
            var label = require('UILabel').alloc().initWithFrame({x:70, y:170, width:200, height:150});
            label.setText("我修改了一个巨大的错误，我能够hotfix，牛逼吧！");
            label.setNumberOfLines(0);
            label.setTextColor(require('UIColor').redColor());
            label.setBackgroundColor(require('UIColor').orangeColor());
            self.view().addSubview(label);
            
            label.mas__makeConstraints(block('MASConstraintMaker*', function(make) {
                                             
                                             make.leading().equalTo()(self.view()).offset()(40);
                                             make.trailing().equalTo()(self.view()).offset()(-40);
                                             make.top().equalTo()(self.view()).offset()(350);
                                             //                                            make.height().equalTo()(self.view()).multipliedBy()(0.3);
                                             make.height().mas__equalTo()(100);
                                             }));
            },
            
            setbtnBackgroudColor:function() {
            var btn = self.btn()
            var blueColor = require('UIColor').blueColor()
            btn.setBackgroundColor(blueColor)
            btn.setImage_forState(require('UIImage').imageNamed("znb 2"),1)

            },
            buttonAction: function(sender) {
            var tab = JPViewController.alloc().init()
            self.navigationController().pushViewController_animated(tab, YES)
        }
})


/** 更改，替换JPViewController页面的tabelview的点击方法*/
defineClass("JPViewController" , {
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            var tab = JPTableViewController.alloc().init()
            self.navigationController().pushViewController_animated(tab, YES)
            }
})

/** tableviewController*/
defineClass("JPTableViewController : UITableViewController <UIAlertViewDelegate>", {
 dataSource: function() {
   var data = self.getProp('data')
   if (data) return data;
   var data = [];
   for (var i = 0; i < 20; i ++) {
            data.push("cell from js " + i);
        }
            self.setProp_forKey(data, 'data')
            return data;
        },
            numberOfSectionsInTableView: function(tableView) {
            return 1;
        },
            tableView_numberOfRowsInSection: function(tableView, section) {
            return self.dataSource().count();
        },
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
        }
            cell.textLabel().setText(self.dataSource().objectAtIndex(indexPath.row()))
            return cell
        },
            tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
            return 50
        },
            
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            //返回上一页
//            self.navigationController().popViewControllerAnimated(YES)
            //返回首页
//            self.navigationController().popToRootViewControllerAnimated(YES)
            
            var alerView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles(
                                                                                                                             "Alert",
                                                                                                                             self.dataSource().objectAtIndex(indexPath.row()), 
                                                                                                                             self, 
                                                                                                                             "OK",
                                                                  null
                                                                                                                             )
            alerView.show()
            },
            
            alertView_clickedButtonAtIndex: function(alertView, buttonIndex) {
            console.log('clicked index ' + buttonIndex)
            }
          
})












