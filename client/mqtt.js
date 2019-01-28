const mqttClient = new Paho.MQTT.Client(
  'ws://iot.eclipse.org/ws',
  'test-client'
);
console.dir(mqttClient);

export default mqttClient;
