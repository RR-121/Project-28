const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, treeImg, stone, boyImg, boy, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, catapult;

function preload() {
	boyImg = loadImage("Plucking Mangoes/boy.png");
	//treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 550, 1200, 100);

	//tree = new Tree(1000, 275, 400, 500);

	stone = new Stone(150, 400, 50);

	/*tree = createSprite(1000, 275, 300, 500);
	tree.addImage("Tree", treeImg);
	tree.scale = 0.4;*/

	boy = createSprite(200, 460, 10, 10);
	boy.addImage("Boy", boyImg);
	boy.scale = 0.1;

	m1 = new Mango(1000, 200, 50);
	m2 = new Mango(1050, 180, 40);
	m3 = new Mango(850, 170, 45);
	m4 = new Mango(880, 240, 55);
	m5 = new Mango(910, 180, 52);
	m6 = new Mango(1020, 60, 48);
	m7 = new Mango(950, 110, 42);
	m8 = new Mango(1150, 170, 54);
	m9 = new Mango(1110, 150, 47);
	m10 = new Mango(1000, 130, 56);
	m11 = new Mango(920, 60, 49);
	m12 = new Mango(1130, 230, 41);
	//Every Mango is unique 

	tree = new Tree(1000, 550);

	//Constraint.create(stone.body, {x : 150, y : 400});
	catapult = new ElasticConstraint(stone.body, {x : 150, y : 400});

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("dodgerBlue");
  
	Engine.update(engine);

	ground.display();
	//tree.display();
	tree.display();
	catapult.display();

	drawSprites();
	stone.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();
	m11.display();
	m12.display();

	detectCollision(stone, m1);
	detectCollision(stone, m2);
	detectCollision(stone, m3);
	detectCollision(stone, m4);
	detectCollision(stone, m5);
	detectCollision(stone, m6);
	detectCollision(stone, m7);
	detectCollision(stone, m8);
	detectCollision(stone, m9);
	detectCollision(stone, m10);
	detectCollision(stone, m11);
	detectCollision(stone, m12);
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x : 150, y : 400});
		catapult.attach(stone.body);
	}
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased() {
	catapult.fly();
}

function detectCollision(firstBody, secondBody) {
	var pos1 = firstBody.body.position;
	var pos2 = secondBody.body.position;

	var length = dist(pos1.x, pos1.y, pos2.x, pos2.y);

	if(length <= firstBody.radius + secondBody.radius) {
		Matter.Body.setStatic(secondBody.body, false);
	}
}