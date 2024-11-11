import { director } from 'cc';
import { log } from 'cc';
import { Label } from 'cc';
import { _decorator, Component, Node, sys ,native} from 'cc';
import { RewardedAdClient } from 'db://admob/ads/client/RewardedAdClient';
import { AdFormat, getTestAdUnitId } from 'db://admob/misc/TestUnitId';
import { LoadRewardedAdACK } from 'db://admob/proto/RewardedAd';
const { ccclass, property } = _decorator;
const module = "[AdmobTestRewarded]"
@ccclass('AdController')
export class AdController extends Component {// Phương thức gọi quảng cáo Interstitial
  
    protected start(): void {
        // Hide the reward earn dialog on start;
        let rewardEarnNode: Node = this.node.getChildByName("DialogRewarded");
        rewardEarnNode.active = false;
    }

    onClickLoadRewardedAd() {
        log(module, "onClickLoadRewardedAd");

        let rewardEarnNode: Node = this.node.getChildByName("DialogRewarded");
        let rewardedAdClient = new RewardedAdClient();

        rewardedAdClient.load(getTestAdUnitId(AdFormat.Rewarded), {
            onAdLoaded: () => {
                log(module, "onClickLoadRewardedAd", "onAdLoaded");
                rewardedAdClient.show();
            },
            onAdFailedToLoad: (loadAdError) => {
                log(module, "onClickLoadRewardedAd", "onAdFailedToLoad", loadAdError);
            },
            onEarn: (rewardType, amount) => {
                log(module, "onClickLoadRewardedAd", `onEarn, rewardType = ${rewardType}, amount = ${amount}`);
                rewardEarnNode.active = true;
                const label = rewardEarnNode.getChildByName("Tip").getComponent(Label);
                label.string = `You have won the reward, type = ${rewardType}, amount = ${amount}!`;
            },
            onAdDismissedFullScreenContent: () => {
                log(module, "onAdDismissedFullScreenContent");
                rewardedAdClient.destroy();
            },
            onAdFailedToShowFullScreenContent: (adError) => {
                log(module, "onAdFailedToShowFullScreenContent, adError: ", adError);
                rewardedAdClient.destroy();
            },
            onPaidEvent(paidNTF) {
                log(module, "onPaidEvent", paidNTF);
            },
        })

    }

    onNextScene() {
        director.loadScene("GamePlay");
    }

    onBtnClickCloseRewardDialogue() {
        let rewardEarnNode: Node = this.node.getChildByName("DialogRewarded");
        rewardEarnNode.active = false;
    }
}

