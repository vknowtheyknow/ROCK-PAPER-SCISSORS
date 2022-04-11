from practicum import find_mcu_boards, McuBoard, PeriBoard
from flask import Flask, render_template, redirect, url_for
 
devices = find_mcu_boards()
mcu = McuBoard(devices[0])
peri = PeriBoard(mcu)
app = Flask(__name__)

point = [0,0]
winnerR = 99
victory = 0
last = 0
def champ():
    global point
    if(point[0] == 3):
        point[0]=0
        point[1]=0
        return 1
    elif(point[1] == 3):
        point[0]=0
        point[1]=0
        return 2
    return 0;

def score():
    global point
    winnerR = peri.get_winner()
    if(winnerR == 1):
        point[0] += 1
    elif(winnerR == 2):
        point[1] += 1
    return winnerR,point

@app.route("/")
def index():
    victory,point = score()
    global last
    last = champ()
    hero = last
    if(last != 0):
        last = 0
        return render_template("winner.html",hero=hero)
    else:
        return render_template('index.html',winner=victory,point=point)


app.run(debug=True, port=8000, host="0.0.0.0")

