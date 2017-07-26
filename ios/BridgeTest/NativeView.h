//
//  NativeView.h
//  BridgeTest
//
//  Created by Boris Barac on 7/26/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTViewManager.h>

@interface NativeView : RCTViewManager

- (UIView *)view;

@end
