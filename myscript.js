function openProfile() {
    document.getElementById("more").style.display = "block";
  }

function closeProfile() {
    document.getElementById("more").style.display = "none";
  }

  
  function jpnToEng() {
      document.getElementById('japanese').style.display="none";
      document.getElementById('english').style.display="block";
    }
    function engToJpn() {
        document.getElementById('english').style.display="none";
        document.getElementById('japanese').style.display="block";
    }
    
    // ひとつのボタンで翻訳を実装する用の関数
    // うまく動作できなかったので一旦保留
    function translate() {
        const careerText = document.getElementById("translate");
        // 操作するテキストのidを取得する
        const careerTextClass = careerText.getAttribute("class");
        // idのクラスを取得
    
        if(careerTextClass == "jpn"){
            careerText.classList.remove('jpn');
            careerText.classList.add('eng');
    
            document.getElementById('japanese').style.display="none";
            document.getElementById('english').style.display="block";
        } else {
            careerText.classList.remove('eng');
            careerText.classList.add('jpn');
    
            document.getElementById('japanese').style.display="block";
            document.getElementById('english').style.display="none";
        }
    }
