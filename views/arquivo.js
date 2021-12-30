$data_notificacao = "select data_notificao from notificação where email = 'fulano.teste@gmail.com'"
$data_hoje = atualDate();

$diferencaDias = data_hoje - data_notificacao

$usuario_status = 0;

0 = ativo;
1 = anativo;

$possuiCartaoCredito = 0
0 = possui;
1 = não possui;

if($diferencaDias <= 5 && usuario_status == 0 && $possuiCartaoCredito == 0){
    "Seu aluguel está em dia"
}else if($diferencaDias > 5){
    "Enviar Email: Pague o Aluguel"
} else if ($diferencaDias > 10){
    "Vamos colocar seu nome no Serasa"
} else if ($diferencaDias > 30){
    "Seu nome foi incluido no Serasa"
}




