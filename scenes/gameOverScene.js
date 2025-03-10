//Classe GameOverScene (referente à cena de derrota).
class GameOverScene extends Phaser.Scene{
    constructor(){
        super({key: 'GameOverScene'}); //Chave da cena de derrota (id).
    }

    //Carregando as imagens da tela de derrota, além da fonte Poppins.
    preload(){
        this.load.image('background', 'assets/background.jpg');
        this.load.image('defeatMessage', 'assets/defeatMessage.png');
        let poppins = new FontFace('Poppins', 'url(assets/Poppins-Bold.ttf)');
            poppins.load().then((loadedFont) => {
                document.fonts.add(loadedFont);
        });

        this.load.image('playAgainButton', 'assets/playAgainButton.png');
        this.load.image('initialScreenButton', 'assets/initialScreenButton.png');
    }

    //Parâmetro data: está servindo para passar os pontos da cena GameScene para a cena GameOverScene.
    create(data){
        //Altura e largura do jogo.
        var gameWidth = this.scale.width;
        var gameHeight = this.scale.height;

        //Adicionando imagem de fundo à tela de derrota do joguinho.
        this.background = this.add.image(gameWidth/2, gameHeight/2, 'background');
        this.background.setDisplaySize(gameWidth, gameHeight);

        //Mensagem de derrota.
        this.defeatMessage = this.add.image(gameWidth/2, gameHeight/2.8, 'defeatMessage');

        //Mostrando quantas pedras preciosas o jogador coletou.
        this.add.text(gameWidth / 2, gameHeight /1.65, `Pedras preciosas coletadas: ${data.points}`, {fontSize: "25px",fontFamily: "Poppins", color: "#ffffff"}).setOrigin(0.5);
        
        //Botão "jogar novamente" na tela de derrota.
        var restartButton = this.add.image(gameWidth / 2, gameHeight/1.45, 'playAgainButton').setScale(0.6).setInteractive();

        //Quando o botão de reiniciar é clicado, o jogador pode voltar ao jogo.
        restartButton.on("pointerdown", () => {
            this.scene.start("GameScene"); 
        });

        //Botão para voltar à tela inicial.
        this.initialScreenButton = this.add.image(gameWidth / 2, gameHeight/1.25, 'initialScreenButton').setScale(0.6).setInteractive();

        //Quando o botão "ir à tela inicial" é clicado, o jogador volta à tela inicial.
        this.initialScreenButton.on("pointerdown", () => {
            this.scene.start("InitialScene"); 
        });
    }
}