 function janken (){
    const GU    = 1;
    const CHOKI = 2;
    const PA    = 3;

    function getHumHand(){
        let hum = prompt('半角数字で1〜3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
        hum = parseInt(hum, 10);
        if (hum !== GU && hum !== CHOKI && hum !== PA){
            return undefined;
        }else{
            return hum;
        }
    }

    let hum = getHumHand();
    if (!hum){
        alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
    } else {
        let com = getComHand();
        alert(getResultMsg(com, hum));
    }

    function getComHand(){
         return Math.floor(Math.random() * 3) + 1;
    }


    function getHandName(num){
        switch (num){
            case GU:
                return 'グー';
            case CHOKI:
                return 'チョキ';
            case PA:
                return 'パー';
        }
    }

    function getResult (com, hum){
        if (hum === com){
            return '結果はあいこでした。';
        }else if ((com === GU & hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)){
            return '勝ちました。';
        }else{
            return '負けました。';
        }
    }

    function getResultMsg(com, hum){
        return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName(com) + '」でした';
    }   
}
janken ();
    
