import sys
import cv2
import pytesseract
import pyttsx3

pytesseract.pytesseract.tesseract_cmd = 'Tesseract-OCR\\tesseract.exe'

img = cv2.imread(sys.argv[1])
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
txt = pytesseract.image_to_string(img)

print(txt)