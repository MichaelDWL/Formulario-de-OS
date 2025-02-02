function enviarWpp() {
    var nome = document.getElementById("nome").value;
    var setor = document.getElementById("setor").value;
    var ramal = document.getElementById("ramal").value;
    var local = document.getElementById("local").value;
    var P_referencia = document.getElementById("P_referencia").value;
    var solicitacao = document.getElementById("solicitacao").value;
    var urgencia = document.getElementById("urgencia").value;
    // var texto = "Nome: ${nome}\nSetor:${setor}\nRamal:${ramal}\nLocal:${local}\nSolicitacao:${solicitacao}\nUrgecia:${urgencia}";
    // var numeroWhatsapp = "5531992214044";
    var url = "https://wa.me/553195321255?text=" //ADICIONE SEU N°

+ "*Solicitação*" + "%0a" 
+ "%0a"
+ "*👤-Solicitante*: " + nome + "%0a"
+ "*Setor*: " + setor + "%0a"
+ "*Ramal*: " + ramal + "%0a"
+ "*Local*: " + local + "%0a"
+ "*Ponto de referencia*: " + P_referencia + "%0a"
+ "*Solicitação*: " + solicitacao + "%0a"
+ "*Urgência*: " + urgencia; 

window.open(url, '_blank').focus();

}
