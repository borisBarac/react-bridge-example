//
//  NativeView.m
//  BridgeTest
//
//  Created by Boris Barac on 7/26/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "NativeView.h"

@implementation NativeView {
  UILabel *label;
}

RCT_EXPORT_MODULE()

// required by react for this to work
- (UIView *)view {
  label = [UILabel new];
  label.text = @"This is a custom native view";
  label.font = [UIFont systemFontOfSize:20];
  label.backgroundColor = [UIColor redColor];

  return label;
}

@end
