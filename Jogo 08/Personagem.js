function Personagem (x,mapa){
  this.imagem = new Image();
  this.imagem.src = "personagem.png";
  this.height = 40;
  this.width = 40;
  this.SIZE = 40;
  this.limiteBomba = 1;
  this.tamanhoBomba =2;
  this.velocidadeDetonacao = 0;
  this.vida=1;

  //se for jogador 1
  if(x==1){
    this.vx = this.gx = 1;
    this.vy = this.gy = 1;
    this.x=this.gx*mapa.SIZE;
    this.y=this.gy*mapa.SIZE;
    this.color ="blue";
  }
  if(x==2){
    this.vx = this.gx = mapa.columns-2;
    this.vy = this.gy = mapa.rows -2;
    this.x=this.gx*mapa.SIZE;
    this.y=this.gy*mapa.SIZE;
    this.color ="green";
  }
}

Personagem.prototype.moverNoMapa = function (map, dt) {
  this.gx = Math.floor(this.x/map.SIZE);
  this.gy = Math.floor(this.y/map.SIZE);

  //direita
  if(this.vx > 0 && map.cells[this.gy][this.gx+1]==1){
    this.x += Math.min((this.gx+1)*map.SIZE - (this.x+this.SIZE/2), this.vx*dt);
  } //esquerda
  else if(this.vx < 0 && map.cells[this.gy][this.gx-1]==1){
    this.x += Math.max((this.gx)*map.SIZE - (this.x-this.SIZE/2), this.vx*dt);
  }
  //sem pressionar
  else {
    this.x = this.x + this.vx*dt;
  }


  if(this.vy >0 && map.cells[this.gy+1][this.gx]==1){
      this.y += Math.min((this.gy+1)*map.SIZE - (this.y+this.SIZE/2),this.vy*dt);
    } else if( this.vy<0 && map.cells[this.gy-1][this.gx]==1){
      this.y += Math.max((this.gy)*map.SIZE - (this.y-this.SIZE/2),this.vy*dt);
    } else {
      this.y = this.y + this.vy*dt;
    }

  };

  Personagem.prototype.mover = function (map, dt) {
  this.gx = Math.floor(this.vx);
  this.gy = Math.floor(this.vy);
  this.x =  this.gx * map.SIZE;
  this.y =  this.gy * map.SIZE;
};


  Personagem.prototype.desenhar = function (ctx){
    //ctx.fillStyle = this.color;
    //ctx.fillRect(this.x,this.y,this.width,this.height);
    if(this.color=="blue"){
      ctx.drawImage(this.imagem,48,0,48,48,this.x,this.y,this.width,this.height);
    } else {
      ctx.drawImage(this.imagem,0,0,48,48,this.x,this.y,this.width,this.height);
    }
  };
