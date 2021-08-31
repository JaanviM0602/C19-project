var PLAY = 1;
var END = 0;
var gameState = PLAY;

var candyCorn, candyCornImg, candyCornG;
var candyFloss, candyFlossImg, candyFlossG;
var chocolateBar, chocolateBarImg, chocolate_barG;
var gummyBear, gummyBearImg, gummyBearG;
var jellyBeans, jellyBeansImg, jellyBeansG;
var lolipops, lolipopsImg, lolipopsG;
var pepperMint, pepperMintImg, pepper_mintG;
var sweet, sweetImg, sweetG;

var bg,bgImg;
var broccoli, broccoliImg, broccoliG;
var invisibleGround;
var player,playerImg

var score;

function preload(){
    candyCorn = loadImage("images/candy_corn.png");
    candyFloss = loadImage("images/candy_floss.png");
    chocolateBar = loadImage("images/chocolate_bar.png");
    gummyBear = loadImage("images/gummyBear.png");
    jellyBeans = loadImage("images/jellyBeans.png");
    lolipops = loadImage("images/lolipops.png");
    pepperMint = loadImage("images/pepper_mint.png");
    sweet = loadImage("images/sweet.png");
    broccoli = loadImage("images/sprite_0.png");
    playerImg = loadImage("images/player.png");
    bgImg = loadImage("images/background.JPG");

}

function setup() {
    createCanvas(600,300);
    

    player = createSprite(50,180,20,50);
    player.addImage("playerImg", playerImg);
    player.scale = 0.5

    bg = createSprite(300,100);
    bg.addImage("bg", bgImg);
    bg.x = bg.width /2;
    bg.scale = 2;
    bg.width = 1200

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;  
    
    player = createSprite(50,180,20,50);
    player.addImage("playerImg", playerImg);
    player.scale = 0.5
    
    

    player.setCollider("rectangle",0,0,0,80,60);

    candyCorn = createSprite();
    candyFloss = createSprite();
    chocolateBar = createSprite();
    gummyBear = createSprite();
    jellyBeans = createSprite();
    lolipops = createSprite();
    pepperMint = createSprite();
    sweet = createSprite();
    broccoli = createSprite();

    candyCornG = new Group();
    candyFlossG = new Group();
    chocolate_barG = new Group();
    gummyBearG = new Group();
    jellyBeansG = new Group();
    lolipopsG = new Group();
    pepper_mintG = new Group();
    sweetG = new Group();
    broccoliG = new Group();

    candyCornG.add(candyCorn);
    candyFlossG.add(candyFloss);
    chocolate_barG.add(chocolateBar);
    gummyBearG.add(gummyBear);
    jellyBeansG.add(jellyBeans);
    lolipopsG.add(lolipops);
    pepper_mintG.add(pepperMint);
    sweetG.add(sweet);
    broccoliG.add(broccoli);

    score = 0;

}

function draw() {
    background(0);
    text("score:"+ score, 7900, 750);
    if(gameState === PLAY) {
        bg.velocityX = -4;

        if(bg.x < 0) {
            bg.x = bg.width /2;
        }

        if(keyDown("space")&& player.y >=100) {
            player.velocityY = -10;
        } 

        player.velocityY = player.velocityY + 0.5;

         

        if(candyCornG.isTouching(player)) {
            candyCornG.destroyEach();
            score = score + 5;
        }
        if(candyFlossG.isTouching(player)) {
            candyFlossG.destroyEach();
            score = score + 5;
        }
        if(chocolate_barG.isTouching(player)) {
            chocolateBarG.destroyEach();
            score = score + 5;
        }
        if(gummyBearG.isTouching(player)) {
            gummyBearG.destroyEach();
            score = score + 5;
        }
        if(jellyBeansG.isTouching(player)) {
           jellyBeansG.destroyEach();
            score = score + 5;
        }
        if(lolipopsG.isTouching(player)) {
            lolipopsG.destroyEach();
            score = score + 5;
        }
        if(pepper_mintG.isTouching(player)) {
            pepperMintG.destroyEach();
            score = score + 5;
        }
        if(sweetG.isTouching(player)) {
            sweetG.destroyEach();
            score = score + 5;
        }
        if(broccoliG.isTouching(player)) {
            gamestate = END;
        }  
    }
     else if (gamestate === END) {
         bg.velocityX = 0;

         candyCornG = destroyEach();
         candyFlossG =  destroyEach();
         chocolate_barG =  destroyEach();
         gummyBearG =  destroyEach();
         jellyBeansG =  destroyEach();
         lolipopsG =  destroyEach();
         pepper_mintG =  destroyEach();
         sweetG =  destroyEach();
         broccoliG =  destroyEach();

         candyCornG = setVelocityXEach();
         candyFlossG =  setVelocityXEach();
         chocolate_barG =  setVelocityXEach();
         gummyBearG = setVelocityXEach();
         jellyBeansG =  setVelocityXEach();
         lolipopsG =  setVelocityXEach();
         pepper_mintG =  setVelocityXEach();
         sweetG =  setVelocityXEach();
         broccoliG =  setVelocityXEach();

         player.velocityY = 0
     }
     

    player.collide(invisibleGround);

    createCandyCorn();
    createCandyFloss();
    createChocoBar();
    createGummyBear();
    createJellyBeans();
    createLolipops();
    createPepperMint();
    createSweet();
    createBroccoli();
    drawSprites();
}

function createCandyCorn() {
    if (World.frameCount % 200 == 0) {
        var candyCorn = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        candyCorn.addImage("candyCorn",candyCornImg);
        candyCorn.scale = 0.5;
        candyCorn.velocityX = -6;
        candyCornG.add(candyCorn);
    }
}

function createCandyFloss() {
    if (World.frameCount % 320 == 0) {
        var candyFloss = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        candyFloss.addImage("candy0",candyFlossImg);
        candyFloss.scale = 0.5;
        candyFloss.velocityX = -6;
        candyFlossG.add(candyFloss);
    }
}

function createChocoBar() {
    if (World.frameCount % 410 == 0) {
        var chocolateBar = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        chocolateBar.addImage("candy1",chocolateBarImg);
        chocolateBar.scale = 0.5;
        chocolateBar.velocityX = -6;
        chocolate_barG.add(chocolateBar);
    }
}

function createGummyBear() {
    if (World.frameCount % 530 == 0){
        var gummyBear = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        gummyBear.addImage("candy2",gummyBearImg);
        gummyBear.scale = 0.5;
        gummyBear.velocityX = -6;
        gummyBearG.add(gummyBear);
    }
}

function createJellyBeans() {
    if (World.frameCount % 620 == 0) {
        var jellyBeans = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        jellyBeans.addImage("candy3",jellyBeansImg);
        jellyBeans.scale = 0.5;
        jellyBeans.velocityX = -6;
        jellyBeansG.add(jellyBeans);
    }
}

function createLolipops() {
    if (World.frameCount % 710 == 0) {
        var lolipops= createSprite(Math.round(random(50,width-50), 40, 10, 10));
        lolipops.addImage("candy4",lolipopsImg);
        lolipops.scale = 0.5;
        lolipops.velocityX = -6;
        lolipopsG.add(lolipops);
    }
}

function createPepperMint() {
    if (World.frameCount % 200 == 0) {
        var pepperMint = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        pepperMint.addImage("candy5",pepper_mintG);
        pepperMint.scale = 0.5;
        pepperMint.velocityX = -6;
        pepper_mintG.add(pepperMint);
    }
}

function createSweet() {
    if (World.frameCount % 200 == 0) {
        var sweet = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        sweet.addImage("candy6",sweetImg);
        sweet.scale = 0.5;
        sweet.velocityX = -6;
        sweetG.add(sweet);
    }
}

function createBroccoli() {
    if (World.frameCount % 200 == 0) {
        var broccoli = createSprite(Math.round(random(50,width-50), 40, 10, 10));
        broccoli.addImage("broccoli",broccoliImg);
        broccoli.scale = 0.5;
        broccoli.velocityX = -6;
        broccoliG.add(broccoli);
    }
}


