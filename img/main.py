#Automatically download images from the Internet
#pip install pyautogui
#x=5
#while x==5:
#    print(p.position())

import pyautogui as p
import time

def download(name):
    search = name + " flag"
    print(search)

    p.moveTo(2648, 350, duration=3)
    time.sleep(1)
    p.click()
    time.sleep(1)
    p.write(search)
    time.sleep(0.5)
    p.press('enter')
    time.sleep(0.5)
    p.moveTo(2522,477, duration=2)
    p.click()
    p.moveTo(2486,881,duration=2)
    p.click(button='right')
    time.sleep(2)
    p.moveTo(2400, 1000, duration=2)
    p.click()
    time.sleep(2)
    p.write(name)
    p.moveTo(2545, 1273, duration=2)
    p.click()
    time.sleep(1)
    p.moveTo(2648, 350, duration=3)
    time.sleep(0.5)
    p.click()
    time.sleep(0.5)
    p.hotkey('ctrl', 'a')
    time.sleep(0.2)
    p.press('delete')
    time.sleep(0.5)


a = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda",
  "Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
  "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso",
  "Burundi","Cabo_Verde","Cambodia","Cameroon","Canada",
  "Central_African_Republic","Chad","Chile","China","Colombia","Comoros",
  "Congo_Brazzaville","Congo_Kinshasa","Costa_Rica","Croatia","Cuba","Cyprus",
  "Czechia","Denmark","Djibouti","Dominica","Dominican_Republic","Ecuador","Egypt",
  "El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
  "Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
  "Grenada","Guatemala","Guinea","Guinea_Bissau","Guyana","Haiti","Honduras",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
  "Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
  "Marshall_Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova",
  "Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria",
  "North_Korea","North_Macedonia","Norway","Oman","Pakistan","Palau","Palestine",
  "Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia",
  "Saint_Vincent_and_the_Grenadines","Samoa","San_Marino",
  "Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles",
  "Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia",
  "South_Africa","South_Korea","South_Sudan","Spain","Sri_Lanka","Sudan",
  "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
  "Thailand","Timor_Leste","Togo","Tonga","Trinidad_and_Tobago","Tunisia",
  "Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates",
  "United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu",
  "Vatican_City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
]
for i in a:
    download(i)
    time.sleep(2)