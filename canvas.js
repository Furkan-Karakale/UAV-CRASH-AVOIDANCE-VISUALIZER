var canvas = document.querySelector('canvas');

/*

⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣤⣤⣤⣤⣄⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣆⠄⠄⠄⠄
⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄⠄
⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠛⠛⠋⠁⣠⣾⣿⣿⣿⣿⡆⠄⣿⠆⠄⠄⠄⠄⠄⠄⠄

*/

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x:undefined,
    y:undefined
}

var colorArray= 
[
    '#ffaa33',
    '#99ffaa',
    '#00ff00',
    '#4411aa',
    '#ff1100'
];

function randomIntFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomColor(colors)
{
    return colors[Math.floor(Math.random()*colors.length)];
}
window.addEventListener('mousemove', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(event)
{
    canvas.width =  window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})
target = { x:0,y:0}
canvas.addEventListener('click', function(event) { 
    target.x = mouse.x;
    target.y = mouse.y;

}, false);

function init()
{
  
}

zeroPoint =  1 * new Date();



nokta1 = {x:canvas.width/2-200, y:canvas.height/2-40 , time:1000 , color:colorArray[0]}
nokta2 = {x:canvas.width/2, y:canvas.height/2 , time:2000 , color:colorArray[1]}
nokta3 = {x:canvas.width/2+200, y:canvas.height/2+80 , time:3000 , color:colorArray[2]}


function animate()
{
    requestAnimationFrame(animate)
    c.fillStyle = "rgba(255,255,255,1)";
    c.fillRect(0,0,innerWidth,innerHeight);

    onGoruPoints = [nokta1,nokta2,nokta3]
    tahmin = calculateFunc(onGoruPoints,3)
    time = 4000
    tahmin.time = 4000
    maxDistance = 0
    zamanAtlamasi = 1000;

    kacis = kacisAlgoritmasi(zamanAtlamasi,tahmin,onGoruPoints[2],target,150,10)

    x = (funcCal(tahmin.x,onGoruPoints[2].time+1000))
    y = (funcCal(tahmin.y,onGoruPoints[2].time+1000))
    drawBall(x,y,10,"#CCCCCC")

    drawBall(onGoruPoints[2].x,onGoruPoints[2].y,10,onGoruPoints[2].color)
    drawBall(onGoruPoints[1].x,onGoruPoints[1].y,10,onGoruPoints[1].color)
    drawBall(onGoruPoints[0].x,onGoruPoints[0].y,10,onGoruPoints[0].color)

    if(kacis)
    {
        drawBall( target.x - kacis[0]  , target.y - kacis[1] , 10 ,"#00FFFF")
    }

    drawBall(target.x,target.y,10,"#000000")

}

function kacisAlgoritmasi(zamanAtlamasi,tahmin,lastPoint,iha ,range,circleCount)
{
    kacis = [0,0]
    for(i=-zamanAtlamasi/3;i<=zamanAtlamasi;i+=zamanAtlamasi/circleCount)
    {
        x = (funcCal(tahmin.x,lastPoint.time+i))
        y = (funcCal(tahmin.y,lastPoint.time+i))
        
        drawBall(x,y,10,"#FF0000")
        drawCircle(x,y,range,"#FF0000")

        distance = Math.sqrt((x-iha.x)**2 + (y-iha.y)**2)
        data = range - distance
        angle = Math.atan2((y-iha.y), (x-iha.x)) * 180 / Math.PI + 180
        if(distance <= range)
        {
            if(data > maxDistance) maxDistance = data
            kacis[0] += data * Math.cos(angle/180*Math.PI)
            kacis[1] += data * Math.sin(angle/180*Math.PI)
        }
    }
    angle = Math.atan2( kacis[0] , kacis[1] ) * 180 / Math.PI + 180 
    kacis = [Math.sin(angle/180*Math.PI)*maxDistance , Math.cos(angle/180*Math.PI)*maxDistance]

    if(kacis[0] == 0 && kacis[1] == 0) return NaN
    else return kacis
}


function calculateFunc(noktalar,tier)
{
    layerxs = [];
    layerys = [];

    noktalar.forEach(nokta => {
        listX = [];
        listY = [];
        for(i=tier;i>0;i--)
        {   
            listX.push(nokta.time**(i-1));
            listY.push(nokta.time**(i-1));
        }
        listX.push(nokta.x);
        listY.push(nokta.y);
        layerxs.push (listX) 
        layerys.push (listY)
    })
    
    //*************************** X 

    findedX = funcFinder(layerxs)
    splitedX = funcSplit(findedX,tier)

    //*************************** Y 

    findedY = funcFinder(layerys)
    splitedY = funcSplit(findedY,tier)

    return {x:splitedX,y:splitedY}
}


// ShortCuts ************************

function funcFinder(layer)
{
    for(k=1; k<layer.length+1;k++) {
        layer.forEach( (l , i ) => {
        
            if( (i+k) < layer.length)
            {
                carpan = (- layer[i][k-1] / layer[i+1][k-1]);
                for(j = 0 ; layer[i].length>j ; j++)
                {
                    if(k-2<j) layer[i][j] = layer[i][j] + layer[i+1][j] * carpan;
                }

            }
            else if( (i+k) == layer.length)
            {
                bolen = layer[i][k-1];
                for(j = 0 ; layer[i].length>j ; j++)
                {
                    if(k-2<j) layer[i][j] = layer[i][j] / bolen;
                }
            }
        });
    }
    return layer;
}

function funcSplit(func,tier)
{
    output = [];
    for(var i=0;i<tier;i++)
    {
        toplam = 0;
        for(j=i;j>0;j--)
        {
            toplam += func[i][tier-j] * output[j-1]
        }
        output.push( func[i][tier] - toplam )
    }
    return output;
}

function funcCal(func,time)
{
    output = 0;
    func.forEach( (y, i)=> {
        output += y*(time**i);
    });
    return output;
}

function drawBall(x,y,r,color)
{
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.fillStyle = color;
    c.strokeStyle = color;
    c.fill();
    c.stroke();
}

function drawCircle(x,y,r,color)
{
    c.beginPath();
    c.arc(x, y, r, 0, 2 * Math.PI);
    c.strokeStyle = color;
    c.stroke();
}

function stroke (func)
{
    ctx.beginPath();
    
    ctx.strokeStyle = "#000000";
    for (var time = (func.time - zamanAtlamasi*3) ;time<= func.time + zamanAtlamasi*2; time+=10)
    {
        ctx.lineTo(funcCal(func.x,time) , funcCal(func.y,time));
    }
    ctx.stroke();
}

init();
animate();


