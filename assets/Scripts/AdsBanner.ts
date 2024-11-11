import { Button } from 'cc';
import { Toggle } from 'cc';
import { director } from 'cc';
import { log } from 'cc';
import { _decorator, Component, Node } from 'cc';
import { LoadAdError } from 'db://admob/ads/alias/TypeAlias';
import { BannerClient } from 'db://admob/ads/client/BannerClient';
import { BannerAlignment, BottomCenter, TopCenter } from 'db://admob/misc/BannerAlignment';
import { BannerSize } from 'db://admob/misc/BannerSize';
import { BannerSizeType } from 'db://admob/misc/BannerSizeType';
import { AdFormat, getTestAdUnitId } from 'db://admob/misc/TestUnitId';
import { BannerPaidEventNTF } from 'db://admob/proto/PaidEventNTF';
const { ccclass, property } = _decorator;
const module = "[AdmobTestBanner]"
@ccclass('AdsBanner')
export class AdsBanner extends Component {
    @property(Button)
    buttonShowBanner: Button;

    @property(Button)
    buttonHideBanner: Button;

    bannerClient: BannerClient;

    currentAlignment : BannerAlignment[] = BottomCenter;

    start() {
        this.bannerClient?.destroy();
    }

    onDestroy() {
        this.bannerClient?.destroy();
    }

    onAlignmentToggleChanged(toggle:Toggle){
        this.currentAlignment = toggle.isChecked ? TopCenter : BottomCenter;
    }

    onClickLoadBanner() {
        if (this.bannerClient != null) {
            log("duplicated create of banner client, destroy the former banner client");
            this.bannerClient.destroy();
        }
        this.bannerClient = new BannerClient();
        this.bannerClient.load("ca-app-pub-3940256099942544/9214589741", {

            onAdImpression: () => {
                log(module, "onAdImpression", "onAdImpression", this);
            },

            onAdClicked: () => {
                log(module, "onClickLoadBanner", "onAdClicked")
            },

            onAdLoaded: () => {
                log(module, "onClickLoadBanner", "onAdLoaded")
            },

            onAdFailedToLoad: (loadError: LoadAdError) => {
                log(module, "onClickLoadBanner", "onFailedToLoad", `${loadError}`);
            },

            onPaidEvent(paidNTF: BannerPaidEventNTF) {
                // paid event, you can do your own analysis here.
                log(module, "onPaidEvent", paidNTF);
            },

        }, { size: BannerSize.BANNER, alignments: this.currentAlignment, type: BannerSizeType.Builtin });
    }

    onClickDestroyBanner() {
        log(module, "onClickDestroyBanner");
        this.bannerClient?.destroy();
    }

    onNextScene() {
        director.loadScene("GamePlay");
    }

    onClickLoadLandscape() {
        if (this.bannerClient != null) {
            log("duplicated create of banner client, destroy the former banner client");
            this.bannerClient.destroy();
        }
        this.bannerClient = new BannerClient();
        this.bannerClient.load("ca-app-pub-3940256099942544/9214589741", {
            onAdImpression: () => {
                log(module, "onAdImpression", "onAdImpression", this);
            },

            onAdClicked: () => {
                log(module, "onClickLoadBanner", "onAdClicked")
            },

            onAdLoaded: () => {
                log(module, "onClickLoadBanner", "onAdLoaded")
            },

            onAdFailedToLoad: (loadError: LoadAdError) => {
                log(module, "onClickLoadBanner", "onAdFailedToLoad", `${loadError}`);
            },

            onPaidEvent(paidNTF: BannerPaidEventNTF) {
                // paid event, you can do your own analysis here.
                log(module, "onPaidEvent", paidNTF);
            },

        }, { alignments: this.currentAlignment, type: BannerSizeType.Landscape });
    }

    onClickLoadPortrait() {
        if (this.bannerClient != null) {
            log("duplicated create of banner client, destroy the former banner client");
            this.bannerClient.destroy();
        }
        this.bannerClient = new BannerClient();
        this.bannerClient.load("ca-app-pub-3940256099942544/9214589741", {
            onAdImpression: () => {
                log(module, "onAdImpression", "onAdImpression", this);
            },

            onAdClicked: () => {
                log(module, "onClickLoadBanner", "onAdClicked")
            },

            onAdLoaded: () => {
                log(module, "onClickLoadBanner", "onAdLoaded")
            },

            onAdFailedToLoad: (loadError: LoadAdError) => {
                log(module, "onClickLoadBanner", "onAdFailedToLoad", `${loadError}`);
            },

            onPaidEvent(paidNTF: BannerPaidEventNTF) {
                // paid event, you can do your own analysis here.
                log(module, "onPaidEvent", paidNTF);
            },

        }, { alignments: this.currentAlignment, type: BannerSizeType.Portrait });
    }

    
    onClickLoadCurrent() {
        if (this.bannerClient != null) {
            log("duplicated create of banner client, destroy the former banner client");
            this.bannerClient.destroy();
        }
        this.bannerClient = new BannerClient();
        this.bannerClient.load("ca-app-pub-3940256099942544/9214589741", {
            onAdImpression: () => {
                log(module, "onAdImpression", "onAdImpression", this);
            },

            onAdClicked: () => {
                log(module, "onClickLoadBanner", "onAdClicked")
            },

            onAdLoaded: () => {
                log(module, "onClickLoadBanner", "onAdLoaded")
            },

            onAdFailedToLoad: (loadError: LoadAdError) => {
                log(module, "onClickLoadBanner", "onAdFailedToLoad", `${loadError}`);
            },

            onPaidEvent(paidNTF: BannerPaidEventNTF) {
                // paid event, you can do your own analysis here.
                log(module, "onPaidEvent", paidNTF);
            },

        }, { alignments: this.currentAlignment, type: BannerSizeType.Current });
    }
}

