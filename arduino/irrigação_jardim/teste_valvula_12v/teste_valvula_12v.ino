int rele = 7;
int sensorUmidade = A0;
int valorMapeado = 0;

void setup() {
  Serial.begin(9600);
  // pinMode(rele, OUTPUT);
  pinMode(sensorUmidade, INPUT);

}

void loop() {
  // digitalWrite(rele, LOW);
  analogRead(sensorUmidade);
  

  valorMapeado = map(sensorUmidade, 0, 1023, 0, 255);
  analogWrite(sensorUmidade, valorMapeado);
  Serial.println(valorMapeado);
}
