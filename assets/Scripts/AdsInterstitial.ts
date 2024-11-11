import { log } from 'cc';
import { director } from 'cc';
import { _decorator, Component, Node } from 'cc';
import { InterstitialAdClient } from 'db://admob/ads/client/InterstitialAdClient';
import { InterstitialPaidEventNTF } from 'db://admob/proto/PaidEventNTF';
const { ccclass, property } = _decorator;
const module = "[AdmobTestInterstitialAdts]";
@ccclass('AdsInterstitial')
export class AdsInterstitial extends Component {
    onClickLoadInterstitialAd() {

        let interstitialAdClient = new InterstitialAdClient();

        interstitialAdClient.load("ca-app-pub-3940256099942544/1033173712", {
            onAdLoaded: () => {
                log(module, "onAdLoaded");
                interstitialAdClient.show();
            },
            onAdFailedToLoad: (loadAdError) => {
                log(module, "onAdFailedToLoad, error: ", loadAdError);
                interstitialAdClient.destroy();
            },

            onPaidEvent(paidNTF:InterstitialPaidEventNTF) {
                // paid event, you can do your own analysis here.
                log(module, "onPaidEvent", paidNTF);
            },
        });
    }

    onNextScene() {
        director.loadScene("GamePlay");
    }
}

