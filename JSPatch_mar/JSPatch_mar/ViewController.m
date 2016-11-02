//
//  ViewController.m
//  JSPatch_mar
//
//  Created by mac on 16/11/1.
//  Copyright © 2016年 mac. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (nonatomic, weak) UIButton *btn;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typicallfrom anib.
    
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    UIButton *button = [[UIButton alloc] init];
    self.btn = button;
    [self.view addSubview:button];
    button.frame = CGRectMake(50, 200, self.view.frame.size.width - 100, 100);
    [button setTitle:@"进入界面" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(buttonAction:) forControlEvents:UIControlEventTouchUpInside];
    [self setbtnBackgroudColor];
    
    NSLog(@"%@",NSForegroundColorAttributeName);
}


// 在index.js中修改按钮背景颜色
- (void)setbtnBackgroudColor {
    self.btn.backgroundColor = [UIColor orangeColor];
}
/**
 
 按钮本来输出sss的
 但是通过JSPatch替换了这个方法
 直接查看index.js文件
 */
- (void)buttonAction:(UIButton *)sender {
    NSLog(@"进不去界面");
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
@end
