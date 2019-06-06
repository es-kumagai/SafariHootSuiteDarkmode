/*
 ストリームヘッダーは、ストリームを表示する都度、動的に生成され、
 かつ、設定されるスタイル名が変更されることがあるため、
 スクリプトで動的にダークモードを反映させます。
 */
document.addEventListener("DOMContentLoaded", function(event) {
                          
                          prepareForAutoApplyingDarkmode();
                          applyDarkmode();
                          });

function applyDarkmode() {
    
    applyDarkmodeToStreamHeader();
    applyDarkmodeToTweetNewStyleReplies();
}

function applyDarkmodeToTweetNewStyleReplies() {

    const modalDialogNode = document.getElementById('modalDialog');
    const characterCounterNode = modalDialog.getElementsByClassName('-characterCounterArea')[0];
    
    characterCounterNode.classList.add('es-character-counter-text');
}

// ナビゲーションのアイコンをクリックする度に、ダークモードを再反映するようにします。
function prepareForAutoApplyingDarkmode() {
    
    const containerNode = document.getElementById('container');
    const slidebarNavMenuNode = containerNode.getElementsByClassName('sidebarNavMenu')[0];
    const anchorNodes = slidebarNavMenuNode.getElementsByTagName('a');
    
    // 適切なボタンに、適切なダークモード切り替え関数を追加して、
    // 他の項目に移動してもダークモードが反映されるようにします。
    for (let i = 0; i != anchorNodes.length; ++i) {
        
        const anchorNode = anchorNodes[i];
        let applyingFunction = null;
        
        switch (anchorNode.getAttribute('data-tracking-action')) {
                
            case 'dashboard_streams_clicked':
                applyDarkmodeFunction = applyDarkmodeToStreamHeader;
        }

        if (applyDarkmodeFunction) {

            anchorNode.addEventListener('click', applyDarkmodeFunction);
        }
    }
}

// ストリームヘッダーにダークモードを適用します。
function applyDarkmodeToStreamHeader() {

    const headerNode = document.getElementById('streamsHeader');

    // ストリームヘッダーは遅延生成されるため、生成されるまで試行します。
    if (headerNode) {

        const bannerNode = headerNode.getElementsByTagName('div')[0].getElementsByTagName('div')[0];
        const buttonNodes = headerNode.getElementsByTagName('button');
    
        // ヘッダーの背景色を変更するためにクラス属性を割り当てます。
        // 設定される標準のクラス属性が時折変化するため、それに対する対応策です。
        bannerNode.classList.add('es-header-darkmode');
        
        // ヘッダー内のボタンのサイズを変更するためにクラス属性を割り当てます。
        // 設定される標準のクラス属性が時折変化するため、それに対する対応策です。
        for (let i = 0; i != buttonNodes.length; ++i) {
            
            const buttonNode = buttonNodes[i];
            
            buttonNode.classList.add('es-header-darkmode-button');
        }
    }
    else {
        
        setTimeout(applyDarkmodeToStreamHeader, 500);
    }
}
