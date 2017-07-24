//
//  NativeModule.m
//  BridgeTest
//
//  Created by Boris Barac on 7/23/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "NativeAlertDialog.h"
#import <UIKit/UIKit.h>

#import <React/RCTLog.h>

@implementation NativeAlertDialog

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showAlertWithTitle:(NSString *)title withCompletion:(RCTResponseSenderBlock)completion) {
  RCTLogInfo(@"Show alert with title '%@'", title);

  UIAlertController *alertViewController = [UIAlertController alertControllerWithTitle:title message:@"This is native code" preferredStyle:UIAlertControllerStyleAlert];
  UIAlertAction* okButton = [UIAlertAction actionWithTitle:@"Wooow It Works  🎉 👯"
                                                      style:UIAlertActionStyleDefault
                                                    handler:nil];
  [alertViewController addAction:okButton];

  [UIApplication.sharedApplication.keyWindow.rootViewController presentViewController:alertViewController animated:YES completion:nil];
  completion(@[@"Hello from the native side"]);
  RCTLogInfo(@"Native call done");
}

@end
