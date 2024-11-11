/*
 Copyright (c) 2023-2024 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

import { AdError } from "../ads/alias/TypeAlias";
import { Base } from "./Base";
import { ILoadAdError } from "./ICallbackNTF";
import { _decorator  } from "cc";
const { ccclass, property } = _decorator;


@ccclass("LoadRewardedInterstitialAdREQ")
export class LoadRewardedInterstitialAdREQ extends Base {

}

@ccclass("LoadRewardedInterstitialAdACK")
export class LoadRewardedInterstitialAdACK extends Base {

}

@ccclass("ShowRewardedInterstitialAdREQ")
export class ShowRewardedInterstitialAdREQ extends Base {

}

@ccclass("ShowRewardedInterstitialAdACK")
export class ShowRewardedInterstitialAdACK extends Base {

}

@ccclass("RewardedInterstitialAdLoadCallbackNTF")
export class RewardedInterstitialAdLoadCallbackNTF extends Base implements ILoadAdError {
    method?: string;
    loadAdError?: AdError;
}

@ccclass("OnUserEarnedRewardedInterstitialListenerNTF")
export class OnUserEarnedRewardedInterstitialListenerNTF extends Base {
    rewardType: string;
    rewardAmount: number;
}